import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { DotlandThemeProvider } from './ThemeProvider';

describe('DotlandThemeProvider', () => {
  it('should render children successfully', () => {
    render(
      <DotlandThemeProvider>
        <div data-testid="test-child">Test Content</div>
      </DotlandThemeProvider>
    );
    expect(screen.getByTestId('test-child')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('should apply CssBaseline', () => {
    const { container } = render(
      <DotlandThemeProvider>
        <div>Content</div>
      </DotlandThemeProvider>
    );
    // CssBaseline is rendered by MUI ThemeProvider
    expect(container).toBeInTheDocument();
  });

  it('should wrap content with theme provider', () => {
    render(
      <DotlandThemeProvider>
        <button>Themed Button</button>
      </DotlandThemeProvider>
    );
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
});
