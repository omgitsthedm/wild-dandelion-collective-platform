import { SectionHeader } from '@/design-system/components/SectionHeader';
import { Button } from '@/design-system/components/Button';

export default function Home() {
  return (
    <main className="section">
      <div className="container">
        <SectionHeader
          eyebrow="Longmont, Colorado"
          title="The Wild Dandelion Collective"
          level={1}
        />
        <p>
          A verdant space for beauty, art, and curated living. Walk through our
          doors and feel the warmth of a space designed to inspire, adorn, and
          gather.
        </p>
        <div style={{ display: 'flex', gap: 'var(--space-md)', marginTop: 'var(--space-lg)' }}>
          <Button href="/book">Book a Visit</Button>
          <Button href="/services" variant="secondary">
            Explore Services
          </Button>
        </div>
      </div>
    </main>
  );
}
