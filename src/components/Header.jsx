import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserCircle, FaHome } from 'react-icons/fa';
import { MdArticle } from 'react-icons/md';
import { HiBuildingOffice2 } from 'react-icons/hi2'; 

const Header = ({ isLoggedIn, openAuthModal }) => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    if (isLoggedIn) {
      navigate('/profile');
    } else {
      openAuthModal('login', 'user');
    }
  };

  const handleSignupClick = () => {
    openAuthModal('signup', 'user');
  };

  return (
    <header className="bg-slate-100 shadow-md py-4 sticky top-0 z-50">
      <div className="container mx-auto px-6 flex justify-between items-center">
      
        <Link to="/home" className="flex items-center space-x-3 group">
          <HiBuildingOffice2 className="text-blue-600 text-3xl group-hover:text-blue-500 transition duration-300" />
          <span className="text-2xl font-bold text-blue-600 tracking-wide group-hover:text-blue-500 transition duration-300">FindMyStay</span>
        </Link>

      
        <nav className="flex items-center space-x-8">
          <Link to="/home" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105">
            <FaHome className="text-xl" />
            <span className="text-lg font-medium">Home</span>
          </Link>

          <Link to="/blogs" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105">
            <MdArticle className="text-xl" />
            <span className="text-lg font-medium">Blogs</span>
          </Link>

          {/* Profile & Sign-up/Login */}
          <div className="flex items-center space-x-5">
            {isLoggedIn ? (
              <button 
                onClick={handleProfileClick}
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105"
              >
                <FaUserCircle className="text-2xl" />
                <span className="text-lg font-medium">Profile</span>
              </button>
            ) : (
              <button 
                onClick={handleSignupClick}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg text-lg font-medium shadow-md transition-all duration-300 hover:bg-blue-500 hover:scale-105 hover:shadow-lg"
              >
                Sign Up
              </button>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
