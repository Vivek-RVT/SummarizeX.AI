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
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Add your HuggingFace API key to .env
   ```

4. **Get HuggingFace API Key**
   - Go to [HuggingFace Settings](https://huggingface.co/settings/tokens)
   - Create a new token with "read" permissions
   - Add it to your `.env` file:
     ```env
     HUGGINGFACE_API_KEY=your_api_key_here
     ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open in browser**
   ```
   http://localhost:5000
   ```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `HUGGINGFACE_API_KEY` | HuggingFace API token | Yes |
| `HF_API_KEY` | Alternative HuggingFace API token | No |
| `DATABASE_URL` | PostgreSQL connection string | No |
| `NODE_ENV` | Environment (development/production) | No |
| `PORT` | Server port (default: 5000) | No |

## API Endpoints

### POST /api/extract-pdf
Upload a PDF file and extract text content.

**Request:**
- Content-Type: `multipart/form-data`
- Body: PDF file in `pdf` field

**Response:**
```json
{
  "text": "Extracted text content..."
}


This project is proudly created and maintained by Vivek Rawat, a passionate full-stack developer dedicated to building practical and impactful AI-powered web applications. SummarizeX.AI represents my commitment to combining cutting-edge technology with user-friendly design to solve real-world problems efficiently and securely.
