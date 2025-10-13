import React from 'react'

export interface TestimonialProps {
  /** Array of up to 3 avatar image URLs (invalid/missing will fallback) */
  avatars?: string[];
  /** Alt text for avatars */
  avatarAlt?: string;
  /** Person name */
  name: string;
  /** Person title/subtitle */
  title?: string;
  /** Main testimonial text */
  text: string;
  /** Accent color for name and dots */
  accentColor?: string;
  /** Card width */
  width?: string;
  /** Card height (min) */
  height?: string;
  /** Optional className */
  className?: string;
  /** When true and avatars are not provided, use random placeholder images */
  useRandomAvatars?: boolean;
}

const FALLBACK = '/assets/icons/image-svgrepo-com.svg';

export const Testimonial: React.FC<TestimonialProps> = ({
  avatars,
  avatarAlt = 'User avatar',
  name,
  title,
  text,
  accentColor = '#7E33E0',
  width = '100%',
  height = 'auto',
  className = '',
  useRandomAvatars = true,
}) => {
  const randomAvatars = React.useMemo(() => {
    return Array.from({ length: 3 }).map((_, i) => {
      const seed = Math.random().toString(36).slice(2, 10);
      // stable size small square
      return `https://picsum.photos/seed/testi-${i}-${seed}/96/96`;
    });
  }, []);

  const shownAvatars = (avatars && avatars.length ? avatars : (useRandomAvatars ? randomAvatars : [
    '/assets/icons/unnamed 1.svg',
    '/assets/icons/carbon_user.svg',
    '/assets/icons/Camera.svg',
  ])).slice(0, 3);

  return (
    <section
      className={`w-full bg-[#F6F5FF] text-center py-10 ${className}`}
      style={{ width, minHeight: height }}
    >
      <div className="flex items-center justify-center gap-6 mb-6">
        {shownAvatars.map((src, idx) => (
          <div
            key={`${src}-${idx}`}
            className={`w-16 h-16 rounded-sm overflow-hidden bg-gray-600 border border-gray-300 ${idx === 1 ? '-mt-3 md:-mt-4' : ''}`}
          >
            <img
              src={src || FALLBACK}
              alt={avatarAlt}
              className="w-full h-full object-cover [&[src*='image-svgrepo-com']]:!w-auto [&[src*='image-svgrepo-com']]:!h-auto [&[src*='image-svgrepo-com']]:!object-contain [&[src*='image-svgrepo-com']]:!mx-auto [&[src*='image-svgrepo-com']]:!mt-auto"
              onError={(e) => {
                const t = e.currentTarget as HTMLImageElement;
                t.onerror = null;
                t.src = FALLBACK;
              }}
            />
          </div>
        ))}
      </div>

      <h3 className="text-2xl font-semibold mb-1" style={{ color: '#0D134E' }}>{name}</h3>
      {title && <p className="text-xs mb-4" style={{ color: '#8A8FB9' }}>{title}</p>}
      <p className="max-w-4xl mx-auto px-6 leading-7" style={{ color: '#8A8FB9' }}>{text}</p>

      <div className="flex items-center justify-center gap-3 mt-6">
        <span className="inline-block rounded-full" style={{ width: 34, height: 6, backgroundColor: accentColor }} />
        <span className="inline-block rounded-full bg-[#FEBAD7]" style={{ width: 34, height: 6 }} />
        <span className="inline-block rounded-full bg-[#FEBAD7]" style={{ width: 34, height: 6 }} />
      </div>
    </section>
  );
};

export default Testimonial;


