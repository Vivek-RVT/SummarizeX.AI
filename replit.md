# SummarizeX.AI - Replit Development Guide

## Overview

SummarizeX.AI is a modern, production-quality web application that provides AI-powered text summarization services. The application features a clean Apple-inspired design with PDF upload capabilities, instant text processing, and a comprehensive dark mode implementation. Users can upload PDF documents or paste text directly to receive high-quality summaries generated using HuggingFace's BART model.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern React features
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management and caching
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Shadcn/ui component library for consistent, accessible components
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **API Design**: RESTful API with proper error handling and validation
- **File Processing**: Multer for multipart file uploads with 10MB size limits
- **PDF Processing**: pdf-parse library for extracting text from PDF documents
- **AI Integration**: HuggingFace Inference API using the BART-large-CNN model
- **Data Storage**: In-memory storage using Drizzle ORM (configurable for PostgreSQL)

## Key Components

### Core Features
1. **Text Summarization Engine**: Integrates with HuggingFace BART model for high-quality summarization
2. **PDF Processing**: Extracts text from uploaded PDF files using pdf-parse
3. **Theme System**: Complete dark/light mode implementation with system preference detection
4. **Responsive Design**: Mobile-first approach with breakpoint-specific optimizations
5. **Copy & Download**: Clipboard integration and file download capabilities

### API Endpoints
- `POST /api/summarize` - Main summarization endpoint supporting both text and PDF inputs
- File upload handling with proper validation and error responses
- Comprehensive error handling for API failures and invalid inputs

### Database Schema
- **Summaries Table**: Stores summary metadata including original text, summary, word count, and compression ratio
- **Users Table**: Basic user structure (for future authentication features)
- Prepared for PostgreSQL with Drizzle ORM configuration

## Data Flow

1. **Input Processing**: User uploads PDF or pastes text through the frontend interface
2. **File Handling**: Backend processes PDF files using pdf-parse to extract text content
3. **AI Processing**: Text is sent to HuggingFace BART model for summarization
4. **Response Processing**: Summary is returned with metadata (word count, compression ratio)
5. **State Management**: TanStack Query manages the request state and caching
6. **UI Updates**: React components update with loading states and final results

## External Dependencies

### AI Services
- **HuggingFace Inference API**: Primary AI service for text summarization
- **Model**: facebook/bart-large-cnn for high-quality abstractive summarization
- **Authentication**: Bearer token authentication with HuggingFace API

### Development Tools
- **Vite**: Build tool with React plugin and runtime error overlay
- **TypeScript**: Type checking and development experience
- **ESBuild**: Production bundling for server-side code
- **Drizzle Kit**: Database schema management and migrations

### UI/UX Libraries
- **Radix UI**: Accessible component primitives
- **Lucide React**: Icon library
- **Tailwind CSS**: Utility-first CSS framework
- **Inter Font**: Typography via Google Fonts

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds React application to `dist/public`
- **Backend**: ESBuild bundles Node.js server to `dist/index.js`
- **Database**: Drizzle migrations for schema updates

### Environment Configuration
- **Development**: Hot reload with Vite dev server
- **Production**: Optimized builds with static file serving
- **Environment Variables**: HuggingFace API key and database configuration

### Platform Requirements
- Node.js environment
- PostgreSQL database (configurable)
- HuggingFace API access
- File upload capabilities (10MB limit)

## Changelog

- July 08, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.