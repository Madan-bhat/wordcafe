"use client";
import { motion } from "framer-motion";
import Image from "next/image"; // For optimized image loading
import feature1 from "@/app/images/feature1.jpg";
import feature2 from "@/app/images/feature2.jpg";
import features3 from "@/app/images/feature3.jpg";
import qrcode from "@/app/images/qrcode.png";
import Navbar from "./pages/LandingPage/Navbar";
import WelcomeSection from "./pages/LandingPage/WelcomeSection";
import FeaturesSection from "./pages/LandingPage/FeaturesSection";
import AboutUsSection from "./pages/LandingPage/AboutUs";
import TestimonialsSection from "./pages/LandingPage/TestimonialsSection";
import DownloadSection from "./pages/LandingPage/Download";
import Footer from "./pages/LandingPage/Footer";

const welcomeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.3 },
  },
};

export default function Home() {
  return (
    <div>
      <Navbar />
      <WelcomeSection />
      <FeaturesSection />
      <AboutUsSection />
      {/* <TestimonialsSection />{" "} */}
      {/* Add this if you include the TestimonialsSection */}
      <DownloadSection />
      <Footer />
    </div>
  );
}
