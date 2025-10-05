import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FileUploader from "../../components/FileUploader";
import EditorPage from "../../components/EditorPage"; // <-- Your Jodit component

export default function CreatePost() {
  const navigate = useNavigate();
  const baseURL = import.meta.env.VITE_API_BASE_URL;

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    content: "", // will hold Jodit content
    metaTitle: "",
    metaDescription: "",
    tags: "",
    published: true,
    thumbnail: null,
  });

  const categories = [
    "Beauty & Skin Care",
    "Brain & Mental Wellness",
    "Core Health",
    "Hormonal & Reproductive Health",
    "Miscellaneous",
    "Musculoskeletal & Mobility",
    "Organ-Specific Support",
    "Weight & Metabolism",
  ];

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("adminLoggedIn");
    if (!isLoggedIn) {
      navigate("/dashboard/login");
    }
  }, [navigate]);

  // handle text/checkbox/file inputs
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : type === "file"
          ? files[0]
          : value,
    }));
  };

  // handle file upload from FileUploader
  const handleFileUpload = (url, type) => {
    if (!url) return;
    const tag =
      type === "image"
        ? `<img src="${url}" alt="Uploaded" style="max-width:100%;height:auto;" />`
        : `<video src="${url}" controls style="max-width:100%;height:auto;"></video>`;
    setFormData((prev) => ({
      ...prev,
      content: prev.content + "\n" + tag,
    }));
  };

  // when Jodit content changes (onBlur)
  const handleEditorChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      content: value,
    }));
  };

  // submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.category) {
      alert("Please select a category for your blog post.");
      return;
    }

    const data = new FormData();
    data.append("title", formData.title);
    data.append("category", formData.category);
    data.append("content", formData.content);
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
      setFormData({
        title: "",
        category: "",
        content: "",
        metaTitle: "",
        metaDescription: "",
        tags: "",
        published: true,
        thumbnail: null,
      });
    } catch (error) {
      console.error("Error creating blog:", error);
      alert(
        `Failed to create blog: ${
          error.response?.data?.error || error.message
        }`
      );
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl mb-6 font-bold">Create New Blog Post</h2>
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
        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
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
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* File Uploaders */}
        <div className="grid gap-3 sm:grid-cols-2">
          <FileUploader onFileUpload={handleFileUpload} type="image" />
          <FileUploader onFileUpload={handleFileUpload} type="video" />
        </div>

        {/* Jodit Editor */}
        <div className="border rounded p-2">
          <EditorPage
            placeholder="Start writing your blog post..."
            onChange={handleEditorChange}
            value={formData.content}
          />
        </div>

        {/* SEO Fields */}
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

        {/* Publish Toggle */}
        <label className="inline-flex items-center space-x-2">
          <input
            type="checkbox"
            name="published"
            checked={formData.published}
            onChange={handleChange}
          />
          <span>Publish now</span>
        </label>

        {/* Thumbnail Upload */}
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

        {/* Submit */}
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





































