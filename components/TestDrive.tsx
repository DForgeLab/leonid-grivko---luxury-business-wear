import React from 'react';
import Button from './ui/Button';
import CheckIcon from './icons/CheckIcon';

const TestDrive: React.FC = () => {
    const bullets = [
        "Бесплатная доставка с примеркой от курьера в течение 24 часов",
        "Индивидуальная корректировка пошива без доплаты",
        "Гарантия сохранения формы 2 года",
        "Персональный стилист бесплатно покажет, как комбинировать образы"
    ];

    return (
        <section className="py-16 md:py-24 bg-primary text-white fade-in-section">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                    Примерьте LEONID GRIVKO без риска: гарантия идеальной посадки или полный возврат
                </h2>
                <p className="max-w-3xl mx-auto text-lg md:text-xl text-white/90 mb-12">
                    Наша технология виртуальной примерки анализирует 17 параметров вашей фигуры и подбирает размер с точностью 98.7%
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left mb-12">
                    {bullets.map((text, index) => (
                        <div key={index} className="flex items-start">
                            <CheckIcon className="w-6 h-6 text-white mr-3 mt-1 flex-shrink-0" />
                            <p className="text-lg">{text}</p>
                        </div>
                    ))}
                </div>
                <Button size="lg" variant="secondary">
                    Заказать примерку с гарантией идеальной посадки
                </Button>
            </div>
        </section>
    );
};

export default TestDrive;