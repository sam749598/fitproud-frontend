import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Beauty from './pages/SubCategory/Beauty';
import Brain from './pages/SubCategory/Brain';
import Core from './pages/SubCategory/Core';
import Hormone from './pages/SubCategory/Hormone';
import Miscellaneous from './pages/SubCategory/Miscellaneous';
import Musculoskeletal from './pages/SubCategory/Musculoskeletal';
import Organ from './pages/SubCategory/Organ';
import Weight from './pages/SubCategory/Weight';
import CategoryLayout from './pages/SubCategory/CategoryLayout';
import Category from './pages/Category';
import DashboardLayout from './pages/Dashboard/DashboardLayout';
import ManagePosts from './pages/Dashboard/ManagePosts';
import CreatePost from './pages/Dashboard/CreatePost';
import EditPost from './pages/Dashboard/EditPost';
import Post from './pages/Post';
import Footer from './pages/Footer';
import AboutUs from './pages/Footer/AboutUs';
import Contact from './pages/Footer/Contact';
import Terms from './pages/Footer/Terms';
import Privacy from './pages/Footer/Privacy';
import Disclaimers from './pages/Footer/Disclaimers';
import AdminLogin from './pages/Dashboard/Login';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<Post />} />

        <Route path="/category" element={<CategoryLayout />}>
          <Route index element={<Category />} />
          <Route path="beauty" element={<Beauty />} />
          <Route path="brain" element={<Brain />} />
          <Route path="core" element={<Core />} />
          <Route path="hormone" element={<Hormone />} />
          <Route path="miscellaneous" element={<Miscellaneous />} />
          <Route path="musculoskeletal" element={<Musculoskeletal />} />
          <Route path="organ" element={<Organ />} />
          <Route path="weight" element={<Weight />} />
        </Route>

        {/* Dashboard Routes - All protected by login */}
        <Route path="/dashboard" element={<DashboardLayout /> }>
          <Route index element={<ManagePosts />} />
          <Route path="create" element={<CreatePost />} />
          <Route path="edit/:id" element={<EditPost />} />
        </Route>

        {/* Admin Login Route */}
        <Route path="/dashboard/login" element={<AdminLogin />} />

        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/affiliate-disclaimers" element={<Disclaimers />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;



