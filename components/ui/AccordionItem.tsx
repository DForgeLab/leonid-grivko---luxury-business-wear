import React from 'react';

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-black/10">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left py-5 px-2 rounded-md hover:bg-primary/5 transition-colors duration-200"
      >
        <h3 className="text-xl sm:text-2xl font-semibold font-sans text-text">{question}</h3>
        <span className="flex-shrink-0 ml-4">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className={`transform transition-transform duration-300 text-primary ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </span>
      </button>
      <div
        className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <p className="pb-5 px-2 text-textSecondary text-lg leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;