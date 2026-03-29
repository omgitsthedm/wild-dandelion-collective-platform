'use client';

import { useState } from 'react';
import { Button } from '@/design-system/components/Button';
import { galleryItems } from '@/lib/images';
import styles from './page.module.css';

const categories = [
  { id: 'all', label: 'All Work' },
  { id: 'blonde', label: 'Blonde' },
  { id: 'brunette', label: 'Brunette' },
  { id: 'vivid', label: 'Vivid Colors' },
  { id: 'bridal', label: 'Bridal' },
  { id: 'cuts', label: 'Cuts' },
];

const stats = [
  { number: '2,000+', label: 'Happy Clients' },
  { number: '20+', label: 'Years Experience' },
  { number: '50+', label: 'Bridal Styles' },
  { number: '100%', label: 'Satisfaction' },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <img 
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80" 
            alt="Salon interior"
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <span className={styles.heroEyebrow}>Portfolio</span>
            <h1 className={styles.heroTitle}>
              Hair <span className={styles.gradientText}>transformations</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Every client is a canvas. Browse through some of my favorite 
              transformations and imagine what's possible for you.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.stats}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            {stats.map((stat) => (
              <div key={stat.label} className={styles.statCard}>
                <span className={styles.statNumber}>{stat.number}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className={styles.gallery}>
        <div className={styles.container}>
          {/* Filter */}
          <div className={styles.filterWrapper}>
            <div className={styles.categoryFilter}>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  className={`${styles.filterButton} ${activeCategory === cat.id ? styles.active : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className={styles.galleryGrid}>
            {filteredItems.map((item, index) => (
              <div 
                key={item.id} 
                className={styles.galleryItem}
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => setSelectedImage(item)}
              >
                <div className={styles.imageWrapper}>
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <div className={styles.imageOverlay}>
                    <div className={styles.overlayContent}>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                      <div className={styles.tags}>
                        {item.tags.map(tag => (
                          <span key={tag} className={styles.tag}>{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className={styles.noResults}>
              <p>No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className={styles.lightbox} onClick={() => setSelectedImage(null)}>
          <button className={styles.lightboxClose} aria-label="Close">×</button>
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.lightboxImageWrapper}>
              <img src={selectedImage.image} alt={selectedImage.title} />
            </div>
            <div className={styles.lightboxInfo}>
              <span className={styles.lightboxCategory}>{selectedImage.category}</span>
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.description}</p>
              <div className={styles.lightboxTags}>
                {selectedImage.tags.map(tag => (
                  <span key={tag} className={styles.lightboxTag}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Instagram CTA */}
      <section className={styles.instagram}>
        <div className={styles.container}>
          <div className={styles.instagramCard}>
            <div className={styles.instagramIconWrapper}>
              <img 
                src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&q=80" 
                alt="Flowers"
                className={styles.instagramBgImage}
              />
              <span className={styles.instagramIcon}>📸</span>
            </div>
            <h2 className={styles.instagramTitle}>See more on Instagram</h2>
            <p className={styles.instagramText}>
              Follow along for daily transformations, behind-the-scenes, 
              and hair tips. Tag us in your photos for a chance to be featured!
            </p>
            <div className={styles.instagramHandle}>@thewilddandelioncollective</div>
            <Button href="https://instagram.com" variant="outline" target="_blank">
              Follow on Instagram
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              Ready for your own transformation?
            </h2>
            <p className={styles.ctaText}>
              Let's create something beautiful together. Book your appointment 
              and let's bring your hair dreams to life.
            </p>
            <Button href="/book" size="large">
              Book Your Appointment
              <span className={styles.buttonSparkle}>✨</span>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
