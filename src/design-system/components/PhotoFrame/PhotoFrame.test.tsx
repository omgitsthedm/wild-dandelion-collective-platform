import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { PhotoFrame } from './PhotoFrame';

describe('PhotoFrame', () => {
  it('renders an image with alt text', () => {
    render(<PhotoFrame src="/test.webp" alt="Test photo" />);
    const img = screen.getByRole('img', { name: 'Test photo' });
    expect(img).toHaveAttribute('src', '/test.webp');
  });

  it('applies developing class by default', () => {
    const { container } = render(<PhotoFrame src="/test.webp" alt="Test" />);
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.className).toMatch(/developing/);
  });

  it('renders caption when provided', () => {
    render(<PhotoFrame src="/test.webp" alt="Test" caption="Studio detail" />);
    expect(screen.getByText('Studio detail')).toBeInTheDocument();
  });

  it('applies deckled variant', () => {
    const { container } = render(
      <PhotoFrame src="/test.webp" alt="Test" variant="deckled" />
    );
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.className).toMatch(/deckled/);
  });
});
