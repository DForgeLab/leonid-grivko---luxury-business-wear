import React from 'react';
import Button from './ui/Button';

const ProductShowcase: React.FC = () => {
  const products = [
    { src: "https://static.tildacdn.com/tild6633-3562-4333-b266-613138303736/1D0B6D0B0D0BAD0B5D18.png", alt: "Каталожная съемка 1" },
    { src: "https://static.tildacdn.com/tild3132-3336-4731-a661-393238643862/1D0B6D0B0D0BAD0B5D18.png", alt: "Каталожная съемка 2" },
    { src: "https://static.tildacdn.com/tild3536-6130-4330-a139-636635303264/1D0B1D180D18ED0BAD0B.png", alt: "Каталожная съемка 3" },
    { src: "https://static.tildacdn.com/tild3736-3739-4035-a231-656635303661/1D0BFD0BBD0B0D182D18.png", alt: "Каталожная съемка 4" }
  ];

  return (
    <section className="py-16 md:py-24 bg-white fade-in-section">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          6 must-have образов для деловой женщины Москвы
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-700 mb-12">
          Только те вещи, которые действительно работают на ваш успех. Каждый образ создан с учетом специфики московских офисов и переговоров. Мы отказались от 200+ эскизов, чтобы оставить только те, что прошли тест в реальных условиях.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {products.map((product, index) => (
            <div key={index} className="group overflow-hidden rounded-lg shadow-lg">
              <img 
                src={product.src} 
                alt={product.alt} 
                className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-110" 
              />
            </div>
          ))}
        </div>
        <Button size="lg">Посмотреть детали каждого образа</Button>
      </div>
    </section>
  );
};

export default ProductShowcase;