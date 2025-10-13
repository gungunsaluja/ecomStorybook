import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import ProductCard from './ProductCard';

const meta = {
  title: 'Design System/ProductCard',
  component: ProductCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Reusable product card with image, title, price and rating.',
      },
    },
  },
  argTypes: {
    title: { control: 'text' },
    price: { control: 'text' },
    rating: { control: { type: 'number', min: 0, max: 5, step: 0.5 } },
    imageUrl: { control: 'text' },
  },
} satisfies Meta<typeof ProductCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imageUrl: 'https://picsum.photos/600/600?random=1',
    title: 'Wood Made Bags',
    price: '$32.00',
    rating: 3.5,
  },
};


