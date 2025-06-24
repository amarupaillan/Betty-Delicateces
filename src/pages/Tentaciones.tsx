import React, { useState, useEffect } from 'react';
import Section from '../components/ui/Section';
import ProductGrid from '../components/ui/ProductGrid';
import WhatsAppButton from '../components/ui/WhatsAppButton';
import { Product } from '../types';
import { getTentacionesProducts } from '../data/products';

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
        backgroundImage: "url('https://images.pexels.com/photos/1070946/pexels-photo-1070946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" 
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10 text-white text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-2">
            Tentaciones de la Reina
          </h1>
          <p className="font-montserrat text-xl italic mb-4">by Betty Delicateces</p>
          <p className="font-montserrat text-lg max-w-2xl mx-auto">
            Nuestra selección de productos artesanales de panadería y empanadas
          </p>
        </div>
      </section>
      
      {/* About Section */}
      <Section 
        title="El Arte de la Panadería" 
        subtitle="Tradición y sabor en cada bocado"
        type="tentaciones"
      >
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <img 
              src="https://images.pexels.com/photos/2383871/pexels-photo-2383871.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Tentaciones de la Reina - Panadería" 
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="font-playfair text-2xl font-semibold mb-4 text-[#8B4513]">Del horno a tu mesa</h3>
            <p className="font-montserrat text-gray-700 mb-4">
              Tentaciones de la Reina es nuestra línea de panadería artesanal donde cada pan, empanada y pieza de bollería se elabora con ingredientes seleccionados y métodos tradicionales.
            </p>
            <p className="font-montserrat text-gray-700 mb-4">
              Utilizamos masa madre natural, harinas de primera calidad y respetamos los tiempos de fermentación lenta para conseguir el sabor y la textura perfectos en cada creación.
            </p>
            <p className="font-montserrat text-gray-700">
              Nuestros panaderos artesanos elaboran diariamente una amplia variedad de panes, empanadas y bollería tradicional, combinando recetas centenarias con toques de innovación.
            </p>
          </div>
        </div>
      </Section>
      
      {/* Products Section */}
      <Section 
        title="Nuestros Productos" 
        subtitle="Descubre nuestra selección de panadería artesanal"
        type="tentaciones"
        className="bg-[#F5DEB3]"
      >
        <ProductGrid products={products} type="tentaciones" />
      </Section>
      
      {/* Gift Sets Section */}
      <Section 
        title="Sets para Compartir" 
        subtitle="Perfectos para reuniones y celebraciones"
        type="tentaciones"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/1855214/pexels-photo-1855214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Set Desayuno" 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-playfair text-xl font-semibold mb-2 text-[#8B4513]">Set Desayuno</h3>
              <p className="font-montserrat text-gray-700 mb-4">
                Una selección de panes artesanos y bollería para empezar el día con energía.
              </p>
              <p className="font-semibold text-[#8B4513] mb-4">Desde 12.95 €</p>
              <a 
                href="/contacto" 
                className="inline-block bg-[#8B4513] hover:bg-[#A0522D] text-white font-montserrat px-4 py-2 rounded-full transition-colors text-sm"
              >
                Más información
              </a>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/7996366/pexels-photo-7996366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Set Merienda" 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-playfair text-xl font-semibold mb-2 text-[#8B4513]">Set Merienda</h3>
              <p className="font-montserrat text-gray-700 mb-4">
                Surtido de empanadas variadas y mini bocadillos para compartir en familia o con amigos.
              </p>
              <p className="font-semibold text-[#8B4513] mb-4">Desde 18.95 €</p>
              <a 
                href="/contacto" 
                className="inline-block bg-[#8B4513] hover:bg-[#A0522D] text-white font-montserrat px-4 py-2 rounded-full transition-colors text-sm"
              >
                Más información
              </a>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/1756062/pexels-photo-1756062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Set Especial" 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-playfair text-xl font-semibold mb-2 text-[#8B4513]">Set Especial</h3>
              <p className="font-montserrat text-gray-700 mb-4">
                Crea tu propio surtido con tus panes y empanadas favoritas para cualquier ocasión.
              </p>
              <p className="font-semibold text-[#8B4513] mb-4">Consultar precio</p>
              <a 
                href="/contacto" 
                className="inline-block bg-[#8B4513] hover:bg-[#A0522D] text-white font-montserrat px-4 py-2 rounded-full transition-colors text-sm"
              >
                Solicitar presupuesto
              </a>
            </div>
          </div>
        </div>
      </Section>
      
      {/* CTA Section */}
      <section className="py-24 bg-cover bg-center relative" style={{ 
        backgroundImage: "url('https://images.pexels.com/photos/4916558/pexels-photo-4916558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" 
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-6">
            Catering para Eventos
          </h2>
          <p className="font-montserrat text-white text-lg mb-8 max-w-2xl mx-auto">
            Ofrecemos servicio de catering con nuestra selección de panes y empanadas para eventos corporativos y celebraciones especiales.
          </p>
          <a
            href="/contacto"
            className="bg-[#8B4513] hover:bg-[#A0522D] text-white font-montserrat px-8 py-3 rounded-full transition-colors inline-block"
          >
            Consultar disponibilidad
          </a>
        </div>
      </section>
      
      <WhatsAppButton phoneNumber="600123456" type="tentaciones" />
    </>
  );
};

export default Tentaciones;