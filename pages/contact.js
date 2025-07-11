// pages/contact.js
import { useState } from 'react';
import styles from '@/styles/Contact.module.css';
import Image from 'next/image';
import toast, { Toaster } from 'react-hot-toast';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      toast.error('Please fill out all fields.');
      return;
    }

    if (!validateEmail(email)) {
      toast.error('Please enter a valid email.');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('https://formspree.io/f/myzjrjap', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast.error('Something went wrong. Try again.');
      }
    } catch (error) {
      toast.error('Network error. Try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      <Toaster position="top-right" />
      <div className={styles.container}>
        {/* Left Section */}
        <div className={styles.formSection}>
          <h1>Let's Plan Your Next Adventure</h1>
          <p>We usually respond within 24 hours.</p>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.fieldGroup}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.fieldGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.fieldGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell us what you're looking for..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className={styles.submitBtn} disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

        {/* Right Section */}
        <div className={styles.imageSection}>
          <Image
            src="/place-images/contactform.jpeg"
            alt="Contact Illustration"
            width={500}
            height={500}
            className={styles.contactImage}
          />
        </div>
      </div>
    </div>
  );
}
