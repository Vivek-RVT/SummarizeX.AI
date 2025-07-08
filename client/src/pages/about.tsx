import React from "react";
import { Link } from "wouter";
import { ArrowLeft, Zap, Shield, Users, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 dark:from-gray-900 dark:via-blue-950/20 dark:to-indigo-950/30">
      {/* Header */}
      <header className="glass-effect border-b border-gray-200/40 dark:border-gray-700/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="sm" className="p-2 rounded-full">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <div className="flex items-center space-x-3">
              <img src="/logo.svg" alt="SummarizeX.AI Logo" className="w-8 h-8" />
              <h1 className="text-xl font-semibold text-gray-900 dark:text-white">About SummarizeX.AI</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {/* Hero Section */}
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Revolutionizing Text Summarization
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              SummarizeX.AI makes information consumption faster, smarter, and more efficient using cutting-edge artificial intelligence.
            </p>
          </div>

          {/* Mission Section */}
          <Card className="card-glass border-0 shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                We believe that in our information-rich world, the ability to quickly understand and process large amounts of text is crucial. 
                SummarizeX.AI was created to democratize access to advanced AI summarization technology, making it free and accessible to everyone.
              </p>
            </CardContent>
          </Card>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="card-glass border-0 shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4">
                    <Zap className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Innovation</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  We leverage the latest AI technologies from HuggingFace to provide state-of-the-art summarization capabilities.
                </p>
              </CardContent>
            </Card>

            <Card className="card-glass border-0 shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mr-4">
                    <Shield className="w-6 h-6 text-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Privacy</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Your data is never stored on our servers. All processing happens in real-time and your content remains private.
                </p>
              </CardContent>
            </Card>

            <Card className="card-glass border-0 shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-purple-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Accessibility</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  We believe powerful AI tools should be free and accessible to students, researchers, and professionals worldwide.
                </p>
              </CardContent>
            </Card>

            <Card className="card-glass border-0 shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mr-4">
                    <Heart className="w-6 h-6 text-red-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Community</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Built by developers who understand the need for better tools to process and understand information efficiently.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Technology Section */}
          <Card className="card-glass border-0 shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Technology</h3>
              <div className="space-y-4">
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  SummarizeX.AI is powered by Facebook's BART (Bidirectional and Auto-Regressive Transformers) model, 
                  specifically the BART-large-CNN variant optimized for summarization tasks.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Our application is built with modern web technologies including React, TypeScript, and Tailwind CSS, 
                  ensuring a fast, responsive, and beautiful user experience across all devices.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center">
            <Link href="/">
              <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 rounded-xl font-medium shadow-lg">
                Start Summarizing
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}