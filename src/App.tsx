import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { AdminProvider, useAdmin } from './contexts/AdminContext';
import AdminLogin from './components/admin/AdminLogin';
import AdminLayout from './components/admin/AdminLayout';
import Dashboard from './components/admin/Dashboard';
import ServicesManager from './components/admin/ServicesManager';
import TeamManager from './components/admin/TestimonialsManager';
import TestimonialsManager from './components/admin/TestimonialsManagerNew';
import FAQManager from './components/admin/FAQManager';
import Vision2030Manager from './components/admin/Vision2030Manager';
import ContentManager from './components/admin/ContentManager';
import ProjectManager from './components/admin/ProjectManager';
import ClientsManager from './components/admin/ClientsManager';

// Admin Route Guard
const AdminRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAdmin();
  return isAuthenticated ? <>{children}</> : <AdminLogin />;
};

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AdminProvider>
          <Router>
            <Routes>
              {/* Redirect root to admin */}
              <Route path="/" element={<Navigate to="/admin" replace />} />

              {/* Admin Routes */}
              <Route path="/admin" element={<AdminRoute><AdminLayout /></AdminRoute>}>
                <Route index element={<Dashboard />} />
                <Route path="content" element={<ContentManager />} />
                <Route path="projects" element={<ProjectManager />} />
                <Route path="services" element={<ServicesManager />} />
                <Route path="team" element={<TeamManager />} />
                <Route path="testimonials" element={<TestimonialsManager />} />
                <Route path="faq" element={<FAQManager />} />
                <Route path="vision2030" element={<Vision2030Manager />} />
                <Route path="clients" element={<ClientsManager />} />
                <Route path="settings" element={<div>Settings</div>} />
              </Route>

              {/* Catch all other routes and redirect to admin */}
              <Route path="*" element={<Navigate to="/admin" replace />} />
            </Routes>
          </Router>
        </AdminProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;