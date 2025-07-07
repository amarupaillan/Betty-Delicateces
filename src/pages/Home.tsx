import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Section from '../components/ui/Section';
import ProductGrid from '../components/ui/ProductGrid';
import WhatsAppButton from '../components/ui/WhatsAppButton';
import { Product } from '../types';
import { getFeaturedProducts } from '../data/products';

// Import all photos
import dsc0231 from '../Photos/_DSC0231.JPG';
import dsc0236 from '../Photos/_DSC0236.JPG';
import dsc0240 from '../Photos/_DSC0240.JPG';
import dsc0752 from '../Photos/_DSC0752.JPG';
import dsc0754 from '../Photos/_DSC0754.JPG';
import dsc0755 from '../Photos/_DSC0755.JPG';
import dsc0866 from '../Photos/_DSC0866.JPG';
import dsc0867 from '../Photos/_DSC0867.JPG';
import dsc0871 from '../Photos/_DSC0871.JPG';
import dsc0878 from '../Photos/_DSC0878.JPG';
import dsc0880 from '../Photos/_DSC0880.JPG';
import dsc0883 from '../Photos/_DSC0883.JPG';
import dsc0885 from '../Photos/_DSC0885.JPG';
import dsc0888 from '../Photos/_DSC0888.JPG';
import dsc0895 from '../Photos/_DSC0895.JPG';

const Home: React.FC = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  
  useEffect(() => {
    // Fetch featured products
    const products = getFeaturedProducts(4);
    setFeaturedProducts(products);
    
    // Add window resize listener
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Gallery photos
  const galleryPhotos = [
    { src: dsc0231, alt: 'Betty Delicateces' },
    { src: dsc0236, alt: 'Betty Delicateces' },
    { src: dsc0240, alt: 'Betty Delicateces' },
    { src: dsc0752, alt: 'Betty Delicateces' },
    { src: dsc0754, alt: 'Betty Delicateces' },
    { src: dsc0755, alt: 'Betty Delicateces' },
    { src: dsc0866, alt: 'Betty Delicateces' },
    { src: dsc0867, alt: 'Betty Delicateces' },
    { src: dsc0871, alt: 'Betty Delicateces' },
    { src: dsc0878, alt: 'Betty Delicateces' },
    { src: dsc0880, alt: 'Betty Delicateces' },
    { src: dsc0883, alt: 'Betty Delicateces' },
    { src: dsc0885, alt: 'Betty Delicateces' },
    { src: dsc0888, alt: 'Betty Delicateces' },
    { src: dsc0895, alt: 'Betty Delicateces' },
  ];
  
  const heroImage = isMobile ? dsc0871 : dsc0867;
  
  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative h-[85vh] md:h-screen bg-cover bg-center flex items-center" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${heroImage})`,
          backgroundPosition: isMobile ? 'center center' : 'center center'
        }}
      >
        <div className="container mx-auto px-4 relative z-10 text-white text-center">
          <h1 className="font-playfair text-3xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 animate-fade-in-up">
            Betty Delicateces
          </h1>
          <p className="font-geist text-base md:text-xl mb-6 md:mb-8 max-w-sm md:max-w-2xl mx-auto animate-fade-in-up animation-delay-300">
            Cafetería y panadería artesanal con productos elaborados con los mejores ingredientes
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 animate-fade-in-up animation-delay-600">
            <Link
              to="/productos"
              className="bg-black hover:bg-black/80 text-white font-geist px-5 md:px-6 py-2 md:py-3 rounded-md transition-colors text-sm md:text-base"
            >
              Ver Productos
            </Link>
            <Link
              to="/contacto"
              className="bg-white hover:bg-white/90 text-black font-geist px-5 md:px-6 py-2 md:py-3 rounded-md transition-colors border border-gray-200 text-sm md:text-base"
            >
              Contacto
            </Link>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <Section 
        title="Nuestra Cafetería" 
        subtitle="Desde 2022 ofreciendo los mejores productos de panadería y pastelería"
        type="white"
      >
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
          <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
            <img 
              src={dsc0895} 
              alt="Betty Delicateces Cafetería" 
              className="rounded-lg shadow-sm w-full max-w-xs md:max-w-md h-auto"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="font-playfair text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-black">Pasión por lo artesanal</h3>
            <p className="font-geist text-gray-700 mb-3 md:mb-4 text-sm md:text-base">
              Betty Delicateces es una cafetería y panadería artesanal que nació del sueño de Betty, una apasionada por la gastronomía que comenzó elaborando panes y pasteles para amigos y familiares. Lo que empezó como un hobby pronto se convirtió en un negocio gracias al amor y dedicación puestos en cada creación.
            </p>
            <p className="font-geist text-gray-700 mb-4 md:mb-6 text-sm md:text-base">
              Utilizamos solo ingredientes de la más alta calidad, combinando técnicas tradicionales con toques innovadores para crear experiencias únicas en cada bocado. Nuestro compromiso es ofrecer los mejores productos de panadería y pastelería en un ambiente acogedor.
            </p>
            <Link 
              to="/productos" 
              className="inline-flex items-center font-geist text-black hover:text-gray-700 transition-colors text-sm md:text-base"
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
        <div className="text-center mt-8 md:mt-12">
          <Link
            to="/productos"
            className="bg-black hover:bg-black/80 text-white font-geist px-5 md:px-6 py-2 md:py-3 rounded-md transition-colors inline-flex items-center text-sm md:text-base"
          >
            Ver todos los productos
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </Section>
      
      {/* Photo Gallery */}
      <Section
        title="Nuestra Galería"
        subtitle="Descubre nuestro ambiente y productos en imágenes"
        type="white"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {galleryPhotos.map((photo, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <img 
                src={photo.src} 
                alt={photo.alt} 
                className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </Section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-cover bg-center relative" style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${dsc0754})` 
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
            className="bg-white hover:bg-white/90 text-black font-geist px-6 md:px-8 py-2 md:py-3 rounded-md transition-colors inline-block border border-gray-200 text-sm md:text-base"
          >
            Solicitar información
          </Link>
        </div>
      </section>
      
      <WhatsAppButton phoneNumber="+56958797869" type="betty" />
    </>
  );
};

export default Home;