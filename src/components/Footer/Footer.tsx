import React from 'react';

export interface FooterProps {
  /** Brand name to display */
  brandName?: string;
  /** Newsletter email placeholder */
  newsletterPlaceholder?: string;
  /** Newsletter button text */
  newsletterButtonText?: string;
  /** Contact info heading */
  contactHeading?: string;
  /** Contact address */
  contactAddress?: string;
  /** Copyright text */
  copyright?: string;
  /** Custom className */
  className?: string;
  /** Newsletter submit handler */
  onNewsletterSubmit?: (email: string) => void;
  /** Navigation link click handlers */
  onLinkClick?: (linkText: string) => void;
  /** Social media click handlers */
  onSocialClick?: (platform: string) => void;
  /** Categories column links (array or comma/newline-separated string) */
  categories?: string[] | string;
  /** Customer Care column links (array or comma/newline-separated string) */
  customerCare?: string[] | string;
  /** Pages column links (array or comma/newline-separated string) */
  pages?: string[] | string;
  /** Optional headings override */
  categoriesTitle?: string;
  customerCareTitle?: string;
  pagesTitle?: string;
}

/**
 * Footer component that matches the exact design from footer.svg
 * Simple, clean footer with customizable text content
 */
export const Footer = ({
  brandName = 'Hekto',
  newsletterPlaceholder = 'Enter Email Address',
  newsletterButtonText = 'Sign Up',
  contactHeading = 'Contact Info',
  contactAddress = '17 Princess Road, London, Greater London NW1 8JR, UK',
  copyright = '©Webecy - All Rights Reserved',
  className = '',
  onNewsletterSubmit,
  onLinkClick,
  onSocialClick,
  categories,
  customerCare,
  pages,
  categoriesTitle = 'Categories',
  customerCareTitle = 'Customer Care',
  pagesTitle = 'Pages',
}: FooterProps) => {
  const [email, setEmail] = React.useState('');

  // Defaults (preserve current UI)
  const defaultCategories: string[] = [
    'Laptops & Computers',
    'Cameras & Photography',
    'Smart Phones & Tablets',
    'Video Games & Consoles',
    'Waterproof Headphones',
  ];
  const defaultCustomerCare: string[] = [
    'My Account',
    'Discount',
    'Returns',
    'Orders History',
    'Order Tracking',
  ];
  const defaultPages: string[] = [
    'Blog',
    'Browse the Shop',
    'Category',
    'Pre-Built Pages',
    'Visual Composer Elements',
    'WooCommerce Pages',
  ];

  const toList = (value: string[] | string | undefined, fallback: string[]): string[] => {
    if (Array.isArray(value)) return value;
    if (typeof value === 'string') {
      const parts = value.split(/\n|,/).map((s) => s.trim()).filter(Boolean);
      return parts.length ? parts : fallback;
    }
    return fallback;
  };

  const categoriesList = toList(categories, defaultCategories);
  const customerCareList = toList(customerCare, defaultCustomerCare);
  const pagesList = toList(pages, defaultPages);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onNewsletterSubmit && email) {
      onNewsletterSubmit(email);
      setEmail('');
    }
  };

  const handleLinkClick = (linkText: string) => {
    if (onLinkClick) {
      onLinkClick(linkText);
    }
  };

  const handleSocialClick = (platform: string) => {
    if (onSocialClick) {
      onSocialClick(platform);
    }
  };

  return (
    <footer className={`w-full bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 font-sans ${className}`}>
      {/* Main Footer Content */}
      <div className="py-15 bg-[#EEEFFB]">
        <div className="max-w-6xl mx-auto px-5 flex gap-10 flex-wrap md:flex-nowrap items-start xl:gap-8 lg:gap-7 md:gap-6">
          {/* Brand and Newsletter Section */}
          <div className="flex-1 min-w-80">
            <h2 className="text-3xl font-bold text-black mb-6 font-serif">{brandName}</h2>
            
            <form className="relative mb-8 max-w-md sm:max-w-full" onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                className="w-full px-4 py-3 pr-20 border border-gray-300 rounded-sm text-sm bg-white text-[#] transition-colors focus:outline-none focus:border-pink-500 focus:ring-3 focus:ring-pink-100 placeholder-gray-400"
                placeholder={newsletterPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button 
                type="submit" 
                className="absolute right-0 top-1/2 transform -translate-y-1/2 px-7 py-3 bg-pink-500 text-white border border-pink-500 rounded-sm text-sm font-semibold cursor-pointer transition-colors whitespace-nowrap hover:bg-pink-600"
              >
                {newsletterButtonText}
              </button>
            </form>

            <div className="mt-6 text-[#8A8FB9]">
              <h3 className="text-base font-normal text-[#8A8FB9] mb-2">{contactHeading}</h3>
              <p className="text-sm text-[#8A8FB9] m-0 leading-relaxed">{contactAddress}</p>
            </div>
          </div>

          {/* Categories Section (data-driven) */}
          <div className="flex-none min-w-48 max-w-52 sm:basis-1/2 md:basis-auto">
            <h3 className="text-lg font-bold text-black mb-5 font-serif">{categoriesTitle}</h3>
            <ul className="list-none p-0 m-0">
              {categoriesList.map((label) => (
                <li key={label} className="mb-3">
                  <button
                    className="text-[#8A8FB9] no-underline text-sm transition-colors bg-none border-none p-0 cursor-pointer text-left w-full block hover:text-pink-500"
                    onClick={() => handleLinkClick(label)}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care Section (data-driven) */}
          <div className="flex-none min-w-48 max-w-52 sm:basis-1/2 md:basis-auto">
            <h3 className="text-lg font-bold text-black mb-5 font-serif">{customerCareTitle}</h3>
            <ul className="list-none p-0 m-0">
              {customerCareList.map((label) => (
                <li key={label} className="mb-3">
                  <button
                    className="text-[#8A8FB9] no-underline text-sm transition-colors bg-none border-none p-0 cursor-pointer text-left w-full block hover:text-pink-500"
                    onClick={() => handleLinkClick(label)}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Pages Section (data-driven) */}
          <div className="flex-none min-w-48 max-w-52 sm:basis-1/2 md:basis-auto">
            <h3 className="text-lg font-bold text-black mb-5 font-serif">{pagesTitle}</h3>
            <ul className="list-none p-0 m-0">
              {pagesList.map((label) => (
                <li key={label} className="mb-3">
                  <button
                    className="text-[#8A8FB9] no-underline text-sm transition-colors bg-none border-none p-0 cursor-pointer text-left w-full block hover:text-pink-500"
                    onClick={() => handleLinkClick(label)}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="bg-[#E7E4F8] py-4 border-t border-gray-300">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center gap-6">
          <p className="text-gray-500 text-sm m-0 flex-shrink-0">{copyright}</p>
          
          <div className="flex gap-4 items-center">
            <button
              className="w-10 h-10 rounded-full border-none cursor-pointer flex items-center justify-center transition-all p-0 bg-transparent hover:-translate-y-0.5 hover:shadow-lg"
              onClick={() => handleSocialClick('facebook')}
              aria-label="Facebook social media link"
            >
              <img src="/assets/icons/Facebook.svg" alt="Facebook" className="w-full h-full object-contain" />
            </button>
            <button
              className="w-10 h-10 rounded-full border-none cursor-pointer flex items-center justify-center transition-all p-0 bg-transparent hover:-translate-y-0.5 hover:shadow-lg"
              onClick={() => handleSocialClick('instagram')}
              aria-label="Instagram social media link"
            >
              <img src="/assets/icons/Camera.svg" alt="Instagram" className="w-full h-full object-contain" />
            </button>
            <button
              className="w-10 h-10 rounded-full border-none cursor-pointer flex items-center justify-center transition-all p-0 bg-transparent hover:-translate-y-0.5 hover:shadow-lg"
              onClick={() => handleSocialClick('twitter')}
              aria-label="Twitter social media link"
            >
              <img src="/assets/icons/Twitter.svg" alt="Twitter" className="w-full h-full object-contain" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
