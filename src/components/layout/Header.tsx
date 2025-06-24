import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from '../ui/Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  // Handle scroll effect for transparent to solid header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const headerClasses = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled 
      ? 'bg-white shadow-md text-gray-800' 
      : 'bg-transparent text-gray-800'
  }`;
  
  const navItemClasses = `font-sans text-sm lg:text-base transition-all duration-300 
    hover:text-betty-brown relative group py-2`;
  
  const activeNavItemClasses = `after:absolute after:bottom-0 after:left-0 after:w-full 
    after:h-0.5 after:bg-betty-brown text-betty-brown`;
  
  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4 py-3 lg:py-4">
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
              className={`font-sans px-5 py-2 rounded-md 
                border-2 border-betty-brown text-betty-brown hover:bg-betty-brown hover:text-white
                transition-colors duration-300 ${location.pathname === '/contacto' ? 'bg-betty-brown text-white' : ''}`}
            >
              Contacto
            </Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden z-10 text-gray-800 hover:text-betty-brown transition-colors"
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
                className={`font-sans text-lg py-2 border-b border-gray-100 ${
                  location.pathname === '/' ? 'text-betty-brown font-medium' : 'text-gray-800'
                }`}
                onClick={toggleMenu}
              >
                Inicio
              </Link>
              
              <Link 
                to="/productos"
                className={`font-sans text-lg py-2 border-b border-gray-100 ${
                  location.pathname === '/productos' ? 'text-betty-brown font-medium' : 'text-gray-800'
                }`}
                onClick={toggleMenu}
              >
                Productos
              </Link>
              
              <Link 
                to="/tentaciones"
                className={`font-sans text-lg py-2 border-b border-gray-100 ${
                  location.pathname === '/tentaciones' ? 'text-betty-brown font-medium' : 'text-gray-800'
                }`}
                onClick={toggleMenu}
              >
                Tentaciones de la Reina
              </Link>
              
              <Link 
                to="/contacto"
                className={`font-sans text-lg py-2 mt-2 text-center rounded-md ${
                  location.pathname === '/contacto' 
                    ? 'bg-betty-brown text-white' 
                    : 'border-2 border-betty-brown text-betty-brown'
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