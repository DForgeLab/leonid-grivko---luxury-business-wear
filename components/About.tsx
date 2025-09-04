import React from 'react';
import Button from './ui/Button';
import CheckIcon from './icons/CheckIcon';

type AboutProps = {
  onCTAClick: () => void;
};

const About: React.FC<AboutProps> = ({ onCTAClick }) => {
  const features = [
    "Собственное производство в Москве — контроль качества на каждом этапе",
    "Ткани от лучших фабрик Италии и Великобритании",
    "Каждый костюм проходит 14 этапов контроля",
    "Размерная сетка, созданная специально для российских женщин"
  ];

  return (
    <section className="py-24 md:py-28 bg-background fade-in-section">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
          <div className="lg:w-1/2 stagger-child">
             <img 
              src="https://static.tildacdn.com/tild3736-3739-4035-a231-656635303661/1D0BFD0BBD0B0D182D18.png"
              alt="Леонид Гривко"
              className="rounded-lg shadow-2xl w-full h-auto object-cover"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight stagger-child">
              LEONID GRIVKO: где рождается русский luxury
            </h2>
            <p className="text-xl sm:text-2xl font-semibold text-textSecondary mb-6 stagger-child">
              Мы не просто продаем одежду — создаем инструменты для вашего карьерного роста.
            </p>
            <p className="text-textSecondary text-lg mb-8 leading-relaxed stagger-child">
              Основатель бренда Леонид Гривко — дизайнер и основатель Дома Моды «LEONID GRIVKO», создатель мастерской по пошиву мужских костюмов IMPERO. Наш подход сочетает кутюрные техники с пониманием реальных потребностей современных деловых женщин.
            </p>
            <div className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start stagger-child">
                  <CheckIcon className="w-6 h-6 text-primary mr-4 mt-1 flex-shrink-0" />
                  <p className="text-lg text-textSecondary">{feature}</p>
                </div>
              ))}
            </div>
            <div className="stagger-child">
                <Button size="lg" onClick={onCTAClick}>Узнать больше о нашем производстве</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;