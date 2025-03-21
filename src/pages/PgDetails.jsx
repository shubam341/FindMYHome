import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FaMapMarkerAlt, FaBed, FaRupeeSign, FaCheckCircle, FaStar } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import BookingModal from "../components/BookingModal";

const pgData = [
  {
    id: 1,
    name: "Luxury PG for men",
    location: "Koramangala, Bangalore",
    price: 8500,
    rating: 4.5,
    sharing: "2 & 3 Sharing",
    images: [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    ],
    amenities: ["WiFi", "Laundry", "Security", "Food", "Parking", "CCTV", "Power Backup"],

    reviews: [
      { user: "Rohit Sharma", comment: "Great place to stay!", rating: 5 },
      { user: "Ananya Verma", comment: "Affordable and clean!", rating: 4 },
    ],
  },
  {
    id: 3,
    name: "Budget PG",
    location: "BTM Layout, Bangalore",
    price: 65000,
    rating: 4.5,
    sharing: "2 & 3 Sharing",
    images: [
       "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
       "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    ],
    amenities: ["WiFi", "Laundry", "Security", "Food", "Parking", "CCTV", "Power Backup"],

    reviews: [
      { user: "Rohit Sharma", comment: "Great place to stay!", rating: 5 },
      { user: "Ananya Verma", comment: "Affordable and clean!", rating: 4 },
    ],
  },
  {
    id: 2,
    name: "Luxury PG for Men",
    location: "HSR Layout, Bangalore",
    price: 10000,
    rating: 4.2,
    sharing: "3 & 4 Sharing",
    images: [
       "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1558&q=80",
       "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    ],
    amenities: ["WiFi", "Laundry", "Security", "Food", "Parking", "CCTV", "Power Backup"],

    reviews: [
      { user: "Amit Kumar", comment: "Good facilities and food.", rating: 4 },
      { user: "Pooja Sharma", comment: "Great for students.", rating: 4.5 },
    ],
  },
  {
    id: 4,
    name: "Premium Co-living Space",
    location: "Indiranagar, Bangalore",
    price: 12000,
    rating: 4.5,
    sharing: "2 & 3 Sharing",
    images: [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    ],
    amenities: ["WiFi", "Laundry", "Security", "Food", "Parking", "CCTV", "Power Backup"],

    reviews: [
      { user: "Rohit Sharma", comment: "Great place to stay!", rating: 5 },
      { user: "Ananya Verma", comment: "Affordable and clean!", rating: 4 },
    ],
  },
];

const PgDetails = () => {
    
  const { id } = useParams();
  const pg = pgData.find((pg) => pg.id === parseInt(id));
  const [reviews, setReviews] = useState(pg?.reviews || []);
  const [newReview, setNewReview] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal

  if (!pg) {
    return (
      <div className="flex items-center justify-center h-screen text-center bg-gray-100">
        <h1 className="text-3xl font-bold text-gray-800">PG Not Found</h1>
      </div>
    );
  }

  const handleReviewSubmit = () => {
    if (newReview.trim()) {
      setReviews([...reviews, { user: "Anonymous", comment: newReview, rating: 4 }]);
      setNewReview("");
    }
  };

  return (
    <div className="w-full h-screen flex flex-col bg-slate-200 overflow-y-auto">
      {/* PG Details */}
      <div className="w-full h-72 bg-cover bg-center relative" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?hostel')" }}>
        <div className="h-32 inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">{pg.name}</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 flex-grow">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Image Carousel */}
          <Carousel showThumbs={false} autoPlay infiniteLoop>
            {pg.images.map((img, index) => (
              <div key={index}>
                <img src={img} alt={pg.name} className="w-full h-96 object-cover" />
              </div>
            ))}
          </Carousel>

          <div className="p-6">
            {/* Location */}
            <p className="text-gray-600 flex items-center text-lg mt-2">
              <FaMapMarkerAlt className="text-red-500 mr-2" /> {pg.location}
            </p>

            {/* Rating & Price */}
            <div className="mt-4 flex justify-between items-center">
              <span className="flex items-center text-yellow-500 text-xl">
                <FaStar className="mr-1" /> {pg.rating} / 5
              </span>
              <span className="text-xl font-semibold text-green-600">
                <FaRupeeSign className="inline-block mr-1" /> {pg.price}/month
              </span>
            </div>

            {/* Sharing Details */}
            <p className="mt-2 text-gray-700 text-lg">Sharing: {pg.sharing}</p>

            {/* Amenities */}
            <div className="mt-4">
              <h2 className="text-xl font-semibold text-gray-800">Amenities</h2>
              <ul className="mt-2 grid grid-cols-2 gap-2">
                {pg.amenities.map((amenity, index) => (
                  <li key={index} className="flex items-center text-gray-700 text-lg">
                    <FaCheckCircle className="text-green-500 mr-2" />
                    {amenity}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Booking Button */}
            <div className="container mx-auto p-4 text-center">
   <p>{pg.description}</p>

   <div className="flex justify-center mt-4">
      <button 
         onClick={() => setIsModalOpen(true)} 
         className="bg-blue-500 text-white px-6 py-3 rounded shadow-lg transition duration-300 ease-in-out 
                    hover:bg-blue-600 hover:scale-105"
      >
         Quick Book Now
      </button>
   </div>

   {/* Booking Modal */}
   <BookingModal 
      isOpen={isModalOpen} 
      onClose={() => setIsModalOpen(false)} 
      pg={pg} 
   />
</div>


            {/* Reviews */}
            <div className="mt-6">
              <h2 className="text-xl font-semibold text-gray-800">Reviews</h2>
              <div className="mt-2 max-h-60 overflow-y-auto custom-scrollbar">
                {reviews.map((review, index) => (
                  <div key={index} className="bg-gray-100 p-3 rounded-lg mb-2 shadow-sm">
                    <p className="font-medium">{review.user}</p>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Add Review */}
            <div className="mt-6">
              <input
                type="text"
                placeholder="Write a review..."
                className="border p-2 rounded w-full shadow-sm"
                value={newReview}
                onChange={(e) => setNewReview(e.target.value)}
              />
              <button
                onClick={handleReviewSubmit}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded mt-2 shadow-md"
              >
                Submit Review
              </button>
            </div>
          </div>
        </div>
      </div>

   
      {isModalOpen && (
        <BookingModal pg={pg} onClose={() => setIsModalOpen(false)} /> // Pass PG details and close handler
      )}
    </div>
  );
};

export default PgDetails;