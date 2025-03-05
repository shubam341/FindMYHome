import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaEdit, FaKey, FaHistory, FaHeart, FaStar } from 'react-icons/fa';

// Sample user data
const userData = {
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "+91 9876543210",
  address: "123 Main Street, Bangalore",
  profilePic: "https://randomuser.me/api/portraits/men/32.jpg"
};

// Sample bookings data
const bookingsData = [
  {
    id: 1,
    pgName: "Comfort PG for Men",
    location: "Koramangala, Bangalore",
    checkInDate: "2025-06-01",
    duration: "3 months",
    amount: 25500,
    status: "Confirmed"
  },
  {
    id: 2,
    pgName: "Budget PG",
    location: "BTM Layout, Bangalore",
    checkInDate: "2025-01-15",
    duration: "6 months",
    amount: 39000,
    status: "Completed"
  }
];

// Sample favorites data
const favoritesData = [
  {
    id: 1,
    name: "Luxury Women's PG",
    location: "HSR Layout, Bangalore",
    price: 10000,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 4,
    name: "Premium Co-living Space",
    location: "Indiranagar, Bangalore",
    price: 12000,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1558&q=80"
  }
];

const UserProfile = ({ isLoggedIn }) => {
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState(userData);
  
  // Redirect if not logged in
  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }
  
  const handleInputChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would update the user profile in the backend
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header isLoggedIn={isLoggedIn} />
      
      <main className="flex-grow bg-gray-50 py-6">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              {/* Sidebar */}
              <div className="md:w-1/4 bg-gray-50 p-6 border-r border-gray-200">
                <div className="flex flex-col items-center mb-6">
                  <img 
                    src={userInfo.profilePic} 
                    alt={userInfo.name} 
                    className="w-24 h-24 rounded-full object-cover mb-3"
                  />
                  <h2 className="text-xl font-semibold text-gray-800">{userInfo.name}</h2>
                  <p className="text-gray-600">{userInfo.email}</p>
                </div>
                
                <nav>
                  <button 
                    onClick={() => setActiveTab('profile')}
                    className={`flex items-center w-full text-left px-4 py-2 rounded-md mb-2 ${activeTab === 'profile' ? 'bg-primary-50 text-primary-600' : 'text-gray-700 hover:bg-gray-100'}`}
                  >
                    <FaUser className="mr-3" />
                    <span>Profile</span>
                  </button>
                  
                  <button 
                    onClick={() => setActiveTab('bookings')}
                    className={`flex items-center w-full text-left px-4 py-2 rounded-md mb-2 ${activeTab === 'bookings' ? 'bg-primary-50 text-primary-600' : 'text-gray-700 hover:bg-gray-100'}`}
                  >
                    <FaHistory className="mr-3" />
                    <span>Bookings</span>
                  </button>
                  
                  <button 
                    onClick={() => setActiveTab('favorites')}
                    className={`flex items-center w-full text-left px-4 py-2 rounded-md mb-2 ${activeTab === 'favorites' ? 'bg-primary-50 text-primary-600' : 'text-gray-700 hover:bg-gray-100'}`}
                  >
                    <FaHeart className="mr-3" />
                    <span>Favorites</span>
                  </button>
                  
                  <button 
                    onClick={() => setActiveTab('password')}
                    className={`flex items-center w-full text-left px-4 py-2 rounded-md mb-2 ${activeTab === 'password' ? 'bg-primary-50 text-primary-600' : 'text-gray-700 hover:bg-gray-100'}`}
                  >
                    <FaKey className="mr-3" />
                    <span>Change Password</span>
                  </button>
                </nav>
              </div>
              
              {/* Main Content */}
              <div className="md:w-3/4 p-6">
                {activeTab === 'profile' && (
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-2xl font-semibold text-gray-800">Profile Information</h2>
                      <button 
                        onClick={() => setIsEditing(!isEditing)}
                        className="flex items-center text-primary-600 hover:text-primary-700"
                      >
                        <FaEdit className="mr-1" />
                        <span>{isEditing ? 'Cancel' : 'Edit'}</span>
                      </button>
                    </div>
                    
                    {isEditing ? (
                      <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                          <div>
                            <label className="block text-gray-700 text-sm font-medium mb-1">Full Name</label>
                            <input
                              type="text"
                              name="name"
                              value={userInfo.name}
                              onChange={handleInputChange}
                              className="input-field"
                              required
                            />
                          </div>
                          
                          <div>
                            <label className="block text-gray-700 text-sm font-medium mb-1">Email Address</label>
                            <input
                              type="email"
                              name="email"
                              value={userInfo.email}
                              onChange={handleInputChange}
                              className="input-field"
                              required
                            />
                          </div>
                          
                          <div>
                            <label className="block text-gray-700 text-sm font-medium mb-1">Phone Number</label>
                            <input
                              type="tel"
                              name="phone"
                              value={userInfo.phone}
                              onChange={handleInputChange}
                              className="input-field"
                              required
                            />
                          </div>
                          
                          <div>
                            <label className="block text-gray-700 text-sm font-medium mb-1">Address</label>
                            <input
                              type="text"
                              name="address"
                              value={userInfo.address}
                              onChange={handleInputChange}
                              className="input-field"
                            />
                          </div>
                        </div>
                        
                        <div className="flex justify-end">
                          <button 
                            type="submit"
                            className="btn-primary"
                          >
                            Save Changes
                          </button>
                        </div>
                      </form>
                    ) : (
                      <div className="space-y-6">
                        <div className="flex items-start">
                          <FaUser className="text-primary-600 mt-1 mr-3" />
                          <div>
                            <p className="text-sm text-gray-600">Full Name</p>
                            <p className="font-medium">{userInfo.name}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <FaEnvelope className="text-primary-600 mt-1 mr-3" />
                          <div>
                            <p className="text-sm text-gray-600">Email Address</p>
                            <p className="font-medium">{userInfo.email}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <FaPhone className="text-primary-600 mt-1 mr-3" />
                          <div>
                            <p className="text-sm text-gray-600">Phone Number</p>
                            <p className="font-medium">{userInfo.phone}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <FaMapMarkerAlt className="text-primary-600 mt-1 mr-3" />
                          <div>
                            <p className="text-sm text-gray-600">Address</p>
                            <p className="font-medium">{userInfo.address}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
                
                {activeTab === 'bookings' && (
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Your Bookings</h2>
                    
                    {bookingsData.length > 0 ? (
                      <div className="space-y-6">
                        {bookingsData.map(booking => (
                          <div key={booking.id} className="border border-gray-200 rounded-lg p-4">
                            <div className="flex justify-between items-start mb-3">
                              <div>
                                <h3 className="font-semibold text-lg">{booking.pgName}</h3>
                                <p className="text-gray-600">{booking.location}</p>
                              </div>
                              <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                                booking.status === 'Confirmed' ? 'bg-green-100 text-green-800' : 
                                booking.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
                                'bg-blue-100 text-blue-800'
                              }`}>
                                {booking.status}
                              </div>
                            </div>
                            
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                              <div>
                                <p className="text-gray-600">Check-in Date</p>
                                <p className="font-medium">{booking.checkInDate}</p>
                              </div>
                              <div>
                                <p className="text-gray-600">Duration</p>
                                <p className="font-medium">{booking.duration}</p>
                              </div>
                              <div>
                                <p className="text-gray-600">Amount Paid</p>
                                <p className="font-medium">₹{booking.amount}</p>
                              </div>
                            </div>
                            
                            <div className="mt-4 flex justify-end">
                              <button className="text-primary-600 hover:text-primary-700 mr-4">View Details</button>
                              {booking.status === 'Completed' && (
                                <button className="flex items-center text-yellow-600 hover:text-yellow-700">
                                  <FaStar className="mr-1" />
                                  <span>Rate & Review</span>
                                </button>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <p className="text-gray-600 mb-4">You haven't made any bookings yet.</p>
                        <a href="/search" className="btn-primary">Find a PG</a>
                      </div>
                    )}
                  </div>
                )}
                
                {activeTab === 'favorites' && (
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Your Favorites</h2>
                    
                    {favoritesData.length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {favoritesData.map(pg => (
                          <div key={pg.id} className="border border-gray-200 rounded-lg overflow-hidden">
                            <img 
                              src={pg.image} 
                              alt={pg.name} 
                              className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                              <h3 className="font-semibold text-lg mb-1">{pg.name}</h3>
                              <p className="text-gray-600 mb-2">{pg.location}</p>
                              <div className="flex justify-between items-center">
                                <div className="flex items-center">
                                  <span className="text-primary-600">₹</span>
                                  <span className="font-bold">{pg.price}</span>
                                  <span className="text-gray-600 text-sm">/month</span>
                                </div>
                                <a 
                                  href={`/pg/${pg.id}`}
                                  className="text-primary-600 hover:text-primary-700 font-medium"
                                >
                                  View Details
                                </a>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <p className="text-gray-600 mb-4">You haven't added any PGs to your favorites yet.</p>
                        <a href="/search" className="btn-primary">Browse PGs</a>
                      </div>
                    )}
                  </div>
                )}
                
                {activeTab === 'password' && (
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Change Password</h2>
                    
                    <form>
                      <div className="space-y-4 mb-6">
                        <div>
                          <label className="block text-gray-700 text-sm font-medium mb-1">Current Password</label>
                          <input
                            type="password"
                            className="input-field"
                            required
                          />
                        </div>
                        
                        <div>
                          <label className="block text-gray-700 text-sm font-medium mb-1">New Password</label>
                          <input
                            type="password"
                            className="input-field"
                            required
                          />
                        </div>
                        
                        <div>
                          <label className="block text-gray-700 text-sm font-medium mb-1">Confirm New Password</label>
                          <input
                            type="password"
                            className="input-field"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="flex justify-end">
                        <button 
                          type="submit"
                          className="btn-primary"
                        >
                          Update Password
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      

      {/* <Footer /> */}
    </div>
  );
};

export default UserProfile;






























































































































































































































































































































































































































































































































































































































































































