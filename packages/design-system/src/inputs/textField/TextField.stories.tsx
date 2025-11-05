import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from '.';

const meta = {
  title: 'Design System/Inputs/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Name',
    sx: { width: 300 },
  },
};

export const Outlined: Story = {
  args: {
    label: 'Outlined',
    variant: 'outlined',
    sx: { width: 300 },
  },
};

export const Filled: Story = {
  args: {
    label: 'Filled',
    variant: 'filled',
    sx: { width: 300 },
  },
};

export const Standard: Story = {
  args: {
    label: 'Standard',
    variant: 'standard',
    sx: { width: 300 },
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Email',
    helperText: 'Enter your email address',
    sx: { width: 300 },
  },
};

export const WithError: Story = {
  args: {
    label: 'Email',
    error: true,
    helperText: 'Invalid email address',
    sx: { width: 300 },
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    disabled: true,
    sx: { width: 300 },
  },
};

export const Required: Story = {
  args: {
    label: 'Required Field',
    required: true,
    sx: { width: 300 },
  },
};

export const Multiline: Story = {
  args: {
    label: 'Bio',
    multiline: true,
    rows: 4,
    sx: { width: 300 },
  },
};

export const WithDefaultValue: Story = {
  args: {
    label: 'Name',
    defaultValue: 'John Doe',
    sx: { width: 300 },
  },
};

export const Password: Story = {
  args: {
    label: 'Password',
    type: 'password',
    sx: { width: 300 },
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <TextField label="Small" size="small" sx={{ width: 300 }} />
      <TextField label="Medium" size="medium" sx={{ width: 300 }} />
    </div>
  ),
};

export const FullWidth: Story = {
  args: {
    label: 'Full Width',
    fullWidth: true,
  },
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <TextField label="Primary" color="primary" focused sx={{ width: 300 }} />
      <TextField label="Secondary" color="secondary" focused sx={{ width: 300 }} />
      <TextField label="Success" color="success" focused sx={{ width: 300 }} />
      <TextField label="Error" color="error" focused sx={{ width: 300 }} />
    </div>
  ),
};
