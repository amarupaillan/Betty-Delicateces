import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Section from '../components/ui/Section';
import ProductGrid from '../components/ui/ProductGrid';
import WhatsAppButton from '../components/ui/WhatsAppButton';
import { Product } from '../types';
import { getFeaturedProducts } from '../data/products';

const Home: React.FC = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    // Fetch featured products
    const products = getFeaturedProducts(4);
    setFeaturedProducts(products);
  }, []);
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen bg-cover bg-center flex items-center" style={{ 
        backgroundImage: "url('https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" 
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="container mx-auto px-4 relative z-10 text-white text-center">
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in-up">
            Betty Delicateces
          </h1>
          <p className="font-montserrat text-lg md:text-xl mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-300">
            Exquisitas delicias artesanales elaboradas con los mejores ingredientes y mucho amor
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up animation-delay-600">
            <Link
              to="/productos"
              className="bg-[#FF69B4] hover:bg-[#FF1493] text-white font-montserrat px-6 py-3 rounded-full transition-colors"
            >
              Ver Productos
            </Link>
            <Link
              to="/tentaciones"
              className="bg-white hover:bg-gray-100 text-[#8B4513] font-montserrat px-6 py-3 rounded-full transition-colors"
            >
              Tentaciones de la Reina
            </Link>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <Section 
        title="Nuestra Historia" 
        subtitle="Desde 2015 creando deliciosas experiencias para momentos especiales"
        type="betty"
      >
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <img 
              src="https://images.pexels.com/photos/8477067/pexels-photo-8477067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Betty Delicateces Historia" 
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="font-playfair text-2xl font-semibold mb-4 text-[#FF69B4]">Pasión por lo artesanal</h3>
            <p className="font-montserrat text-gray-700 mb-4">
              Betty Delicateces nació del sueño de Betty, una apasionada repostera que comenzó elaborando dulces para amigos y familiares. Lo que empezó como un hobby pronto se convirtió en un negocio gracias al amor y dedicación puestos en cada creación.
            </p>
            <p className="font-montserrat text-gray-700 mb-6">
              Utilizamos solo ingredientes de la más alta calidad, combinando técnicas tradicionales con toques innovadores para crear experiencias únicas en cada bocado. Nuestro compromiso es llevar la dulzura a momentos especiales, celebrando la vida a través de la repostería artesanal.
            </p>
            <Link 
              to="/productos" 
              className="inline-flex items-center font-montserrat text-[#FF69B4] hover:text-[#FF1493] transition-colors"
            >
              Descubre nuestros productos
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </Section>
      
      {/* Featured Products */}
      <Section 
        title="Productos Destacados" 
        subtitle="Nuestras creaciones más populares elaboradas con amor"
        type="betty"
        className="bg-[#FFF5F5]"
      >
        <ProductGrid products={featuredProducts} type="betty" />
        <div className="text-center mt-12">
          <Link
            to="/productos"
            className="bg-[#FF69B4] hover:bg-[#FF1493] text-white font-montserrat px-6 py-3 rounded-full transition-colors inline-flex items-center"
          >
            Ver todos los productos
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </Section>
      
      {/* Tentaciones Section */}
      <Section 
        title="Tentaciones de la Reina" 
        subtitle="Descubre nuestra exclusiva línea de chocolates y dulces especiales"
        type="tentaciones"
      >
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          <div className="md:w-1/2">
            <img 
              src="https://images.pexels.com/photos/65882/chocolate-dark-coffee-confiserie-65882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Tentaciones de la Reina" 
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="font-playfair text-2xl font-semibold mb-4 text-[#8B4513]">Una experiencia de lujo</h3>
            <p className="font-montserrat text-gray-700 mb-4">
              Tentaciones de la Reina es nuestra línea premium, donde el chocolate y los ingredientes más exclusivos se convierten en piezas de arte comestible. Cada creación está pensada para deleitar los paladares más exigentes.
            </p>
            <p className="font-montserrat text-gray-700 mb-6">
              Utilizamos chocolate belga de la más alta calidad, frutos secos seleccionados y técnicas artesanales para crear bombones y dulces que son verdaderas joyas gastronómicas, perfectas para regalar o darte un capricho especial.
            </p>
            <Link 
              to="/tentaciones" 
              className="inline-flex items-center font-montserrat text-[#8B4513] hover:text-[#A0522D] transition-colors"
            >
              Descubrir Tentaciones
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </Section>
      
      {/* CTA Section */}
      <section className="py-24 bg-cover bg-center relative" style={{ 
        backgroundImage: "url('https://images.pexels.com/photos/6487566/pexels-photo-6487566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" 
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Buscas algo especial para tu evento?
          </h2>
          <p className="font-montserrat text-white text-lg mb-8 max-w-2xl mx-auto">
            Ofrecemos servicios personalizados para eventos, celebraciones y ocasiones especiales. ¡Contáctanos y hagamos algo único juntos!
          </p>
          <Link
            to="/contacto"
            className="bg-white hover:bg-gray-100 text-[#FF69B4] font-montserrat px-8 py-3 rounded-full transition-colors inline-block"
          >
            Solicitar información
          </Link>
        </div>
      </section>
      
      <WhatsAppButton phoneNumber="600123456" type="betty" />
    </>
  );
};

export default Home;