import React from 'react';
import Button from './ui/Button';

type ProductShowcaseProps = {
  onCTAClick: () => void;
};

const ProductShowcase: React.FC<ProductShowcaseProps> = ({ onCTAClick }) => {
  const products = [
    { name: "Рубашка с французским манжетом", price: "12.500 ₽", src: "https://static.tildacdn.com/tild6633-3562-4333-b266-613138303736/1D0B6D0B0D0BAD0B5D18.png", alt: "Рубашка с французским манжетом" },
    { name: "Жилет-корсет с юбкой", price: "43.500 ₽", src: "https://static.tildacdn.com/tild3132-3336-4731-a661-393238643862/1D0B6D0B0D0BAD0B5D18.png", alt: "Жилет-корсет с юбкой" },
    { name: "Брюки палаццо", price: "27.600 ₽", src: "https://static.tildacdn.com/tild3536-6130-4330-a139-636635303264/1D0B1D180D18ED0BAD0B.png", alt: "Брюки палаццо" },
    { name: "Жакет с юбкой", price: "55.000 ₽", src: "https://static.tildacdn.com/tild3736-3739-4035-a231-656635303661/1D0BFD0BBD0B0D182D18.png", alt: "Жакет с юбкой" }
  ];

  return (
    <section className="py-20 sm:py-28 md:py-40 bg-backgroundLight text-textOnLight fade-in-section">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-6 stagger-child">
          Это лишь 1% нашего ассортимента
        </h2>
        <p className="text-center max-w-2xl mx-auto text-base sm:text-lg text-textSecondaryOnLight mb-16 sm:mb-20 stagger-child">
          После прохождения теста вы получите персональную подборку из 6 образов, созданных специально для вас.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mb-16 sm:mb-20">
          {products.map((product, index) => (
            <div key={index} className="text-center stagger-child group">
              <div className="bg-surface rounded-2xl overflow-hidden mb-6 aspect-[3/4] transition-transform duration-500 group-hover:scale-105">
                <img src={product.src} alt={product.alt} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg font-semibold text-textOnLight font-sans">{product.name}</h3>
              <p className="text-primary font-bold text-lg">{product.price}</p>
            </div>
          ))}
        </div>
        <div className="text-center stagger-child">
          <Button size="lg" onClick={onCTAClick}>Получить полный каталог</Button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;