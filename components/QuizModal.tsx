import React, { useState } from 'react';
import Button from './ui/Button';
import XIcon from './icons/XIcon';

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const questions = [
  {
    id: 'age',
    question: 'Ваш возраст?',
    options: ['25-34', '35-44', '45-55', '55+'],
  },
  {
    id: 'profession',
    question: 'Ваша сфера деятельности?',
    options: ['Топ-менеджер', 'Владелец бизнеса', 'Руководитель', 'Консультант'],
  },
  {
    id: 'body_type',
    question: 'Какой тип одежды вы предпочитаете для своей фигуры?',
    options: ['Приталенный силуэт', 'Свободный крой', 'Структурированный', 'Драпированный'],
  },
  {
    id: 'challenge',
    question: 'Ваша главная сложность при подборе делового гардероба?',
    options: ['Поиск идеальной посадки', 'Сочетание статусности и женственности', 'Экономия времени на шоппинг', 'Создание универсальной капсулы'],
  },
];

const QuizModal: React.FC<QuizModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const totalQuestions = questions.length;
  
  const handleReset = () => {
    setStep(0);
    setAnswers({});
    setSubmitted(false);
    onClose();
  };
  
  const handleAnswerSelect = (questionId: string, answer: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
    if (step < totalQuestions) {
       setTimeout(() => setStep(s => s + 1), 300);
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(s => s - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const contactInfo = Object.fromEntries(formData.entries());
    console.log({ answers, contactInfo });
    setSubmitted(true);
  };
  
  if (!isOpen) return null;
  
  const progress = Math.round(((step) / (totalQuestions + 1)) * 100);

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 animate-fade-in-up" onClick={handleReset}>
      <div className="bg-background rounded-lg shadow-2xl w-full max-w-2xl relative p-6 md:p-8 transform transition-all" onClick={e => e.stopPropagation()}>
        <button onClick={handleReset} className="absolute top-4 right-4 text-gray-500 hover:text-text z-10">
          <XIcon className="w-6 h-6" />
        </button>

        {submitted ? (
          <div className="text-center py-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Спасибо!</h2>
            <p className="text-lg mb-6">Ваша заявка принята. Наш стилист скоро свяжется с вами для обсуждения персональной подборки.</p>
            <Button onClick={handleReset}>Закрыть</Button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                 <p className="text-sm font-semibold text-primary">Шаг {step + 1} из {totalQuestions + 1}</p>
                 <p className="text-sm font-semibold text-primary">{progress}%</p>
              </div>
              <div className="w-full bg-gray-300 rounded-full h-2">
                <div className="bg-primary h-2 rounded-full transition-all duration-300" style={{width: `${progress}%`}}></div>
              </div>
            </div>

            {step < totalQuestions && (
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">{questions[step].question}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {questions[step].options.map(option => (
                    <button 
                      key={option} 
                      onClick={() => handleAnswerSelect(questions[step].id, option)}
                      className="w-full text-left p-4 border-2 border-primary/20 rounded-lg hover:bg-primary/10 hover:border-primary transition-all duration-300 font-semibold"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === totalQuestions && (
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Получите вашу персональную подборку</h2>
                <p className="text-center text-gray-600 mb-8">Оставьте ваши контактные данные, и наш стилист свяжется с вами.</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                   <div>
                       <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Имя</label>
                       <input type="text" name="name" id="name" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary" />
                   </div>
                   <div>
                       <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Телефон</label>
                       <input type="tel" name="phone" id="phone" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary" />
                   </div>
                   <div>
                       <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email (необязательно)</label>
                       <input type="email" name="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary" />
                   </div>
                    <Button type="submit" size="lg" className="w-full">Получить подборку</Button>
                </form>
              </div>
            )}
            
            <div className="mt-8 pt-4 border-t border-gray-200 flex justify-between items-center">
              {step > 0 ? (
                <button onClick={handleBack} className="text-sm font-semibold text-gray-600 hover:text-primary">&larr; Назад</button>
              ) : <div></div>}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizModal;
