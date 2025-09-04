import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  size?: 'md' | 'lg';
  className?: string;
  // FIX: Added the native `type` attribute to the button props to allow for `type="submit"`.
  type?: 'button' | 'submit' | 'reset';
};

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  // FIX: Destructure the `type` prop and provide a default value.
  type = 'button' 
}) => {
  const baseStyles = 'font-bold rounded-md shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4';
  
  const variantStyles = {
    primary: 'bg-primary text-white hover:bg-primary/90 focus:ring-primary/50',
    secondary: 'bg-background text-primary hover:bg-background/90 focus:ring-background/50',
  };

  const sizeStyles = {
    md: 'py-3 px-6 text-base',
    lg: 'py-4 px-8 text-lg',
  };

  return (
    <button
      // FIX: Pass the `type` prop to the underlying button element.
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
