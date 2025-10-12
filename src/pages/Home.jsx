// src/pages/Home.jsx
import React from "react";
import HeroSlider from "../components/HeroSlider";
import FeatureProducts from "../components/FeatureProducts";
import LatestPost from "../components/LatestPost";
import ExploreCategories from "../components/ExploreCategories";
import { motion } from "framer-motion";
import Seo from "../components/Seo.jsx"; // Make sure the path is correct

// Animation variants for sections
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const sectionVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    filter: "blur(10px)"
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const Home = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Vitaprozen - Supplement Reviews, Wellness Insights & Expert Tips",
    "url": "https://www.vitaprozen.com/",
    "description": "Discover top supplement reviews, health tips, and wellness insights on Vitaprozen. Stay informed and make healthier choices for your body and mind."
  };

  return (
    <>
      {/* --- SEO Setup --- */}
      <Seo
        title="Vitaprozen - Supplement Reviews, Wellness Insights & Expert Tips"
        description="Discover top supplement reviews, health tips, and wellness insights on Vitaprozen. Stay informed and make healthier choices for your body and mind."
        canonical="https://www.vitaprozen.com/"
        schema={schema}
      />

      {/* --- Page Content --- */}
      <motion.div
        className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Slider - with special entrance animation */}
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 1.05 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
            }
          }}
        >
          <HeroSlider />
        </motion.div>

        {/* Explore Categories Section */}
        <motion.section variants={sectionVariants} className="py-4">
          <ExploreCategories />
        </motion.section>

        {/* Feature Products Section */}
        <motion.section variants={sectionVariants} className="py-4">
          <FeatureProducts />
        </motion.section>

        {/* Latest Post Section */}
        <motion.section variants={sectionVariants} className="py-4">
          <LatestPost />
        </motion.section>
      </motion.div>
    </>
  );
};

export default Home;
