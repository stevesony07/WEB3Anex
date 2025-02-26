import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  type?: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  type = 'primary', 
  onClick,
  disabled = false
}) => {
  return (
    <button 
      className={`cyber-button ${type}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}; 