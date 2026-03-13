import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <Link 
          href="/register" 
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 mb-8 transition"
        >
          <ArrowLeft size={16} />
          Back
        </Link>
        
        <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
        
        <div className="prose prose-gray max-w-none space-y-6">
          <p className="text-gray-600">Last updated: March 13, 2026</p>
          
          <section>
            <h2 className="text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              By accessing and using this service, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">2. User Accounts</h2>
            <p className="text-gray-700 leading-relaxed">
              When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">3. Acceptable Use</h2>
            <p className="text-gray-700 leading-relaxed">
              You agree not to use the Service in any way that violates any applicable national or international law or regulation. You must not use the Service to transmit any advertising or promotional material without our prior written consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">4. Disclaimer</h2>
            <p className="text-gray-700 leading-relaxed">
              The AI-generated content provided through this service is for informational purposes only. We make no guarantees about the accuracy, reliability, or completeness of the output.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
