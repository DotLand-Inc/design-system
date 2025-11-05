import type { Meta, StoryObj } from '@storybook/react';
import { Rating } from '.';

const meta = {
  title: 'Design System/Inputs/Rating',
  component: Rating,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Rating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: 2.5,
  },
};

export const Controlled: Story = {
  args: {
    value: 3,
  },
};

export const ReadOnly: Story = {
  args: {
    value: 3.5,
    readOnly: true,
  },
};

export const Disabled: Story = {
  args: {
    value: 2,
    disabled: true,
  },
};

export const HalfPrecision: Story = {
  args: {
    defaultValue: 2.5,
    precision: 0.5,
  },
};

export const CustomMax: Story = {
  args: {
    defaultValue: 7,
    max: 10,
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Rating size="small" defaultValue={3} />
      <Rating size="medium" defaultValue={3} />
      <Rating size="large" defaultValue={3} />
    </div>
  ),
};

export const HighlightSelected: Story = {
  args: {
    defaultValue: 3,
    highlightSelectedOnly: true,
  },
};
