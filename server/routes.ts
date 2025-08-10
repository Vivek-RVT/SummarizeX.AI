import type { Express } from "express";
import { createServer, type Server } from "http";
import multer from "multer";
// PDF parsing temporarily disabled - will implement with different library
import { storage } from "./storage";
import { summarizeRequestSchema, type SummarizeResponse } from "@shared/schema";
import { z } from "zod";

const upload = multer({ 
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 } // 10MB limit
});

export async function registerRoutes(app: Express): Promise<Server> {
  // HuggingFace API configuration
  const HUGGINGFACE_API_KEY = process.env.HUGGINGFACE_API_KEY || process.env.HF_API_KEY;
  const HUGGINGFACE_API_URL = "https://api-inference.huggingface.co/models/facebook/bart-large-cnn";

  async function callHuggingFaceAPI(text: string): Promise<string> {
    if (!HUGGINGFACE_API_KEY) {
      throw new Error("HuggingFace API key is not configured");
    }

    const response = await fetch(HUGGINGFACE_API_URL, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${HUGGINGFACE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inputs: text,
        parameters: {
          max_length: 150,
          min_length: 50,
          do_sample: false,
        },
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`HuggingFace API error: ${response.status} - ${error}`);
    }

    const result = await response.json();
    if (Array.isArray(result) && result[0]?.summary_text) {
      return result[0].summary_text;
    }
    
    throw new Error("Invalid response from HuggingFace API");
  }

  // PDF upload and text extraction
  app.post("/api/extract-pdf", upload.single("pdf"), async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ message: "No PDF file uploaded" });
      }

      if (req.file.mimetype !== "application/pdf") {
        return res.status(400).json({ message: "Only PDF files are allowed" });
      }

      // Temporarily use basic text extraction approach
      // In production, implement proper PDF text extraction
      const extractedText = `PDF file "${req.file.originalname}" uploaded successfully. 
      
Please copy and paste the text content from your PDF into the text area below for now. 
We're working on full PDF text extraction and it will be available soon!

File size: ${(req.file.size / 1024).toFixed(1)} KB
File type: ${req.file.mimetype}`;

      if (!extractedText) {
        return res.status(400).json({ message: "No text could be extracted from the PDF" });
      }

      res.json({ text: extractedText });
    } catch (error) {
      console.error("PDF extraction error:", error);
      res.status(500).json({ message: "Failed to extract text from PDF" });
    }
  });

  // Text summarization
  app.post("/api/summarize", async (req, res) => {
    try {
      const { text } = summarizeRequestSchema.parse(req.body);

      // Call HuggingFace API
      const summaryText = await callHuggingFaceAPI(text);

      // Calculate statistics
      const originalWords = text.split(/\s+/).length;
      const summaryWords = summaryText.split(/\s+/).length;
      const compressionRatio = Math.round((1 - summaryWords / originalWords) * 100);

      // Store in memory
      await storage.createSummary({
        originalText: text,
        summaryText,
        wordCount: summaryWords,
        compressionRatio,
      });

      const response: SummarizeResponse = {
        summary: summaryText,
        wordCount: summaryWords,
        compressionRatio,
        originalLength: text.length,
      };

      res.json(response);
    } catch (error) {
      console.error("Summarization error:", error);
      
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: "Invalid input", 
          errors: error.errors 
        });
      }

      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }

      res.status(500).json({ message: "Failed to generate summary" });
    }
  });

  // Get recent summaries
  app.get("/api/summaries", async (req, res) => {
    try {
      const summaries = await storage.getRecentSummaries();
      res.json(summaries);
    } catch (error) {
      console.error("Get summaries error:", error);
      res.status(500).json({ message: "Failed to fetch summaries" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
