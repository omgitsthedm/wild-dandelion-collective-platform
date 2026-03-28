import type { Metadata } from 'next';
import { Button } from '@/design-system/components/Button';
import { Input } from '@/design-system/components/Input';

export const metadata: Metadata = {
  title: 'Login',
};

export default function LoginPage() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '80dvh',
      }}
    >
      <form
        method="POST"
        action="/api/admin/auth"
        style={{
          width: '100%',
          maxWidth: '360px',
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-lg)',
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'var(--text-h2)',
              marginBottom: 'var(--space-xs)',
            }}
          >
            Welcome back
          </h1>
          <p style={{ color: 'var(--color-ink-light)', fontSize: 'var(--text-small)' }}>
            Sign in to your dashboard
          </p>
        </div>
        <Input label="Password" name="password" type="password" required />
        <Button type="submit" fullWidth>
          Sign In
        </Button>
      </form>
    </div>
  );
}
