import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from '.';

const meta = {
  title: 'Design System/Inputs/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: 30,
    'aria-label': 'Default',
    sx: { width: 300 },
  },
};

export const Disabled: Story = {
  args: {
    defaultValue: 30,
    disabled: true,
    'aria-label': 'Disabled',
    sx: { width: 300 },
  },
};

export const DiscreteSlider: Story = {
  args: {
    defaultValue: 30,
    step: 10,
    marks: true,
    min: 0,
    max: 100,
    'aria-label': 'Discrete',
    sx: { width: 300 },
  },
};

export const CustomMarks: Story = {
  args: {
    defaultValue: 20,
    step: 10,
    marks: [
      { value: 0, label: '0°C' },
      { value: 20, label: '20°C' },
      { value: 37, label: '37°C' },
      { value: 100, label: '100°C' },
    ],
    min: 0,
    max: 100,
    'aria-label': 'Temperature',
    sx: { width: 300 },
  },
};

export const Range: Story = {
  args: {
    defaultValue: [20, 37],
    'aria-label': 'Range',
    sx: { width: 300 },
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: 300 }}>
      <Slider size="small" defaultValue={30} aria-label="Small" />
      <Slider size="medium" defaultValue={30} aria-label="Medium" />
    </div>
  ),
};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
    defaultValue: 30,
    'aria-label': 'Vertical',
    sx: { height: 300 },
  },
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: 300 }}>
      <Slider defaultValue={30} color="primary" aria-label="Primary" />
      <Slider defaultValue={30} color="secondary" aria-label="Secondary" />
      <Slider defaultValue={30} color="success" aria-label="Success" />
      <Slider defaultValue={30} color="error" aria-label="Error" />
    </div>
  ),
};
