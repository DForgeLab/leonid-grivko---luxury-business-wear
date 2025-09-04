import React from 'react';
import Button from './ui/Button';
import CheckIcon from './icons/CheckIcon';

type BrandAdvantagesProps = {
  onCTAClick: () => void;
};

const BrandAdvantages: React.FC<BrandAdvantagesProps> = ({ onCTAClick }) => {
  const advantages = [
    "Кутюрный пошив в Москве: 14 дней от заказа до получения, а не месяцы ожидания",
    "Эксклюзивные ткани от лучших европейских производителей, которые держат форму после 50 стирок",
    "Система '3 в 1': один костюм трансформируется в 3 образа для разных типов встреч",
    "Персональный стилист сопровождает вас 6 месяцев после покупки"
  ];

  return (
    <section className="py-24 md:py-28 bg-background fade-in-section">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 stagger-child">
          Почему 92% клиенток возвращаются к LEONID GRIVKO
        </h2>
        <p className="text-lg sm:text-xl text-textSecondary mb-16 stagger-child">
          Мы создаем не просто одежду, а инструмент для вашего карьерного роста
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto text-left mb-16">
          {advantages.map((text, index) => (
            <div key={index} className="flex items-start p-8 sm:p-10 bg-white rounded-lg shadow-xl border border-primary/10 stagger-child">
              <CheckIcon className="w-8 h-8 text-primary mr-5 mt-1 flex-shrink-0" />
              <p className="text-lg text-textSecondary">{text}</p>
            </div>
          ))}
        </div>
        <div className="stagger-child">
            <Button size="lg" onClick={onCTAClick}>Посмотреть как работает система "3 в 1"</Button>
        </div>
      </div>
    </section>
  );
};

export default BrandAdvantages;