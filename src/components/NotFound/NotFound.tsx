import React from 'react';
import './NotFound.css';

interface NotFoundProps {
  className?: string;
}

export const NotFound: React.FC<NotFoundProps> = ({ className = '' }) => {
  return (
    <div className={`not-found ${className}`}>
      {/* Top Header Bar */}
      <div className="not-found__top-header">
        <div className="not-found__top-header-content">
          <div className="not-found__top-header-left">
            <span className="not-found__contact-item">
              <span className="not-found__icon">✉</span>
              mhhasanul@gmail.com
            </span>
            <span className="not-found__contact-item">
              <span className="not-found__icon">📞</span>
              (12345)67890
            </span>
          </div>
          <div className="not-found__top-header-right">
            <span className="not-found__dropdown">English ▼</span>
            <span className="not-found__dropdown">USD ▼</span>
            <span className="not-found__action">Login 👤</span>
            <span className="not-found__action">Wishlist ❤</span>
            <span className="not-found__cart">🛒</span>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="not-found__main-header">
        <div className="not-found__main-header-content">
          <div className="not-found__logo">Hekto</div>
          <nav className="not-found__nav">
            <span className="not-found__nav-item not-found__nav-item--active">Home ▼</span>
            <span className="not-found__nav-item">Pages</span>
            <span className="not-found__nav-item">Products</span>
            <span className="not-found__nav-item">Blog</span>
            <span className="not-found__nav-item">Shop</span>
            <span className="not-found__nav-item">Contact</span>
          </nav>
          <div className="not-found__search">
            <input 
              type="text" 
              className="not-found__search-input" 
              placeholder="Search products..."
            />
            <button className="not-found__search-button">🔍</button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="not-found__content">
        <div className="not-found__content-inner">
          <h1 className="not-found__title">404 Not Found</h1>
          <div className="not-found__breadcrumb">
            <span className="not-found__breadcrumb-item">Home</span>
            <span className="not-found__breadcrumb-separator">.</span>
            <span className="not-found__breadcrumb-item">Pages</span>
            <span className="not-found__breadcrumb-separator">.</span>
            <span className="not-found__breadcrumb-item not-found__breadcrumb-item--active">Shop Grid Default</span>
          </div>
        </div>
      </div>
    </div>
  );
};
