import React from 'react';

const TrustBadges: React.FC = () => {
  const logos = [
    { name: "Сбербанк", src: "https://www.fa.ru/upload/constructor/e37/txo7bfn11al3b0k3lqzurizmyopvt0mh/7zbortyl39y4ggrtjp9wrld47g1b7l2w.png", alt: "Сбербанк логотип" },
    { name: "Газпромбанк", src: "https://static.tildacdn.com/tild3339-3365-4538-b963-386466386163/5.png", alt: "Газпромбанк логотип" },
    { name: "Яндекс", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Yandex_official_logo.svg/800px-Yandex_official_logo.svg.png", alt: "Яндекс логотип" },
    { name: "McKinsey", src: "https://www.eui.eu/Content-Types-Assets/Uploads/Partners/mckinsey-global-institute-logo.xd6901e3f.png", alt: "McKinsey & Company логотип" },
    { name: "PwC", src: "https://mgimolawchamp.ru/wp-content/uploads/2024/09/Logo_Tedo_RGB_RUS_BLACK-2048x543.png", alt: "PwC логотип" },
  ];

  return (
    <section className="py-20 sm:py-24 md:py-40 bg-backgroundLight text-textOnLight fade-in-section">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 stagger-child">
          Доверие топ-менеджеров 120+ компаний Москвы
        </h2>
        <p className="text-base sm:text-lg text-textSecondaryOnLight mb-16 sm:mb-20 stagger-child">
          Нас выбирают те, кому нельзя ошибиться с имиджем
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 sm:gap-x-20 gap-y-10 mb-16 sm:mb-24 stagger-child">
          {logos.map(logo => (
            <img key={logo.name} src={logo.src} alt={logo.alt} className="h-7 sm:h-8 object-contain grayscale opacity-70" />
          ))}
        </div>
        <div className="max-w-4xl mx-auto text-left stagger-child">
          <blockquote className="bg-surface p-8 sm:p-10 rounded-2xl border-l-8 border-primary">
            <p className="text-lg sm:text-xl italic text-textSecondaryOnLight leading-relaxed font-serif">
              "Мы сотрудничаем с LEONID GRIVKO как с единственным поставщиком деловой одежды для наших руководителей. Качество и внимание к деталям соответствуют нашим стандартам."
            </p>
            <footer className="mt-8 font-bold text-base text-primary font-sans">— HR-директор международного холдинга</footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;