import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Users, Shield, Home, Wifi, Award, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Hero3D } from '@/components/Hero3D';
import { mockPGs } from '@/data/mockData';

export default function HomePage() {
  const [searchLocation, setSearchLocation] = useState('');
  const navigate = useNavigate();

  const featuredPGs = mockPGs.filter(pg => pg.featured).slice(0, 4);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/explore?location=${searchLocation}`);
  };

  return (
    <div className="min-h-screen">
      <section className="relative h-screen flex items-center justify-center overflow-hidden" data-testid="hero-section">
        <Hero3D />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-white" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6" style={{ fontFamily: 'Manrope, sans-serif' }}>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF8C42] to-[#E91E63]">
              Your Premium
            </span>
            <br />
            <span className="text-gray-900">Living Space Awaits</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed">
            Discover professionally managed PGs designed exclusively for working professionals. 
            Live comfortably, connect meaningfully.
          </p>

          <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-8" data-testid="hero-search-form">
            <div className="flex flex-col md:flex-row gap-4 backdrop-blur-xl bg-white/90 p-3 rounded-full shadow-2xl border border-gray-100">
              <div className="flex-1 flex items-center px-4">
                <MapPin className="w-5 h-5 text-gray-400 mr-2" />
                <Input
                  type="text"
                  placeholder="Search by city or locality..."
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  className="border-0 focus-visible:ring-0 bg-transparent"
                  data-testid="hero-search-input"
                />
              </div>
              <Button
                type="submit"
                className="bg-gradient-to-r from-[#FF8C42] to-[#E91E63] text-white hover:opacity-90 rounded-full px-8 py-6 font-semibold shadow-lg"
                data-testid="hero-search-btn"
              >
                <Search className="w-5 h-5 mr-2" />
                Search PGs
              </Button>
            </div>
          </form>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center space-x-2 text-gray-700">
              <Shield className="w-5 h-5 text-[#7CB342]" />
              <span>Verified Properties</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <Users className="w-5 h-5 text-[#7CB342]" />
              <span>Professional Community</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <Award className="w-5 h-5 text-[#7CB342]" />
              <span>Premium Amenities</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-white" data-testid="featured-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-medium uppercase tracking-widest text-[#E91E63] mb-4">Featured Properties</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6" style={{ fontFamily: 'Manrope, sans-serif' }}>
              Our Premium PG Spaces
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Handpicked accommodations with top-notch facilities for working professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredPGs.map((pg) => (
              <Card
                key={pg.id}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 cursor-pointer"
                onClick={() => navigate(`/pg/${pg.id}`)}
                data-testid={`featured-pg-${pg.id}`}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={pg.images[0]}
                    alt={pg.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 backdrop-blur-md bg-white/90 px-3 py-1 rounded-full text-sm font-semibold text-[#E91E63]">
                    ₹{pg.price.toLocaleString()}/mo
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-[#E91E63] transition-colors">
                    {pg.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {pg.location}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <Award className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm font-medium">{pg.rating}</span>
                      <span className="text-sm text-gray-500">({pg.reviews})</span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#E91E63] group-hover:translate-x-1 transition-all" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={() => navigate('/explore')}
              className="bg-gradient-to-r from-[#FF8C42] to-[#E91E63] text-white hover:opacity-90 rounded-full px-8 py-6 font-semibold shadow-lg"
              data-testid="view-all-pgs-btn"
            >
              View All Properties
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-gray-50" data-testid="why-choose-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-medium uppercase tracking-widest text-[#E91E63] mb-4">Why Choose Us</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6" style={{ fontFamily: 'Manrope, sans-serif' }}>
              The APNASTAY Difference
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 rounded-2xl bg-white border border-gray-100 hover:border-[#FF8C42]/30 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FF8C42]/20 to-[#E91E63]/20 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-[#E91E63]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Safe & Secure</h3>
              <p className="text-gray-600 leading-relaxed">
                24/7 CCTV surveillance, security personnel, and verified tenant screening for complete peace of mind.
              </p>
            </Card>

            <Card className="p-8 rounded-2xl bg-white border border-gray-100 hover:border-[#FF8C42]/30 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FF8C42]/20 to-[#E91E63]/20 rounded-2xl flex items-center justify-center mb-6">
                <Home className="w-8 h-8 text-[#E91E63]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Fully Furnished</h3>
              <p className="text-gray-600 leading-relaxed">
                Move-in ready spaces with beds, wardrobes, study tables, and all essential furniture included.
              </p>
            </Card>

            <Card className="p-8 rounded-2xl bg-white border border-gray-100 hover:border-[#FF8C42]/30 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FF8C42]/20 to-[#E91E63]/20 rounded-2xl flex items-center justify-center mb-6">
                <Wifi className="w-8 h-8 text-[#E91E63]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Modern Amenities</h3>
              <p className="text-gray-600 leading-relaxed">
                High-speed WiFi, AC, housekeeping, laundry, and more premium amenities for comfortable living.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-gradient-to-br from-[#FF8C42] to-[#E91E63] text-white" data-testid="cta-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Own a Property? Partner with Us
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Transform your property into a premium managed PG and earn guaranteed returns
          </p>
          <Button
            onClick={() => navigate('/partner')}
            className="bg-white text-[#E91E63] hover:bg-gray-100 rounded-full px-8 py-6 font-semibold shadow-xl"
            data-testid="partner-cta-btn"
          >
            Become a Partner
            <ChevronRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
}
