import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UserLogin from './pages/auth/UserLogin';
import AdminLogin from './pages/auth/AdminLogin';
import Register from './pages/auth/Register';
import Dashboard from './pages/dashboard/Dashboard';
import Pages from './pages/dashboard/Pages';
import BlogDashboard from './pages/dashboard/Blog';
import PortfolioDashboard from './pages/dashboard/Portfolio';
import BlogList from './pages/BlogList';
import BlogDetail from './pages/BlogDetail';
import PortfolioList from './pages/PortfolioList';
import PortfolioDetail from './pages/PortfolioDetail';
import DynamicPage from './pages/DynamicPage';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public routes without header/footer */}
          <Route path="/login" element={<UserLogin />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/register" element={<Register />} />
          
          {/* Protected dashboard routes */}
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/dashboard/pages" 
            element={
              <ProtectedRoute requireAdmin={true}>
                <Pages />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/dashboard/blog" 
            element={
              <ProtectedRoute requireAdmin={true}>
                <BlogDashboard />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/dashboard/portfolio" 
            element={
              <ProtectedRoute requireAdmin={true}>
                <PortfolioDashboard />
              </ProtectedRoute>
            } 
          />
          
          {/* Public blog routes */}
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />

          {/* Public portfolio routes */}
          <Route path="/portfolio" element={<PortfolioList />} />
          <Route path="/portfolio/:slug" element={<PortfolioDetail />} />
          
          {/* All pages are now dynamic - loaded from database */}
          {/* DynamicPage component handles all routes and fetches content from database */}
          <Route path="/*" element={<DynamicPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
