import React from "react";
import { Link } from "wouter";
import { ArrowLeft, FileText, AlertTriangle, Users, Scale } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Terms() {
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
              <h1 className="text-xl font-semibold text-gray-900 dark:text-white">Terms of Service</h1>
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
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4">
                  <FileText className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Terms of Service</h2>
                  <p className="text-gray-600 dark:text-gray-300">Last updated: {new Date().toLocaleDateString()}</p>
                </div>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Welcome to SummarizeX.AI. By using our AI-powered text summarization service, you agree to these terms. 
                Please read them carefully before using our platform.
              </p>
            </CardContent>
          </Card>

          {/* Acceptance */}
          <Card className="card-glass border-0 shadow-xl">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Scale className="w-6 h-6 text-green-500 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Acceptance of Terms</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                By accessing and using SummarizeX.AI, you accept and agree to be bound by the terms and provision of this agreement. 
                If you do not agree to abide by the above, please do not use this service.
              </p>
            </CardContent>
          </Card>

          {/* Service Description */}
          <Card className="card-glass border-0 shadow-xl">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Service Description</h3>
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                  SummarizeX.AI provides AI-powered text summarization services using advanced machine learning models. 
                  Our service allows users to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 ml-4">
                  <li>Submit text content for automated summarization</li>
                  <li>Upload PDF documents for text extraction and summarization</li>
                  <li>Download and share generated summaries</li>
                  <li>Use the service across multiple devices and platforms</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* User Responsibilities */}
          <Card className="card-glass border-0 shadow-xl">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 text-purple-500 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">User Responsibilities</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Acceptable Use</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">You agree to use our service only for lawful purposes. You must not:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300 ml-4">
                    <li>Submit content that violates copyright or intellectual property rights</li>
                    <li>Upload malicious or harmful content</li>
                    <li>Attempt to reverse engineer or compromise our service</li>
                    <li>Use the service for spam or unauthorized commercial purposes</li>
                    <li>Submit content that is illegal, offensive, or inappropriate</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Content Ownership</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    You retain full ownership of any content you submit to our service. We do not claim any rights 
                    to your original content or the summaries generated from it.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Service Availability */}
          <Card className="card-glass border-0 shadow-xl">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-6 h-6 text-orange-500 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Service Availability</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
                  <h4 className="font-medium text-orange-800 dark:text-orange-200 mb-2">Service Interruptions</h4>
                  <p className="text-orange-700 dark:text-orange-300 text-sm">
                    We strive to maintain high service availability, but cannot guarantee uninterrupted access. 
                    Maintenance, updates, or technical issues may temporarily affect service availability.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">API Dependencies</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Our service relies on third-party AI models and APIs. Service quality and availability may be 
                    affected by these external dependencies.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Limitations */}
          <Card className="card-glass border-0 shadow-xl">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Limitations of Liability</h3>
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                  SummarizeX.AI is provided "as is" without warranties of any kind. We do not guarantee:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300 ml-4">
                  <li>The accuracy or completeness of generated summaries</li>
                  <li>Continuous, uninterrupted service availability</li>
                  <li>That the service will meet your specific requirements</li>
                  <li>That any errors will be corrected promptly</li>
                </ul>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
                  <p className="text-yellow-800 dark:text-yellow-200 text-sm">
                    <strong>Important:</strong> Always review AI-generated summaries for accuracy before using them 
                    for important decisions or sharing with others.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Changes to Terms */}
          <Card className="card-glass border-0 shadow-xl">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Changes to Terms</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon 
                posting to this page. Your continued use of the service after changes constitutes acceptance of the new terms.
              </p>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="card-glass border-0 shadow-xl">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Contact Information</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                If you have any questions about these Terms of Service, please contact us through our website.
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