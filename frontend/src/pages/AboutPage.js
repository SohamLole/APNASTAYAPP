import React from 'react';
import { Award, Target, Heart, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <section className="py-24 md:py-32 bg-gradient-to-br from-[#FF8C42] to-[#E91E63] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6" style={{ fontFamily: 'Manrope, sans-serif' }}>
            About APNASTAY
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Redefining shared living for working professionals across India
          </p>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6" style={{ fontFamily: 'Manrope, sans-serif' }}>
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                <p>
                  APNASTAY was born from a simple observation: working professionals deserve better living spaces. 
                  Traditional PGs often fall short on quality, management, and community building.
                </p>
                <p>
                  We set out to change that. By taking buildings on rent and transforming them into professionally 
                  managed co-living spaces, we create homes that professionals actually want to live in.
                </p>
                <p>
                  Today, we operate across multiple cities, housing hundreds of working professionals who trust us 
                  to provide safe, comfortable, and community-driven living experiences.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1758873268851-feebbfb1d037?w=800"
                alt="Community"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6" style={{ fontFamily: 'Manrope, sans-serif' }}>
              Our Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-8 rounded-2xl border border-gray-100 text-center hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FF8C42]/20 to-[#E91E63]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-[#E91E63]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Care</h3>
              <p className="text-gray-600">We genuinely care about our residents' well-being and comfort</p>
            </Card>

            <Card className="p-8 rounded-2xl border border-gray-100 text-center hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FF8C42]/20 to-[#E91E63]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-[#E91E63]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality</h3>
              <p className="text-gray-600">Premium amenities and facilities in all our properties</p>
            </Card>

            <Card className="p-8 rounded-2xl border border-gray-100 text-center hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FF8C42]/20 to-[#E91E63]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-[#E91E63]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Community</h3>
              <p className="text-gray-600">Building meaningful connections among residents</p>
            </Card>

            <Card className="p-8 rounded-2xl border border-gray-100 text-center hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FF8C42]/20 to-[#E91E63]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-[#E91E63]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Transparency</h3>
              <p className="text-gray-600">Clear pricing, policies, and honest communication</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6" style={{ fontFamily: 'Manrope, sans-serif' }}>
              Our Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
              <div>
                <div className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FF8C42] to-[#E91E63] mb-3">
                  6+
                </div>
                <p className="text-xl text-gray-600">Premium Properties</p>
              </div>
              <div>
                <div className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FF8C42] to-[#E91E63] mb-3">
                  500+
                </div>
                <p className="text-xl text-gray-600">Happy Residents</p>
              </div>
              <div>
                <div className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FF8C42] to-[#E91E63] mb-3">
                  5
                </div>
                <p className="text-xl text-gray-600">Cities Covered</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
