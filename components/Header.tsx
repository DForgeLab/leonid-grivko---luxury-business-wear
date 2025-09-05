import React, { useState, useEffect } from 'react';
import Button from './ui/Button';
import WhatsappIcon from './icons/WhatsappIcon';
import TelegramIcon from './icons/TelegramIcon';
import PhoneIcon from './icons/PhoneIcon';

type HeaderProps = {
  onCTAClick: () => void;
};

const Header: React.FC<HeaderProps> = ({ onCTAClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-lg border-b border-white/10 shadow-md' : 'bg-transparent pt-4'}`}>
      <div className="container mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        <h1 
          className="text-lg sm:text-2xl font-bold tracking-wider font-serif text-textOnDark"
          style={{textShadow: !isScrolled ? '0 1px 4px rgba(0,0,0,0.5)' : 'none'}}
        >
          LEONID GRIVKO
        </h1>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <a href="tel:+74951234567" className="text-sm font-medium text-textOnDark hover:text-primary transition-colors whitespace-nowrap">+7 (495) 123-45-67</a>
          <div className="flex items-center gap-4">
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-textOnDark hover:text-primary transition-colors">
                  <WhatsappIcon className="w-6 h-6"/>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="text-textOnDark hover:text-primary transition-colors">
                  <TelegramIcon className="w-6 h-6"/>
              </a>
          </div>
          <Button onClick={onCTAClick} variant="outline" size="sm">Получить подборку</Button>
        </div>

        {/* Mobile Nav */}
        <div className="flex md:hidden items-center gap-3">
            <a href="tel:+74951234567" aria-label="Позвонить" className="text-textOnDark hover:text-primary transition-colors p-2">
                <PhoneIcon className="w-6 h-6"/>
            </a>
            <Button onClick={onCTAClick} variant="outline" size="sm" className="!py-2 !px-4 whitespace-nowrap">
                Получить подборку
            </Button>
        </div>

      </div>
    </header>
  );
};

export default Header;