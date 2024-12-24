// src/pages/_app.js

import { Plus_Jakarta_Sans } from "next/font/google";
import "../styles/globals.css"; // Import global CSS
import Nav from "@/components/Home/Nav";
import Footer from "@/components/Home/Footer";

const font = Plus_Jakarta_Sans({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export default function MyApp({ Component, pageProps }) {
  return (
    <div className={`${font.className}`}>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
