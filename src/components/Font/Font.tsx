import React from 'react';
import { typography } from '../../tokens';
import { TypographyKey, FontWeight, FontSize } from '../../types';
import { cn } from '../../lib/utils';

export interface FontProps {
  /** The font variant to display */
  variant: TypographyKey;
  /** Whether to show the font name */
  showName?: boolean;
  /** Whether to show the description */
  showDescription?: boolean;
  /** Custom text to display */
  displayText?: string;
  /** Font weight to display */
  weight?: FontWeight;
  /** Font size */
  fontSize?: FontSize;
}

/**
 * Font component for displaying typography examples in the design system
 */
export const Font = ({
  variant,
  showName = true,
  showDescription = true,
  displayText = 'Aa',
  weight = 'regular',
  fontSize = 'small',
}: FontProps) => {
  const fontConfig = typography[variant];
  const fontName = fontConfig.name;
  const fontDescription = fontConfig.description;
  // Font family classes using standard Tailwind classes
  const fontFamilyClasses = {
    josefinSans: 'font-josefin-sans',
    lato: 'font-lato',
  };

  // Font weight classes using standard Tailwind classes
  const fontWeightClasses = {
    light: 'font-light',
    regular: 'font-normal',
    medium: 'font-medium',
    semiBold: 'font-semibold',
    bold: 'font-bold',
  };

  // Size variants for display text
  const sizeClasses = {
    small: 'text-3xl md:text-2xl',
    medium: 'text-5xl md:text-4xl',
    large: 'text-6xl md:text-5xl',
  };

  return (
    <div className="bg-white rounded-xl p-5 shadow-lg border border-gray-200 transition-all duration-200 ease-in-out cursor-pointer min-w-[200px] md:min-w-[150px] hover:-translate-y-0.5 hover:shadow-xl">
      <div
        className={cn(
          'text-[#2c3e50] mb-4 leading-none block',
          fontFamilyClasses[variant],
          fontWeightClasses[weight],
          sizeClasses[fontSize]
        )}
      >
        {displayText}
      </div>
      <div className="flex flex-col gap-1">
        {showName && (
          <span className={cn(
            'text-base text-[#2c3e50] leading-tight',
            fontFamilyClasses[variant],
            fontWeightClasses[weight]
          )}>
            {fontName}
          </span>
        )}
        {showDescription && (
          <span className={cn(
            'text-sm text-[#7f8c8d] leading-snug',
            fontFamilyClasses[variant],
            fontWeightClasses[weight]
          )}>
            {fontDescription}
          </span>
        )}
      </div>
    </div>
  );
};

export default Font;
