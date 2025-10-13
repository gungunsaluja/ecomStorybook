import React from 'react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  onClick?: () => void;
  isActive?: boolean;
}

export interface PageHeaderProps {
  /** Main title of the page */
  title: string;
  /** Optional subtitle or description */
  subtitle?: string;
  /** Breadcrumb items for navigation */
  breadcrumbs?: BreadcrumbItem[];
  /** Action buttons to display in the header */
  actions?: React.ReactNode;
  /** Custom className for styling */
  className?: string;
  /** Background color */
  backgroundColor?: string;
  /** Text color */
  textColor?: string;
  /** Title color */
  titleColor?: string;
  /** Breadcrumb color */
  breadcrumbColor?: string;
  /** Active breadcrumb color */
  activeBreadcrumbColor?: string;
  /** Whether to show a border at the bottom */
  showBorder?: boolean;
  /** Custom height (CSS value, e.g., "200px", "auto") */
  height?: string;
  /** Custom width (CSS value, e.g., "100%", "800px") */
  width?: string;
  /** Custom styles */
  style?: React.CSSProperties;
}

/**
 * Simple PageHeader component for displaying page titles, breadcrumbs, and actions
 */
export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  breadcrumbs = [],
  actions,
  className = '',
  showBorder = true,
  backgroundColor = '#F8F7FC',
  textColor = '#1F2937',
  titleColor,
  breadcrumbColor = '#6B7280',
  activeBreadcrumbColor = '#E83E8C',
  height,
  width,
  style,
}) => {

  return (
    <header
      className={`w-full py-6 ${showBorder ? 'border-b border-gray-200' : ''} ${className}`}
      style={{
        backgroundColor,
        color: textColor,
        height: height,
        width: width,
        ...style,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-start">
          <div className="pl-2 sm:pl-3 md:pl-4">
            {/* Title */}
            <h1
              className="text-3xl font-bold mb-4"
              style={{ color: titleColor || textColor }}
            >
              {title}
            </h1>

            {/* Breadcrumbs */}
            {breadcrumbs.length > 0 && (
              <nav className="flex justify-start mb-2" aria-label="Breadcrumb">
                <div className="flex items-center">
                  {breadcrumbs.map((item, index) => (
                    <React.Fragment key={index}>
                      {index > 0 && <span className="mx-2">•</span>}
                      
                      {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm font-medium transition-colors no-underline hover:no-underline"
                          style={{
                            color: item.isActive ? activeBreadcrumbColor : breadcrumbColor
                          }}
                        >
                          {item.label}
                        </a>
                      ) : item.onClick ? (
                      <button
                        onClick={item.onClick}
                        className="text-sm font-medium transition-colors"
                          style={{
                            color: item.isActive ? activeBreadcrumbColor : breadcrumbColor
                          }}
                        >
                          {item.label}
                        </button>
                      ) : (
                        <span
                          className="text-sm font-medium"
                          style={{
                            color: item.isActive ? activeBreadcrumbColor : breadcrumbColor
                          }}
                        >
                          {item.label}
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </nav>
            )}

            {/* Subtitle */}
            {subtitle && (
              <p className="text-base opacity-80">
                {subtitle}
              </p>
            )}

            {/* Actions */}
            {actions && (
              <div className="flex items-center justify-start space-x-3 mt-4">
                {actions}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default PageHeader;