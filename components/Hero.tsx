import React from 'react';
import Button from './ui/Button';
import CheckIcon from './icons/CheckIcon';

type HeroProps = {
  onCTAClick: () => void;
};

const Hero: React.FC<HeroProps> = ({ onCTAClick }) => {
  const bullets = [
    "Индивидуальный подход: 6 образов, созданных под ваш тип фигуры и график",
    "Экономия 15 часов в месяц: больше не ищете одежду, которая сидит идеально",
    "Гарантия качества: ткани из Европы, пошив в Москве за 14 дней",
    "Персональный стилист в подарок: советы по комбинированию образов"
  ];

  return (
    <section className="min-h-screen bg-cover bg-center flex items-center pt-24 pb-12" style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('https://optim.tildacdn.com/tild3334-3564-4264-a134-646665666239/-/format/webp/0-min_3.png')"}}>
      <div className="container mx-auto px-6 text-center bg-background/80 backdrop-blur-sm rounded-lg py-12 md:py-20">
        <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight">
          Ваша уверенность начинается с идеального силуэта.
        </h1>
        <h2 className="text-lg md:text-2xl font-bold text-primary mb-6">
          LEONID GRIVKO — первый в России luxury-бренд готовой женской деловой одежды с кутюрным подходом.
        </h2>
        <p className="max-w-3xl mx-auto mb-8 text-base md:text-lg">
          Получите подборку на год от стилиста + консультацию бесплатно. Только для деловых женщин Москвы, ценящих качество и индивидуальность.
        </p>
        <Button size="lg" className="mb-12" onClick={onCTAClick}>
          Ответьте на 4 вопроса — получите персональную подборку
        </Button>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {bullets.map((text, index) => (
            <div key={index} className="flex items-start text-left p-4 bg-white/50 rounded-md shadow-sm">
              <CheckIcon className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
              <p className="text-sm">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;