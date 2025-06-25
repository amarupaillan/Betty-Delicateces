import React, { ReactNode } from 'react';

interface SectionProps {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  type?: 'white' | 'light';
  fullWidth?: boolean;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ 
  title, 
  subtitle, 
  children, 
  type = 'white', 
  fullWidth = false,
  className = ''
}) => {
  const isWhite = type === 'white';
  
  const sectionClasses = `py-16 ${isWhite ? 'bg-white' : 'bg-gray-50'} ${className}`;
  
  const titleClasses = "font-playfair text-3xl md:text-4xl font-bold mb-3 text-black";
  
  const subtitleClasses = "font-geist text-gray-600 max-w-2xl mx-auto mb-12";
  
  const containerClasses = fullWidth ? '' : 'container mx-auto px-4';
  
  return (
    <section className={sectionClasses}>
      <div className={containerClasses}>
        {title && (
          <div className="text-center mb-10">
            <h2 className={titleClasses}>{title}</h2>
            {subtitle && 
              <p className={subtitleClasses}>
                {subtitle}
              </p>
            }
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;