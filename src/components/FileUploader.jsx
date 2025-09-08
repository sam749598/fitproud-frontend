import React, { useState } from 'react';
import axios from 'axios';

const FileUploader = ({ onFileUpload, type = 'image' }) => {
  const [uploading, setUploading] = useState(false);
  const baseURL = import.meta.env.VITE_API_BASE_URL;

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    
    const formData = new FormData();
    formData.append("file", file);
    
    try {
      const response = await axios.post(`${baseURL}/api/blogs/upload-file`, formData, {
        headers: { 
          "Content-Type": "multipart/form-data",
          // Add admin token if required
          // "x-admin-token": "your_admin_token_here"
        },
      });
      
      if (response.data.success) {
        onFileUpload(response.data.url, type);
      } else {
        throw new Error(response.data.message || "Upload failed");
      }
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Failed to upload file");
    } finally {
      setUploading(false);
      e.target.value = '';
    }
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Upload {type === 'image' ? 'Image' : 'Video'}
      </label>
      <div className="flex items-center">
        <input
          type="file"
          accept={type === 'image' ? "image/*" : "video/*"}
          onChange={handleFileChange}
          className="flex-1 py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          disabled={uploading}
        />
        {uploading && (
          <span className="ml-2 text-sm text-gray-500">Uploading...</span>
        )}
      </div>
    </div>
  );
};

export default FileUploader;