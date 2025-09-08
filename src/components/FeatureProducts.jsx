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
  { 
    id: 1, 
    img: prod1, 
    name: "EduNand",
    description: "Longevity",
    affiliateLink: "https://nplink.net/zpg6kfhr"
  },
  { 
    id: 2, 
    img: prod2, 
    name: "Uticarin",
    description: "Urinary Tract Support",
    affiliateLink: "https://nplink.net/n7mdneh9"
  },
  { 
    id: 3, 
    img: prod3, 
    name: "Crave Burner",
    description: "Appetite Suppressant",
    affiliateLink: "https://nplink.net/mlh23d4h"
  },
  { 
    id: 4, 
    img: prod4, 
    name: "Flexmore",
    description: "Joint Health",
    affiliateLink: "https://nplink.net/187tfaud"
  },
  { 
    id: 5, 
    img: prod5, 
    name: "Eyevita Plus",
    description: "Eye Health",
    affiliateLink: "https://nplink.net/84ld1ai0"
  },
  { 
    id: 6, 
    img: prod6, 
    name: "Matcha Extreme",
    description: "Weight Loss",
    affiliateLink: "https://nplink.net/ubfcsi6l"
  },
  { 
    id: 7, 
    img: prod7, 
    name: "Prenatalin",
    description: "Prenatal Care",
    affiliateLink: "https://nplink.net/nsbihid4"
  },
   { 
    id: 8, 
    img: prod8, 
    name: "Prostan Plus",
    description: "Prostate Health",
    affiliateLink: "https://nplink.net/ma3r6g6i"
  },
];

const FeatureProducts = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('featured-products');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const handleBuyNow = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div id="featured-products" className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 mb-4">
            ✨ Featured Products
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover our curated selection of premium products from trusted partners
          </p>
        </div>

        {/* Decorative line */}
        <div className={`mx-auto mb-12 h-1 max-w-xs rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 transition-all duration-1000 ${isVisible ? 'scale-x-100' : 'scale-x-0'}`}></div>

        {/* Toggle button */}
        <div className="text-center mb-8">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-md"
          >
            {showAll ? 'Show Featured Only' : 'Show All Products'}
          </button>
        </div>

        {/* Products container */}
        {showAll ? (
          // Grid view for all products
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`rounded-2xl overflow-hidden shadow-lg backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 border border-white/20 dark:border-gray-700/50 transform transition-all duration-500 hover:scale-105 hover:shadow-xl ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Product image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
                
                {/* Product info */}
                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{product.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{product.description}</p>
                  
                  {/* Buy Now button */}
                  <button 
                    onClick={() => handleBuyNow(product.affiliateLink)}
                    className="w-full py-2.5 px-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Carousel view for featured products
          <div 
            className="overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className={`flex gap-6 ${isPaused ? 'animate-paused' : 'animate-scroll'}`}>
              {[...products, ...products].map((product, index) => (
                <div
                  key={index}
                  className={`min-w-[280px] sm:min-w-[320px] rounded-2xl overflow-hidden shadow-lg backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 border border-white/20 dark:border-gray-700/50 transform transition-all duration-500 hover:scale-105 hover:shadow-xl ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Product image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={product.img}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                  
                  {/* Product info */}
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{product.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{product.description}</p>
                    
                    {/* Buy Now button */}
                    <button 
                      onClick={() => handleBuyNow(product.affiliateLink)}
                      className="w-full py-2.5 px-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Decorative line */}
        <div className={`mx-auto mt-12 h-1 max-w-xs rounded-full bg-gradient-to-l from-pink-500 via-purple-500 to-indigo-500 transition-all duration-1000 ${isVisible ? 'scale-x-100' : 'scale-x-0'}`}></div>
      </div>

      <style jsx global>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-paused {
          animation-play-state: paused;
        }
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default FeatureProducts;




