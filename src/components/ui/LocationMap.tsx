import React from 'react';

interface LocationMapProps {
  address?: string;
  mapUrl?: string;
  type: 'betty' | 'tentaciones';
}

const LocationMap: React.FC<LocationMapProps> = ({ 
  address = "Av. Alcalde Fernando Castillo Velazco 6978, La Reina, Santiago", 
  mapUrl = "https://maps.app.goo.gl/dp4dKQenzF8tu2JZ6", 
  type 
}) => {
  return (
    <div className="relative rounded-lg overflow-hidden shadow-md h-80">
      {/* Use an iframe to embed Google Maps */}
      <iframe
        title="Location Map"
        width="100%"
        height="100%"
        frameBorder="0"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.0745026931573!2d-70.56855492392858!3d-33.44528549917894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cef66a9597c1%3A0x201c554fc904ff40!2sAv.%20Alcalde%20Fernando%20Castillo%20Velazco%206978%2C%20La%20Reina%2C%20Santiago%2C%20Chile!5e0!3m2!1ses!2scl!4v1688516846903!5m2!1ses!2scl"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70">
        <div className="text-center text-white p-2 md:p-4">
          <h3 className="font-playfair text-base md:text-lg mb-1 md:mb-2">Nuestra Ubicación</h3>
          <p className="font-montserrat text-xs md:text-sm">{address}</p>
          <a 
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-block mt-1 md:mt-2 px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium transition-colors
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