import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Slider } from '.';

describe('Slider', () => {
  it('should render successfully', () => {
    render(<Slider aria-label="Volume" />);
    expect(screen.getByRole('slider')).toBeInTheDocument();
  });

  it('should render with value', () => {
    render(<Slider value={30} aria-label="Volume" />);
    expect(screen.getByRole('slider')).toHaveValue('30');
  });

  it('should render disabled', () => {
    render(<Slider disabled aria-label="Volume" />);
    expect(screen.getByRole('slider')).toBeDisabled();
  });

  it('should render with min and max', () => {
    render(<Slider min={0} max={100} defaultValue={50} aria-label="Volume" />);
    expect(screen.getByRole('slider')).toBeInTheDocument();
  });

  it('should render with marks', () => {
    render(<Slider marks aria-label="Volume" />);
    expect(screen.getByRole('slider')).toBeInTheDocument();
  });
});
