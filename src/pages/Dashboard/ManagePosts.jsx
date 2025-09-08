import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function ManagePosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  
  // Check if admin is logged in
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('adminLoggedIn');
    if (!isLoggedIn) {
      navigate('/dashboard/login');
    }
  }, [navigate]);
  
  // Fetch all posts
  const fetchPosts = async () => {
    try {
      setLoading(true);
      // Fetch all posts without pagination
      const res = await axios.get('https://fitproud-backend.vercel.app/api/blogs',{
        params:{limit:0}
      });
      
      if (Array.isArray(res.data)) {
        setPosts(res.data);
      } else if (Array.isArray(res.data.data)) {
        setPosts(res.data.data);
      } else {
        setPosts([]);
      }
      setError("");
    } catch (err) {
      console.error(err);
      setError("Failed to load posts");
      setPosts([]);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchPosts();
  }, []);
  
  // Delete post
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this post?")) return;
    try {
      await axios.delete(`https://fitproud-backend.vercel.app/api/blogs/${id}`);
      setPosts((prev) => prev.filter((post) => post._id !== id));
    } catch (err) {
      console.error(err);
      alert("Failed to delete post");
    }
  };
  
  // Toggle publish status
  const togglePublishStatus = async (id, currentStatus) => {
    try {
      const res = await axios.patch(`https://fitproud-backend.vercel.app/api/blogs/${id}/publish`);
      
      if (res.data && res.data.data) {
        const updatedPost = res.data.data;
        setPosts(prev => prev.map(post => 
          post._id === id ? updatedPost : post
        ));
        alert(`Post ${updatedPost.published ? 'published' : 'unpublished'} successfully`);
      } else {
        setPosts(prev => prev.map(post => 
          post._id === id ? { ...post, published: !currentStatus } : post
        ));
        alert(`Post ${!currentStatus ? 'published' : 'unpublished'} successfully`);
      }
    } catch (err) {
      console.error("Error toggling publish status:", err);
      alert("Failed to update publish status");
    }
  };
  
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Manage Posts</h1>
        <button
          onClick={fetchPosts}
          className="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Refresh
        </button>
      </div>
      
      {loading && <p>Loading posts...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && posts.length === 0 && <p>No posts found</p>}
      
      {!loading && posts.length > 0 && (
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 border">Thumbnail</th>
                <th className="p-2 border">Title</th>
                <th className="p-2 border">Category</th>
                <th className="p-2 border">Status</th>
                <th className="p-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post._id}>
                  <td className="p-2 border">
                    {post.thumbnail ? (
                      <img
                        src={post.thumbnail}
                        alt="thumb"
                        className="w-16 h-16 object-cover rounded"
                      />
                    ) : (
                      "No Image"
                    )}
                  </td>
                  <td className="p-2 border">{post.title}</td>
                  <td className="p-2 border">{post.category || "N/A"}</td>
                  <td className="p-2 border">
                    {post.published ? (
                      <span className="text-green-600 font-semibold">
                        Published
                      </span>
                    ) : (
                      <span className="text-yellow-600 font-semibold">
                        Unpublished
                      </span>
                    )}
                  </td>
                  <td className="p-2 border space-x-2">
                    <Link
                      to={`/dashboard/edit/${post._id}`}
                      className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => togglePublishStatus(post._id, post.published)}
                      className={`px-3 py-1 text-white rounded ${
                        post.published 
                          ? 'bg-yellow-500 hover:bg-yellow-600' 
                          : 'bg-green-500 hover:bg-green-600'
                      }`}
                    >
                      {post.published ? 'Unpublish' : 'Publish'}
                    </button>
                    <button
                      onClick={() => handleDelete(post._id)}
                      className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      
      {!loading && posts.length > 0 && (
        <div className="mt-4 text-sm text-gray-500">
          Showing all {posts.length} posts
        </div>
      )}
    </div>
  );
}