import React from 'react';
import Map, { Marker, Popup } from 'react-map-gl';
import { FaMapMarkerAlt } from 'react-icons/fa';
import 'mapbox-gl/dist/mapbox-gl.css';

const MapComponent = ({ pgs, selectedPg, setSelectedPg }) => {
  // This would normally come from an environment variable
  const MAPBOX_TOKEN = 'pk.eyJ1IjoiZXhhbXBsZXVzZXIiLCJhIjoiY2xnNXNlaTJlMDc2eTNkcGx6NHdnczhnbiJ9.example-token';
console.log("PGs data:", pgs);

  return (
    <div className="h-full w-full rounded-lg overflow-hidden">
      <Map
        initialViewState={{
          latitude: 28.6139,  // Default to Delhi, India
          longitude: 77.2090,
          zoom: 12
        }}
        style={{ width: '100%', height: '100%' }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        {pgs.map((pg) => (
          <Marker
            key={pg.id}
            latitude={pg.latitude}
            longitude={pg.longitude}
            onClick={(e) => {
              e.originalEvent.stopPropagation();
              setSelectedPg(pg);
            }}
          >
            <FaMapMarkerAlt className="text-primary-600 text-2xl" />
          </Marker>
        ))}

        {selectedPg && (
          <Popup
            latitude={selectedPg.latitude}
            longitude={selectedPg.longitude}
            anchor="bottom"
            onClose={() => setSelectedPg(null)}
            closeOnClick={false}
          >
            <div className="p-2">
              <h3 className="font-semibold">{selectedPg.name}</h3>
              <p className="text-sm text-gray-600">{selectedPg.location}</p>
              <p className="text-sm font-medium mt-1">₹{selectedPg.price}/month</p>
            </div>
          </Popup>
        )}
      </Map>
    </div>
  );
};

export default MapComponent;