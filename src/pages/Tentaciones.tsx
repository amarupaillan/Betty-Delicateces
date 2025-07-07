import React, { useState, useEffect } from 'react';
import Section from '../components/ui/Section';
import ProductGrid from '../components/ui/ProductGrid';
import WhatsAppButton from '../components/ui/WhatsAppButton';
import { Product } from '../types';
import { getTentacionesProducts } from '../data/products';
import heroImage from '../Photos/Screenshot 2025-07-07 at 15.03.05.png';
import dsc0888 from '../Photos/_DSC0888.JPG';

const Tentaciones: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    // Fetch tentaciones products
    const tentacionesProducts = getTentacionesProducts();
    setProducts(tentacionesProducts);
  }, []);
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 bg-cover bg-center" style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${heroImage})` 
      }}>
        <div className="container mx-auto px-4 relative z-10 text-white text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-2">
            Tentaciones de la Reina
          </h1>
          <p className="font-geist text-xl italic mb-4">by Betty Delicateces</p>
          <p className="font-geist text-lg max-w-2xl mx-auto">
            Nuestra selección premium de empanadas artesanales y productos de panadería especial
          </p>
        </div>
      </section>
      
      {/* About Section */}
      <Section 
        title="El Arte de la Panadería Chilena" 
        subtitle="Tradición y auténtico sabor en cada bocado"
        type="white"
      >
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <img 
              src={dsc0888} 
              alt="Tentaciones de la Reina - Panadería" 
              className="rounded-lg shadow-sm w-80 h-auto"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="font-playfair text-2xl font-semibold mb-4 text-black">Del horno a tu mesa</h3>
            <p className="font-geist text-gray-700 mb-4">
              "Tentaciones de la Reina" es nuestra línea premium de panadería y empanadas artesanales donde cada pieza se elabora con ingredientes seleccionados y métodos tradicionales chilenos.
            </p>
            <p className="font-geist text-gray-700 mb-4">
              Utilizamos recetas auténticas, harinas de primera calidad y respetamos los tiempos de preparación para conseguir el sabor y la textura perfectos en cada creación.
            </p>
            <p className="font-geist text-gray-700">
              Nuestros panaderos y cocineros elaboran diariamente una amplia variedad de empanadas con diferentes rellenos y productos de panadería especial, combinando recetas tradicionales con toques de innovación.
            </p>
          </div>
        </div>
      </Section>
      
      {/* Products Section */}
      <Section 
        title="Productos Especiales" 
        subtitle="Descubre nuestra selección premium de empanadas y panadería"
        type="light"
      >
        <ProductGrid products={products} type="tentaciones" />
      </Section>
      
      {/* CTA Section */}
      <section className="py-24 bg-cover bg-center relative" style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://images.pexels.com/photos/4916558/pexels-photo-4916558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')` 
      }}>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-6">
            Productos por Mayor
          </h2>
          <p className="font-geist text-white text-lg mb-8 max-w-2xl mx-auto">
            Vendemos productos por mayor a cafeterías y locales comerciales. Ofrecemos empanadas y productos de panadería de alta calidad, elaborados artesanalmente y a precios competitivos para su negocio.
          </p>
          <a
            href="/contacto"
            className="bg-white hover:bg-gray-100 text-black font-geist px-8 py-3 rounded-md transition-colors inline-block"
          >
            Solicitar información
          </a>
        </div>
      </section>
      
      <WhatsAppButton phoneNumber="+56958797869" type="tentaciones" />
    </>
  );
};

export default Tentaciones;