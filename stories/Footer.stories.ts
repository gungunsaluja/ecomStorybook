import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import React from 'react';
import { Footer } from '../src/components/Footer';

const meta = {
  title: 'Design System/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Footer component that matches the exact design from footer.svg. Simple, clean footer with customizable text content.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    brandName: {
      control: 'text',
      description: 'Brand name to display',
    },
    newsletterPlaceholder: {
      control: 'text',
      description: 'Newsletter email placeholder text',
    },
    newsletterButtonText: {
      control: 'text',
      description: 'Newsletter button text',
    },
    contactHeading: {
      control: 'text',
      description: 'Contact info heading',
    },
    contactAddress: {
      control: 'text',
      description: 'Contact address',
    },
    copyright: {
      control: 'text',
      description: 'Copyright text',
    },
    onNewsletterSubmit: {
      action: 'newsletter submitted',
      description: 'Callback when newsletter form is submitted',
    },
    onLinkClick: {
      action: 'link clicked',
      description: 'Callback when navigation link is clicked',
    },
    onSocialClick: {
      action: 'social clicked',
      description: 'Callback when social media button is clicked',
    },
  },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default Footer - matches the exact design
export const Default: Story = {
  args: {},
};

// Custom Brand Footer
export const CustomBrand: Story = {
  args: {
    brandName: 'MyCompany',
    newsletterPlaceholder: 'Enter your email',
    newsletterButtonText: 'Subscribe',
    contactHeading: 'Get in Touch',
    contactAddress: '123 Business St, City, State 12345',
    copyright: '© 2024 MyCompany - All Rights Reserved',
  },
};

// E-commerce Footer
export const Ecommerce: Story = {
  args: {
    brandName: 'ShopNow',
    newsletterPlaceholder: 'Subscribe to our newsletter',
    newsletterButtonText: 'Subscribe',
    contactHeading: 'Customer Service',
    contactAddress: '123 Shopping Ave, Suite 100, City, State 12345',
    copyright: '© 2024 ShopNow - All Rights Reserved',
  },
};

// Interactive Footer
export const Interactive: Story = {
  args: {
    onNewsletterSubmit: (email: string) => {
      alert(`Newsletter signup: ${email}`);
    },
    onLinkClick: (linkText: string) => {
      alert(`Link clicked: ${linkText}`);
    },
    onSocialClick: (platform: string) => {
      alert(`Social media clicked: ${platform}`);
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive footer with click handlers for all links and social media buttons.',
      },
    },
  },
};

// Custom Text Footer
export const CustomText: Story = {
  args: {
    brandName: 'TechCorp',
    newsletterPlaceholder: 'Join our mailing list',
    newsletterButtonText: 'Join Now',
    contactHeading: 'Office Location',
    contactAddress: '456 Tech Street, Innovation District, Tech City, TC 54321',
    copyright: '© 2024 TechCorp - Innovation at its finest',
  },
  parameters: {
    docs: {
      description: {
        story: 'Footer with completely customized text content.',
      },
    },
  },
};
