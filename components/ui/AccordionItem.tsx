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
        aria-expanded={isOpen}
      >
        <h3 className="text-xl sm:text-2xl font-semibold font-sans text-text">{question}</h3>
        <div className="flex-shrink-0 ml-4 w-6 h-6 relative">
           <span className={`absolute h-0.5 w-4 bg-primary top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}></span>
           <span className={`absolute h-0.5 w-4 bg-primary top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 rotate-90`}></span>
        </div>
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