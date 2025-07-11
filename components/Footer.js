// components/Footer.js

import styles from '@/styles/Footer.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin, FaWhatsapp, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Column 1: Logo and subtext */}
        <div className={styles.column}>
          <Image src="/place-images/logo.jpeg" alt="TourHouse Logo" width={140} height={40} className={styles.logo} />
          <p className={styles.subtext}>Discover India with trusted local experts.</p>
        </div>

        {/* Column 2: Page Links */}
        <div className={styles.column}>
          <h4>Quick Links</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/offers">Offers</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            
          </ul>
        </div>

        {/* Column 3: Branches */}
        <div className={styles.column}>
          <h4>Branches</h4>
          <ul>
            <li>Mumbai</li>
            <li>Pune</li>
            <li>Delhi</li>
            <li>Madhya Pradesh</li>
            <li>Kerala</li>
          </ul>
        </div>

        {/* Column 4: Social Icons */}
        <div className={styles.column}>
          <h4>Connect With Us</h4>
          <div className={styles.socialIcons}>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className={styles.bottomLine}>
        <p>© {new Date().getFullYear()} TourHouse. All rights reserved.</p>
      </div>
    </footer>
  );
}
