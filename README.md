# SummarizeX.AI - Free AI-Powered Text Summarizer

A production-quality web application that provides AI-powered text summarization using HuggingFace's BART model. Features a clean, Apple-inspired design with PDF upload capability and instant text processing.

## Features

- 🤖 **AI-Powered Summarization**: Uses HuggingFace BART model for high-quality summaries  
- 📄 **PDF Support**: Upload and extract text from PDF documents  
- 🎨 **Apple-Style UI**: Clean, modern interface with dark mode support  
- 🚀 **Fast Processing**: Instant summarization with loading states  
- 📱 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile  
- 🔒 **Privacy First**: No data storage, secure processing  
- 📋 **Copy & Download**: Easy sharing and saving of summaries  
- 🌙 **Dark Mode**: Elegant dark theme with smooth transitions  

## Tech Stack

### Frontend
- React 18 with TypeScript  
- Tailwind CSS for styling  
- Shadcn/ui components  
- TanStack Query for state management  
- Wouter for routing  

### Backend
- Node.js with Express  
- pdf-parse for PDF text extraction  
- Multer for file uploads  
- HuggingFace Inference API  
- In-memory storage with Drizzle ORM  

## Quick Start

1. **Clone the repository**  
   ```bash
   git clone <repository-url>
   cd summarizex-ai
