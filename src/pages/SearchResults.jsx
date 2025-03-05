import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import PgCard from '../components/PgCard';
import MapComponent from '../components/Map';
import { FaFilter, FaMapMarkedAlt, FaListUl, FaRupeeSign, FaUsers, FaWifi, FaTv, FaUtensils, FaAirFreshener, FaDumbbell } from 'react-icons/fa';

// Sample data with coordinates for map
const pgData = [
  {
    id: 1,
    name: "Comfort PG for Men",
    location: "Koramangala, Bangalore",
    price: 8500,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    sharing: "Double",
    type: "Male",
    amenities: ["WiFi", "AC", "Food", "Laundry"],
    latitude: 12.9352,
    longitude: 77.6245
  },
  {
    id: 2,
    name: "Luxury Women's PG",
    location: "HSR Layout, Bangalore",
    price: 10000,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    sharing: "Single",
    type: "Female",
    amenities: ["WiFi", "AC", "Food", "TV", "Gym"],
    latitude: 12.9116,
    longitude: 77.6741
  },
  {
    id: 3,
    name: "Budget PG",
    location: "BTM Layout, Bangalore",
    price: 6500,
    rating: 4.0,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    sharing: "Triple",
    type: "Unisex",
    amenities: ["WiFi", "Food", "Laundry"],
    latitude: 12.9166,
    longitude: 77.6101
  },
  {
    id: 4,
    name: "Premium Co-living Space",
    location: "Indiranagar, Bangalore",
    price: 12000,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1558&q=80",
    sharing: "Double",
    type: "Unisex",
    amenities: ["WiFi", "AC", "Food", "TV", "Gym", "Gaming"],
    latitude: 12.9784,
    longitude: 77.6408
  },
  {
    id: 5,
    name: "Student Friendly PG",
    location: "Marathahalli, Bangalore",
    price: 7500,
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    sharing: "Double",
    type: "Male",
    amenities: ["WiFi", "Food", "Laundry", "Study Room"],
    latitude: 12.9591,
    longitude: 77.6974
  },
  {
    id: 6,
    name: "Working Women's Hostel",
    location: "Whitefield, Bangalore",
    price: 9000,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    sharing: "Double",
    type: "Female",
    amenities: ["WiFi", "AC", "Food", "Security", "Laundry"],
    latitude: 12.9698,
    longitude: 77.7499
  }
];

const SearchResults = ({ isLoggedIn, openAuthModal }) => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  
  const [viewMode, setViewMode] = useState('list'); // 'list' or 'map'
  const [filteredPgs, setFilteredPgs] = useState([]);
  const [selectedPg, setSelectedPg] = useState(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Filter states
  const [priceRange, setPriceRange] = useState([0, 15000]);
  const [sharingType, setSharingType] = useState('all');
  const [pgType, setPgType] = useState('all');
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  
  useEffect(() => {
    // Filter PGs based on search query and filters
    let results = pgData;
    
    if (query) {
      results = results.filter(pg => 
        pg.name.toLowerCase().includes(query.toLowerCase()) || 
        pg.location.toLowerCase().includes(query.toLowerCase())
      );
    }
    
    // Apply price filter
    results = results.filter(pg => pg.price >= priceRange[0] && pg.price <= priceRange[1]);
    
    // Apply sharing type filter
    if (sharingType !== 'all') {
      results = results.filter(pg => pg.sharing.toLowerCase() === sharingType.toLowerCase());
    }
    
    // Apply PG type filter
    if (pgType !== 'all') {
      results = results.filter(pg => pg.type.toLowerCase() === pgType.toLowerCase());
    }
    
    // Apply amenities filter
    if (selectedAmenities.length > 0) {
      results = results.filter(pg => 
        selectedAmenities.every(amenity => pg.amenities.includes(amenity))
      );
    }
    
    setFilteredPgs(results);
  }, [query, priceRange, sharingType, pgType, selectedAmenities]);
  
  const toggleAmenity = (amenity) => {
    if (selectedAmenities.includes(amenity)) {
      setSelectedAmenities(selectedAmenities.filter(a => a !== amenity));
    } else {
      setSelectedAmenities([...selectedAmenities, amenity]);
    }
  };
  
  const resetFilters = () => {
    setPriceRange([0, 15000]);
    setSharingType('all');
    setPgType('all');
    setSelectedAmenities([]);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header isLoggedIn={isLoggedIn} openAuthModal={openAuthModal} />
      
      <main className="flex-grow bg-gray-50 py-6">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              {query ? `Search Results for "${query}"` : 'All PG Accommodations'}
            </h1>
            <p className="text-gray-600">
              Found {filteredPgs.length} PG accommodations
            </p>
          </div>
          
          {/* <div className="mb-6">
            <SearchBar />
          </div> */}
          
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Filters Section */}
            <div className={`lg:w-1/4 ${isFilterOpen ? 'block' : 'hidden lg:block'}`}>
              <div className="bg-white rounded-lg shadow-md p-4">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold">Filters</h2>
                  <button 
                    onClick={resetFilters}
                    className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                  >
                    Reset All
                  </button>
                </div>
                
                {/* Price Range */}
                <div className="mb-6">
                  <h3 className="text-md font-medium mb-2">Price Range</h3>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-600">₹{priceRange[0]}</span>
                    <span className="text-gray-600">₹{priceRange[1]}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="15000"
                    step="500"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full"
                  />
                </div>
                
                {/* Sharing Type */}
                <div className="mb-6">
                  <h3 className="text-md font-medium mb-2">Sharing Type</h3>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="sharingType"
                        checked={sharingType === 'all'}
                        onChange={() => setSharingType('all')}
                        className="mr-2"
                      />
                      <span>All</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="sharingType"
                        checked={sharingType === 'single'}
                        onChange={() => setSharingType('single')}
                        className="mr-2"
                      />
                      <span>Single</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="sharingType"
                        checked={sharingType === 'double'}
                        onChange={() => setSharingType('double')}
                        className="mr-2"
                      />
                      <span>Double</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="sharingType"
                        checked={sharingType === 'triple'}
                        onChange={() => setSharingType('triple')}
                        className="mr-2"
                      />
                      <span>Triple</span>
                    </label>
                  </div>
                </div>
                
                {/* PG Type */}
                <div className="mb-6">
                  <h3 className="text-md font-medium mb-2">PG Type</h3>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="pgType"
                        checked={pgType === 'all'}
                        onChange={() => setPgType('all')}
                        className="mr-2"
                      />
                      <span>All</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="pgType"
                        checked={pgType === 'male'}
                        onChange={() => setPgType('male')}
                        className="mr-2"
                      />
                      <span>Male</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="pgType"
                        checked={pgType === 'female'}
                        onChange={() => setPgType('female')}
                        className="mr-2"
                      />
                      <span>Female</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="pgType"
                        checked={pgType === 'unisex'}
                        onChange={() => setPgType('unisex')}
                        className="mr-2"
                      />
                      <span>Unisex</span>
                    </label>
                  </div>
                </div>
                
                {/* Amenities */}
                <div>
                  <h3 className="text-md font-medium mb-2">Amenities</h3>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedAmenities.includes('WiFi')}
                        onChange={() => toggleAmenity('WiFi')}
                        className="mr-2"
                      />
                      <span className="flex items-center"><FaWifi className="mr-1" /> WiFi</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedAmenities.includes('AC')}
                        onChange={() => toggleAmenity('AC')}
                        className="mr-2"
                      />
                      <span className="flex items-center"><FaAirFreshener className="mr-1" /> AC</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedAmenities.includes('Food')}
                        onChange={() => toggleAmenity('Food')}
                        className="mr-2"
                      />
                      <span className="flex items-center"><FaUtensils className="mr-1" /> Food</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedAmenities.includes('TV')}
                        onChange={() => toggleAmenity('TV')}
                        className="mr-2"
                      />
                      <span className="flex items-center"><FaTv className="mr-1" /> TV</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedAmenities.includes('Gym')}
                        onChange={() => toggleAmenity('Gym')}
                        className="mr-2"
                      />
                      <span className="flex items-center"><FaDumbbell className="mr-1" /> Gym</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedAmenities.includes('Laundry')}
                        onChange={() => toggleAmenity('Laundry')}
                        className="mr-2"
                      />
                      <span>Laundry</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Results Section */}
            <div className="lg:w-3/4">
              <div className="bg-white rounded-lg shadow-md p-4 mb-6">
                <div className="flex flex-wrap justify-between items-center">
                  <div className="flex items-center mb-2 sm:mb-0">
                    <button 
                      onClick={() => setIsFilterOpen(!isFilterOpen)}
                      className="lg:hidden flex items-center mr-4 text-gray-700"
                    >
                      <FaFilter className="mr-1" />
                      <span>Filters</span>
                    </button>
                    
                    <div className="flex border rounded-md">
                      <button 
                        onClick={() => setViewMode('list')}
                        className={`px-3 py-2 flex items-center ${viewMode === 'list' ? 'bg-primary-50 text-primary-600' : 'text-gray-700'}`}
                      >
                        <FaListUl className="mr-1" />
                        <span>List</span>
                      </button>
                      <button 
                        onClick={() => setViewMode('map')}
                        className={`px-3 py-2 flex items-center ${viewMode === 'map' ? 'bg-primary-50 text-primary-600' : 'text-gray-700'}`}
                      >
                        <FaMapMarkedAlt className="mr-1" />
                        <span>Map</span>
                      </button>
                    </div>
                  </div>
                  
                  <div className="text-gray-600">
                    Showing {filteredPgs.length} results
                  </div>
                </div>
              </div>
              
              {viewMode === 'list' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredPgs.length > 0 ? (
                    filteredPgs.map(pg => (
                      <PgCard key={pg.id} pg={pg} />
                    ))
                  ) : (
                    <div className="col-span-2 text-center py-12">
                      <p className="text-gray-600 text-lg">No PG accommodations found matching your criteria.</p>
                      <button 
                        onClick={resetFilters}
                        className="mt-4 btn-primary"
                      >
                        Reset Filters
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="bg-white rounded-lg shadow-md overflow-hidden" style={{ height: '600px' }}>
                  <MapComponent 
                    pgs={filteredPgs} 
                    selectedPg={selectedPg} 
                    setSelectedPg={setSelectedPg} 
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SearchResults;