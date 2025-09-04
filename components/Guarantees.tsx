import React from 'react';
import Button from './ui/Button';

const Guarantees: React.FC = () => {
  const guarantees = [
    { title: "Идеальная посадка", description: "или полный возврат денег" },
    { title: "Сохранение формы 2 года", description: "или бесплатная замена" },
    { title: "Персональный стилист", description: "6 месяцев после покупки" }
  ];

  return (
    <section className="py-16 md:py-24 bg-white fade-in-section">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          3 гарантии, которые делают покупку в LEONID GRIVKO безрисковой
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-700 mb-12">
          Мы настолько уверены в качестве, что даем гарантии, которых нет у конкурентов
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {guarantees.map((guarantee, index) => (
            <div key={index} className="border-2 border-primary p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-primary mb-2">Гарантия {index + 1}</h3>
              <p className="text-xl font-semibold mb-2">{guarantee.title}</p>
              <p className="text-gray-600">{guarantee.description}</p>
            </div>
          ))}
        </div>
        <Button size="lg">Посмотреть все гарантии</Button>
      </div>
    </section>
  );
};

export default Guarantees;