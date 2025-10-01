// src/pages/Footer/Privacy.jsx
import React from "react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-teal-100 dark:from-slate-900 dark:to-slate-950 text-slate-800 dark:text-slate-100 py-20 px-6 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-teal-100 dark:bg-teal-900/30 rounded-full mb-6">
            <span className="text-sm font-medium text-teal-700 dark:text-teal-300">Privacy Policy</span>
          </div>
          <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-emerald-600 dark:from-teal-400 dark:to-emerald-400 mb-4">
            Your Privacy Matters
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            We're committed to protecting your personal information. This policy explains how we collect, use, and safeguard your data.
          </p>
        </div>
        
        {/* Policy Sections */}
        <div className="space-y-8">
          {[
            {
              title: "Information Collection",
              text: "We collect personal details such as name, email, and usage data when you interact with our site. We also gather non-personal information like browser type, device details, and IP address for analytics.",
              icon: "📊"
            },
            {
              title: "Data Usage",
              text: "Your information helps us improve services, personalize your experience, communicate updates, and analyze site traffic. We never sell your personal data to third parties.",
              icon: "🔧"
            },
            {
              title: "Third-Party Links",
              text: "Our site contains affiliate links to health and wellness products. Third-party sites may collect your data according to their own privacy policies. We're not responsible for their practices.",
              icon: "🔗"
            },
            {
              title: "Cookies & Tracking",
              text: "We use cookies and similar technologies to enhance your experience, remember preferences, and measure site performance. You can disable cookies in your browser, though some features may not work properly.",
              icon: "🍪"
            },
            {
              title: "Data Protection",
              text: "We implement robust technical and organizational measures to protect your personal information against unauthorized access, alteration, or disclosure.",
              icon: "🔒"
            },
            {
              title: "Your Rights",
              text: "You have the right to access, update, or request deletion of your personal information. To exercise these rights, please contact our support team.",
              icon: "✅"
            },
            {
              title: "Policy Updates",
              text: "We may update this Privacy Policy periodically. All changes will be posted on this page with an updated revision date for your reference.",
              icon: "🔄"
            },
            {
              title: "Contact Us",
              text: (
                <>
                  If you have any questions about this Privacy Policy, please{" "}
                  <a
                    href="/contact"
                    className="text-teal-600 dark:text-teal-400 font-medium hover:underline transition-colors"
                  >
                    contact our privacy team
                  </a>
                  .
                </>
              ),
              icon: "💬"
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
              <div className="h-1 bg-gradient-to-r from-teal-500/10 to-emerald-500/10 group-hover:from-teal-500/30 group-hover:to-emerald-500/30 transition-all duration-500"></div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Privacy;