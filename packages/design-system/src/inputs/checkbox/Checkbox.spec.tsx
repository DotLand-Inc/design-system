import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Checkbox } from '.';

describe('Checkbox', () => {
  it('should render successfully', () => {
    render(<Checkbox />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('should render checked', () => {
    render(<Checkbox checked />);
    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  it('should render unchecked', () => {
    render(<Checkbox checked={false} />);
    expect(screen.getByRole('checkbox')).not.toBeChecked();
  });

  it('should render disabled', () => {
    render(<Checkbox disabled />);
    expect(screen.getByRole('checkbox')).toBeDisabled();
  });

  it('should render with aria-label', () => {
    render(<Checkbox inputProps={{ 'aria-label': 'Test Checkbox' }} />);
    expect(screen.getByLabelText('Test Checkbox')).toBeInTheDocument();
  });

  it('should render with default color', () => {
    render(<Checkbox color="default" />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('should render with primary color', () => {
    render(<Checkbox color="primary" />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('should render with secondary color', () => {
    render(<Checkbox color="secondary" />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });
});
