import React from 'react';
import './Input.css';

export interface InputProps {
  /** Input type */
  type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'search';
  /** Input placeholder text */
  placeholder?: string;
  /** Input value */
  value?: string;
  /** Input label */
  label?: string;
  /** Whether the input is required */
  required?: boolean;
  /** Whether the input is disabled */
  disabled?: boolean;
  /** Input size */
  size?: 'small' | 'medium' | 'large';
  /** Input variant */
  variant?: 'default' | 'dark' | 'light';
  /** Error message */
  error?: string;
  /** Success message */
  success?: string;
  /** Helper text */
  helperText?: string;
  /** Input name */
  name?: string;
  /** Input id */
  id?: string;
  /** Custom className */
  className?: string;
  /** Change handler */
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  /** Focus handler */
  onFocus?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  /** Blur handler */
  onBlur?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  /** Whether this is a textarea */
  multiline?: boolean;
  /** Number of rows for textarea */
  rows?: number;
}

/**
 * Input component for forms with various types and styling options
 * Supports both single-line inputs and textareas
 */
export const Input = ({
  type = 'text',
  placeholder,
  value,
  label,
  required = false,
  disabled = false,
  size = 'medium',
  variant = 'default',
  error,
  success,
  helperText,
  name,
  id,
  className = '',
  onChange,
  onFocus,
  onBlur,
  multiline = false,
  rows = 4,
}: InputProps) => {
  const inputId = id || name || `input-${Math.random().toString(36).substr(2, 9)}`;
  
  const inputClasses = [
    'input',
    `input--${size}`,
    `input--${variant}`,
    error && 'input--error',
    success && 'input--success',
    disabled && 'input--disabled',
    className,
  ].filter(Boolean).join(' ');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (onChange) {
      onChange(e);
    }
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (onFocus) {
      onFocus(e);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (onBlur) {
      onBlur(e);
    }
  };

  return (
    <div className="input__wrapper">
      {label && (
        <label htmlFor={inputId} className="input__label">
          {label}
          {required && <span className="input__required">*</span>}
        </label>
      )}
      
      {multiline ? (
        <textarea
          id={inputId}
          name={name}
          className={inputClasses}
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          rows={rows}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      ) : (
        <input
          id={inputId}
          type={type}
          name={name}
          className={inputClasses}
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      )}
      
      {error && <span className="input__error-message">{error}</span>}
      {success && <span className="input__success-message">{success}</span>}
      {helperText && !error && !success && (
        <span className="input__helper-text">{helperText}</span>
      )}
    </div>
  );
};

export default Input;

