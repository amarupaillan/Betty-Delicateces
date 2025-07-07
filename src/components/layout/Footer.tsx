import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Instagram, Facebook } from 'lucide-react';
import Logo from '../ui/Logo';

const Footer: React.FC = () => {
  const footerClasses = 'bg-white border-t border-gray-200 text-gray-800';
  
  const linkClasses = 'font-geist text-gray-600 hover:text-black transition-colors duration-300';
  
  return (
    <footer className={`${footerClasses} py-8`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Logo />
            <p className="mt-2 font-geist text-sm text-gray-600 max-w-xs">
              Cafetería y panadería artesanal con productos elaborados con amor y los mejores ingredientes.
            </p>
          </div>
          
          <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-6 mb-6 md:mb-0">
            <Link to="/" className={linkClasses}>Inicio</Link>
            <Link to="/productos" className={linkClasses}>Productos</Link>
            <Link to="/tentaciones" className={linkClasses}>Tentaciones de la Reina</Link>
            <Link to="/contacto" className={linkClasses}>Contacto</Link>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="tel:+56958797869" 
              className="text-gray-600 hover:text-black transition-colors duration-300"
              aria-label="Teléfono"
            >
              <Phone size={20} />
            </a>
            <a 
              href="mailto:info@bettydelicateces.com" 
              className="text-gray-600 hover:text-black transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-6 pt-6 text-center font-geist text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Betty Delicateces. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;