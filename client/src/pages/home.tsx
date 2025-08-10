import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";
import { apiRequest } from "@/lib/queryClient";
import { PWAInstall } from "@/components/pwa-install";
import { 
  FileText, 
  Edit3, 
  Zap, 
  Shield, 
  Sparkles,
  Upload,
  Copy,
  Download,
  RotateCcw,
  Sun,
  Moon,
  CheckCircle,
  ExternalLink
} from "lucide-react";

interface SummarizeResponse {
  summary: string;
  wordCount: number;
  compressionRatio: number;
  originalLength: number;
}

interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined);

function useTheme() {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

function Header() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <header className="sticky top-0 z-50 glass-effect border-b border-gray-200/40 dark:border-gray-700/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <img 
              src="/logo.svg" 
              alt="SummarizeX.AI Logo" 
              className="w-10 h-10"
            />
            <h1 className="text-xl font-semibold text-gray-900 dark:text-white">SummarizeX.AI</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-all duration-200"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              )}
            </Button>
            
            <div className="hidden sm:flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span>Free Forever</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          Summarize Any Text
          <span className="text-blue-500 block mt-2">With AI Power</span>
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Upload PDFs or paste articles to get instant, accurate summaries using advanced AI technology. Fast, free, and incredibly easy to use.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <CheckCircle className="w-4 h-4" />
            <span>No signup required</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <CheckCircle className="w-4 h-4" />
            <span>Privacy focused</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <CheckCircle className="w-4 h-4" />
            <span>Unlimited usage</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function MainInterface() {
  const [textInput, setTextInput] = useState("");
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [extractedText, setExtractedText] = useState("");
  const [summary, setSummary] = useState<SummarizeResponse | null>(null);
  const [isExtracting, setIsExtracting] = useState(false);
  const { toast } = useToast();
  const isMobile = useIsMobile();

  const summaryMutation = useMutation({
    mutationFn: async (text: string) => {
      const response = await apiRequest("POST", "/api/summarize", { text });
      return response.json() as Promise<SummarizeResponse>;
    },
    onSuccess: (data) => {
      setSummary(data);
      toast({
        title: "Summary generated!",
        description: "Your text has been successfully summarized.",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to generate summary",
        variant: "destructive",
      });
    },
  });

  const handlePdfUpload = async (file: File) => {
    if (!file || file.type !== "application/pdf") {
      toast({
        title: "Invalid file",
        description: "Please select a valid PDF file.",
        variant: "destructive",
      });
      return;
    }

    setIsExtracting(true);
    setPdfFile(file);

    try {
      const formData = new FormData();
      formData.append("pdf", file);

      const response = await fetch("/api/extract-pdf", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to extract text from PDF");
      }

      const data = await response.json();
      setExtractedText(data.text);
      setTextInput(data.text);
      
      toast({
        title: "PDF processed!",
        description: "Text has been extracted from your PDF.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to process PDF",
        variant: "destructive",
      });
    } finally {
      setIsExtracting(false);
    }
  };

  const handleSummarize = () => {
    const text = textInput.trim();
    if (!text) {
      toast({
        title: "No text to summarize",
        description: "Please enter text or upload a PDF file.",
        variant: "destructive",
      });
      return;
    }

    if (text.length < 50) {
      toast({
        title: "Text too short",
        description: "Text must be at least 50 characters long for meaningful summarization.",
        variant: "destructive",
      });
      return;
    }

    summaryMutation.mutate(text);
  };

  const handleCopy = async () => {
    if (summary) {
      try {
        await navigator.clipboard.writeText(summary.summary);
        toast({
          title: "Copied!",
          description: "Summary copied to clipboard.",
        });
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to copy summary",
          variant: "destructive",
        });
      }
    }
  };

  const handleDownload = () => {
    if (summary) {
      const blob = new Blob([summary.summary], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `summary_${new Date().toISOString().split('T')[0]}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  const handleReset = () => {
    setTextInput("");
    setPdfFile(null);
    setExtractedText("");
    setSummary(null);
  };

  return (
    <section className="pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Input Methods */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* PDF Upload */}
          <Card className="card-glass border-0 shadow-xl">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <FileText className="w-5 h-5 mr-2 text-blue-500" />
                Upload PDF
              </h3>
              
              <div
                className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl p-8 text-center cursor-pointer hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
                onClick={() => document.getElementById('pdf-input')?.click()}
                onDragOver={(e) => {
                  e.preventDefault();
                  e.currentTarget.classList.add('border-blue-500');
                }}
                onDragLeave={(e) => {
                  e.currentTarget.classList.remove('border-blue-500');
                }}
                onDrop={(e) => {
                  e.preventDefault();
                  e.currentTarget.classList.remove('border-blue-500');
                  const file = e.dataTransfer.files[0];
                  if (file) handlePdfUpload(file);
                }}
              >
                <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  {isExtracting ? "Extracting text..." : "Drop your PDF here or click to browse"}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Maximum file size: 10MB
                </p>
                <input
                  id="pdf-input"
                  type="file"
                  accept=".pdf"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) handlePdfUpload(file);
                  }}
                />
              </div>
              
              {pdfFile && (
                <div className="mt-3 text-sm text-gray-600 dark:text-gray-300">
                  Selected: {pdfFile.name}
                </div>
              )}
            </CardContent>
          </Card>
          
          {/* Text Input */}
          <Card className="card-glass border-0 shadow-xl">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <Edit3 className="w-5 h-5 mr-2 text-blue-500" />
                Paste Text
              </h3>
              
              <Textarea
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
                placeholder="Paste your article, research paper, or any long text here..."
                className="min-h-[128px] resize-none"
              />
              
              <div className="flex justify-between items-center mt-3">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {textInput.length.toLocaleString()} characters
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setTextInput("")}
                  className="text-blue-500 hover:text-blue-600"
                >
                  Clear
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Summarize Button */}
        <div className="text-center mb-8">
          <Button
            onClick={handleSummarize}
            disabled={summaryMutation.isPending || isExtracting}
            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 rounded-xl font-medium shadow-lg transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
          >
            {summaryMutation.isPending ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Processing...
              </>
            ) : (
              "Summarize Text"
            )}
          </Button>
          
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Powered by HuggingFace BART AI Model
          </p>
        </div>
        
        {/* Results Section */}
        {summary && (
          <Card className="glass-effect border-0 shadow-2xl animate-slide-up">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                  AI Summary
                </h3>
                
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {summary.wordCount} words
                  </span>
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {summary.compressionRatio}% compression
                  </span>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-700 rounded-xl p-4 mb-4 border border-gray-200 dark:border-gray-600">
                <p className="text-gray-900 dark:text-white leading-relaxed">
                  {summary.summary}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  variant="outline"
                  onClick={handleCopy}
                  className="flex-1 sm:flex-none"
                >
                  <Copy className="w-4 h-4 mr-2" />
                  Copy Summary
                </Button>
                
                <Button
                  onClick={handleDownload}
                  className="flex-1 sm:flex-none bg-blue-500 hover:bg-blue-600"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download .txt
                </Button>
                
                <Button
                  variant="outline"
                  onClick={handleReset}
                  className="sm:w-auto"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  New Summary
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Get summaries in seconds using state-of-the-art AI models optimized for speed and accuracy.",
      color: "text-blue-500 bg-blue-50 dark:bg-blue-900/20"
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your documents and text are processed securely and never stored on our servers.",
      color: "text-green-500 bg-green-50 dark:bg-green-900/20"
    },
    {
      icon: Sparkles,
      title: "Smart AI",
      description: "Powered by HuggingFace BART model, ensuring high-quality, contextually relevant summaries.",
      color: "text-purple-500 bg-purple-50 dark:bg-purple-900/20"
    }
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose SummarizeX.AI in 2025?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
            The world's most advanced AI text summarization technology, trusted by over 1M+ professionals worldwide
          </p>
          <div className="flex justify-center items-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              95% Accuracy Rate
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              10x Faster Processing
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
              Zero Data Storage
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${feature.color}`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// Add testimonials section before features
function TestimonialsSection() {
  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "Research Scientist",
      company: "Stanford University",
      content: "SummarizeX.AI has revolutionized how I process research papers. What used to take hours now takes minutes.",
      rating: 5
    },
    {
      name: "Marcus Johnson",
      role: "Content Manager", 
      company: "TechCorp Inc.",
      content: "The accuracy is incredible. Our team uses it daily for content analysis and it never disappoints.",
      rating: 5
    },
    {
      name: "Elena Rodriguez",
      role: "Law Student",
      company: "Harvard Law School",
      content: "Perfect for legal document analysis. The AI understands context better than any other tool I've tried.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Trusted by Professionals Worldwide
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Join over 1 million users who rely on SummarizeX.AI for their daily work
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                  <p className="text-sm text-blue-600 dark:text-blue-400">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// Add stats section
function StatsSection() {
  const stats = [
    { value: "1M+", label: "Users Worldwide", description: "Professionals trust our AI" },
    { value: "95%", label: "Accuracy Rate", description: "Industry-leading precision" },
    { value: "10M+", label: "Documents Processed", description: "Texts summarized daily" },
    { value: "99.9%", label: "Uptime", description: "Reliable 24/7 service" }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Impressive Numbers That Speak for Themselves
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            See why SummarizeX.AI is the go-to choice for text summarization in 2025
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{stat.label}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <h1 className="text-xl font-semibold text-gray-900 dark:text-white">SummarizeX.AI</h1>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              World's best free AI-powered text summarization tool for 2025. Trusted by over 1 million professionals worldwide for accurate, fast, and secure document processing.
            </p>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              © 2025 SummarizeX.AI. All rights reserved. Made with ♥ for productivity.
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li><a href="/#features" className="hover:text-blue-500 transition-colors">Features</a></li>
              <li><a href="/about.html" className="hover:text-blue-500 transition-colors">AI Technology</a></li>
              <li><a href="/#stats" className="hover:text-blue-500 transition-colors">Statistics</a></li>
              <li><a href="/about.html#accuracy" className="hover:text-blue-500 transition-colors">Accuracy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li><a href="/about.html" className="hover:text-blue-500 transition-colors">About</a></li>
              <li><a href="/privacy.html" className="hover:text-blue-500 transition-colors">Privacy Policy</a></li>
              <li><a href="/terms.html" className="hover:text-blue-500 transition-colors">Terms of Service</a></li>
              <li><a href="/contact.html" className="hover:text-blue-500 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  React.useEffect(() => {
    const stored = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (stored) {
      setTheme(stored);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default function Home() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 dark:from-gray-900 dark:via-blue-950/20 dark:to-indigo-950/30 transition-colors duration-300">
        <Header />
        <HeroSection />
        <MainInterface />
        <StatsSection />
        <FeaturesSection />
        <TestimonialsSection />
        <Footer />
        <PWAInstall />
      </div>
    </ThemeProvider>
  );
}
