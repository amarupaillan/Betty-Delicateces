import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from '../ui/Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const headerClasses = "fixed w-full z-50 bg-white shadow-sm";
  
  const navItemClasses = "font-geist text-sm lg:text-base transition-colors duration-300 hover:text-black/70";
  
  const activeNavItemClasses = "font-medium text-black";
  
  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="z-10">
            <Logo />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10">
            <Link 
              to="/" 
              className={`${navItemClasses} ${location.pathname === '/' ? activeNavItemClasses : ''}`}
            >
              Inicio
            </Link>
            
            <Link 
              to="/productos" 
              className={`${navItemClasses} ${location.pathname === '/productos' ? activeNavItemClasses : ''}`}
            >
              Productos
            </Link>
            
            <Link 
              to="/tentaciones" 
              className={`${navItemClasses} ${location.pathname === '/tentaciones' ? activeNavItemClasses : ''}`}
            >
              Tentaciones de la Reina
            </Link>
            
            <Link 
              to="/contacto" 
              className={`font-geist px-5 py-2 rounded-md text-white
                ${location.pathname === '/contacto' ? 'bg-black' : 'bg-black/90 hover:bg-black'}
                transition-colors duration-300`}
            >
              Contacto
            </Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden z-10 text-black"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <div 
          className={`fixed inset-x-0 top-0 transform transition-transform duration-300 lg:hidden ${
            isMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="bg-white shadow-lg pt-16 pb-6">
            <nav className="container mx-auto px-4 flex flex-col space-y-4">
              <Link 
                to="/"
                className={`font-geist text-lg py-2 border-b border-gray-100 ${
                  location.pathname === '/' ? 'text-black font-medium' : 'text-black/80'
                }`}
                onClick={toggleMenu}
              >
                Inicio
              </Link>
              
              <Link 
                to="/productos"
                className={`font-geist text-lg py-2 border-b border-gray-100 ${
                  location.pathname === '/productos' ? 'text-black font-medium' : 'text-black/80'
                }`}
                onClick={toggleMenu}
              >
                Productos
              </Link>
              
              <Link 
                to="/tentaciones"
                className={`font-geist text-lg py-2 border-b border-gray-100 ${
                  location.pathname === '/tentaciones' ? 'text-black font-medium' : 'text-black/80'
                }`}
                onClick={toggleMenu}
              >
                Tentaciones de la Reina
              </Link>
              
              <Link 
                to="/contacto"
                className={`font-geist text-lg py-2 mt-2 text-center rounded-md text-white ${
                  location.pathname === '/contacto' 
                    ? 'bg-black' 
                    : 'bg-black/90'
                }`}
                onClick={toggleMenu}
              >
                Contacto
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;