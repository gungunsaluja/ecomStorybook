import React from 'react';
import { PromoCard } from './PromoCard';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof PromoCard> = {
  title: 'Components/PromoCard',
  component: PromoCard,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A promotional card with main text, subtext, and an image. Perfect for highlighting offers or products. Includes image fallback to default Apple Watch image if the URL is invalid or missing.',
      },
    },
  },
  argTypes: {
    mainText: { control: 'text', description: 'Main promotional text (supports \\n for line breaks)' },
    subText: { control: 'text', description: 'Call-to-action or secondary text' },
    imageUrl: { 
      control: 'text',
      description: 'Image URL for the promo. Falls back to Apple Watch image if missing or invalid.',
    },
    imageAlt: { control: 'text', description: 'Alt text for the image' },
    height: { control: 'text', description: 'Card height (CSS value, e.g., "200px")' },
    width: { control: 'text', description: 'Card width (CSS value, e.g., "400px")' },
    color: { control: 'color', description: 'Background color of the card' },
  },
};

export default meta;
type Story = StoryObj<typeof PromoCard>;

export const Default: Story = {
  args: {
    mainText: '50% off in\nApple Watch',
    subText: 'Shop Now',
    imageUrl: '/assets/icons/unnamed 1.svg',
    imageAlt: 'Apple Watch promo',
    height: '200px',
    width: '400px',
    color: 'white',
  },
};

// export const WithoutImage: Story = {
//   args: {
//     mainText: 'Special Sale',
//     subText: 'Limited time offer',
//     height: '200px',
//     width: '400px',
//     color: 'white',
//   },
// };

// export const WithInvalidImage: Story = {
//   args: {
//     mainText: 'Test Fallback',
//     subText: 'Invalid URL Test',
//     imageUrl: 'https://invalid-url-that-will-fail.com/image.jpg',
//     imageAlt: 'This will show fallback image',
//     height: '200px',
//     width: '400px',
//     color: 'white',
//   },
// };
