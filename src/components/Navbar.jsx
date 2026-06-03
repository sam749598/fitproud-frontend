// import { useState } from "react";
// import { Link } from "react-router-dom";
// import vitaProzen from "../assets/vitaprozen.jpg";

// const subCategories = [
//   { name: "Beauty & Skin Care", slug: "beauty" },
//   { name: "Brain & Mental Wellness", slug: "brain" },
//   { name: "Core Health", slug: "core" },
//   { name: "Hormonal & Reproductive Health", slug: "hormone" },
//   { name: "Miscellaneous", slug: "miscellaneous" },
//   { name: "Musculoskeletal & Mobility", slug: "musculoskeletal" },
//   { name: "Organ-Specific Support", slug: "organ" },
//   { name: "Weight & Metabolism", slug: "weight" },
// ];

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false); // mobile menu
//   const [isCategoryOpen, setIsCategoryOpen] = useState(false); // mobile category dropdown

//   return (
//     <nav className="bg-[#FFF4EA] shadow-md dark:bg-gray-900">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-20 items-center max-w-5xl">
//           {/* Logo */}
//           <Link to="/" className="text-xl font-bold text-gray-800 dark:text-white">
//            <img src={vitaProzen}  alt="vitaprozen Logo" className=" h-13 rounded-sm"/>
//           </Link>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center space-x-5 font-bold text-gray-700 dark:text-gray-200">
//             <Link to="/" className="hover:text-blue-500">Home</Link>

//             {/* Desktop Category Dropdown */}
//             <div className="relative group">
//               <Link to="/category" className="hover:text-blue-500">Category</Link>
//               <div className="absolute left-0 mt-2 w-64 bg-teal-50 dark:bg-gray-800 shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
//                 <ul className="py-2">
//                   {subCategories.map(({ name, slug }) => (
//                     <li key={slug}>
//                       <Link
//                         to={`/category/${slug}`}
//                         className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-600 dark:hover:bg-gray-700"
//                       >
//                         {name}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>

//             <Link to="/blog" className="hover:text-blue-500">Blog</Link>
//           </div>

//           {/* Mobile Hamburger */}
//           <button
//             onClick={() => setIsOpen(prev => !prev)}
//             className="md:hidden text-gray-700 dark:text-gray-200 focus:outline-none"
//             aria-label="Toggle menu"
//           >
//             {isOpen ? "✖" : "☰"}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden px-4 pb-3 space-y-2 bg-gray-50 dark:bg-gray-800">
//           <Link to="/" className="block hover:text-blue-500">Home</Link>

//           {/* Mobile Category Dropdown */}
//           <button
//             onClick={() => setIsCategoryOpen(prev => !prev)}
//             className="w-full text-left flex justify-between items-center hover:text-blue-500"
//           >
//             Category
//             <span>{isCategoryOpen ? "▲" : "▼"}</span>
//           </button>

//           {isCategoryOpen && (
//             <ul className="ml-4 space-y-1">
//               {subCategories.map(({ name, slug }) => (
//                 <li key={slug}>
//                   <Link
//                     to={`/category/${slug}`}
//                     className="block hover:text-blue-500"
//                     onClick={() => setIsOpen(false)} // optionally close menu on click
//                   >
//                     {name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           )}

//           <Link to="/blog" className="block hover:text-blue-500">Blog</Link>
//         </div>
//       )}
//     </nav>
//   );
// }




// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import vitaProzen from "../assets/vitaprozen.jpg";

// const subCategories = [
//   { name: "Beauty & Skin Care", slug: "beauty", icon: "✦" },
//   { name: "Brain & Mental Wellness", slug: "brain", icon: "✦" },
//   { name: "Core Health", slug: "core", icon: "✦" },
//   { name: "Hormonal & Reproductive Health", slug: "hormone", icon: "✦" },
//   { name: "Miscellaneous", slug: "miscellaneous", icon: "✦" },
//   { name: "Musculoskeletal & Mobility", slug: "musculoskeletal", icon: "✦" },
//   { name: "Organ-Specific Support", slug: "organ", icon: "✦" },
//   { name: "Weight & Metabolism", slug: "weight", icon: "✦" },
// ];

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isCategoryOpen, setIsCategoryOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=DM+Sans:wght@300;400;500;600&display=swap');

//         .nav-root {
//           font-family: 'DM Sans', sans-serif;
//           position: sticky;
//           top: 0;
//           z-index: 100;
//           transition: all 0.4s ease;
//           background: ${scrolled ? 'rgba(254,248,240,0.97)' : '#fef8f0'};
//           box-shadow: ${scrolled ? '0 2px 32px rgba(120,70,20,0.10)' : 'none'};
//           border-bottom: 1.5px solid #f0e4d0;
//           backdrop-filter: blur(12px);
//         }
//         .nav-inner {
//           max-width: 1200px;
//           margin: 0 auto;
//           padding: 0 2rem;
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           height: 72px;
//         }
//         .nav-logo img {
//           height: 48px;
//           border-radius: 8px;
//           object-fit: contain;
//         }
//         .nav-links {
//           display: flex;
//           align-items: center;
//           gap: 2.5rem;
//         }
//         .nav-link {
//           font-size: 0.92rem;
//           font-weight: 600;
//           letter-spacing: 0.08em;
//           text-transform: uppercase;
//           color: #4a3728;
//           text-decoration: none;
//           position: relative;
//           padding-bottom: 3px;
//           transition: color 0.2s;
//         }
//         .nav-link::after {
//           content: '';
//           position: absolute;
//           bottom: 0;
//           left: 0;
//           width: 0;
//           height: 2px;
//           background: linear-gradient(90deg, #c5824a, #e8a86b);
//           border-radius: 2px;
//           transition: width 0.3s ease;
//         }
//         .nav-link:hover { color: #c5824a; }
//         .nav-link:hover::after { width: 100%; }

//         .category-wrapper {
//           position: relative;
//         }
//         .dropdown {
//           position: absolute;
//           top: calc(100% + 18px);
//           left: 50%;
//           transform: translateX(-50%);
//           width: 260px;
//           background: #fff;
//           border: 1.5px solid #f0e4d0;
//           border-radius: 16px;
//           box-shadow: 0 16px 48px rgba(120,70,20,0.13);
//           opacity: 0;
//           visibility: hidden;
//           transform: translateX(-50%) translateY(-8px);
//           transition: all 0.25s ease;
//           overflow: hidden;
//         }
//         .dropdown::before {
//           content: '';
//           position: absolute;
//           top: -7px;
//           left: 50%;
//           transform: translateX(-50%);
//           width: 14px;
//           height: 14px;
//           background: #fff;
//           border-top: 1.5px solid #f0e4d0;
//           border-left: 1.5px solid #f0e4d0;
//           transform: translateX(-50%) rotate(45deg);
//         }
//         .category-wrapper:hover .dropdown {
//           opacity: 1;
//           visibility: visible;
//           transform: translateX(-50%) translateY(0);
//         }
//         .dropdown-item {
//           display: flex;
//           align-items: center;
//           gap: 10px;
//           padding: 11px 20px;
//           color: #5a4035;
//           font-size: 0.88rem;
//           font-weight: 500;
//           text-decoration: none;
//           transition: background 0.15s, color 0.15s;
//           border-bottom: 1px solid #faf3ea;
//         }
//         .dropdown-item:last-child { border-bottom: none; }
//         .dropdown-item:hover {
//           background: #fef3e7;
//           color: #c5824a;
//         }
//         .dropdown-item span.dot {
//           width: 6px; height: 6px;
//           border-radius: 50%;
//           background: #e8c9a0;
//           flex-shrink: 0;
//           transition: background 0.15s;
//         }
//         .dropdown-item:hover span.dot { background: #c5824a; }

//         /* Hamburger */
//         .hamburger {
//           display: none;
//           flex-direction: column;
//           gap: 5px;
//           cursor: pointer;
//           padding: 4px;
//           background: none;
//           border: none;
//         }
//         .hamburger span {
//           width: 24px;
//           height: 2px;
//           background: #4a3728;
//           border-radius: 2px;
//           transition: all 0.3s;
//           display: block;
//         }
//         .hamburger.open span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
//         .hamburger.open span:nth-child(2) { opacity: 0; }
//         .hamburger.open span:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }

//         /* Mobile menu */
//         .mobile-menu {
//           background: #fef8f0;
//           border-top: 1.5px solid #f0e4d0;
//           padding: 1rem 1.5rem 1.5rem;
//           display: flex;
//           flex-direction: column;
//           gap: 0;
//         }
//         .mobile-link {
//           display: block;
//           padding: 14px 0;
//           color: #4a3728;
//           font-weight: 600;
//           font-size: 0.95rem;
//           letter-spacing: 0.06em;
//           text-transform: uppercase;
//           text-decoration: none;
//           border-bottom: 1px solid #f0e4d0;
//           transition: color 0.2s;
//         }
//         .mobile-link:hover { color: #c5824a; }
//         .mobile-cat-toggle {
//           width: 100%;
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           padding: 14px 0;
//           color: #4a3728;
//           font-weight: 600;
//           font-size: 0.95rem;
//           letter-spacing: 0.06em;
//           text-transform: uppercase;
//           background: none;
//           border: none;
//           border-bottom: 1px solid #f0e4d0;
//           cursor: pointer;
//           font-family: 'DM Sans', sans-serif;
//           transition: color 0.2s;
//         }
//         .mobile-cat-toggle:hover { color: #c5824a; }
//         .mobile-cat-toggle svg {
//           transition: transform 0.3s;
//         }
//         .mobile-cat-toggle.open svg { transform: rotate(180deg); }
//         .mobile-submenu {
//           padding: 8px 0 8px 12px;
//           border-bottom: 1px solid #f0e4d0;
//         }
//         .mobile-sub-link {
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           padding: 10px 0;
//           color: #6b5040;
//           font-size: 0.875rem;
//           text-decoration: none;
//           transition: color 0.2s;
//         }
//         .mobile-sub-link:hover { color: #c5824a; }
//         .mobile-sub-link::before {
//           content: '';
//           width: 5px; height: 5px;
//           border-radius: 50%;
//           background: #e8c9a0;
//           flex-shrink: 0;
//         }

//         @media (max-width: 768px) {
//           .nav-links { display: none; }
//           .hamburger { display: flex; }
//         }
//       `}</style>

//       <nav className="nav-root">
//         <div className="nav-inner">
//           <Link to="/" className="nav-logo">
//             <img src={vitaProzen} alt="VitaProZen Logo" />
//           </Link>

//           <div className="nav-links">
//             <Link to="/" className="nav-link">Home</Link>

//             <div className="category-wrapper">
//               <Link to="/category" className="nav-link">Categories</Link>
//               <div className="dropdown">
//                 {subCategories.map(({ name, slug }) => (
//                   <Link key={slug} to={`/category/${slug}`} className="dropdown-item">
//                     <span className="dot"></span>
//                     {name}
//                   </Link>
//                 ))}
//               </div>
//             </div>

//             <Link to="/blog" className="nav-link">Blog</Link>
//           </div>

//           <button
//             className={`hamburger ${isOpen ? "open" : ""}`}
//             onClick={() => setIsOpen(p => !p)}
//             aria-label="Toggle menu"
//           >
//             <span /><span /><span />
//           </button>
//         </div>

//         {isOpen && (
//           <div className="mobile-menu">
//             <Link to="/" className="mobile-link" onClick={() => setIsOpen(false)}>Home</Link>

//             <button
//               className={`mobile-cat-toggle ${isCategoryOpen ? "open" : ""}`}
//               onClick={() => setIsCategoryOpen(p => !p)}
//             >
//               Categories
//               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <polyline points="6 9 12 15 18 9"/>
//               </svg>
//             </button>

//             {isCategoryOpen && (
//               <div className="mobile-submenu">
//                 {subCategories.map(({ name, slug }) => (
//                   <Link
//                     key={slug}
//                     to={`/category/${slug}`}
//                     className="mobile-sub-link"
//                     onClick={() => setIsOpen(false)}
//                   >
//                     {name}
//                   </Link>
//                 ))}
//               </div>
//             )}

//             <Link to="/blog" className="mobile-link" onClick={() => setIsOpen(false)}>Blog</Link>
//           </div>
//         )}
//       </nav>
//     </>
//   );
// }






// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import vitaProzen from "../assets/vitaprozen.jpg";

// const subCategories = [
//   { name: "Beauty & Skin Care", slug: "beauty", icon: "✦" },
//   { name: "Brain & Mental Wellness", slug: "brain", icon: "✦" },
//   { name: "Core Health", slug: "core", icon: "✦" },
//   { name: "Hormonal & Reproductive Health", slug: "hormone", icon: "✦" },
//   { name: "Miscellaneous", slug: "miscellaneous", icon: "✦" },
//   { name: "Musculoskeletal & Mobility", slug: "musculoskeletal", icon: "✦" },
//   { name: "Organ-Specific Support", slug: "organ", icon: "✦" },
//   { name: "Weight & Metabolism", slug: "weight", icon: "✦" },
// ];

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isCategoryOpen, setIsCategoryOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=DM+Sans:wght@300;400;500;600&display=swap');


//         .nav-inner {
//           max-width: 1200px;
//           margin: 0 auto;
//           padding: 0 2rem;
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           height: 72px;
//         }
//         .nav-logo img {
//           height: 48px;
//           border-radius: 8px;
//           object-fit: contain;
//         }
//         .nav-links {
//           display: flex;
//           align-items: center;
//           gap: 2.5rem;
//         }
//         .nav-link {
//           font-size: 0.92rem;
//           font-weight: 600;
//           letter-spacing: 0.08em;
//           text-transform: uppercase;
//           color: #4a3728;
//           text-decoration: none;
//           position: relative;
//           padding-bottom: 3px;
//           transition: color 0.2s;
//         }
//         .nav-link::after {
//           content: '';
//           position: absolute;
//           bottom: 0;
//           left: 0;
//           width: 0;
//           height: 2px;
//           background: linear-gradient(90deg, #c5824a, #e8a86b);
//           border-radius: 2px;
//           transition: width 0.3s ease;
//         }
//         .nav-link:hover { color: #c5824a; }
//         .nav-link:hover::after { width: 100%; }

//         .category-wrapper {
//           position: relative;
//         }
//         .dropdown {
//           position: absolute;
//           top: calc(100% + 18px);
//           left: 50%;
//           transform: translateX(-50%);
//           width: 260px;
//           background: #fff;
//           border: 1.5px solid #f0e4d0;
//           border-radius: 16px;
//           box-shadow: 0 16px 48px rgba(120,70,20,0.13);
//           opacity: 0;
//           visibility: hidden;
//           transform: translateX(-50%) translateY(-8px);
//           transition: all 0.25s ease;
//           overflow: hidden;
//         }
//         .dropdown::before {
//           content: '';
//           position: absolute;
//           top: -7px;
//           left: 50%;
//           transform: translateX(-50%);
//           width: 14px;
//           height: 14px;
//           background: #fff;
//           border-top: 1.5px solid #f0e4d0;
//           border-left: 1.5px solid #f0e4d0;
//           transform: translateX(-50%) rotate(45deg);
//         }
//         .category-wrapper:hover .dropdown {
//           opacity: 1;
//           visibility: visible;
//           transform: translateX(-50%) translateY(0);
//         }
//         .dropdown-item {
//           display: flex;
//           align-items: center;
//           gap: 10px;
//           padding: 11px 20px;
//           color: #5a4035;
//           font-size: 0.88rem;
//           font-weight: 500;
//           text-decoration: none;
//           transition: background 0.15s, color 0.15s;
//           border-bottom: 1px solid #faf3ea;
//         }
//         .dropdown-item:last-child { border-bottom: none; }
//         .dropdown-item:hover {
//           background: #fef3e7;
//           color: #c5824a;
//         }
//         .dropdown-item span.dot {
//           width: 6px; height: 6px;
//           border-radius: 50%;
//           background: #e8c9a0;
//           flex-shrink: 0;
//           transition: background 0.15s;
//         }
//         .dropdown-item:hover span.dot { background: #c5824a; }

//         /* Hamburger */
//         .hamburger {
//           display: none;
//           flex-direction: column;
//           gap: 5px;
//           cursor: pointer;
//           padding: 4px;
//           background: none;
//           border: none;
//         }
//         .hamburger span {
//           width: 24px;
//           height: 2px;
//           background: #4a3728;
//           border-radius: 2px;
//           transition: all 0.3s;
//           display: block;
//         }
//         .hamburger.open span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
//         .hamburger.open span:nth-child(2) { opacity: 0; }
//         .hamburger.open span:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }

//         /* Mobile menu */
//         .mobile-menu {
//           background: #fef8f0;
//           border-top: 1.5px solid #f0e4d0;
//           padding: 1rem 1.5rem 1.5rem;
//           display: flex;
//           flex-direction: column;
//           gap: 0;
//         }
//         .mobile-link {
//           display: block;
//           padding: 14px 0;
//           color: #4a3728;
//           font-weight: 600;
//           font-size: 0.95rem;
//           letter-spacing: 0.06em;
//           text-transform: uppercase;
//           text-decoration: none;
//           border-bottom: 1px solid #f0e4d0;
//           transition: color 0.2s;
//         }
//         .mobile-link:hover { color: #c5824a; }
//         .mobile-cat-toggle {
//           width: 100%;
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           padding: 14px 0;
//           color: #4a3728;
//           font-weight: 600;
//           font-size: 0.95rem;
//           letter-spacing: 0.06em;
//           text-transform: uppercase;
//           background: none;
//           border: none;
//           border-bottom: 1px solid #f0e4d0;
//           cursor: pointer;
//           font-family: 'DM Sans', sans-serif;
//           transition: color 0.2s;
//         }
//         .mobile-cat-toggle:hover { color: #c5824a; }
//         .mobile-cat-toggle svg {
//           transition: transform 0.3s;
//         }
//         .mobile-cat-toggle.open svg { transform: rotate(180deg); }
//         .mobile-submenu {
//           padding: 8px 0 8px 12px;
//           border-bottom: 1px solid #f0e4d0;
//         }
//         .mobile-sub-link {
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           padding: 10px 0;
//           color: #6b5040;
//           font-size: 0.875rem;
//           text-decoration: none;
//           transition: color 0.2s;
//         }
//         .mobile-sub-link:hover { color: #c5824a; }
//         .mobile-sub-link::before {
//           content: '';
//           width: 5px; height: 5px;
//           border-radius: 50%;
//           background: #e8c9a0;
//           flex-shrink: 0;
//         }

//         @media (max-width: 768px) {
//           .nav-links { display: none; }
//           .hamburger { display: flex; }
//         }
//       `}</style>

//       <nav className="nav-root">
//         <div className="nav-inner">
//           <Link to="/" className="nav-logo">
//             <img src={vitaProzen} alt="VitaProZen Logo" />
//           </Link>

//           <div className="nav-links">
//             <Link to="/" className="nav-link">Home</Link>

//             <div className="category-wrapper">
//               <Link to="/category" className="nav-link">Categories</Link>
//               <div className="dropdown">
//                 {subCategories.map(({ name, slug }) => (
//                   <Link key={slug} to={`/category/${slug}`} className="dropdown-item">
//                     <span className="dot"></span>
//                     {name}
//                   </Link>
//                 ))}
//               </div>
//             </div>

//             <Link to="/blog" className="nav-link">Blog</Link>
//           </div>

//           <button
//             className={`hamburger ${isOpen ? "open" : ""}`}
//             onClick={() => setIsOpen(p => !p)}
//             aria-label="Toggle menu"
//           >
//             <span /><span /><span />
//           </button>
//         </div>

//         {isOpen && (
//           <div className="mobile-menu">
//             <Link to="/" className="mobile-link" onClick={() => setIsOpen(false)}>Home</Link>

//             <button
//               className={`mobile-cat-toggle ${isCategoryOpen ? "open" : ""}`}
//               onClick={() => setIsCategoryOpen(p => !p)}
//             >
//               Categories
//               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <polyline points="6 9 12 15 18 9"/>
//               </svg>
//             </button>

//             {isCategoryOpen && (
//               <div className="mobile-submenu">
//                 {subCategories.map(({ name, slug }) => (
//                   <Link
//                     key={slug}
//                     to={`/category/${slug}`}
//                     className="mobile-sub-link"
//                     onClick={() => setIsOpen(false)}
//                   >
//                     {name}
//                   </Link>
//                 ))}
//               </div>
//             )}

//             <Link to="/blog" className="mobile-link" onClick={() => setIsOpen(false)}>Blog</Link>
//           </div>
//         )}
//       </nav>
//     </>
//   );
// }




// ======================== Navbar.jsx ========================
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import vitaProzen from "../assets/vitaprozen.jpg";

const subCategories = [
  { name: "Beauty & Skin Care", slug: "beauty", icon: "✦" },
  { name: "Brain & Mental Wellness", slug: "brain", icon: "✦" },
  { name: "Core Health", slug: "core", icon: "✦" },
  { name: "Hormonal & Reproductive Health", slug: "hormone", icon: "✦" },
  { name: "Miscellaneous", slug: "miscellaneous", icon: "✦" },
  { name: "Musculoskeletal & Mobility", slug: "musculoskeletal", icon: "✦" },
  { name: "Organ-Specific Support", slug: "organ", icon: "✦" },
  { name: "Weight & Metabolism", slug: "weight", icon: "✦" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600;700&display=swap');

        .nav-root {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: linear-gradient(135deg, #FFF9F5 0%, #FEF3E9 100%);
          backdrop-filter: blur(0px);
          transition: all 0.3s ease;
          border-bottom: 1px solid rgba(197, 130, 74, 0.15);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
        }

        .nav-root.scrolled {
          background: rgba(255, 249, 245, 0.92);
          backdrop-filter: blur(12px);
          border-bottom-color: rgba(197, 130, 74, 0.25);
          box-shadow: 0 8px 32px rgba(120, 70, 20, 0.08);
        }

        .nav-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 72px;
        }
        .nav-logo img {
          height: 48px;
          border-radius: 12px;
          object-fit: contain;
          filter: drop-shadow(0 2px 6px rgba(197, 130, 74, 0.2));
          transition: transform 0.3s ease;
        }
        .nav-logo:hover img {
          transform: scale(1.02);
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 2.5rem;
        }
        .nav-link {
          font-size: 0.92rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          background: linear-gradient(135deg, #5C3D2E 0%, #8B5E3C 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          text-decoration: none;
          position: relative;
          padding-bottom: 3px;
          transition: all 0.3s ease;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #C5824A, #E8A86B, #F5C99A);
          border-radius: 2px;
          transition: width 0.3s ease;
        }
        .nav-link:hover {
          background: linear-gradient(135deg, #C5824A 0%, #E8A86B 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .nav-link:hover::after { width: 100%; }

        .category-wrapper {
          position: relative;
        }
        .dropdown {
          position: absolute;
          top: calc(100% + 18px);
          left: 50%;
          transform: translateX(-50%);
          width: 260px;
          background: linear-gradient(135deg, #FFFFFF 0%, #FEF9F4 100%);
          border: 1px solid rgba(197, 130, 74, 0.2);
          border-radius: 20px;
          box-shadow: 0 20px 40px rgba(120, 70, 20, 0.12), 0 4px 12px rgba(0, 0, 0, 0.05);
          opacity: 0;
          visibility: hidden;
          transform: translateX(-50%) translateY(-8px);
          transition: all 0.3s cubic-bezier(0.2, 0.9, 0.4, 1.1);
          overflow: hidden;
        }
        .dropdown::before {
          content: '';
          position: absolute;
          top: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 16px;
          height: 16px;
          background: linear-gradient(135deg, #FFFFFF 0%, #FEF9F4 100%);
          border-top: 1px solid rgba(197, 130, 74, 0.2);
          border-left: 1px solid rgba(197, 130, 74, 0.2);
          transform: translateX(-50%) rotate(45deg);
        }
        .category-wrapper:hover .dropdown {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(0);
        }
        .dropdown-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 20px;
          background: linear-gradient(135deg, transparent, transparent);
          color: #5C3D2E;
          font-size: 0.88rem;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.25s ease;
          border-bottom: 1px solid rgba(197, 130, 74, 0.08);
        }
        .dropdown-item:last-child { border-bottom: none; }
        .dropdown-item:hover {
          background: linear-gradient(90deg, rgba(197, 130, 74, 0.08), rgba(232, 168, 107, 0.08));
          color: #C5824A;
          padding-left: 26px;
        }
        .dropdown-item span.dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: linear-gradient(135deg, #C5824A, #E8A86B);
          flex-shrink: 0;
          transition: all 0.2s;
        }
        .dropdown-item:hover span.dot {
          width: 8px;
          height: 8px;
          background: linear-gradient(135deg, #E8A86B, #F5C99A);
        }

        /* Hamburger */
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          padding: 4px;
          background: none;
          border: none;
        }
        .hamburger span {
          width: 24px;
          height: 2px;
          background: linear-gradient(90deg, #C5824A, #8B5E3C);
          border-radius: 2px;
          transition: all 0.3s;
          display: block;
        }
        .hamburger.open span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); background: #C5824A; }
        .hamburger.open span:nth-child(2) { opacity: 0; }
        .hamburger.open span:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); background: #C5824A; }

        /* Mobile menu */
        .mobile-menu {
          background: linear-gradient(135deg, #FFF9F5 0%, #FEF3E9 100%);
          border-top: 1px solid rgba(197, 130, 74, 0.2);
          padding: 1rem 1.5rem 1.8rem;
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .mobile-link {
          display: block;
          padding: 14px 0;
          background: linear-gradient(135deg, #5C3D2E 0%, #8B5E3C 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          font-weight: 700;
          font-size: 0.95rem;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          text-decoration: none;
          border-bottom: 1px solid rgba(197, 130, 74, 0.15);
          transition: all 0.2s;
        }
        .mobile-link:hover {
          background: linear-gradient(135deg, #C5824A 0%, #E8A86B 100%);
          -webkit-background-clip: text;
          background-clip: text;
          padding-left: 8px;
        }
        .mobile-cat-toggle {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 14px 0;
          background: linear-gradient(135deg, #5C3D2E 0%, #8B5E3C 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          font-weight: 700;
          font-size: 0.95rem;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          border: none;
          border-bottom: 1px solid rgba(197, 130, 74, 0.15);
          cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          transition: all 0.2s;
        }
        .mobile-cat-toggle:hover {
          padding-left: 8px;
          background: linear-gradient(135deg, #C5824A 0%, #E8A86B 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .mobile-cat-toggle svg {
          transition: transform 0.3s;
          stroke: #C5824A;
        }
        .mobile-cat-toggle.open svg { transform: rotate(180deg); }
        .mobile-submenu {
          padding: 8px 0 8px 16px;
          border-bottom: 1px solid rgba(197, 130, 74, 0.1);
        }
        .mobile-sub-link {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 0;
          color: #7A5A48;
          font-size: 0.875rem;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.2s;
        }
        .mobile-sub-link:hover {
          color: #C5824A;
          padding-left: 8px;
        }
        .mobile-sub-link::before {
          content: '';
          width: 5px; height: 5px;
          border-radius: 50%;
          background: linear-gradient(135deg, #C5824A, #E8A86B);
          flex-shrink: 0;
          transition: all 0.2s;
        }
        .mobile-sub-link:hover::before {
          width: 8px;
          height: 8px;
        }

        @media (max-width: 768px) {
          .nav-links { display: none; }
          .hamburger { display: flex; }
        }

        @media (min-width: 769px) {
          .mobile-menu {
            display: none !important;
          }
        }

      `}</style>

      <nav className={`nav-root ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-inner">
          <Link to="/" className="nav-logo">
            <img src={vitaProzen} alt="VitaProZen Logo" />
          </Link>

          <div className="nav-links">
            <Link to="/" className="nav-link">Home</Link>

            <div className="category-wrapper">
              <Link to="/category" className="nav-link">Categories</Link>
              <div className="dropdown">
                {subCategories.map(({ name, slug }) => (
                  <Link key={slug} to={`/category/${slug}`} className="dropdown-item">
                    <span className="dot"></span>
                    {name}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/blog" className="nav-link">Blog</Link>
          </div>

          <button
            className={`hamburger ${isOpen ? "open" : ""}`}
            onClick={() => setIsOpen(p => !p)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>

        {isOpen && (
          <div className="mobile-menu">
            <Link to="/" className="mobile-link" onClick={() => setIsOpen(false)}>Home</Link>

            <button
              className={`mobile-cat-toggle ${isCategoryOpen ? "open" : ""}`}
              onClick={() => setIsCategoryOpen(p => !p)}
            >
              Categories
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {isCategoryOpen && (
              <div className="mobile-submenu">
                {subCategories.map(({ name, slug }) => (
                  <Link
                    key={slug}
                    to={`/category/${slug}`}
                    className="mobile-sub-link"
                    onClick={() => setIsOpen(false)}
                  >
                    {name}
                  </Link>
                ))}
              </div>
            )}

            <Link to="/blog" className="mobile-link" onClick={() => setIsOpen(false)}>Blog</Link>
          </div>
        )}
      </nav>
    </>
  );
}