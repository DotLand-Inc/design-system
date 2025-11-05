import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Autocomplete } from '.';
import TextField from '@mui/material/TextField';

describe('Autocomplete', () => {
  const options = ['Option 1', 'Option 2', 'Option 3'];

  it('should render successfully', () => {
    render(
      <Autocomplete
        options={options}
        renderInput={params => <TextField {...params} label="Test" />}
      />
    );
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  it('should render with label', () => {
    render(
      <Autocomplete
        options={options}
        renderInput={params => <TextField {...params} label="Select Option" />}
      />
    );
    expect(screen.getByLabelText('Select Option')).toBeInTheDocument();
  });

  it('should render disabled', () => {
    render(
      <Autocomplete
        options={options}
        disabled
        renderInput={params => <TextField {...params} label="Test" />}
      />
    );
    expect(screen.getByRole('combobox')).toBeDisabled();
  });
});
