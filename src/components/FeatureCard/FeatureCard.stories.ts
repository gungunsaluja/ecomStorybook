import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { FeatureCard } from './FeatureCard';

const meta = {
  title: 'Design System/FeatureCard',
  component: FeatureCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A feature card component with customizable title, description, height, and width. Perfect for highlighting key features or services.',
      },
    },
  },
  argTypes: {
    title: { 
      control: 'text',
      description: 'Bold title line (e.g., "24/7 Support")',
    },
    description: { 
      control: 'text',
      description: 'Secondary description text',
    },
    height: {
      control: 'text',
      description: 'Custom height (CSS value, e.g., "200px", "auto")',
    },
    width: {
      control: 'text',
      description: 'Custom width (CSS value, e.g., "100%", "300px")',
    },
  },
} satisfies Meta<typeof FeatureCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: '24/7 Support',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.',
  },
};

export const CustomSize: Story = {
  args: {
    title: 'Custom Sized Feature',
    description:
      'This feature card has custom height and width dimensions. Perfect for different layouts and responsive designs.',
    height: '200px',
    width: '300px',
  },
  parameters: {
    docs: {
      description: {
        story: 'FeatureCard with custom height and width. Try adjusting the height and width controls to see the changes.',
      },
    },
  },
};

export const Responsive: Story = {
  args: {
    title: 'Responsive Design',
    description:
      'This card adapts to different screen sizes with percentage-based dimensions.',
    height: '180px',
    width: '100%',
  },
  parameters: {
    docs: {
      description: {
        story: 'FeatureCard with responsive dimensions using percentage-based width.',
      },
    },
  },
};


