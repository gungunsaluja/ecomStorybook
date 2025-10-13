import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Testimonial, TestimonialProps } from './Testimonial';

const meta: Meta<TestimonialProps> = {
  title: 'Components/Testimonial',
  component: Testimonial,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A testimonial section displaying three avatar images (with middle one elevated), name, title, and testimonial text. Supports random placeholder images or custom avatar URLs with fallback handling. Features pagination dots at the bottom.',
      },
    },
  },
  argTypes: {
    avatars: { control: 'object', description: 'Array of up to 3 avatar image URLs (falls back if missing/invalid)' },
    avatarAlt: { control: 'text', description: 'Alt text for avatar images' },
    name: { control: 'text', description: 'Person name' },
    title: { control: 'text', description: 'Person title/position (e.g., "Ceo At Webecy Digital")' },
    text: { control: 'text', description: 'Main testimonial text' },
    accentColor: { control: 'color', description: 'Accent color for active dot (default: "#7E33E0")' },
    width: { control: 'text', description: 'Component width (CSS value, default: "100%")' },
    height: { control: 'text', description: 'Minimum height (CSS value, default: "auto")' },
    useRandomAvatars: { control: 'boolean', description: 'Use random placeholder images if avatars not provided (default: true)' },
    className: { control: 'text', description: 'Optional additional CSS classes' },
  },
};

export default meta;
type Story = StoryObj<TestimonialProps>;

export const Default: Story = {
  args: {
    avatars: undefined,
    name: 'Selina Gomez',
    title: 'Ceo At Webecy Digital',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.',
    accentColor: '#FB2E86',
    width: '100%',
    height: '260px',
    useRandomAvatars: true,
  },
};

export const BrokenImages: Story = {
  args: {
    avatars: ['https://bad-url/a.png', 'https://bad-url/b.png', ''],
    name: 'Fallback Demo',
    title: 'Images fallback to default icon',
    text: 'All three images should gracefully fallback to the default icon without breaking layout.',
  },
};


