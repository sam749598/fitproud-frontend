// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaInstagramSquare, FaPinterest } from "react-icons/fa";
import vitaProzen from "../assets/vitaprozen.jpg";

const Footer = () => {
  return (
    <footer className="bg-[#FFF4EA] dark:bg-gray-900 text-gray-900 dark:text-gray-200 py-12 mt-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Section 1: Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold mb-4">VitaProZen</h2>
          <Link to="/">
            <img
              src={vitaProzen}
              alt="VitaProZen Logo"
              className="h-15 rounded-sm"
            />
          </Link>
          <p className="text-sm mt-5">
            Your trusted source for nutrition,<br/> health, and wellness tips to help <br/>you live a balanced life.
          </p>
        </div>

        {/* Section 2: Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/about" className="hover:underline">About</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
            <li><Link to="/terms" className="hover:underline">Terms &amp; Conditions</Link></li>
            <li><Link to="/privacy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link to="/affiliate-disclaimers" className="hover:underline">Affiliate Disclaimers</Link></li>
          </ul>
        </div>

        {/* Section 3: Social Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <ul className="flex space-x-6">
            <li>
              <a
                href="https://www.facebook.com/vitaprozen"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-blue-600 transition-colors"
              >
                <FaFacebookF size={22} />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@vitaprozen"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="hover:text-red-600 transition-colors"
              >
                <FaYoutube size={22} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/vitaprozen/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-pink-500 transition-colors"
              >
                <FaInstagramSquare size={22} />
              </a>
            </li>
            <li>
              <a
                href="https://www.pinterest.com/vitaprozen/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinterest"
                className="hover:text-red-700 transition-colors"
              >
                <FaPinterest size={22} />
              </a>
            </li>
          </ul>
        </div>

        {/* Section 4: Email Subscribe */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Subscribe</h3>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-4 py-2 rounded-md text-gray-900 dark:text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-600 bg-gray-200 dark:bg-gray-800"
              required
            />
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <hr className="border-t max-w-7xl mx-auto border-gray-300 dark:border-gray-700 mt-12" />

      <div className="text-center text-gray-500 dark:text-gray-400 text-sm mt-6">
        &copy; {new Date().getFullYear()} VitaProZen. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
