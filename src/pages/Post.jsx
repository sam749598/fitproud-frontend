// // src/pages/Post.jsx
// import React, { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import axios from "axios";
// import Seo from "../components/Seo.jsx";

// export default function Post() {
//   const { slug } = useParams();
//   const [post, setPost] = useState(null);
//   const [recentPosts, setRecentPosts] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const mainCategories = [
//     { name: "Beauty & Skin Care", slug: "beauty" },
//     { name: "Brain & Mental Wellness", slug: "brain" },
//     { name: "Core Health", slug: "core" },
//     { name: "Hormonal & Reproductive Health", slug: "hormone" },
//     { name: "Miscellaneous", slug: "miscellaneous" },
//     { name: "Musculoskeletal & Mobility", slug: "musculoskeletal" },
//     { name: "Organ-Specific Support", slug: "organ" },
//     { name: "Weight & Metabolism", slug: "weight" },
//   ];

//   useEffect(() => {
//     setLoading(true);
//     setError(null);

//     // Fetch current post
//     axios
//       .get(`https://fitproud-backend.vercel.app/api/blogs/${slug}`)
//       .then((res) => {
//         setPost(res.data.data);
//         setLoading(false);
//       })
//       .catch(() => {
//         setError("Post not found.");
//         setLoading(false);
//       });

//     // Fetch recent posts
//     axios
//       .get("https://fitproud-backend.vercel.app/api/blogs?published=true&limit=15")
//       .then((res) => setRecentPosts(res.data.data))
//       .catch(() => {});

//     // Fetch categories
//     axios
//       .get("https://fitproud-backend.vercel.app/api/blogs/categories")
//       .then((res) => setCategories(res.data.data))
//       .catch(() => {});
//   }, [slug]);

//   if (loading) return <p className="text-center py-10">Loading post...</p>;
//   if (error) return <p className="text-center py-10 text-red-500">{error}</p>;
//   if (!post) return null;

//   // --- JSON-LD BlogPosting Schema ---
//   const schema = {
//     "@context": "https://schema.org",
//     "@type": "BlogPosting",
//     "mainEntityOfPage": {
//       "@type": "WebPage",
//       "@id": `https://www.vitaprozen.com/blog/${slug}`
//     },
//     "headline": post.title,
//     "description": post.metaDescription || post.content.slice(0, 160),
//     "image": post.thumbnail || "https://www.vitaprozen.com/default-thumbnail.jpg",
//     "author": {
//       "@type": "Person",
//       "name": post.author || "Vitaprozen Editorial Team",
//       "url": "https://www.vitaprozen.com/about"
//     },
//     "publisher": {
//       "@type": "Organization",
//       "name": "Vitaprozen",
//       "logo": {
//         "@type": "ImageObject",
//         "url": "https://www.vitaprozen.com/logo.png"
//       }
//     },
//     "datePublished": post.createdAt,
//     "dateModified": post.updatedAt || post.createdAt,
//     "url": `https://www.vitaprozen.com/blog/${slug}`
//   };

//   return (
//     <>
//       {/* --- SEO Component --- */}
//       <Seo
//         title={post.metaTitle || post.title}
//         description={post.metaDescription || post.content.slice(0, 160)}
//         canonical={`https://www.vitaprozen.com/blog/${slug}`}
//         schema={schema}
//       />

//       <main className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
//         {/* Left: Blog Content */}
//         <article className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
//           {post.category && (
//             <div className="mb-3">
//               <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full">
//                 {post.category}
//               </span>
//             </div>
//           )}
//           <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">{post.title}</h1>
//           {post.metaTitle && (
//             <h2 className="text-xl font-medium mb-3 text-gray-700 dark:text-gray-300">{post.metaTitle}</h2>
//           )}
//           {post.metaDescription && (
//             <p className="text-gray-600 dark:text-gray-400 mb-6 italic">{post.metaDescription}</p>
//           )}
//           <time
//             dateTime={post.createdAt}
//             className="block mb-6 text-sm text-gray-500 dark:text-gray-400"
//           >
//             {new Date(post.createdAt).toLocaleDateString(undefined, {
//               year: "numeric",
//               month: "long",
//               day: "numeric",
//             })}
//           </time>

//           {post.thumbnail && (
//             <img
//               src={post.thumbnail}
//               alt={post.title}
//               className="w-full max-h-96 object-cover rounded-md mb-6"
//             />
//           )}

//           <div
//             className="prose dark:prose-invert max-w-none"
//             dangerouslySetInnerHTML={{ __html: post.content }}
//           />
//         </article>

//         {/* Right: Sidebar */}
//         <aside>
//           {/* Recent Posts */}
//           <section className="mb-8">
//             <h2 className="text-xl font-semibold mb-4 dark:text-white">Recent Posts</h2>
//             <ul className="space-y-5">
//               {recentPosts
//                 .filter((p) => p.slug !== slug)
//                 .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
//                 .slice(0, 7)
//                 .map(({ _id, title, slug: recentSlug, thumbnail }) => (
//                   <li key={_id}>
//                     <Link
//                       to={`/blog/${recentSlug}`}
//                       className="flex items-center space-x-4 group"
//                     >
//                       <img
//                         src={thumbnail}
//                         alt={title}
//                         className="w-30 h-15 object-cover rounded-md flex-shrink-0 transition-transform duration-200 group-hover:scale-105"
//                       />
//                       <span className="text-blue-600 dark:text-blue-400 group-hover:text-blue-800 dark:group-hover:text-blue-300 font-medium">
//                         {title}
//                       </span>
//                     </Link>
//                   </li>
//                 ))}
//             </ul>
//           </section>

//           {/* Categories */}
//           <section>
//             <h2 className="text-xl font-semibold mb-4 dark:text-white">Categories</h2>
//             <div className="flex flex-wrap gap-2">
//               {mainCategories.map(({ name, slug }) => (
//                 <Link
//                   key={slug}
//                   to={`/category/${slug}`}
//                   className="px-3 py-1 bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 rounded-full text-sm font-medium hover:bg-blue-200 dark:hover:bg-blue-700 transition"
//                 >
//                   {name}
//                 </Link>
//               ))}
//             </div>
//           </section>
//         </aside>
//       </main>
//     </>
//   );
// }


// src/pages/Post.jsx
// import React, { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import axios from "axios";
// import Seo from "../components/Seo.jsx";

// export default function Post() {
//   const { slug } = useParams();
//   const [post, setPost] = useState(null);
//   const [recentPosts, setRecentPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const mainCategories = [
//     { name: "Beauty & Skin Care", slug: "beauty" },
//     { name: "Brain & Mental Wellness", slug: "brain" },
//     { name: "Core Health", slug: "core" },
//     { name: "Hormonal & Reproductive Health", slug: "hormone" },
//     { name: "Miscellaneous", slug: "miscellaneous" },
//     { name: "Musculoskeletal & Mobility", slug: "musculoskeletal" },
//     { name: "Organ-Specific Support", slug: "organ" },
//     { name: "Weight & Metabolism", slug: "weight" },
//   ];

//   useEffect(() => {
//     setLoading(true);
//     setError(null);
//     axios.get(`https://fitproud-backend.vercel.app/api/blogs/${slug}`)
//       .then((res) => { setPost(res.data.data); setLoading(false); })
//       .catch(() => { setError("Post not found."); setLoading(false); });
//     axios.get("https://fitproud-backend.vercel.app/api/blogs?published=true&limit=15")
//       .then((res) => setRecentPosts(res.data.data))
//       .catch(() => {});
//   }, [slug]);

//   if (loading) return (
//     <>
//       <style>{`.ps-sk{background:#f0e9df;border-radius:12px;animation:ps-pulse 1.6s ease-in-out infinite}@keyframes ps-pulse{0%,100%{opacity:1}50%{opacity:0.5}}`}</style>
//       <div style={{ background: "#fdf7ef", minHeight: "80vh", padding: "48px 2rem" }}>
//         <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "2fr 1fr", gap: 32 }}>
//           <div>
//             <div className="ps-sk" style={{ width: 100, height: 28, marginBottom: 20 }} />
//             <div className="ps-sk" style={{ height: 44, marginBottom: 14 }} />
//             <div className="ps-sk" style={{ height: 380, marginBottom: 24 }} />
//             <div className="ps-sk" style={{ height: 200 }} />
//           </div>
//           <div>
//             <div className="ps-sk" style={{ height: 28, marginBottom: 20 }} />
//             {[...Array(5)].map((_, i) => <div key={i} className="ps-sk" style={{ height: 68, marginBottom: 14 }} />)}
//           </div>
//         </div>
//       </div>
//     </>
//   );

//   if (error) return (
//     <div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", color: "#c5824a", fontFamily: "DM Sans, sans-serif", fontSize: "1.1rem" }}>{error}</div>
//   );
//   if (!post) return null;

//   const schema = {
//     "@context": "https://schema.org",
//     "@type": "BlogPosting",
//     "mainEntityOfPage": { "@type": "WebPage", "@id": `https://www.vitaprozen.com/blog/${slug}` },
//     "headline": post.title,
//     "description": post.metaDescription || post.content.slice(0, 160),
//     "image": post.thumbnail || "https://www.vitaprozen.com/default-thumbnail.jpg",
//     "author": { "@type": "Person", "name": post.author || "Vitaprozen Editorial Team", "url": "https://www.vitaprozen.com/about" },
//     "publisher": { "@type": "Organization", "name": "Vitaprozen", "logo": { "@type": "ImageObject", "url": "https://www.vitaprozen.com/logo.png" } },
//     "datePublished": post.createdAt,
//     "dateModified": post.updatedAt || post.createdAt,
//     "url": `https://www.vitaprozen.com/blog/${slug}`
//   };

//   return (
//     <>
//       <Seo
//         title={post.metaTitle || post.title}
//         description={post.metaDescription || post.content.slice(0, 160)}
//         canonical={`https://www.vitaprozen.com/blog/${slug}`}
//         schema={schema}
//       />

//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,400&family=DM+Sans:wght@300;400;500;600&family=Lora:ital,wght@0,400;0,500;1,400&display=swap');

//         .ps-page { background: #fdf7ef; min-height: 100vh; }

//         .ps-layout {
//           max-width: 1100px;
//           margin: 0 auto;
//           padding: 52px 2rem 88px;
//           display: grid;
//           grid-template-columns: 1fr 320px;
//           gap: 48px;
//           align-items: start;
//         }

//         /* Article */
//         .ps-article {
//           background: #fff;
//           border-radius: 24px;
//           overflow: hidden;
//           box-shadow: 0 4px 32px rgba(45,31,20,0.08);
//         }
//         .ps-article-hero {
//           width: 100%;
//           height: 380px;
//           object-fit: cover;
//           display: block;
//         }
//         .ps-article-body { padding: 40px 44px 48px; }

//         .ps-cat-badge {
//           display: inline-block;
//           font-family: 'DM Sans', sans-serif;
//           font-size: 0.72rem;
//           font-weight: 700;
//           letter-spacing: 0.14em;
//           text-transform: uppercase;
//           color: #c5824a;
//           background: rgba(197,130,74,0.1);
//           border: 1.5px solid rgba(197,130,74,0.25);
//           padding: 4px 14px;
//           border-radius: 20px;
//           margin-bottom: 18px;
//         }

//         .ps-title {
//           font-family: 'Playfair Display', serif;
//           font-size: clamp(1.8rem, 3vw, 2.5rem);
//           font-weight: 700;
//           color: #2d1f14;
//           line-height: 1.22;
//           margin-bottom: 10px;
//         }

//         .ps-meta-title {
//           font-family: 'Playfair Display', serif;
//           font-size: 1.15rem;
//           font-weight: 600;
//           font-style: italic;
//           color: #6b4f3a;
//           margin-bottom: 12px;
//         }

//         .ps-meta-desc {
//           font-family: 'DM Sans', sans-serif;
//           font-size: 1rem;
//           color: #7a5c48;
//           line-height: 1.7;
//           margin-bottom: 20px;
//         }

//         .ps-date {
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           font-family: 'DM Sans', sans-serif;
//           font-size: 0.82rem;
//           color: #a08070;
//           margin-bottom: 32px;
//           padding-bottom: 28px;
//           border-bottom: 1.5px solid #f0e9df;
//         }
//         .ps-date svg { color: #c5824a; }

//         .ps-content {
//           font-family: 'Lora', serif;
//           font-size: 1.05rem;
//           line-height: 1.85;
//           color: #3d2a1e;
//         }
//         .ps-content h2, .ps-content h3 {
//           font-family: 'Playfair Display', serif;
//           color: #2d1f14;
//           margin: 1.8em 0 0.7em;
//         }
//         .ps-content p { margin-bottom: 1.3em; }
//         .ps-content a { color: #c5824a; text-decoration: underline; }
//         .ps-content ul, .ps-content ol { padding-left: 1.5em; margin-bottom: 1.3em; }
//         .ps-content li { margin-bottom: 0.4em; }
//         .ps-content img { max-width: 100%; border-radius: 12px; margin: 1.5em 0; }
//         .ps-content blockquote {
//           border-left: 3px solid #c5824a;
//           padding: 12px 20px;
//           margin: 1.5em 0;
//           background: rgba(197,130,74,0.06);
//           border-radius: 0 10px 10px 0;
//           color: #6b4f3a;
//           font-style: italic;
//         }

//         /* Sidebar */
//         .ps-sidebar { position: sticky; top: 100px; }

//         .ps-sidebar-box {
//           background: #fff;
//           border-radius: 20px;
//           box-shadow: 0 4px 24px rgba(45,31,20,0.07);
//           overflow: hidden;
//           margin-bottom: 22px;
//         }
//         .ps-sidebar-head {
//           padding: 18px 20px 14px;
//           border-bottom: 1.5px solid #f0e9df;
//           font-family: 'Playfair Display', serif;
//           font-size: 1.05rem;
//           font-weight: 700;
//           color: #2d1f14;
//         }
//         .ps-sidebar-body { padding: 14px 16px 16px; }

//         /* Recent posts */
//         .ps-recent-item {
//           display: flex;
//           gap: 12px;
//           align-items: flex-start;
//           padding: 10px 0;
//           border-bottom: 1px solid #f7f0e8;
//           text-decoration: none;
//           transition: opacity 0.2s;
//         }
//         .ps-recent-item:last-child { border-bottom: none; padding-bottom: 0; }
//         .ps-recent-item:hover { opacity: 0.78; }
//         .ps-recent-thumb {
//           width: 64px;
//           height: 50px;
//           border-radius: 10px;
//           object-fit: cover;
//           flex-shrink: 0;
//           transition: transform 0.3s;
//         }
//         .ps-recent-item:hover .ps-recent-thumb { transform: scale(1.04); }
//         .ps-recent-title {
//           font-family: 'DM Sans', sans-serif;
//           font-size: 0.83rem;
//           font-weight: 500;
//           color: #3d2a1e;
//           line-height: 1.4;
//           display: -webkit-box;
//           -webkit-line-clamp: 3;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }

//         /* Category chips */
//         .ps-cat-chips { display: flex; flex-wrap: wrap; gap: 8px; }
//         .ps-cat-chip {
//           font-family: 'DM Sans', sans-serif;
//           font-size: 0.75rem;
//           font-weight: 600;
//           padding: 6px 14px;
//           border-radius: 20px;
//           background: #fef3e7;
//           border: 1.5px solid #e8d5bf;
//           color: #7a5c48;
//           text-decoration: none;
//           transition: background 0.2s, color 0.2s, border-color 0.2s;
//         }
//         .ps-cat-chip:hover { background: #c5824a; color: #fff; border-color: #c5824a; }

//         @media (max-width: 900px) {
//           .ps-layout { grid-template-columns: 1fr; }
//           .ps-sidebar { position: static; }
//           .ps-article-hero { height: 260px; }
//           .ps-article-body { padding: 28px 22px 36px; }
//         }
//       `}</style>

//       <div className="ps-page">
//         <div className="ps-layout">
//           {/* Article */}
//           <article className="ps-article">
//             {post.thumbnail && (
//               <img src={post.thumbnail} alt={post.title} className="ps-article-hero" />
//             )}
//             <div className="ps-article-body">
//               {post.category && <span className="ps-cat-badge">{post.category}</span>}
//               <h1 className="ps-title">{post.title}</h1>
//               {post.metaTitle && <h2 className="ps-meta-title">{post.metaTitle}</h2>}
//               {post.metaDescription && <p className="ps-meta-desc">{post.metaDescription}</p>}
//               <div className="ps-date">
//                 <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                   <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
//                 </svg>
//                 <time dateTime={post.createdAt}>
//                   {new Date(post.createdAt).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })}
//                 </time>
//               </div>
//               <div className="ps-content" dangerouslySetInnerHTML={{ __html: post.content }} />
//             </div>
//           </article>

//           {/* Sidebar */}
//           <aside className="ps-sidebar">
//             <div className="ps-sidebar-box">
//               <div className="ps-sidebar-head">Recent Posts</div>
//               <div className="ps-sidebar-body">
//                 {recentPosts
//                   .filter((p) => p.slug !== slug)
//                   .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
//                   .slice(0, 7)
//                   .map(({ _id, title, slug: rSlug, thumbnail }) => (
//                     <Link key={_id} to={`/blog/${rSlug}`} className="ps-recent-item">
//                       {thumbnail && <img src={thumbnail} alt={title} className="ps-recent-thumb" />}
//                       <span className="ps-recent-title">{title}</span>
//                     </Link>
//                   ))}
//               </div>
//             </div>

//             <div className="ps-sidebar-box">
//               <div className="ps-sidebar-head">Categories</div>
//               <div className="ps-sidebar-body">
//                 <div className="ps-cat-chips">
//                   {mainCategories.map(({ name, slug: cSlug }) => (
//                     <Link key={cSlug} to={`/category/${cSlug}`} className="ps-cat-chip">{name}</Link>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </aside>
//         </div>
//       </div>
//     </>
//   );
// }



// src/pages/Post.jsx
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Seo from "../components/Seo.jsx";

export default function Post() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [recentPosts, setRecentPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const mainCategories = [
    { name: "Beauty & Skin Care", slug: "beauty" },
    { name: "Brain & Mental Wellness", slug: "brain" },
    { name: "Core Health", slug: "core" },
    { name: "Hormonal & Reproductive Health", slug: "hormone" },
    { name: "Miscellaneous", slug: "miscellaneous" },
    { name: "Musculoskeletal & Mobility", slug: "musculoskeletal" },
    { name: "Organ-Specific Support", slug: "organ" },
    { name: "Weight & Metabolism", slug: "weight" },
  ];

  useEffect(() => {
    setLoading(true);
    setError(null);
    axios.get(`https://fitproud-backend.vercel.app/api/blogs/${slug}`)
      .then((res) => { setPost(res.data.data); setLoading(false); })
      .catch(() => { setError("Post not found."); setLoading(false); });
    axios.get("https://fitproud-backend.vercel.app/api/blogs?published=true&limit=15")
      .then((res) => setRecentPosts(res.data.data))
      .catch(() => {});
  }, [slug]);

  if (loading) return (
    <>
      <style>{`.ps-sk{background:#f0e9df;border-radius:12px;animation:ps-pulse 1.6s ease-in-out infinite}@keyframes ps-pulse{0%,100%{opacity:1}50%{opacity:0.5}}`}</style>
      <div style={{ background: "#fdf7ef", minHeight: "80vh", padding: "48px 2rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "2fr 1fr", gap: 32 }}>
          <div>
            <div className="ps-sk" style={{ width: 100, height: 28, marginBottom: 20 }} />
            <div className="ps-sk" style={{ height: 44, marginBottom: 14 }} />
            <div className="ps-sk" style={{ height: 380, marginBottom: 24 }} />
            <div className="ps-sk" style={{ height: 200 }} />
          </div>
          <div>
            <div className="ps-sk" style={{ height: 28, marginBottom: 20 }} />
            {[...Array(5)].map((_, i) => <div key={i} className="ps-sk" style={{ height: 68, marginBottom: 14 }} />)}
          </div>
        </div>
      </div>
    </>
  );

  if (error) return (
    <div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", color: "#c5824a", fontFamily: "DM Sans, sans-serif", fontSize: "1.1rem" }}>{error}</div>
  );
  if (!post) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": { "@type": "WebPage", "@id": `https://www.vitaprozen.com/blog/${slug}` },
    "headline": post.title,
    "description": post.metaDescription || post.content.slice(0, 160),
    "image": post.thumbnail || "https://www.vitaprozen.com/default-thumbnail.jpg",
    "author": { "@type": "Person", "name": post.author || "Vitaprozen Editorial Team", "url": "https://www.vitaprozen.com/about" },
    "publisher": { "@type": "Organization", "name": "Vitaprozen", "logo": { "@type": "ImageObject", "url": "https://www.vitaprozen.com/logo.png" } },
    "datePublished": post.createdAt,
    "dateModified": post.updatedAt || post.createdAt,
    "url": `https://www.vitaprozen.com/blog/${slug}`
  };

  return (
    <>
      <Seo
        title={post.metaTitle || post.title}
        description={post.metaDescription || post.content.slice(0, 160)}
        canonical={`https://www.vitaprozen.com/blog/${slug}`}
        schema={schema}
      />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,400&family=DM+Sans:wght@300;400;500;600&family=Lora:ital,wght@0,400;0,500;1,400&display=swap');

        .ps-page { background: #fdf7ef; min-height: 100vh; }

        .ps-layout {
          max-width: 1360px;
          margin: 0 auto;
          padding: 52px 2rem 88px;
          display: grid;
          grid-template-columns: 1fr 300px;
          gap: 40px;
          align-items: start;
        }

        /* Article */
        .ps-article {
          background: #fff;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 4px 32px rgba(45,31,20,0.08);
        }
        .ps-article-hero {
          width: 100%;
          height: 380px;
          object-fit: cover;
          display: block;
        }
        .ps-article-body { padding: 40px 44px 48px; }

        .ps-cat-badge {
          display: inline-block;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #c5824a;
          background: rgba(197,130,74,0.1);
          border: 1.5px solid rgba(197,130,74,0.25);
          padding: 4px 14px;
          border-radius: 20px;
          margin-bottom: 18px;
        }

        .ps-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.8rem, 3vw, 2.5rem);
          font-weight: 700;
          color: #2d1f14;
          line-height: 1.22;
          margin-bottom: 10px;
        }

        .ps-meta-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.15rem;
          font-weight: 600;
          font-style: italic;
          color: #6b4f3a;
          margin-bottom: 12px;
        }

        .ps-meta-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 1rem;
          color: #7a5c48;
          line-height: 1.7;
          margin-bottom: 20px;
        }

        .ps-date {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.82rem;
          color: #a08070;
          margin-bottom: 32px;
          padding-bottom: 28px;
          border-bottom: 1.5px solid #f0e9df;
        }
        .ps-date svg { color: #c5824a; }

        .ps-content {
          font-family: 'Lora', serif;
          font-size: 1.05rem;
          line-height: 1.85;
          color: #3d2a1e;
        }
        .ps-content h2, .ps-content h3 {
          font-family: 'Playfair Display', serif;
          color: #2d1f14;
          margin: 1.8em 0 0.7em;
        }
        .ps-content p { margin-bottom: 1.3em; }
        .ps-content a { color: #c5824a; text-decoration: underline; }
        .ps-content ul, .ps-content ol { padding-left: 1.5em; margin-bottom: 1.3em; }
        .ps-content li { margin-bottom: 0.4em; }
        .ps-content img { max-width: 100%; border-radius: 12px; margin: 1.5em 0; }
        .ps-content blockquote {
          border-left: 3px solid #c5824a;
          padding: 12px 20px;
          margin: 1.5em 0;
          background: rgba(197,130,74,0.06);
          border-radius: 0 10px 10px 0;
          color: #6b4f3a;
          font-style: italic;
        }

        /* Sidebar */
        .ps-sidebar { position: sticky; top: 100px; }

        .ps-sidebar-box {
          background: #fff;
          border-radius: 20px;
          box-shadow: 0 4px 24px rgba(45,31,20,0.07);
          overflow: hidden;
          margin-bottom: 22px;
        }
        .ps-sidebar-head {
          padding: 18px 20px 14px;
          border-bottom: 1.5px solid #f0e9df;
          font-family: 'Playfair Display', serif;
          font-size: 1.05rem;
          font-weight: 700;
          color: #2d1f14;
        }
        .ps-sidebar-body { padding: 14px 16px 16px; }

        /* Recent posts */
        .ps-recent-item {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          padding: 10px 0;
          border-bottom: 1px solid #f7f0e8;
          text-decoration: none;
          transition: opacity 0.2s;
        }
        .ps-recent-item:last-child { border-bottom: none; padding-bottom: 0; }
        .ps-recent-item:hover { opacity: 0.78; }
        .ps-recent-thumb {
          width: 64px;
          height: 50px;
          border-radius: 10px;
          object-fit: cover;
          flex-shrink: 0;
          transition: transform 0.3s;
        }
        .ps-recent-item:hover .ps-recent-thumb { transform: scale(1.04); }
        .ps-recent-title {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.83rem;
          font-weight: 500;
          color: #3d2a1e;
          line-height: 1.4;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Category chips */
        .ps-cat-chips { display: flex; flex-wrap: wrap; gap: 8px; }
        .ps-cat-chip {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          padding: 6px 14px;
          border-radius: 20px;
          background: #fef3e7;
          border: 1.5px solid #e8d5bf;
          color: #7a5c48;
          text-decoration: none;
          transition: background 0.2s, color 0.2s, border-color 0.2s;
        }
        .ps-cat-chip:hover { background: #c5824a; color: #fff; border-color: #c5824a; }

        @media (max-width: 900px) {
          .ps-layout { grid-template-columns: 1fr; }
          .ps-sidebar { position: static; }
          .ps-article-hero { height: 260px; }
          .ps-article-body { padding: 28px 22px 36px; }
        }
      `}</style>

      <div className="ps-page">
        <div className="ps-layout">
          {/* Article */}
          <article className="ps-article">
            {post.thumbnail && (
              <img src={post.thumbnail} alt={post.title} className="ps-article-hero" />
            )}
            <div className="ps-article-body">
              {post.category && <span className="ps-cat-badge">{post.category}</span>}
              <h1 className="ps-title">{post.title}</h1>
              {post.metaTitle && <h2 className="ps-meta-title">{post.metaTitle}</h2>}
              {post.metaDescription && <p className="ps-meta-desc">{post.metaDescription}</p>}
              <div className="ps-date">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                <time dateTime={post.createdAt}>
                  {new Date(post.createdAt).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })}
                </time>
              </div>
              <div className="ps-content" dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
          </article>

          {/* Sidebar */}
          <aside className="ps-sidebar">
            <div className="ps-sidebar-box">
              <div className="ps-sidebar-head">Recent Posts</div>
              <div className="ps-sidebar-body">
                {recentPosts
                  .filter((p) => p.slug !== slug)
                  .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                  .slice(0, 7)
                  .map(({ _id, title, slug: rSlug, thumbnail }) => (
                    <Link key={_id} to={`/blog/${rSlug}`} className="ps-recent-item">
                      {thumbnail && <img src={thumbnail} alt={title} className="ps-recent-thumb" />}
                      <span className="ps-recent-title">{title}</span>
                    </Link>
                  ))}
              </div>
            </div>

            <div className="ps-sidebar-box">
              <div className="ps-sidebar-head">Categories</div>
              <div className="ps-sidebar-body">
                <div className="ps-cat-chips">
                  {mainCategories.map(({ name, slug: cSlug }) => (
                    <Link key={cSlug} to={`/category/${cSlug}`} className="ps-cat-chip">{name}</Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}