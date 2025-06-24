import React, { useState, useCallback } from 'react';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';
import { Product } from '../../types';

interface ProductGridProps {
  products: Product[];
  type: 'betty' | 'tentaciones';
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, type }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  const handleOpenModal = useCallback((product: Product) => {
    setSelectedProduct(product);
  }, []);
  
  const handleCloseModal = useCallback(() => {
    setSelectedProduct(null);
  }, []);
  
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onView={handleOpenModal}
            type={type}
          />
        ))}
      </div>
      
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={handleCloseModal}
          type={type}
        />
      )}
    </>
  );
};

export default ProductGrid;