import React from "react";

const Disclaimers = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-950 text-slate-800 dark:text-slate-100 py-20 px-6 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6">
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Disclosure</span>
          </div>
          <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 mb-4">
            Affiliate Disclaimer
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            We believe in full transparency. Here's everything you need to know about affiliate links on our platform.
          </p>
        </div>
        
        {/* Disclaimer Sections */}
        <div className="space-y-8">
          {[
            {
              title: "Affiliate Partnerships",
              text: "We participate in affiliate marketing programs, which means we may earn commissions when you purchase products through our links. This comes at no additional cost to you.The information provided on our website is for educational purposes only and does not constitute medical or treatment advice. Therefore, please consult a specialist before using any product.",
              icon: "🤝"
            },
            {
              title: "How It Supports Us",
              text: "Commissions help fund our content creation, platform maintenance, and team. Your support through affiliate links enables us to continue providing valuable resources.",
              icon: "💙"
            },
            {
              title: "Our Recommendation Promise",
              text: "We only recommend products and services we've thoroughly researched and genuinely believe will benefit our audience. Our integrity is not for sale.",
              icon: "✨"
            },
            {
              title: "Third-Party Responsibility",
              text: "All products are sold by third-party vendors. We're not responsible for product quality, shipping, returns, or customer service issues.",
              icon: "📦"
            },
            {
              title: "Independent Research",
              text: "Always conduct your own research before purchasing. Our recommendations are based on our experience and expertise, but your needs may differ.",
              icon: "🔍"
            },
            {
              title: "Your Support Matters",
              text: "When you use our affiliate links, you're directly supporting our mission to provide high-quality content and resources. We're truly grateful!",
              icon: "🙏"
            },
            {
              title: "Questions?",
              text: (
                <>
                  If you have any questions about our affiliate relationships, please{" "}
                  <a
                    href="/contact"
                    className="text-blue-600 dark:text-blue-400 font-medium hover:underline transition-colors"
                  >
                   Contact Us
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
              <div className="h-1 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 group-hover:from-blue-500/30 group-hover:to-indigo-500/30 transition-all duration-500"></div>
            </div>
          ))}
        </div>
        
        {/* Footer Note */}
        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-700 text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            This disclaimer was last updated on August 2025
          </p>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Disclaimers;
