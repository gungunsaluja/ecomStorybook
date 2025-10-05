import React from 'react';
import './Button.css';

export interface ButtonProps {
  /** Button text */
  children: React.ReactNode;
  /** Button type */
  type?: 'button' | 'submit' | 'reset';
  /** Button variant */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  /** Button size */
  size?: 'small' | 'medium' | 'large';
  /** Whether the button is disabled */
  disabled?: boolean;
  /** Whether the button is loading */
  loading?: boolean;
  /** Button width */
  fullWidth?: boolean;
  /** Custom className */
  className?: string;
  /** Click handler */
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  /** Focus handler */
  onFocus?: (e: React.FocusEvent<HTMLButtonElement>) => void;
  /** Blur handler */
  onBlur?: (e: React.FocusEvent<HTMLButtonElement>) => void;
  /** Button id */
  id?: string;
  /** Button name */
  name?: string;
  /** Button value */
  value?: string;
}

/**
 * Button component with various styles and states
 * Matches the pink "Send Mail" button from the form design
 */
export const Button = ({
  children,
  type = 'button',
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  fullWidth = false,
  className = '',
  onClick,
  onFocus,
  onBlur,
  id,
  name,
  value,
}: ButtonProps) => {
  const buttonClasses = [
    'button',
    `button--${variant}`,
    `button--${size}`,
    fullWidth && 'button--full-width',
    disabled && 'button--disabled',
    loading && 'button--loading',
    className,
  ].filter(Boolean).join(' ');

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled && !loading && onClick) {
      onClick(e);
    }
  };

  const handleFocus = (e: React.FocusEvent<HTMLButtonElement>) => {
    if (onFocus) {
      onFocus(e);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLButtonElement>) => {
    if (onBlur) {
      onBlur(e);
    }
  };

  return (
    <button
      id={id}
      name={name}
      value={value}
      type={type}
      className={buttonClasses}
      disabled={disabled || loading}
      onClick={handleClick}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      {loading && <span className="button__spinner" />}
      <span className={loading ? 'button__text--loading' : 'button__text'}>
        {children}
      </span>
    </button>
  );
};

export default Button;

