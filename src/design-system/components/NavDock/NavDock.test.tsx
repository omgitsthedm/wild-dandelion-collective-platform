import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { NavDock } from './NavDock';

describe('NavDock', () => {
  it('renders all four navigation items', () => {
    render(<NavDock currentPath="/" />);
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /services/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /book/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument();
  });

  it('marks the current page as active', () => {
    render(<NavDock currentPath="/services" />);
    const servicesLink = screen.getByRole('link', { name: /services/i });
    expect(servicesLink.className).toMatch(/active/);
  });

  it('renders as a nav element with aria-label', () => {
    render(<NavDock currentPath="/" />);
    expect(screen.getByRole('navigation', { name: /main/i })).toBeInTheDocument();
  });

  it('links to correct paths', () => {
    render(<NavDock currentPath="/" />);
    expect(screen.getByRole('link', { name: /home/i })).toHaveAttribute('href', '/');
    expect(screen.getByRole('link', { name: /services/i })).toHaveAttribute('href', '/services');
    expect(screen.getByRole('link', { name: /book/i })).toHaveAttribute('href', '/book');
    expect(screen.getByRole('link', { name: /contact/i })).toHaveAttribute('href', '/contact');
  });
});
