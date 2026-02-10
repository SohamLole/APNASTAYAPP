import React, { useState } from 'react';
import { Building, TrendingUp, Shield, Users, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { toast } from 'sonner';

export default function PartnerPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyLocation: '',
    propertyType: '',
    rooms: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Thank you for your interest! Our team will contact you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      propertyLocation: '',
      propertyType: '',
      rooms: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <section className="py-24 md:py-32 bg-gradient-to-br from-[#FF8C42] to-[#E91E63] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Partner with APNASTAY
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Transform your property into a premium managed PG and earn guaranteed monthly returns
          </p>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6" style={{ fontFamily: 'Manrope, sans-serif' }}>
              Why Partner with Us?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            <Card className="p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FF8C42]/20 to-[#E91E63]/20 rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-[#E91E63]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Guaranteed Returns</h3>
              <p className="text-gray-600">Fixed monthly rental income with no vacancy worries</p>
            </Card>

            <Card className="p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FF8C42]/20 to-[#E91E63]/20 rounded-2xl flex items-center justify-center mb-6">
                <Building className="w-8 h-8 text-[#E91E63]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Property Management</h3>
              <p className="text-gray-600">Complete maintenance and operational management by us</p>
            </Card>

            <Card className="p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FF8C42]/20 to-[#E91E63]/20 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-[#E91E63]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Zero Risk</h3>
              <p className="text-gray-600">We handle tenant screening, security, and legal compliance</p>
            </Card>

            <Card className="p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FF8C42]/20 to-[#E91E63]/20 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-[#E91E63]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Tenants</h3>
              <p className="text-gray-600">Verified working professionals only</p>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Manrope, sans-serif' }}>
                How It Works
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#FF8C42] to-[#E91E63] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Submit Your Property</h3>
                    <p className="text-gray-600">Fill out the form with your property details</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#FF8C42] to-[#E91E63] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Property Evaluation</h3>
                    <p className="text-gray-600">Our team visits and assesses your property</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#FF8C42] to-[#E91E63] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Agreement & Setup</h3>
                    <p className="text-gray-600">Sign partnership agreement and we handle the setup</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#FF8C42] to-[#E91E63] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Start Earning</h3>
                    <p className="text-gray-600">Sit back and receive guaranteed monthly income</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-8 rounded-2xl shadow-lg" data-testid="partner-form">
              <h3 className="text-2xl font-bold mb-6">Get Started Today</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    data-testid="partner-name-input"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    data-testid="partner-email-input"
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    data-testid="partner-phone-input"
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    placeholder="Property Location *"
                    value={formData.propertyLocation}
                    onChange={(e) => setFormData({ ...formData, propertyLocation: e.target.value })}
                    required
                    data-testid="partner-location-input"
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    placeholder="Property Type (e.g., Villa, Apartment)"
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                    data-testid="partner-type-input"
                  />
                </div>
                <div>
                  <Input
                    type="number"
                    placeholder="Number of Rooms"
                    value={formData.rooms}
                    onChange={(e) => setFormData({ ...formData, rooms: e.target.value })}
                    data-testid="partner-rooms-input"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Additional Details"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    data-testid="partner-message-input"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#FF8C42] to-[#E91E63] text-white hover:opacity-90 rounded-full py-6 font-semibold"
                  data-testid="partner-submit-btn"
                >
                  Submit Partnership Request
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
