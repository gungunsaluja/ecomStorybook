import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import React from 'react';
import { Input } from '../src/components/Input';

const meta = {
  title: 'Design System/Input',
  component: Input,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Input component for forms with various types and styling options. Supports both single-line inputs and textareas.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'tel', 'url', 'search'],
      description: 'Input type',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Input size',
    },
    variant: {
      control: 'select',
      options: ['default', 'dark', 'light'],
      description: 'Input variant',
    },
    multiline: {
      control: 'boolean',
      description: 'Whether this is a textarea',
    },
    required: {
      control: 'boolean',
      description: 'Whether the input is required',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default Input
export const Default: Story = {
  args: {
    placeholder: 'Enter text here',
  },
};

// Input with Label
export const WithLabel: Story = {
  args: {
    label: 'Your Name',
    placeholder: 'Enter your name',
    required: true,
  },
};

// Dark Input (matches form design)
export const Dark: Story = {
  args: {
    label: 'Your Name*',
    placeholder: 'Your Name*',
    variant: 'dark',
    required: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Dark variant input matching the form design from the image.',
      },
    },
  },
};

// Email Input
export const Email: Story = {
  args: {
    label: 'Your E-mail',
    type: 'email',
    placeholder: 'Your E-mail',
    variant: 'dark',
  },
};

// Subject Input
export const Subject: Story = {
  args: {
    label: 'Subject*',
    placeholder: 'Subject*',
    variant: 'dark',
    required: true,
  },
};

// Message Textarea
export const Message: Story = {
  args: {
    label: 'Type Your Message*',
    placeholder: 'Type Your Messege*',
    variant: 'dark',
    multiline: true,
    rows: 6,
    required: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Textarea for longer messages, matching the form design.',
      },
    },
  },
};

// Form Layout Example
export const FormLayout: Story = {
  render: () => React.createElement('div', {
    style: { 
      background: '#000', 
      padding: '40px', 
      borderRadius: '8px',
      maxWidth: '500px',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    }
  }, [
    React.createElement('div', {
      key: 'row1',
      style: { display: 'flex', gap: '16px' }
    }, [
      React.createElement(Input, {
        key: 'name',
        label: "Your Name*",
        placeholder: "Your Name*",
        variant: "dark",
        required: true,
        style: { flex: 1 }
      }),
      React.createElement(Input, {
        key: 'email',
        label: "Your E-mail",
        type: "email",
        placeholder: "Your E-mail",
        variant: "dark",
        style: { flex: 1 }
      })
    ]),
    React.createElement(Input, {
      key: 'subject',
      label: "Subject*",
      placeholder: "Subject*",
      variant: "dark",
      required: true
    }),
    React.createElement(Input, {
      key: 'message',
      label: "Type Your Message*",
      placeholder: "Type Your Messege*",
      variant: "dark",
      multiline: true,
      rows: 6,
      required: true
    })
  ]),
  parameters: {
    docs: {
      description: {
        story: 'Complete form layout matching the design from the image.',
      },
    },
  },
};

// Size Variants
export const SizeVariants: Story = {
  render: () => React.createElement('div', {
    style: { display: 'flex', flexDirection: 'column', gap: '16px' }
  }, [
    React.createElement(Input, {
      key: 'small',
      label: "Small Input",
      placeholder: "Small input",
      size: "small"
    }),
    React.createElement(Input, {
      key: 'medium',
      label: "Medium Input",
      placeholder: "Medium input",
      size: "medium"
    }),
    React.createElement(Input, {
      key: 'large',
      label: "Large Input",
      placeholder: "Large input",
      size: "large"
    })
  ]),
};

// States
export const States: Story = {
  render: () => React.createElement('div', {
    style: { display: 'flex', flexDirection: 'column', gap: '16px' }
  }, [
    React.createElement(Input, {
      key: 'normal',
      label: "Normal Input",
      placeholder: "Normal state"
    }),
    React.createElement(Input, {
      key: 'error',
      label: "Error Input",
      placeholder: "Error state",
      error: "This field is required"
    }),
    React.createElement(Input, {
      key: 'success',
      label: "Success Input",
      placeholder: "Success state",
      success: "Looks good!"
    }),
    React.createElement(Input, {
      key: 'disabled',
      label: "Disabled Input",
      placeholder: "Disabled state",
      disabled: true
    })
  ]),
};
