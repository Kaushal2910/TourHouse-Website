// pages/index.js

import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const places = [
    { src: 'place1.jpeg', name: 'India Gate (New Delhi)' },
    { src: 'place2.jpeg', name: 'Red Fort (Lal Qila, Delhi)' },
    { src: 'place3.jpeg', name: 'Amer Fort (Jaipur, Rajasthan)' },
    { src: 'place4.jpeg', name: 'Ajanta and Ellora Caves (Maharashtra)' },
    { src: 'place5.jpeg', name: 'Khajuraho Temples (Madhya Pradesh)' },
    { src: 'place6.jpeg', name: 'Akshardham Temple (Gandhinagar)' },
    { src: 'place7.jpeg', name: 'Mysore Palace (Karnataka)' },
    { src: 'place8.jpeg', name: 'Khajuraho Temples (Madhya Pradesh)' },
    
  ];

  return (
    <>
      <Head>
        <title>TourHouse | Explore Incredible India</title>
        <meta name="description" content="Book tours across India with TourHouse" />
      </Head>

      {/* Hero Section */}
      <section className={styles.heroSection} style={{ backgroundImage: "url(/place-images/homebannerbg.png)" }}>
        <div className={styles.overlay}>
          <h1>Discover India with TourHouse</h1>
          <p>Explore curated travel experiences to historic and cultural wonders across the country.</p>
          <Link href="/contact" legacyBehavior>
            <a className={styles.cta}>Book a Trip</a>
          </Link>
        </div>
      </section>

      {/* Welcome Section */}
      <section className={styles.welcomeSection}>
        <div className={styles.welcomeContent}>
          <h2 className={styles.fadeIn}>Welcome to TourHouse</h2>
          <p className={styles.slideUp}>We specialize in affordable, guided tour packages to the most iconic destinations in India — from the Taj Mahal to the Himalayas. Plan your next journey with ease, comfort, and expert guidance.</p>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <div className={styles.featureBackground}>
          <div className={styles.featureCard}>
            <h3>Handpicked Packages</h3>
            <p className={styles.featureText}>Our expert travel planners curate each package to make your trip seamless and memorable.</p>
          </div>
          <div className={styles.featureCard}>
            <h3>Certified Guides</h3>
            <p className={styles.featureText}>Explore every destination with local experts who bring history and culture to life.</p>
          </div>
          <div className={styles.featureCard}>
            <h3>Affordable Prices</h3>
            <p className={styles.featureText}>We make your dream journeys accessible with best-in-class pricing and quality service.</p>
          </div>
        </div>
      </section>

      {/* Destination Section */}
      <section className={styles.destinations}>
        <h2>Popular Destinations</h2>
        <div className={styles.gridGallery}>
          {places.map((place, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardImageWrapper}>
                <Image
                  src={`/place-images/${place.src}`}
                  alt={place.name}
                  layout="fill"
                  objectFit="cover"
                  className={styles.cardImage}
                />
                <div className={styles.cardOverlay}>
                  <h3 className={styles.placeName}>{place.name}</h3>
                  <Link href="/contact" legacyBehavior>
                    <a className={styles.exploreBtn}>Explore</a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className={styles.ctaSection}>
        <h2>Ready to explore?</h2>
        <Link href="/contact" legacyBehavior>
          <a className={styles.cta}>Get in Touch</a>
        </Link>
      </section>
    </>
  );
}
