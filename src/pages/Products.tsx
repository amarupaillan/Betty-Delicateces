import React, { useState, useEffect } from 'react';
import Section from '../components/ui/Section';
import ProductGrid from '../components/ui/ProductGrid';
import WhatsAppButton from '../components/ui/WhatsAppButton';
import { Product } from '../types';
import { getAllProducts } from '../data/products';

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  useEffect(() => {
    // Fetch all products
    const allProducts = getAllProducts();
    setProducts(allProducts);
    setFilteredProducts(allProducts);
  }, []);
  
  // Get unique categories
  const categories = ['all', ...new Set(products.map(product => product.category))].sort();
  
  const filterByCategory = (category: string) => {
    setActiveCategory(category);
    
    if (category === 'all') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === category));
    }
  };
  
  const categoryButtonClasses = (category: string) => `
    px-5 py-2 rounded-md font-geist text-sm transition-all
    ${activeCategory === category 
      ? 'bg-black text-white' 
      : 'bg-white border border-gray-200 text-gray-700 hover:border-gray-300'}
  `;
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-40 bg-cover bg-center" style={{ 
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" 
      }}>
        <div className="container mx-auto px-4 relative z-10 text-white text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-4">
            Productos de Panadería
          </h1>
          <p className="font-geist text-lg max-w-2xl mx-auto">
            Descubre nuestra variedad de deliciosos productos artesanales de panadería y cafetería
          </p>
        </div>
      </section>
      
      {/* Products Section */}
      <Section type="white" fullWidth={false}>
        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              className={categoryButtonClasses(category)}
              onClick={() => filterByCategory(category)}
            >
              {category === 'all' ? 'Todos' : category}
            </button>
          ))}
        </div>
        
        {/* Products grid */}
        {filteredProducts.length > 0 ? (
          <ProductGrid products={filteredProducts} type="betty" />
        ) : (
          <div className="text-center py-12">
            <p className="font-geist text-gray-600">No se encontraron productos en esta categoría.</p>
          </div>
        )}
      </Section>
      
      {/* Custom Orders Section */}
      <Section 
        title="Pedidos Personalizados" 
        subtitle="¿Tienes una idea especial en mente para tu evento? Nuestra panadería y cafetería puede hacerla realidad"
        type="light"
      >
        <div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto">
          <div className="md:w-1/2">
            <img 
              src="https://images.pexels.com/photos/7525180/pexels-photo-7525180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Pedidos personalizados" 
              className="rounded-lg shadow-sm w-full h-auto"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="font-playfair text-2xl font-semibold mb-4 text-black">Creaciones únicas para ocasiones especiales</h3>
            <p className="font-geist text-gray-700 mb-4">
              Además de nuestro catálogo regular, ofrecemos servicios de panadería y repostería personalizada para eventos como bodas, cumpleaños, bautizos y celebraciones corporativas.
            </p>
            <p className="font-geist text-gray-700 mb-6">
              Nuestro equipo trabajará contigo para diseñar la creación perfecta que se ajuste a tus necesidades, gustos y presupuesto.
            </p>
            <a 
              href="/contacto" 
              className="inline-block bg-black hover:bg-black/80 text-white font-geist px-6 py-3 rounded-md transition-colors mt-2"
            >
              Solicitar presupuesto
            </a>
          </div>
        </div>
      </Section>
      
      <WhatsAppButton phoneNumber="600123456" type="betty" />
    </>
  );
};

export default Products;