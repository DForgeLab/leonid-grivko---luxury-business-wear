import React from 'react';
import Button from './ui/Button';
import CheckIcon from './icons/CheckIcon';

const UrgentOffer: React.FC = () => {
  const benefits = [
    "Эксклюзивные цены для первых 50 клиентов",
    "Бесплатная консультация стилиста (стоимость 15 000 руб.)",
    "Гарантия лучшей цены в luxury-сегменте",
    "Подарок: руководство 'Как выглядеть дорого при бюджете 50 000 руб.'"
  ];

  return (
    <section className="py-16 md:py-24 bg-primary text-white fade-in-section">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Получите каталог + прайс на деловые костюмы со скидкой до 60% — только до конца месяца
        </h2>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/90 mb-12">
          Сэкономьте до 47% на поставках за счёт индивидуального коммерческого предложения
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto text-left mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start">
              <CheckIcon className="w-6 h-6 text-white mr-3 mt-1 flex-shrink-0" />
              <p className="text-lg">{benefit}</p>
            </div>
          ))}
        </div>
        <Button size="lg" variant="secondary">
          Скачать каталог со скидкой
        </Button>
      </div>
    </section>
  );
};

export default UrgentOffer;