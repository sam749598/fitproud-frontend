import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // const handleLogin = (e) => {
  //   e.preventDefault();
    
  //   // Get password from environment variables
  //   const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD;
    
  //   if (password === adminPassword) {
  //     localStorage.setItem('adminLoggedIn', 'true');
  //     navigate('/dashboard/');
  //   } else {
  //     setError('Invalid password');
  //   }
  // };

  const handleLogin = (e) => {
  e.preventDefault();

  const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD;

  if (password === adminPassword) {
    // Save login flag
    localStorage.setItem('adminLoggedIn', 'true');

    // ✅ Save backend token for API calls
    localStorage.setItem('adminSecretKey', import.meta.env.VITE_SECRET_KEY);

    navigate('/dashboard/');
  } else {
    setError('Invalid password');
  }
};




  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Admin Login</h2>
        
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
            {error}
          </div>
        )}
        
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}