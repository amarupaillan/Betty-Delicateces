import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart } from 'lucide-react';
import Section from '../components/ui/Section';
import WhatsAppButton from '../components/ui/WhatsAppButton';
import { Product } from '../types';
import { getProductById, getRelatedProducts } from '../data/products';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (id) {
      // Fetch product by id
      const foundProduct = getProductById(id);
      setProduct(foundProduct);
      
      if (foundProduct) {
        // Fetch related products
        const related = getRelatedProducts(foundProduct.id, foundProduct.category);
        setRelatedProducts(related);
      }
      
      setLoading(false);
    }
  }, [id]);
  
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#FF69B4]"></div>
      </div>
    );
  }
  
  if (!product) {
    return (
      <Section type="betty">
        <div className="text-center py-12">
          <h2 className="font-playfair text-2xl font-semibold mb-4">Producto no encontrado</h2>
          <p className="font-montserrat text-gray-600 mb-6">
            Lo sentimos, el producto que buscas no existe o ha sido eliminado.
          </p>
          <Link 
            to="/productos" 
            className="inline-flex items-center font-montserrat bg-[#FF69B4] text-white px-4 py-2 rounded-full hover:bg-[#FF1493] transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            Volver a productos
          </Link>
        </div>
      </Section>
    );
  }
  
  return (
    <>
      <Section type="betty">
        <Link 
          to="/productos" 
          className="inline-flex items-center font-montserrat text-[#FF69B4] mb-8 hover:underline"
        >
          <ArrowLeft size={16} className="mr-2" />
          Volver a productos
        </Link>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          
          <div>
            <h1 className="font-playfair text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-2xl font-semibold text-[#FF69B4] mb-6">{product.price.toFixed(2)} €</p>
            
            <div className="mb-6">
              <h2 className="font-playfair text-xl font-semibold mb-3">Descripción</h2>
              <p className="font-montserrat text-gray-700">{product.description}</p>
            </div>
            
            {product.ingredients && (
              <div className="mb-6">
                <h2 className="font-playfair text-xl font-semibold mb-3">Ingredientes</h2>
                <p className="font-montserrat text-gray-700">{product.ingredients}</p>
              </div>
            )}
            
            <div className="mb-6">
              <h2 className="font-playfair text-xl font-semibold mb-3">Categoría</h2>
              <span className="inline-block bg-[#FFF5F5] text-[#FF69B4] px-3 py-1 rounded-full font-montserrat text-sm">
                {product.category}
              </span>
            </div>
            
            <a 
              href="/contacto" 
              className="inline-flex items-center bg-[#FF69B4] hover:bg-[#FF1493] text-white font-montserrat px-6 py-3 rounded-full transition-colors"
            >
              <ShoppingCart size={18} className="mr-2" />
              Solicitar información
            </a>
          </div>
        </div>
      </Section>
      
      {relatedProducts.length > 0 && (
        <Section 
          title="Productos relacionados" 
          type="betty"
          className="bg-[#FFF5F5]"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <div key={relatedProduct.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
                <Link to={`/productos/${relatedProduct.id}`}>
                  <img 
                    src={relatedProduct.image} 
                    alt={relatedProduct.name} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-playfair text-lg font-semibold mb-2">{relatedProduct.name}</h3>
                    <p className="text-[#FF69B4] font-semibold">{relatedProduct.price.toFixed(2)} €</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </Section>
      )}
      
      <WhatsAppButton phoneNumber="+56958797869" type="betty" />
    </>
  );
};

export default ProductDetails;