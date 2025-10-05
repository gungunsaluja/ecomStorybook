import React from 'react';
import { IconSize } from '../../types';
import './Icon.css';

export interface IconProps {
  /** The name of the icon to display */
  name: string;
  /** Size of the icon */
  size?: IconSize;
  /** Color of the icon */
  color?: string;
  /** Custom className for styling */
  className?: string;
  /** Whether the icon should be clickable */
  clickable?: boolean;
  /** Click handler */
  onClick?: () => void;
  /** Accessibility label */
  'aria-label'?: string;
}

/**
 * Icon component for displaying SVG icons in the design system
 */
export const Icon = ({
  name,
  size = 'large',
  color,
  className = '',
  clickable = false,
  onClick,
  'aria-label': ariaLabel,
}: IconProps) => {
  const iconPath = `/stories/assets/${name}.svg`;
  
  const handleClick = () => {
    if (clickable && onClick) {
      onClick();
    }
  };

  const iconClasses = [
    'icon',
    `icon--${size}`,
    clickable ? 'icon--clickable' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div
      className={iconClasses}
      style={{ color }}
      onClick={handleClick}
      role={clickable ? 'button' : 'img'}
      aria-label={ariaLabel || `${name} icon`}
      tabIndex={clickable ? 0 : undefined}
    >
      <img
        src={iconPath}
        alt={ariaLabel || `${name} icon`}
        className="icon__image"
      />
    </div>
  );
};

export default Icon;
