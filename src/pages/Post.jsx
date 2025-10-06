import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function Post() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [recentPosts, setRecentPosts] = useState([]);
  const [categories, setCategories] = useState([]);
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
    // Fetch current post by slug
    axios
      .get(`https://fitproud-backend.vercel.app/api/blogs/${slug}`)
      .then((res) => {
        setPost(res.data.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Post not found.");
        setLoading(false);
      });
    // Fetch recent published posts (limit 15)
    axios
      .get("https://fitproud-backend.vercel.app/api/blogs?published=true&limit=15")
      .then((res) => {
        setRecentPosts(res.data.data);
      })
      .catch(() => {
        // silently fail
      });
    // Fetch categories
    axios
      .get("https://fitproud-backend.vercel.app/api/blogs/categories")
      .then((res) => {
        setCategories(res.data.data);
      })
      .catch(() => {
        // silently fail
      });
  }, [slug]);

  if (loading) return <p className="text-center py-10">Loading post...</p>;
  if (error) return <p className="text-center py-10 text-red-500">{error}</p>;
  if (!post) return null;

  return (
    <main className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
      {/* Left: Main post */}
      <article className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        {/* Category Badge */}
        {post.category && (
          <div className="mb-3">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full">
              {post.category}
            </span>
          </div>
        )}
        
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">{post.title}</h1>
        
        {/* Meta Title */}
        {post.metaTitle && (
          <h2 className="text-xl font-medium mb-3 text-gray-700 dark:text-gray-300">
            {post.metaTitle}
          </h2>
        )}
        
        {/* Meta Description */}
        {post.metaDescription && (
          <p className="text-gray-600 dark:text-gray-400 mb-6 italic">
            {post.metaDescription}
          </p>
        )}
        
        <time
          dateTime={post.createdAt}
          className="block mb-6 text-sm text-gray-500 dark:text-gray-400"
        >
          {new Date(post.createdAt).toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        
        {post.thumbnail && (
          <img
            src={post.thumbnail}
            alt={post.title}
            className="w-full max-h-96 object-cover rounded-md mb-6"
          />
        )}
        
        <div
          className="prose dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
      
      {/* Right: Sidebar */}
      <aside>
        {/* Recent Posts */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 dark:text-white">Recent Posts</h2>
          <ul className="space-y-5">
            {recentPosts
              // Remove the currently open post
              .filter(post => post.slug !== slug)
              // Sort by createdAt (newest first)
              .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
              // Show only the latest 7 posts
              .slice(0, 7)
              .map(({ _id, title, slug: recentSlug, thumbnail }) => (
                <li key={_id}>
                  <Link
                    to={`/blog/${recentSlug}`}
                    className="flex items-center space-x-4 group"
                  >
                    {/* Thumbnail */}
                    <img
                      src={thumbnail}
                      alt={title}
                      className="w-30 h-15 object-cover rounded-md flex-shrink-0 transition-transform duration-200 group-hover:scale-105"
                    />
                    
                    {/* Title */}
                    <span className="text-blue-600 dark:text-blue-400 group-hover:text-blue-800 dark:group-hover:text-blue-300 font-medium">
                      {title}
                    </span>
                  </Link>
                </li>
              ))}
          </ul>
        </section>

        {/* Categories */}
        <section>
          <h2 className="text-xl font-semibold mb-4 dark:text-white">Categories</h2>
          <div className="flex flex-wrap gap-2">
            {mainCategories.map(({name,slug}) => (
              <Link
                key={slug}
                to={`/category/${slug}`} 
                className="px-3 py-1 bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 rounded-full text-sm font-medium hover:bg-blue-200 dark:hover:bg-blue-700 transition"
              >
                {name}
              </Link>
            ))}
          </div>
        </section>
      </aside>
    </main>
  );
}















