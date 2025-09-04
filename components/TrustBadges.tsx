import React from 'react';

const TrustBadges: React.FC = () => {
  const logos = [
    { name: "Сбербанк", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Sber_logo_2020.svg/2560px-Sber_logo_2020.svg.png", alt: "Сбербанк логотип" },
    { name: "Газпромбанк", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Gazprombank_Logo_2020_RUS.svg/2560px-Gazprombank_Logo_2020_RUS.svg.png", alt: "Газпромбанк логотип" },
    { name: "Яндекс", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Yandex_logo_en_2021.svg/1280px-Yandex_logo_en_2021.svg.png", alt: "Яндекс логотип" },
    { name: "McKinsey", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/McKinsey_%26_Company-Logo.svg/2560px-McKinsey_%26_Company-Logo.svg.png", alt: "McKinsey & Company логотип" },
    { name: "PwC", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/PricewaterhouseCoopers_Logo.svg/1280px-PricewaterhouseCoopers_Logo.svg.png", alt: "PwC логотип" },
  ];

  return (
    <section className="py-24 md:py-32 bg-white fade-in-section">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 stagger-child">
          Доверие топ-менеджеров 120+ компаний Москвы
        </h2>
        <p className="text-lg sm:text-xl text-textSecondary mb-16 stagger-child">
          Нас выбирают те, кому нельзя ошибиться с имиджем
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 sm:gap-x-16 gap-y-8 mb-20 stagger-child">
          {logos.map(logo => (
            <img key={logo.name} src={logo.src} alt={logo.alt} className="h-6 sm:h-8 object-contain grayscale opacity-60" />
          ))}
        </div>
        <div className="max-w-3xl mx-auto text-left stagger-child">
          <blockquote className="bg-background p-8 sm:p-10 rounded-lg shadow-lg border-l-4 border-accent">
            <p className="text-xl sm:text-2xl italic text-textSecondary leading-relaxed font-serif">
              "Мы сотрудничаем с LEONID GRIVKO как с единственным поставщиком деловой одежды для наших руководителей. Качество и внимание к деталям соответствуют нашим стандартам."
            </p>
            <footer className="mt-6 font-bold text-lg text-primary">— HR-директор международного холдинга</footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;