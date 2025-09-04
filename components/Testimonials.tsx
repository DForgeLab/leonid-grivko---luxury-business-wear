import React from 'react';
import Button from './ui/Button';

type TestimonialsProps = {
  onCTAClick: () => void;
};


const Testimonials: React.FC<TestimonialsProps> = ({ onCTAClick }) => {
  const testimonials = [
    {
      benefit: "Перестала бояться важных встреч. Теперь знаю, что выгляжу на 10 баллов даже после 12-часового рабочего дня.",
      review: "За 3 месяца после покупки костюма 'Директор' заключила контракт на 45 млн. Одежда действительно работает за тебя!",
      name: "Анна, 34",
      title: "руководитель департамента в международном банке",
      link: "#"
    },
    {
      benefit: "Сэкономила 200 тыс. руб. в год на одежде. Один костюм заменяет 5 вещей из масс-маркета.",
      review: "LEONID GRIVKO — первая марка, где я не стираю костюм после каждого ношения. Сохраняет форму идеально!",
      name: "Екатерина, 38",
      title: "владелица юридической фирмы",
      link: "#"
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-white fade-in-section">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-center text-4xl sm:text-5xl md:text-6xl font-bold mb-20 stagger-child">
          Как LEONID GRIVKO изменил карьеру наших клиенток
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-background p-10 sm:p-12 rounded-lg shadow-xl border border-primary/10 flex flex-col stagger-child">
              <p className="text-xl sm:text-2xl font-semibold text-primary mb-4 font-serif leading-snug">"Главная выгода: {testimonial.benefit}"</p>
              <p className="text-textSecondary italic text-lg mb-6 flex-grow">"{testimonial.review}"</p>
              <div>
                <p className="font-bold text-lg text-text">{testimonial.name}</p>
                <p className="text-textSecondary">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center stagger-child">
          <Button size="lg" onClick={onCTAClick}>Посмотреть больше историй успеха</Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;