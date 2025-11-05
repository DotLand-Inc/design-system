import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Select, MenuItem } from '.';

describe('Select', () => {
  it('should render successfully', () => {
    render(
      <Select value={10}>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
      </Select>
    );
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  it('should render with label', () => {
    render(
      <Select value={10} label="Age">
        <MenuItem value={10}>Ten</MenuItem>
      </Select>
    );
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  it('should render disabled', () => {
    const { container } = render(
      <Select value={10} disabled>
        <MenuItem value={10}>Ten</MenuItem>
      </Select>
    );
    expect(container.querySelector('.MuiSelect-select.Mui-disabled')).toBeInTheDocument();
  });
});
