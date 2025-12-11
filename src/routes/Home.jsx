import React from "react";
import { Helmet } from "react-helmet-async";

import Hero from "../components/Hero";
import Faqs from "./faqs";
// Remove this import: import Footer from "../components/Footer"; // ❌ No longer needed here

export default function Home() {
  return (
    <>
      <Helmet>
        <title>ECOM NETWORK | Reliable Fiber Internet in Kenya</title>
        <meta
          name="description"
          content="Get fast, affordable, and reliable fiber internet across Kenya. ECOM NETWORK delivers top-tier connectivity to rural and urban communities."
        />
        <meta
          property="og:title"
          content="Ecom Network | Fast Fiber Internet in Kenya"
        />
        <meta
          property="og:description"
          content="Experience high-speed fiber internet by ECOM NETWORK. Designed for homes and businesses across Kenya."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ecom-net.netlify.app" />
        {/* <meta property="og:image" content="https://ecom-net.netlify.app/assets/og-image.webp" /> */}
      </Helmet>

      <section id="hero">
        <Hero />
      </section>

      {/* ❌ Remove this line: <Footer /> */}
    </>
  );
}