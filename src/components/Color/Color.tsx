import React from 'react';
import { colors } from '../../tokens';
import { ColorKey } from '../../types';
import { cn } from '../../lib/utils';

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

  // Card-based size variants matching the design reference
  const sizeClasses = {
    small: 'w-[120px]',
    medium: 'w-[160px]',
    large: 'w-[200px]',
  };

  return (
    <div
      className={cn(
        // Card-based design matching the reference
        'bg-white rounded-lg shadow-sm border border-gray-100 cursor-pointer transition-all duration-200 hover:shadow-md hover:-translate-y-1',
        // Selected state
        selected && 'ring-2 ring-blue-500 ring-offset-2',
        // Size classes
        sizeClasses[size]
      )}
      role="button"
      tabIndex={0}
      aria-label={`Color: ${colorName} (${colorValue})`}
    >
      {/* Color swatch area */}
      <div 
        className="w-full rounded-t-lg"
        style={{ 
          backgroundColor: colorValue,
          height: size === 'large' ? '120px' : size === 'medium' ? '80px' : '60px'
        }}
      />
      
      {/* Content area with color info */}
      <div className="p-3 space-y-1">
        {showHex && (
          <div className="text-xs font-mono text-gray-600">
            {colorValue}
          </div>
        )}
        {showName && (
          <div className="text-sm font-medium text-gray-900">
            {colorName}
          </div>
        )}
      </div>
    </div>
  );
};

export default Color;
