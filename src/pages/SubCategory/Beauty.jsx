import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useOutletContext } from "react-router-dom";  

const Beauty = () => {
  const [products, setProducts] = useState([]);
  const { defaultTitle } = useOutletContext(); // get title from layout

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data.beauty || []))
      .catch((err) => console.error("Failed to load products:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Dynamic Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-800 dark:text-white mb-4 text-center pt-5"
        >
          Beauty & Skin Care
        </motion.h1>

        {/* SEO Description */}
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Discover natural supplements that nourish your skin, hair, and overall beauty. From anti-aging collagen boosters to acne-fighting formulas and hair growth support, these products are designed to enhance your appearance from the inside out. Whether you’re struggling with hair loss, acne, or simply want youthful, glowing skin, our beauty and skincare solutions use clinically backed ingredients for visible results. Look good, feel confident, and embrace natural radiance every day.
        </p>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {product.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {product.description}
                </p>
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-5 py-2 text-sm font-medium text-white bg-pink-500 hover:bg-pink-600 rounded-lg transition-all duration-300"
                >
                  View More →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Beauty;






