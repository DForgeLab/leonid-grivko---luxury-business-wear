import React from 'react';
import Button from './ui/Button';

type GuaranteesProps = {
  onCTAClick: () => void;
};


const Guarantees: React.FC<GuaranteesProps> = ({ onCTAClick }) => {
  const guarantees = [
    { title: "Идеальная посадка", description: "или полный возврат денег" },
    { title: "Сохранение формы 2 года", description: "или бесплатная замена" },
    { title: "Персональный стилист", description: "6 месяцев после покупки" }
  ];

  return (
    <section className="py-24 md:py-32 bg-white fade-in-section">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 stagger-child">
          3 гарантии, которые делают покупку безрисковой
        </h2>
        <p className="max-w-3xl mx-auto text-lg sm:text-xl text-textSecondary mb-16 stagger-child">
          Мы настолько уверены в качестве, что даем гарантии, которых нет у конкурентов
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {guarantees.map((guarantee, index) => (
            <div key={index} className="border border-primary/10 p-10 sm:p-12 rounded-lg text-center bg-background shadow-xl stagger-child">
              <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-2">Гарантия {index + 1}</h3>
              <p className="text-2xl sm:text-3xl font-semibold mb-2 font-serif">{guarantee.title}</p>
              <p className="text-textSecondary text-lg">{guarantee.description}</p>
            </div>
          ))}
        </div>
        <div className="stagger-child">
            <Button size="lg" onClick={onCTAClick}>Посмотреть все гарантии</Button>
        </div>
      </div>
    </section>
  );
};

export default Guarantees;