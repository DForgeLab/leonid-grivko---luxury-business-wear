import React from 'react';
import Button from './ui/Button';

type ProductShowcaseProps = {
  onCTAClick: () => void;
};

const ProductShowcase: React.FC<ProductShowcaseProps> = ({ onCTAClick }) => {
  const products = [
    { src: "https://static.tildacdn.com/tild6633-3562-4333-b266-613138303736/1D0B6D0B0D0BAD0B5D18.png", alt: "Каталожная съемка 1" },
    { src: "https://static.tildacdn.com/tild3132-3336-4731-a661-393238643862/1D0B6D0B0D0BAD0B5D18.png", alt: "Каталожная съемка 2" },
    { src: "https://static.tildacdn.com/tild3536-6130-4330-a139-636635303264/1D0B1D180D18ED0BAD0B.png", alt: "Каталожная съемка 3" },
    { src: "https://static.tildacdn.com/tild3736-3739-4035-a231-656635303661/1D0BFD0BBD0B0D182D18.png", alt: "Каталожная съемка 4" }
  ];

  return (
    <section className="py-24 md:py-32 bg-white fade-in-section">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 stagger-child">
          6 must-have образов для деловой женщины Москвы
        </h2>
        <p className="max-w-3xl mx-auto text-lg sm:text-xl text-textSecondary mb-16 stagger-child">
          Только те вещи, которые действительно работают на ваш успех. Каждый образ создан с учетом специфики московских офисов и переговоров. Мы отказались от 200+ эскизов, чтобы оставить только те, что прошли тест в реальных условиях.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16">
          {products.map((product, index) => (
            <div key={index} className="group overflow-hidden rounded-lg shadow-lg stagger-child">
              <img 
                src={product.src} 
                alt={product.alt} 
                className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105" 
              />
            </div>
          ))}
        </div>
        <div className="stagger-child">
            <Button size="lg" onClick={onCTAClick}>Посмотреть детали каждого образа</Button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;