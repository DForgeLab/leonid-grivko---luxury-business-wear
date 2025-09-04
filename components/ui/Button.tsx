import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'outline-white';
  size?: 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
};

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  type = 'button' 
}) => {
  const baseStyles = 'font-bold rounded-md transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-offset-background relative overflow-hidden group tracking-wide transform hover:-translate-y-px';
  
  const variantStyles = {
    primary: 'bg-primary text-white hover:brightness-110 focus:ring-primary/50',
    secondary: 'bg-background text-primary hover:bg-background/90 focus:ring-primary/30',
    outline: 'bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary/50',
    'outline-white': 'bg-transparent border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm focus:ring-white/50',
  };

  const sizeStyles = {
    md: 'py-3 px-6 text-base',
    lg: 'py-4 px-8 text-lg',
  };
  
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default Button;