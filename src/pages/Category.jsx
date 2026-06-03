// // src/pages/Category.jsx
// import React from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import Seo from "../components/Seo.jsx"; // Adjust the path if needed
// import beautyImg from "../assets/items/beauty.jpg";
// import brainImg from "../assets/items/brain.jpg";
// import coreImg from "../assets/items/core.jpg";
// import hormoneImg from "../assets/items/hormone.jpg";
// import miscImg from "../assets/items/miscellaneous.jpg";
// import muscleImg from "../assets/items/musculoskeletal.jpg";
// import organImg from "../assets/items/organ.jpg";
// import weightImg from "../assets/items/weight.jpg";

// const categories = [
//   { name: "Beauty & Skin Care", image: beautyImg, slug: "beauty" },
//   { name: "Brain & Mental Wellness", image: brainImg, slug: "brain" },
//   { name: "Core Health", image: coreImg, slug: "core" },
//   { name: "Hormonal & Reproductive Health", image: hormoneImg, slug: "hormone" },
//   { name: "Miscellaneous", image: miscImg, slug: "miscellaneous" },
//   { name: "Musculoskeletal & Mobility", image: muscleImg, slug: "musculoskeletal" },
//   { name: "Organ-Specific Support", image: organImg, slug: "organ" },
//   { name: "Weight & Metabolism", image: weightImg, slug: "weight" },
// ];

// // Framer Motion variants
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
// };
// const cardVariants = {
//   hidden: { y: 20, opacity: 0 },
//   visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
// };

// export default function Category() {
//   const schema = {
//     "@context": "https://schema.org",
//     "@type": "ItemList",
//     "name": "Supplement Categories | Vitaprozen",
//     "url": "https://www.vitaprozen.com/category",
//     "description": "Browse all supplement categories on Vitaprozen including Beauty, Brain, Core Health, Hormonal, Musculoskeletal, Organ-Specific Support, Weight & more.",
//     "itemListElement": categories.map((cat, index) => ({
//       "@type": "ListItem",
//       "position": index + 1,
//       "name": cat.name,
//       "url": `https://www.vitaprozen.com/category/${cat.slug}`
//     }))
//   };

//   return (
//     <>
//       {/* --- SEO Setup --- */}
//       <Seo
//         title="Supplement Categories | Vitaprozen"
//         description="Browse all supplement categories on Vitaprozen including Beauty, Brain, Core Health, Hormonal, Musculoskeletal, Organ-Specific Support, Weight & more."
//         canonical="https://www.vitaprozen.com/category"
//         schema={schema}
//       />

//       {/* --- Page Content --- */}
//       <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-16"
//           >
//             <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 mb-4">
//               Explore Categories
//             </h1>
//             <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto rounded-full"></div>
//           </motion.div>

//           <motion.div
//             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//           >
//             {categories.map((category) => (
//               <motion.div key={category.slug} variants={cardVariants}>
//                 <Link
//                   to={`/category/${category.slug}`}
//                   className="group relative block rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
//                 >
//                   <div className="aspect-w-16 aspect-h-9">
//                     <img
//                       src={category.image}
//                       alt={category.name}
//                       className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
//                     />
//                   </div>
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                   <div className="absolute bottom-0 left-0 right-0 p-5">
//                     <h2 className="text-xl font-bold text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
//                       {category.name}
//                     </h2>
//                   </div>
//                 </Link>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </main>
//     </>
//   );
// }


// src/pages/Category.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Seo from "../components/Seo.jsx";
import beautyImg from "../assets/items/beauty.jpg";
import brainImg from "../assets/items/brain.jpg";
import coreImg from "../assets/items/core.jpg";
import hormoneImg from "../assets/items/hormone.jpg";
import miscImg from "../assets/items/miscellaneous.jpg";
import muscleImg from "../assets/items/musculoskeletal.jpg";
import organImg from "../assets/items/organ.jpg";
import weightImg from "../assets/items/weight.jpg";

const categories = [
  { name: "Beauty & Skin Care", image: beautyImg, slug: "beauty", desc: "Glow from within" },
  { name: "Brain & Mental Wellness", image: brainImg, slug: "brain", desc: "Sharpen focus & clarity" },
  { name: "Core Health", image: coreImg, slug: "core", desc: "Foundation of vitality" },
  { name: "Hormonal & Reproductive Health", image: hormoneImg, slug: "hormone", desc: "Restore natural balance" },
  { name: "Miscellaneous", image: miscImg, slug: "miscellaneous", desc: "Explore more wellness" },
  { name: "Musculoskeletal & Mobility", image: muscleImg, slug: "musculoskeletal", desc: "Move with strength" },
  { name: "Organ-Specific Support", image: organImg, slug: "organ", desc: "Targeted organ care" },
  { name: "Weight & Metabolism", image: weightImg, slug: "weight", desc: "Fuel your transformation" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.09, delayChildren: 0.2 } },
};
const cardVariants = {
  hidden: { y: 28, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.52, ease: [0.22, 1, 0.36, 1] } },
};

export default function Category() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Supplement Categories | Vitaprozen",
    "url": "https://www.vitaprozen.com/category",
    "description": "Browse all supplement categories on Vitaprozen including Beauty, Brain, Core Health, Hormonal, Musculoskeletal, Organ-Specific Support, Weight & more.",
    "itemListElement": categories.map((cat, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": cat.name,
      "url": `https://www.vitaprozen.com/category/${cat.slug}`
    }))
  };

  return (
    <>
      <Seo
        title="Supplement Categories | Vitaprozen"
        description="Browse all supplement categories on Vitaprozen including Beauty, Brain, Core Health, Hormonal, Musculoskeletal, Organ-Specific Support, Weight & more."
        canonical="https://www.vitaprozen.com/category"
        schema={schema}
      />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');

        .cat-page { background: #fdf7ef; min-height: 100vh; }

        .cat-hero {
          background: #2d1f14;
          padding: 72px 2rem 68px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .cat-hero-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
        }
        .cat-hero-glow-1 { width: 350px; height: 350px; top: -100px; right: 10%; background: rgba(197,130,74,0.15); }
        .cat-hero-glow-2 { width: 250px; height: 250px; bottom: -80px; left: 5%; background: rgba(197,130,74,0.10); }
        .cat-hero::after {
          content: '';
          position: absolute;
          bottom: -1px; left: 0; right: 0;
          height: 48px;
          background: #fdf7ef;
          clip-path: ellipse(55% 100% at 50% 100%);
        }
        .cat-hero-eyebrow {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #c5824a;
          margin-bottom: 14px;
        }
        .cat-hero-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.5rem, 5vw, 3.8rem);
          font-weight: 700;
          color: #fef8f0;
          margin-bottom: 16px;
          line-height: 1.12;
        }
        .cat-hero-sub {
          font-family: 'DM Sans', sans-serif;
          font-size: 1rem;
          color: rgba(254,248,240,0.6);
          max-width: 440px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .cat-body {
          max-width: 1200px;
          margin: 0 auto;
          padding: 64px 2rem 88px;
        }

        .cat-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
        }

        .cat-card-link {
          display: block;
          text-decoration: none;
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          height: 300px;
          box-shadow: 0 4px 20px rgba(45,31,20,0.1);
          transition: transform 0.32s ease, box-shadow 0.32s ease;
        }
        .cat-card-link:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 52px rgba(45,31,20,0.18);
        }
        .cat-card-link img {
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }
        .cat-card-link:hover img { transform: scale(1.07); }

        .cat-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(25,12,5,0.85) 0%, rgba(25,12,5,0.2) 55%, transparent 100%);
        }

        .cat-card-body {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          padding: 20px 18px 22px;
        }
        .cat-card-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #f5c99a;
          margin-bottom: 6px;
          opacity: 0;
          transform: translateY(6px);
          transition: opacity 0.25s ease, transform 0.25s ease;
        }
        .cat-card-link:hover .cat-card-desc { opacity: 1; transform: translateY(0); }
        .cat-card-name {
          font-family: 'Playfair Display', serif;
          font-size: 1.05rem;
          font-weight: 700;
          color: #fff;
          line-height: 1.3;
        }
        .cat-card-arrow {
          display: flex;
          align-items: center;
          gap: 5px;
          margin-top: 10px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.55);
          opacity: 0;
          transform: translateX(-4px);
          transition: opacity 0.2s 0.05s ease, transform 0.2s 0.05s ease;
        }
        .cat-card-link:hover .cat-card-arrow { opacity: 1; transform: translateX(0); }
        .cat-card-arrow svg { transition: transform 0.2s; }
        .cat-card-link:hover .cat-card-arrow svg { transform: translateX(3px); }

        @media (max-width: 1024px) { .cat-grid { grid-template-columns: repeat(3,1fr); } }
        @media (max-width: 720px) {
          .cat-grid { grid-template-columns: repeat(2,1fr); gap: 14px; }
          .cat-card-link { height: 240px; }
        }
        @media (max-width: 480px) { .cat-card-link { height: 210px; } }
      `}</style>

      <main className="cat-page">
        <div className="cat-hero">
          <div className="cat-hero-glow cat-hero-glow-1" />
          <div className="cat-hero-glow cat-hero-glow-2" />
          <p className="cat-hero-eyebrow">Browse all</p>
          <h1 className="cat-hero-title">Explore<br />Categories</h1>
          <p className="cat-hero-sub">Find the perfect supplement for every wellness goal.</p>
        </div>

        <div className="cat-body">
          <motion.div
            className="cat-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {categories.map((category) => (
              <motion.div key={category.slug} variants={cardVariants}>
                <Link to={`/category/${category.slug}`} className="cat-card-link">
                  <img src={category.image} alt={category.name} />
                  <div className="cat-card-overlay" />
                  <div className="cat-card-body">
                    <p className="cat-card-desc">{category.desc}</p>
                    <h2 className="cat-card-name">{category.name}</h2>
                    <div className="cat-card-arrow">
                      Explore
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>
    </>
  );
}