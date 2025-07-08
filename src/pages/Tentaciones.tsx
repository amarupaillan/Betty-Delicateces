import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/ui/Section';
import ProductGrid from '../components/ui/ProductGrid';
import WhatsAppButton from '../components/ui/WhatsAppButton';
import LocationMap from '../components/ui/LocationMap';
import { Product } from '../types';
import { getTentacionesProducts } from '../data/products';
import heroImage from '../Photos/Screenshot 2025-07-07 at 15.03.05.png';
import dsc0888 from '../Photos/_DSC0888.JPG';

const Tentaciones: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  
  const mapUrl = "https://maps.app.goo.gl/dp4dKQenzF8tu2JZ6";
  const address = "Av. Alcalde Fernando Castillo Velazco 6978, La Reina, Santiago";
  
  useEffect(() => {
    // Fetch tentaciones products
    const tentacionesProducts = getTentacionesProducts();
    setProducts(tentacionesProducts);
  }, []);
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-cover bg-center" style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${heroImage})` 
      }}>
        <div className="container mx-auto px-4 relative z-10 text-white text-center">
          <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold mb-1 md:mb-2">
            Tentaciones de la Reina
          </h1>
          <p className="font-geist text-lg md:text-xl italic mb-3 md:mb-4">by Betty Delicateces</p>
          <p className="font-geist text-base md:text-lg max-w-sm md:max-w-2xl mx-auto">
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
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10">
          <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
            <img 
              src={dsc0888} 
              alt="Tentaciones de la Reina - Panadería" 
              className="rounded-lg shadow-sm w-full max-w-xs md:w-80 h-auto"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="font-playfair text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-black">Del horno a tu mesa</h3>
            <p className="font-geist text-gray-700 mb-3 md:mb-4 text-sm md:text-base">
              "Tentaciones de la Reina" es nuestra línea premium de panadería y empanadas artesanales donde cada pieza se elabora con ingredientes seleccionados y métodos tradicionales chilenos.
            </p>
            <p className="font-geist text-gray-700 mb-3 md:mb-4 text-sm md:text-base">
              Utilizamos recetas auténticas, harinas de primera calidad y respetamos los tiempos de preparación para conseguir el sabor y la textura perfectos en cada creación.
            </p>
            <p className="font-geist text-gray-700 text-sm md:text-base">
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
      <section className="py-16 md:py-24 bg-cover bg-center relative" style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://images.pexels.com/photos/4916558/pexels-photo-4916558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')` 
      }}>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">
            Productos por Mayor
          </h2>
          <p className="font-geist text-white text-sm md:text-lg mb-6 md:mb-8 max-w-xl md:max-w-2xl mx-auto">
            Vendemos productos por mayor a cafeterías y locales comerciales. Ofrecemos empanadas y productos de panadería de alta calidad, elaborados artesanalmente y a precios competitivos para su negocio.
          </p>
          <Link
            to="/contacto"
            className="bg-white hover:bg-gray-100 text-black font-geist px-6 md:px-8 py-2 md:py-3 rounded-md transition-colors inline-block text-sm md:text-base"
          >
            Solicitar información
          </Link>
        </div>
      </section>
      
      {/* Map Section */}
      <Section type="white" title="Visítanos" subtitle="Encuéntranos en nuestra tienda">
        <LocationMap 
          address={address}
          mapUrl={mapUrl}
          type="tentaciones"
        />
      </Section>
      
      <WhatsAppButton phoneNumber="+56958797869" type="tentaciones" />
    </>
  );
};

export default Tentaciones;