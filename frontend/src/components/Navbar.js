import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Home, Search, Info, Phone, Menu, X, User, LogOut } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const getDashboardLink = () => {
    if (!user) return '/login';
    switch (user.role) {
      case 'tenant':
        return '/tenant/dashboard';
      case 'admin':
        return '/admin/dashboard';
      case 'superadmin':
        return '/superadmin/dashboard';
      default:
        return '/login';
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/70 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3" data-testid="navbar-logo">
            <div className="w-12 h-12 bg-gradient-to-br from-[#FF8C42] to-[#E91E63] rounded-xl flex items-center justify-center">
              <Home className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FF8C42] to-[#E91E63]">
              APNASTAY
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-600 hover:text-[#E91E63] font-medium transition-colors"
              data-testid="nav-home"
            >
              Home
            </Link>
            <Link
              to="/explore"
              className="text-gray-600 hover:text-[#E91E63] font-medium transition-colors"
              data-testid="nav-explore"
            >
              Explore PGs
            </Link>
            <Link
              to="/partner"
              className="text-gray-600 hover:text-[#E91E63] font-medium transition-colors"
              data-testid="nav-partner"
            >
              Partner with Us
            </Link>
            <Link
              to="/about"
              className="text-gray-600 hover:text-[#E91E63] font-medium transition-colors"
              data-testid="nav-about"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-600 hover:text-[#E91E63] font-medium transition-colors"
              data-testid="nav-contact"
            >
              Contact
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                <Link to={getDashboardLink()}>
                  <Button
                    variant="ghost"
                    className="text-gray-600 hover:text-[#E91E63]"
                    data-testid="nav-dashboard-btn"
                  >
                    <User className="w-4 h-4 mr-2" />
                    {user.name}
                  </Button>
                </Link>
                <Button
                  onClick={handleLogout}
                  variant="ghost"
                  className="text-gray-600 hover:text-[#E91E63]"
                  data-testid="nav-logout-btn"
                >
                  <LogOut className="w-4 h-4" />
                </Button>
              </>
            ) : (
              <Link to="/login">
                <Button
                  className="bg-gradient-to-r from-[#FF8C42] to-[#E91E63] text-white hover:opacity-90 transition-all rounded-full px-6"
                  data-testid="nav-login-btn"
                >
                  Login
                </Button>
              </Link>
            )}
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            data-testid="nav-mobile-toggle"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4" data-testid="nav-mobile-menu">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-600 hover:text-[#E91E63] font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/explore"
                className="text-gray-600 hover:text-[#E91E63] font-medium"
                onClick={() => setIsOpen(false)}
              >
                Explore PGs
              </Link>
              <Link
                to="/partner"
                className="text-gray-600 hover:text-[#E91E63] font-medium"
                onClick={() => setIsOpen(false)}
              >
                Partner with Us
              </Link>
              <Link
                to="/about"
                className="text-gray-600 hover:text-[#E91E63] font-medium"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-gray-600 hover:text-[#E91E63] font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              {user ? (
                <>
                  <Link
                    to={getDashboardLink()}
                    className="text-gray-600 hover:text-[#E91E63] font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsOpen(false);
                    }}
                    className="text-gray-600 hover:text-[#E91E63] font-medium text-left"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  className="text-[#E91E63] font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
