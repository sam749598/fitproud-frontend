// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { motion } from "framer-motion";

// export default function Blog() {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPosts, setTotalPosts] = useState(0);
//   const postsPerPage = 15;

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get("https://fitproud-backend.vercel.app/api/blogs", {
//           params: { limit: 0 },
//         });

//         if (response.data.data) {
//           setPosts(response.data.data);
//           setTotalPosts(response.data.data.length);
//         } else if (Array.isArray(response.data)) {
//           setPosts(response.data);
//           setTotalPosts(response.data.length);
//         } else {
//           setPosts([]);
//           setTotalPosts(0);
//         }
//         setError(null);
//       } catch (err) {
//         console.error("Error fetching posts:", err);
//         setError("Failed to fetch posts");
//         setLoading(false);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPosts();
//   }, []);

//   // Pagination
//   const indexOfLastPost = currentPage * postsPerPage;
//   const indexOfFirstPost = indexOfLastPost - postsPerPage;
//   const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
//   const totalPages = Math.ceil(totalPosts / postsPerPage);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   if (loading) {
//     return (
//       <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
//         <div className="flex justify-center items-center h-64">
//           <motion.div
//             animate={{ rotate: 360 }}
//             transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//             className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full"
//           />
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
//         <div className="text-center text-red-500">{error}</div>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 bg-teal-50 mt-5">
//       <div className="text-center">
//         <motion.h1
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-3xl font-extrabold text-gray-900 sm:text-4xl"
//         >
//           Blog
//         </motion.h1>
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3, duration: 0.6 }}
//           className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4"
//         >
//           Stay updated with our latest articles and insights on health and
//           wellness.
//         </motion.p>
//       </div>

//       {/* Blog Grid */}
//       <motion.div
//         className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none"
//         initial="hidden"
//         animate="visible"
//         variants={{
//           hidden: { opacity: 0 },
//           visible: {
//             opacity: 1,
//             transition: { staggerChildren: 0.2 },
//           },
//         }}
//       >
//         {currentPosts.map((post) => (
//           <motion.div
//             key={post._id}
//             variants={{
//               hidden: { opacity: 0, y: 20 },
//               visible: { opacity: 1, y: 0 },
//             }}
//             transition={{ duration: 0.5 }}
//             whileHover={{ scale: 1.02 }}
//             className="flex flex-col overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
//           >
//             <div className="flex-shrink-0">
//               {post.thumbnail ? (
//                 <img
//                   className="h-48 w-full object-cover"
//                   src={post.thumbnail}
//                   alt={post.title}
//                 />
//               ) : (
//                 <div className="h-48 w-full bg-gray-200 flex items-center justify-center">
//                   <span className="text-gray-500">No Image</span>
//                 </div>
//               )}
//             </div>
//             <div className="flex-1 bg-white p-6 flex flex-col justify-between">
//               <div className="flex-1">
//                 <p className="text-sm font-medium text-indigo-600">
//                   {post.category || "Uncategorized"}
//                 </p>
//                 <Link to={`/blog/${post.slug}`} className="block mt-2">
//                   <p className="text-xl font-semibold text-gray-900">
//                     {post.title}
//                   </p>
//                 </Link>
//                 <p className="mt-3 text-base text-gray-500 line-clamp-3">
//                   {post.metaDescription ||
//                     post.content.substring(0, 150) + "..."}
//                 </p>
//               </div>
//               <div className="mt-6 flex items-center">
//                 <div className="flex space-x-1 text-sm text-gray-500">
//                   <span>{new Date(post.createdAt).toLocaleDateString()}</span>
//                   <span aria-hidden="true">&middot;</span>
//                   <span>{post.published ? "Published" : "Draft"}</span>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>

//       {/* Pagination */}
//       {totalPosts > postsPerPage && (
//         <motion.div
//           className="mt-12 flex justify-center"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.6 }}
//         >
//           <nav
//             className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
//             aria-label="Pagination"
//           >
//             <button
//               onClick={() => paginate(Math.max(1, currentPage - 1))}
//               disabled={currentPage === 1}
//               className={`relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 ${
//                 currentPage === 1 ? "cursor-not-allowed opacity-50" : ""
//               }`}
//             >
//               Previous
//             </button>

//             {Array.from({ length: totalPages }, (_, i) => i + 1).map(
//               (pageNumber) => (
//                 <button
//                   key={pageNumber}
//                   onClick={() => paginate(pageNumber)}
//                   className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
//                     currentPage === pageNumber
//                       ? "z-10 bg-indigo-50 border-indigo-500 text-indigo-600"
//                       : "bg-white border-gray-300 text-gray-500 hover:bg-gray-50"
//                   }`}
//                 >
//                   {pageNumber}
//                 </button>
//               )
//             )}

//             <button
//               onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
//               disabled={currentPage === totalPages}
//               className={`relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 ${
//                 currentPage === totalPages ? "cursor-not-allowed opacity-50" : ""
//               }`}
//             >
//               Next
//             </button>
//           </nav>
//         </motion.div>
//       )}
//     </div>
//   );
// }


// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { motion } from "framer-motion";
// import Seo from "../components/Seo";

// export default function Blog() {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const postsPerPage = 15;

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(
//           "https://fitproud-backend.vercel.app/api/blogs",
//           { params: { limit: 0 } }
//         );

//         const data = response.data.data || response.data || [];
//         setPosts(data);
//         setError(null);
//       } catch (err) {
//         console.error("Error fetching posts:", err);
//         setError("Failed to fetch posts");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPosts();
//   }, []);

//   // Pagination logic
//   const totalPosts = posts.length;
//   const totalPages = Math.ceil(totalPosts / postsPerPage);
//   const indexOfLastPost = currentPage * postsPerPage;
//   const indexOfFirstPost = indexOfLastPost - postsPerPage;
//   const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   // SEO Schema for Blog Listing Page
//   const blogSchema = {
//     "@context": "https://schema.org",
//     "@type": "Blog",
//     name: "Vitaprozen Blog",
//     description: "Articles on health, nutrition, and natural wellness.",
//     url: "https://www.vitaprozen.com/blog",
//     publisher: {
//       "@type": "Organization",
//       name: "Vitaprozen",
//       logo: {
//         "@type": "ImageObject",
//         url: "https://www.vitaprozen.com/logo.png",
//       },
//     },
//   };

//   if (loading) {
//     return (
//       <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
//         <div className="flex justify-center items-center h-64">
//           <motion.div
//             animate={{ rotate: 360 }}
//             transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//             className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full"
//           />
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
//         <div className="text-center text-red-500">{error}</div>
//       </div>
//     );
//   }

//   return (
//     <>
//       {/* SEO for Blog Listing Page */}
//       <Seo
//         title="Blog | Vitaprozen"
//         description="Read the latest articles, guides, and tips about wellness, fitness, and natural health from Vitaprozen."
//         canonical="https://www.vitaprozen.com/blog"
//         schema={blogSchema}
//       />

//       <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 bg-teal-50 mt-5">
//         {/* Header */}
//         <div className="text-center">
//           <motion.h1
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-3xl font-extrabold text-gray-900 sm:text-4xl"
//           >
//             Blog
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3, duration: 0.6 }}
//             className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4"
//           >
//             Stay updated with our latest articles and insights on health and
//             wellness.
//           </motion.p>
//         </div>

//         {/* Blog Grid */}
//         <motion.div
//           className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none"
//           initial="hidden"
//           animate="visible"
//           variants={{
//             hidden: { opacity: 0 },
//             visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
//           }}
//         >
//           {currentPosts.map((post) => (
//             <motion.div
//               key={post._id}
//               variants={{
//                 hidden: { opacity: 0, y: 20 },
//                 visible: { opacity: 1, y: 0 },
//               }}
//               transition={{ duration: 0.5 }}
//               whileHover={{ scale: 1.02 }}
//               className="flex flex-col overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
//             >
//               <div className="flex-shrink-0">
//                 {post.thumbnail ? (
//                   <img
//                     className="h-48 w-full object-cover"
//                     src={post.thumbnail}
//                     alt={post.title}
//                   />
//                 ) : (
//                   <div className="h-48 w-full bg-gray-200 flex items-center justify-center">
//                     <span className="text-gray-500">No Image</span>
//                   </div>
//                 )}
//               </div>

//               <div className="flex-1 bg-white p-6 flex flex-col justify-between">
//                 <div className="flex-1">
//                   <p className="text-sm font-medium text-indigo-600">
//                     {post.category || "Uncategorized"}
//                   </p>
//                   <Link to={`/blog/${post.slug}`} className="block mt-2">
//                     <p className="text-xl font-semibold text-gray-900">
//                       {post.title}
//                     </p>
//                   </Link>
//                   <p className="mt-3 text-base text-gray-500 line-clamp-3">
//                     {post.metaDescription ||
//                       post.content.substring(0, 150) + "..."}
//                   </p>
//                 </div>
//                 <div className="mt-6 flex items-center">
//                   <div className="flex space-x-1 text-sm text-gray-500">
//                     <span>
//                       {new Date(post.createdAt).toLocaleDateString()}
//                     </span>
//                     <span aria-hidden="true">&middot;</span>
//                     <span>{post.published ? "Published" : "Draft"}</span>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Pagination */}
//         {totalPosts > postsPerPage && (
//           <motion.div
//             className="mt-12 flex justify-center"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.6 }}
//           >
//             <nav
//               className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
//               aria-label="Pagination"
//             >
//               <button
//                 onClick={() => paginate(Math.max(1, currentPage - 1))}
//                 disabled={currentPage === 1}
//                 className={`relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 ${
//                   currentPage === 1 ? "cursor-not-allowed opacity-50" : ""
//                 }`}
//               >
//                 Previous
//               </button>

//               {Array.from({ length: totalPages }, (_, i) => i + 1).map(
//                 (pageNumber) => (
//                   <button
//                     key={pageNumber}
//                     onClick={() => paginate(pageNumber)}
//                     className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
//                       currentPage === pageNumber
//                         ? "z-10 bg-indigo-50 border-indigo-500 text-indigo-600"
//                         : "bg-white border-gray-300 text-gray-500 hover:bg-gray-50"
//                     }`}
//                   >
//                     {pageNumber}
//                   </button>
//                 )
//               )}

//               <button
//                 onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
//                 disabled={currentPage === totalPages}
//                 className={`relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 ${
//                   currentPage === totalPages ? "cursor-not-allowed opacity-50" : ""
//                 }`}
//               >
//                 Next
//               </button>
//             </nav>
//           </motion.div>
//         )}
//       </div>
//     </>
//   );
// }




import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import Seo from "../components/Seo";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 15;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://fitproud-backend.vercel.app/api/blogs", { params: { limit: 0 } });
        const data = response.data.data || response.data || [];
        setPosts(data);
        setError(null);
      } catch (err) {
        setError("Failed to fetch posts");
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const totalPosts = posts.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (p) => { setCurrentPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); };

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Vitaprozen Blog",
    description: "Articles on health, nutrition, and natural wellness.",
    url: "https://www.vitaprozen.com/blog",
    publisher: { "@type": "Organization", name: "Vitaprozen", logo: { "@type": "ImageObject", url: "https://www.vitaprozen.com/logo.png" } },
  };

  if (loading) return (
    <>
      <style>{`.bl-sk{background:#f0e9df;border-radius:14px;animation:bl-pulse 1.6s ease-in-out infinite}@keyframes bl-pulse{0%,100%{opacity:1}50%{opacity:0.5}}`}</style>
      <div style={{ background: "#fdf7ef", minHeight: "80vh", padding: "80px 2rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="bl-sk" style={{ width: 200, height: 44, margin: "0 auto 48px" }} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
            {[...Array(9)].map((_, i) => <div key={i} className="bl-sk" style={{ height: 340 }} />)}
          </div>
        </div>
      </div>
    </>
  );

  if (error) return (
    <div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", color: "#c5824a", fontFamily: "DM Sans, sans-serif" }}>{error}</div>
  );

  return (
    <>
      <Seo
        title="Blog | Vitaprozen"
        description="Read the latest articles, guides, and tips about wellness, fitness, and natural health from Vitaprozen."
        canonical="https://www.vitaprozen.com/blog"
        schema={blogSchema}
      />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');

        .bl-page { background: #fdf7ef; min-height: 100vh; }

        .bl-hero {
          background: #2d1f14;
          padding: 72px 2rem 64px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .bl-hero::after {
          content: '';
          position: absolute;
          bottom: -1px; left: 0; right: 0;
          height: 50px;
          background: #fdf7ef;
          clip-path: ellipse(55% 100% at 50% 100%);
        }
        .bl-hero-eyebrow {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #c5824a;
          margin-bottom: 14px;
        }
        .bl-hero-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 700;
          color: #fef8f0;
          margin-bottom: 16px;
        }
        .bl-hero-sub {
          font-family: 'DM Sans', sans-serif;
          font-size: 1.05rem;
          color: rgba(254,248,240,0.65);
          max-width: 480px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .bl-body {
          max-width: 1200px;
          margin: 0 auto;
          padding: 64px 2rem 80px;
        }

        .bl-count {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.82rem;
          color: #8a6a55;
          margin-bottom: 32px;
          letter-spacing: 0.04em;
        }

        .bl-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .bl-card {
          background: #fff;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 2px 16px rgba(45,31,20,0.07);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
          text-decoration: none;
        }
        .bl-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 44px rgba(45,31,20,0.13);
        }
        .bl-card-img {
          height: 196px;
          overflow: hidden;
          background: #f0e9df;
          position: relative;
        }
        .bl-card-img img {
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform 0.55s ease;
        }
        .bl-card:hover .bl-card-img img { transform: scale(1.05); }
        .bl-card-no-img {
          height: 196px;
          background: linear-gradient(135deg, #f5e9da, #e8d5bf);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #c5824a;
          font-size: 2rem;
        }
        .bl-card-body {
          padding: 20px 20px 22px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .bl-card-cat {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #c5824a;
          margin-bottom: 8px;
        }
        .bl-card-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.1rem;
          font-weight: 600;
          color: #2d1f14;
          line-height: 1.4;
          margin-bottom: 10px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .bl-card-excerpt {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.875rem;
          color: #7a5c48;
          line-height: 1.65;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          margin-bottom: 16px;
          flex: 1;
        }
        .bl-card-foot {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 14px;
          border-top: 1px solid #f0e9df;
        }
        .bl-card-date {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.75rem;
          color: #a08070;
        }
        .bl-card-read {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          color: #c5824a;
          display: flex;
          align-items: center;
          gap: 4px;
          text-decoration: none;
        }
        .bl-card-read svg { transition: transform 0.2s; }
        .bl-card:hover .bl-card-read svg { transform: translateX(3px); }

        /* Pagination */
        .bl-pagination {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-top: 60px;
        }
        .bl-page-btn {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.85rem;
          font-weight: 600;
          width: 40px; height: 40px;
          border-radius: 10px;
          border: 1.5px solid #e8d5bf;
          background: transparent;
          color: #5a4035;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .bl-page-btn:hover { border-color: #c5824a; color: #c5824a; }
        .bl-page-btn.active { background: #c5824a; border-color: #c5824a; color: #fff; }
        .bl-page-btn:disabled { opacity: 0.35; cursor: not-allowed; }
        .bl-page-nav {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.82rem;
          font-weight: 600;
          padding: 0 18px;
          height: 40px;
          border-radius: 10px;
          border: 1.5px solid #e8d5bf;
          background: transparent;
          color: #5a4035;
          cursor: pointer;
          transition: all 0.2s;
        }
        .bl-page-nav:hover:not(:disabled) { border-color: #c5824a; color: #c5824a; }
        .bl-page-nav:disabled { opacity: 0.35; cursor: not-allowed; }

        @media (max-width: 900px) { .bl-grid { grid-template-columns: repeat(2,1fr); } }
        @media (max-width: 580px) { .bl-grid { grid-template-columns: 1fr; } }
      `}</style>

      <div className="bl-page">
        <div className="bl-hero">
          <p className="bl-hero-eyebrow">Wellness Knowledge</p>
          <h1 className="bl-hero-title">Our Blog</h1>
          <p className="bl-hero-sub">Stay updated with expert articles and insights on health, nutrition, and natural wellness.</p>
        </div>

        <div className="bl-body">
          <p className="bl-count">{totalPosts} articles published</p>

          <motion.div
            className="bl-grid"
            initial="hidden"
            animate="visible"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } }}
          >
            {currentPosts.map((post) => (
              <motion.div
                key={post._id}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45 } } }}
              >
                <Link to={`/blog/${post.slug}`} className="bl-card">
                  <div className="bl-card-img">
                    {post.thumbnail
                      ? <img src={post.thumbnail} alt={post.title} />
                      : <div className="bl-card-no-img">✦</div>
                    }
                  </div>
                  <div className="bl-card-body">
                    <p className="bl-card-cat">{post.category || "Wellness"}</p>
                    <h2 className="bl-card-title">{post.title}</h2>
                    <p className="bl-card-excerpt">
                      {post.metaDescription || post.content?.substring(0, 140) + "..."}
                    </p>
                    <div className="bl-card-foot">
                      <span className="bl-card-date">
                        {new Date(post.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                      </span>
                      <span className="bl-card-read">
                        Read
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {totalPosts > postsPerPage && (
            <div className="bl-pagination">
              <button className="bl-page-nav" onClick={() => paginate(Math.max(1, currentPage - 1))} disabled={currentPage === 1}>← Prev</button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                <button key={n} className={`bl-page-btn ${currentPage === n ? "active" : ""}`} onClick={() => paginate(n)}>{n}</button>
              ))}
              <button className="bl-page-nav" onClick={() => paginate(Math.min(totalPages, currentPage + 1))} disabled={currentPage === totalPages}>Next →</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}














