// // src/components/Footer.jsx
// import React from "react";
// import { Link } from "react-router-dom";
// import { FaFacebookF, FaYoutube, FaInstagramSquare, FaPinterest } from "react-icons/fa";
// import vitaProzen from "../assets/vitaprozen.jpg";

// const Footer = () => {
//   return (
//     <footer className="bg-[#FFF4EA] dark:bg-gray-900 text-gray-900 dark:text-gray-200 py-12 mt-12">
//       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
//         {/* Section 1: Logo & Description */}
//         <div>
//           <h2 className="text-2xl font-bold mb-4">VitaProZen</h2>
//           <Link to="/">
//             <img
//               src={vitaProzen}
//               alt="VitaProZen Logo"
//               className="h-15 rounded-sm"
//             />
//           </Link>
//           <p className="text-sm mt-5">
//             Your trusted source for nutrition,<br/> health, and wellness tips to help <br/>you live a balanced life.
//           </p>
//         </div>

//         {/* Section 2: Quick Links */}
//         <div>
//           <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
//           <ul className="space-y-2">
//             <li><Link to="/about" className="hover:underline">About</Link></li>
//             <li><Link to="/contact" className="hover:underline">Contact</Link></li>
//             <li><Link to="/terms" className="hover:underline">Terms &amp; Conditions</Link></li>
//             <li><Link to="/privacy" className="hover:underline">Privacy Policy</Link></li>
//             <li><Link to="/affiliate-disclaimers" className="hover:underline">Affiliate Disclaimers</Link></li>
//           </ul>
//         </div>

//         {/* Section 3: Social Links */}
//         <div>
//           <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
//           <ul className="flex space-x-6">
//             <li>
//               <a
//                 href="https://www.facebook.com/vitaprozen"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="Facebook"
//                 className="hover:text-blue-600 transition-colors"
//               >
//                 <FaFacebookF size={22} />
//               </a>
//             </li>
//             <li>
//               <a
//                 href="https://www.youtube.com/@vitaprozen"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="YouTube"
//                 className="hover:text-red-600 transition-colors"
//               >
//                 <FaYoutube size={22} />
//               </a>
//             </li>
//             <li>
//               <a
//                 href="https://www.instagram.com/vitaprozen/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="Instagram"
//                 className="hover:text-pink-500 transition-colors"
//               >
//                 <FaInstagramSquare size={22} />
//               </a>
//             </li>
//             <li>
//               <a
//                 href="https://www.pinterest.com/vitaprozen/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="Pinterest"
//                 className="hover:text-red-700 transition-colors"
//               >
//                 <FaPinterest size={22} />
//               </a>
//             </li>
//           </ul>
//         </div>

//         {/* Section 4: Email Subscribe */}
//         <div>
//           <h3 className="text-xl font-semibold mb-4">Subscribe</h3>
//           <form className="flex flex-col sm:flex-row gap-2">
//             <input
//               type="email"
//               placeholder="Your email address"
//               className="w-full px-4 py-2 rounded-md text-gray-900 dark:text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-600 bg-gray-200 dark:bg-gray-800"
//               required
//             />
//             <button
//               type="submit"
//               className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors"
//             >
//               Subscribe
//             </button>
//           </form>
//         </div>
//       </div>

//       <hr className="border-t max-w-7xl mx-auto border-gray-300 dark:border-gray-700 mt-12" />

//       <div className="text-center text-gray-500 dark:text-gray-400 text-sm mt-6">
//         &copy; {new Date().getFullYear()} VitaProZen. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;



import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaInstagramSquare, FaPinterest } from "react-icons/fa";
import vitaProzen from "../assets/vitaprozen.jpg";

const Footer = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=DM+Sans:wght@300;400;500;600&display=swap');

        .ft-root {
          background: #2d1f14;
          font-family: 'DM Sans', sans-serif;
          position: relative;
          overflow: hidden;
        }

        /* Top wave from previous section */
        .ft-wave {
          width: 100%;
          line-height: 0;
          display: block;
        }

        /* Ambient glows */
        .ft-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          pointer-events: none;
        }
        .ft-glow-1 { width: 420px; height: 420px; top: -120px; right: -80px; background: rgba(197,130,74,0.09); }
        .ft-glow-2 { width: 300px; height: 300px; bottom: 60px; left: -60px; background: rgba(197,130,74,0.07); }

        .ft-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 72px 2rem 0;
          position: relative;
          z-index: 2;
        }

        .ft-top {
          display: grid;
          grid-template-columns: 1.6fr 1fr 1fr 1.4fr;
          gap: 48px;
          padding-bottom: 56px;
          border-bottom: 1px solid rgba(255,255,255,0.07);
        }

        /* Brand col */
        .ft-brand-logo {
          display: block;
          margin-bottom: 20px;
        }
        .ft-brand-logo img {
          height: 48px;
          border-radius: 8px;
          object-fit: contain;
        }
        .ft-brand-tagline {
          font-size: 0.9rem;
          color: rgba(254,248,240,0.55);
          line-height: 1.75;
          max-width: 230px;
        }

        .ft-social-row {
          display: flex;
          gap: 10px;
          margin-top: 28px;
        }
        .ft-social-btn {
          width: 36px; height: 36px;
          border-radius: 10px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(254,248,240,0.6);
          text-decoration: none;
          transition: background 0.2s, color 0.2s, border-color 0.2s, transform 0.2s;
        }
        .ft-social-btn:hover {
          background: #c5824a;
          border-color: #c5824a;
          color: #fff;
          transform: translateY(-2px);
        }

        /* Col headings */
        .ft-col-head {
          font-family: 'Playfair Display', serif;
          font-size: 1rem;
          font-weight: 700;
          color: #fef8f0;
          margin-bottom: 20px;
          position: relative;
          padding-bottom: 12px;
        }
        .ft-col-head::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 28px; height: 2px;
          background: #c5824a;
          border-radius: 2px;
        }

        /* Links */
        .ft-links { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 11px; }
        .ft-link {
          font-size: 0.88rem;
          color: rgba(254,248,240,0.55);
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 7px;
          transition: color 0.2s, gap 0.2s;
        }
        .ft-link::before {
          content: '';
          width: 4px; height: 4px;
          border-radius: 50%;
          background: rgba(197,130,74,0.5);
          flex-shrink: 0;
          transition: background 0.2s;
        }
        .ft-link:hover { color: #f5c99a; gap: 10px; }
        .ft-link:hover::before { background: #c5824a; }

        /* Subscribe */
        .ft-sub-text {
          font-size: 0.85rem;
          color: rgba(254,248,240,0.5);
          line-height: 1.65;
          margin-bottom: 18px;
        }
        .ft-sub-form { display: flex; flex-direction: column; gap: 10px; }
        .ft-sub-input {
          width: 100%;
          padding: 11px 16px;
          border-radius: 10px;
          border: 1.5px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.06);
          color: #fef8f0;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.88rem;
          outline: none;
          transition: border-color 0.2s, background 0.2s;
          box-sizing: border-box;
        }
        .ft-sub-input::placeholder { color: rgba(254,248,240,0.35); }
        .ft-sub-input:focus { border-color: #c5824a; background: rgba(197,130,74,0.08); }
        .ft-sub-btn {
          width: 100%;
          padding: 11px;
          border-radius: 10px;
          border: none;
          background: linear-gradient(135deg, #c5824a, #e8a86b);
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          cursor: pointer;
          transition: opacity 0.2s, transform 0.15s;
        }
        .ft-sub-btn:hover { opacity: 0.88; transform: translateY(-1px); }
        .ft-sub-btn:active { transform: translateY(0); }

        /* Bottom bar */
        .ft-bottom {
          max-width: 1200px;
          margin: 0 auto;
          padding: 22px 2rem 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          z-index: 2;
        }
        .ft-copy {
          font-size: 0.78rem;
          color: rgba(254,248,240,0.3);
          letter-spacing: 0.03em;
        }
        .ft-copy span { color: #c5824a; }
        .ft-bottom-links {
          display: flex;
          gap: 20px;
        }
        .ft-bottom-link {
          font-size: 0.78rem;
          color: rgba(254,248,240,0.3);
          text-decoration: none;
          transition: color 0.2s;
        }
        .ft-bottom-link:hover { color: #f5c99a; }

        @media (max-width: 1024px) {
          .ft-top { grid-template-columns: 1fr 1fr; gap: 36px; }
        }
        @media (max-width: 580px) {
          .ft-top { grid-template-columns: 1fr; gap: 32px; }
          .ft-bottom { flex-direction: column; gap: 12px; text-align: center; }
          .ft-inner { padding-top: 52px; }
        }
      `}</style>

      <footer className="ft-root">
        <div className="ft-glow ft-glow-1" />
        <div className="ft-glow ft-glow-2" />

        <div className="ft-inner">
          <div className="ft-top">

            {/* Brand */}
            <div>
              <Link to="/" className="ft-brand-logo">
                <img src={vitaProzen} alt="VitaProZen Logo" />
              </Link>
              <p className="ft-brand-tagline">
                Your trusted source for nutrition, health, and wellness tips to help you live a balanced, vibrant life.
              </p>
              <div className="ft-social-row">
                <a href="https://www.facebook.com/vitaprozen" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="ft-social-btn">
                  <FaFacebookF size={14} />
                </a>
                <a href="https://www.youtube.com/@vitaprozen" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="ft-social-btn">
                  <FaYoutube size={15} />
                </a>
                <a href="https://www.instagram.com/vitaprozen/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="ft-social-btn">
                  <FaInstagramSquare size={14} />
                </a>
                <a href="https://www.pinterest.com/vitaprozen/" target="_blank" rel="noopener noreferrer" aria-label="Pinterest" className="ft-social-btn">
                  <FaPinterest size={14} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="ft-col-head">Quick Links</h3>
              <ul className="ft-links">
                <li><Link to="/about" className="ft-link">About Us</Link></li>
                <li><Link to="/contact" className="ft-link">Contact</Link></li>
                <li><Link to="/blog" className="ft-link">Blog</Link></li>
                <li><Link to="/category" className="ft-link">Categories</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="ft-col-head">Legal</h3>
              <ul className="ft-links">
                <li><Link to="/terms" className="ft-link">Terms &amp; Conditions</Link></li>
                <li><Link to="/privacy" className="ft-link">Privacy Policy</Link></li>
                <li><Link to="/affiliate-disclaimers" className="ft-link">Affiliate Disclaimers</Link></li>
              </ul>
            </div>

            {/* Subscribe */}
            <div>
              <h3 className="ft-col-head">Stay Updated</h3>
              <p className="ft-sub-text">Get the latest wellness tips and product reviews delivered to your inbox.</p>
              <div className="ft-sub-form">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="ft-sub-input"
                  required
                />
                <button type="button" className="ft-sub-btn">Subscribe →</button>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom bar */}
        <div className="ft-bottom w-full block text-center md:flex md:justify-center md:items-center">
          <p className="ft-copy inline-flex items-center justify-center gap-1 w-full text-center">
            © {new Date().getFullYear()} <span>VitaProZen</span>. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;