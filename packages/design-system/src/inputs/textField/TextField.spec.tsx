import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { TextField } from '.';

describe('TextField', () => {
  it('should render successfully', () => {
    render(<TextField label="Name" />);
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
  });

  it('should render with value', () => {
    render(<TextField label="Name" value="John" />);
    expect(screen.getByDisplayValue('John')).toBeInTheDocument();
  });

  it('should render disabled', () => {
    render(<TextField label="Name" disabled />);
    expect(screen.getByLabelText('Name')).toBeDisabled();
  });

  it('should render with placeholder', () => {
    render(<TextField label="Name" placeholder="Enter your name" />);
    expect(screen.getByPlaceholderText('Enter your name')).toBeInTheDocument();
  });

  it('should render with helper text', () => {
    render(<TextField label="Name" helperText="Enter your full name" />);
    expect(screen.getByText('Enter your full name')).toBeInTheDocument();
  });

  it('should render multiline', () => {
    render(<TextField label="Bio" multiline rows={4} />);
    expect(screen.getByLabelText('Bio')).toBeInTheDocument();
  });

  it('should render required', () => {
    render(<TextField label="Name" required />);
    expect(screen.getByLabelText(/Name/)).toBeInTheDocument();
  });
});
