import React, { ReactNode } from 'react';

interface SectionProps {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  type?: 'primary' | 'secondary';
  fullWidth?: boolean;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ 
  title, 
  subtitle, 
  children, 
  type = 'primary', 
  fullWidth = false,
  className = ''
}) => {
  const isPrimary = type === 'primary';
  
  const sectionClasses = `py-20 ${isPrimary ? 'bg-white' : 'bg-betty-cream'} ${className}`;
  
  const titleClasses = `font-playfair text-3xl md:text-4xl font-bold mb-4 text-betty-brown`;
  
  const subtitleClasses = "font-sans text-gray-600 max-w-2xl mx-auto mb-16";
  
  const containerClasses = fullWidth ? '' : 'container mx-auto px-4';
  
  return (
    <section className={sectionClasses}>
      <div className={containerClasses}>
        {title && (
          <div className="text-center mb-12">
            <h2 className={titleClasses}>{title}</h2>
            {subtitle && 
              <p className={subtitleClasses}>
                {subtitle}
              </p>
            }
            <div className="w-24 h-1 bg-betty-brown mx-auto mt-4 opacity-75"></div>
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;