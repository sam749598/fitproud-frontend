import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagramSquare, FaPinterest  } from "react-icons/fa";
import vitaProzen from "../assets/vitaprozen.jpg";

const Footer = () => {
  return (
    <footer className="bg-[#FFF4EA] text-gray-900 py-12 mt-50">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Section 1: Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold mb-4">VitaProZen</h2>
          <Link to="/">
          <img src={vitaProzen} alt="FitProud Logo"
         className="h-15 rounded-sm" />
          </Link>
          <p className="text-sm mt-5">
            Your trusted source for nutrition,<br/> health, and wellness tips to help <br/>you live a balanced life.
          </p>
        </div>

        {/* Section 2: Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/terms">Terms &amp; Conditions</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/affiliate-disclaimers">Affiliate Disclaimers</Link></li>
          </ul>
        </div>

        {/* Section 3: Social Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <ul className="flex space-x-6 text-gray-700">
            <li>
              <a
                href="https://facebook.com"
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
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="hover:text-sky-500 transition-colors"
              >
                <FaTwitter size={22} />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
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
                href="https://www.pinterest.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-pink-700 transition-colors"
              >
                <FaPinterest size={22} />
              </a>
            </li>
          </ul>
        </div>

        {/* Section 4: Email Subscribe */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Subscribe</h3>
          <form className="flex flex-col sm:flex-row">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-4 py-2 text-gray-900 focus:outline-none bg-gray-400"
              required
            />
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      
      <hr className="border-t max-w-7xl mx-auto border-slate-500 dark:border-gray-700 mt-15" />

      <div className="text-center text-gray-500 text-sm mt-10">
        &copy; {new Date().getFullYear()} VitaProZen. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
