// src/pages/Category.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Seo from "../components/Seo.jsx"; // Adjust the path if needed
import beautyImg from "../assets/items/beauty.jpg";
import brainImg from "../assets/items/brain.jpg";
import coreImg from "../assets/items/core.jpg";
import hormoneImg from "../assets/items/hormone.jpg";
import miscImg from "../assets/items/miscellaneous.jpg";
import muscleImg from "../assets/items/musculoskeletal.jpg";
import organImg from "../assets/items/organ.jpg";
import weightImg from "../assets/items/weight.jpg";

const categories = [
  { name: "Beauty & Skin Care", image: beautyImg, slug: "beauty" },
  { name: "Brain & Mental Wellness", image: brainImg, slug: "brain" },
  { name: "Core Health", image: coreImg, slug: "core" },
  { name: "Hormonal & Reproductive Health", image: hormoneImg, slug: "hormone" },
  { name: "Miscellaneous", image: miscImg, slug: "miscellaneous" },
  { name: "Musculoskeletal & Mobility", image: muscleImg, slug: "musculoskeletal" },
  { name: "Organ-Specific Support", image: organImg, slug: "organ" },
  { name: "Weight & Metabolism", image: weightImg, slug: "weight" },
];

// Framer Motion variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
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
      {/* --- SEO Setup --- */}
      <Seo
        title="Supplement Categories | Vitaprozen"
        description="Browse all supplement categories on Vitaprozen including Beauty, Brain, Core Health, Hormonal, Musculoskeletal, Organ-Specific Support, Weight & more."
        canonical="https://www.vitaprozen.com/category"
        schema={schema}
      />

      {/* --- Page Content --- */}
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 mb-4">
              Explore Categories
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {categories.map((category) => (
              <motion.div key={category.slug} variants={cardVariants}>
                <Link
                  to={`/category/${category.slug}`}
                  className="group relative block rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h2 className="text-xl font-bold text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      {category.name}
                    </h2>
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
