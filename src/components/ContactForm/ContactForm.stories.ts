import type { Meta, StoryObj } from '@storybook/react';
import { ContactForm } from './ContactForm';

const meta: Meta<typeof ContactForm> = {
  title: 'Components/ContactForm',
  component: ContactForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onSubmit: { action: 'form submitted' },
    className: {
      control: 'text',
      description: 'Custom CSS classes'
    },
    namePlaceholder: {
      control: 'text',
      description: 'Name field placeholder text'
    },
    emailPlaceholder: {
      control: 'text',
      description: 'Email field placeholder text'
    },
    subjectPlaceholder: {
      control: 'text',
      description: 'Subject field placeholder text'
    },
    messagePlaceholder: {
      control: 'text',
      description: 'Message field placeholder text'
    },
    submitButtonText: {
      control: 'text',
      description: 'Submit button text'
    }
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    namePlaceholder: 'Your Name*',
    emailPlaceholder: 'Your E-mail',
    subjectPlaceholder: 'Subject*',
    messagePlaceholder: 'Type Your Message*',
    submitButtonText: 'Send Message'
  },
};

export const CustomPlaceholders: Story = {
  args: {
    namePlaceholder: 'Full Name*',
    emailPlaceholder: 'Email Address',
    subjectPlaceholder: 'Message Subject*',
    messagePlaceholder: 'Your Message*',
    submitButtonText: 'Submit'
  },
};

export const WithCustomStyling: Story = {
  args: {
    className: 'max-w-2xl',
    namePlaceholder: 'Your Name*',
    emailPlaceholder: 'Your E-mail',
    subjectPlaceholder: 'Subject*',
    messagePlaceholder: 'Type Your Message*',
    submitButtonText: 'Send Message'
  },
};

