import React from 'react';
import Section from '../components/ui/Section';
import ContactForm from '../components/ui/ContactForm';
import LocationMap from '../components/ui/LocationMap';
import WhatsAppButton from '../components/ui/WhatsAppButton';
import { Phone, Mail, Clock, MapPin, Instagram, Facebook } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-cover bg-center" style={{ 
        backgroundImage: "url('https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" 
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10 text-white text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            Contacto
          </h1>
          <p className="font-montserrat text-lg max-w-2xl mx-auto">
            Estamos aquí para responder a tus preguntas y ayudarte con tus pedidos
          </p>
        </div>
      </section>
      
      {/* Contact Information */}
      <Section type="betty">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <h2 className="font-playfair text-2xl font-semibold mb-6 text-[#FF69B4]">Ponte en contacto</h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <Phone className="text-[#FF69B4] mr-4 mt-1" size={20} />
                <div>
                  <h3 className="font-playfair font-semibold mb-1">Teléfono</h3>
                  <a href="tel:+34600123456" className="font-montserrat text-gray-700 hover:text-[#FF69B4] transition-colors">
                    +34 600 123 456
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="text-[#FF69B4] mr-4 mt-1" size={20} />
                <div>
                  <h3 className="font-playfair font-semibold mb-1">Email</h3>
                  <a href="mailto:info@bettydelicateces.com" className="font-montserrat text-gray-700 hover:text-[#FF69B4] transition-colors">
                    info@bettydelicateces.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="text-[#FF69B4] mr-4 mt-1" size={20} />
                <div>
                  <h3 className="font-playfair font-semibold mb-1">Dirección</h3>
                  <address className="font-montserrat text-gray-700 not-italic">
                    Calle Dulzura 123<br />
                    28001 Madrid, España
                  </address>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="text-[#FF69B4] mr-4 mt-1" size={20} />
                <div>
                  <h3 className="font-playfair font-semibold mb-1">Horario</h3>
                  <ul className="font-montserrat text-gray-700 space-y-1">
                    <li>Lunes a Viernes: 9:00 - 19:00</li>
                    <li>Sábados: 10:00 - 14:00</li>
                    <li>Domingos: Cerrado</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <h3 className="font-playfair text-xl font-semibold mb-4 text-[#FF69B4]">Síguenos</h3>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#FFF5F5] p-3 rounded-full text-[#FF69B4] hover:bg-[#FF69B4] hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#FFF5F5] p-3 rounded-full text-[#FF69B4] hover:bg-[#FF69B4] hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <ContactForm type="betty" />
          </div>
        </div>
      </Section>
      
      {/* Map Section */}
      <Section type="betty" className="bg-[#FFF5F5]">
        <h2 className="font-playfair text-2xl font-semibold mb-6 text-[#FF69B4] text-center">Nuestra Ubicación</h2>
        <LocationMap 
          address="Calle Dulzura 123, 28001 Madrid, España" 
          type="betty"
        />
      </Section>
      
      {/* FAQs Section */}
      <Section 
        title="Preguntas Frecuentes" 
        type="betty"
      >
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-playfair text-xl font-semibold mb-3 text-[#FF69B4]">¿Cuál es el plazo mínimo para hacer un pedido?</h3>
              <p className="font-montserrat text-gray-700">
                Recomendamos realizar los pedidos con al menos 48 horas de antelación. Para pedidos especiales o de gran volumen, es aconsejable contactarnos con una semana de anticipación.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-playfair text-xl font-semibold mb-3 text-[#FF69B4]">¿Realizan envíos a domicilio?</h3>
              <p className="font-montserrat text-gray-700">
                Sí, ofrecemos servicio de entrega a domicilio en Madrid capital. Para otras localidades, consulta disponibilidad y tarifas.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-playfair text-xl font-semibold mb-3 text-[#FF69B4]">¿Pueden hacer pasteles para personas con alergias o intolerancias?</h3>
              <p className="font-montserrat text-gray-700">
                Disponemos de opciones sin gluten, sin lactosa y veganas. Es importante informarnos de cualquier alergia o intolerancia al realizar tu pedido para garantizar un producto adecuado y seguro.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-playfair text-xl font-semibold mb-3 text-[#FF69B4]">¿Cómo se realiza el pago?</h3>
              <p className="font-montserrat text-gray-700">
                Aceptamos pagos en efectivo, tarjeta y transferencia bancaria. Para pedidos personalizados, solicitamos un anticipo del 50% al confirmar el pedido.
              </p>
            </div>
          </div>
        </div>
      </Section>
      
      <WhatsAppButton phoneNumber="600123456" type="betty" />
    </>
  );
};

export default Contact;