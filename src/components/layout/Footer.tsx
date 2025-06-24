import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, Instagram, Facebook, Clock } from 'lucide-react';
import Logo from '../ui/Logo';

const Footer: React.FC = () => {
  const footerClasses = 'bg-betty-cream text-gray-800';
  
  const headingClasses = 'font-playfair text-lg font-semibold mb-4 text-betty-brown';
  const linkClasses = 'font-sans hover:text-betty-brown transition-colors duration-300';
  
  return (
    <footer className={`${footerClasses} py-12`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Logo />
            <p className="mt-4 font-sans text-sm text-gray-600">
              Delicateces artesanales elaboradas con amor y los mejores ingredientes desde 2015.
            </p>
          </div>
          
          <div>
            <h3 className={headingClasses}>Navegación</h3>
            <ul className="space-y-2">
              <li><Link to="/" className={linkClasses}>Inicio</Link></li>
              <li><Link to="/productos" className={linkClasses}>Productos</Link></li>
              <li><Link to="/tentaciones" className={linkClasses}>Tentaciones de la Reina</Link></li>
              <li><Link to="/contacto" className={linkClasses}>Contacto</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className={headingClasses}>Horarios</h3>
            <ul className="space-y-2 font-sans text-sm text-gray-600">
              <li className="flex items-center">
                <Clock size={16} className="mr-2 text-betty-brown" />
                <span>Lunes a Viernes: 9:00 - 19:00</span>
              </li>
              <li className="flex items-center">
                <Clock size={16} className="mr-2 text-betty-brown" />
                <span>Sábados: 10:00 - 14:00</span>
              </li>
              <li className="flex items-center">
                <Clock size={16} className="mr-2 text-betty-brown" />
                <span>Domingos: Cerrado</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className={headingClasses}>Contacto</h3>
            <ul className="space-y-3 font-sans text-sm text-gray-600">
              <li>
                <a 
                  href="tel:+56600123456" 
                  className="flex items-center hover:text-betty-brown transition-colors duration-300"
                >
                  <Phone size={16} className="mr-2 text-betty-brown" />
                  <span>+56 600 123 456</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@bettydelicateces.com" 
                  className="flex items-center hover:text-betty-brown transition-colors duration-300"
                >
                  <Mail size={16} className="mr-2 text-betty-brown" />
                  <span>info@bettydelicateces.com</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-betty-brown transition-colors duration-300"
                >
                  <Instagram size={16} className="mr-2 text-betty-brown" />
                  <span>@BettyDelicateces</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-betty-brown transition-colors duration-300"
                >
                  <Facebook size={16} className="mr-2 text-betty-brown" />
                  <span>Betty Delicateces</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center font-sans text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Betty Delicateces. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;