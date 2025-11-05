import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ButtonGroup } from '.';
import { Button } from '../button';

describe('ButtonGroup', () => {
  it('should render successfully', () => {
    render(
      <ButtonGroup>
        <Button>One</Button>
        <Button>Two</Button>
      </ButtonGroup>
    );
    expect(screen.getByText('One')).toBeInTheDocument();
    expect(screen.getByText('Two')).toBeInTheDocument();
  });

  it('should render with contained variant', () => {
    render(
      <ButtonGroup variant="contained">
        <Button>One</Button>
      </ButtonGroup>
    );
    expect(screen.getByText('One')).toBeInTheDocument();
  });

  it('should render with outlined variant', () => {
    render(
      <ButtonGroup variant="outlined">
        <Button>One</Button>
      </ButtonGroup>
    );
    expect(screen.getByText('One')).toBeInTheDocument();
  });

  it('should render disabled', () => {
    render(
      <ButtonGroup disabled>
        <Button>One</Button>
        <Button>Two</Button>
      </ButtonGroup>
    );
    expect(screen.getByText('One')).toBeDisabled();
    expect(screen.getByText('Two')).toBeDisabled();
  });

  it('should render vertically', () => {
    render(
      <ButtonGroup orientation="vertical">
        <Button>One</Button>
        <Button>Two</Button>
      </ButtonGroup>
    );
    expect(screen.getByText('One')).toBeInTheDocument();
  });
});
