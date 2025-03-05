import React, { useState } from 'react';
import { FaTimes, FaUser, FaLock, FaEnvelope, FaPhone, FaBuilding } from 'react-icons/fa';

const AuthModal = ({ isOpen, onClose, mode, userType, onLogin, onSwitchMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    address: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would validate and send data to backend
    console.log('Form submitted:', formData);
    onLogin();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <FaTimes size={20} />
        </button>
        
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            {mode === 'login' ? 'Login' : 'Sign Up'} as {userType === 'user' ? 'User' : 'Owner'}
          </h2>
          <p className="text-gray-600 mt-1">
            {mode === 'login' 
              ? 'Welcome back! Please login to your account' 
              : 'Create a new account to get started'}
          </p>
        </div>
        
        <form onSubmit={handleSubmit}>
          {mode === 'signup' && (
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-1">Full Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUser className="text-gray-400" />
                </div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="input-field pl-10"
                  placeholder="Enter your full name"
                  required
                />
              </div>
            </div>
          )}
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-1">Email Address</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaEnvelope className="text-gray-400" />
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="input-field pl-10"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>
          
          {mode === 'signup' && (
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-1">Phone Number</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaPhone className="text-gray-400" />
                </div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="input-field pl-10"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
            </div>
          )}
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-1">Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaLock className="text-gray-400" />
              </div>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="input-field pl-10"
                placeholder="Enter your password"
                required
              />
            </div>
          </div>
          
          {mode === 'signup' && (
            <>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-1">Confirm Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaLock className="text-gray-400" />
                  </div>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="input-field pl-10"
                    placeholder="Confirm your password"
                    required
                  />
                </div>
              </div>
              
              {userType === 'owner' && (
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-1">Property Address</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaBuilding className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="input-field pl-10"
                      placeholder="Enter your property address"
                      required
                    />
                  </div>
                </div>
              )}
            </>
          )}
          
          {mode === 'login' && (
            <div className="flex justify-end mb-4">
              <a href="#" className="text-sm text-primary-600 hover:text-primary-700">Forgot Password?</a>
            </div>
          )}
          
          <button 
            type="submit"
            className="w-full btn-primary py-3"
          >
            {mode === 'login' ? 'Login' : 'Sign Up'}
          </button>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            {mode === 'login' ? "Don't have an account?" : "Already have an account?"}
            <button 
              onClick={onSwitchMode}
              className="ml-1 text-primary-600 hover:text-primary-700 font-medium"
            >
              {mode === 'login' ? 'Sign Up' : 'Login'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;