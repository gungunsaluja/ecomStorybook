import React from 'react';
import { cn } from '../../lib/utils';

export interface FeatureCardProps {
  /** Bold title line, e.g., "24/7 Support" */
  title: string;
  /** Secondary description text */
  description?: string;
  /** Optional custom classes */
  className?: string;
  /** Custom height (CSS value, e.g., "200px", "auto") */
  height?: string;
  /** Custom width (CSS value, e.g., "100%", "300px") */
  width?: string;
}


export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.',
  className = '',
  height,
  width,
}) => {
  return (
    <div
      className={cn(
        'bg-white rounded-lg border border-gray-200 shadow-sm',
        'flex items-center justify-center',
        !width && 'w-52', // Only apply default width if no custom width
        !height && 'h-64', // Only apply default height if no custom height
        className,
      )}
      style={{
        height: height,
        width: width,
      }}
    >
      <div className="px-4 text-center">
        <h3 className="text-[18px] font-semibold tracking-wide text-indigo-900 mb-3">
          {title}
        </h3>
        <p className="text-sm leading-6 text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;


