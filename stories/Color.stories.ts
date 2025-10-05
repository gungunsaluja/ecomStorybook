import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import React from 'react';
import { Color } from '../src/components/Color';
import { colors } from '../src/tokens';

const meta = {
  title: 'Design System/Color',
  component: Color,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Color swatches for the design system. Each color includes a name and hex code.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: Object.keys(colors),
      description: 'The color variant to display',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size of the color swatch',
    },
    showName: {
      control: 'boolean',
      description: 'Whether to show the color name',
    },
    showHex: {
      control: 'boolean',
      description: 'Whether to show the hex code',
    },
    selected: {
      control: 'boolean',
      description: 'Whether this color is selected/focused',
    },
  },
} satisfies Meta<typeof Color>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Pink: Story = {
  args: {
    variant: 'pink',
    size: 'large',
    selected: true,
  },
};

export const OffNavyBlue: Story = {
  args: {
    variant: 'offNavyBlue',
    size: 'medium',
  },
};

export const Purple: Story = {
  args: {
    variant: 'purple',
    size: 'medium',
  },
};

export const Red: Story = {
  args: {
    variant: 'red',
    size: 'medium',
  },
};

export const NavyBlue: Story = {
  args: {
    variant: 'navyBlue',
    size: 'medium',
  },
};

export const OffPurple: Story = {
  args: {
    variant: 'offPurple',
    size: 'medium',
  },
};

export const Blue: Story = {
  args: {
    variant: 'blue',
    size: 'medium',
  },
};

export const SkyBlue: Story = {
  args: {
    variant: 'skyBlue',
    size: 'medium',
  },
};

export const PantonePurple: Story = {
  args: {
    variant: 'pantonePurple',
    size: 'medium',
  },
};

export const OffBlue: Story = {
  args: {
    variant: 'offBlue',
    size: 'large',
  },
};

export const ColorPalette: Story = {
  args: {
    variant: 'pink',
    size: 'medium',
  },
  render: () => {
    return React.createElement('div', {
      style: { 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '20px' 
      }
    }, Object.keys(colors).map((colorKey) => 
      React.createElement(Color, {
        key: colorKey,
        variant: colorKey as keyof typeof colors,
        size: colorKey === 'pink' || colorKey === 'offBlue' ? 'large' : 'medium',
        selected: colorKey === 'pink'
      })
    ));
  },
  parameters: {
    docs: {
      description: {
        story: 'Complete color palette showing all available colors in the design system.',
      },
    },
  },
};

export const SizeVariants: Story = {
  args: {
    variant: 'pink',
    size: 'medium',
  },
  render: () => {
    return React.createElement('div', {
      style: { display: 'flex', gap: '20px', alignItems: 'flex-end' }
    }, [
      React.createElement(Color, { key: 'small', variant: 'pink', size: 'small' }),
      React.createElement(Color, { key: 'medium', variant: 'pink', size: 'medium' }),
      React.createElement(Color, { key: 'large', variant: 'pink', size: 'large' })
    ]);
  },
  parameters: {
    docs: {
      description: {
        story: 'Different size variants of the color swatch component.',
      },
    },
  },
};

export const Interactive: Story = {
  args: {
    variant: 'pink',
    size: 'medium',
    showName: true,
    showHex: true,
    selected: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive color swatch that you can customize using the controls panel.',
      },
    },
  },
};