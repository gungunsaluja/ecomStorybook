import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import React from 'react';
import { PageHeader } from './PageHeader';

const meta = {
  title: 'Design System/PageHeader',
  component: PageHeader,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'PageHeader component for displaying page titles, breadcrumbs, and actions. Completely dynamic with no hardcoded values.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Main title of the page',
    },
    subtitle: {
      control: 'text',
      description: 'Optional subtitle or description',
    },
    backgroundColor: {
      control: 'color',
      description: 'Background color',
    },
    textColor: {
      control: 'color',
      description: 'Text color',
    },
    titleColor: {
      control: 'color',
      description: 'Title color',
    },
    breadcrumbColor: {
      control: 'color',
      description: 'Breadcrumb color',
    },
    activeBreadcrumbColor: {
      control: 'color',
      description: 'Active breadcrumb color',
    },
    showBorder: {
      control: 'boolean',
      description: 'Whether to show a border at the bottom',
    },
    height: {
      control: 'text',
      description: 'Custom height (CSS value, e.g., "200px", "auto")',
    },
    width: {
      control: 'text',
      description: 'Custom width (CSS value, e.g., "100%", "800px")',
    },
  },
} satisfies Meta<typeof PageHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default PageHeader
export const Default: Story = {
  args: {
    title: 'Shop List',
    breadcrumbs: [
      { label: 'Home', href: '/', isActive: false },
      { label: 'Pages', href: '/pages', isActive: false },
      { label: 'Shop List', isActive: true },
    ],
    backgroundColor: '#F8F7FC',
    titleColor: '#2C3E50',
    breadcrumbColor: '#6C757D',
    activeBreadcrumbColor: '#E83E8C',
    showBorder: false,
  },
};


// Simple Header
export const Simple: Story = {
  args: {
    title: 'Dashboard',
    subtitle: 'Welcome back to your dashboard',
  },
};

// Custom Size Header
export const CustomSize: Story = {
  args: {
    title: 'Custom Sized Header',
    subtitle: 'This header has custom height and width',
    breadcrumbs: [
      { label: 'Home', href: '/', isActive: false },
      { label: 'Products', href: '/products', isActive: false },
      { label: 'Custom Size', isActive: true },
    ],
    backgroundColor: '#E3F2FD',
    titleColor: '#1976D2',
    breadcrumbColor: '#666',
    activeBreadcrumbColor: '#1976D2',
    height: '150px',
    width: '90%',
    showBorder: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'PageHeader with custom height and width. Try adjusting the height and width controls to see the changes.',
      },
    },
  },
};
