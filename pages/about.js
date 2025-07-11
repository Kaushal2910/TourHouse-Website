// pages/about.js

import styles from '@/styles/About.module.css';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function About() {
  const reviews = [
    {
      name: 'Aman Verma',
      text: 'The guide was amazing and knew all the hidden gems. One of the best tours I&apos;ve had!',
    },
    {
      name: 'Sarah Thomas',
      text: 'Truly unforgettable experience! Everything was smooth and the guide was super friendly.',
    },
    {
      name: 'Nikhil Rao',
      text: 'Loved the cultural depth they added to every place we visited. Highly recommended.',
    },
  ];

  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <div className={styles.aboutPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1>About TourHouse</h1>
          <p>
            TourHouse is built by passionate travelers who believe that the best journeys connect people,
            stories, and cultures. Whether it&apos;s a historic city or a hidden village, we turn every trip into unforgettable memories.
          </p>
        </div>
        <div className={styles.heroImage}>
          <Image
            src="/place-images/aboutHerobg.jpg"
            alt="About Us"
            width={500}
            height={350}
          />
        </div>
      </section>

      {/* Guides Section */}
      <section className={styles.guides}>
        <h2>Meet Our Guides</h2>
        <div className={styles.guideGrid}>
          <div className={styles.guideCard}>
            <Image
              src="/guide-images/guide1.jpeg"
              alt="Guide 1"
              width={300}
              height={300}
              className={styles.guidePhoto}
            />
            <div className={styles.guideDetails}>
              <h3>Ravi Kumar</h3>
              <p>Specialist in Rajasthan and cultural storytelling. Fluent in Hindi and English.</p>
            </div>
          </div>

          <div className={styles.guideCard}>
            <Image
              src="/guide-images/guide2.jpeg"
              alt="Guide 2"
              width={300}
              height={300}
              className={styles.guidePhoto}
            />
            <div className={styles.guideDetails}>
              <h3>Priya Sharma</h3>
              <p>Kerala and South India expert. Temple tours, backwaters, and local cuisine insights.</p>
            </div>
          </div>

          <div className={styles.guideCard}>
            <Image
              src="/guide-images/guide3.jpeg"
              alt="Guide 3"
              width={300}
              height={300}
              className={styles.guidePhoto}
            />
            <div className={styles.guideDetails}>
              <h3>Aditya Verma</h3>
              <p>Wildlife and nature tour specialist. Fluent in English, Bengali and Assamese.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Auto-Swiping Reviews Section */}
      <section className={styles.reviews}>
        <h2>⭐⭐Client Review⭐⭐</h2>
        <div className={styles.reviewSlider}>
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`${styles.reviewCard} ${
                index === currentReview ? styles.active : styles.inactive
              }`}
            >
              <p>&quot;{review.text}&quot;</p>
              <span>- {review.name}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
