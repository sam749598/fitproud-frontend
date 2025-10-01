// src/pages/Footer/Terms.jsx
import React from "react";

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-amber-100 dark:from-slate-900 dark:to-slate-950 text-slate-800 dark:text-slate-100 py-20 px-6 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6">
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Legal Terms</span>
          </div>
          <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 mb-4">
            Terms & Conditions
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Please read these terms carefully before using our website and services.
          </p>
        </div>
        
        {/* Terms Sections */}
        <div className="space-y-8">
          {[
            {
              title: "Acceptance of Terms",
              text: "By accessing and using this website, you accept and agree to be bound by these Terms & Conditions. If you do not agree, please discontinue use immediately.",
              icon: "✅"
            },
            {
              title: "Affiliate Products",
              text: "We promote third-party health and wellness products through affiliate partnerships. Any purchase you make via our links is governed by the respective seller's terms, and we are not responsible for product quality, shipping, or customer service.",
              icon: "🛒"
            },
            {
              title: "No Medical Advice",
              text: "The content provided on this website is for informational purposes only and should not be considered medical advice. Always consult with a qualified healthcare professional before starting any supplement, treatment, or health program.",
              icon: "⚠️"
            },
            {
              title: "Limitation of Liability",
              text: "We are not liable for any damages, losses, or adverse effects arising from the use of products promoted on this site. Your use of third-party products is at your own risk.",
              icon: "🛡️"
            },
            {
              title: "Intellectual Property",
              text: "All content, logos, images, and materials on this site are owned by us or our content providers. You may not copy, reproduce, or distribute without prior written consent.",
              icon: "📝"
            },
            {
              title: "Changes to Terms",
              text: "We reserve the right to update or change these Terms & Conditions at any time. Continued use of this website after changes are posted constitutes acceptance of the revised terms.",
              icon: "🔄"
            },
            {
              title: "Contact Us",
              text: (
                <>
                  If you have any questions about these Terms & Conditions, please{" "}
                  <a
                    href="/contact"
                    className="text-blue-600 dark:text-blue-400 font-medium hover:underline transition-colors"
                      >
                       contact here
                      </a>
                      .
                    </>
                  ),
                  icon: "📞"
                }
              ].map((section, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group"
                >
                  <div className="p-8 flex gap-6">
                    <div className="text-4xl opacity-80 group-hover:scale-110 transition-transform duration-300">
                      {section.icon}
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-3">
                        {section.title}
                        <span className="text-xs font-normal px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded-full text-slate-500 dark:text-slate-300">
                          {index + 1}
                        </span>
                      </h2>
                      <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                        {section.text}
                      </p>
                    </div>
                  </div>
                  <div className="h-1 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 group-hover:from-blue-500/30 group-hover:to-indigo-500/30 transition-all duration-500"></div>
                </div>
              ))}
            </div>
           
          </div>
        </div>
      );
    };
    
    export default Terms;