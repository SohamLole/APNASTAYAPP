import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, CreditCard, AlertCircle, Bell, User, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { useAuth } from '@/context/AuthContext';
import { toast } from 'sonner';

export default function TenantDashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [complaintText, setComplaintText] = useState('');

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleComplaint = (e) => {
    e.preventDefault();
    toast.success('Complaint submitted successfully!');
    setComplaintText('');
  };

  if (!user || user.role !== 'tenant') {
    navigate('/login');
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20" data-testid="tenant-dashboard">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold tracking-tight mb-2" style={{ fontFamily: 'Manrope, sans-serif' }}>
              Welcome, <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF8C42] to-[#E91E63]">{user.name}</span>
            </h1>
            <p className="text-gray-600">Manage your stay and view important updates</p>
          </div>
          <Button
            onClick={handleLogout}
            variant="outline"
            className="rounded-full"
            data-testid="tenant-logout-btn"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                <Home className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-sm text-gray-600 mb-1">Your PG</h3>
            <p className="text-xl font-bold text-gray-900">{user.pgName}</p>
            <p className="text-sm text-gray-600 mt-2">Room {user.roomNumber} - Bed {user.bedNumber}</p>
          </Card>

          <Card className="p-6 rounded-xl bg-gradient-to-br from-green-50 to-green-100 border-green-200">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                user.paymentStatus === 'Paid' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'
              }`}>
                {user.paymentStatus}
              </span>
            </div>
            <h3 className="text-sm text-gray-600 mb-1">Monthly Rent</h3>
            <p className="text-xl font-bold text-gray-900">₹{user.rentAmount.toLocaleString()}</p>
            <p className="text-sm text-gray-600 mt-2">Due: {user.dueDate}</p>
          </Card>

          <Card className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-sm text-gray-600 mb-1">Duration</h3>
            <p className="text-xl font-bold text-gray-900">{user.duration}</p>
            <p className="text-sm text-gray-600 mt-2">Since {user.moveInDate}</p>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-6 rounded-2xl" data-testid="complaints-section">
            <CardHeader className="px-0 pt-0">
              <CardTitle className="flex items-center">
                <AlertCircle className="w-5 h-5 mr-2 text-[#E91E63]" />
                Raise a Complaint
              </CardTitle>
            </CardHeader>
            <CardContent className="px-0 pb-0">
              <form onSubmit={handleComplaint} className="space-y-4">
                <Textarea
                  placeholder="Describe your issue..."
                  value={complaintText}
                  onChange={(e) => setComplaintText(e.target.value)}
                  rows={4}
                  required
                  data-testid="complaint-input"
                />
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#FF8C42] to-[#E91E63] text-white hover:opacity-90 rounded-full"
                  data-testid="complaint-submit-btn"
                >
                  Submit Complaint
                </Button>
              </form>

              <div className="mt-6 space-y-3">
                <h4 className="font-semibold text-sm">Recent Complaints</h4>
                {user.complaints.map((complaint) => (
                  <div key={complaint.id} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-medium text-sm">{complaint.subject}</p>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        complaint.status === 'Resolved' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {complaint.status}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500">{complaint.date}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="p-6 rounded-2xl" data-testid="notices-section">
            <CardHeader className="px-0 pt-0">
              <CardTitle className="flex items-center">
                <Bell className="w-5 h-5 mr-2 text-[#E91E63]" />
                Important Notices
              </CardTitle>
            </CardHeader>
            <CardContent className="px-0 pb-0">
              <div className="space-y-4">
                {user.notices.map((notice) => (
                  <div key={notice.id} className="p-4 bg-gradient-to-r from-orange-50 to-pink-50 rounded-lg border border-orange-100">
                    <h4 className="font-semibold mb-2">{notice.title}</h4>
                    <p className="text-sm text-gray-700 mb-2">{notice.message}</p>
                    <p className="text-xs text-gray-500">{notice.date}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="p-6 rounded-2xl mt-8">
          <CardHeader className="px-0 pt-0">
            <CardTitle>Personal Information</CardTitle>
          </CardHeader>
          <CardContent className="px-0 pb-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-gray-600">Email</p>
                <p className="font-medium">{user.email}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Phone</p>
                <p className="font-medium">{user.phone}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Last Payment</p>
                <p className="font-medium">{user.lastPayment}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Next Due Date</p>
                <p className="font-medium">{user.nextDue}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
