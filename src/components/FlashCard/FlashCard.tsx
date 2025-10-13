import React, { useEffect, useState } from 'react'

interface FlashCardProps {
  /** Product image URL */
  imageUrl?: string;
  /** Image alt text */
  imageAlt?: string;
  /** Category text (e.g., "Camera, photo & video") */
  category?: string;
  /** Product name */
  productName: string;
  /** Product price */
  price: string;
  /** Product code */
  productCode: string;
  /** Discount percentage (e.g., "29%") */
  discountPercentage?: string;
  /** Card height */
  height?: string;
  /** Card width */
  width?: string;
  /** Show interactive icons (cart, heart, zoom) */
  showInteractiveIcons?: boolean;
  /** Optional: called when cart button is clicked */
  onAddToCart?: () => void;
  /** Optional: initial wishlist state */
  initialWishlisted?: boolean;
  /** Optional: called when wishlist toggles */
  onToggleWishlist?: (wishlisted: boolean) => void;
  /** Optional: called when zoom button is clicked */
  onZoom?: () => void;
  /** Optional className to extend styles */
  className?: string;
}

export const FlashCard: React.FC<FlashCardProps> = ({
  imageUrl,
  imageAlt = 'Product image',
  category,
  productName,
  price,
  productCode,
  discountPercentage,
  height = '300px',
  width = '250px',
  showInteractiveIcons = false,
  onAddToCart,
  initialWishlisted,
  onToggleWishlist,
  onZoom,
  className = ''
}) => {
  const [isWishlisted, setIsWishlisted] = useState<boolean>(!!initialWishlisted);
  const [isZoomOpen, setIsZoomOpen] = useState<boolean>(false);

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart();
      return;
    }
    alert('Added to cart');
  };

  const handleToggleWishlist = () => {
    const next = !isWishlisted;
    setIsWishlisted(next);
    if (onToggleWishlist) onToggleWishlist(next);
  };

  const handleZoom = () => {
    if (onZoom) onZoom();
    setIsZoomOpen(true);
  };

  useEffect(() => {
    if (!isZoomOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsZoomOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isZoomOpen]);
  return (
    <div 
      className={`relative bg-gray-100 rounded-lg shadow-sm overflow-hidden ${className}`}
      style={{
        height: height,
        width: width
      }}
    >
      {/* Discount Tag */}
      {discountPercentage && (
        <div className="absolute top-3 left-3 z-10">
          <div className="bg-orange-400 text-white px-2 py-1 rounded text-sm font-semibold">
            -{discountPercentage}
          </div>
        </div>
      )}

      {/* Product Image */}
      <div className="w-full h-40 flex items-center justify-center bg-gray-50">
        <img 
          src={imageUrl || '/assets/icons/image-svgrepo-com.svg'}
          alt={imageAlt}
          className="w-full h-full object-contain"
          onError={(e) => {
            const target = e.currentTarget as HTMLImageElement;
            target.onerror = null; // prevent infinite loop
            target.src = '/assets/icons/image-svgrepo-com.svg';
          }}
        />
      </div>

      {/* Product Information */}
      <div className="p-4 space-y-2 relative">
        {/* Category */}
        {category && (
          <p className="text-gray-500 text-sm">{category}</p>
        )}
        
        {/* Product Name */}
        <h3 className="text-indigo-900 font-semibold text-lg">{productName}</h3>
        
        {/* Price and Code Row */}
        <div className="flex items-center justify-between">
          <span className="text-indigo-900 font-semibold text-lg">{price}</span>
          <div className={`text-sm ${showInteractiveIcons ? 'mr-16' : ''}`}>
            <span className="text-indigo-900">Code- </span>
            <span className="text-orange-400 underline">{productCode}</span>
          </div>
        </div>

        {/* Interactive Icons - Bottom Right */}
        {showInteractiveIcons && (
          <div className="absolute bottom-4 right-4 flex flex-col space-y-2">
            {/* Shopping Cart */}
            <button 
              className="w-8 h-8 rounded-full overflow-hidden transition-colors"
              aria-label="Add to cart"
              type="button"
              onClick={handleAddToCart}
            >
              <span
                className="block w-full h-full"
                style={{
                  backgroundImage: "url('/assets/icons/FlashCart.svg')",
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: '50% 40%',
                  // Aggressively overfill to counter large internal padding in the SVG
                  backgroundSize: '510% 510%',
                }}
              />
            </button>
            
            {/* Heart Icon */}
            <button 
              className="w-8 h-8 flex items-center justify-center hover:bg-gray-50 rounded-full transition-colors"
              aria-label="Toggle wishlist"
              type="button"
              onClick={handleToggleWishlist}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill={isWishlisted ? '#EF4444' : 'none'} stroke="#6B7280" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>
            
            {/* Magnifying Glass (Zoom) */}
            <button 
              className="w-8 h-8 flex items-center justify-center hover:bg-gray-50 rounded-full transition-colors"
              aria-label="Zoom"
              type="button"
              onClick={handleZoom}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
                <line x1="11" y1="8" x2="11" y2="14"></line>
                <line x1="8" y1="11" x2="14" y2="11"></line>
              </svg>
            </button>
          </div>
        )}
      </div>
      {/* Zoom Overlay */}
      {isZoomOpen && (
        <div
          className="fixed inset-0 z-[9999] bg-black/70 flex items-center justify-center p-4"
          onClick={() => setIsZoomOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div className="relative max-w-[90vw] max-h-[85vh]" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              aria-label="Close zoom"
              className="absolute -top-3 -right-3 bg-white/90 text-gray-700 rounded-full w-8 h-8 shadow flex items-center justify-center"
              onClick={() => setIsZoomOpen(false)}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
            <img
              src={imageUrl || '/assets/icons/image-svgrepo-com.svg'}
              alt={imageAlt || productName}
              className="block max-w-[90vw] max-h-[85vh] object-contain rounded"
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement;
                target.onerror = null;
                target.src = '/assets/icons/image-svgrepo-com.svg';
              }}
            />
          </div>
        </div>
      )}
    </div>
  )
}
