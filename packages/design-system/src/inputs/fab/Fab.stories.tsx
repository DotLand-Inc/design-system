import type { Meta, StoryObj } from '@storybook/react';
import { Fab } from '.';

const meta = {
  title: 'Design System/Inputs/Fab',
  component: Fab,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Fab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    color: 'primary',
    'aria-label': 'add',
    children: '+',
  },
};

export const Secondary: Story = {
  args: {
    color: 'secondary',
    'aria-label': 'edit',
    children: '✎',
  },
};

export const Extended: Story = {
  args: {
    variant: 'extended',
    'aria-label': 'add',
    children: 'Add Item',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    'aria-label': 'add',
    children: '+',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    color: 'primary',
    'aria-label': 'add',
    children: '+',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    color: 'primary',
    'aria-label': 'add',
    children: '+',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    color: 'primary',
    'aria-label': 'add',
    children: '+',
  },
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px' }}>
      <Fab color="primary" aria-label="primary">
        P
      </Fab>
      <Fab color="secondary" aria-label="secondary">
        S
      </Fab>
      <Fab color="success" aria-label="success">
        ✓
      </Fab>
      <Fab color="error" aria-label="error">
        ✗
      </Fab>
      <Fab color="info" aria-label="info">
        i
      </Fab>
    </div>
  ),
};
