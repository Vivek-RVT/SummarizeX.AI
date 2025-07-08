import React from "react";
import { Link } from "wouter";
import { ArrowLeft, Shield, Eye, Lock, Server } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Privacy() {
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
              <h1 className="text-xl font-semibold text-gray-900 dark:text-white">Privacy Policy</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {/* Introduction */}
          <Card className="card-glass border-0 shadow-xl">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mr-4">
                  <Shield className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Your Privacy Matters</h2>
                  <p className="text-gray-600 dark:text-gray-300">Last updated: {new Date().toLocaleDateString()}</p>
                </div>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                At SummarizeX.AI, we are committed to protecting your privacy and ensuring your data remains secure. 
                This policy explains how we handle your information when you use our AI-powered text summarization service.
              </p>
            </CardContent>
          </Card>

          {/* Data Collection */}
          <Card className="card-glass border-0 shadow-xl">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Eye className="w-6 h-6 text-blue-500 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">What We Collect</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Text Content</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    We temporarily process the text you submit for summarization. This content is sent to HuggingFace's API 
                    for processing and is not stored on our servers.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Usage Analytics</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    We collect basic usage statistics such as the number of summaries generated and error rates to improve our service. 
                    This data is anonymized and cannot be linked to individual users.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Technical Information</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    We may collect technical information such as browser type, device information, and IP addresses for 
                    security and performance optimization purposes.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Processing */}
          <Card className="card-glass border-0 shadow-xl">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Server className="w-6 h-6 text-purple-500 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">How We Process Your Data</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                  <h4 className="font-medium text-green-800 dark:text-green-200 mb-2">✓ Real-time Processing</h4>
                  <p className="text-green-700 dark:text-green-300 text-sm">
                    Your text is processed in real-time and immediately discarded after summarization.
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                  <h4 className="font-medium text-green-800 dark:text-green-200 mb-2">✓ No Long-term Storage</h4>
                  <p className="text-green-700 dark:text-green-300 text-sm">
                    We do not store your original text or generated summaries on our servers.
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                  <h4 className="font-medium text-green-800 dark:text-green-200 mb-2">✓ Secure Transmission</h4>
                  <p className="text-green-700 dark:text-green-300 text-sm">
                    All data is transmitted over encrypted HTTPS connections.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Third-Party Services */}
          <Card className="card-glass border-0 shadow-xl">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Lock className="w-6 h-6 text-orange-500 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Third-Party Services</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">HuggingFace API</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    We use HuggingFace's API for AI text summarization. Your text is sent to their servers for processing 
                    according to their privacy policy. HuggingFace is committed to data privacy and security.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <Card className="card-glass border-0 shadow-xl">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Your Rights</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-2">Control Your Data</h4>
                  <p className="text-blue-700 dark:text-blue-300 text-sm">
                    You can stop using our service at any time. No personal data is retained.
                  </p>
                </div>
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-2">Transparency</h4>
                  <p className="text-blue-700 dark:text-blue-300 text-sm">
                    This privacy policy clearly outlines our data practices.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="card-glass border-0 shadow-xl">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Contact Us</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                If you have any questions about this privacy policy or our data practices, please contact us.
              </p>
              <div className="text-center">
                <Link href="/">
                  <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-2 rounded-lg">
                    Back to App
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}