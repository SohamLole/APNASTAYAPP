import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Building, Bed, TrendingUp, Users, DollarSign, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { useAuth } from '@/context/AuthContext';

export default function SuperAdminDashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (!user || user.role !== 'superadmin') {
    navigate('/login');
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20" data-testid="superadmin-dashboard">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold tracking-tight mb-2" style={{ fontFamily: 'Manrope, sans-serif' }}>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF8C42] to-[#E91E63]">
                Super Admin
              </span> Dashboard
            </h1>
            <p className="text-gray-600">Managing all APNASTAY properties</p>
          </div>
          <Button
            onClick={handleLogout}
            variant="outline"
            className="rounded-full"
            data-testid="superadmin-logout-btn"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                <Building className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-sm text-gray-600 mb-1">Total Properties</h3>
            <p className="text-3xl font-bold text-gray-900">{user.totalPGs}</p>
          </Card>

          <Card className="p-6 rounded-xl bg-gradient-to-br from-green-50 to-green-100 border-green-200">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                <Bed className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-sm text-gray-600 mb-1">Total Beds</h3>
            <p className="text-3xl font-bold text-gray-900">{user.occupiedBeds}/{user.totalBeds}</p>
          </Card>

          <Card className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-sm text-gray-600 mb-1">Occupancy Rate</h3>
            <p className="text-3xl font-bold text-gray-900">{user.occupancyRate}%</p>
          </Card>

          <Card className="p-6 rounded-xl bg-gradient-to-br from-orange-50 to-pink-100 border-orange-200">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#FF8C42] to-[#E91E63] rounded-xl flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-sm text-gray-600 mb-1">Monthly Revenue</h3>
            <p className="text-2xl font-bold text-gray-900">₹{(user.monthlyRevenue / 100000).toFixed(1)}L</p>
          </Card>
        </div>

        <Card className="p-6 rounded-2xl mb-8" data-testid="properties-section">
          <CardHeader className="px-0 pt-0">
            <CardTitle className="flex items-center">
              <Building className="w-5 h-5 mr-2 text-[#E91E63]" />
              All Properties Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="px-0 pb-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-2 text-sm font-semibold">Property Name</th>
                    <th className="text-left py-3 px-2 text-sm font-semibold">Location</th>
                    <th className="text-left py-3 px-2 text-sm font-semibold">Admin</th>
                    <th className="text-left py-3 px-2 text-sm font-semibold">Occupancy</th>
                    <th className="text-left py-3 px-2 text-sm font-semibold">Revenue</th>
                    <th className="text-left py-3 px-2 text-sm font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {user.pgs.map((pg) => (
                    <tr key={pg.id} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-2 text-sm font-medium">{pg.name}</td>
                      <td className="py-3 px-2 text-sm text-gray-600">{pg.location}</td>
                      <td className="py-3 px-2 text-sm text-gray-600">{pg.admin}</td>
                      <td className="py-3 px-2 text-sm">
                        <div className="flex items-center space-x-2">
                          <span>{pg.occupiedBeds}/{pg.totalBeds}</span>
                          <span className="text-xs text-gray-500">({pg.occupancyRate}%)</span>
                        </div>
                      </td>
                      <td className="py-3 px-2 text-sm font-medium">₹{(pg.monthlyRevenue / 1000).toFixed(0)}k</td>
                      <td className="py-3 px-2">
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          pg.occupancyRate >= 80 ? 'bg-green-100 text-green-700' :
                          pg.occupancyRate >= 60 ? 'bg-yellow-100 text-yellow-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {pg.occupancyRate >= 80 ? 'Excellent' : pg.occupancyRate >= 60 ? 'Good' : 'Needs Attention'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-6 rounded-2xl">
            <CardHeader className="px-0 pt-0">
              <CardTitle className="text-lg">Top Performing PGs</CardTitle>
            </CardHeader>
            <CardContent className="px-0 pb-0">
              <div className="space-y-3">
                {user.pgs
                  .sort((a, b) => b.occupancyRate - a.occupancyRate)
                  .slice(0, 3)
                  .map((pg, idx) => (
                    <div key={pg.id} className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <div>
                        <p className="font-semibold text-sm">{pg.name}</p>
                        <p className="text-xs text-gray-600">{pg.location}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-green-700">{pg.occupancyRate}%</p>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>

          <Card className="p-6 rounded-2xl">
            <CardHeader className="px-0 pt-0">
              <CardTitle className="text-lg">Revenue by Property</CardTitle>
            </CardHeader>
            <CardContent className="px-0 pb-0">
              <div className="space-y-3">
                {user.pgs
                  .sort((a, b) => b.monthlyRevenue - a.monthlyRevenue)
                  .slice(0, 3)
                  .map((pg) => (
                    <div key={pg.id} className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <div>
                        <p className="font-semibold text-sm">{pg.name}</p>
                        <p className="text-xs text-gray-600">{pg.totalBeds} beds</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-blue-700">₹{(pg.monthlyRevenue / 1000).toFixed(0)}k</p>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>

          <Card className="p-6 rounded-2xl">
            <CardHeader className="px-0 pt-0">
              <CardTitle className="text-lg">Quick Stats</CardTitle>
            </CardHeader>
            <CardContent className="px-0 pb-0">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">Avg. Occupancy</span>
                  <span className="font-bold">{user.occupancyRate}%</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">Total Capacity</span>
                  <span className="font-bold">{user.totalBeds} beds</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">Vacant Beds</span>
                  <span className="font-bold text-red-600">{user.totalBeds - user.occupiedBeds}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
