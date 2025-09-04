import React from 'react';
import Button from './ui/Button';
import CheckIcon from './icons/CheckIcon';

type FinalCTAProps = {
  onCTAClick: () => void;
};

const FinalCTA: React.FC<FinalCTAProps> = ({ onCTAClick }) => {
  const bullets = [
    "Только до конца месяца: скидка 60% на первый заказ",
    "Бесплатная консультация стилиста (15 000 руб.)",
    "Гарантия идеальной посадки без риска",
    "Экспресс-пошив за 7 дней при заказе сегодня"
  ];

  return (
    <section className="py-24 md:py-28 bg-primary text-white fade-in-section">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 stagger-child">
          Ваша карьера заслуживает идеального гардероба
        </h2>
        <p className="max-w-3xl mx-auto mb-12 text-lg sm:text-xl text-white/90 stagger-child">
          Не теряйте доверие клиентов из-за неправильной одежды. LEONID GRIVKO — первый в России luxury-бренд готовой женской деловой одежды с кутюрным подходом.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 max-w-4xl mx-auto text-left mb-16">
          {bullets.map((text, index) => (
            <div key={index} className="flex items-start stagger-child">
              <CheckIcon className="w-6 h-6 text-accent mr-4 mt-1 flex-shrink-0" />
              <p className="text-lg">{text}</p>
            </div>
          ))}
        </div>
        <div className="stagger-child">
            <Button size="lg" variant="secondary" onClick={onCTAClick}>
              Получить подборку на год<span className="hidden sm:inline"> → Сэкономьте 15 часов в месяц</span>
            </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;