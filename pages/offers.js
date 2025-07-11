// pages/offers.js
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Offers.module.css";

export default function Offers() {
  const deals = [
    {
      img: "place1.jpeg",
      title: "India Gate, New Delhi",
      duration: "2D & 1N",
      discount: "15% Off",
      oldPrice: "₹5,000/-",
      newPrice: "₹4,250/-",
      hotel: "3 Star",
    },
    {
      img: "place2.jpeg",
      title: "Red Fort (Lal Qila), Delhi",
      duration: "2D & 1N",
      discount: "10% Off",
      oldPrice: "₹4,500/-",
      newPrice: "₹4,050/-",
      hotel: "3 Star",
    },
    {
      img: "place3.jpeg",
      title: "Amer Fort, Jaipur",
      duration: "3D & 2N",
      discount: "20% Off",
      oldPrice: "₹7,000/-",
      newPrice: "₹5,600/-",
      hotel: "4 Star",
    },
    {
      img: "place4.jpeg",
      title: "Ajanta & Ellora Caves, Maharashtra",
      duration: "3D & 2N",
      discount: "12% Off",
      oldPrice: "₹6,500/-",
      newPrice: "₹5,720/-",
      hotel: "3 Star",
    },
    {
      img: "place5.jpeg",
      title: "Khajuraho Temples, Madhya Pradesh",
      duration: "3D & 2N",
      discount: "18% Off",
      oldPrice: "₹6,800/-",
      newPrice: "₹5,576/-",
      hotel: "3 Star",
    },
    {
      img: "place6.jpeg",
      title: "Akshardham Temple, Gandhinagar",
      duration: "2D & 1N",
      discount: "15% Off",
      oldPrice: "₹4,200/-",
      newPrice: "₹3,570/-",
      hotel: "3 Star",
    },
    {
      img: "place7.jpeg",
      title: "Mysore Palace, Karnataka",
      duration: "3D & 2N",
      discount: "20% Off",
      oldPrice: "₹7,500/-",
      newPrice: "₹6,000/-",
      hotel: "4 Star",
    },
    {
      img: "place9.jpeg",
      title: "Taj Mahal, Agra",
      duration: "2D & 1N",
      discount: "15% Off",
      oldPrice: "₹5,500/-",
      newPrice: "₹4,675/-",
      hotel: "4 Star",
    },
  ];

  return (
    <>
      <Head>
        <title>TourHouse | Special Offers</title>
      </Head>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Special Offers on India’s Iconic Destinations</h1>
          <p>
            Discover unbeatable deals on curated tours to India’s most beautiful heritage sites.
            Limited time only—book your journey today!
          </p>
        </div>
      </section>

      {/* Deals Grid */}
      <section className={styles.dealsSection}>
        <h2>Explore Offers</h2>
        <div className={styles.grid}>
          {deals.map((deal, index) => (
            <div className={styles.card} key={index}>
              <div className={styles.imageWrapper}>
                <Image
                  src={`/place-images/${deal.img}`}
                  alt={deal.title}
                  layout="fill"
                  objectFit="cover"
                  className={styles.image}
                />
                <div className={styles.discount}>{deal.discount}</div>
              </div>
              <div className={styles.details}>
                <div className={styles.duration}>{deal.duration}</div>
                <h3>{deal.title}</h3>
                <div className={styles.priceRow}>
                  <span className={styles.oldPrice}>{deal.oldPrice}</span>
                  <span className={styles.newPrice}>{deal.newPrice}</span>
                </div>
                <div className={styles.hotel}>
                  Hotel: ⭐ {deal.hotel}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
