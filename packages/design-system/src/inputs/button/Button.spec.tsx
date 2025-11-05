import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Button } from '.';

describe('Button', () => {
  it('should render successfully', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should render with text content', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('should render with primary color', () => {
    render(<Button color="primary">Primary</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should render with contained variant', () => {
    render(<Button variant="contained">Contained</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should render with outlined variant', () => {
    render(<Button variant="outlined">Outlined</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should render with text variant', () => {
    render(<Button variant="text">Text</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should render disabled button', () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('should render with small size', () => {
    render(<Button size="small">Small</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should render with medium size', () => {
    render(<Button size="medium">Medium</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should render with large size', () => {
    render(<Button size="large">Large</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
