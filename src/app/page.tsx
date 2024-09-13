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
      <section className="py-8 bg-indigo-700 text-white text-center">
        <h3 className="text-xl font-bold mb-4">Stay Updated!</h3>
        <p className="mb-6">
          Sign up for our newsletter to get the latest updates on new features.
        </p>
        <form className="flex justify-center">
          <input
            type="email"
            className="px-4 py-2 rounded-l-lg text-black"
            placeholder="Enter your email"
          />
          <button className="px-6 py-2 bg-indigo-900 hover:bg-indigo-800 rounded-r-lg">
            Subscribe
          </button>
        </form>
      </section>
      <Footer />
    </div>
  );
}
