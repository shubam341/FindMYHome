import React, { useState } from 'react';
import { FaTimes, FaCalendarAlt, FaUser, FaPhone, FaEnvelope, FaCreditCard } from 'react-icons/fa';

const BookingModal = ({ isOpen, onClose, pg }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkInDate: '',
    duration: '1',
    guests: '1',
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    alert('Booking successful!');
    onClose();
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

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
          <h2 className="text-2xl font-bold text-gray-800">Book Your Stay</h2>
          <p className="text-gray-600 mt-1">
            {pg?.name} - {pg?.location}
          </p>
        </div>
        
        <div className="mb-6">
          <div className="flex justify-between items-center">
            <div className={`flex-1 pb-2 ${step >= 1 ? 'border-b-2 border-primary-500' : 'border-b-2 border-gray-200'}`}>
              <span className={`flex items-center justify-center w-8 h-8 rounded-full mx-auto ${step >= 1 ? 'bg-primary-500 text-white' : 'bg-gray-200 text-gray-600'}`}>1</span>
              <p className="text-xs text-center mt-1">Details</p>
            </div>
            <div className={`flex-1 pb-2 ${step >= 2 ? 'border-b-2 border-primary-500' : 'border-b-2 border-gray-200'}`}>
              <span className={`flex items-center justify-center w-8 h-8 rounded-full mx-auto ${step >= 2 ? 'bg-primary-500 text-white' : 'bg-gray-200 text-gray-600'}`}>2</span>
              <p className="text-xs text-center mt-1">Payment</p>
            </div>
            <div className={`flex-1 pb-2 ${step >= 3 ? 'border-b-2 border-primary-500' : 'border-b-2 border-gray-200'}`}>
              <span className={`flex items-center justify-center w-8 h-8 rounded-full mx-auto ${step >= 3 ? 'bg-primary-500 text-white' : 'bg-gray-200 text-gray-600'}`}>3</span>
              <p className="text-xs text-center mt-1">Confirm</p>
            </div>
          </div>
        </div>
        
        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <>
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
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-1">Check-in Date</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaCalendarAlt className="text-gray-400" />
                  </div>
                  <input
                    type="date"
                    name="checkInDate"
                    value={formData.checkInDate}
                    onChange={handleChange}
                    className="input-field pl-10"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1">Duration (months)</label>
                  <select
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    className="input-field"
                    required
                  >
                    <option value="1">1 month</option>
                    <option value="3">3 months</option>
                    <option value="6">6 months</option>
                    <option value="12">12 months</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1">Number of Guests</label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="input-field"
                    required
                  >
                    <option value="1">1 person</option>
                    <option value="2">2 people</option>
                    <option value="3">3 people</option>
                    <option value="4">4 people</option>
                  </select>
                </div>
              </div>
              
              <button 
                type="button"
                onClick={nextStep}
                className="w-full btn-primary py-3"
              >
                Continue to Payment
              </button>
            </>
          )}
          
          {step === 2 && (
            <>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-1">Card Number</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaCreditCard className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    className="input-field pl-10"
                    placeholder="1234 5678 9012 3456"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-1">Cardholder Name</label>
                <input
                  type="text"
                  name="cardName"
                  value={formData.cardName}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="John Doe"
                  required
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1">Expiry Date</label>
                  <input
                    type="text"
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="MM/YY"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1">CVV</label>
                  <input
                    type="text"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="123"
                    required
                  />
                </div>
              </div>
              
              <div className="flex justify-between">
                <button 
                  type="button"
                  onClick={prevStep}
                  className="btn-secondary py-3 px-6"
                >
                  Back
                </button>
                
                <button 
                  type="button"
                  onClick={nextStep}
                  className="btn-primary py-3 px-6"
                >
                  Review Booking
                </button>
              </div>
            </>
          )}
          
          {step === 3 && (
            <>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <h3 className="font-semibold text-lg mb-3">Booking Summary</h3>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">PG Name:</span>
                    <span className="font-medium">{pg?.name}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Location:</span>
                    <span className="font-medium">{pg?.location}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Check-in Date:</span>
                    <span className="font-medium">{formData.checkInDate}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">{formData.duration} month(s)</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Guests:</span>
                    <span className="font-medium">{formData.guests} person(s)</span>
                  </div>
                  
                  <div className="border-t border-gray-200 my-2 pt-2">
                    <div className="flex justify-between font-semibold">
                      <span>Total Amount:</span>
                      <span>₹{pg?.price * parseInt(formData.duration)}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-4">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" required />
                  <span className="text-sm text-gray-700">I agree to the terms and conditions</span>
                </label>
              </div>
              
              <div className="flex justify-between">
                <button 
                  type="button"
                  onClick={prevStep}
                  className="btn-secondary py-3 px-6"
                >
                  Back
                </button>
                
                <button 
                  type="submit"
                  className="btn-primary py-3 px-6"
                >
                  Confirm Booking
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default BookingModal;