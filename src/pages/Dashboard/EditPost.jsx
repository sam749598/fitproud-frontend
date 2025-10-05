import React, { useState, useRef, useCallback, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
// import JoditEditor from "jodit-react";
import EditorPage from "../../components/EditorPage";

import axios from "axios";
import FileUploader from "../../components/FileUploader";

export default function EditPost() {
  const editor = useRef(null);
  const { id } = useParams();
  const [editorKey, setEditorKey] = useState(0);

  const navigate = useNavigate();
  const baseURL = import.meta.env.VITE_API_BASE_URL;
  
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    metaTitle: "",
    metaDescription: "",
    tags: "",
    published: true,
    thumbnail: null,
  });
  
  const [content, setContent] = useState("");
  const [affText, setAffText] = useState("View on Amazon");
  const [affUrl, setAffUrl] = useState("");
  const [affStyle, setAffStyle] = useState("amazon");
  const [affBlock, setAffBlock] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [blogSlug, setBlogSlug] = useState("");
  
  const affiliateClassMap = {
    amazon:
      "inline-flex items-center justify-center px-4 py-2 rounded-md bg-yellow-500 hover:bg-yellow-600 text-white font-semibold no-underline",
    primary:
      "inline-flex items-center justify-center px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold no-underline",
    outline:
      "inline-flex items-center justify-center px-4 py-2 rounded-md border border-gray-300 text-gray-800 hover:bg-gray-50 font-medium no-underline",
    ghost:
      "inline-flex items-center justify-center px-4 py-2 rounded-md text-blue-700 hover:bg-blue-50 font-medium no-underline",
  };

  // Fetch blog data when component mounts
  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        setLoading(true);
        
        // First, get all blogs to find the one with matching ID
        const allBlogsResponse = await axios.get(`${baseURL}/api/blogs`);
        const blogs = allBlogsResponse.data.data;
        
        // Find the blog with the matching ID
        const blog = blogs.find(b => b._id === id);
        
        if (!blog) {
          throw new Error("Blog not found");
        }
        
        // Store the blog slug for potential future use
        setBlogSlug(blog.slug);
        
        // Populate form with existing data
        setFormData({
          title: blog.title || "",
          category: blog.category || "",
          metaTitle: blog.metaTitle || "",
          metaDescription: blog.metaDescription || "",
          tags: blog.tags ? blog.tags.join(", ") : "",
          published: blog.published,
          thumbnail: blog.thumbnail || null,
        });
        
        setContent(blog.content || "");
        setEditorKey((prev) => prev + 1);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching blog data:", err);
        setError("Failed to load blog data. Please try again.");
        setLoading(false);
      }
    };

    fetchBlogData();
  }, [id, baseURL]);

  useEffect(() => {
  const isLoggedIn = localStorage.getItem('adminLoggedIn');
  if (!isLoggedIn) {
    navigate('/dashboard/login');
  }
}, [navigate]);

  const escapeHtml = (str) =>
    String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));
  };

  // Insert HTML at the cursor position
  const insertAtCursor = (html) => {
    if (editor.current) {
      editor.current.selection.insertHTML(html);
    } else {
      console.error("Jodit editor is not ready yet.");
    }
  };

  // Insert uploaded file at cursor
  const handleFileUpload = useCallback((url, type) => {
    const html =
      type === "image"
        ? `<img src="${url}" alt="Uploaded image" style="max-width:100%;height:auto;" />`
        : `<video src="${url}" controls style="max-width:100%;height:auto;"></video>`;
    insertAtCursor(html);
  }, []);

  // Insert affiliate button at cursor
  const handleInsertAffiliateButton = useCallback(() => {
    let url = affUrl.trim();
    const text = escapeHtml(affText.trim() || "View Details");
    if (!url) return alert("Please enter an affiliate URL.");
    if (!/^https?:\/\//i.test(url)) url = "https://" + url;
    const cls = affiliateClassMap[affStyle] || affiliateClassMap.amazon;
    const anchor = `<a href="${url}" target="_blank" rel="nofollow sponsored noopener" class="${cls}">${text}</a>`;
    const html = affBlock ? `<div class="my-4 text-center">${anchor}</div>` : anchor;
    insertAtCursor(html);
  }, [affUrl, affText, affStyle, affBlock]);

  const config = {
    readonly: false,
    height: 400,
    removeButtons: ["file"],
    disablePlugins: ["search"],
    buttons: [
      "source", 
      "|",
      "bold",
      "italic",
      "underline",
      "strikethrough",
      "eraser",
      "ul",
      "ol",
      "outdent",
      "indent",
      "font",
      "fontsize",
      "brush",
      "paragraph",
      "link",
      "image",
      "video",
      "table",
      "line",
      "backcolor",
      "selectall",
      "print",
      "hr",
      "copyformat",
      "fullsize",
      "about"
    ],
    placeholder: "Edit your blog post...",
    defaultActionOnPaste: "insert_as_html",
    sourceEditor: "ace",
    sourceEditorCDNJS: "https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.12/ace.js",
    sourceEditorOptions: {
      theme: "ace/theme/monokai",
      mode: "ace/mode/html",
      showGutter: true,
      showPrintMargin: false,
      highlightActiveLine: true,
      useSoftTabs: true,
      tabSize: 2
    }
  };

  // Submit updated blog data
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Use the content state instead of trying to access editor.current.value
    const finalContent = content;
    
    const data = new FormData();
    data.append("title", formData.title);
    data.append("category", formData.category);
    data.append("content", finalContent);
    data.append("metaTitle", formData.metaTitle);
    data.append("metaDescription", formData.metaDescription);
    data.append("tags", formData.tags);
    data.append("published", String(formData.published));
    
    // Only append thumbnail if a new one is selected
    if (formData.thumbnail instanceof File) {
      data.append("thumbnail", formData.thumbnail);
    }
    
    try {
      await axios.put(`${baseURL}/api/blogs/${id}`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Blog updated successfully!");
      navigate("/dashboard"); // Changed from "/dashboard/blogs" to "/dashboard"
    } catch (error) {
      console.error("Error updating blog:", error);
      alert(
        `Failed to update blog: ${error.response?.data?.error || error.message}`
      );
    }
  };

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow">
        <div className="flex justify-center items-center h-64">
          <div className="text-lg">Loading blog data...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow">
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        </div>
        <button 
          onClick={() => navigate("/dashboard")}
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
        >
          Back to Dashboard
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl mb-6 font-bold">Edit Blog Post</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        {/* Category */}
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        {/* File Uploaders */}
        <div className="grid gap-3 sm:grid-cols-2">
          <FileUploader onFileUpload={handleFileUpload} type="image" />
          <FileUploader onFileUpload={handleFileUpload} type="video" />
        </div>

        {/* Affiliate Button Helper */}
        <div className="p-4 border rounded bg-gray-50">
          <h3 className="font-semibold mb-3">Affiliate Button Helper</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            <input
              type="text"
              placeholder="Button Text"
              value={affText}
              onChange={(e) => setAffText(e.target.value)}
              className="p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Affiliate URL"
              value={affUrl}
              onChange={(e) => setAffUrl(e.target.value)}
              className="p-2 border rounded"
            />
            <select
              value={affStyle}
              onChange={(e) => setAffStyle(e.target.value)}
              className="p-2 border rounded"
            >
              <option value="amazon">Amazon</option>
              <option value="primary">Primary</option>
              <option value="outline">Outline</option>
              <option value="ghost">Ghost</option>
            </select>
            <label className="inline-flex items-center gap-2 p-2">
              <input
                type="checkbox"
                checked={affBlock}
                onChange={(e) => setAffBlock(e.target.checked)}
              />
              <span>Block / Center</span>
            </label>
          </div>
          <button
            type="button"
            onClick={handleInsertAffiliateButton}
            className="px-4 py-2 rounded bg-emerald-600 hover:bg-emerald-700 text-white mt-2"
          >
            Insert Affiliate Button
          </button>
        </div>
        
        {/* Editor */}
        {/* <div className="border rounded">
          <JoditEditor 
            ref={editor} 
            value={content}
            onChange={newContent => setContent(newContent)}
            config={config} 
          />
        </div> */}

        {/* Editor */}
        <div className="border rounded p-2">
          <EditorPage
            key={editorKey} 
            value={content}
            onChange={(val) => setContent(val)}
            placeholder="Edit your blog post..."
          />
        </div>


        
        {/* Meta Title */}
        <input
          type="text"
          name="metaTitle"
          placeholder="Meta Title"
          value={formData.metaTitle}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        {/* Meta Description */}
        <textarea
          name="metaDescription"
          placeholder="Meta Description"
          value={formData.metaDescription}
          onChange={handleChange}
          rows="3"
          className="w-full p-2 border rounded"
        />
        {/* Tags */}
        <input
          type="text"
          name="tags"
          placeholder="Tags (comma-separated)"
          value={formData.tags}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        {/* Publish Checkbox */}
        <label className="inline-flex items-center space-x-2">
          <input
            type="checkbox"
            name="published"
            checked={formData.published}
            onChange={handleChange}
          />
          <span>Publish now</span>
        </label>
        {/* Thumbnail */}
        <div>
          <label className="block mb-2 font-medium">Thumbnail</label>
          {formData.thumbnail && !(formData.thumbnail instanceof File) && (
            <div className="mb-2">
              <img 
                src={formData.thumbnail} 
                alt="Current thumbnail" 
                className="h-32 object-cover rounded"
              />
              <p className="text-sm text-gray-500 mt-1">Current thumbnail</p>
            </div>
          )}
          <input
            type="file"
            name="thumbnail"
            accept="image/*"
            onChange={handleChange}
            className="w-full"
          />
          <p className="text-sm text-gray-500 mt-1">Leave empty to keep current thumbnail</p>
        </div>
        
        {/* Submit */}
        <div className="flex space-x-4">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200"
          >
            Update Post
          </button>
          <button
            type="button"
            onClick={() => navigate("/dashboard")}
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition duration-200"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}




