import React from 'react';
import Button from './ui/Button';

const HowItWorks: React.FC = () => {
  const steps = [
    { number: 1, text: "Проходите тест (возраст, профессия, тип фигуры, основные проблемы)" },
    { number: 2, text: "Получаете персональную подборку из 6 образов от стилиста LEONID GRIVKO" },
    { number: 3, text: "Примеряете одежду у нас в бутике или с курьером (бесплатно)" },
    { number: 4, text: "Создаете гардероб, который работает на ваш успех" }
  ];

  return (
    <section className="py-16 md:py-24 bg-white fade-in-section">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-3xl md:text-5xl font-bold mb-12">
          4 простых шага к идеальному деловому гардеробу
        </h2>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-8">
            {steps.map(step => (
              <div key={step.number} className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl mr-6">
                  {step.number}
                </div>
                <p className="text-lg mt-2">{step.text}</p>
              </div>
            ))}
          </div>
          <div className="lg:w-1/2">
            <img 
              src="https://optim.tildacdn.com/tild3732-3431-4232-b963-336234663461/-/format/webp/94.png" 
              alt="Женщина в офисе в одежде Leonid Grivko" 
              className="rounded-lg shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
        <div className="text-center mt-12">
          <Button size="lg">Узнайте, какие образы подойдут именно вам</Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;