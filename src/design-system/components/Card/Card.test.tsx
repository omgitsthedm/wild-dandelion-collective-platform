import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Card } from './Card';

describe('Card', () => {
  it('renders children', () => {
    render(<Card>Card content</Card>);
    expect(screen.getByText('Card content')).toBeInTheDocument();
  });

  it('renders as a link when href is provided', () => {
    render(<Card href="/services/blonde">Blonde services</Card>);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/services/blonde');
  });

  it('applies interactive class when href is present', () => {
    render(<Card href="/services">Services</Card>);
    const link = screen.getByRole('link');
    expect(link.className).toMatch(/interactive/);
  });

  it('renders elevated variant', () => {
    render(<Card variant="elevated">Elevated</Card>);
    expect(screen.getByText('Elevated').closest('div')?.className).toMatch(/elevated/);
  });

  it('renders flat variant by default', () => {
    render(<Card>Default</Card>);
    expect(screen.getByText('Default').closest('div')?.className).toMatch(/flat/);
  });
});
