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
    <section 
      className="min-h-screen bg-cover bg-center flex items-center pt-24 sm:pt-28 pb-12 text-white" 
      style={{
        backgroundImage: "linear-gradient(to bottom, rgba(26,26,26,0.6) 0%, transparent 25%), linear-gradient(to top, rgba(26,26,26,0.5) 0%, transparent 30%), url('https://optim.tildacdn.com/tild3334-3564-4264-a134-646665666239/-/format/webp/0-min_3.png')"
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 leading-tight stagger-child" style={{textShadow: '0 2px 10px rgba(0,0,0,0.5)'}}>
              Ваша уверенность начинается с идеального силуэта.
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-6 stagger-child" style={{textShadow: '0 2px 8px rgba(0,0,0,0.5)'}}>
              LEONID GRIVKO — первый в России luxury-бренд готовой женской деловой одежды с кутюрным подходом.
            </h2>
            <p className="max-w-3xl mx-auto mb-8 text-base sm:text-lg stagger-child" style={{textShadow: '0 2px 8px rgba(0,0,0,0.5)'}}>
              Получите подборку на год от стилиста + консультацию бесплатно. Только для деловых женщин Москвы, ценящих качество и индивидуальность.
            </p>
            <div className="stagger-child">
                <Button size="lg" variant="secondary" className="mb-12" onClick={onCTAClick}>
                  Ответьте на 4 вопроса — получите подборку
                </Button>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {bullets.map((text, index) => (
            <div key={index} className="flex items-start text-left stagger-child">
              <CheckIcon className="w-6 h-6 text-accent mr-4 mt-1 flex-shrink-0" />
              <p className="text-sm sm:text-base" style={{textShadow: '0 1px 4px rgba(0,0,0,0.5)'}}>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;