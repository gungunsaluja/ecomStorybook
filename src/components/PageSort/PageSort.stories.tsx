import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import React, { useState } from 'react';
import PageSort from './PageSort';

const meta: Meta<typeof PageSort> = {
  title: 'Components/PageSort',
  component: PageSort,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A page sorting and filtering control bar with per-page count, sort options, and view mode (grid/list) toggles. Fully customizable labels, options, and visibility. Supports controlled or uncontrolled state.',
      },
    },
  },
  argTypes: {
    title: { control: 'text', description: 'Main heading text' },
    subtitle: { control: 'text', description: 'Subheading text (e.g., "About 9,620 results (0.62 seconds)")' },
    resultsCount: { control: 'number', description: 'Number of results (auto-generates subtitle if subtitle not provided)' },
    queryTimeSec: { control: 'number', description: 'Query time in seconds (auto-generates subtitle if subtitle not provided)' },
    perPageOptions: { control: 'object', description: 'Array of per-page count options (e.g., [12, 24, 36])' },
    sortOptions: { control: 'object', description: 'Array of sort options { label, value }' },
    viewModes: { control: 'object', description: 'Array of view modes: "grid", "list", or both' },
    valuePerPage: { control: 'number', description: 'Controlled per-page value' },
    valueSort: { control: 'text', description: 'Controlled sort value' },
    valueView: { control: 'select', options: ['grid', 'list'], description: 'Controlled view mode' },
    onChangePerPage: { action: 'per-page changed', description: 'Callback when per-page changes' },
    onChangeSort: { action: 'sort changed', description: 'Callback when sort changes' },
    onChangeView: { action: 'view changed', description: 'Callback when view mode changes' },
    onChangeAll: { action: 'all changed', description: 'Callback receiving all three values { perPage, sort, view }' },
    perPageLabel: { control: 'text', description: 'Label for per-page control (default: "Per Page:")' },
    sortByLabel: { control: 'text', description: 'Label for sort control (default: "Sort By:")' },
    viewLabel: { control: 'text', description: 'Label for view control (default: "View:")' },
    showPerPage: { control: 'boolean', description: 'Show/hide per-page control' },
    showSort: { control: 'boolean', description: 'Show/hide sort control' },
    showView: { control: 'boolean', description: 'Show/hide view control' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default PageSort
export const Default: Story = {
  args: {
    title: 'Shop List',
    subtitle: 'About 9,620 results (0.62 seconds)',
    perPageOptions: [12, 24, 36, 48],
    sortOptions: [
      { label: 'Default', value: 'default' },
      { label: 'Price: Low to High', value: 'price-asc' },
      { label: 'Price: High to Low', value: 'price-desc' },
      { label: 'Name: A to Z', value: 'name-asc' },
      { label: 'Name: Z to A', value: 'name-desc' },
      { label: 'Rating: High to Low', value: 'rating-desc' },
    ],
    viewModes: ['grid', 'list'],
    perPageLabel: 'Per Page:',
    sortByLabel: 'Sort By:',
    viewLabel: 'View:',
    showPerPage: true,
    showSort: true,
    showView: true,
  },
};

// Controlled example
export const Controlled: Story = {
  render: (args) => {
    const [perPage, setPerPage] = useState(24);
    const [sort, setSort] = useState('price-asc');
    const [view, setView] = useState<'grid' | 'list'>('grid');

    const handleChangeAll = (values: { perPage: number; sort: string; view: 'grid' | 'list' }) => {
      setPerPage(values.perPage);
      setSort(values.sort);
      setView(values.view);
    };

    return (
      <PageSort
        {...args}
        valuePerPage={perPage}
        valueSort={sort}
        valueView={view}
        onChangePerPage={setPerPage}
        onChangeSort={setSort}
        onChangeView={setView}
        onChangeAll={handleChangeAll}
      />
    );
  },
  args: {
    title: 'Controlled PageSort',
    subtitle: 'About 1,250 results (0.45 seconds)',
    perPageOptions: [12, 24, 36, 48, 60],
    sortOptions: [
      { label: 'Default', value: 'default' },
      { label: 'Price: Low to High', value: 'price-asc' },
      { label: 'Price: High to Low', value: 'price-desc' },
      { label: 'Name: A to Z', value: 'name-asc' },
      { label: 'Name: Z to A', value: 'name-desc' },
      { label: 'Rating: High to Low', value: 'rating-desc' },
      { label: 'Newest First', value: 'newest' },
      { label: 'Oldest First', value: 'oldest' },
    ],
    viewModes: ['grid', 'list'],
    perPageLabel: 'Items per page:',
    sortByLabel: 'Sort by:',
    viewLabel: 'Display:',
    showPerPage: true,
    showSort: true,
    showView: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Controlled PageSort component with external state management. All values and changes are controlled by parent component.',
      },
    },
  },
};

// Minimal example
export const Minimal: Story = {
  args: {
    title: 'Products',
    resultsCount: 150,
    queryTimeSec: 0.3,
    perPageOptions: [12, 24, 36],
    sortOptions: [
      { label: 'Default', value: 'default' },
      { label: 'Price: Low to High', value: 'price-asc' },
      { label: 'Price: High to Low', value: 'price-desc' },
    ],
    viewModes: ['grid', 'list'],
  },
  parameters: {
    docs: {
      description: {
        story: 'Minimal PageSort with auto-generated subtitle and default labels.',
      },
    },
  },
};
