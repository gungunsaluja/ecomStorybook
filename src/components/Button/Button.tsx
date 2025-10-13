import React from 'react';
import { ButtonProps } from './types';
import clsx from 'clsx';

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', onClick, height, width, text, color, textColor, className, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';

    const variantStyles = {
      primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
      secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
    };

    const customStyle: React.CSSProperties | undefined = color || textColor ? {
      backgroundColor: color,
      color: textColor,
    } : undefined;

    return (
      <button
        ref={ref}
        onClick={onClick}
        className={clsx(
          baseStyles,
          !color && variant && variantStyles[variant.toLowerCase() as keyof typeof variantStyles],
          className
        )}
        style={{ height, width, ...customStyle }}
        {...props}
      >
        {text}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
