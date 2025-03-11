import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About PG Finder</h3>
            <p className="text-gray-300 mb-4">
              PG Finder helps you find the perfect paying guest accommodation that suits your needs and budget. We connect property owners with potential tenants.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white"><FaFacebook size={20} /></a>
              <a href="#" className="text-gray-300 hover:text-white"><FaTwitter size={20} /></a>
              <a href="#" className="text-gray-300 hover:text-white"><FaInstagram size={20} /></a>
              <a href="#" className="text-gray-300 hover:text-white"><FaLinkedin size={20} /></a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Blogs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Contact Us</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Find PG</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">List Your Property</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Catering Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Rental Agreements</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Support</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="mt-1 text-primary-400" />
                <span className="text-gray-300">Kumarswamy layout, Bengaluru</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-primary-400" />
                <span className="text-gray-300">phone no.</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-primary-400" />
                <span className="text-gray-300">info@pgfinder.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6">
          <p className="text-center text-gray-400">
            &copy; {new Date().getFullYear()} PG Finder. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;