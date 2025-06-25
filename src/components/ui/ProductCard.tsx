import React from 'react';
import { Eye } from 'lucide-react';
import { Product } from '../../types';

interface ProductCardProps {
  product: Product;
  onView: (product: Product) => void;
  type: 'betty' | 'tentaciones';
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onView, type }) => {
  const cardClasses = "group relative overflow-hidden rounded-lg shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md transform hover:-translate-y-1";
  
  const buttonClasses = "absolute bottom-4 right-4 rounded-md p-2 transition-colors duration-300 bg-black text-white hover:bg-black/80";
  
  const imageWrapperClasses = "overflow-hidden h-52 md:h-64";
  
  const imageClasses = "w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105";
  
  const priceClasses = "text-lg font-medium text-brand-pink";
  
  return (
    <div className={cardClasses}>
      <div className={imageWrapperClasses}>
        <img 
          src={product.image} 
          alt={product.name} 
          className={imageClasses}
          loading="lazy"
        />
      </div>
      
      <div className="p-5">
        <h3 className="font-playfair text-lg font-semibold mb-2 text-black">{product.name}</h3>
        <p className="font-geist text-sm text-gray-600 mb-3 line-clamp-2">{product.shortDescription}</p>
        <p className={priceClasses}>$ {product.price.toLocaleString('es-CL')} CLP</p>
      </div>
      
      <button 
        className={buttonClasses}
        onClick={() => onView(product)}
        aria-label={`Ver detalles de ${product.name}`}
      >
        <Eye size={18} />
      </button>
    </div>
  );
};

export default ProductCard;