import '@/styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer'; // ✅ New import

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      
      <Footer /> {/* ✅ Show footer on every page */}
    </>
  );
}
