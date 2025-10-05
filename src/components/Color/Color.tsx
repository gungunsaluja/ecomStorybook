import React from 'react';
import { colors } from '../../tokens';
import { ColorKey } from '../../types';
import './Color.css';

export interface ColorProps {
  /** The color variant to display */
  variant: ColorKey;
  /** Whether to show the color name */
  showName?: boolean;
  /** Whether to show the hex code */
  showHex?: boolean;
  /** Custom size for the color swatch */
  size?: 'small' | 'medium' | 'large';
  /** Whether this color is selected/focused */
  selected?: boolean;
}

/**
 * Color component for displaying color swatches in the design system
 */
export const Color = ({
  variant,
  showName = true,
  showHex = true,
  size = 'medium',
  selected = false,
}: ColorProps) => {
  const colorValue = colors[variant];
  const colorName = variant
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (str) => str.toUpperCase());

  return (
    <div
      className={`color-swatch color-swatch--${size} ${
        selected ? 'color-swatch--selected' : ''
      }`}
      style={{ backgroundColor: colorValue }}
      role="button"
      tabIndex={0}
      aria-label={`Color: ${colorName} (${colorValue})`}
    >
      <div className="color-swatch__content">
        {showName && <span className="color-swatch__name">{colorName}</span>}
        {showHex && <span className="color-swatch__hex">{colorValue}</span>}
      </div>
    </div>
  );
};

export default Color;
