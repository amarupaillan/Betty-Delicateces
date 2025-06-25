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
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.pexels.com/photos/1070946/pexels-photo-1070946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" 
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
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <img 
              src="https://images.pexels.com/photos/2383871/pexels-photo-2383871.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Tentaciones de la Reina - Panadería" 
              className="rounded-lg shadow-sm w-full h-auto"
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
      
      {/* Gift Sets Section */}
      <Section 
        title="Sets para Compartir" 
        subtitle="Perfectos para reuniones y celebraciones"
        type="white"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
            <img 
              src="https://images.pexels.com/photos/1855214/pexels-photo-1855214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Set Desayuno" 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-playfair text-xl font-semibold mb-2 text-black">Set Desayuno</h3>
              <p className="font-geist text-gray-700 mb-4">
                Una selección de panes artesanos y bollería para empezar el día con energía.
              </p>
              <p className="font-medium text-brand-pink mb-4">Desde $10.000 CLP</p>
              <a 
                href="/contacto" 
                className="inline-block bg-black hover:bg-black/80 text-white font-geist px-4 py-2 rounded-md transition-colors text-sm"
              >
                Más información
              </a>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
            <img 
              src="https://images.pexels.com/photos/7996366/pexels-photo-7996366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Set Empanadas" 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-playfair text-xl font-semibold mb-2 text-black">Set Empanadas</h3>
              <p className="font-geist text-gray-700 mb-4">
                Surtido de empanadas variadas y mini pasteles para compartir en familia o con amigos.
              </p>
              <p className="font-medium text-brand-pink mb-4">Desde $15.000 CLP</p>
              <a 
                href="/contacto" 
                className="inline-block bg-black hover:bg-black/80 text-white font-geist px-4 py-2 rounded-md transition-colors text-sm"
              >
                Más información
              </a>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
            <img 
              src="https://images.pexels.com/photos/1756062/pexels-photo-1756062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Set Especial" 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-playfair text-xl font-semibold mb-2 text-black">Set Especial</h3>
              <p className="font-geist text-gray-700 mb-4">
                Crea tu propio surtido con tus empanadas y productos favoritos para cualquier ocasión.
              </p>
              <p className="font-medium text-brand-pink mb-4">Precio a consultar</p>
              <a 
                href="/contacto" 
                className="inline-block bg-black hover:bg-black/80 text-white font-geist px-4 py-2 rounded-md transition-colors text-sm"
              >
                Solicitar presupuesto
              </a>
            </div>
          </div>
        </div>
      </Section>
      
      {/* CTA Section */}
      <section className="py-24 bg-cover bg-center relative" style={{ 
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.pexels.com/photos/4916558/pexels-photo-4916558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" 
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
      
      <WhatsAppButton phoneNumber="600123456" type="tentaciones" />
    </>
  );
};

export default Tentaciones;