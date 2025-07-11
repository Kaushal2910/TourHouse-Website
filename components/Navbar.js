import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false); // Close menu on link click
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link href="/" className={styles.brandName}>
          <span>TourHouse</span>
        </Link>
      </div>

      <div className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? '✕' : '☰'}
      </div>

      <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ''}`}>
        <li><Link href="/" onClick={handleLinkClick}>Home</Link></li>
        <li><Link href="/about" onClick={handleLinkClick}>About</Link></li>
        <li><Link href="/offers" onClick={handleLinkClick}>Offers</Link></li>
        <li><Link href="/contact" onClick={handleLinkClick}>Contact Us</Link></li>
      </ul>
    </nav>
  );
}
