import React from 'react';
import { Cake } from 'lucide-react';

const Logo: React.FC = () => {
  const logoClasses = "flex items-center";
  const iconClasses = "mr-2 text-betty-brown";
  const titleClasses = "text-xl md:text-2xl font-semibold text-betty-brown font-playfair";
  
  return (
    <div className={logoClasses}>
      <Cake className={iconClasses} size={28} />
      <div>
        <h1 className={titleClasses}>
          Betty Delicateces
        </h1>
      </div>
    </div>
  );
};

export default Logo;