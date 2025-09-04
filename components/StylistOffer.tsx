import React from 'react';
import Button from './ui/Button';

const StylistOffer: React.FC = () => {
    return (
        <section className="py-16 md:py-24 bg-background fade-in-section">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">
                            Бесплатная консультация стилиста при заказе от 1 образа
                        </h2>
                        <p className="text-lg font-semibold text-gray-800 mb-6">
                            Получите профессиональные советы от эксперта, который работает с топ-менеджерами
                        </p>
                        <p className="text-gray-700 mb-6 leading-relaxed">
                            Наш стилист проведет 45-минутную консультацию, где:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
                            <li>Проанализирует ваш цветотип и тип фигуры</li>
                            <li>Подберет базовые вещи для вашего гардероба</li>
                            <li>Научит комбинировать образы для разных типов встреч</li>
                            <li>Даст рекомендации по уходу за одеждой</li>
                        </ul>
                        <Button size="lg">Забронировать консультацию</Button>
                    </div>
                    <div className="lg:w-1/2">
                        <img 
                            src="https://optim.tildacdn.com/tild3730-3433-4531-a435-616230613866/-/format/webp/99.png" 
                            alt="Стилист консультирует клиента" 
                            className="rounded-lg shadow-2xl w-full h-auto object-cover" 
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StylistOffer;