import Link from "next/link";
import { ArrowLeft, Edit3, Shield, Info, HelpCircle } from "lucide-react";

export default function PrivacyPage() {
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
          <Shield size={16} />
          Legal
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-16">
        
        {/* Content Area */}
        <main className="w-full bg-white rounded-3xl p-10 md:p-16 shadow-sm border border-gray-100 relative overflow-hidden">
          
          {/* Decorative Gradient Blob */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

          <div className="relative z-10">
            <div className="mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-semibold tracking-wide mb-6">
                <Edit3 size={14} />
                Updated March 2026
              </div>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 mb-6 font-sans">
                Privacy Policy
              </h1>
              <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
                We value your privacy as much as we value building great software. Here is exactly how we handle, process, and protect your data.
              </p>
            </div>
            
            <div className="space-y-16">
              
              <section className="group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 text-gray-400 group-hover:text-blue-500 group-hover:border-blue-500/30 transition-colors">
                    1
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight">Information We Collect</h2>
                </div>
                <div className="pl-14 text-gray-600 leading-relaxed text-base md:text-lg space-y-4">
                  <p>
                    We collect information that you provide directly to us, including but not limited to your name, email address, password, and the content of your conversations with our AI service.
                  </p>
                  <p>
                    We also automatically collect certain technical information when you use the app, such as your IP address, browser type, and usage metrics to ensure service stability.
                  </p>
                </div>
              </section>

              <section className="group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 text-gray-400 group-hover:text-blue-500 group-hover:border-blue-500/30 transition-colors">
                    2
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight">How We Use Your Data</h2>
                </div>
                <div className="pl-14 text-gray-600 leading-relaxed text-base md:text-lg space-y-4">
                  <p>
                    We use the information we collect to provide, maintain, and improve our services, to process your transactions, and to communicate with you about products, services, offers, and promotions.
                  </p>
                  <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 border-l-4 border-l-blue-500 text-sm text-gray-700 mt-4 flex gap-3">
                    <Info size={18} className="text-blue-500 shrink-0 mt-0.5" />
                    <div>
                      <strong>Core processing:</strong> Your prompts are processed in real-time to generate AI responses. They are temporarily cached for context management within a single session.
                    </div>
                  </div>
                </div>
              </section>

              <section className="group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 text-gray-400 group-hover:text-blue-500 group-hover:border-blue-500/30 transition-colors">
                    3
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight">Data Sharing and Security</h2>
                </div>
                <div className="pl-14 text-gray-600 leading-relaxed text-base md:text-lg space-y-4">
                  <p>
                    We do not sell your personal information. We do not share your information with third parties except as necessary to provide the core service (e.g., cloud hosting providers, LLM API partners).
                  </p>
                  <p>
                    We take reasonable, industry-standard measures—including encryption at rest and in transit—to help protect your personal information from loss, theft, misuse, and unauthorized access.
                  </p>
                </div>
              </section>

              <section className="group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 text-gray-400 group-hover:text-blue-500 group-hover:border-blue-500/30 transition-colors">
                    4
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight">AI Content & Training</h2>
                </div>
                <div className="pl-14 text-gray-600 leading-relaxed text-base md:text-lg space-y-4">
                  <p>
                    Please note that conversations you have with the AI may be processed and stored to improve our underlying language models. 
                  </p>
                  <p className="font-medium text-gray-900">
                    You should avoid sharing sensitive personal information or proprietary business data in your prompts.
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
          <span className="text-sm font-medium text-gray-600">Need more clarity on your data privacy?</span>
          <a href="#" className="text-sm font-bold text-blue-500 hover:underline">Contact DPO</a>
        </div>
      </div>

    </div>
  );
}
