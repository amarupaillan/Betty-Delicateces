import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface ContactFormProps {
  type: 'betty' | 'tentaciones';
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ type }) => {
  const isBetty = type === 'betty';
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const validateForm = () => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es obligatorio';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'El email es obligatorio';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Formato de email inválido';
    }
    
    if (formData.phone && !/^[0-9+\s()-]{6,15}$/.test(formData.phone)) {
      newErrors.phone = 'Formato de teléfono inválido';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es obligatorio';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user types
    if (errors[name as keyof FormErrors]) {
      setErrors({
        ...errors,
        [name]: undefined
      });
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const inputClasses = "w-full px-4 py-2 border rounded-md font-montserrat focus:outline-none";
  
  const inputFocusClasses = isBetty 
    ? 'focus:border-[#FF69B4] focus:ring-1 focus:ring-[#FF69B4]' 
    : 'focus:border-[#8B4513] focus:ring-1 focus:ring-[#8B4513]';
  
  const buttonClasses = `w-full py-3 px-6 rounded-md font-montserrat font-medium text-white transition-all
    ${isBetty ? 'bg-[#FF69B4] hover:bg-[#FF1493]' : 'bg-[#8B4513] hover:bg-[#A0522D]'}
    ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`;
  
  const errorClasses = "text-red-500 text-sm mt-1 font-montserrat";
  
  const successClasses = `text-center p-4 mb-6 rounded-md font-montserrat
    ${isBetty ? 'bg-pink-100 text-pink-800' : 'bg-amber-100 text-amber-800'}`;
  
  return (
    <div className={`rounded-lg shadow-md p-6 ${isBetty ? 'bg-white' : 'bg-white'}`}>
      {isSuccess && (
        <div className={successClasses}>
          ¡Mensaje enviado correctamente! Nos pondremos en contacto contigo lo antes posible.
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block font-montserrat font-medium mb-2">
            Nombre <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`${inputClasses} ${inputFocusClasses} ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.name && <p className={errorClasses}>{errors.name}</p>}
        </div>
        
        <div className="mb-4">
          <label htmlFor="email" className="block font-montserrat font-medium mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`${inputClasses} ${inputFocusClasses} ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.email && <p className={errorClasses}>{errors.email}</p>}
        </div>
        
        <div className="mb-4">
          <label htmlFor="phone" className="block font-montserrat font-medium mb-2">
            Teléfono
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`${inputClasses} ${inputFocusClasses} ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.phone && <p className={errorClasses}>{errors.phone}</p>}
        </div>
        
        <div className="mb-6">
          <label htmlFor="message" className="block font-montserrat font-medium mb-2">
            Mensaje <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className={`${inputClasses} ${inputFocusClasses} ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.message && <p className={errorClasses}>{errors.message}</p>}
        </div>
        
        <button
          type="submit"
          className={buttonClasses}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-2"></div>
              Enviando...
            </span>
          ) : (
            <span className="flex items-center justify-center">
              <Send size={18} className="mr-2" />
              Enviar mensaje
            </span>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;