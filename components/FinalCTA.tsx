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
    <section className="py-16 md:py-24 bg-primary text-white fade-in-section">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          Ваша карьера заслуживает идеального гардероба
        </h2>
        <p className="max-w-3xl mx-auto mb-8 text-lg md:text-xl text-white/90">
          Не теряйте доверие клиентов из-за неправильной одежды. LEONID GRIVKO — первый в России luxury-бренд готовой женской деловой одежды с кутюрным подходом.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left mb-12">
          {bullets.map((text, index) => (
            <div key={index} className="flex items-start">
              <CheckIcon className="w-6 h-6 text-white mr-3 mt-1 flex-shrink-0" />
              <p className="text-lg">{text}</p>
            </div>
          ))}
        </div>
        <Button size="lg" variant="secondary" onClick={onCTAClick}>
          Ответьте на 4 вопроса и получите подборку на год → Сэкономьте 15 часов в месяц
        </Button>
      </div>
    </section>
  );
};

export default FinalCTA;