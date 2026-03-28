import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { SectionHeader } from './SectionHeader';

describe('SectionHeader', () => {
  it('renders heading text', () => {
    render(<SectionHeader title="Signature Services" />);
    expect(screen.getByRole('heading', { name: 'Signature Services' })).toBeInTheDocument();
  });

  it('renders eyebrow when provided', () => {
    render(<SectionHeader eyebrow="Services" title="What We Do" />);
    expect(screen.getByText('Services')).toBeInTheDocument();
  });

  it('renders as h2 by default', () => {
    render(<SectionHeader title="About" />);
    const heading = screen.getByRole('heading');
    expect(heading.tagName).toBe('H2');
  });

  it('renders as h1 when level is 1', () => {
    render(<SectionHeader title="Hero" level={1} />);
    const heading = screen.getByRole('heading');
    expect(heading.tagName).toBe('H1');
  });
});
