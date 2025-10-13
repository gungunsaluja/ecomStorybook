import React from 'react';

export interface ContactItem {
  icon: React.ReactNode;
  iconColor: 'purple' | 'pink' | 'orange' | 'green';
  title: string;
  subtitle: string;
}

interface ContactUsProps {
  className?: string;
  items?: ContactItem[];
  // Contact information props
  phone?: string;
  email?: string;
  supportTitle?: string;
  supportSubtitle?: string;
  address?: string;
  addressDetails?: string;
  shippingTitle?: string;
  shippingSubtitle?: string;
}

const defaultItems: ContactItem[] = [
  {
    icon: (
      <img 
        src="/stories/assets/PurpleMsg.svg" 
        alt="Email" 
        className="w-full h-full object-contain"
        width="45" 
        height="45"
      />
    ),
    iconColor: 'purple',
    title: 'Tel: 877-67-88-99',
    subtitle: 'E-Mail: shop@store.com'
  },
  {
    icon: (
      <img 
        src="/stories/assets/pink.svg" 
        alt="Support" 
        className="w-full h-full object-contain"
        width="45" 
        height="45"
      />
    ),
    iconColor: 'pink',
    title: 'Support Forum',
    subtitle: 'For over 24hr'
  },
  {
    icon: (
      <img 
        src="/stories/assets/location.svg" 
        alt="Location" 
        className="w-full h-full object-contain"
        width="45" 
        height="45"
      />
    ),
    iconColor: 'orange',
    title: '20 Margaret st, London',
    subtitle: 'Great britain, 3NM98-LK'
  },
  {
    icon: (
      <img 
        src="/stories/assets/Green.svg" 
        alt="Shipping" 
        className="w-full h-full object-contain"
        width="45" 
        height="45"
      />
    ),
    iconColor: 'green',
    title: 'Free standard shipping',
    subtitle: 'on all orders.'
  }
];

export const ContactUs: React.FC<ContactUsProps> = ({ 
  className = '', 
  items,
  phone = '877-67-88-99',
  email = 'shop@store.com',
  supportTitle = 'Support Forum',
  supportSubtitle = 'For over 24hr',
  address = '20 Margaret st, London',
  addressDetails = 'Great britain, 3NM98-LK',
  shippingTitle = 'Free standard shipping',
  shippingSubtitle = 'on all orders.'
}) => {
  // Create dynamic items if not provided
  const contactItems = items || [
    {
      icon: (
        <img 
          src="/stories/assets/PurpleMsg.svg" 
          alt="Email" 
          className="w-full h-full object-contain"
          width="45" 
          height="45"
        />
      ),
      iconColor: 'purple' as const,
      title: `Tel: ${phone}`,
      subtitle: `E-Mail: ${email}`
    },
    {
      icon: (
        <img 
          src="/stories/assets/pink.svg" 
          alt="Support" 
          className="w-full h-full object-contain"
          width="45" 
          height="45"
        />
      ),
      iconColor: 'pink' as const,
      title: supportTitle,
      subtitle: supportSubtitle
    },
    {
      icon: (
        <img 
          src="/stories/assets/location.svg" 
          alt="Location" 
          className="w-full h-full object-contain"
          width="45" 
          height="45"
        />
      ),
      iconColor: 'orange' as const,
      title: address,
      subtitle: addressDetails
    },
    {
      icon: (
        <img 
          src="/stories/assets/Green.svg" 
          alt="Shipping" 
          className="w-full h-full object-contain"
          width="45" 
          height="45"
        />
      ),
      iconColor: 'green' as const,
      title: shippingTitle,
      subtitle: shippingSubtitle
    }
  ];
  return (
    <div className={`w-full bg-gray-100 rounded-xl p-8 max-w-4xl mx-auto ${className}`}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
        {/* Top Row */}
        <div style={{ display: 'inline-block', verticalAlign: 'top' }}>
          <div className="w-12 h-12 flex items-center justify-center flex-shrink-0" style={{ display: 'inline-block', marginRight: '16px' }}>
            {contactItems[0].icon}
          </div>
          <div style={{ display: 'inline-block', verticalAlign: 'top' }}>
            <div className="text-sm font-normal leading-relaxed" style={{ color: '#8A8FB9' }}>{contactItems[0].title}</div>
            <div className="text-sm font-normal leading-relaxed" style={{ color: '#8A8FB9' }}>{contactItems[0].subtitle}</div>
          </div>
        </div>
        
        <div style={{ display: 'inline-block', verticalAlign: 'top' }}>
          <div className="w-12 h-12 flex items-center justify-center flex-shrink-0" style={{ display: 'inline-block', marginRight: '16px' }}>
            {contactItems[1].icon}
          </div>
          <div style={{ display: 'inline-block', verticalAlign: 'top' }}>
            <div className="text-sm font-normal leading-relaxed" style={{ color: '#8A8FB9' }}>{contactItems[1].title}</div>
            <div className="text-sm font-normal leading-relaxed" style={{ color: '#8A8FB9' }}>{contactItems[1].subtitle}</div>
          </div>
        </div>

        {/* Bottom Row */}
        <div style={{ display: 'inline-block', verticalAlign: 'top' }}>
          <div className="w-12 h-12 flex items-center justify-center flex-shrink-0" style={{ display: 'inline-block', marginRight: '16px' }}>
            {contactItems[2].icon}
          </div>
          <div style={{ display: 'inline-block', verticalAlign: 'top' }}>
            <div className="text-sm font-normal leading-relaxed" style={{ color: '#8A8FB9' }}>{contactItems[2].title}</div>
            <div className="text-sm font-normal leading-relaxed" style={{ color: '#8A8FB9' }}>{contactItems[2].subtitle}</div>
          </div>
        </div>
        
        <div style={{ display: 'inline-block', verticalAlign: 'top' }}>
          <div className="w-12 h-12 flex items-center justify-center flex-shrink-0" style={{ display: 'inline-block', marginRight: '16px' }}>
            {contactItems[3].icon}
          </div>
          <div style={{ display: 'inline-block', verticalAlign: 'top' }}>
            <div className="text-sm font-normal leading-relaxed" style={{ color: '#8A8FB9' }}>{contactItems[3].title}</div>
            <div className="text-sm font-normal leading-relaxed" style={{ color: '#8A8FB9' }}>{contactItems[3].subtitle}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
