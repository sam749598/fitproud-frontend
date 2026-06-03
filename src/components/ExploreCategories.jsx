// import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";

// // Correct imports from items folder

// import beautyImg from "../assets/items/beauty.jpg";
// import brainImg from "../assets/items/brain.jpg";
// import coreImg from "../assets/items/core.jpg";
// import hormoneImg from "../assets/items/hormone.jpg";
// import miscImg from "../assets/items/miscellaneous.jpg";
// import muscleImg from "../assets/items/musculoskeletal.jpg";
// import organImg from "../assets/items/organ.jpg";
// import weightImg from "../assets/items/weight.jpg";

// const categories = [
//   { name: "Beauty & Skin Care", image: beautyImg, link: "/category/beauty" },
//   { name: "Brain & Mental Wellness", image: brainImg, link: "/category/brain" },
//   { name: "Core Health", image: coreImg, link: "/category/core" },
//   { name: "Hormonal & Reproductive Health", image: hormoneImg, link: "/category/hormone" },
//   { name: "Miscellaneous", image: miscImg, link: "/category/miscellaneous" },
//   { name: "Musculoskeletal & Mobility", image: muscleImg, link: "/category/musculosketal" },
//   { name: "Organ-Specific Support", image: organImg, link: "/category/organ" },
//   { name: "Weight & Metabolism", image: weightImg, link: "/category/weight" },
// ];

// export default function ExploreCategories() {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setIsVisible(entry.isIntersecting);
//       },
//       { threshold: 0.1 }
//     );

//     const element = document.getElementById('explore-categories');
//     if (element) observer.observe(element);

//     return () => {
//       if (element) observer.unobserve(element);
//     };
//   }, []);

//   return (
//     <section id="explore-categories" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
//       {/* Background decoration */}
//       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section header */}
//         <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//           <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 mb-4">
//             Explore by Categories
//           </h2>
//           <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
//             Discover our comprehensive range of health and wellness products organized by category
//           </p>
//         </div>

//         {/* Decorative line */}
//         <div className={`mx-auto mb-16 h-1 max-w-xs rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 transition-all duration-1000 ${isVisible ? 'scale-x-100' : 'scale-x-0'}`}></div>

//         {/* Categories grid */}
//         <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//           {categories.map((cat, index) => (
//             <Link
//               to={cat.link}
//               key={cat.name}
//               className={`group relative rounded-2xl overflow-hidden shadow-lg backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 border border-white/20 dark:border-gray-700/50 transform transition-all duration-500 hover:scale-105 hover:shadow-xl ${isVisible ? 'opacity-100' : 'opacity-0'}`}
//               style={{ transitionDelay: `${index * 100}ms` }}
//             >
//               {/* Image with overlay */}
//               <div className="relative h-64 overflow-hidden">
//                 <div
//                   className="h-full w-full bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
//                   style={{ backgroundImage: `url(${cat.image})` }}
//                 ></div>
//                 {/* Gradient overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70"></div>
//                 {/* Hover overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-purple-600/30 to-indigo-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//               </div>
              
//               {/* Category name with icon */}
//               <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
//                 <div className="flex items-center">
//                   <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mr-3 group-hover:bg-white/30 transition-colors duration-300">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                       <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
//                     </svg>
//                   </div>
//                   <h3 className="text-xl font-bold">{cat.name}</h3>
//                 </div>
//               </div>
              
//               {/* Hover effect - shimmer */}
//               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
//             </Link>
//           ))}
//         </div>

//         {/* View all button */}
//         {/* <div className={`text-center mt-16 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//           <Link 
//             to="/categories" 
//             className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
//           >
//             View All Categories
//           </Link>
//         </div> */}
//       </div>

//       <style jsx global>{`
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
//     </section>
//   );
// }



import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import beautyImg from "../assets/items/beauty.jpg";
import brainImg from "../assets/items/brain.jpg";
import coreImg from "../assets/items/core.jpg";
import hormoneImg from "../assets/items/hormone.jpg";
import miscImg from "../assets/items/miscellaneous.jpg";
import muscleImg from "../assets/items/musculoskeletal.jpg";
import organImg from "../assets/items/organ.jpg";
import weightImg from "../assets/items/weight.jpg";

const categories = [
  { name: "Beauty & Skin Care", image: beautyImg, link: "/category/beauty", tag: "Glow" },
  { name: "Brain & Mental Wellness", image: brainImg, link: "/category/brain", tag: "Focus" },
  { name: "Core Health", image: coreImg, link: "/category/core", tag: "Vitality" },
  { name: "Hormonal & Reproductive Health", image: hormoneImg, link: "/category/hormone", tag: "Balance" },
  { name: "Miscellaneous", image: miscImg, link: "/category/miscellaneous", tag: "More" },
  { name: "Musculoskeletal & Mobility", image: muscleImg, link: "/category/musculosketal", tag: "Strength" },
  { name: "Organ-Specific Support", image: organImg, link: "/category/organ", tag: "Care" },
  { name: "Weight & Metabolism", image: weightImg, link: "/category/weight", tag: "Energy" },
];

export default function ExploreCategories() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = document.getElementById("ec-section");
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.08 });
    if (el) obs.observe(el);
    return () => { if (el) obs.unobserve(el); };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        .ec-section {
          background: #fdf7ef;
          padding: 96px 0 80px;
          position: relative;
          overflow: hidden;
        }
        .ec-bg-circle {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, #f5d9b8 0%, transparent 70%);
          pointer-events: none;
        }
        .ec-bg-c1 { width: 500px; height: 500px; top: -180px; right: -180px; opacity: 0.45; }
        .ec-bg-c2 { width: 400px; height: 400px; bottom: -150px; left: -150px; opacity: 0.35; }

        .ec-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 2;
        }

        .ec-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 56px;
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .ec-header.visible { opacity: 1; transform: translateY(0); }

        .ec-eyebrow {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #c5824a;
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .ec-eyebrow::before {
          content: '';
          width: 32px; height: 2px;
          background: #c5824a;
          border-radius: 2px;
        }
        .ec-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 3.5vw, 2.8rem);
          font-weight: 700;
          color: #2d1f14;
          line-height: 1.15;
        }
        .ec-subtitle {
          font-family: 'DM Sans', sans-serif;
          font-size: 1rem;
          color: #8a6a55;
          max-width: 340px;
          text-align: right;
          line-height: 1.6;
        }

        .ec-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .ec-card {
          position: relative;
          border-radius: 18px;
          overflow: hidden;
          aspect-ratio: 3/4;
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.55s ease, transform 0.55s ease, box-shadow 0.3s ease;
          display: block;
          text-decoration: none;
          cursor: pointer;
        }
        .ec-card.visible { opacity: 1; transform: translateY(0); }

        .ec-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }
        .ec-card:hover .ec-card-img { transform: scale(1.07); }

        .ec-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(30,15,5,0.82) 0%, rgba(30,15,5,0.15) 55%, transparent 100%);
          transition: background 0.3s ease;
        }
        .ec-card:hover .ec-card-overlay {
          background: linear-gradient(to top, rgba(30,15,5,0.88) 0%, rgba(30,15,5,0.25) 65%, transparent 100%);
        }

        .ec-card-body {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 20px 18px 22px;
        }
        .ec-card-tag {
          display: inline-block;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #f5c99a;
          background: rgba(197, 130, 74, 0.28);
          border: 1px solid rgba(197, 130, 74, 0.45);
          padding: 3px 10px;
          border-radius: 20px;
          margin-bottom: 8px;
        }
        .ec-card-name {
          font-family: 'Playfair Display', serif;
          font-size: 1.05rem;
          font-weight: 600;
          color: #fff;
          line-height: 1.3;
        }
        .ec-card-arrow {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          margin-top: 10px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.78rem;
          font-weight: 500;
          letter-spacing: 0.08em;
          color: rgba(255,255,255,0.6);
          opacity: 0;
          transform: translateX(-6px);
          transition: opacity 0.25s ease, transform 0.25s ease;
        }
        .ec-card:hover .ec-card-arrow { opacity: 1; transform: translateX(0); }

        .ec-card:hover {
          box-shadow: 0 20px 50px rgba(120, 70, 20, 0.22);
        }

        @media (max-width: 1024px) { .ec-grid { grid-template-columns: repeat(3, 1fr); } }
        @media (max-width: 720px) {
          .ec-grid { grid-template-columns: repeat(2, 1fr); gap: 14px; }
          .ec-header { flex-direction: column; align-items: flex-start; gap: 12px; }
          .ec-subtitle { text-align: left; }
          .ec-section { padding: 64px 0 56px; }
        }
        @media (max-width: 460px) { .ec-grid { grid-template-columns: 1fr 1fr; gap: 12px; } }
      `}</style>

      <section className="ec-section" id="ec-section">
        <div className="ec-bg-circle ec-bg-c1" />
        <div className="ec-bg-circle ec-bg-c2" />

        <div className="ec-inner">
          <div className={`ec-header ${visible ? "visible" : ""}`}>
            <div>
              <p className="ec-eyebrow">What we offer</p>
              <h2 className="ec-title">Explore by<br />Category</h2>
            </div>
            <p className="ec-subtitle">
              Find the right supplements for every wellness goal — from beauty to vitality.
            </p>
          </div>

          <div className="ec-grid">
            {categories.map((cat, i) => (
              <Link
                to={cat.link}
                key={cat.name}
                className={`ec-card ${visible ? "visible" : ""}`}
                style={{ transitionDelay: `${i * 75}ms` }}
              >
                <img src={cat.image} alt={cat.name} className="ec-card-img" />
                <div className="ec-card-overlay" />
                <div className="ec-card-body">
                  <div className="ec-card-tag">{cat.tag}</div>
                  <div className="ec-card-name">{cat.name}</div>
                  <div className="ec-card-arrow">
                    Explore
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}