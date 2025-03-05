import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaMapMarkerAlt, FaRupeeSign, FaUsers, FaWifi, FaTv, FaUtensils } from 'react-icons/fa';

const PgCard = ({ pg }) => {
  return (
    <div className="card">
      <div className="relative">
        <img 
          src={pg.image} 
          alt={pg.name} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-md text-sm font-medium flex items-center">
          <FaStar className="text-yellow-500 mr-1" />
          <span>{pg.rating}</span>
        </div>
        {pg.type && (
          <div className="absolute top-2 left-2 bg-primary-600 text-white px-2 py-1 rounded-md text-sm font-medium">
            {pg.type}
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{pg.name}</h3>
        
        <div className="flex items-center text-gray-600 mb-3">
          <FaMapMarkerAlt className="mr-1 text-primary-500" />
          <span className="text-sm">{pg.location}</span>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-3">
          {pg.amenities.map((amenity, index) => (
            <span 
              key={index}
              className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-md flex items-center"
            >
              {amenity === 'WiFi' && <FaWifi className="mr-1" />}
              {amenity === 'TV' && <FaTv className="mr-1" />}
              {amenity === 'Food' && <FaUtensils className="mr-1" />}
              {amenity}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <FaRupeeSign className="text-primary-600" />
            <span className="font-bold text-gray-800">{pg.price}</span>
            <span className="text-gray-600 text-sm ml-1">/month</span>
          </div>
          
          <div className="flex items-center text-gray-600">
            <FaUsers className="mr-1" />
            <span className="text-sm">{pg.sharing} sharing</span>
          </div>
        </div>
        
        <Link 
          to={`/pg/${pg.id}`}
          className="block w-full text-center btn-primary mt-4"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default PgCard;