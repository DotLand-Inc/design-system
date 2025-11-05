import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { RadioGroup, Radio } from '.';
import FormControlLabel from '@mui/material/FormControlLabel';

describe('RadioGroup', () => {
  it('should render successfully', () => {
    render(
      <RadioGroup>
        <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
        <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
      </RadioGroup>
    );
    expect(screen.getByLabelText('Option 1')).toBeInTheDocument();
    expect(screen.getByLabelText('Option 2')).toBeInTheDocument();
  });

  it('should render with default value', () => {
    render(
      <RadioGroup defaultValue="option1">
        <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
        <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
      </RadioGroup>
    );
    expect(screen.getByLabelText('Option 1')).toBeChecked();
  });

  it('should render horizontally', () => {
    render(
      <RadioGroup row>
        <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
        <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
      </RadioGroup>
    );
    expect(screen.getByLabelText('Option 1')).toBeInTheDocument();
  });
});
