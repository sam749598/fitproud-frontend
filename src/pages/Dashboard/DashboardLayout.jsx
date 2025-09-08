import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import ProtectedRoute from '../../components/ProtectedRoute';
import ManagePosts from './ManagePosts';
import CreatePost from './CreatePost';
import EditPost from './EditPost';

export default function DashboardLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentView, setCurrentView] = useState('posts');

  // Check current path and set view accordingly
  useEffect(() => {
    const path = location.pathname;
    if (path.includes('/dashboard/edit/')) {
      setCurrentView('edit');
    } else if (path.includes('/dashboard/create')) {
      setCurrentView('create');
    } else {
      setCurrentView('posts');
    }
  }, [location.pathname]);

  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn');
    navigate('/dashboard/login');
  };

  const renderContent = () => {
    switch (currentView) {
      case 'posts':
        return <ManagePosts />;
      case 'create':
        return <CreatePost />;
      case 'edit':
        return <EditPost />;
      default:
        return <ManagePosts />;
    }
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center space-x-4">
                <h1 className="text-xl font-bold">Admin Dashboard</h1>
                <button
                  onClick={() => {
                    setCurrentView('posts');
                    navigate('/dashboard');
                  }}
                  className={`px-3 py-1 rounded-md ${
                    currentView === 'posts' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
                  }`}
                >
                  Manage Posts
                </button>
                <button
                  onClick={() => {
                    setCurrentView('create');
                    navigate('/dashboard/create');
                  }}
                  className={`px-3 py-1 rounded-md ${
                    currentView === 'create' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
                  }`}
                >
                  Create Post
                </button>
              </div>
              <div className="flex items-center">
                <button
                  onClick={handleLogout}
                  className="ml-3 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </nav>

        <div className="py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}