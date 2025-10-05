import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import React from 'react';
import { Button } from '../src/components/Button';

const meta = {
  title: 'Design System/Button',
  component: Button,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Button component with various styles and states. Matches the pink "Send Mail" button from the form design.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost', 'danger'],
      description: 'Button variant',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Button size',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether the button takes full width',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    loading: {
      control: 'boolean',
      description: 'Whether the button is loading',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default Button
export const Default: Story = {
  args: {
    children: 'Button',
  },
};

// Primary Button (matches form design)
export const Primary: Story = {
  args: {
    children: 'Send Mail',
    variant: 'primary',
  },
  parameters: {
    docs: {
      description: {
        story: 'Primary button matching the pink "Send Mail" button from the form design.',
      },
    },
  },
};

// Full Width Button (matches form design)
export const FullWidth: Story = {
  args: {
    children: 'Send Mail',
    variant: 'primary',
    fullWidth: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Full width primary button matching the form design.',
      },
    },
  },
};

// Button Variants
export const Variants: Story = {
  render: () => React.createElement('div', {
    style: { display: 'flex', flexWrap: 'wrap', gap: '12px' }
  }, [
    React.createElement(Button, { key: 'primary', variant: "primary" }, "Primary"),
    React.createElement(Button, { key: 'secondary', variant: "secondary" }, "Secondary"),
    React.createElement(Button, { key: 'outline', variant: "outline" }, "Outline"),
    React.createElement(Button, { key: 'ghost', variant: "ghost" }, "Ghost"),
    React.createElement(Button, { key: 'danger', variant: "danger" }, "Danger")
  ]),
};

// Size Variants
export const Sizes: Story = {
  render: () => React.createElement('div', {
    style: { display: 'flex', alignItems: 'center', gap: '12px' }
  }, [
    React.createElement(Button, { key: 'small', size: "small" }, "Small"),
    React.createElement(Button, { key: 'medium', size: "medium" }, "Medium"),
    React.createElement(Button, { key: 'large', size: "large" }, "Large")
  ]),
};

// Button States
export const States: Story = {
  render: () => React.createElement('div', {
    style: { display: 'flex', flexWrap: 'wrap', gap: '12px' }
  }, [
    React.createElement(Button, { key: 'normal', variant: "primary" }, "Normal"),
    React.createElement(Button, { key: 'loading', variant: "primary", loading: true }, "Loading"),
    React.createElement(Button, { key: 'disabled', variant: "primary", disabled: true }, "Disabled")
  ]),
};

// Form Button Example
export const FormButton: Story = {
  render: () => React.createElement('div', {
    style: { 
      background: '#000', 
      padding: '40px', 
      borderRadius: '8px',
      maxWidth: '500px'
    }
  }, React.createElement(Button, {
    variant: "primary",
    fullWidth: true,
    type: "submit"
  }, "Send Mail")),
  parameters: {
    docs: {
      description: {
        story: 'Form button matching the design from the image.',
      },
    },
  },
};

// Interactive Button
export const Interactive: Story = {
  args: {
    children: 'Click Me',
    variant: 'primary',
    onClick: () => alert('Button clicked!'),
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive button with click handler.',
      },
    },
  },
};