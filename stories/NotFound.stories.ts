import type { Meta, StoryObj } from '@storybook/react';
import { NotFound } from '../src/components/NotFound';

const meta: Meta<typeof NotFound> = {
  title: 'Pages/NotFound',
  component: NotFound,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A simple 404 Not Found page component that matches the exact design from the provided image.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithCustomClass: Story = {
  args: {
    className: 'custom-not-found',
  },
};
