// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// export default function LatestPost() {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const res = await axios.get("https://fitproud-backend.vercel.app/api/blogs?published=true&limit=5");
//         setPosts(Array.isArray(res.data?.data) ? res.data.data : []);
//       } catch (error) {
//         setPosts([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPosts();
//   }, []);

//   if (loading) return (
//     <section className="max-w-7xl mx-auto px-4 py-16">
//       <div className="flex justify-between items-center mb-10">
//         <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Latest Posts</h2>
//         <div className="h-8 w-32 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
//       </div>
//       <div className="grid gap-6 lg:grid-cols-3">
//         <div className="lg:col-span-2 h-96 bg-gray-200 dark:bg-gray-800 rounded-2xl animate-pulse"></div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//           {[...Array(4)].map((_, i) => (
//             <div key={i} className="h-48 bg-gray-200 dark:bg-gray-800 rounded-2xl animate-pulse"></div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );

//   if (!posts.length) return null;

//   const [first, ...rest] = posts;
//   const small = rest.slice(0, 4);

//   return (
//     <section className="max-w-7xl mx-auto px-4 py-16">
//       <div className="flex justify-between items-center mb-10">
//         <div>
//           <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">
//             Latest Posts
//           </h2>
//           <p className="text-gray-600 dark:text-gray-300 mt-2">Discover our most recent articles</p>
//         </div>
//         <Link 
//           to="/blog" 
//           className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-full hover:shadow-lg transition-all duration-300"
//         >
//           View All
//         </Link>
//       </div>
      
//       <div className="grid gap-8 lg:grid-cols-3">
//         {/* Main featured post */}
//         <div className="lg:col-span-2">
//           <Link
//             to={`/blog/${first.slug}`}
//             className="group relative block rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
//           >
//             <div className="relative h-[405px] overflow-hidden">
//               {first.thumbnail && (
//                 <img
//                   src={first.thumbnail}
//                   alt={first.title}
//                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                 />
//               )}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              
//               <div className="absolute bottom-0 left-0 right-0 p-6">
//                 <div className="flex items-center text-white/80 text-sm mb-3">
//                   <span>{new Date(first.createdAt).toLocaleDateString()}</span>
//                   <span className="mx-2">•</span>
//                   <span>{first.readTime || '5 min read'}</span>
//                 </div>
//                 <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors">
//                   {first.title}
//                 </h3>
//                 <p className="text-white/90 line-clamp-2 mb-4">
//                   {first.metaDescription || ""}
//                 </p>
//                 <div className="flex items-center text-white group-hover:text-purple-200 transition-colors">
//                   <span className="font-medium">Read more</span>
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
//                     <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
//                   </svg>
//                 </div>
//               </div>
//             </div>
//           </Link>
//         </div>
        
//         {/* Smaller posts grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//           {small.map((p) => (
//             <Link
//               key={p._id}
//               to={`/blog/${p.slug}`}
//               className="group relative block rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
//             >
//               <div className="relative h-48 overflow-hidden">
//                 {p.thumbnail && (
//                   <img
//                     src={p.thumbnail}
//                     alt={p.title}
//                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                   />
//                 )}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                
//                 <div className="absolute bottom-0 left-0 right-0 p-4">
//                   <div className="flex items-center text-white/80 text-xs mb-2">
//                     <span>{new Date(p.createdAt).toLocaleDateString()}</span>
//                     <span className="mx-1">•</span>
//                     <span>{p.readTime || '5 min'}</span>
//                   </div>
//                   <h4 className="text-lg font-semibold text-white line-clamp-2 mb-2 group-hover:text-purple-200 transition-colors">
//                     {p.title}
//                   </h4>
//                   <div className="flex items-center text-white text-sm group-hover:text-purple-200 transition-colors">
//                     <span>Read more</span>
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
//                       <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
//                     </svg>
//                   </div>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function LatestPost() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("https://fitproud-backend.vercel.app/api/blogs?published=true&limit=5");
        setPosts(Array.isArray(res.data?.data) ? res.data.data : []);
      } catch {
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (loading) return (
    <>
      <style>{`
        .lp-skeleton { background: #f0e9df; border-radius: 16px; animation: lp-pulse 1.6s ease-in-out infinite; }
        @keyframes lp-pulse { 0%,100%{opacity:1} 50%{opacity:0.5} }
      `}</style>
      <section style={{ background: "#fdf7ef", padding: "80px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 40 }}>
            <div className="lp-skeleton" style={{ width: 220, height: 40 }} />
            <div className="lp-skeleton" style={{ width: 100, height: 38, borderRadius: 40 }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 24 }}>
            <div className="lp-skeleton" style={{ height: 420 }} />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              {[...Array(4)].map((_, i) => <div key={i} className="lp-skeleton" style={{ height: 195 }} />)}
            </div>
          </div>
        </div>
      </section>
    </>
  );

  if (!posts.length) return null;

  const [first, ...rest] = posts;
  const small = rest.slice(0, 4);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');

        .lp-section {
          background: #fdf7ef;
          padding: 88px 0 80px;
        }
        .lp-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        .lp-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 48px;
        }
        .lp-eyebrow {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #c5824a;
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .lp-eyebrow::before {
          content: '';
          width: 32px; height: 2px;
          background: #c5824a;
          border-radius: 2px;
        }
        .lp-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.9rem, 3vw, 2.6rem);
          font-weight: 700;
          color: #2d1f14;
          line-height: 1.15;
        }
        .lp-view-all {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.82rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 10px 24px;
          border-radius: 40px;
          border: 1.5px solid #c5824a;
          color: #c5824a;
          text-decoration: none;
          transition: all 0.25s ease;
          white-space: nowrap;
        }
        .lp-view-all:hover {
          background: #c5824a;
          color: #fff;
        }

        .lp-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 22px;
        }

        /* Featured large card */
        .lp-featured {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          display: block;
          text-decoration: none;
          height: 440px;
          box-shadow: 0 8px 32px rgba(45,31,20,0.12);
          transition: box-shadow 0.3s ease, transform 0.3s ease;
        }
        .lp-featured:hover {
          box-shadow: 0 20px 56px rgba(45,31,20,0.2);
          transform: translateY(-3px);
        }
        .lp-featured img {
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }
        .lp-featured:hover img { transform: scale(1.04); }
        .lp-featured-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(20,10,5,0.88) 0%, rgba(20,10,5,0.3) 50%, transparent 100%);
        }
        .lp-featured-body {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          padding: 32px 28px;
        }
        .lp-meta {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.75rem;
          color: rgba(255,255,255,0.65);
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .lp-meta-dot { width: 3px; height: 3px; border-radius: 50%; background: rgba(255,255,255,0.4); }
        .lp-featured-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.6rem;
          font-weight: 700;
          color: #fff;
          line-height: 1.25;
          margin-bottom: 12px;
          transition: color 0.2s;
        }
        .lp-featured:hover .lp-featured-title { color: #f5c99a; }
        .lp-featured-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9rem;
          color: rgba(255,255,255,0.75);
          line-height: 1.6;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          margin-bottom: 18px;
        }
        .lp-read-more {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #f5c99a;
        }
        .lp-read-more svg { transition: transform 0.2s; }
        .lp-featured:hover .lp-read-more svg { transform: translateX(4px); }

        /* Small cards */
        .lp-smalls {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        .lp-small-card {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          display: block;
          text-decoration: none;
          height: 207px;
          box-shadow: 0 4px 20px rgba(45,31,20,0.1);
          transition: box-shadow 0.3s, transform 0.3s;
        }
        .lp-small-card:hover {
          box-shadow: 0 12px 36px rgba(45,31,20,0.18);
          transform: translateY(-2px);
        }
        .lp-small-card img {
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform 0.55s ease;
        }
        .lp-small-card:hover img { transform: scale(1.06); }
        .lp-small-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(20,10,5,0.86) 0%, rgba(20,10,5,0.2) 55%, transparent 100%);
        }
        .lp-small-body {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          padding: 14px 14px 16px;
        }
        .lp-small-meta {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.68rem;
          color: rgba(255,255,255,0.55);
          margin-bottom: 6px;
          display: flex;
          gap: 6px;
          align-items: center;
        }
        .lp-small-title {
          font-family: 'Playfair Display', serif;
          font-size: 0.9rem;
          font-weight: 600;
          color: #fff;
          line-height: 1.3;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          transition: color 0.2s;
        }
        .lp-small-card:hover .lp-small-title { color: #f5c99a; }

        @media (max-width: 900px) {
          .lp-grid { grid-template-columns: 1fr; }
          .lp-featured { height: 380px; }
          .lp-smalls { grid-template-columns: repeat(4, 1fr); }
          .lp-small-card { height: 180px; }
        }
        @media (max-width: 640px) {
          .lp-smalls { grid-template-columns: 1fr 1fr; }
          .lp-small-card { height: 200px; }
          .lp-header { flex-direction: column; align-items: flex-start; gap: 14px; }
          .lp-section { padding: 64px 0; }
        }
      `}</style>

      <section className="lp-section">
        <div className="lp-inner">
          <div className="lp-header">
            <div>
              <p className="lp-eyebrow">From the blog</p>
              <h2 className="lp-title">Latest<br />Articles</h2>
            </div>
            <Link to="/blog" className="lp-view-all">View All</Link>
          </div>

          <div className="lp-grid">
            {/* Featured large post */}
            <Link to={`/blog/${first.slug}`} className="lp-featured">
              {first.thumbnail && <img src={first.thumbnail} alt={first.title} />}
              <div className="lp-featured-overlay" />
              <div className="lp-featured-body">
                <div className="lp-meta">
                  <span>{new Date(first.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                  <span className="lp-meta-dot" />
                  <span>{first.readTime || "5 min read"}</span>
                </div>
                <h3 className="lp-featured-title">{first.title}</h3>
                {first.metaDescription && (
                  <p className="lp-featured-desc">{first.metaDescription}</p>
                )}
                <span className="lp-read-more">
                  Read article
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </span>
              </div>
            </Link>

            {/* Small cards grid */}
            <div className="lp-smalls">
              {small.map((p) => (
                <Link key={p._id} to={`/blog/${p.slug}`} className="lp-small-card">
                  {p.thumbnail && <img src={p.thumbnail} alt={p.title} />}
                  <div className="lp-small-overlay" />
                  <div className="lp-small-body">
                    <div className="lp-small-meta">
                      <span>{new Date(p.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric" })}</span>
                      <span className="lp-meta-dot" />
                      <span>{p.readTime || "5 min"}</span>
                    </div>
                    <h4 className="lp-small-title">{p.title}</h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}