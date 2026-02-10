import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Building, Users, Bed, DollarSign, AlertCircle, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { useAuth } from '@/context/AuthContext';

export default function AdminDashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (!user || user.role !== 'admin') {
    navigate('/login');
    return null;
  }

  const occupancyPercentage = Math.round((user.occupiedBeds / user.totalBeds) * 100);

  return (
    <div className="min-h-screen bg-gray-50 pt-20" data-testid="admin-dashboard">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold tracking-tight mb-2" style={{ fontFamily: 'Manrope, sans-serif' }}>
              Admin Dashboard
            </h1>
            <p className="text-gray-600">Managing {user.pgName}</p>
          </div>
          <Button
            onClick={handleLogout}
            variant="outline"
            className="rounded-full"
            data-testid="admin-logout-btn"
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
            <h3 className="text-sm text-gray-600 mb-1">Total Rooms</h3>
            <p className="text-3xl font-bold text-gray-900">{user.totalRooms}</p>
          </Card>

          <Card className="p-6 rounded-xl bg-gradient-to-br from-green-50 to-green-100 border-green-200">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                <Bed className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-sm text-gray-600 mb-1">Occupied Beds</h3>
            <p className="text-3xl font-bold text-gray-900">{user.occupiedBeds}/{user.totalBeds}</p>
            <div className="mt-2 bg-white rounded-full h-2 overflow-hidden">
              <div className="bg-green-500 h-full" style={{ width: `${occupancyPercentage}%` }} />
            </div>
          </Card>

          <Card className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-sm text-gray-600 mb-1">Total Tenants</h3>
            <p className="text-3xl font-bold text-gray-900">{user.tenants.length}</p>
          </Card>

          <Card className="p-6 rounded-xl bg-gradient-to-br from-orange-50 to-pink-100 border-orange-200">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#FF8C42] to-[#E91E63] rounded-xl flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-sm text-gray-600 mb-1">Rent Collection</h3>
            <p className="text-xl font-bold text-gray-900">₹{user.rentCollection.collected.toLocaleString()}</p>
            <p className="text-xs text-gray-600 mt-1">of ₹{user.rentCollection.total.toLocaleString()}</p>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-6 rounded-2xl" data-testid="tenants-section">
            <CardHeader className="px-0 pt-0">
              <CardTitle className="flex items-center">
                <Users className="w-5 h-5 mr-2 text-[#E91E63]" />
                Tenant List
              </CardTitle>
            </CardHeader>
            <CardContent className="px-0 pb-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-2 text-sm font-semibold">Name</th>
                      <th className="text-left py-3 px-2 text-sm font-semibold">Room</th>
                      <th className="text-left py-3 px-2 text-sm font-semibold">Rent</th>
                      <th className="text-left py-3 px-2 text-sm font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {user.tenants.map((tenant) => (
                      <tr key={tenant.id} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-2 text-sm">{tenant.name}</td>
                        <td className="py-3 px-2 text-sm">{tenant.room}-{tenant.bed}</td>
                        <td className="py-3 px-2 text-sm">₹{tenant.rent.toLocaleString()}</td>
                        <td className="py-3 px-2">
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            tenant.status === 'Paid' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                          }`}>
                            {tenant.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card className="p-6 rounded-2xl" data-testid="complaints-section">
            <CardHeader className="px-0 pt-0">
              <CardTitle className="flex items-center">
                <AlertCircle className="w-5 h-5 mr-2 text-[#E91E63]" />
                Pending Complaints
              </CardTitle>
            </CardHeader>
            <CardContent className="px-0 pb-0">
              <div className="space-y-4">
                {user.pendingComplaints.length === 0 ? (
                  <p className="text-gray-500 text-center py-4">No pending complaints</p>
                ) : (
                  user.pendingComplaints.map((complaint) => (
                    <div key={complaint.id} className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="font-semibold text-sm">{complaint.subject}</p>
                          <p className="text-xs text-gray-600 mt-1">by {complaint.tenant}</p>
                        </div>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          complaint.priority === 'High' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          {complaint.priority}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500">{complaint.date}</p>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="p-6 rounded-2xl mt-8">
          <CardHeader className="px-0 pt-0">
            <CardTitle>Rent Collection Summary</CardTitle>
          </CardHeader>
          <CardContent className="px-0 pb-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-green-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Total Expected</p>
                <p className="text-2xl font-bold text-green-700">₹{user.rentCollection.total.toLocaleString()}</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Collected</p>
                <p className="text-2xl font-bold text-blue-700">₹{user.rentCollection.collected.toLocaleString()}</p>
              </div>
              <div className="p-4 bg-red-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Pending</p>
                <p className="text-2xl font-bold text-red-700">₹{user.rentCollection.pending.toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
