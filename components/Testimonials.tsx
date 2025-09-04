import React from 'react';
import Button from './ui/Button';

const Testimonials: React.FC = () => {
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
    <section className="py-16 md:py-24 bg-white fade-in-section">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-3xl md:text-5xl font-bold mb-12">
          Как LEONID GRIVKO изменил карьеру наших клиенток
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-background p-8 rounded-lg shadow-lg flex flex-col">
              <p className="text-lg font-semibold text-primary mb-4">"Главная выгода: {testimonial.benefit}"</p>
              <p className="text-gray-700 italic mb-6 flex-grow">"{testimonial.review}"</p>
              <div>
                <p className="font-bold text-lg">{testimonial.name}</p>
                <p className="text-gray-600">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button size="lg">Посмотреть больше историй успеха</Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;