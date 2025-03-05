import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa';

const pgData = {
  Delhi: ['PG Elite', 'Urban Stay', 'Comfort Home'],
  Mumbai: ['Sea View PG', 'Metro PG', 'Skyline Living'],
  Bangalore: ['Tech Stay', 'Silicon Valley PG', 'Cozy Nest'],
};

const SearchBar = ({ className }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (pgData[query]) {
      setSuggestions(pgData[query]);
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div className={`w-full max-w-lg mx-auto ${className || ''}`}>
      <form onSubmit={handleSearch} className="relative">
        <div className="flex shadow-md rounded-full overflow-hidden border-2 border-gray-300 focus-within:border-primary-500 focus-within:ring-2 focus-within:ring-primary-500 bg-white transition-all duration-200">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <FaMapMarkerAlt className="text-gray-500" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3 text-gray-700 bg-transparent border-none focus:ring-0 focus:outline-none placeholder-gray-400"
              placeholder="Search by location, area, or PG name..."
            />
          </div>
          <button
            type="submit"
            className="bg-primary-600 hover:bg-primary-700 text-white px-6 flex items-center justify-center transition-all duration-200 rounded-full border-2 border-primary-600 hover:border-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <FaSearch className="mr-2" />
            <span>Search</span>
          </button>
        </div>
      </form>
      {suggestions.length > 0 && (
        <div className="mt-2 bg-white shadow-md rounded-md p-4 border border-gray-200">
          <h3 className="text-gray-700 font-semibold mb-2">Available PGs in {searchQuery}:</h3>
          <ul className="text-gray-600">
            {suggestions.map((pg, index) => (
              <li key={index} className="py-1">{pg}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
