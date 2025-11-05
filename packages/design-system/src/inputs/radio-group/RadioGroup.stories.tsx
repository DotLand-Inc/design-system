import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup, Radio } from '.';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const meta = {
  title: 'Design System/Inputs/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <FormControl>
      <FormLabel>Gender</FormLabel>
      <RadioGroup defaultValue="female">
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
  ),
};

export const Row: Story = {
  render: () => (
    <FormControl>
      <FormLabel>Gender</FormLabel>
      <RadioGroup row defaultValue="female">
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
  ),
};

export const Disabled: Story = {
  render: () => (
    <FormControl>
      <FormLabel>Options</FormLabel>
      <RadioGroup defaultValue="option1">
        <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
        <FormControlLabel value="option2" control={<Radio />} label="Option 2" disabled />
        <FormControlLabel value="option3" control={<Radio />} label="Option 3" />
      </RadioGroup>
    </FormControl>
  ),
};

export const Colors: Story = {
  render: () => (
    <FormControl>
      <FormLabel>Colors</FormLabel>
      <RadioGroup defaultValue="primary">
        <FormControlLabel value="primary" control={<Radio color="primary" />} label="Primary" />
        <FormControlLabel
          value="secondary"
          control={<Radio color="secondary" />}
          label="Secondary"
        />
        <FormControlLabel value="success" control={<Radio color="success" />} label="Success" />
        <FormControlLabel value="error" control={<Radio color="error" />} label="Error" />
      </RadioGroup>
    </FormControl>
  ),
};

export const Sizes: Story = {
  render: () => (
    <FormControl>
      <FormLabel>Sizes</FormLabel>
      <RadioGroup defaultValue="medium">
        <FormControlLabel value="small" control={<Radio size="small" />} label="Small" />
        <FormControlLabel value="medium" control={<Radio size="medium" />} label="Medium" />
      </RadioGroup>
    </FormControl>
  ),
};
