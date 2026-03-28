import type { Metadata } from 'next';
import { SectionHeader } from '@/design-system/components/SectionHeader/SectionHeader';
import { Card } from '@/design-system/components/Card/Card';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Shop',
  description:
    'Hand-selected hair care and clean beauty products from the brands we trust most. Available at The Wild Dandelion Collective in Longmont, CO or for pickup.',
};

type PlaceholderProduct = {
  name: string;
  description: string;
  price: string;
};

const categories: { title: string; products: PlaceholderProduct[] }[] = [
  {
    title: 'Hair Care',
    products: [
      {
        name: 'Davines OI Shampoo',
        description: 'Gentle daily cleanse with roucou oil for absolute softness.',
        price: '$32',
      },
      {
        name: 'Davines OI Conditioner',
        description: 'Weightless hydration that detangles and smooths without buildup.',
        price: '$34',
      },
      {
        name: 'Olaplex No. 3',
        description: 'Weekly at-home bond repair to strengthen and restore.',
        price: '$30',
      },
    ],
  },
  {
    title: 'Clean Beauty',
    products: [
      {
        name: 'R+Co Sun Catcher',
        description: 'Power C boosting leave-in conditioner with vitamin C complex.',
        price: '$36',
      },
      {
        name: 'Innersense Quiet Calm',
        description: 'Curl control cream with organic botanicals. No silicones.',
        price: '$28',
      },
    ],
  },
  {
    title: 'Seasonal Favorites',
    products: [
      {
        name: 'Davines Liquid Spell',
        description: 'Bodifying fluid for fine, limp hair that needs lift.',
        price: '$29',
      },
      {
        name: 'Moroccanoil Treatment',
        description: 'The original argan oil treatment for all hair types.',
        price: '$38',
      },
    ],
  },
];

export default function ShopPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <SectionHeader eyebrow="The Shop" title="Curated for Your Hair" />

        <p className={styles.intro}>
          Hand-selected products from the brands we trust most. Available in the
          salon or for pickup.
        </p>

        {categories.map((category) => (
          <section key={category.title} className={styles.category}>
            <h3 className={styles.categoryTitle}>{category.title}</h3>
            <div className={styles.productGrid}>
              {category.products.map((product) => (
                <Card key={product.name} variant="elevated" className={styles.productCard}>
                  <div className={styles.productImage}>
                    <span className={styles.productImageText}>{product.name}</span>
                  </div>
                  <div className={styles.productBody}>
                    <span className={styles.badge}>Coming Soon</span>
                    <h4 className={styles.productName}>{product.name}</h4>
                    <p className={styles.productDesc}>{product.description}</p>
                    <p className={styles.productPrice}>{product.price}</p>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        ))}

        <aside className={styles.ashleyNote}>
          <p>
            These are the products I use every day behind the chair. They are
            here because they work.
          </p>
          <span className={styles.ashleyAttribution}>— Ashley</span>
        </aside>

        <div className={styles.visitCta}>
          <p className={styles.ctaText}>
            Visit us to shop the full collection
          </p>
        </div>
      </div>
    </main>
  );
}
