// components/Navbar.js

import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link href="/">TourHouse</Link>
      </div>
      <ul className={styles.navLinks}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/offers">Offers</Link></li>
        <li><Link href="/contact">Contact Us</Link></li>
        
      </ul>
    </nav>
  );
}

