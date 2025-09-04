import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-text text-background py-8">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} LEONID GRIVKO. Все права защищены.</p>
        <p className="text-sm text-gray-400 mt-2">Luxury Business Wear for Women</p>
      </div>
    </footer>
  );
};

export default Footer;
