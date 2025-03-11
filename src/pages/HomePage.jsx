import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import PgCard from '../components/PgCard';
import { FaUtensils, FaStar } from 'react-icons/fa';

// Sample data
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
    amenities: ["WiFi", "AC", "Food", "Laundry"]
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
    amenities: ["WiFi", "AC", "Food", "TV", "Gym"]
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
    amenities: ["WiFi", "Food", "Laundry"]
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
    amenities: ["WiFi", "AC", "Food", "TV", "Gym", "Gaming"]
  }
];

const cateringServices = [
  {
    id: 1,
    name: "Tasty Meals",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "Homely food delivered to your doorstep"
  },
  {
    id: 2,
    name: "Healthy Bites",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "Nutritious and balanced meals for health-conscious individuals"
  },
  {
    id: 3,
    name: "Quick Tiffin",
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    description: "Affordable tiffin service with variety of options"
  }
];

const blogPosts = [
  {
    id: 1,
    title: "10 Things to Check Before Booking a PG",
    excerpt: "Essential checklist for anyone looking to move into a paying guest accommodation...",
    image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    date: "May 15, 2025"
  },
  {
    id: 2,
    title: "How to Save Money While Living in a PG",
    excerpt: "Practical tips to reduce your monthly expenses without compromising on comfort...",
    image: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    date: "April 28, 2025"
  },
  {
    id: 3,
    title: "Best PG Locations for Working Professionals",
    excerpt: "Find out which areas offer the best connectivity and amenities for professionals...",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    date: "April 10, 2025"
  },


  
];

const HomePage = ({ isLoggedIn, openAuthModal }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header isLoggedIn={isLoggedIn} openAuthModal={openAuthModal} />
      

      
      <main className="flex-grow">
      
      
        {/* Hero Section */}
  

        <div className="home-bg bg-slate-200 w-full py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center  text-blue mb-8">
              <h1 className="text-4xl font-bold mb-4">Move In Hassle-Free – Explore Top PGs Now</h1>
              <p className="text-lg mb-8">
                {}
              </p>  
            </div>
            
            <SearchBar className="max-w-3xl mx-auto" />
          </div>
        </div>
        
        {/* Featured PGs */}
        <div className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800">Featured PG Accommodations</h2>
              <a href="/search" className="text-primary-600 hover:text-primary-700 font-medium">View All</a>
            </div>
            
            <div className="grid grid-cols-1 relative md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pgData.map(pg => (
                <PgCard key={pg.id} pg={pg} />
              ))}
            </div>
          </div>
        </div>
        
        {/* Catering Services */}
        <div className="py-12 bg-slate-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold text-gray-800 mb-2">Our Catering Partners</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Delicious and hygienic food delivered to your PG. Partner with the best catering services in town.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {cateringServices.map(service => (
                <div key={service.id} className="card">
                  <img 
                    src={service.image} 
                    alt={service.name} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-lg font-semibold text-gray-800">{service.name}</h3>
                      <div className="flex items-center">
                        <FaStar className="text-yellow-500 mr-1" />
                        <span>{service.rating}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <button className="w-full btn-primary">Contact Provider</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Blog Posts */}
        <div className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800">Latest from Our Blog</h2>
              <a href="/blogs" className="text-primary-600 hover:text-primary-700 font-medium">View All Posts</a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogPosts.map(post => (
                <div key={post.id} className="card">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <p className="text-gray-500 text-sm mb-2">{post.date}</p>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <a href={`/blogs/${post.id}`} className="text-primary-600 hover:text-primary-700 font-medium">Read More</a>
                  </div>

                  <div className="p-4">
                    <p className="text-gray-500 text-sm mb-2">{post.date}</p>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <a href={`/blogs/${post.id}`} className="text-primary-600 hover:text-primary-700 font-medium">Read More</a>
                  </div>
                   <div className="p-4">
                    <p className="text-gray-500 text-sm mb-2">{post.date}</p>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <a href={`/blogs/${post.id}`} className="text-primary-600 hover:text-primary-700 font-medium">Read More</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;