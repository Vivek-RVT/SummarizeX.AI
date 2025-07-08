import React from "react";
import { Link } from "wouter";
import { ArrowLeft, Mail, MessageSquare, Github, Twitter } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Contact() {
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
              <h1 className="text-xl font-semibold text-gray-900 dark:text-white">Contact Us</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {/* Introduction */}
          <Card className="card-glass border-0 shadow-xl">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Have questions, suggestions, or feedback about SummarizeX.AI? We'd love to hear from you. 
                Choose the best way to reach out below.
              </p>
            </CardContent>
          </Card>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="card-glass border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Email Support</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  For technical support, bug reports, or general inquiries
                </p>
                <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg">
                  Send Email
                </Button>
              </CardContent>
            </Card>

            <Card className="card-glass border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Feedback</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Share your thoughts and suggestions for improvement
                </p>
                <Button variant="outline" className="px-6 py-2 rounded-lg">
                  Give Feedback
                </Button>
              </CardContent>
            </Card>

            <Card className="card-glass border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Github className="w-8 h-8 text-purple-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Open Source</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Contribute to the project or report issues on GitHub
                </p>
                <Button variant="outline" className="px-6 py-2 rounded-lg">
                  View on GitHub
                </Button>
              </CardContent>
            </Card>

            <Card className="card-glass border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Twitter className="w-8 h-8 text-cyan-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Follow Updates</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Stay updated with new features and announcements
                </p>
                <Button variant="outline" className="px-6 py-2 rounded-lg">
                  Follow Us
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* FAQ */}
          <Card className="card-glass border-0 shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                Frequently Asked Questions
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Is SummarizeX.AI really free?
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Yes! SummarizeX.AI is completely free to use with no hidden costs, registration requirements, or usage limits.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    How accurate are the AI summaries?
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Our AI uses state-of-the-art models trained on vast amounts of text data. While highly accurate, 
                    we recommend reviewing summaries before using them for important decisions.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Do you store my documents or text?
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    No, we do not store your documents or text. All processing happens in real-time and your content 
                    is immediately discarded after summarization.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Can I use this for commercial purposes?
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Yes, you can use SummarizeX.AI for both personal and commercial purposes within the bounds of our 
                    terms of service.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Response Time */}
          <Card className="card-glass border-0 shadow-xl">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Response Times</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <div className="text-2xl font-bold text-blue-500 mb-1">&lt; 24h</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Critical Issues</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-500 mb-1">&lt; 48h</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Bug Reports</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-500 mb-1">&lt; 72h</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Feature Requests</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-500 mb-1">&lt; 1 week</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">General Inquiries</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Back to App */}
          <div className="text-center">
            <Link href="/">
              <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 rounded-xl font-medium shadow-lg">
                Back to App
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}