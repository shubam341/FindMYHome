import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome, FaBuilding } from 'react-icons/fa';

const LandingPage = ({ openAuthModal }) => {
  const navigate = useNavigate();

  const handleUserSignup = () => {
    openAuthModal('signup', 'user');
    navigate('/home');
  };

  const handleOwnerSignup = () => {
    openAuthModal('signup', 'owner');
    navigate('/owner');
  };

  return (
    <div
      className="absolute inset-0 bg-cover bg-center flex flex-col items-center justify-center text-center px-4"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
          Welcome to <span className="text-blue-400">FindMyStay</span>
        </h1>

        <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto drop-shadow-md">
          Find your perfect paying guest accommodation with ease. We connect property
          owners with tenants looking for comfortable and affordable living spaces.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={handleUserSignup}
            className="bg-blue-600 text-white py-3 px-8 flex items-center justify-center rounded-lg hover:bg-blue-500 hover:scale-105 transition-transform duration-300 shadow-md"
          >
            <FaHome className="mr-2" />
            <span>Sign Up as a User</span>
          </button>

          <button
            onClick={handleOwnerSignup}
            className="bg-gray-900 text-white py-3 px-8 flex items-center justify-center rounded-lg hover:bg-gray-800 hover:scale-105 transition-transform duration-300 shadow-md"
          >
            <FaBuilding className="mr-2" />
            <span>Sign Up as an Owner</span>
          </button>
        </div>

        <p className="text-gray-300 mt-6">
          Already have an account?
          <button
            onClick={() => openAuthModal('login', 'user')}
            className="ml-1 text-blue-400 hover:text-blue-300 font-medium transition duration-200"
          >
            Login
          </button>
        </p>
      </div>

     
    </div>
  );
};

export default LandingPage;
