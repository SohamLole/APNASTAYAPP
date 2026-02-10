import React, { createContext, useContext, useState, useEffect } from 'react';
import { mockTenantData, mockAdminData, mockSuperAdminData } from '@/data/mockData';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('apnastay_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = (role) => {
    let userData;
    switch (role) {
      case 'tenant':
        userData = { ...mockTenantData, role: 'tenant' };
        break;
      case 'admin':
        userData = { ...mockAdminData, role: 'admin' };
        break;
      case 'superadmin':
        userData = { ...mockSuperAdminData, role: 'superadmin' };
        break;
      default:
        return;
    }
    setUser(userData);
    localStorage.setItem('apnastay_user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('apnastay_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
