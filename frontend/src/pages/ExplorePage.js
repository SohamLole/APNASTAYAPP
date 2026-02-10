import React, { useState, useMemo } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { MapPin, Award, SlidersHorizontal, ChevronDown, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { mockPGs, cities, genderOptions, priceRanges } from '@/data/mockData';

export default function ExplorePage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  const [searchTerm, setSearchTerm] = useState(searchParams.get('location') || '');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [priceRange, setPriceRange] = useState(null);
  const [showFilters, setShowFilters] = useState(true);

  const filteredPGs = useMemo(() => {
    return mockPGs.filter(pg => {
      const matchesSearch = !searchTerm || 
        pg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pg.location.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCity = !selectedCity || pg.city === selectedCity;
      const matchesGender = !selectedGender || pg.gender === selectedGender || pg.gender === 'Any';
      const matchesPrice = !priceRange || (pg.price >= priceRange.min && pg.price <= priceRange.max);

      return matchesSearch && matchesCity && matchesGender && matchesPrice;
    });
  }, [searchTerm, selectedCity, selectedGender, priceRange]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCity('');
    setSelectedGender('');
    setPriceRange(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Explore <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF8C42] to-[#E91E63]">Premium PGs</span>
          </h1>
          <p className="text-lg text-gray-600">Discover your perfect living space from {filteredPGs.length} available properties</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <aside className={`lg:w-80 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <Card className="sticky top-24 p-6 rounded-2xl" data-testid="filter-sidebar">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold flex items-center">
                  <SlidersHorizontal className="w-5 h-5 mr-2 text-[#E91E63]" />
                  Filters
                </h3>
                {(selectedCity || selectedGender || priceRange || searchTerm) && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearFilters}
                    className="text-[#E91E63]"
                    data-testid="clear-filters-btn"
                  >
                    Clear
                  </Button>
                )}
              </div>

              <div className="space-y-6">
                <div>
                  <Label className="text-sm font-semibold mb-3 block">Search</Label>
                  <Input
                    type="text"
                    placeholder="Location, area..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="rounded-lg"
                    data-testid="filter-search-input"
                  />
                </div>

                <div>
                  <Label className="text-sm font-semibold mb-3 block">City</Label>
                  <div className="space-y-2">
                    {cities.map(city => (
                      <div key={city} className="flex items-center">
                        <Checkbox
                          id={`city-${city}`}
                          checked={selectedCity === city}
                          onCheckedChange={(checked) => setSelectedCity(checked ? city : '')}
                          data-testid={`filter-city-${city.toLowerCase()}`}
                        />
                        <label htmlFor={`city-${city}`} className="ml-2 text-sm cursor-pointer">
                          {city}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label className="text-sm font-semibold mb-3 block">Gender</Label>
                  <div className="space-y-2">
                    {genderOptions.map(gender => (
                      <div key={gender} className="flex items-center">
                        <Checkbox
                          id={`gender-${gender}`}
                          checked={selectedGender === gender}
                          onCheckedChange={(checked) => setSelectedGender(checked ? gender : '')}
                          data-testid={`filter-gender-${gender.toLowerCase()}`}
                        />
                        <label htmlFor={`gender-${gender}`} className="ml-2 text-sm cursor-pointer">
                          {gender}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label className="text-sm font-semibold mb-3 block">Price Range</Label>
                  <div className="space-y-2">
                    {priceRanges.map((range, idx) => (
                      <div key={idx} className="flex items-center">
                        <Checkbox
                          id={`price-${idx}`}
                          checked={priceRange?.label === range.label}
                          onCheckedChange={(checked) => setPriceRange(checked ? range : null)}
                          data-testid={`filter-price-${idx}`}
                        />
                        <label htmlFor={`price-${idx}`} className="ml-2 text-sm cursor-pointer">
                          {range.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </aside>

          <div className="flex-1">
            <div className="mb-6 flex items-center justify-between">
              <Button
                variant="outline"
                className="lg:hidden"
                onClick={() => setShowFilters(!showFilters)}
                data-testid="toggle-filters-btn"
              >
                <SlidersHorizontal className="w-4 h-4 mr-2" />
                Filters
              </Button>
              <p className="text-sm text-gray-600">{filteredPGs.length} properties found</p>
            </div>

            {filteredPGs.length === 0 ? (
              <div className="text-center py-16" data-testid="no-results">
                <p className="text-xl text-gray-600 mb-4">No properties found matching your criteria</p>
                <Button onClick={clearFilters} variant="outline">Clear Filters</Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-testid="pg-list">
                {filteredPGs.map((pg) => (
                  <Card
                    key={pg.id}
                    className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 cursor-pointer"
                    onClick={() => navigate(`/pg/${pg.id}`)}
                    data-testid={`pg-card-${pg.id}`}
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={pg.images[0]}
                        alt={pg.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 backdrop-blur-md bg-white/90 px-3 py-1 rounded-full text-xs font-semibold text-gray-700">
                        {pg.gender}
                      </div>
                      <div className="absolute top-4 right-4 backdrop-blur-md bg-white/90 px-3 py-1 rounded-full text-sm font-semibold text-[#E91E63]">
                        ₹{pg.price.toLocaleString()}/mo
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-xl mb-2 group-hover:text-[#E91E63] transition-colors">
                        {pg.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4 flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {pg.location}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {pg.amenities.slice(0, 4).map((amenity, idx) => (
                          <span key={idx} className="text-xs px-3 py-1 bg-gray-100 rounded-full text-gray-700">
                            {amenity}
                          </span>
                        ))}
                      </div>
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
