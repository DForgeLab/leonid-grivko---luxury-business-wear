import React from 'react';

const ProblemStat: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-white fade-in-section">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="lg:w-1/2">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight stagger-child">
              8 из 10 женщин теряют доверие клиентов из-за неправильной одежды
            </h2>
            <p className="text-lg sm:text-xl text-textSecondary leading-relaxed stagger-child">
              Исследование Moscow Business School показало: 72% переговоров проигрываются не из-за компетентности, а из-за непрофессионального вида. Ваша одежда работает за вас, даже когда вы молчите.
            </p>
          </div>
          <div className="lg:w-1/2 stagger-child">
            <img 
              src="https://static.tildacdn.com/tild3430-3138-4263-a438-383135613765/9.png" 
              alt="Две женщины в одежде Leonid Grivko"
              className="rounded-lg shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStat;