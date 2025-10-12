import React from "react";
import Seo from "../../components/Seo"; // ✅ Import Seo component

const Contact = () => {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen max-w-7xl mx-auto mt-10">
      {/* ✅ SEO Meta Tags */}
      <Seo
        title="Contact Vitaprozen – Get in Touch with Our Team"
        description="Have questions or feedback? Contact Vitaprozen for supplement reviews, partnerships, and wellness inquiries. We're here to help you live healthier."
        canonical="https://www.vitaprozen.com/contact"
        schema={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact Vitaprozen",
          "url": "https://www.vitaprozen.com/contact",
          "description": "Reach out to the Vitaprozen team for support, collaborations, or inquiries related to wellness and supplement reviews.",
          "publisher": {
            "@type": "Organization",
            "name": "Vitaprozen",
            "url": "https://www.vitaprozen.com",
            "logo": "https://www.vitaprozen.com/vitaprozen.svg",
            "sameAs": [
              "https://www.facebook.com/vitaprozen",
              "https://www.instagram.com/vitaprozen",
              "https://www.pinterest.com/vitaprozen/",
              "https://www.youtube.com/@vitaprozen"
            ]
          },
          "mainEntity": {
            "@type": "Organization",
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer support",
              "email": "contact@vitaprozen.com",
              "availableLanguage": ["English"]
            }
          }
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-24 px-4 text-center">
        <h1 className="text-5xl font-extrabold mb-4">Contact Us</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Have questions or suggestions? We'd love to hear from you. Reach out
          and we'll get back to you as soon as possible.
        </p>
      </section>

      {/* Contact Info & Form */}
      <section className="container mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-1 gap-10">
        {/* Contact Form */}
        <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-2xl font-bold mb-6 text-purple-700">
            Send Us a Message
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block mb-1 font-medium" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Your Message"
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-purple-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-indigo-700 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Map / Footer CTA */}
      <section className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">We’re Here For You</h2>
        <p className="mb-6 max-w-xl mx-auto">
          Whether you have a question, feedback, or want to collaborate, we are
          always open to hearing from you.
        </p>
        <button className="bg-white text-indigo-600 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300">
          Contact Now
        </button>
      </section>
    </div>
  );
};

export default Contact;
