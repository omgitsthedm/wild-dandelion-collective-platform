import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Input } from './Input';

describe('Input', () => {
  it('renders with a label', () => {
    render(<Input label="Full Name" name="name" />);
    expect(screen.getByLabelText('Full Name')).toBeInTheDocument();
  });

  it('renders a textarea when type is textarea', () => {
    render(<Input label="Message" name="message" type="textarea" />);
    expect(screen.getByRole('textbox')).toBeInstanceOf(HTMLTextAreaElement);
  });

  it('renders an input by default', () => {
    render(<Input label="Email" name="email" />);
    expect(screen.getByRole('textbox')).toBeInstanceOf(HTMLInputElement);
  });

  it('shows error message when provided', () => {
    render(<Input label="Email" name="email" error="Required field" />);
    expect(screen.getByText('Required field')).toBeInTheDocument();
  });

  it('marks input as required when required prop is true', () => {
    render(<Input label="Phone" name="phone" required />);
    expect(screen.getByRole('textbox')).toBeRequired();
  });
});
