import { useState } from "react";
import { Link } from "react-router-dom";
import fitPro from "../assets/fitpro.jpg"

const subCategories = [
  { name: "Beauty & Skin Care", slug: "beauty" },
  { name: "Brain & Mental Wellness", slug: "brain" },
  { name: "Core Health", slug: "core" },
  { name: "Hormonal & Reproductive Health", slug: "hormone" },
  { name: "Miscellaneous", slug: "miscellaneous" },
  { name: "Musculoskeletal & Mobility", slug: "musculoskeletal" },
  { name: "Organ-Specific Support", slug: "organ" },
  { name: "Weight & Metabolism", slug: "weight" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // mobile menu
  const [isCategoryOpen, setIsCategoryOpen] = useState(false); // mobile category dropdown

  return (
    <nav className="bg-gray-200 shadow-md dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-gray-800 dark:text-white">
           <img src={fitPro}  alt="FitPro Logo" className=" h-13 rounded-sm"/>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-5 font-bold text-gray-700 dark:text-gray-200">
            <Link to="/" className="hover:text-blue-500">Home</Link>

            {/* Desktop Category Dropdown */}
            <div className="relative group">
              <Link to="/category" className="hover:text-blue-500">Category</Link>
              <div className="absolute left-0 mt-2 w-64 bg-white dark:bg-gray-800 shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <ul className="py-2">
                  {subCategories.map(({ name, slug }) => (
                    <li key={slug}>
                      <Link
                        to={`/category/${slug}`}
                        className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-600 dark:hover:bg-gray-700"
                      >
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Link to="/blog" className="hover:text-blue-500">Blog</Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(prev => !prev)}
            className="md:hidden text-gray-700 dark:text-gray-200 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-3 space-y-2 bg-gray-50 dark:bg-gray-800">
          <Link to="/" className="block hover:text-blue-500">Home</Link>

          {/* Mobile Category Dropdown */}
          <button
            onClick={() => setIsCategoryOpen(prev => !prev)}
            className="w-full text-left flex justify-between items-center hover:text-blue-500"
          >
            Category
            <span>{isCategoryOpen ? "▲" : "▼"}</span>
          </button>

          {isCategoryOpen && (
            <ul className="ml-4 space-y-1">
              {subCategories.map(({ name, slug }) => (
                <li key={slug}>
                  <Link
                    to={`/category/${slug}`}
                    className="block hover:text-blue-500"
                    onClick={() => setIsOpen(false)} // optionally close menu on click
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          )}

          <Link to="/blog" className="block hover:text-blue-500">Blog</Link>
        </div>
      )}
    </nav>
  );
}
