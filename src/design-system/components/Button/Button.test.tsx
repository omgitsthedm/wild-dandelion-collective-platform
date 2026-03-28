import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Button } from './Button';

describe('Button', () => {
  it('renders with children text', () => {
    render(<Button>Book Now</Button>);
    expect(screen.getByRole('button', { name: 'Book Now' })).toBeInTheDocument();
  });

  it('renders primary variant by default', () => {
    render(<Button>Book Now</Button>);
    const btn = screen.getByRole('button');
    expect(btn.className).toMatch(/primary/);
  });

  it('renders secondary variant', () => {
    render(<Button variant="secondary">Explore</Button>);
    const btn = screen.getByRole('button');
    expect(btn.className).toMatch(/secondary/);
  });

  it('renders ghost variant', () => {
    render(<Button variant="ghost">Learn More</Button>);
    const btn = screen.getByRole('button');
    expect(btn.className).toMatch(/ghost/);
  });

  it('renders as a link when href is provided', () => {
    render(<Button href="/book">Book Now</Button>);
    const link = screen.getByRole('link', { name: 'Book Now' });
    expect(link).toHaveAttribute('href', '/book');
  });

  it('applies fullWidth class when fullWidth is true', () => {
    render(<Button fullWidth>Book Now</Button>);
    const btn = screen.getByRole('button');
    expect(btn.className).toMatch(/fullWidth/);
  });
});
