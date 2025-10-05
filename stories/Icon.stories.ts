import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import React from 'react';
import { Icon } from '../src/components/Icon';

const meta = {
  title: 'Design System/Icon',
  component: Icon,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Icon component for displaying SVG icons. Currently featuring Group 63 icon with larger, more visible sizes.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'text',
      description: 'The name of the icon to display',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large', 'xlarge', 'xxlarge', 'xxxlarge'],
      description: 'Size of the icon',
    },
    color: {
      control: 'color',
      description: 'Color of the icon',
    },
    clickable: {
      control: 'boolean',
      description: 'Whether the icon should be clickable',
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

// Group 63 icon stories
export const Group63: Story = {
  args: {
    name: 'Group 63',
    size: 'large',
    clickable: false,
  },
};

export const Group63Large: Story = {
  args: {
    name: 'Group 63',
    size: 'xlarge',
    clickable: false,
  },
};

export const Group63ExtraLarge: Story = {
  args: {
    name: 'Group 63',
    size: 'xxlarge',
    clickable: false,
  },
};

export const Group63Huge: Story = {
  args: {
    name: 'Group 63',
    size: 'xxxlarge',
    clickable: false,
  },
};

// Size variants
export const SizeVariants: Story = {
  args: {
    name: 'Group 63',
    size: 'large',
  },
  render: () => {
    return React.createElement('div', {
      style: { display: 'flex', gap: '30px', alignItems: 'center', flexWrap: 'wrap' }
    }, [
      React.createElement('div', {
        key: 'small',
        style: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }
      }, [
        React.createElement('span', { key: 'label', style: { fontSize: '14px', fontWeight: 'bold' } }, 'Small (32px)'),
        React.createElement(Icon, { key: 'icon', name: 'Group 63', size: 'small' })
      ]),
      React.createElement('div', {
        key: 'medium',
        style: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }
      }, [
        React.createElement('span', { key: 'label', style: { fontSize: '14px', fontWeight: 'bold' } }, 'Medium (48px)'),
        React.createElement(Icon, { key: 'icon', name: 'Group 63', size: 'medium' })
      ]),
      React.createElement('div', {
        key: 'large',
        style: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }
      }, [
        React.createElement('span', { key: 'label', style: { fontSize: '14px', fontWeight: 'bold' } }, 'Large (64px)'),
        React.createElement(Icon, { key: 'icon', name: 'Group 63', size: 'large' })
      ]),
      React.createElement('div', {
        key: 'xlarge',
        style: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }
      }, [
        React.createElement('span', { key: 'label', style: { fontSize: '14px', fontWeight: 'bold' } }, 'XLarge (96px)'),
        React.createElement(Icon, { key: 'icon', name: 'Group 63', size: 'xlarge' })
      ]),
      React.createElement('div', {
        key: 'xxlarge',
        style: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }
      }, [
        React.createElement('span', { key: 'label', style: { fontSize: '14px', fontWeight: 'bold' } }, 'XXLarge (128px)'),
        React.createElement(Icon, { key: 'icon', name: 'Group 63', size: 'xxlarge' })
      ]),
      React.createElement('div', {
        key: 'xxxlarge',
        style: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }
      }, [
        React.createElement('span', { key: 'label', style: { fontSize: '14px', fontWeight: 'bold' } }, 'XXXLarge (256px)'),
        React.createElement(Icon, { key: 'icon', name: 'Group 63', size: 'xxxlarge' })
      ])
    ]);
  },
  parameters: {
    docs: {
      description: {
        story: 'All size variants of the Group 63 icon with labels showing the actual pixel dimensions.',
      },
    },
  },
};

// Color variants
export const ColorVariants: Story = {
  args: {
    name: 'Group 63',
    size: 'xlarge',
  },
  render: () => {
    const colors = ['#FB2E86', '#3498DB', '#27AE60', '#F39C12', '#E74C3C', '#7F8C8D'];
    return React.createElement('div', {
      style: { display: 'flex', gap: '30px', alignItems: 'center', flexWrap: 'wrap' }
    }, colors.map((color, index) => 
      React.createElement('div', {
        key: index,
        style: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }
      }, [
        React.createElement('span', {
          key: 'label',
          style: { fontSize: '14px', fontWeight: 'bold', color: color }
        }, color),
        React.createElement(Icon, {
          key: 'icon',
          name: 'Group 63',
          size: 'xlarge',
          color: color
        })
      ])
    ));
  },
  parameters: {
    docs: {
      description: {
        story: 'Group 63 icon with different colors applied.',
      },
    },
  },
};

// Interactive example
export const Interactive: Story = {
  args: {
    name: 'Group 63',
    size: 'xlarge',
    clickable: false,
    color: '#FB2E86',
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive Group 63 icon that you can customize using the controls panel.',
      },
    },
  },
};