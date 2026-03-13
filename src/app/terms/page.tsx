import Link from "next/link";
import { ArrowLeft, Edit3, Shield, Scale, HelpCircle } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-gray-900 selection:bg-[#10a37f]/20">
      
      {/* Premium Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100 px-6 py-4 flex items-center justify-between">
        <Link 
          href="/register" 
          className="group flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
        >
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 group-hover:bg-gray-200 transition-colors">
            <ArrowLeft size={16} />
          </div>
          Back to Registration
        </Link>
        <div className="text-sm font-semibold text-gray-400 uppercase tracking-widest flex items-center gap-2">
          <Scale size={16} />
          Legal
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-16">
        
        {/* Content Area */}
        <main className="w-full bg-white rounded-3xl p-10 md:p-16 shadow-sm border border-gray-100 relative overflow-hidden">
          
          {/* Decorative Gradient Blob */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#10a37f]/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

          <div className="relative z-10">
            <div className="mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-semibold tracking-wide mb-6">
                <Edit3 size={14} />
                Updated March 2026
              </div>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 mb-6 font-sans">
                Terms of Service
              </h1>
              <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
                Please read these terms carefully before using our platform. By accessing our services, you agree to be bound by these conditions.
              </p>
            </div>
            
            <div className="space-y-16">
              
              <section className="group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 text-gray-400 group-hover:text-[#10a37f] group-hover:border-[#10a37f]/30 transition-colors">
                    1
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight">Acceptance of Terms</h2>
                </div>
                <div className="pl-14 text-gray-600 leading-relaxed text-base md:text-lg space-y-4">
                  <p>
                    By accessing and using this service, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
                  </p>
                  <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 border-l-4 border-l-[#10a37f] text-sm text-gray-700">
                    <strong>TL;DR:</strong> Using our app means you play by the rules outlined here.
                  </div>
                </div>
              </section>

              <section className="group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 text-gray-400 group-hover:text-[#10a37f] group-hover:border-[#10a37f]/30 transition-colors">
                    2
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight">User Accounts</h2>
                </div>
                <div className="pl-14 text-gray-600 leading-relaxed text-base md:text-lg space-y-4">
                  <p>
                    When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
                  </p>
                  <p>
                    You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password.
                  </p>
                </div>
              </section>

              <section className="group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 text-gray-400 group-hover:text-[#10a37f] group-hover:border-[#10a37f]/30 transition-colors">
                    3
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight">Acceptable Use</h2>
                </div>
                <div className="pl-14 text-gray-600 leading-relaxed text-base md:text-lg space-y-4">
                  <p>
                    You agree not to use the Service in any way that violates any applicable national or international law or regulation. You must not use the Service to transmit any advertising or promotional material without our prior written consent.
                  </p>
                  <ul className="list-none space-y-3 mt-4">
                    {[
                      "No malicious scraping or botting.",
                      "No reverse engineering the platform.",
                      "No attempting to bypass security measures.",
                      "No usage that disrupts service for others."
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              <section className="group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 text-gray-400 group-hover:text-[#10a37f] group-hover:border-[#10a37f]/30 transition-colors">
                    4
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight">Disclaimer</h2>
                </div>
                <div className="pl-14 text-gray-600 leading-relaxed text-base md:text-lg space-y-4">
                  <p>
                    The AI-generated content provided through this service is for informational purposes only. We make no guarantees about the accuracy, reliability, or completeness of the output. 
                  </p>
                  <p className="text-gray-500 italic text-sm mt-4">
                    The Service is provided on an "AS IS" and "AS AVAILABLE" basis. We disclaim all warranties of any kind, whether express or implied.
                  </p>
                </div>
              </section>

            </div>
          </div>
        </main>
      </div>
      
      {/* Premium Footer Help */}
      <div className="max-w-6xl mx-auto px-6 pb-24 text-center">
        <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-white border border-gray-100 shadow-sm">
          <HelpCircle size={18} className="text-gray-400" />
          <span className="text-sm font-medium text-gray-600">Have questions about these terms?</span>
          <a href="#" className="text-sm font-bold text-[#10a37f] hover:underline">Contact Support</a>
        </div>
      </div>

    </div>
  );
}
