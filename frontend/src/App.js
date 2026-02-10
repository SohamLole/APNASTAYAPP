import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import { Toaster } from '@/components/ui/sonner';
import { AuthProvider } from '@/context/AuthContext';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import ExplorePage from '@/pages/ExplorePage';
import PGDetailPage from '@/pages/PGDetailPage';
import PartnerPage from '@/pages/PartnerPage';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import LoginPage from '@/pages/LoginPage';
import TenantDashboard from '@/pages/dashboards/TenantDashboard';
import AdminDashboard from '@/pages/dashboards/AdminDashboard';
import SuperAdminDashboard from '@/pages/dashboards/SuperAdminDashboard';
import '@/App.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppLayout({ children }) {
  const location = useLocation();
  const isDashboard = location.pathname.includes('/dashboard');

  return (
    <>
      {!isDashboard && <Navbar />}
      {children}
      {!isDashboard && <Footer />}
    </>
  );
}

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <AuthProvider>
      <BrowserRouter>
        <ScrollToTop />
        <AppLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/pg/:id" element={<PGDetailPage />} />
            <Route path="/partner" element={<PartnerPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/tenant/dashboard" element={<TenantDashboard />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/superadmin/dashboard" element={<SuperAdminDashboard />} />
          </Routes>
        </AppLayout>
        <Toaster position="top-right" />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
