import React from 'react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
  type: 'betty' | 'tentaciones';
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
  phoneNumber, 
  message = 'Hola, me gustaría obtener más información sobre sus productos.'
}) => {
  // Format phone number to include country code if not already present
  const formattedPhone = phoneNumber.startsWith('+') 
    ? phoneNumber.replace(/\s+/g, '') 
    : `+56${phoneNumber.replace(/\s+/g, '')}`;
  
  const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(message)}`;
  
  const buttonClasses = "fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 rounded-md shadow-lg bg-black text-white transition-transform hover:scale-105";
  
  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={buttonClasses}
      aria-label="Contáctanos por WhatsApp"
    >
      <MessageCircle size={24} fill="currentColor" />
    </a>
  );
};

export default WhatsAppButton;