// src/pages/Footer/AboutUs.jsx
import React from 'react';
 import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen max-w-7xl mx-auto mt-10">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white py-24 px-4 text-center">
        <h1 className="text-5xl font-extrabold mb-4">About Us</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Empowering you to live a healthier and informed life with expert guidance, 
          wellness tips, and trusted resources.
        </p>
      </section>

      {/* Mission & Vision Section */}
      <section className="container mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-2xl font-bold mb-4 text-purple-700">Our Mission</h2>
          <p className="text-gray-600">
            We aim to educate and empower individuals to make informed choices about 
            their health, nutrition, and overall wellbeing through accurate, engaging content.
          </p>
        </div>
        <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-2xl font-bold mb-4 text-indigo-700">Our Vision</h2>
          <p className="text-gray-600">
            We envision a world where everyone has access to reliable health information 
            and can lead a balanced, healthy lifestyle.
          </p>
        </div>
      </section>

  
     <section className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-16 px-4 text-center">
     <h2 className="text-3xl font-bold mb-4">Join Us</h2>
    <p className="mb-6 max-w-xl mx-auto">
    Stay updated with the latest wellness tips, health guides, and exclusive content by subscribing to our newsletter.
    </p>
  
    <button className="bg-white text-purple-600 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300 mb-8">
    Subscribe Now
   </button>
  
  <div className="flex justify-center space-x-6">
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
       className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110">
      <FaFacebook className="text-xl" />
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
       className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110">
      <FaTwitter className="text-xl" />
    </a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
       className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110">
      <FaInstagram className="text-xl" />
    </a>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
       className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110">
      <FaLinkedin className="text-xl" />
    </a>
  </div>
 </section>



    </div>
  );
};

export default AboutUs;
