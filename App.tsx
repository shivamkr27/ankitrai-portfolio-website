import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BlogProvider } from './context/BlogContext';
import LandingPage from './pages/LandingPage';
import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import PostEditor from './pages/PostEditor';
import ProtectedRoute from './components/ProtectedRoute';
import CyberLoader from './components/CyberLoader';

const App: React.FC = () => {
  // We can keep the loader here, wrapping the whole route experience
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <CyberLoader onComplete={() => setLoading(false)} />
      ) : (
        <BlogProvider>
          <Router>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<LandingPage />} />
              <Route path="/blog" element={<BlogList />} />
              <Route path="/blog/:id" element={<BlogPost />} />

              {/* Admin Routes */}
              <Route path="/admin/login" element={<AdminLogin />} />

              <Route element={<ProtectedRoute />}>
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/admin/new" element={<PostEditor />} />
                <Route path="/admin/edit/:id" element={<PostEditor />} />
              </Route>

            </Routes>
          </Router>
        </BlogProvider>
      )}
    </>
  );
};

export default App;