import { motion } from "framer-motion";
import Image from "next/image";
import YourSVG from "@/app/images/welcome.svg";

const welcomeVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.3 },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: "easeOut", delay: 0.8 },
  },
};

const buttonVariants = {
  hover: { scale: 1.1, boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)" },
};

export default function WelcomeSection() {
  return (
    <section
      className="hero min-h-screen relative z-10 bg-cover bg-center flex flex-col md:flex-row justify-center items-center overflow-hidden px-4"
      style={{ backgroundImage: `url('/images/image_background.png')` }}
    >
      {/* Animated Background */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-black opacity-40"
        style={{
          animation: "backgroundMove 30s infinite alternate",
        }}
      ></div>

      {/* Hero Content */}
      <motion.div
        className="hero-content relative z-20 flex flex-col md:flex-row items-center md:items-start md:justify-between w-full"
        initial="hidden"
        animate="visible"
        variants={welcomeVariants}
      >
        {/* Text Content */}
        <div className="md:w-1/2 ml-4 text-center md:text-left mb-8 md:mb-0">
          <motion.h1
            className="text-5xl ml-4 md:text-7xl font-extrabold mb-8 tracking-tight text-white"
            whileHover={{ scale: 1.05 }} // Zoom-in effect on hover
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            Welcome.
          </motion.h1>

          <motion.p
            className="text-base md:text-xl max-w-2xl mb-6 px-6 text-white"
            variants={textVariants}
          >
            Transform your handwritten stories into digital ones. A platform
            where creativity meets technology, allowing users to share their
            stories and connect with a community of writers. Welcome to the
            social media for stories.
          </motion.p>

          <motion.p
            className="text-base md:text-xl max-w-2xl mb-12 px-6 text-white"
            variants={textVariants}
          >
            Whether you’re a seasoned author or just starting out, our tools are
            designed to support you in every step of your writing journey.
            Welcome to a community where stories come to life and creativity
            knows no bounds.
          </motion.p>

          {/* Call-to-Action Button */}
          <motion.a
            href="#features"
            className="text-xl ml-6 md:text-2xl bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg inline-block"
            whileHover="hover"
            variants={buttonVariants}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            Explore Features
          </motion.a>
        </div>

        {/* SVG Image */}
        <motion.div
          className="md:w-1/2 ml-4 flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Image
            src={YourSVG}
            alt="Illustration"
            width={500}
            height={500}
            className="object-contain"
          />
        </motion.div>
      </motion.div>

      <style jsx>{`
        @keyframes backgroundMove {
          0% {
            transform: translateX(-10px) translateY(-10px);
          }
          100% {
            transform: translateX(10px) translateY(10px);
          }
        }

        .hero-content:hover .text-5xl,
        .hero-content:hover .text-base {
          transform: scale(1.1); /* Zoom effect */
          transition: transform 0.5s ease-in-out;
        }

        .text-5xl,
        .text-base {
          transition: transform 0.3s ease;
        }
      `}</style>
    </section>
  );
}
