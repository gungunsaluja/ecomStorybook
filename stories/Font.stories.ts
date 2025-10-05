import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import React from 'react';
import { Font } from '../src/components/Font';
import { typography } from '../src/tokens';

const meta = {
  title: 'Design System/Font',
  component: Font,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Typography examples for the design system. Each font includes a name and description.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: Object.keys(typography),
      description: 'The font variant to display',
    },
    weight: {
      control: 'select',
      options: ['light', 'regular', 'medium', 'semiBold', 'bold'],
      description: 'Font weight to display (Note: Lato only supports light, regular, bold)',
    },
    fontSize: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Font size of the display text',
    },
    displayText: {
      control: 'text',
      description: 'Custom text to display',
    },
    showName: {
      control: 'boolean',
      description: 'Whether to show the font name',
    },
    showDescription: {
      control: 'boolean',
      description: 'Whether to show the font description',
    },
  },
} satisfies Meta<typeof Font>;

export default meta;
type Story = StoryObj<typeof meta>;

export const JosefinSans: Story = {
  args: {
    variant: 'josefinSans',
    fontSize: 'medium',
    weight: 'regular',
  },
};

export const Lato: Story = {
  args: {
    variant: 'lato',
    fontSize: 'medium',
    weight: 'regular',
  },
};

export const JosefinSansWeights: Story = {
  args: {
    variant: 'josefinSans',
    fontSize: 'medium',
    weight: 'regular',
  },
  render: () => {
    return React.createElement('div', {
      style: { display: 'flex', flexDirection: 'column', gap: '20px' }
    }, (['light', 'regular', 'medium', 'semiBold', 'bold'] as const).map((weight) => 
      React.createElement('div', {
        key: weight,
        style: { display: 'flex', alignItems: 'center', gap: '20px' }
      }, [
        React.createElement('span', {
          key: 'label',
          style: { minWidth: '100px', fontSize: '14px', color: '#666' }
        }, weight.charAt(0).toUpperCase() + weight.slice(1)),
        React.createElement(Font, {
          key: 'font',
          variant: 'josefinSans',
          weight: weight,
          fontSize: 'medium',
          displayText: 'The quick brown fox jumps over the lazy dog'
        })
      ])
    ));
  },
  parameters: {
    docs: {
      description: {
        story: 'Josefin Sans font in different weights.',
      },
    },
  },
};

export const LatoWeights: Story = {
  args: {
    variant: 'lato',
    fontSize: 'medium',
    weight: 'regular',
  },
  render: () => {
    return React.createElement('div', {
      style: { display: 'flex', flexDirection: 'column', gap: '20px' }
    }, (['light', 'regular', 'bold'] as const).map((weight) => 
      React.createElement('div', {
        key: weight,
        style: { display: 'flex', alignItems: 'center', gap: '20px' }
      }, [
        React.createElement('span', {
          key: 'label',
          style: { minWidth: '100px', fontSize: '14px', color: '#666' }
        }, weight.charAt(0).toUpperCase() + weight.slice(1)),
        React.createElement(Font, {
          key: 'font',
          variant: 'lato',
          weight: weight,
          fontSize: 'medium',
          displayText: 'The quick brown fox jumps over the lazy dog'
        })
      ])
    ));
  },
  parameters: {
    docs: {
      description: {
        story: 'Lato font in different weights.',
      },
    },
  },
};

export const SizeVariants: Story = {
  args: {
    variant: 'josefinSans',
    fontSize: 'medium',
    weight: 'regular',
  },
  render: () => {
    return React.createElement('div', {
      style: { display: 'flex', gap: '20px', alignItems: 'flex-end' }
    }, [
      React.createElement(Font, { key: 'small', variant: 'josefinSans', fontSize: 'small' }),
      React.createElement(Font, { key: 'medium', variant: 'josefinSans', fontSize: 'medium' }),
      React.createElement(Font, { key: 'large', variant: 'josefinSans', fontSize: 'large' })
    ]);
  },
  parameters: {
    docs: {
      description: {
        story: 'Different size variants of the font component.',
      },
    },
  },
};

export const TypographyOverview: Story = {
  args: {
    variant: 'josefinSans',
    fontSize: 'medium',
    weight: 'regular',
  },
  render: () => {
    return React.createElement('div', {
      style: { display: 'flex', gap: '20px', flexWrap: 'wrap' }
    }, Object.keys(typography).map((fontKey) => 
      React.createElement(Font, {
        key: fontKey,
        variant: fontKey as keyof typeof typography,
        fontSize: 'medium',
        weight: 'regular'
      })
    ));
  },
  parameters: {
    docs: {
      description: {
        story: 'Complete typography overview showing all available fonts in the design system.',
      },
    },
  },
};

export const Interactive: Story = {
  args: {
    variant: 'josefinSans',
    fontSize: 'medium',
    weight: 'regular',
    displayText: 'Aa',
    showName: true,
    showDescription: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive font component that you can customize using the controls panel.',
      },
    },
  },
};