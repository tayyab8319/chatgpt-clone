import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
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
        
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose prose-gray max-w-none space-y-6">
          <p className="text-gray-600">Last updated: March 13, 2026</p>
          
          <section>
            <h2 className="text-xl font-semibold mb-3">1. Information We Collect</h2>
            <p className="text-gray-700 leading-relaxed">
              We collect information that you provide directly to us, including but not limited to your name, email address, password, and the content of your conversations with our AI service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">2. How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed">
              We use the information we collect to provide, maintain, and improve our services, to process your transactions, and to communicate with you about products, services, offers, and promotions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">3. Data Sharing and Security</h2>
            <p className="text-gray-700 leading-relaxed">
              We do not share your personal information with third parties except as described in this privacy policy. We take reasonable measures to help protect your personal information from loss, theft, misuse, and unauthorized access.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">4. AI Processing</h2>
            <p className="text-gray-700 leading-relaxed">
              Please note that conversations you have with the AI may be processed and stored to improve the language models. Therefore, you should avoid sharing sensitive personal information or proprietary business data in your prompts.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
