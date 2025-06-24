import React, { useEffect } from 'react';
import { X, ShoppingCart } from 'lucide-react';
import { Product } from '../../types';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
  type: 'betty' | 'tentaciones';
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, type }) => {
  const isBetty = type === 'betty';
  
  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);
  
  // Close modal on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);
  
  const overlayClasses = "fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4";
  
  const modalClasses = "relative max-w-4xl w-full bg-white rounded-lg shadow-xl overflow-hidden";
  
  const closeButtonClasses = "absolute top-4 right-4 text-gray-500 hover:text-betty-brown transition-colors";
  
  const ctaButtonClasses = "px-6 py-3 rounded-md font-sans text-white transition-all bg-betty-brown hover:bg-betty-dark-brown";
  
  const priceClasses = "text-2xl font-semibold text-betty-brown";
  
  return (
    <div className={overlayClasses} onClick={onClose}>
      <div className={modalClasses} onClick={(e) => e.stopPropagation()}>
        <button 
          className={closeButtonClasses}
          onClick={onClose}
          aria-label="Cerrar"
        >
          <X size={24} />
        </button>
        
        <div className="md:flex">
          <div className="md:w-1/2">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-64 md:h-full object-cover"
            />
          </div>
          
          <div className="p-8 md:w-1/2">
            <h2 className="font-playfair text-2xl font-semibold mb-2">{product.name}</h2>
            
            <p className={priceClasses}>$ {product.price.toLocaleString('es-CL')} CLP</p>
            
            <div className="my-6">
              <h3 className="font-playfair text-lg font-semibold mb-2 text-betty-brown">Descripción</h3>
              <p className="font-sans text-gray-700">{product.description}</p>
            </div>
            
            {product.ingredients && (
              <div className="mb-8">
                <h3 className="font-playfair text-lg font-semibold mb-2 text-betty-brown">Ingredientes</h3>
                <p className="font-sans text-gray-700">{product.ingredients}</p>
              </div>
            )}
            
            <a 
              href="/contacto" 
              className={ctaButtonClasses}
            >
              <ShoppingCart className="inline mr-2" size={18} />
              Solicitar información
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;