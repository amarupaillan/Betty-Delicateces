import React from 'react';
import Section from '../components/ui/Section';
import ContactForm from '../components/ui/ContactForm';
import LocationMap from '../components/ui/LocationMap';
import WhatsAppButton from '../components/ui/WhatsAppButton';
import { Phone, Mail, Clock, MapPin, Instagram, Facebook, ShoppingBag, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  const mapUrl = "https://maps.app.goo.gl/dp4dKQenzF8tu2JZ6";
  const address = "Av. Alcalde Fernando Castillo Velazco 6978, La Reina, Santiago";
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-cover bg-center" style={{ 
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" 
      }}>
        <div className="container mx-auto px-4 relative z-10 text-white text-center">
          <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            Contacto
          </h1>
          <p className="font-geist text-base md:text-lg max-w-sm md:max-w-2xl mx-auto">
            ¿Tienes alguna pregunta sobre nuestra cafetería y panadería? Estamos aquí para ayudarte
          </p>
        </div>
      </section>
      
      {/* Contact Information */}
      <Section type="white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <h2 className="font-playfair text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-black">Información de contacto</h2>
            
            <div className="space-y-5 md:space-y-6 mb-6 md:mb-8">
              <div className="flex items-start">
                <Phone className="text-brand-pink mr-3 md:mr-4 mt-1 hidden sm:block" size={20} />
                <div>
                  <h3 className="font-playfair font-semibold mb-1 text-black">Teléfono</h3>
                  <a href="tel:+56958797869" className="font-geist text-gray-700 hover:text-black transition-colors text-sm md:text-base">
                    +56 9 5879 7869
                  </a>
                  <p className="font-geist text-gray-600 mt-1 md:mt-2 text-xs md:text-sm">
                    Cualquier consulta, cualquier producto, compra tus productos desde este número. Di qué producto quieres, envía una foto y nosotros te lo llevaremos a la casa. Coordina en este número.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="text-brand-pink mr-3 md:mr-4 mt-1 hidden sm:block" size={20} />
                <div>
                  <h3 className="font-playfair font-semibold mb-1 text-black">Email</h3>
                  <a href="mailto:info@bettydelicateces.com" className="font-geist text-gray-700 hover:text-black transition-colors text-sm md:text-base">
                    info@bettydelicateces.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="text-brand-pink mr-3 md:mr-4 mt-1 hidden sm:block" size={20} />
                <div>
                  <h3 className="font-playfair font-semibold mb-1 text-black">Dirección</h3>
                  <a 
                    href={mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-geist text-gray-700 hover:text-black transition-colors text-sm md:text-base block"
                  >
                    {address}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="text-brand-pink mr-3 md:mr-4 mt-1 hidden sm:block" size={20} />
                <div>
                  <h3 className="font-playfair font-semibold mb-1 text-black">Horario</h3>
                  <ul className="font-geist text-gray-700 space-y-1 text-sm md:text-base">
                    <li>Lunes a sábado: 8:30 - 21:00</li>
                    <li>Domingo: 8:30 - 20:00</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <h3 className="font-playfair text-lg md:text-xl font-semibold mb-3 md:mb-4 text-black">Síguenos y Pide Online</h3>
            <div className="flex flex-wrap gap-3 md:gap-4">
              <a 
                href="https://www.instagram.com/bettydelicateces/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-100 p-2 md:p-3 rounded-md text-gray-700 hover:text-[#E1306C] transition-colors flex items-center"
                aria-label="Instagram"
              >
                <Instagram size={18} />
                <span className="ml-2 text-xs md:text-sm">Instagram</span>
              </a>
              <a 
                href="https://web.facebook.com/bettydelicateces/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-100 p-2 md:p-3 rounded-md text-gray-700 hover:text-[#1877F2] transition-colors flex items-center"
                aria-label="Facebook"
              >
                <Facebook size={18} />
                <span className="ml-2 text-xs md:text-sm">Facebook</span>
              </a>
              <a 
                href="https://www.ubereats.com/store/betty-delicateces/0YuxRRYiQHiKXbAjpGDaAA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-100 p-2 md:p-3 rounded-md text-gray-700 hover:text-[#06C167] transition-colors flex items-center"
                aria-label="Uber Eats"
              >
                <ShoppingBag size={18} />
                <span className="ml-2 text-xs md:text-sm">Uber Eats</span>
              </a>
              <a 
                href="https://www.pedidosya.cl/restaurantes/santiago/betty-delicateces-252f2fa7-8cbb-4265-ae0d-210adeecd5fa-menu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-100 p-2 md:p-3 rounded-md text-gray-700 hover:text-[#FF0000] transition-colors flex items-center"
                aria-label="PedidosYa"
              >
                <ExternalLink size={18} />
                <span className="ml-2 text-xs md:text-sm">PedidosYa</span>
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
        <h2 className="font-playfair text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-black text-center">Nuestra Ubicación</h2>
        <LocationMap 
          address={address}
          mapUrl={mapUrl}
          type="betty"
        />
      </Section>
      
      {/* FAQs Section */}
      <Section 
        title="Preguntas Frecuentes" 
        type="white"
      >
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4 md:space-y-6">
            <div className="border-b border-gray-200 pb-4 md:pb-6">
              <h3 className="font-playfair text-lg md:text-xl font-semibold mb-2 md:mb-3 text-black">¿Cuál es el plazo mínimo para hacer un pedido?</h3>
              <p className="font-geist text-gray-700 text-sm md:text-base">
                Recomendamos realizar los pedidos con al menos 48 horas de antelación. Para pedidos especiales o de gran volumen, es aconsejable contactarnos con una semana de anticipación.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-4 md:pb-6">
              <h3 className="font-playfair text-lg md:text-xl font-semibold mb-2 md:mb-3 text-black">¿Realizan envíos a domicilio?</h3>
              <p className="font-geist text-gray-700 text-sm md:text-base">
                Sí, ofrecemos servicio de entrega a domicilio en Santiago centro. Para otras localidades, consulta disponibilidad y tarifas.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-4 md:pb-6">
              <h3 className="font-playfair text-lg md:text-xl font-semibold mb-2 md:mb-3 text-black">¿Tienen opciones para personas con alergias o intolerancias?</h3>
              <p className="font-geist text-gray-700 text-sm md:text-base">
                Disponemos de opciones sin gluten, sin lactosa y veganas en nuestra cafetería y panadería. Es importante informarnos de cualquier alergia o intolerancia al realizar tu pedido para garantizar un producto adecuado y seguro.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-4 md:pb-6">
              <h3 className="font-playfair text-lg md:text-xl font-semibold mb-2 md:mb-3 text-black">¿Cómo se realiza el pago?</h3>
              <p className="font-geist text-gray-700 text-sm md:text-base">
                Aceptamos pagos en efectivo, tarjeta y transferencia bancaria. Para pedidos personalizados, solicitamos un anticipo del 50% al confirmar el pedido.
              </p>
            </div>
          </div>
        </div>
      </Section>
      
      <WhatsAppButton phoneNumber="+56958797869" type="betty" />
    </>
  );
};

export default Contact;