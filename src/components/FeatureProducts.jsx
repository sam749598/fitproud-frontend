// import React, { useState, useEffect } from "react";
// import prod1 from "../assets/Feature_products/prod1.jpg";
// import prod2 from "../assets/Feature_products/prod2.jpg";
// import prod3 from "../assets/Feature_products/prod3.jpg";
// import prod4 from "../assets/Feature_products/prod4.jpg";
// import prod5 from "../assets/Feature_products/prod5.jpg";
// import prod6 from "../assets/Feature_products/prod6.jpg";
// import prod7 from "../assets/Feature_products/prod7.jpg";
// import prod8 from "../assets/Feature_products/prod8.jpg";

// const products = [
//   { 
//     id: 1, 
//     img: prod1, 
//     name: "EduNand",
//     description: "Longevity",
//     affiliateLink: "https://nplink.net/zpg6kfhr"
//   },
//   { 
//     id: 2, 
//     img: prod2, 
//     name: "Uticarin",
//     description: "Urinary Tract Support",
//     affiliateLink: "https://nplink.net/n7mdneh9"
//   },
//   { 
//     id: 3, 
//     img: prod3, 
//     name: "Crave Burner",
//     description: "Appetite Suppressant",
//     affiliateLink: "https://nplink.net/mlh23d4h"
//   },
//   { 
//     id: 4, 
//     img: prod4, 
//     name: "Flexmore",
//     description: "Joint Health",
//     affiliateLink: "https://nplink.net/187tfaud"
//   },
//   { 
//     id: 5, 
//     img: prod5, 
//     name: "Eyevita Plus",
//     description: "Eye Health",
//     affiliateLink: "https://nplink.net/84ld1ai0"
//   },
//   { 
//     id: 6, 
//     img: prod6, 
//     name: "Matcha Extreme",
//     description: "Weight Loss",
//     affiliateLink: "https://nplink.net/ubfcsi6l"
//   },
//   { 
//     id: 7, 
//     img: prod7, 
//     name: "Prenatalin",
//     description: "Prenatal Care",
//     affiliateLink: "https://nplink.net/nsbihid4"
//   },
//    { 
//     id: 8, 
//     img: prod8, 
//     name: "Prostan Plus",
//     description: "Prostate Health",
//     affiliateLink: "https://nplink.net/ma3r6g6i"
//   },
// ];

// const FeatureProducts = () => {
//   const [isPaused, setIsPaused] = useState(false);
//   const [isVisible, setIsVisible] = useState(false);
//   const [showAll, setShowAll] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setIsVisible(entry.isIntersecting);
//       },
//       { threshold: 0.1 }
//     );

//     const element = document.getElementById('featured-products');
//     if (element) observer.observe(element);

//     return () => {
//       if (element) observer.unobserve(element);
//     };
//   }, []);

//   const handleBuyNow = (link) => {
//     window.open(link, '_blank', 'noopener,noreferrer');
//   };

//   return (
//     <div id="featured-products" className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
//       {/* Background decoration */}
//       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section header */}
//         <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//           <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 mb-4">
//             ✨ Featured Products
//           </h2>
//           <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
//             Discover our curated selection of premium products from trusted partners
//           </p>
//         </div>

//         {/* Decorative line */}
//         <div className={`mx-auto mb-12 h-1 max-w-xs rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 transition-all duration-1000 ${isVisible ? 'scale-x-100' : 'scale-x-0'}`}></div>

//         {/* Toggle button */}
//         <div className="text-center mb-8">
//           <button 
//             onClick={() => setShowAll(!showAll)}
//             className="px-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-md"
//           >
//             {showAll ? 'Show Featured Only' : 'Show All Products'}
//           </button>
//         </div>

//         {/* Products container */}
//         {showAll ? (
//           // Grid view for all products
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//             {products.map((product, index) => (
//               <div
//                 key={product.id}
//                 className={`rounded-2xl overflow-hidden shadow-lg backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 border border-white/20 dark:border-gray-700/50 transform transition-all duration-500 hover:scale-105 hover:shadow-xl ${isVisible ? 'opacity-100' : 'opacity-0'}`}
//                 style={{ transitionDelay: `${index * 100}ms` }}
//               >
//                 {/* Product image */}
//                 <div className="relative h-48 overflow-hidden">
//                   <img
//                     src={product.img}
//                     alt={product.name}
//                     className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
//                   />
//                 </div>
                
//                 {/* Product info */}
//                 <div className="p-5">
//                   <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{product.name}</h3>
//                   <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{product.description}</p>
                  
//                   {/* Buy Now button */}
//                   <button 
//                     onClick={() => handleBuyNow(product.affiliateLink)}
//                     className="w-full py-2.5 px-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg"
//                   >
//                     Buy Now
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           // Carousel view for featured products
//           <div 
//             className="overflow-hidden"
//             onMouseEnter={() => setIsPaused(true)}
//             onMouseLeave={() => setIsPaused(false)}
//           >
//             <div className={`flex gap-6 ${isPaused ? 'animate-paused' : 'animate-scroll'}`}>
//               {[...products, ...products].map((product, index) => (
//                 <div
//                   key={index}
//                   className={`min-w-[280px] sm:min-w-[320px] rounded-2xl overflow-hidden shadow-lg backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 border border-white/20 dark:border-gray-700/50 transform transition-all duration-500 hover:scale-105 hover:shadow-xl ${isVisible ? 'opacity-100' : 'opacity-0'}`}
//                   style={{ transitionDelay: `${index * 100}ms` }}
//                 >
//                   {/* Product image */}
//                   <div className="relative h-48 overflow-hidden">
//                     <img
//                       src={product.img}
//                       alt={product.name}
//                       className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
//                     />
//                   </div>
                  
//                   {/* Product info */}
//                   <div className="p-5">
//                     <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{product.name}</h3>
//                     <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{product.description}</p>
                    
//                     {/* Buy Now button */}
//                     <button 
//                       onClick={() => handleBuyNow(product.affiliateLink)}
//                       className="w-full py-2.5 px-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg"
//                     >
//                       Buy Now
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Decorative line */}
//         <div className={`mx-auto mt-12 h-1 max-w-xs rounded-full bg-gradient-to-l from-pink-500 via-purple-500 to-indigo-500 transition-all duration-1000 ${isVisible ? 'scale-x-100' : 'scale-x-0'}`}></div>
//       </div>

//       <style jsx global>{`
//         @keyframes scroll {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }
//         .animate-scroll {
//           animation: scroll 30s linear infinite;
//         }
//         .animate-paused {
//           animation-play-state: paused;
//         }
//         @keyframes blob {
//           0% { transform: translate(0px, 0px) scale(1); }
//           33% { transform: translate(30px, -50px) scale(1.1); }
//           66% { transform: translate(-20px, 20px) scale(0.9); }
//           100% { transform: translate(0px, 0px) scale(1); }
//         }
//         .animate-blob {
//           animation: blob 7s infinite;
//         }
//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default FeatureProducts;




import React, { useState, useEffect } from "react";
import prod1 from "../assets/Feature_products/prod1.jpg";
import prod2 from "../assets/Feature_products/prod2.jpg";
import prod3 from "../assets/Feature_products/prod3.jpg";
import prod4 from "../assets/Feature_products/prod4.jpg";
import prod5 from "../assets/Feature_products/prod5.jpg";
import prod6 from "../assets/Feature_products/prod6.jpg";
import prod7 from "../assets/Feature_products/prod7.jpg";
import prod8 from "../assets/Feature_products/prod8.jpg";

const products = [
  { id: 1, img: prod1, name: "EduNand", description: "Longevity", affiliateLink: "https://nplink.net/zpg6kfhr" },
  { id: 2, img: prod2, name: "Uticarin", description: "Urinary Tract Support", affiliateLink: "https://nplink.net/n7mdneh9" },
  { id: 3, img: prod3, name: "Crave Burner", description: "Appetite Suppressant", affiliateLink: "https://nplink.net/mlh23d4h" },
  { id: 4, img: prod4, name: "Flexmore", description: "Joint Health", affiliateLink: "https://nplink.net/187tfaud" },
  { id: 5, img: prod5, name: "Eyevita Plus", description: "Eye Health", affiliateLink: "https://nplink.net/84ld1ai0" },
  { id: 6, img: prod6, name: "Matcha Extreme", description: "Weight Loss", affiliateLink: "https://nplink.net/ubfcsi6l" },
  { id: 7, img: prod7, name: "Prenatalin", description: "Prenatal Care", affiliateLink: "https://nplink.net/nsbihid4" },
  { id: 8, img: prod8, name: "Prostan Plus", description: "Prostate Health", affiliateLink: "https://nplink.net/ma3r6g6i" },
];

const FeatureProducts = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [visible, setVisible] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const el = document.getElementById("fp-section");
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.08 });
    if (el) obs.observe(el);
    return () => { if (el) obs.unobserve(el); };
  }, []);

  const handleBuyNow = (link) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=DM+Sans:wght@300;400;500;600&display=swap');

        .fp-section {
          background: #2d1f14;
          padding: 88px 0 80px;
          position: relative;
          overflow: hidden;
        }
        .fp-noise {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          opacity: 0.4;
        }
        .fp-glow {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(80px);
        }
        .fp-glow-1 { width: 400px; height: 400px; top: -100px; right: -100px; background: rgba(197,130,74,0.12); }
        .fp-glow-2 { width: 300px; height: 300px; bottom: -80px; left: 10%; background: rgba(197,130,74,0.08); }

        .fp-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 2;
        }

        .fp-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 52px;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.7s, transform 0.7s;
        }
        .fp-header.visible { opacity: 1; transform: translateY(0); }

        .fp-eyebrow {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #c5824a;
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .fp-eyebrow::before {
          content: '';
          width: 32px; height: 2px;
          background: #c5824a;
          border-radius: 2px;
        }
        .fp-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.9rem, 3vw, 2.6rem);
          font-weight: 700;
          color: #fef8f0;
          line-height: 1.15;
        }

        .fp-toggle {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.82rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 10px 24px;
          border-radius: 40px;
          border: 1.5px solid rgba(197,130,74,0.5);
          background: transparent;
          color: #c5824a;
          cursor: pointer;
          transition: all 0.25s ease;
          white-space: nowrap;
        }
        .fp-toggle:hover {
          background: #c5824a;
          color: #fff;
          border-color: #c5824a;
        }

        /* Carousel */
        .fp-carousel-wrap {
          overflow: hidden;
          mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
        }
        .fp-carousel-track {
          display: flex;
          gap: 22px;
          width: max-content;
          animation: fpScroll 35s linear infinite;
        }
        .fp-carousel-track.paused { animation-play-state: paused; }

        @keyframes fpScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* Grid */
        .fp-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        /* Card */
        .fp-card {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 18px;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
          min-width: 260px;
        }
        .fp-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.4);
          border-color: rgba(197,130,74,0.35);
        }
        .fp-card-img-wrap {
          height: 200px;
          overflow: hidden;
          position: relative;
        }
        .fp-card-img-wrap img {
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }
        .fp-card:hover .fp-card-img-wrap img { transform: scale(1.06); }
        .fp-card-img-wrap::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 50%;
          background: linear-gradient(to top, rgba(30,15,5,0.5), transparent);
        }

        .fp-card-body {
          padding: 18px 18px 20px;
        }
        .fp-card-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #c5824a;
          margin-bottom: 5px;
        }
        .fp-card-name {
          font-family: 'Playfair Display', serif;
          font-size: 1.15rem;
          font-weight: 600;
          color: #fef8f0;
          margin-bottom: 16px;
        }
        .fp-buy-btn {
          width: 100%;
          padding: 10px;
          border-radius: 10px;
          border: none;
          background: linear-gradient(135deg, #c5824a 0%, #e8a86b 100%);
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          cursor: pointer;
          transition: opacity 0.2s, transform 0.15s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
        }
        .fp-buy-btn:hover { opacity: 0.88; transform: scale(1.02); }
        .fp-buy-btn:active { transform: scale(0.98); }

        @media (max-width: 1024px) { .fp-grid { grid-template-columns: repeat(3, 1fr); } }
        @media (max-width: 720px) {
          .fp-grid { grid-template-columns: repeat(2, 1fr); gap: 14px; }
          .fp-header { flex-direction: column; align-items: flex-start; gap: 16px; }
          .fp-section { padding: 64px 0; }
        }
        @media (max-width: 460px) { .fp-grid { grid-template-columns: 1fr 1fr; gap: 12px; } }
      `}</style>

      <div id="fp-section" className="fp-section">
        <div className="fp-noise" />
        <div className="fp-glow fp-glow-1" />
        <div className="fp-glow fp-glow-2" />

        <div className="fp-inner">
          <div className={`fp-header ${visible ? "visible" : ""}`}>
            <div>
              <p className="fp-eyebrow">Curated picks</p>
              <h2 className="fp-title">Featured<br />Products</h2>
            </div>
            <button className="fp-toggle" onClick={() => setShowAll(p => !p)}>
              {showAll ? "Show Carousel" : "View All"}
            </button>
          </div>

          {showAll ? (
            <div className="fp-grid">
              {products.map((p, i) => (
                <div
                  key={p.id}
                  className="fp-card"
                  style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(20px)", transition: `opacity 0.5s ${i * 60}ms, transform 0.5s ${i * 60}ms` }}
                >
                  <div className="fp-card-img-wrap">
                    <img src={p.img} alt={p.name} />
                  </div>
                  <div className="fp-card-body">
                    <p className="fp-card-desc">{p.description}</p>
                    <h3 className="fp-card-name">{p.name}</h3>
                    <button className="fp-buy-btn" onClick={() => handleBuyNow(p.affiliateLink)}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/>
                      </svg>
                      Buy Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div
              className="fp-carousel-wrap"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className={`fp-carousel-track ${isPaused ? "paused" : ""}`}>
                {[...products, ...products].map((p, i) => (
                  <div key={i} className="fp-card">
                    <div className="fp-card-img-wrap">
                      <img src={p.img} alt={p.name} />
                    </div>
                    <div className="fp-card-body">
                      <p className="fp-card-desc">{p.description}</p>
                      <h3 className="fp-card-name">{p.name}</h3>
                      <button className="fp-buy-btn" onClick={() => handleBuyNow(p.affiliateLink)}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/>
                        </svg>
                        Buy Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FeatureProducts;