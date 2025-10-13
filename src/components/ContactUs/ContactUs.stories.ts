import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ContactUs } from './ContactUs';

const meta: Meta<typeof ContactUs> = {
  title: 'Components/ContactUs',
  component: ContactUs,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A flexible contact information component that accepts custom data. Perfect for displaying contact details, support information, location, and shipping details.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    items: {
      description: 'Array of contact items to display',
      control: { type: 'object' }
    },
    className: {
      description: 'Additional CSS class name',
      control: { type: 'text' }
    }
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

