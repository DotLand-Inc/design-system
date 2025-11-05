import type { Meta, StoryObj } from '@storybook/react';
import { Select, MenuItem } from '.';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

const meta = {
  title: 'Design System/Inputs/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <FormControl sx={{ minWidth: 200 }}>
      <InputLabel>Age</InputLabel>
      <Select defaultValue={20} label="Age">
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  ),
};

export const Disabled: Story = {
  render: () => (
    <FormControl sx={{ minWidth: 200 }}>
      <InputLabel>Age</InputLabel>
      <Select value={20} label="Age" disabled>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  ),
};

export const Multiple: Story = {
  render: () => (
    <FormControl sx={{ minWidth: 200 }}>
      <InputLabel>Names</InputLabel>
      <Select multiple defaultValue={['Oliver', 'Van Henry']} label="Names">
        <MenuItem value="Oliver">Oliver Hansen</MenuItem>
        <MenuItem value="Van Henry">Van Henry</MenuItem>
        <MenuItem value="April Tucker">April Tucker</MenuItem>
      </Select>
    </FormControl>
  ),
};

export const Native: Story = {
  render: () => (
    <FormControl sx={{ minWidth: 200 }}>
      <InputLabel>Age</InputLabel>
      <Select native defaultValue={20} label="Age">
        <option value={10}>Ten</option>
        <option value={20}>Twenty</option>
        <option value={30}>Thirty</option>
      </Select>
    </FormControl>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <FormControl size="small">
        <InputLabel>Small</InputLabel>
        <Select defaultValue={20} label="Small">
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel>Medium</InputLabel>
        <Select defaultValue={20} label="Medium">
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
        </Select>
      </FormControl>
    </div>
  ),
};
