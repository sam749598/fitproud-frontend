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
      } catch (error) {
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Latest Posts</h2>
        <div className="h-8 w-32 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 h-96 bg-gray-200 dark:bg-gray-800 rounded-2xl animate-pulse"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-48 bg-gray-200 dark:bg-gray-800 rounded-2xl animate-pulse"></div>
          ))}
        </div>
      </div>
    </section>
  );

  if (!posts.length) return null;

  const [first, ...rest] = posts;
  const small = rest.slice(0, 4);

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">
            Latest Posts
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">Discover our most recent articles</p>
        </div>
        <Link 
          to="/blog" 
          className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-full hover:shadow-lg transition-all duration-300"
        >
          View All
        </Link>
      </div>
      
      <div className="grid gap-8 lg:grid-cols-3">
        {/* Main featured post */}
        <div className="lg:col-span-2">
          <Link
            to={`/blog/${first.slug}`}
            className="group relative block rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="relative h-[405px] overflow-hidden">
              {first.thumbnail && (
                <img
                  src={first.thumbnail}
                  alt={first.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center text-white/80 text-sm mb-3">
                  <span>{new Date(first.createdAt).toLocaleDateString()}</span>
                  <span className="mx-2">•</span>
                  <span>{first.readTime || '5 min read'}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors">
                  {first.title}
                </h3>
                <p className="text-white/90 line-clamp-2 mb-4">
                  {first.metaDescription || ""}
                </p>
                <div className="flex items-center text-white group-hover:text-purple-200 transition-colors">
                  <span className="font-medium">Read more</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </div>
        
        {/* Smaller posts grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {small.map((p) => (
            <Link
              key={p._id}
              to={`/blog/${p.slug}`}
              className="group relative block rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                {p.thumbnail && (
                  <img
                    src={p.thumbnail}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center text-white/80 text-xs mb-2">
                    <span>{new Date(p.createdAt).toLocaleDateString()}</span>
                    <span className="mx-1">•</span>
                    <span>{p.readTime || '5 min'}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white line-clamp-2 mb-2 group-hover:text-purple-200 transition-colors">
                    {p.title}
                  </h4>
                  <div className="flex items-center text-white text-sm group-hover:text-purple-200 transition-colors">
                    <span>Read more</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}