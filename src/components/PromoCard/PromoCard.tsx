import React from 'react'

interface PromoCardProps {
  mainText: string;
  subText: string;
  imageUrl?: string;
  imageAlt?: string;
  height?: string;
  color?: string;
  width?: string;
  className?: string;
}

export const PromoCard: React.FC<PromoCardProps> = ({
  mainText,
  subText,
  imageUrl,
  imageAlt = 'Promo image',
  height = '200px',
  width = '400px',
  className = '',
  color = ''

}) => {
  return (
    <div 
      className={`relative overflow-hidden rounded-xl shadow-lg ${className}`}
      style={{
        background: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)',
        width: width,
        height: height
      }}
    >
      <div className="flex h-full">
        {/* Left side - Text content (60% width) */}
        <div className="flex-1 flex flex-col justify-center p-4 text-white">
          <h3 className={`text-xl font-bold leading-tight ${color ? `text-${color}` : 'text-white'}`}>
            {mainText}
          </h3>
          <p className="text-white/90 mt-2 text-sm font-medium underline">
            {subText}
          </p>
        </div>
        
        {/* Right side - Image (40% width) */}
        <div className="flex items-center justify-center w-32 h-full pr-4">
          <img 
            src={imageUrl || '/assets/icons/unnamed 1.svg'}
            alt={imageAlt}
            className="w-60 h-40 object-contain"
            onError={(e) => {
              const target = e.currentTarget as HTMLImageElement;
              target.onerror = null; // prevent infinite loop
              target.src = '/assets/icons/image-svgrepo-com.svg';
            }}
          />
        </div>
      </div>  
    </div>
  )
}
