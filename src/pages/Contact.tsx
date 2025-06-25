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
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" 
      }}>
        <div className="container mx-auto px-4 relative z-10 text-white text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            Contacto
          </h1>
          <p className="font-geist text-lg max-w-2xl mx-auto">
            ¿Tienes alguna pregunta sobre nuestra cafetería y panadería? Estamos aquí para ayudarte
          </p>
        </div>
      </section>
      
      {/* Contact Information */}
      <Section type="white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <h2 className="font-playfair text-2xl font-semibold mb-6 text-black">Información de contacto</h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <Phone className="text-brand-pink mr-4 mt-1" size={20} />
                <div>
                  <h3 className="font-playfair font-semibold mb-1 text-black">Teléfono</h3>
                  <a href="tel:+56600123456" className="font-geist text-gray-700 hover:text-black transition-colors">
                    +56 600 123 456
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="text-brand-pink mr-4 mt-1" size={20} />
                <div>
                  <h3 className="font-playfair font-semibold mb-1 text-black">Email</h3>
                  <a href="mailto:info@bettydelicateces.com" className="font-geist text-gray-700 hover:text-black transition-colors">
                    info@bettydelicateces.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="text-brand-pink mr-4 mt-1" size={20} />
                <div>
                  <h3 className="font-playfair font-semibold mb-1 text-black">Dirección</h3>
                  <address className="font-geist text-gray-700 not-italic">
                    Av. Principal 123<br />
                    Santiago, Chile
                  </address>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="text-brand-pink mr-4 mt-1" size={20} />
                <div>
                  <h3 className="font-playfair font-semibold mb-1 text-black">Horario</h3>
                  <ul className="font-geist text-gray-700 space-y-1">
                    <li>Lunes a Viernes: 9:00 - 19:00</li>
                    <li>Sábados: 10:00 - 14:00</li>
                    <li>Domingos: Cerrado</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <h3 className="font-playfair text-xl font-semibold mb-4 text-black">Síguenos</h3>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-100 p-3 rounded-md text-gray-700 hover:text-brand-pink transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-100 p-3 rounded-md text-gray-700 hover:text-brand-pink transition-colors"
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
      <Section type="light">
        <h2 className="font-playfair text-2xl font-semibold mb-6 text-black text-center">Nuestra Ubicación</h2>
        <LocationMap 
          address="Av. Principal 123, Santiago, Chile" 
          type="betty"
        />
      </Section>
      
      {/* FAQs Section */}
      <Section 
        title="Preguntas Frecuentes" 
        type="white"
      >
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-playfair text-xl font-semibold mb-3 text-black">¿Cuál es el plazo mínimo para hacer un pedido?</h3>
              <p className="font-geist text-gray-700">
                Recomendamos realizar los pedidos con al menos 48 horas de antelación. Para pedidos especiales o de gran volumen, es aconsejable contactarnos con una semana de anticipación.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-playfair text-xl font-semibold mb-3 text-black">¿Realizan envíos a domicilio?</h3>
              <p className="font-geist text-gray-700">
                Sí, ofrecemos servicio de entrega a domicilio en Santiago centro. Para otras localidades, consulta disponibilidad y tarifas.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-playfair text-xl font-semibold mb-3 text-black">¿Tienen opciones para personas con alergias o intolerancias?</h3>
              <p className="font-geist text-gray-700">
                Disponemos de opciones sin gluten, sin lactosa y veganas en nuestra cafetería y panadería. Es importante informarnos de cualquier alergia o intolerancia al realizar tu pedido para garantizar un producto adecuado y seguro.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-playfair text-xl font-semibold mb-3 text-black">¿Cómo se realiza el pago?</h3>
              <p className="font-geist text-gray-700">
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