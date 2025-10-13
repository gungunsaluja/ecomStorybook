import React from 'react';
import { FlashCard } from './FlashCard';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof FlashCard> = {
  title: 'Components/FlashCard',
  component: FlashCard,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A product flash card with image, name, price, code, and optional discount tag. Can show interactive icons (cart, wishlist, zoom) when showInteractiveIcons is enabled. Includes image fallback and full zoom lightbox on icon click.',
      },
    },
  },
  argTypes: {
    imageUrl: { control: 'text', description: 'Product image URL. Falls back to default icon if missing or invalid.' },
    imageAlt: { control: 'text', description: 'Alt text for product image' },
    category: { control: 'text', description: 'Optional category label above product name' },
    productName: { control: 'text', description: 'Product name' },
    price: { control: 'text', description: 'Product price (e.g., "$39.00")' },
    productCode: { control: 'text', description: 'Product code/SKU' },
    discountPercentage: { control: 'text', description: 'Optional discount percentage (e.g., "29%"). Shows tag in top-left if provided.' },
    height: { control: 'text', description: 'Card height (CSS value, e.g., "300px")' },
    width: { control: 'text', description: 'Card width (CSS value, e.g., "250px")' },
    showInteractiveIcons: { control: 'boolean', description: 'Show cart/wishlist/zoom icons in bottom-right corner' },
    onAddToCart: { action: 'cart clicked', description: 'Callback when cart icon clicked (defaults to alert)' },
    initialWishlisted: { control: 'boolean', description: 'Initial wishlist state' },
    onToggleWishlist: { action: 'wishlist toggled', description: 'Callback when wishlist toggled (receives boolean)' },
    onZoom: { action: 'zoom clicked', description: 'Callback when zoom icon clicked (opens lightbox by default)' },
  },
};

export default meta;
type Story = StoryObj<typeof FlashCard>;

export const Default: Story = {
  args: {
    imageUrl: '/assets/icons/unnamed 1.svg',
    imageAlt: 'Canon EOS 8500 DSLR Camera',
    category: 'Camera, photo & video',
    productName: 'Sky Monkey 2020',
    price: '$39.00',
    productCode: 'E426L',
    discountPercentage: '29%',
    height: '300px',
    width: '250px',
  },
};

export const WithoutDiscount: Story = {
  args: {
    imageUrl: '/assets/icons/unnamed 1.svg',
    imageAlt: 'Product image',
    category: 'Electronics',
    productName: 'Wireless Headphones',
    price: '$99.99',
    productCode: 'WH001',
    height: '300px',
    width: '250px',
  },
};

export const WithoutCategory: Story = {
  args: {
    imageUrl: '/assets/icons/unnamed 1.svg',
    imageAlt: 'Product image',
    productName: 'Smart Watch',
    price: '$199.99',
    productCode: 'SW2024',
    discountPercentage: '15%',
    height: '300px',
    width: '250px',
  },
};

export const WithInvalidImage: Story = {
  args: {
    imageUrl: 'https://invalid-url-that-will-fail.com/image.jpg',
    imageAlt: 'This will show fallback image',
    category: 'Test Category',
    productName: 'Test Product',
    price: '$50.00',
    productCode: 'TEST123',
    discountPercentage: '20%',
    height: '300px',
    width: '250px',
  },
};

export const LargeSize: Story = {
  args: {
    imageUrl: '/assets/icons/unnamed 1.svg',
    imageAlt: 'Large product image',
    category: 'Home & Garden',
    productName: 'Premium Garden Tools Set',
    price: '$149.99',
    productCode: 'GTS2024',
    discountPercentage: '35%',
    height: '400px',
    width: '300px',
  },
};

export const WithInteractiveIcons: Story = {
  args: {
    imageUrl: '/assets/icons/unnamed 1.svg',
    imageAlt: 'Logitech G432 Gaming Headphones',
    category: 'Camera, photo & video',
    productName: 'Sky Monkey 2020',
    price: '$39.00',
    productCode: 'E426L',
    height: '300px',
    width: '250px',
    showInteractiveIcons: true,
  },
};

export const WithInteractiveIconsAndDiscount: Story = {
  args: {
    imageUrl: '/assets/icons/unnamed 1.svg',
    imageAlt: 'Gaming Headphones',
    category: 'Electronics',
    productName: 'Logitech G432 Gaming Headphones',
    price: '$79.99',
    productCode: 'G432',
    discountPercentage: '20%',
    height: '300px',
    width: '250px',
    showInteractiveIcons: true,
  },
};
