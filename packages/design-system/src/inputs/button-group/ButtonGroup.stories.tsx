import type { Meta, StoryObj } from '@storybook/react';
import { ButtonGroup } from '.';
import { Button } from '../button';

const meta = {
  title: 'Design System/Inputs/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Contained: Story = {
  args: {
    variant: 'contained',
    children: (
      <>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </>
    ),
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: (
      <>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </>
    ),
  },
};

export const Text: Story = {
  args: {
    variant: 'text',
    children: (
      <>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </>
    ),
  },
};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
    variant: 'contained',
    children: (
      <>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </>
    ),
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    variant: 'contained',
    children: (
      <>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </>
    ),
  },
};

export const Colors: Story = {
  args: {
    variant: 'contained',
    children: (
      <>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button color="success">Success</Button>
      </>
    ),
  },
};
