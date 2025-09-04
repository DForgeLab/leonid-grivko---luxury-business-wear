import React from 'react';
import Button from './ui/Button';

type QuizCTAProps = {
  onCTAClick: () => void;
};

const QuizCTA: React.FC<QuizCTAProps> = ({ onCTAClick }) => {
  return (
    <section className="py-16 md:py-24 text-center bg-primary text-white fade-in-section">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Ответьте на 4 вопроса и получите подборку на год — без замеров и примерок
        </h2>
        <p className="max-w-3xl mx-auto mb-8 text-lg md:text-xl text-white/90">
          Наш алгоритм анализирует 17 параметров вашей фигуры и рабочих задач, чтобы создать идеальный гардероб. Проверено на 3 217 женщинах из Москвы.
        </p>
        <Button size="lg" variant="secondary" onClick={onCTAClick}>
          Начать подбор за 60 секунд → Получите 3 образа бесплатно
        </Button>
      </div>
    </section>
  );
};

export default QuizCTA;