import React from 'react';
import Button from './ui/Button';
import CheckIcon from './icons/CheckIcon';

type TestDriveProps = {
  onCTAClick: () => void;
};


const TestDrive: React.FC<TestDriveProps> = ({ onCTAClick }) => {
    const bullets = [
        "Бесплатная доставка с примеркой от курьера в течение 24 часов",
        "Индивидуальная корректировка пошива без доплаты",
        "Гарантия сохранения формы 2 года",
        "Персональный стилист бесплатно покажет, как комбинировать образы"
    ];

    return (
        <section className="py-24 md:py-28 bg-primary text-white fade-in-section">
            <div className="container mx-auto px-4 sm:px-6 text-center">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 stagger-child">
                    Примерьте LEONID GRIVKO без риска: гарантия идеальной посадки
                </h2>
                <p className="max-w-3xl mx-auto text-lg sm:text-xl text-white/90 mb-16 stagger-child">
                    Наша технология виртуальной примерки анализирует 17 параметров вашей фигуры и подбирает размер с точностью 98.7%
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 max-w-5xl mx-auto text-left mb-16">
                    {bullets.map((text, index) => (
                        <div key={index} className="flex items-start stagger-child">
                            <CheckIcon className="w-6 h-6 text-accent mr-4 mt-1 flex-shrink-0" />
                            <p className="text-lg">{text}</p>
                        </div>
                    ))}
                </div>
                <div className="stagger-child">
                    <Button size="lg" variant="secondary" onClick={onCTAClick}>
                        Заказать примерку с гарантией
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default TestDrive;