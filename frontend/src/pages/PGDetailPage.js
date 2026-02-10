import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MapPin, Award, Wifi, Home, Users, Phone, Mail, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { mockPGs } from '@/data/mockData';
import { toast } from 'sonner';

export default function PGDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const pg = mockPGs.find(p => p.id === parseInt(id));
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  if (!pg) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Property not found</h2>
          <Button onClick={() => navigate('/explore')}>Back to Explore</Button>
        </div>
      </div>
    );
  }

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % pg.images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + pg.images.length) % pg.images.length);
  };

  const handleEnquiry = (e) => {
    e.preventDefault();
    toast.success('Enquiry submitted! Our team will contact you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Button
          variant="ghost"
          onClick={() => navigate('/explore')}
          className="mb-6"
          data-testid="back-btn"
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Back to Explore
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="relative h-96 md:h-[600px] rounded-2xl overflow-hidden mb-6" data-testid="pg-image-gallery">
              <img
                src={pg.images[currentImageIndex]}
                alt={pg.name}
                className="w-full h-full object-cover"
              />
              {pg.images.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white transition-all shadow-lg"
                    data-testid="prev-image-btn"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white transition-all shadow-lg"
                    data-testid="next-image-btn"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {pg.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === currentImageIndex ? 'w-8 bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>

            <Card className="p-8 rounded-2xl mb-6">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-2" style={{ fontFamily: 'Manrope, sans-serif' }} data-testid="pg-name">
                    {pg.name}
                  </h1>
                  <p className="text-gray-600 flex items-center">
                    <MapPin className="w-5 h-5 mr-2" />
                    {pg.location}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-yellow-500" />
                  <span className="text-lg font-semibold">{pg.rating}</span>
                  <span className="text-gray-500">({pg.reviews} reviews)</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mb-6">
                <div className="px-4 py-2 bg-gray-100 rounded-lg">
                  <span className="text-sm text-gray-600">Gender</span>
                  <p className="font-semibold">{pg.gender}</p>
                </div>
                <div className="px-4 py-2 bg-gray-100 rounded-lg">
                  <span className="text-sm text-gray-600">Occupancy</span>
                  <p className="font-semibold">{pg.occupancy}</p>
                </div>
                <div className="px-4 py-2 bg-gray-100 rounded-lg">
                  <span className="text-sm text-gray-600">Availability</span>
                  <p className="font-semibold">{pg.totalBeds - pg.occupiedBeds} beds</p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">About</h3>
                <p className="text-gray-600 leading-relaxed">{pg.description}</p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4">Amenities</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {pg.amenities.map((amenity, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-[#7CB342]/10 rounded-lg flex items-center justify-center">
                        <Check className="w-4 h-4 text-[#7CB342]" />
                      </div>
                      <span className="text-sm">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Room Types & Pricing</h3>
                <div className="space-y-3">
                  {pg.roomTypes.map((room, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-semibold">{room.type} Occupancy</p>
                        <p className="text-sm text-gray-600">{room.available} rooms available</p>
                      </div>
                      <p className="text-xl font-bold text-[#E91E63]">₹{room.price.toLocaleString()}/mo</p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          <div>
            <Card className="p-6 rounded-2xl sticky top-24" data-testid="enquiry-form">
              <h3 className="text-2xl font-semibold mb-2">Interested?</h3>
              <p className="text-gray-600 mb-6">Send us your details and we'll get back to you</p>
              
              <form onSubmit={handleEnquiry} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    data-testid="enquiry-name-input"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    data-testid="enquiry-email-input"
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    data-testid="enquiry-phone-input"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Message (optional)"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    data-testid="enquiry-message-input"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#FF8C42] to-[#E91E63] text-white hover:opacity-90 rounded-full py-6 font-semibold"
                  data-testid="enquiry-submit-btn"
                >
                  Send Enquiry
                </Button>
              </form>

              <div className="mt-6 pt-6 border-t space-y-3">
                <a href="tel:+919876543210" className="flex items-center space-x-3 text-gray-600 hover:text-[#E91E63] transition-colors">
                  <Phone className="w-5 h-5" />
                  <span>+91 98765 43210</span>
                </a>
                <a href="mailto:contact@apnastay.com" className="flex items-center space-x-3 text-gray-600 hover:text-[#E91E63] transition-colors">
                  <Mail className="w-5 h-5" />
                  <span>contact@apnastay.com</span>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
