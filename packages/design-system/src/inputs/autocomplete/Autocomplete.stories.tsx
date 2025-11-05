import type { Meta, StoryObj } from '@storybook/react';
import { Autocomplete } from '.';
import TextField from '@mui/material/TextField';

const meta = {
  title: 'Design System/Inputs/Autocomplete',
  component: Autocomplete,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Autocomplete>;

export default meta;
type Story = StoryObj<typeof meta>;

const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];

export const Default: Story = {
  args: {
    options,
    renderInput: params => <TextField {...params} label="Select Option" />,
    sx: { width: 300 },
  },
};

export const WithValue: Story = {
  args: {
    options,
    defaultValue: 'Option 2',
    renderInput: params => <TextField {...params} label="Select Option" />,
    sx: { width: 300 },
  },
};

export const Disabled: Story = {
  args: {
    options,
    disabled: true,
    renderInput: params => <TextField {...params} label="Select Option" />,
    sx: { width: 300 },
  },
};

export const Multiple: Story = {
  args: {
    options,
    multiple: true,
    renderInput: params => <TextField {...params} label="Select Options" />,
    sx: { width: 300 },
  },
};

export const FreeSolo: Story = {
  args: {
    options,
    freeSolo: true,
    renderInput: params => <TextField {...params} label="Type or Select" />,
    sx: { width: 300 },
  },
};
