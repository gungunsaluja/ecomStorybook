import React from 'react';
import { typography } from '../../tokens';
import { TypographyKey, FontWeight, FontSize } from '../../types';
import './Font.css';

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
  fontSize = 'medium',
}: FontProps) => {
  const fontConfig = typography[variant];
  const fontName = fontConfig.name;
  const fontDescription = fontConfig.description;
  const fontFamily = fontConfig.fontFamily;
  const fontWeight = fontConfig.weights[weight] || fontConfig.weights.regular;

  return (
    <div className="font-swatch">
      <div
        className={`font-swatch__display font-swatch__display--${fontSize}`}
        style={{
          fontFamily,
          fontWeight,
        }}
      >
        {displayText}
      </div>
      <div className="font-swatch__content">
        {showName && <span className="font-swatch__name">{fontName}</span>}
        {showDescription && (
          <span className="font-swatch__description">{fontDescription}</span>
        )}
      </div>
    </div>
  );
};

export default Font;
