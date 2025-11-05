import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Fab } from '.';

describe('Fab', () => {
  it('should render successfully', () => {
    render(<Fab aria-label="add">+</Fab>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should render with text', () => {
    render(<Fab aria-label="add">Add</Fab>);
    expect(screen.getByText('Add')).toBeInTheDocument();
  });

  it('should render disabled', () => {
    render(
      <Fab disabled aria-label="add">
        +
      </Fab>
    );
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('should render with primary color', () => {
    render(
      <Fab color="primary" aria-label="add">
        +
      </Fab>
    );
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should render with small size', () => {
    render(
      <Fab size="small" aria-label="add">
        +
      </Fab>
    );
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should render with medium size', () => {
    render(
      <Fab size="medium" aria-label="add">
        +
      </Fab>
    );
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should render with large size', () => {
    render(
      <Fab size="large" aria-label="add">
        +
      </Fab>
    );
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
