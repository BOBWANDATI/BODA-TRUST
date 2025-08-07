import React, { forwardRef } from 'react';
import './Input.css';

const Input = forwardRef(({ 
  type = 'text', 
  placeholder, 
  value, 
  onChange, 
  disabled = false, 
  error = false,
  errorMessage,
  label,
  icon,
  className = '',
  size = 'md',
  variant = 'default',
  ...props 
}, ref) => {
  const inputClass = `input input-${variant} input-${size} ${error ? 'input-error' : ''} ${icon ? 'input-with-icon' : ''} ${className}`.trim();

  return (
    <div className="input-wrapper">
      {label && (
        <label className="input-label">
          {label}
        </label>
      )}
      <div className="input-container">
        {icon && (
          <div className="input-icon">
            {icon}
          </div>
        )}
        <input
          ref={ref}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={inputClass}
          {...props}
        />
      </div>
      {error && errorMessage && (
        <span className="input-error-message">
          {errorMessage}
        </span>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;