"use client";
import Navbar from "./pages/LandingPage/Navbar";
import WelcomeSection from "./pages/LandingPage/WelcomeSection";
import FeaturesSection from "./pages/LandingPage/FeaturesSection";
import AboutUsSection from "./pages/LandingPage/AboutUs";
import DownloadSection from "./pages/LandingPage/Download";
import Footer from "./pages/LandingPage/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <WelcomeSection />
      <FeaturesSection />
      <AboutUsSection />
      <DownloadSection />
      <Footer />
    </div>
  );
}
