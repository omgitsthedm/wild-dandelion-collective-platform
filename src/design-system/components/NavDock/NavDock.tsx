import styles from './NavDock.module.css';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Book', href: '/book' },
  { label: 'Contact', href: '/contact' },
] as const;

type NavDockProps = {
  currentPath: string;
};

function isActive(href: string, currentPath: string): boolean {
  if (href === '/') return currentPath === '/';
  return currentPath.startsWith(href);
}

export function NavDock({ currentPath }: NavDockProps) {
  return (
    <nav className={styles.dock} aria-label="Main navigation">
      {NAV_ITEMS.map(({ label, href }) => (
        <a
          key={href}
          href={href}
          className={`${styles.item} ${isActive(href, currentPath) ? styles.active : ''}`}
          aria-current={isActive(href, currentPath) ? 'page' : undefined}
        >
          {label}
        </a>
      ))}
    </nav>
  );
}
