import React from 'react';
import Button from './ui/Button';
import CheckIcon from './icons/CheckIcon';

type UrgentOfferProps = {
  onCTAClick: () => void;
};


const UrgentOffer: React.FC<UrgentOfferProps> = ({ onCTAClick }) => {
  const benefits = [
    "Эксклюзивные цены для первых 50 клиентов",
    "Бесплатная консультация стилиста (стоимость 15 000 руб.)",
    "Гарантия лучшей цены в luxury-сегменте",
    "Подарок: руководство 'Как выглядеть дорого'"
  ];

  return (
    <section className="py-24 md:py-28 bg-primary text-white fade-in-section">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 stagger-child">
          Получите каталог со скидкой до 60%
        </h2>
        <p className="max-w-3xl mx-auto text-lg sm:text-xl text-white/90 mb-16 stagger-child">
          Сэкономьте до 47% на поставках за счёт индивидуального коммерческого предложения — только до конца месяца.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 max-w-4xl mx-auto text-left mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start stagger-child">
              <CheckIcon className="w-6 h-6 text-accent mr-4 mt-1 flex-shrink-0" />
              <p className="text-lg">{benefit}</p>
            </div>
          ))}
        </div>
        <div className="stagger-child">
            <Button size="lg" variant="secondary" onClick={onCTAClick}>
              Скачать каталог со скидкой
            </Button>
        </div>
      </div>
    </section>
  );
};

export default UrgentOffer;