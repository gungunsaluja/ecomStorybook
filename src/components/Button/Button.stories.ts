import React from 'react';
import { Button } from './Button'; 
import { ButtonProps } from './types';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<ButtonProps> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A minimal, themeable button. Supports variants or direct color overrides using color and textColor props. Height/width can be set via inline style props.',
      },
    },
  },
  argTypes: {
    text: { control: 'text', description: 'Button label' },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
      description: 'Predefined visual style (ignored when color is provided)',
    },
    color: { control: 'color', description: 'Custom background color (overrides variant)' },
    textColor: { control: 'color', description: 'Custom text color' },
    height: { control: 'text', description: 'CSS height (e.g., 40px)' },
    width: { control: 'text', description: 'CSS width (e.g., 120px)' },
    onClick: { action: 'clicked', description: 'Click handler' },
  }
};

export default meta;
type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
  args: {
    text: 'Primary Button',
    variant: 'primary',
    height: '40px',
    width: '120px',
  },
};

export const Secondary: Story = {
  args: {
    text: 'Secondary Button',
    variant: 'secondary',
    height: '40px',
    width: '120px',
  },
};

export const CustomColors: Story = {
  args: {
    text: 'Custom Color',
    height: '40px',
    width: '140px',
    color: '#10B981',
    textColor: '#ffffff',
  },
};
