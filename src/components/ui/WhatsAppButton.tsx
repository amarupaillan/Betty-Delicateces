import React, { useState } from 'react';
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
  const [showTooltip, setShowTooltip] = useState(false);
  
  // Format phone number to include country code if not already present
  const formattedPhone = phoneNumber.startsWith('+') 
    ? phoneNumber.replace(/\s+/g, '') 
    : `+56${phoneNumber.replace(/\s+/g, '')}`;
  
  const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(message)}`;
  
  const buttonClasses = "fixed bottom-6 right-6 z-40 flex items-center justify-center w-16 h-16 rounded-full shadow-lg bg-green-500 text-white transition-all hover:scale-110 hover:bg-green-600 animate-pulse";
  
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Tooltip/message bubble */}
      <div 
        className={`bg-white rounded-lg p-3 mb-3 shadow-lg max-w-[200px] transform transition-all duration-300 ${
          showTooltip ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
        } relative`}
      >
        <div className="text-sm font-medium text-gray-800">
          Aquí puedes hacer cualquier pedido y cualquier consulta
        </div>
        {/* Tooltip arrow */}
        <div className="absolute bottom-[-6px] right-6 w-3 h-3 bg-white transform rotate-45"></div>
      </div>
      
      {/* WhatsApp button */}
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={buttonClasses}
      aria-label="Contáctanos por WhatsApp"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onClick={() => setShowTooltip(false)}
    >
        <MessageCircle size={28} fill="white" />
    </a>
    </div>
  );
};

export default WhatsAppButton;