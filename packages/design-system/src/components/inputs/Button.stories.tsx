import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  title: 'Inputs/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'error', 'info', 'warning'],
      description: 'The color of the button',
    },
    variant: {
      control: 'select',
      options: ['contained', 'outlined', 'text'],
      description: 'The variant to use',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The size of the button',
    },
    disabled: {
      control: 'boolean',
      description: 'If true, the button will be disabled',
    },
    fullWidth: {
      control: 'boolean',
      description: 'If true, the button will take up the full width of its container',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    color: 'primary',
    variant: 'contained',
    size: 'medium',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    color: 'secondary',
    variant: 'contained',
    size: 'medium',
  },
};

export const Outlined: Story = {
  args: {
    children: 'Outlined Button',
    color: 'primary',
    variant: 'outlined',
    size: 'medium',
  },
};

export const Text: Story = {
  args: {
    children: 'Text Button',
    color: 'primary',
    variant: 'text',
    size: 'medium',
  },
};

export const Small: Story = {
  args: {
    children: 'Small Button',
    color: 'primary',
    variant: 'contained',
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    children: 'Large Button',
    color: 'primary',
    variant: 'contained',
    size: 'large',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    color: 'primary',
    variant: 'contained',
    disabled: true,
  },
};

export const Success: Story = {
  args: {
    children: 'Success Button',
    color: 'success',
    variant: 'contained',
  },
};

export const Error: Story = {
  args: {
    children: 'Error Button',
    color: 'error',
    variant: 'contained',
  },
};

export const Warning: Story = {
  args: {
    children: 'Warning Button',
    color: 'warning',
    variant: 'contained',
  },
};

export const Info: Story = {
  args: {
    children: 'Info Button',
    color: 'info',
    variant: 'contained',
  },
};

export const FullWidth: Story = {
  args: {
    children: 'Full Width Button',
    color: 'primary',
    variant: 'contained',
    fullWidth: true,
  },
  parameters: {
    layout: 'padded',
  },
};
