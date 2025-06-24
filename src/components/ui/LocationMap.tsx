import React from 'react';

interface LocationMapProps {
  address: string;
  type: 'betty' | 'tentaciones';
}

const LocationMap: React.FC<LocationMapProps> = ({ address, type }) => {
  // Convert address to URL-encoded format
  const encodedAddress = encodeURIComponent(address);
  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodedAddress}`;
  
  // Since we don't have an actual API key, we'll use a placeholder map image
  const placeholderImageUrl = "https://images.pexels.com/photos/1203808/pexels-photo-1203808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  
  return (
    <div className="relative rounded-lg overflow-hidden shadow-md h-80">
      {/* In a real implementation, you would use: */}
      {/* <iframe
        title="Location Map"
        width="100%"
        height="100%"
        frameBorder="0"
        src={mapSrc}
        allowFullScreen
      ></iframe> */}
      
      {/* For the demo, we'll use a placeholder image */}
      <img 
        src={placeholderImageUrl} 
        alt="Mapa de ubicación" 
        className="w-full h-full object-cover"
      />
      
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
        <div className="text-center text-white p-4">
          <h3 className="font-playfair text-xl mb-2">Nuestra Ubicación</h3>
          <p className="font-montserrat">{address}</p>
          <a 
            href={`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-block mt-4 px-4 py-2 rounded-full text-sm font-medium transition-colors
              ${type === 'betty' ? 'bg-[#FF69B4] hover:bg-[#FF1493]' : 'bg-[#8B4513] hover:bg-[#A0522D]'}`}
          >
            Ver en Google Maps
          </a>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;