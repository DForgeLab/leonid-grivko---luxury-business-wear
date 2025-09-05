import React from 'react';
import Button from './ui/Button';

type BrandAdvantagesProps = {
  onCTAClick: () => void;
};

const BrandAdvantages: React.FC<BrandAdvantagesProps> = ({ onCTAClick }) => {
  return (
    <section className="py-20 sm:py-28 md:py-40 bg-background fade-in-section">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 stagger-child font-serif">
                Почему 92% клиенток возвращаются к LEONID GRIVKO
            </h2>
            <p className="text-lg sm:text-xl text-textSecondaryOnDark mb-16 stagger-child">
                Мы создаем не просто одежду, а инструмент для вашего карьерного роста
            </p>
            <div className="stagger-child">
                <Button size="lg" onClick={onCTAClick}>Посмотреть как работает система "3 в 1"</Button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default BrandAdvantages;