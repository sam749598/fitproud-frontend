// import { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// export default function ManagePosts() {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();
  
//   // Check if admin is logged in
//   useEffect(() => {
//     const isLoggedIn = localStorage.getItem('adminLoggedIn');
//     if (!isLoggedIn) {
//       navigate('/dashboard/login');
//     }
//   }, [navigate]);
  
//   // Fetch all posts
//   const fetchPosts = async () => {
//     try {
//       setLoading(true);
//       // Fetch all posts without pagination
//       const res = await axios.get('https://fitproud-backend.vercel.app/api/blogs',{
//         params:{limit:0}
//       });
      
//       if (Array.isArray(res.data)) {
//         setPosts(res.data);
//       } else if (Array.isArray(res.data.data)) {
//         setPosts(res.data.data);
//       } else {
//         setPosts([]);
//       }
//       setError("");
//     } catch (err) {
//       console.error(err);
//       setError("Failed to load posts");
//       setPosts([]);
//     } finally {
//       setLoading(false);
//     }
//   };
  
//   useEffect(() => {
//     fetchPosts();
//   }, []);
  
//   // Delete post
//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this post?")) return;
//     try {
//       await axios.delete(`https://fitproud-backend.vercel.app/api/blogs/${id}`);
//       setPosts((prev) => prev.filter((post) => post._id !== id));
//     } catch (err) {
//       console.error(err);
//       alert("Failed to delete post");
//     }
//   };
  
//   // Toggle publish status
//   const togglePublishStatus = async (id, currentStatus) => {
//     try {
//       const res = await axios.patch(`https://fitproud-backend.vercel.app/api/blogs/${id}/publish`);
      
//       if (res.data && res.data.data) {
//         const updatedPost = res.data.data;
//         setPosts(prev => prev.map(post => 
//           post._id === id ? updatedPost : post
//         ));
//         alert(`Post ${updatedPost.published ? 'published' : 'unpublished'} successfully`);
//       } else {
//         setPosts(prev => prev.map(post => 
//           post._id === id ? { ...post, published: !currentStatus } : post
//         ));
//         alert(`Post ${!currentStatus ? 'published' : 'unpublished'} successfully`);
//       }
//     } catch (err) {
//       console.error("Error toggling publish status:", err);
//       alert("Failed to update publish status");
//     }
//   };
  
//   return (
//     <div className="p-6">
//       <div className="flex justify-between items-center mb-4">
//         <h1 className="text-xl font-bold">Manage Posts</h1>
//         <button
//           onClick={fetchPosts}
//           className="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600"
//         >
//           Refresh
//         </button>
//       </div>
      
//       {loading && <p>Loading posts...</p>}
//       {error && <p className="text-red-500">{error}</p>}
//       {!loading && posts.length === 0 && <p>No posts found</p>}
      
//       {!loading && posts.length > 0 && (
//         <div className="overflow-x-auto">
//           <table className="w-full border border-gray-300">
//             <thead>
//               <tr className="bg-gray-100">
//                 <th className="p-2 border">Thumbnail</th>
//                 <th className="p-2 border">Title</th>
//                 <th className="p-2 border">Category</th>
//                 <th className="p-2 border">Status</th>
//                 <th className="p-2 border">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {posts.map((post) => (
//                 <tr key={post._id}>
//                   <td className="p-2 border">
//                     {post.thumbnail ? (
//                       <img
//                         src={post.thumbnail}
//                         alt="thumb"
//                         className="w-16 h-16 object-cover rounded"
//                       />
//                     ) : (
//                       "No Image"
//                     )}
//                   </td>
//                   <td className="p-2 border">{post.title}</td>
//                   <td className="p-2 border">{post.category || "N/A"}</td>
//                   <td className="p-2 border">
//                     {post.published ? (
//                       <span className="text-green-600 font-semibold">
//                         Published
//                       </span>
//                     ) : (
//                       <span className="text-yellow-600 font-semibold">
//                         Unpublished
//                       </span>
//                     )}
//                   </td>
//                   <td className="p-2 border space-x-2">
//                     <Link
//                       to={`/dashboard/edit/${post._id}`}
//                       className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
//                     >
//                       Edit
//                     </Link>
//                     <button
//                       onClick={() => togglePublishStatus(post._id, post.published)}
//                       className={`px-3 py-1 text-white rounded ${
//                         post.published 
//                           ? 'bg-yellow-500 hover:bg-yellow-600' 
//                           : 'bg-green-500 hover:bg-green-600'
//                       }`}
//                     >
//                       {post.published ? 'Unpublish' : 'Publish'}
//                     </button>
//                     <button
//                       onClick={() => handleDelete(post._id)}
//                       className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
      
//       {!loading && posts.length > 0 && (
//         <div className="mt-4 text-sm text-gray-500">
//           Showing all {posts.length} posts
//         </div>
//       )}
//     </div>
//   );
// }




import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const API = 'https://fitproud-backend.vercel.app/api/blogs';

// ── Category list ─────────────────────────────────────────────────────────────
// Edit this array to add / remove categories shown in the filter bar.
// id must match exactly what your backend stores in post.category
const CATEGORIES = [
  { id: 'all',                           label: 'All'                        },
  { id: 'Beauty & Skin Care',            label: 'Beauty & Skin Care'         },
  { id: 'Brain & Mental Wellness',       label: 'Brain & Mental Wellness'    },
  { id: 'Core Health',                   label: 'Core Health'                },
  { id: 'Hormonal & Reproductive Health',label: 'Hormonal & Reproductive Health' },
  { id: 'Miscellaneous',                 label: 'Miscellaneous'              },
  { id: 'Musculoskeletal & Mobility',    label: 'Musculoskeletal & Mobility' },
  { id: 'Organ-Specific Support',        label: 'Organ-Specific Support'     },
  { id: 'Weight & Metabolism',           label: 'Weight & Metabolism'        },
];

export default function ManagePosts() {
  const [posts,          setPosts]          = useState([]);
  const [loading,        setLoading]        = useState(true);
  const [error,          setError]          = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery,    setSearchQuery]    = useState('');
  const [statusFilter,   setStatusFilter]   = useState('all'); // 'all' | 'published' | 'unpublished'
  const navigate = useNavigate();

  // ── Auth guard ──────────────────────────────────────────────────────────────
  useEffect(() => {
    if (!localStorage.getItem('adminLoggedIn')) {
      navigate('/dashboard/login');
    }
  }, [navigate]);

  // ── Fetch posts ─────────────────────────────────────────────────────────────
  const fetchPosts = async () => {
    try {
      setLoading(true);
      setError('');
      const res = await axios.get(API, { params: { limit: 0 } });

      if (Array.isArray(res.data))             setPosts(res.data);
      else if (Array.isArray(res.data.data))   setPosts(res.data.data);
      else                                     setPosts([]);
    } catch (err) {
      console.error(err);
      setError('Failed to load posts. Please try refreshing.');
      setPosts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchPosts(); }, []);

  // ── Delete ──────────────────────────────────────────────────────────────────
  const handleDelete = async (id) => {
    if (!window.confirm('Delete this post? This cannot be undone.')) return;
    try {
      await axios.delete(`${API}/${id}`);
      setPosts((prev) => prev.filter((p) => p._id !== id));
    } catch (err) {
      console.error(err);
      alert('Failed to delete post.');
    }
  };

  // ── Toggle publish ──────────────────────────────────────────────────────────
  const togglePublishStatus = async (id, currentStatus) => {
    try {
      const res = await axios.patch(`${API}/${id}/publish`);
      const updated = res.data?.data;
      setPosts((prev) =>
        prev.map((p) =>
          p._id === id
            ? updated ?? { ...p, published: !currentStatus }
            : p
        )
      );
    } catch (err) {
      console.error('Error toggling publish status:', err);
      alert('Failed to update publish status.');
    }
  };

  // ── Derived filtered list ───────────────────────────────────────────────────
  const filteredPosts = posts.filter((p) => {
    const matchCategory =
      activeCategory === 'all' ||
      (p.category || 'Miscellaneous') === activeCategory;

    const matchSearch =
      searchQuery.trim() === '' ||
      p.title?.toLowerCase().includes(searchQuery.toLowerCase());

    const matchStatus =
      statusFilter === 'all' ||
      (statusFilter === 'published'   &&  p.published) ||
      (statusFilter === 'unpublished' && !p.published);

    return matchCategory && matchSearch && matchStatus;
  });

  // ── Category counts (for badges) ────────────────────────────────────────────
  const countFor = (catId) =>
    catId === 'all'
      ? posts.length
      : posts.filter(
          (p) => (p.category || 'Miscellaneous') === catId
        ).length;

  // ── UI ──────────────────────────────────────────────────────────────────────
  return (
    <div className="p-4 sm:p-6">

      {/* Header row */}
      <div className="flex flex-wrap justify-between items-center gap-3 mb-5">
        <h1 className="text-xl font-bold text-gray-800">Manage Posts</h1>
        <button
          onClick={fetchPosts}
          disabled={loading}
          className="px-3 py-1.5 bg-gray-500 text-white text-sm rounded hover:bg-gray-600 disabled:opacity-50 transition-colors"
        >
          {loading ? 'Loading…' : '↻ Refresh'}
        </button>
      </div>

      {/* ── Category filter bar ─────────────────────────────────────────────── */}
      <div className="flex flex-wrap gap-2 mb-4">
        {CATEGORIES.map((cat) => {
          const count = countFor(cat.id);
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium border transition-all ${
                activeCategory === cat.id
                  ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                  : 'bg-white text-gray-600 border-gray-300 hover:border-blue-400 hover:text-blue-600'
              }`}
            >
              {cat.label}
              <span
                className={`text-xs px-1.5 py-0.5 rounded-full font-semibold ${
                  activeCategory === cat.id
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-500'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* ── Search + status filter ──────────────────────────────────────────── */}
      <div className="flex flex-wrap gap-3 mb-5">
        <input
          type="text"
          placeholder="Search by title…"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 min-w-[200px] px-3 py-1.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-3 py-1.5 border border-gray-300 rounded-md text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="all">All Status</option>
          <option value="published">Published</option>
          <option value="unpublished">Unpublished</option>
        </select>
      </div>

      {/* ── States ──────────────────────────────────────────────────────────── */}
      {loading && (
        <div className="flex justify-center py-16">
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      {!loading && error && (
        <div className="rounded-md bg-red-50 border border-red-200 p-4 text-red-700 text-sm">
          {error}
        </div>
      )}

      {!loading && !error && filteredPosts.length === 0 && (
        <div className="text-center py-16 text-gray-400">
          <p className="text-lg font-medium">No posts found</p>
          <p className="text-sm mt-1">
            {activeCategory !== 'all' || searchQuery || statusFilter !== 'all'
              ? 'Try changing the filters.'
              : 'Create your first post to get started.'}
          </p>
        </div>
      )}

      {/* ── Table ────────────────────────────────────────────────────────────── */}
      {!loading && !error && filteredPosts.length > 0 && (
        <>
          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="p-3 text-left font-semibold text-gray-600">Thumbnail</th>
                  <th className="p-3 text-left font-semibold text-gray-600">Title</th>
                  <th className="p-3 text-left font-semibold text-gray-600">Category</th>
                  <th className="p-3 text-left font-semibold text-gray-600">Status</th>
                  <th className="p-3 text-left font-semibold text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {filteredPosts.map((post) => (
                  <tr key={post._id} className="hover:bg-gray-50 transition-colors">

                    {/* Thumbnail */}
                    <td className="p-3">
                      {post.thumbnail ? (
                        <img
                          src={post.thumbnail}
                          alt="thumb"
                          className="w-14 h-14 object-cover rounded-md border border-gray-200"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.nextElementSibling.style.display = 'flex';
                          }}
                        />
                      ) : null}
                      <div
                        className="w-14 h-14 rounded-md bg-gray-100 border border-gray-200 items-center justify-center text-gray-400 text-xs"
                        style={{ display: post.thumbnail ? 'none' : 'flex' }}
                      >
                        No img
                      </div>
                    </td>

                    {/* Title */}
                    <td className="p-3 font-medium text-gray-800 max-w-xs">
                      <span className="line-clamp-2">{post.title}</span>
                    </td>

                    {/* Category */}
                    <td className="p-3">
                      <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 text-xs font-medium capitalize border border-blue-100">
                        {post.category || 'other'}
                      </span>
                    </td>

                    {/* Status */}
                    <td className="p-3">
                      {post.published ? (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-50 text-green-700 text-xs font-semibold border border-green-200">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                          Published
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-yellow-50 text-yellow-700 text-xs font-semibold border border-yellow-200">
                          <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 inline-block" />
                          Draft
                        </span>
                      )}
                    </td>

                    {/* Actions */}
                    <td className="p-3">
                      <div className="flex flex-wrap gap-1.5">
                        <Link
                          to={`/dashboard/edit/${post._id}`}
                          className="px-3 py-1 bg-blue-500 text-white rounded text-xs font-medium hover:bg-blue-600 transition-colors"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => togglePublishStatus(post._id, post.published)}
                          className={`px-3 py-1 text-white rounded text-xs font-medium transition-colors ${
                            post.published
                              ? 'bg-yellow-500 hover:bg-yellow-600'
                              : 'bg-green-500 hover:bg-green-600'
                          }`}
                        >
                          {post.published ? 'Unpublish' : 'Publish'}
                        </button>
                        <button
                          onClick={() => handleDelete(post._id)}
                          className="px-3 py-1 bg-red-500 text-white rounded text-xs font-medium hover:bg-red-600 transition-colors"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer count */}
          <p className="mt-3 text-xs text-gray-400">
            Showing {filteredPosts.length} of {posts.length} posts
            {activeCategory !== 'all' && <> · <span className="capitalize">{activeCategory}</span></>}
            {statusFilter  !== 'all' && <> · {statusFilter}</>}
          </p>
        </>
      )}
    </div>
  );
}