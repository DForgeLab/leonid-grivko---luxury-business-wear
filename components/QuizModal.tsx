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
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const totalQuestions = questions.length;
  
  const handleReset = () => {
    setStep(0);
    setAnswers({});
    setSubmitted(false);
    setSelectedOption(null);
    onClose();
  };
  
  const handleAnswerSelect = (questionId: string, answer: string) => {
    setSelectedOption(answer);
    setTimeout(() => {
        setAnswers(prev => ({ ...prev, [questionId]: answer }));
        if (step < totalQuestions) {
           setStep(s => s + 1);
        }
        setSelectedOption(null);
    }, 300);
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
  
  const progress = Math.round(((step) / (totalQuestions)) * 100);

  return (
    <div className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-2 sm:p-4 animate-fade-in-up" onClick={handleReset}>
      <div className="bg-backgroundLight rounded-lg shadow-2xl w-full max-w-2xl relative p-6 sm:p-8 md:p-10 transform transition-all" onClick={e => e.stopPropagation()}>
        <button onClick={handleReset} aria-label="Закрыть" className="absolute top-4 right-4 text-gray-400 hover:text-text z-10 p-2">
          <XIcon className="w-6 h-6" />
        </button>

        {submitted ? (
          <div className="text-center py-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4 font-serif">Спасибо!</h2>
            <p className="text-lg sm:text-xl text-textSecondary mb-8">Ваша заявка принята. Наш стилист скоро свяжется с вами для обсуждения персональной подборки.</p>
            <Button onClick={handleReset}>Закрыть</Button>
          </div>
        ) : (
          <div>
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                 <p className="text-sm font-semibold text-primary tracking-wider">ШАГ {step + 1} ИЗ {totalQuestions + 1}</p>
                 <p className="text-sm font-bold text-primary">{step === totalQuestions ? 100 : progress}%</p>
              </div>
              <div className="w-full bg-primary/10 rounded-full h-2">
                <div className="bg-primary h-2 rounded-full transition-all duration-300" style={{width: `${step === totalQuestions ? 100 : progress}%`}}></div>
              </div>
            </div>

            {step < totalQuestions && (
              <div className="animate-fade-in-up">
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 font-serif">{questions[step].question}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {questions[step].options.map(option => (
                    <button 
                      key={option} 
                      onClick={() => handleAnswerSelect(questions[step].id, option)}
                      className={`w-full text-left p-4 border-2 rounded-lg hover:bg-primary/5 hover:border-primary focus:border-primary focus:outline-none transition-all duration-200 font-semibold text-lg ${selectedOption === option ? 'bg-primary text-white border-primary' : 'border-primary/20'}`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === totalQuestions && (
              <div className="animate-fade-in-up">
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 font-serif">Получите вашу персональную подборку</h2>
                <p className="text-center text-textSecondary mb-8 text-lg">Оставьте ваши контактные данные, и наш стилист свяжется с вами.</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                   <div>
                       <label htmlFor="name" className="block text-sm font-medium text-textSecondary mb-1">Имя</label>
                       <input type="text" name="name" id="name" required className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary text-lg bg-white" placeholder="Анастасия" />
                   </div>
                   <div>
                       <label htmlFor="phone" className="block text-sm font-medium text-textSecondary mb-1">Телефон</label>
                       <input type="tel" name="phone" id="phone" required className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary text-lg bg-white" placeholder="+7 (999) 123-45-67" />
                   </div>
                   <div>
                       <label htmlFor="email" className="block text-sm font-medium text-textSecondary mb-1">Email (необязательно)</label>
                       <input type="email" name="email" id="email" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary text-lg bg-white" placeholder="example@mail.com" />
                   </div>
                    <Button type="submit" size="lg" className="w-full mt-4 !py-4">Получить подборку</Button>
                </form>
              </div>
            )}
            
            <div className="mt-10 pt-6 border-t border-black/10 flex justify-between items-center h-6">
              {step > 0 && step <= totalQuestions && (
                <button onClick={handleBack} className="text-base font-semibold text-gray-600 hover:text-primary transition-colors flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                    Назад
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizModal;