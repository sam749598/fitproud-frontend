import React, { useState, useRef, useCallback, useEffect } from "react";
import JoditEditor from "jodit-react";
import axios from "axios";
import FileUploader from "../../components/FileUploader";
import { useNavigate } from "react-router-dom";

export default function CreatePost() {
  const editor = useRef(null);
  const navigate = useNavigate();
  const baseURL = import.meta.env.VITE_API_BASE_URL;
  const [editorReady, setEditorReady] = useState(false);
  const [content, setContent] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    metaTitle: "",
    metaDescription: "",
    tags: "",
    published: true,
    thumbnail: null,
  });
  const [affText, setAffText] = useState("View on Amazon");
  const [affUrl, setAffUrl] = useState("");
  const [affStyle, setAffStyle] = useState("amazon");
  const [affBlock, setAffBlock] = useState(true);
  
  // Define the categories
  const categories = [
    "Beauty & Skin Care",
    "Brain & Mental Wellness",
    "Core Health",
    "Hormonal & Reproductive Health",
    "Miscellaneous",
    "Musculoskeletal & Mobility",
    "Organ-Specific Support",
    "Weight & Metabolism"
  ];
  
  const affiliateClassMap = {
    amazon: "inline-flex items-center justify-center px-4 py-2 rounded-md bg-yellow-500 hover:bg-yellow-600 text-white font-semibold no-underline",
    primary: "inline-flex items-center justify-center px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold no-underline",
    outline: "inline-flex items-center justify-center px-4 py-2 rounded-md border border-gray-300 text-gray-800 hover:bg-gray-50 font-medium no-underline",
    ghost: "inline-flex items-center justify-center px-4 py-2 rounded-md text-blue-700 hover:bg-blue-50 font-medium no-underline",
  };
  
  useEffect(() => {
    return () => {
      editor.current = null;
      setEditorReady(false);
    };
  }, []);



useEffect(() => {
  const isLoggedIn = localStorage.getItem('adminLoggedIn');
  if (!isLoggedIn) {
    navigate('/dashboard/login');
  }
}, [navigate]);


  
  const escapeHtml = (str) => String(str)
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
  
  const insertAtCursor = useCallback((html) => {
    if (!editor.current || !editorReady) {
      console.warn("Editor not ready");
      return false;
    }
    try {
      const joditInstance = editor.current;
      
      // Save current selection
      const sel = joditInstance.selection.save();
      
      // Insert HTML at cursor position
      joditInstance.selection.insertHTML(html);
      
      // Restore selection
      joditInstance.selection.restore(sel);
      
      joditInstance.focus();
      return true;
    } catch (err) {
      console.error("Error inserting content:", err);
      return false;
    }
  }, [editorReady]);
  
  const handleFileUpload = useCallback((url, type) => {
    if (!url) return;
    const html = type === "image" 
      ? `<img src="${url}" alt="Uploaded image" style="max-width:100%;height:auto;" />` 
      : `<video src="${url}" controls style="max-width:100%;height:auto;"></video>`;
    // Try immediate insertion
    if (insertAtCursor(html)) return;
    // Fallback with retry logic
    const MAX_ATTEMPTS = 5;
    let attempts = 0;
    const tryInsert = () => {
      attempts++;
      if (insertAtCursor(html)) return;
      if (attempts < MAX_ATTEMPTS) {
        setTimeout(tryInsert, 200 * attempts);
      } else {
        console.warn("Using fallback content update");
        setContent(prev => prev + html);
      }
    };
    tryInsert();
  }, [insertAtCursor]);
  
  const handleInsertAffiliateButton = useCallback(() => {
    let url = affUrl.trim();
    const text = escapeHtml(affText.trim() || "View Details");
    if (!url) return alert("Please enter an affiliate URL.");
    if (!/^https?:\/\//i.test(url)) url = "https://" + url;
    const cls = affiliateClassMap[affStyle] || affiliateClassMap.amazon;
    const anchor = `<a href="${url}" target="_blank" rel="nofollow sponsored noopener" class="${cls}">${text}</a>`;
    const html = affBlock ? `<div class="my-4 text-center">${anchor}</div>` : anchor;
    if (!insertAtCursor(html)) {
      setContent(prev => prev + html);
    }
  }, [affUrl, affText, affStyle, affBlock, insertAtCursor]);
  
  const config = {
    readonly: false,
    height: 400,
    removeButtons: ["file"],
    disablePlugins: ["search"],
    placeholder: "Start writing your blog post...",
    defaultActionOnPaste: "insert_as_html",
    saveSelection: true,
    events: {
      afterInit: () => setEditorReady(true),
      beforeDestruct: () => setEditorReady(false)
    },
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!editorReady) {
      alert("Editor is still initializing. Please wait...");
      return;
    }
    let finalContent = content;
    try {
      if (editor.current?.value) {
        finalContent = editor.current.value;
      }
    } catch (err) {
      console.error("Error getting editor content:", err);
    }
    
    // Validate that a category is selected
    if (!formData.category) {
      alert("Please select a category for your blog post.");
      return;
    }
    
    const data = new FormData();
    data.append("title", formData.title);
    data.append("category", formData.category);
    data.append("content", finalContent);
    data.append("metaTitle", formData.metaTitle);
    data.append("metaDescription", formData.metaDescription);
    data.append("tags", formData.tags);
    data.append("published", String(formData.published));
    if (formData.thumbnail) data.append("thumbnail", formData.thumbnail);
    
    try {
      await axios.post(`${baseURL}/api/blogs/create`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Blog created successfully!");
      // Reset form
      setFormData({
        title: "",
        category: "",
        metaTitle: "",
        metaDescription: "",
        tags: "",
        published: true,
        thumbnail: null,
      });
      setAffText("View on Amazon");
      setAffUrl("");
      setAffStyle("amazon");
      setAffBlock(true);
      setContent("");
      
      if (editor.current) {
        try {
          editor.current.value = "";
        } catch (err) {
          console.error("Error resetting editor:", err);
        }
      }
    } catch (error) {
      console.error("Error creating blog:", error);
      alert(`Failed to create blog: ${error.response?.data?.error || error.message}`);
    }
  };
  

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl mb-6 font-bold">Create New Blog Post</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        
        {/* Category Dropdown */}
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
            Category <span className="text-red-500">*</span>
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        
        <div className="grid gap-3 sm:grid-cols-2">
          <FileUploader onFileUpload={handleFileUpload} type="image" />
          <FileUploader onFileUpload={handleFileUpload} type="video" />
        </div>
        
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
        
        <div className="border rounded">
          <JoditEditor
            ref={editor}
            value={content}
            config={config}
            onBlur={(newContent) => setContent(newContent)}
            tabIndex={1}
          />
        </div>
        
        <input
          type="text"
          name="metaTitle"
          placeholder="Meta Title"
          value={formData.metaTitle}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        
        <textarea
          name="metaDescription"
          placeholder="Meta Description"
          value={formData.metaDescription}
          onChange={handleChange}
          rows="3"
          className="w-full p-2 border rounded"
        />
        
        <input
          type="text"
          name="tags"
          placeholder="Tags (comma-separated)"
          value={formData.tags}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        
        <label className="inline-flex items-center space-x-2">
          <input
            type="checkbox"
            name="published"
            checked={formData.published}
            onChange={handleChange}
          />
          <span>Publish now</span>
        </label>
        
        <div>
          <label className="block mb-2 font-medium">Thumbnail</label>
          <input
            type="file"
            name="thumbnail"
            accept="image/*"
            onChange={handleChange}
            required
            className="w-full"
          />
        </div>
        
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200"
        >
          Create Post
        </button>
      </form>
    </div>
  );
}






































