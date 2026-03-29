'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/collective', label: 'Collective' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Handle escape key to close menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const handleBackdropClick = useCallback((e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsMobileMenuOpen(false);
    }
  }, []);

  return (
    <>
      <header 
        className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}
        role="banner"
      >
        <div className={styles.container}>
          {/* Logo */}
          <Link href="/" className={styles.logo} aria-label="The Wild Dandelion Collective - Home">
            <span className={styles.logoIcon}>🌸</span>
            <span className={styles.logoText}>Wild Dandelion</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className={styles.desktopNav} aria-label="Main navigation">
            <ul className={styles.navList}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`${styles.navLink} ${isActive(link.href) ? styles.active : ''}`}
                    aria-current={isActive(link.href) ? 'page' : undefined}
                  >
                    {link.label}
                    <span className={styles.navLinkUnderline} />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Button */}
          <div className={styles.ctaWrapper}>
            <Link href="/book" className={styles.ctaButton}>
              <span>Book Now</span>
              <span className={styles.ctaSparkle}>✨</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`${styles.menuButton} ${isMobileMenuOpen ? styles.open : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <span className={styles.menuLine} />
            <span className={styles.menuLine} />
            <span className={styles.menuLine} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}
        aria-hidden={!isMobileMenuOpen}
        onClick={handleBackdropClick}
      >
        {/* Close Button */}
        <button
          className={styles.closeButton}
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label="Close menu"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className={styles.mobileMenuContent} onClick={(e) => e.stopPropagation()}>
          <nav className={styles.mobileNav} aria-label="Mobile navigation">
            <ul className={styles.mobileNavList}>
              {navLinks.map((link, index) => (
                <li 
                  key={link.href}
                  className={styles.mobileNavItem}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <Link
                    href={link.href}
                    className={`${styles.mobileNavLink} ${isActive(link.href) ? styles.active : ''}`}
                    aria-current={isActive(link.href) ? 'page' : undefined}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className={styles.mobileNavNumber}>0{index + 1}</span>
                    <span className={styles.mobileNavLabel}>{link.label}</span>
                    <span className={styles.mobileNavArrow}>→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.mobileCta}>
            <Link href="/book" className={styles.mobileCtaButton} onClick={() => setIsMobileMenuOpen(false)}>
              Book Your Visit
              <span>✨</span>
            </Link>
          </div>

          <div className={styles.mobileInfo}>
            <p className={styles.mobileAddress}>📍 413 Main St, Longmont, CO</p>
            <p className={styles.mobilePhone}>
              <a href="tel:+13038347572">📞 (303) 834-7572</a>
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className={styles.mobileBlob1} />
        <div className={styles.mobileBlob2} />
      </div>
    </>
  );
}
