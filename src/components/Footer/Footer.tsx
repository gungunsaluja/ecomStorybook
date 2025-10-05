import React from 'react';
import './Footer.css';

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
}: FooterProps) => {
  const [email, setEmail] = React.useState('');

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
    <footer className={`footer ${className}`}>
      {/* Main Footer Content */}
      <div className="footer__main">
        <div className="footer__container">
          {/* Brand and Newsletter Section */}
          <div className="footer__brand">
            <h2 className="footer__brand-name">{brandName}</h2>
            
            <form className="footer__newsletter" onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                className="footer__newsletter-input"
                placeholder={newsletterPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="footer__newsletter-button">
                {newsletterButtonText}
              </button>
            </form>

            <div className="footer__contact">
              <h3 className="footer__contact-heading">{contactHeading}</h3>
              <p className="footer__contact-address">{contactAddress}</p>
            </div>
          </div>

          {/* Categories Section */}
          <div className="footer__section">
            <h3 className="footer__section-heading">Categories</h3>
            <ul className="footer__links">
              <li className="footer__link-item">
                <button 
                  className="footer__link"
                  onClick={() => handleLinkClick('Laptops & Computers')}
                >
                  Laptops & Computers
                </button>
              </li>
              <li className="footer__link-item">
                <button 
                  className="footer__link"
                  onClick={() => handleLinkClick('Cameras & Photography')}
                >
                  Cameras & Photography
                </button>
              </li>
              <li className="footer__link-item">
                <button 
                  className="footer__link"
                  onClick={() => handleLinkClick('Smart Phones & Tablets')}
                >
                  Smart Phones & Tablets
                </button>
              </li>
              <li className="footer__link-item">
                <button 
                  className="footer__link"
                  onClick={() => handleLinkClick('Video Games & Consoles')}
                >
                  Video Games & Consoles
                </button>
              </li>
              <li className="footer__link-item">
                <button 
                  className="footer__link"
                  onClick={() => handleLinkClick('Waterproof Headphones')}
                >
                  Waterproof Headphones
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Care Section */}
          <div className="footer__section">
            <h3 className="footer__section-heading">Customer Care</h3>
            <ul className="footer__links">
              <li className="footer__link-item">
                <button 
                  className="footer__link"
                  onClick={() => handleLinkClick('My Account')}
                >
                  My Account
                </button>
              </li>
              <li className="footer__link-item">
                <button 
                  className="footer__link"
                  onClick={() => handleLinkClick('Discount')}
                >
                  Discount
                </button>
              </li>
              <li className="footer__link-item">
                <button 
                  className="footer__link"
                  onClick={() => handleLinkClick('Returns')}
                >
                  Returns
                </button>
              </li>
              <li className="footer__link-item">
                <button 
                  className="footer__link"
                  onClick={() => handleLinkClick('Orders History')}
                >
                  Orders History
                </button>
              </li>
              <li className="footer__link-item">
                <button 
                  className="footer__link"
                  onClick={() => handleLinkClick('Order Tracking')}
                >
                  Order Tracking
                </button>
              </li>
            </ul>
          </div>

          {/* Pages Section */}
          <div className="footer__section">
            <h3 className="footer__section-heading">Pages</h3>
            <ul className="footer__links">
              <li className="footer__link-item">
                <button 
                  className="footer__link"
                  onClick={() => handleLinkClick('Blog')}
                >
                  Blog
                </button>
              </li>
              <li className="footer__link-item">
                <button 
                  className="footer__link"
                  onClick={() => handleLinkClick('Browse the Shop')}
                >
                  Browse the Shop
                </button>
              </li>
              <li className="footer__link-item">
                <button 
                  className="footer__link"
                  onClick={() => handleLinkClick('Category')}
                >
                  Category
                </button>
              </li>
              <li className="footer__link-item">
                <button 
                  className="footer__link"
                  onClick={() => handleLinkClick('Pre-Built Pages')}
                >
                  Pre-Built Pages
                </button>
              </li>
              <li className="footer__link-item">
                <button 
                  className="footer__link"
                  onClick={() => handleLinkClick('Visual Composer Elements')}
                >
                  Visual Composer Elements
                </button>
              </li>
              <li className="footer__link-item">
                <button 
                  className="footer__link"
                  onClick={() => handleLinkClick('WooCommerce Pages')}
                >
                  WooCommerce Pages
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="footer__bottom">
        <div className="footer__container">
          <p className="footer__copyright">{copyright}</p>
          
          <div className="footer__social">
            <button
              className="footer__social-link footer__social-link--facebook"
              onClick={() => handleSocialClick('facebook')}
              aria-label="Facebook social media link"
            >
              <img src="/stories/assets/Facebook.svg" alt="Facebook" className="footer__social-icon" />
            </button>
            <button
              className="footer__social-link footer__social-link--instagram"
              onClick={() => handleSocialClick('instagram')}
              aria-label="Instagram social media link"
            >
              <img src="/stories/assets/Camera.svg" alt="Instagram" className="footer__social-icon" />
            </button>
            <button
              className="footer__social-link footer__social-link--twitter"
              onClick={() => handleSocialClick('twitter')}
              aria-label="Twitter social media link"
            >
              <img src="/stories/assets/Twitter.svg" alt="Twitter" className="footer__social-icon" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
