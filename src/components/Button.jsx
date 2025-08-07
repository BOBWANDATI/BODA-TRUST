import React from 'react';
import './Button.css';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  disabled = false, 
  className = '',
  type = 'button',
  ...props 
}) => {
  const buttonClass = `btn btn-${variant} btn-${size} ${className} ${disabled ? 'disabled' : ''}`.trim();

  return (
    <button 
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;