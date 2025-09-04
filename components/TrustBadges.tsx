import React from 'react';

const TrustBadges: React.FC = () => {
  const logos = [
    { name: "Сбербанк", src: "https://picsum.photos/150/50?random=1", alt: "Сбербанк логотип" },
    { name: "Газпромбанк", src: "https://picsum.photos/150/50?random=2", alt: "Газпромбанк логотип" },
    { name: "Яндекс", src: "https://picsum.photos/150/50?random=3", alt: "Яндекс логотип" },
    { name: "McKinsey", src: "https://picsum.photos/150/50?random=4", alt: "McKinsey & Company логотип" },
    { name: "PwC", src: "https://picsum.photos/150/50?random=5", alt: "PwC логотип" },
  ];

  return (
    <section className="py-16 md:py-24 bg-white fade-in-section">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Почему LEONID GRIVKO доверяют топ-менеджеры 120+ компаний Москвы
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-12">
          Нас выбирают те, кому нельзя ошибиться с имиджем
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 mb-12">
          {logos.map(logo => (
            <img key={logo.name} src={logo.src} alt={logo.alt} className="h-10 object-contain grayscale opacity-70" />
          ))}
        </div>
        <div className="max-w-3xl mx-auto bg-background p-8 rounded-lg shadow-md">
          <p className="text-xl italic text-gray-800">
            "Мы сотрудничаем с LEONID GRIVKO как с единственным поставщиком деловой одежды для наших руководителей. Качество и внимание к деталям соответствуют нашим стандартам."
          </p>
          <p className="mt-4 font-semibold text-primary">— HR-директор международного холдинга</p>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;