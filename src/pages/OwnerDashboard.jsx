import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaHome, FaUsers, FaRupeeSign, FaCalendarAlt, FaPlus, FaEdit, FaTrash, FaEye, FaChartLine, FaUserCircle, FaBell } from 'react-icons/fa';

// Sample properties data
const propertiesData = [
  {
    id: 1,
    name: "Comfort PG for Men",
    location: "Koramangala, Bangalore",
    price: 8500,
    occupancy: "80%",
    rooms: 10,
    tenants: 8,
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
  },
  {
    id: 2,
    name: "Budget PG",
    location: "BTM Layout, Bangalore",
    price: 6500,
    occupancy: "100%",
    rooms: 15,
    tenants: 15,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  }
];

// Sample bookings data
const bookingsData = [
  {
    id: 1,
    property: "Comfort PG for Men",
    tenant: "Amit Kumar",
    checkInDate: "2025-06-01",
    duration: "3 months",
    amount: 25500,
    status: "Confirmed"
  },
  {
    id: 2,
    property: "Budget PG",
    tenant: "Rajesh Singh",
    checkInDate: "2025-06-15",
    duration: "6 months",
    amount: 39000,
    status: "Pending"
  },
  {
    id: 3,
    property: "Comfort PG for Men",
    tenant: "Vikram Patel",
    checkInDate: "2025-07-01",
    duration: "12 months",
    amount: 102000,
    status: "Confirmed"
  }
];

// Sample notifications
const notificationsData = [
  {
    id: 1,
    message: "New booking request from Rajesh Singh",
    time: "2 hours ago",
    isRead: false
  },
  {
    id: 2,
    message: "Amit Kumar has confirmed payment for June",
    time: "1 day ago",
    isRead: true
  },
  {
    id: 3,
    message: "Your property 'Comfort PG for Men' has received a new review",
    time: "3 days ago",
    isRead: true
  }
];

const OwnerDashboard = ({ isLoggedIn }) => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showNotifications, setShowNotifications] = useState(false);
  
  // Redirect if not logged in
  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }
  
  // Calculate dashboard stats
  const totalProperties = propertiesData.length;
  const totalRooms = propertiesData.reduce((sum, property) => sum + property.rooms, 0);
  const totalTenants = propertiesData.reduce((sum, property) => sum + property.tenants, 0);
  const totalRevenue = bookingsData.reduce((sum, booking) => sum + booking.amount, 0);
  const occupancyRate = Math.round((totalTenants / totalRooms) * 100);

  return (
    <div className="min-h-screen flex flex-col">
      <Header isLoggedIn={isLoggedIn} />
      
      <main className="flex-grow bg-gray-50 py-6">
        <div className="container mx-auto px-4">
          {/* Owner Dashboard Header */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold text-gray-800 mb-2">Owner Dashboard</h1>
                <p className="text-gray-600">Manage your properties and bookings</p>
              </div>
              
              <div className="mt-4 md:mt-0 flex items-center">
                <div className="relative mr-4">
                  <button 
                    onClick={() => setShowNotifications(!showNotifications)}
                    className="relative p-2 text-gray-700 hover:text-primary-600"
                  >
                    <FaBell size={20} />
                    {notificationsData.some(n => !n.isRead) && (
                      <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                    )}
                  </button>
                  
                  {showNotifications && (
                    <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg z-10">
                      <div className="p-3 border-b">
                        <h3 className="font-semibold">Notifications</h3>
                      </div>
                      <div className="max-h-80 overflow-y-auto">
                        {notificationsData.map(notification => (
                          <div 
                            key={notification.id} 
                            className={`p-3 border-b hover:bg-gray-50 ${notification.isRead ? '' : 'bg-blue-50'}`}
                          >
                            <p className="text-sm">{notification.message}</p>
                            <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                          </div>
                        ))}
                      </div>
                      <div className="p-3 text-center">
                        <button className="text-primary-600 text-sm font-medium">
                          View All Notifications
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-2">
                    <FaUserCircle size={24} className="text-gray-600" />
                  </div>
                  <span className="font-medium">Rahul Sharma</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Dashboard Tabs */}
          <div className="bg-white rounded-lg shadow-md mb-6">
            <div className="border-b">
              <div className="flex overflow-x-auto">
                <button 
                  onClick={() => setActiveTab('dashboard')}
                  className={`px-6 py-3 font-medium ${activeTab === 'dashboard' ? 'text-primary-600 border-b-2 border-primary-600' : 'text-gray-600 hover:text-gray-800'}`}
                >
                  Dashboard
                </button>
                <button 
                  onClick={() => setActiveTab('properties')}
                  className={`px-6 py-3 font-medium ${activeTab === 'properties' ? 'text-primary-600 border-b-2 border-primary-600' : 'text-gray-600 hover:text-gray-800'}`}
                >
                  Properties
                </button>
                <button 
                  onClick={() => setActiveTab('bookings')}
                  className={`px-6 py-3 font-medium ${activeTab === 'bookings' ? 'text-primary-600 border-b-2 border-primary-600' : 'text-gray-600 hover:text-gray-800'}`}
                >
                  Bookings
                </button>
                <button 
                  onClick={() => setActiveTab('tenants')}
                  className={`px-6 py-3 font-medium ${activeTab === 'tenants' ? 'text-primary-600 border-b-2 border-primary-600' : 'text-gray-600 hover:text-gray-800'}`}
                >
                  Tenants
                </button>
              </div>
            </div>
            
            <div className="p-6">
              {activeTab === 'dashboard' && (
                <div>
                  {/* Stats Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                      <div className="flex items-center">
                        <div className="bg-blue-100 text-blue-600 p-3 rounded-full mr-4">
                          <FaHome />
                        </div>
                        <div>
                          <p className="text-gray-600 text-sm">Properties</p>
                          <p className="text-2xl font-bold">{totalProperties}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                      <div className="flex items-center">
                        <div className="bg-green-100 text-green-600 p-3 rounded-full mr-4">
                          <FaUsers />
                        </div>
                        <div>
                          <p className="text-gray-600 text-sm">Tenants</p>
                          <p className="text-2xl font-bold">{totalTenants}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                      <div className="flex items-center">
                        <div className="bg-purple-100 text-purple-600 p-3 rounded-full mr-4">
                          <FaChartLine />
                        </div>
                        <div>
                          <p className="text-gray-600 text-sm">Occupancy Rate</p>
                          <p className="text-2xl font-bold">{occupancyRate}%</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                      <div className="flex items-center">
                        <div className="bg-yellow-100 text-yellow-600 p-3 rounded-full mr-4">
                          <FaRupeeSign />
                        </div>
                        <div>
                          <p className="text-gray-600 text-sm">Total Revenue</p>
                          <p className="text-2xl font-bold">₹{totalRevenue}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Recent Bookings */}
                  <div className="mb-8">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-lg font-semibold">Recent Bookings</h2>
                      <button 
                        onClick={() => setActiveTab('bookings')}
                        className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                      >
                        View All
                      </button>
                    </div>
                    
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Tenant
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Property
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Check-in Date
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Amount
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Status
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {bookingsData.slice(0, 3).map(booking => (
                            <tr key={booking.id}>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="font-medium text-gray-900">{booking.tenant}</div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-gray-900">{booking.property}</div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-gray-900">{booking.checkInDate}</div>
                                <div className="text-gray-500 text-sm">{booking.duration}</div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-gray-900">₹{booking.amount}</div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                  booking.status === 'Confirmed' ? 'bg-green-100 text-green-800' : 
                                  booking.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
                                  'bg-blue-100 text-blue-800'
                                }`}>
                                  {booking.status}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  
                  {/* Properties Overview */}
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-lg font-semibold">Properties Overview</h2>
                      <button 
                        onClick={() => setActiveTab('properties')}
                        className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                      >
                        View All
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {propertiesData.map(property => (
                        <div key={property.id} className="border border-gray-200 rounded-lg overflow-hidden">
                          <div className="flex">
                            <div className="w-1/3">
                              <img 
                                src={property.image} 
                                alt={property.name} 
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="w-2/3 p-4">
                              <h3 className="font-semibold text-lg mb-1">{property.name}</h3>
                              <p className="text-gray-600 text-sm mb-2">{property.location}</p>
                              
                              <div className="grid grid-cols-2 gap-2 text-sm">
                                <div>
                                  <p className="text-gray-600">Price</p>
                                  <p className="font-medium">₹{property.price}/month</p>
                                </div>
                                <div>
                                  <p className="text-gray-600">Occupancy</p>
                                  <p className="font-medium">{property.occupancy}</p>
                                </div>
                                <div>
                                  <p className="text-gray-600">Rooms</p>
                                  <p className="font-medium">{property.rooms}</p>
                                </div>
                                <div>
                                  <p className="text-gray-600">Tenants</p>
                                  <p className="font-medium">{property.tenants}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'properties' && (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold">Your Properties</h2>
                    <button className="btn-primary flex items-center">
                      <FaPlus className="mr-2" />
                      <span>Add New Property</span>
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {propertiesData.map(property => (
                      <div key={property.id} className="border border-gray-200 rounded-lg overflow-hidden">
                        <img 
                          src={property.image} 
                          alt={property.name} 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h3 className="font-semibold text-lg mb-1">{property.name}</h3>
                          <p className="text-gray-600 mb-3">{property.location}</p>
                          
                          <div className="grid grid-cols-2 gap-2 text-sm mb-4">
                            <div>
                              <p className="text-gray-600">Price</p>
                              <p className="font-medium">₹{property.price}/month</p>
                            </div>
                            <div>
                              <p className="text-gray-600">Occupancy</p>
                              <p className="font-medium">{property.occupancy}</p>
                            </div>
                            <div>
                              <p className="text-gray-600">Rooms</p>
                              <p className="font-medium">{property.rooms}</p>
                            </div>
                            <div>
                              <p className="text-gray-600">Tenants</p>
                              <p className="font-medium">{property.tenants}</p>
                            </div>
                          </div>
                          
                          <div className="flex justify-between">
                            <button className="flex items-center text-primary-600 hover:text-primary-700">
                              <FaEye className="mr-1" />
                              <span>View</span>
                            </button>
                            <button className="flex items-center text-yellow-600 hover:text-yellow-700">
                              <FaEdit className="mr-1" />
                              <span>Edit</span>
                            </button>
                            <button className="flex items-center text-red-600 hover:text-red-700">
                              <FaTrash className="mr-1" />
                              <span>Delete</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                    
                    {/* Add New Property Card */}
                    <div className="border border-dashed border-gray-300 rounded-lg flex items-center justify-center h-80">
                      <div className="text-center p-6">
                        <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                          <FaPlus className="text-gray-500 text-xl" />
                        </div>
                        <h3 className="font-semibold text-lg mb-2">Add New Property</h3>
                        <p className="text-gray-600 mb-4">List your property to find tenants</p>
                        <button className="btn-primary">Get Started</button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'bookings' && (
                <div>
                  <h2 className="text-xl font-semibold mb-6">Booking Requests</h2>
                  
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Tenant
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Property
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Check-in Date
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Duration
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Amount
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {bookingsData.map(booking => (
                          <tr key={booking.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="font-medium text-gray-900">{booking.tenant}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-gray-900">{booking.property}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-gray-900">{booking.checkInDate}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-gray-900">{booking.duration}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-gray-900">₹{booking.amount}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                booking.status === 'Confirmed' ? 'bg-green-100 text-green-800' : 
                                booking.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
                                'bg-blue-100 text-blue-800'
                              }`}>
                                {booking.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                              <div className="flex space-x-2">
                                <button className="text-primary-600 hover:text-primary-700">View</button>
                                {booking.status === 'Pending' && (
                                  <>
                                    <button className="text-green-600 hover:text-green-700">Accept</button>
                                    <button className="text-red-600 hover:text-red-700">Reject</button>
                                  </>
                                )}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
              
              {activeTab === 'tenants' && (
                <div>
                  <h2 className="text-xl font-semibold mb-6">Current Tenants</h2>
                  
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Tenant
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Property
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Check-in Date
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Duration
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Rent
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {bookingsData.filter(b => b.status === 'Confirmed').map(booking => (
                          <tr key={booking.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="font-medium text-gray-900">{booking.tenant}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-gray-900">{booking.property}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-gray-900">{booking.checkInDate}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-gray-900">{booking.duration}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-gray-900">₹{booking.amount / parseInt(booking.duration.split(' ')[0])}/month</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                Active
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                              <div className="flex space-x-2">
                                <button className="text-primary-600 hover:text-primary-700">View Details</button>
                                <button className="text-yellow-600 hover:text-yellow-700">Contact</button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
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

export default OwnerDashboard;