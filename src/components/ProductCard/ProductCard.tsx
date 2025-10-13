import React, { useId } from 'react';
import { cn } from '../../lib/utils';

export interface ProductCardProps {
  /** Product image URL */
  imageUrl?: string;
  /** Image alt text. Defaults to title */
  imageAlt?: string;
  /** Product title */
  title: string;
  /** Display price (string like "$32.00" or raw number) */
  price: string | number;
  /** Current rating value, e.g. 3.5 */
  rating?: number;
  /** Max rating (number of stars) */
  maxRating?: number;
  /** Optional className to extend styles */
  className?: string;
  /** Optional click handler for the card */
  onClick?: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  imageUrl,
  imageAlt,
  title,
  price,
  rating = 3.5,
  maxRating = 5,
  className = '',
  onClick,
}) => {
  const gradientBaseId = useId();

  const numericPrice = typeof price === 'number' ? `$${price.toFixed(2)}` : price;

  const renderStar = (index: number) => {
    const starValue = index + 1; // 1-based
    const fillPercent = Math.max(0, Math.min(1, rating - index)) * 100; // 0..100
    const gradientId = `${gradientBaseId}-star-${index}`;

    return (
      <svg
        key={index}
        viewBox="0 0 24 24"
        width={18}
        height={18}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset={`${fillPercent}%`} stopColor="#FBBF24" />
            <stop offset={`${fillPercent}%`} stopColor="#E5E7EB" />
          </linearGradient>
        </defs>
        <path
          d="M12 2.25l2.955 5.985 6.607.96-4.781 4.659 1.128 6.58L12 17.77 6.091 20.434l1.128-6.58L2.438 9.195l6.607-.96L12 2.25z"
          fill={`url(#${gradientId})`}
          stroke="#D1D5DB"
          strokeWidth="0.5"
        />
        <title>{`Star ${starValue}`}</title>
      </svg>
    );
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => { if (e.key === 'Enter' && onClick) onClick(); }}
      className={cn(
        'bg-white rounded-lg border border-gray-300 shadow-sm p-5 w-72',
        'transition-transform duration-150 hover:-translate-y-0.5 hover:shadow-md',
        'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
        'text-center',
        className,
      )}
    >
      <div className="w-full aspect-square bg-gray-600 rounded-sm overflow-hidden mb-5">
  {/* Always render <img> — use fallback when imageUrl missing or fails */}
  <img
    src={imageUrl?.trim() || '/assets/icons/image-svgrepo-com.svg'}
    alt={imageAlt || title}
    className="w-full h-full object-cover [&[src*='image-svgrepo-com']]:!w-auto [&[src*='image-svgrepo-com']]:!h-auto [&[src*='image-svgrepo-com']]:!object-contain [&[src*='image-svgrepo-com']]:!mx-auto [&[src*='image-svgrepo-com']]:!mt-auto"
    onError={(e) => {
      const target = e.currentTarget as HTMLImageElement;
      target.onerror = null; // prevent infinite loop
      target.src = '/assets/icons/image-svgrepo-com.svg';
    }}
  />
</div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold tracking-wide text-indigo-900">{title}</h3>
        <p className="text-sm text-gray-700">{numericPrice}</p>
        <div className="flex items-center justify-center gap-1">
          {Array.from({ length: maxRating }).map((_, i) => renderStar(i))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;


