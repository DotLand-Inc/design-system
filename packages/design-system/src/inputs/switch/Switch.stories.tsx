import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from '.';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';

const meta = {
  title: 'Design System/Inputs/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Switch>;

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
  render: () => <FormControlLabel control={<Switch />} label="Enable notifications" />,
};

export const Colors: Story = {
  render: () => (
    <FormGroup>
      <FormControlLabel control={<Switch defaultChecked color="primary" />} label="Primary" />
      <FormControlLabel control={<Switch defaultChecked color="secondary" />} label="Secondary" />
      <FormControlLabel control={<Switch defaultChecked color="success" />} label="Success" />
      <FormControlLabel control={<Switch defaultChecked color="error" />} label="Error" />
      <FormControlLabel control={<Switch defaultChecked color="warning" />} label="Warning" />
      <FormControlLabel control={<Switch defaultChecked color="info" />} label="Info" />
    </FormGroup>
  ),
};

export const Sizes: Story = {
  render: () => (
    <FormGroup row>
      <FormControlLabel control={<Switch size="small" defaultChecked />} label="Small" />
      <FormControlLabel control={<Switch size="medium" defaultChecked />} label="Medium" />
    </FormGroup>
  ),
};

export const LabelPlacement: Story = {
  render: () => (
    <FormGroup>
      <FormControlLabel control={<Switch defaultChecked />} label="End" labelPlacement="end" />
      <FormControlLabel control={<Switch defaultChecked />} label="Start" labelPlacement="start" />
      <FormControlLabel control={<Switch defaultChecked />} label="Top" labelPlacement="top" />
      <FormControlLabel
        control={<Switch defaultChecked />}
        label="Bottom"
        labelPlacement="bottom"
      />
    </FormGroup>
  ),
};
