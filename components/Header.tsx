import React from 'react';
import Button from './ui/Button';

type HeaderProps = {
  onCTAClick: () => void;
};

const Header: React.FC<HeaderProps> = ({ onCTAClick }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/80 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold tracking-wider">LEONID GRIVKO</h1>
        <div className="hidden md:block">
            <Button onClick={onCTAClick}>Получить подборку</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;