"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image"; // For optimized image loading
import feature1 from "@/app/images/feature1.jpg";
import feature2 from "@/app/images/feature2.jpg";
import features3 from "@/app/images/feature3.jpg";
import qrcode from "@/app/images/qrcode.png";

const welcomeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.3 },
  },
};

const liquidVariants = {
  hidden: { clipPath: "inset(0% 0% 100% 0%)" },
  visible: {
    clipPath: "inset(0% 0% 0% 0%)",
    transition: { duration: 2, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
        controls.start("hidden");
      } else {
        setIsScrolled(false);
        controls.start("visible");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6">
        <div className="text-2xl font-bold tracking-widest">WORD CAFE</div>
        <div className="hidden md:flex space-x-8 uppercase tracking-wider">
          <a href="#about" className="hover:text-indigo-400">
            About
          </a>
          <a href="#features" className="hover:text-indigo-400">
            Features
          </a>
          <a href="#download" className="hover:text-indigo-400">
            Download
          </a>
          <a href="#contact" className="hover:text-indigo-400">
            Contact
          </a>
        </div>
        <button className="bg-indigo-600 px-5 py-2 rounded-full hover:bg-indigo-700 transition">
          Sign In
        </button>
      </nav>

      {/* Welcome Section */}
      <section
        style={{ backgroundImage: `url('/images/image_background.png')` }}
        className="flex flex-col items-center justify-center text-center min-h-screen relative z-10 bg-cover bg-center"
      >
        <motion.div
          className="text-center relative overflow-hidden"
          initial="hidden"
          animate="visible"
          variants={welcomeVariants}
        >
          <motion.h1
            className="text-7xl md:text-9xl font-extrabold mb-8 tracking-tight"
            whileHover={{ scale: 0.9 }} // Zoom-out effect on hover
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            Welcome.
          </motion.h1>
          <p className="text-lg md:text-2xl max-w-2xl mb-12 px-6">
            Transform your handwritten stories into digital ones. A platform
            where creativity meets technology, allowing users to share their
            stories and connect with a community of writers. Welcome to the
            social media for stories.
          </p>
          <a href="#features" className="text-2xl mt-8 inline-block">
            <motion.div
              className="arrow-down animate-bounce"
              style={{ fontSize: "3rem" }}
            >
              ↓
            </motion.div>
          </a>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-black py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-center mb-16">
            Features
          </h2>

          {/* Feature 1 */}
          <motion.div
            className="flex flex-col md:flex-row items-center justify-between mb-20"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="md:w-1/2 text-left">
              <h3 className="text-2xl font-bold mb-4">
                Write and Share Your Stories
              </h3>
              <p className="text-lg mb-4">
                Our platform offers a sophisticated text editor that allows you
                to write your stories with full creative freedom. Whether you
                prefer typing or using a stylus for handwritten input, our
                editor supports both methods seamlessly. You can format your
                text, add images, and even integrate multimedia elements to
                enhance your storytelling.
              </p>
              <p className="text-lg">
                Share your stories directly with the community, engage with
                other writers, and receive feedback through comments and
                ratings. Our platform fosters a collaborative environment where
                your creativity can flourish.
              </p>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <Image
                src={feature1}
                alt="Write and Share"
                className="w-5/6 rounded-xl ml-24 h-auto"
              />
            </div>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            className="flex flex-col md:flex-row-reverse items-center justify-between mb-20"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="md:w-1/2 text-left">
              <h3 className="text-2xl font-bold mb-4">AI-Powered Filters</h3>
              <p className="text-lg mb-4">
                Leverage advanced AI technology to enhance your handwritten
                stories. Our AI-powered filters automatically correct grammar,
                improve structure, and suggest stylistic changes, ensuring your
                content is polished and professional. This feature helps you
                maintain high standards of writing while saving you valuable
                time.
              </p>
              <p className="text-lg">
                Tailor the level of AI intervention to your preference, from
                minimal adjustments to comprehensive overhauls. You retain full
                control over the final output, making sure your unique voice and
                style shine through.
              </p>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <Image
                src={feature2}
                alt="AI Filters"
                className="w-5/6 rounded-xl h-auto"
              />
            </div>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            className="flex flex-col md:flex-row items-center justify-between"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="md:w-1/2 text-left">
              <h3 className="text-2xl font-bold mb-4">Story Visualization</h3>
              <p className="text-lg mb-4">
                Bring your stories to life with our stunning visualization
                tools. Our platform provides a variety of graphic elements and
                illustrations that you can use to enhance your narrative.
                Visualize characters, settings, and key moments to make your
                stories more immersive and engaging.
              </p>
              <p className="text-lg">
                Customize visual elements to match your story's tone and style.
                With easy-to-use drag-and-drop features, you can create
                captivating visuals that complement your written content and
                captivate your readers.
              </p>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <Image
                src={features3}
                alt="Story Visualization"
                className="w-5/6 ml-24 rounded-xl h-auto"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="bg-gray-800 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-center mb-12">
            About Us
          </h2>
          <div className="flex flex-col items-center">
            {/* Text */}
            <div className="text-left mb-8">
              <p className="text-lg mb-4">
                We are committed to revolutionizing the way stories are shared
                and enjoyed. Our platform combines advanced technology with a
                passion for storytelling, offering a unique space for writers
                and readers alike.
              </p>
              <p className="text-lg">
                Discover the power of your words and connect with a community of
                like-minded individuals who share your love for storytelling.
              </p>
            </div>

            {/* Makers' Images (Placed Below in a Row) */}
            <div className="flex justify-center space-x-4">
              <Image
                src="/images/maker1.png"
                alt="Maker 1"
                width={80}
                height={80}
                className="rounded-full"
              />
              <Image
                src="/images/maker2.png"
                alt="Maker 2"
                width={80}
                height={80}
                className="rounded-full"
              />
              <Image
                src="/images/maker3.png"
                alt="Maker 3"
                width={80}
                height={80}
                className="rounded-full"
              />
              <Image
                src="/images/maker4.png"
                alt="Maker 4"
                width={80}
                height={80}
                className="rounded-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="bg-gray-900 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-extrabold text-white mb-12">
            Download Our App
          </h2>
          <p className="text-lg mb-12 text-gray-300">
            Scan the QR code below to download our mobile app and start creating
            and sharing your stories on the go!
          </p>
          <Image
            src={qrcode}
            alt="Download QR Code"
            width={200}
            height={200}
            className="mx-auto"
          />
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-black py-6 text-center">
        <p className="text-gray-400 text-sm">
          For support, please contact us at{" "}
          <a href="mailto:support@example.com" className="text-indigo-400">
            support@example.com
          </a>
        </p>
      </footer>
    </div>
  );
}
