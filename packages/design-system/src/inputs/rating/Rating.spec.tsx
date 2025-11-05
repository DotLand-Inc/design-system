import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Rating } from '.';

describe('Rating', () => {
  it('should render successfully', () => {
    const { container } = render(<Rating />);
    expect(container.querySelector('.MuiRating-root')).toBeInTheDocument();
  });

  it('should render with value', () => {
    const { container } = render(<Rating value={3} readOnly />);
    expect(container.querySelector('.MuiRating-root')).toBeInTheDocument();
  });

  it('should render disabled', () => {
    const { container } = render(<Rating disabled />);
    expect(container.querySelector('.MuiRating-root.Mui-disabled')).toBeInTheDocument();
  });

  it('should render with custom max', () => {
    const { container } = render(<Rating max={10} />);
    const icons = container.querySelectorAll('.MuiRating-icon');
    expect(icons).toHaveLength(10);
  });

  it('should render read only', () => {
    const { container } = render(<Rating readOnly value={4} />);
    const rating = container.querySelector('.MuiRating-root');
    expect(rating).toBeInTheDocument();
  });
});
