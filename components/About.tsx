import React from 'react';
import Button from './ui/Button';
import CheckIcon from './icons/CheckIcon';

const About: React.FC = () => {
  const features = [
    "Собственное производство в Москве — контроль качества на каждом этапе",
    "Ткани от лучших фабрик Италии и Великобритании",
    "Каждый костюм проходит 14 этапов контроля",
    "Размерная сетка, созданная специально для российских женщин"
  ];

  return (
    <section className="py-16 md:py-24 bg-background fade-in-section">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
             <img 
              src="https://static.tildacdn.com/tild3736-3739-4035-a231-656635303661/1D0BFD0BBD0B0D182D18.png"
              alt="Леонид Гривко"
              className="rounded-lg shadow-2xl w-full h-auto object-cover"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              LEONID GRIVKO: где рождается русский luxury для деловых женщин
            </h2>
            <p className="text-lg font-semibold text-gray-800 mb-6">
              Мы не просто продаем одежду — создаем инструменты для вашего карьерного роста.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Основатель бренда Леонид Гривко — дизайнер и основатель Дома Моды «LEONID GRIVKO», создатель мастерской по пошиву мужских костюмов IMPERO. Наш подход сочетает кутюрные техники с пониманием реальных потребностей современных деловых женщин.
            </p>
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <CheckIcon className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <p className="text-lg">{feature}</p>
                </div>
              ))}
            </div>
            <Button size="lg">Узнать больше о нашем производстве</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;