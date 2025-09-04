import React from 'react';

const ProblemStat: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white fade-in-section">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              8 из 10 женщин теряют доверие клиентов из-за неправильного выбора деловой одежды
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Исследование Moscow Business School показало: 72% переговоров проигрываются не из-за компетентности, а из-за непрофессионального вида. Ваша одежда работает за вас, даже когда вы молчите.
            </p>
          </div>
          <div className="lg:w-1/2">
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