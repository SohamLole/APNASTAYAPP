import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Building, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useAuth } from '@/context/AuthContext';

export default function LoginPage() {
  const [selectedRole, setSelectedRole] = useState(null);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!selectedRole) return;
    
    login(selectedRole);
    
    switch (selectedRole) {
      case 'tenant':
        navigate('/tenant/dashboard');
        break;
      case 'admin':
        navigate('/admin/dashboard');
        break;
      case 'superadmin':
        navigate('/superadmin/dashboard');
        break;
      default:
        navigate('/');
    }
  };

  const roles = [
    {
      id: 'tenant',
      title: 'Tenant',
      description: 'Access your room details, rent status, and raise complaints',
      icon: User,
      color: 'from-blue-400 to-blue-600',
    },
    {
      id: 'admin',
      title: 'Admin',
      description: 'Manage your building, tenants, and operations',
      icon: Building,
      color: 'from-purple-400 to-purple-600',
    },
    {
      id: 'superadmin',
      title: 'Super Admin',
      description: 'Oversee all properties and business operations',
      icon: Shield,
      color: 'from-orange-400 to-pink-600',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center">
      <div className="max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Welcome to <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF8C42] to-[#E91E63]">APNASTAY</span>
          </h1>
          <p className="text-lg text-gray-600">Select your role to continue (Mock Login - UI Only)</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {roles.map((role) => {
            const Icon = role.icon;
            return (
              <Card
                key={role.id}
                onClick={() => setSelectedRole(role.id)}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                  selectedRole === role.id
                    ? 'border-2 border-[#E91E63] shadow-lg scale-105'
                    : 'border border-gray-200 hover:shadow-md'
                }`}
                data-testid={`login-role-${role.id}`}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${role.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">{role.title}</h3>
                <p className="text-sm text-gray-600 text-center">{role.description}</p>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button
            onClick={handleLogin}
            disabled={!selectedRole}
            className="bg-gradient-to-r from-[#FF8C42] to-[#E91E63] text-white hover:opacity-90 rounded-full px-12 py-6 font-semibold disabled:opacity-50"
            data-testid="login-submit-btn"
          >
            Continue as {selectedRole ? roles.find(r => r.id === selectedRole)?.title : 'User'}
          </Button>
          <p className="text-sm text-gray-500 mt-4">
            This is a mock login for UI demonstration only
          </p>
        </div>
      </div>
    </div>
  );
}
