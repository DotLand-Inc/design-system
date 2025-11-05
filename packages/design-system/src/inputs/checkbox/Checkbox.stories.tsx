import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '.';
import FormControlLabel from '@mui/material/FormControlLabel';

const meta = {
  title: 'Design System/Inputs/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    checked: true,
  },
};

export const WithLabel: Story = {
  render: () => <FormControlLabel control={<Checkbox />} label="Accept terms" />,
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <FormControlLabel control={<Checkbox defaultChecked color="primary" />} label="Primary" />
      <FormControlLabel control={<Checkbox defaultChecked color="secondary" />} label="Secondary" />
      <FormControlLabel control={<Checkbox defaultChecked color="success" />} label="Success" />
      <FormControlLabel control={<Checkbox defaultChecked color="error" />} label="Error" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <Checkbox size="small" defaultChecked />
      <Checkbox size="medium" defaultChecked />
      <Checkbox size="large" defaultChecked />
    </div>
  ),
};

export const Indeterminate: Story = {
  args: {
    indeterminate: true,
  },
};
