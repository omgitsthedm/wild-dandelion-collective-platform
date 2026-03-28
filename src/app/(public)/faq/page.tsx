import type { Metadata } from 'next';
import { SectionHeader } from '@/design-system/components/SectionHeader';
import { Accordion } from '@/design-system/components/Accordion';
import { Button } from '@/design-system/components/Button';
import { faqSections } from '@/data/faq';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'FAQ',
};

function buildFaqSchema() {
  const allItems = faqSections.flatMap((section) => section.items);
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export default function FAQPage() {
  const schema = buildFaqSchema();

  return (
    <main className={styles.page}>
      <div className="container">
        <SectionHeader eyebrow="Questions" title="Frequently Asked" />

        {faqSections.map((section) => (
          <div key={section.title} className={styles.section}>
            <h2 className={styles.sectionTitle}>{section.title}</h2>
            {section.items.map((item) => (
              <Accordion
                key={item.question}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        ))}

        <div className={styles.cta}>
          <p className={styles.ctaText}>Still have questions? Get in touch.</p>
          <Button href="/contact" variant="secondary">
            Contact Us
          </Button>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </main>
  );
}
