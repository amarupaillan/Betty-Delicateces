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
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" 
      }}>
        <div className="container mx-auto px-4 relative z-10 text-white text-center">
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in-up">
            Betty Delicateces
          </h1>
          <p className="font-geist text-lg md:text-xl mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-300">
            Cafetería y panadería artesanal con productos elaborados con los mejores ingredientes
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up animation-delay-600">
            <Link
              to="/productos"
              className="bg-brand-pink hover:bg-brand-pink/90 text-white font-geist px-6 py-3 rounded-md transition-colors"
            >
              Ver Productos
            </Link>
            <Link
              to="/contacto"
              className="bg-white hover:bg-gray-100 text-black font-geist px-6 py-3 rounded-md transition-colors"
            >
              Contacto
            </Link>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <Section 
        title="Nuestra Cafetería" 
        subtitle="Desde 2015 ofreciendo los mejores productos de panadería y pastelería"
        type="white"
      >
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <img 
              src="https://images.pexels.com/photos/8477067/pexels-photo-8477067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Betty Delicateces Cafetería" 
              className="rounded-lg shadow-sm w-full h-auto"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="font-playfair text-2xl font-semibold mb-4 text-black">Pasión por lo artesanal</h3>
            <p className="font-geist text-gray-700 mb-4">
              Betty Delicateces es una cafetería y panadería artesanal que nació del sueño de Betty, una apasionada por la gastronomía que comenzó elaborando panes y pasteles para amigos y familiares. Lo que empezó como un hobby pronto se convirtió en un negocio gracias al amor y dedicación puestos en cada creación.
            </p>
            <p className="font-geist text-gray-700 mb-6">
              Utilizamos solo ingredientes de la más alta calidad, combinando técnicas tradicionales con toques innovadores para crear experiencias únicas en cada bocado. Nuestro compromiso es ofrecer los mejores productos de panadería y pastelería en un ambiente acogedor.
            </p>
            <Link 
              to="/productos" 
              className="inline-flex items-center font-geist text-black hover:text-brand-pink transition-colors"
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
        subtitle="Nuestras creaciones más populares de panadería y pastelería"
        type="light"
      >
        <ProductGrid products={featuredProducts} type="betty" />
        <div className="text-center mt-12">
          <Link
            to="/productos"
            className="bg-black hover:bg-black/80 text-white font-geist px-6 py-3 rounded-md transition-colors inline-flex items-center"
          >
            Ver todos los productos
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </Section>
      
      {/* CTA Section */}
      <section className="py-24 bg-cover bg-center relative" style={{ 
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.pexels.com/photos/6487566/pexels-photo-6487566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" 
      }}>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Buscas algo especial para tu evento?
          </h2>
          <p className="font-geist text-white text-lg mb-8 max-w-2xl mx-auto">
            Ofrecemos servicios personalizados de catering, pastelería y panadería para eventos, celebraciones y ocasiones especiales. ¡Contáctanos y hagamos algo único juntos!
          </p>
          <Link
            to="/contacto"
            className="bg-white hover:bg-gray-100 text-black font-geist px-8 py-3 rounded-md transition-colors inline-block"
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