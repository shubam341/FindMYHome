import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaCalendarAlt, FaUser, FaSearch } from 'react-icons/fa';

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: "10 Things to Check Before Booking a PG",
    excerpt: "Essential checklist for anyone looking to move into a paying guest accommodation. From security to food quality, make sure you check these important factors.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.",
    image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    date: "May 15, 2025",
    author: "Priya Sharma",
    category: "Tips & Advice"
  },
  {
    id: 2,
    title: "How to Save Money While Living in a PG",
    excerpt: "Practical tips to reduce your monthly expenses without compromising on comfort. Learn how to budget effectively while living in a paying guest accommodation.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.",
    image: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    date: "April 28, 2025",
    author: "Rahul Verma",
    category: "Finance"
  },
  {
    id: 3,
    title: "Best PG Locations for Working Professionals",
    excerpt: "Find out which areas offer the best connectivity and amenities for professionals. We analyze the top locations based on commute time, facilities, and overall convenience.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    date: "April 10, 2025",
    author: "Amit Patel",
    category: "Locations"
  },
  {
    id: 4,
    title: "PG vs Apartment: Which is Better for Students?",
    excerpt: "A comprehensive comparison between paying guest accommodations and rented apartments for students. Understand the pros and cons of each option.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    date: "March 25, 2025",
    author: "Neha Gupta",
    category: "Students"
  },
  {
    id: 5,
    title: "How to Deal with Difficult Roommates",
    excerpt: "Practical advice for handling conflicts and building positive relationships with your PG roommates. Learn effective communication strategies.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
    date: "March 12, 2025",
    author: "Vikram Singh",
    category: "Lifestyle"
  },
  {
    id: 6,
    title: "The Ultimate Guide to PG Food Services",
    excerpt: "Everything you need to know about food services in paying guest accommodations. Tips for ensuring you get quality meals and value for money.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    date: "February 28, 2025",
    author: "Anjali Sharma",
    category: "Food"
  }
];

// Categories
const categories = [
  "All",
  "Tips & Advice",
  "Finance",
  "Locations",
  "Students",
  "Lifestyle",
  "Food"
];

const BlogPage = ({ isLoggedIn, openAuthModal }) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header isLoggedIn={isLoggedIn} openAuthModal={openAuthModal} />
      
      <main className="flex-grow bg-gray-50 py-6">
        <div className="container mx-auto px-4">
       

            
      <section className="relative py-20 bg-indigo-500">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')" }}></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">FindMyStay Blogs</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Tips, advice, and insights to help you find the perfect PG accommodation and make the most of your stay.
          </p>
        </div>
      </section>
          

          {/* Search and Filter */}
          <div className="mb-10">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:w-2/3">
                <div className="relative mt-5">
                  <input
                    type="text"
                    placeholder="Search blog posts..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaSearch className="text-gray-400" />
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/3 mt-5">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          
    
          {filteredPosts.length > 0 && (
            <div className="mb-12">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img 
                      src={filteredPosts[0].image} 
                      alt={filteredPosts[0].title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-6 md:p-8">
                    <div className="flex items-center text-sm text-gray-600 mb-2">
                      <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded-md">{filteredPosts[0].category}</span>
                      <span className="mx-2">•</span>
                      <FaCalendarAlt className="mr-1" />
                      <span>{filteredPosts[0].date}</span>
                    </div>
                    
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">{filteredPosts[0].title}</h2>
                    <p className="text-gray-600 mb-6">{filteredPosts[0].excerpt}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                          {filteredPosts[0].author.charAt(0)}
                        </div>
                        <span className="text-gray-700">{filteredPosts[0].author}</span>
                      </div>
                      
                      <a 
                        href={`/blogs/${filteredPosts[0].id}`}
                        className="text-primary-600 hover:text-primary-700 font-medium"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
         
          {filteredPosts.length > 1 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.slice(1).map(post => (
                <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-600 mb-2">
                      <span className="bg-primary-50 text-primary-700 px-2 py-1 rounded-md">{post.category}</span>
                      <span className="mx-2">•</span>
                      <FaCalendarAlt className="mr-1" />
                      <span>{post.date}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm">
                        <FaUser className="text-gray-500 mr-1" />
                        <span className="text-gray-700">{post.author}</span>
                      </div>
                      
                      <a 
                        href={`/blogs/${post.id}`}
                        className="text-primary-600 hover:text-primary-700 font-medium"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg mb-4">No blog posts found matching your criteria.</p>
              <button 
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="btn-primary"
              >
                Reset Filters
              </button>
            </div>
          ) : null}
      
          <div className="bg-primary-50 rounded-lg shadow-md p-8 mt-12">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Subscribe to Our Newsletter</h2>
              <p className="text-gray-600 mb-6">
                Get the latest tips and advice about PG living delivered straight to your inbox.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <button className="btn-primary whitespace-nowrap">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPage;