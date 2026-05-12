// import React, { useState, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import ProtectedRoute from '../../components/ProtectedRoute';
// import ManagePosts from './ManagePosts';
// import CreatePost from './CreatePost';
// import EditPost from './EditPost';

// export default function AdminDashboard() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [currentView, setCurrentView] = useState('posts');

//   // Check current path and set view accordingly
//   useEffect(() => {
//     const path = location.pathname;
//     if (path.includes('/dashboard/admin/edit/')) {
//       setCurrentView('edit');
//     } else if (path.includes('/dashboard/admin/create')) {
//       setCurrentView('create');
//     } else {
//       setCurrentView('posts');
//     }
//   }, [location.pathname]);

//   const handleLogout = () => {
//     localStorage.removeItem('adminLoggedIn');
//     navigate('/dashboard/login');
//   };

//   const renderContent = () => {
//     switch (currentView) {
//       case 'posts':
//         return <ManagePosts />;
//       case 'create':
//         return <CreatePost />;
//       case 'edit':
//         return <EditPost />;
//       default:
//         return <ManagePosts />;
//     }
//   };

//   return (
//     <ProtectedRoute>
//       <div className="min-h-screen bg-gray-100">
//         <nav className="bg-white shadow">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="flex justify-between h-16">
//               <div className="flex items-center space-x-4">
//                 <h1 className="text-xl font-bold">Admin Dashboard</h1>
//                 <button
//                   onClick={() => {
//                     setCurrentView('posts');
//                     navigate('/dashboard/admin');
//                   }}
//                   className={`px-3 py-1 rounded-md ${
//                     currentView === 'posts' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
//                   }`}
//                 >
//                   Manage Posts
//                 </button>
//                 <button
//                   onClick={() => {
//                     setCurrentView('create');
//                     navigate('/dashboard/admin');
//                   }}
//                   className={`px-3 py-1 rounded-md ${
//                     currentView === 'create' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
//                   }`}
//                 >
//                   Create Post
//                 </button>
//               </div>
//               <div className="flex items-center">
//                 <button
//                   onClick={handleLogout}
//                   className="ml-3 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
//                 >
//                   Logout
//                 </button>
//               </div>
//             </div>
//           </div>
//         </nav>

//         <div className="py-6">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="px-4 py-6 sm:px-0">
//               {renderContent()}
//             </div>
//           </div>
//         </div>
//       </div>
//     </ProtectedRoute>
//   );
// }



// AdminDashboard.jsx
// Route: /dashboard/admin
// Handles: /dashboard/admin, /dashboard/admin/create, /dashboard/admin/edit/:id

import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ProtectedRoute from '../../components/ProtectedRoute';
import ManagePosts from './ManagePosts';
import CreatePost from './CreatePost';
import EditPost from './EditPost';

// ─── Category config ──────────────────────────────────────────────────────────
// Add / remove categories here; the rest of the UI updates automatically.
export const CATEGORIES = [
  { id: 'all',        label: 'All Posts',    color: 'bg-slate-600'   },
  { id: 'news',       label: 'News',         color: 'bg-blue-600'    },
  { id: 'tutorial',   label: 'Tutorials',    color: 'bg-green-600'   },
  { id: 'review',     label: 'Reviews',      color: 'bg-purple-600'  },
  { id: 'opinion',    label: 'Opinion',      color: 'bg-orange-500'  },
  { id: 'update',     label: 'Updates',      color: 'bg-teal-600'    },
  { id: 'other',      label: 'Other',        color: 'bg-gray-500'    },
];

export default function AdminDashboard() {
  const navigate   = useNavigate();
  const location   = useLocation();

  const [currentView,     setCurrentView]     = useState('posts');
  const [editPostId,      setEditPostId]       = useState(null);
  const [activeCategory,  setActiveCategory]  = useState('all');

  // ── Sync view from URL ────────────────────────────────────────────────────
  useEffect(() => {
    const path = location.pathname;
    const editMatch = path.match(/\/dashboard\/admin\/edit\/([^/]+)/);

    if (editMatch) {
      setEditPostId(editMatch[1]);
      setCurrentView('edit');
    } else if (path.includes('/dashboard/admin/create')) {
      setCurrentView('create');
    } else {
      setCurrentView('posts');
      setEditPostId(null);
    }
  }, [location.pathname]);

  // ── Navigation helpers ────────────────────────────────────────────────────
  const goToPosts = () => {
    setCurrentView('posts');
    setEditPostId(null);
    navigate('/dashboard/admin');
  };

  const goToCreate = () => {
    setCurrentView('create');
    navigate('/dashboard/admin/create');
  };

  const goToEdit = (id) => {
    if (!id) {
      console.error('AdminDashboard: goToEdit called without a post id');
      return;
    }
    setEditPostId(id);
    setCurrentView('edit');
    navigate(`/dashboard/admin/edit/${id}`);
  };

  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn');
    navigate('/dashboard/login');
  };

  // ── Render main content area ──────────────────────────────────────────────
  const renderContent = () => {
    switch (currentView) {
      case 'posts':
        return (
          <ManagePosts
            activeCategory={activeCategory}
            onEditPost={goToEdit}       // pass edit handler so ManagePosts can trigger it
          />
        );
      case 'create':
        return (
          <CreatePost
            onSuccess={goToPosts}       // redirect back after successful creation
          />
        );
      case 'edit':
        return editPostId ? (
          <EditPost
            postId={editPostId}
            onSuccess={goToPosts}       // redirect back after successful edit
          />
        ) : (
          // Guard: edit view without an id → fall back gracefully
          <div className="text-center py-12">
            <p className="text-red-600 font-medium">No post selected for editing.</p>
            <button
              onClick={goToPosts}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Back to Posts
            </button>
          </div>
        );
      default:
        return <ManagePosts activeCategory={activeCategory} onEditPost={goToEdit} />;
    }
  };

  // ── Breadcrumb label ──────────────────────────────────────────────────────
  const breadcrumb = {
    posts:  'Manage Posts',
    create: 'Create Post',
    edit:   `Edit Post${editPostId ? ` #${editPostId}` : ''}`,
  }[currentView];

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-100">

        {/* ── Top nav ─────────────────────────────────────────────────────── */}
        <nav className="bg-white shadow sticky top-0 z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">

              {/* Left: logo + primary nav */}
              <div className="flex items-center space-x-3">
                <h1 className="text-xl font-bold text-gray-900 mr-2">Admin</h1>

                <button
                  onClick={goToPosts}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                    currentView === 'posts'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Manage Posts
                </button>

                <button
                  onClick={goToCreate}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                    currentView === 'create'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  + Create Post
                </button>
              </div>

              {/* Right: logout */}
              <div className="flex items-center">
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-red-600 text-white rounded-md text-sm font-medium hover:bg-red-700 transition-colors"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* ── Category filter bar (only visible on "posts" view) ───────────── */}
        {currentView === 'posts' && (
          <div className="bg-white border-b border-gray-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-2 py-3 overflow-x-auto scrollbar-hide">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider shrink-0 mr-1">
                  Category:
                </span>
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                      activeCategory === cat.id
                        ? `${cat.color} text-white shadow-sm`
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── Breadcrumb ───────────────────────────────────────────────────── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <p className="text-sm text-gray-500">
            <span
              className="hover:underline cursor-pointer"
              onClick={goToPosts}
            >
              Dashboard
            </span>
            {currentView !== 'posts' && (
              <>
                <span className="mx-1">/</span>
                <span className="text-gray-800 font-medium">{breadcrumb}</span>
              </>
            )}
          </p>
        </div>

        {/* ── Main content ─────────────────────────────────────────────────── */}
        <main className="py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="px-4 py-4 sm:px-0">
              {renderContent()}
            </div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}