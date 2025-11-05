import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Switch } from '.';

describe('Switch', () => {
  it('should render successfully', () => {
    const { container } = render(<Switch />);
    expect(container.querySelector('.MuiSwitch-root')).toBeInTheDocument();
  });

  it('should render checked', () => {
    const { container } = render(<Switch checked />);
    expect(container.querySelector('.MuiSwitch-input')).toBeChecked();
  });

  it('should render unchecked', () => {
    const { container } = render(<Switch checked={false} />);
    expect(container.querySelector('.MuiSwitch-input')).not.toBeChecked();
  });

  it('should render disabled', () => {
    const { container } = render(<Switch disabled />);
    expect(container.querySelector('.MuiSwitch-input')).toBeDisabled();
  });

  it('should render with inputProps', () => {
    const { container } = render(<Switch inputProps={{ 'aria-label': 'Test Switch' }} />);
    const input = container.querySelector('.MuiSwitch-input') as HTMLInputElement;
    expect(input).toBeInTheDocument();
  });

  it('should render with small size', () => {
    const { container } = render(<Switch size="small" />);
    expect(container.querySelector('.MuiSwitch-sizeSmall')).toBeInTheDocument();
  });

  it('should render with medium size', () => {
    const { container } = render(<Switch size="medium" />);
    expect(container.querySelector('.MuiSwitch-root')).toBeInTheDocument();
  });
});
