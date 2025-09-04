import React from 'react';
import Button from './ui/Button';
import CheckIcon from './icons/CheckIcon';

const BrandAdvantages: React.FC = () => {
  const advantages = [
    "Кутюрный пошив в Москве: 14 дней от заказа до получения, а не месяцы ожидания",
    "Эксклюзивные ткани от лучших европейских производителей, которые держат форму после 50 стирок",
    "Система '3 в 1': один костюм трансформируется в 3 образа для разных типов встреч",
    "Персональный стилист сопровождает вас 6 месяцев после покупки"
  ];

  return (
    <section className="py-16 md:py-24 bg-background fade-in-section">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Почему 92% клиенток возвращаются к LEONID GRIVKO после первой покупки
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-12">
          Мы создаем не просто одежду, а инструмент для вашего карьерного роста
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left mb-12">
          {advantages.map((text, index) => (
            <div key={index} className="flex items-start p-6 bg-white rounded-lg shadow-md">
              <CheckIcon className="w-8 h-8 text-primary mr-4 mt-1 flex-shrink-0" />
              <p className="text-lg">{text}</p>
            </div>
          ))}
        </div>
        <Button size="lg">Посмотреть как работает система "3 в 1"</Button>
      </div>
    </section>
  );
};

export default BrandAdvantages;