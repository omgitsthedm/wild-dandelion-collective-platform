'use client';

import { useState } from 'react';
import styles from './page.module.css';

type Product = {
  id: string;
  name: string;
  brand: string;
  stock: number;
  recommended: boolean;
};

/* Placeholder data */
const initialProducts: Product[] = [
  { id: 'p-001', name: 'Olaplex No. 3', brand: 'Olaplex', stock: 2, recommended: true },
  { id: 'p-002', name: 'Purple Shampoo', brand: 'Redken', stock: 8, recommended: false },
  { id: 'p-003', name: 'Moroccan Oil Treatment', brand: 'Moroccanoil', stock: 12, recommended: true },
  { id: 'p-004', name: 'Dry Texture Spray', brand: 'Oribe', stock: 5, recommended: false },
  { id: 'p-005', name: 'Leave-In Conditioner', brand: 'It\'s a 10', stock: 0, recommended: false },
  { id: 'p-006', name: 'Heat Protectant Spray', brand: 'Chi', stock: 15, recommended: true },
  { id: 'p-007', name: 'Curl Cream', brand: 'DevaCurl', stock: 3, recommended: false },
  { id: 'p-008', name: 'Scalp Scrub', brand: 'Briogeo', stock: 7, recommended: false },
];

function getStockClass(stock: number): string {
  if (stock === 0) return styles.stockOut;
  if (stock <= 3) return styles.stockLow;
  return '';
}

function getStockLabel(stock: number): string {
  if (stock === 0) return 'Out of stock';
  if (stock <= 3) return `${stock} left`;
  return `${stock} in stock`;
}

export default function ProductsPage() {
  const [products, setProducts] = useState(initialProducts);

  function toggleRecommend(id: string) {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, recommended: !p.recommended } : p
      )
    );
  }

  return (
    <div className={styles.page}>
      <h1 className={styles.header}>Products</h1>

      <div className={styles.grid}>
        {products.map((product) => (
          <div key={product.id} className={styles.productRow}>
            <div className={styles.productImage} />
            <div className={styles.productInfo}>
              <span className={styles.productName}>{product.name}</span>
              <span className={styles.productBrand}>{product.brand}</span>
            </div>
            <span className={`${styles.stockBadge} ${getStockClass(product.stock)}`}>
              {getStockLabel(product.stock)}
            </span>
            <button
              type="button"
              className={`${styles.starBtn} ${product.recommended ? styles.starActive : ''}`}
              onClick={() => toggleRecommend(product.id)}
              aria-label={product.recommended ? 'Remove recommendation' : 'Recommend product'}
              aria-pressed={product.recommended}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill={product.recommended ? 'currentColor' : 'none'} aria-hidden="true">
                <path
                  d="M9 1.5l2.12 4.3 4.74.69-3.43 3.34.81 4.72L9 12.26l-4.24 2.29.81-4.72L2.14 6.49l4.74-.69L9 1.5z"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
