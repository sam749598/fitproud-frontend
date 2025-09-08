import { useState, useEffect } from "react";
import fitness1 from "../assets/fitness/fitness1.jpg";
import fitness2 from "../assets/fitness/fitness2.jpg";
import fitness3 from "../assets/fitness/fitness3.jpg";
import fitness4 from "../assets/fitness/fitness4.jpg";
import fitness5 from "../assets/fitness/fitness5.jpg";
import fitness6 from "../assets/fitness/fitness6.jpg";
import fitness7 from "../assets/fitness/fitness7.jpg";
import fitness8 from "../assets/fitness/fitness8.jpg";

const slides = [
  {
    image: fitness1,
    title1: "Welcome to FitPro",
    title2: "Your Health, Our Priority",
    description: "Discover the best wellness products tailored for your needs.",
  },
  {
    image: fitness2,
    title1: "Stay Strong",
    title2: "Empower Your Body",
    description: "Explore our range of supplements and health guides.",
  },
  {
    image: fitness3,
    title1: "Live Healthy",
    title2: "Feel Your Best",
    description: "Join our community for tips, support, and more.",
  },
  {
    image: fitness4,
    title1: "Eat Healthy",
    title2: "Feel Your Chill",
    description: "Nutrition tips and guides for a balanced life.",
  },
  {
    image: fitness5,
    title1: "Daily Workout",
    title2: "Stronger Everyday",
    description: "Simple routines for consistent results.",
  },
  {
    image: fitness6,
    title1: "Stay Motivated",
    title2: "Consistency Wins",
    description: "Join our group challenges to keep pushing forward.",
  },
  {
    image: fitness7,
    title1: "Balance Life",
    title2: "Mind & Body",
    description: "Holistic approach to health and happiness.",
  },
  {
    image: fitness8,
    title1: "Your Journey",
    title2: "Starts Today",
    description: "Transform your lifestyle with small steps.",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  // Auto-change every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  return (
    <section className="relative w-full h-[650px] overflow-hidden">
      {/* Slides with fade effect */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-[2500ms] ease-in-out ${
            i === current ? "opacity-100 z-20" : "opacity-0 z-10"
          }`}
        >
          <img
            src={slide.image}
            alt={`Slide ${i + 1}`}
            className="w-full h-full object-cover"
          />
          {/* Overlay text bottom-left */}
          <div className="absolute bottom-12 left-12 text-left text-white max-w-xl bg-black/40 p-6 rounded-lg shadow-lg">
            <h1 className="text-4xl md:text-6xl font-bold text-red-500 drop-shadow-md">
              {slide.title1}
            </h1>
            <h2 className="text-2xl md:text-4xl mt-2 drop-shadow-md">
              {slide.title2}
            </h2>
            <p className="mt-3 text-lg">{slide.description}</p>
          </div>
        </div>
      ))}

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 z-30"
        aria-label="Previous Slide"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 z-30"
        aria-label="Next Slide"
      >
        &#10095;
      </button>
    </section>
  );
}



