import Image from "next/image";
import { motion } from "framer-motion";
import feature1 from "@/app/images/feature1.jpg";
import feature2 from "@/app/images/feature2.jpg";
import feature3 from "@/app/images/feature3.jpg"; // Add more images for additional features

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1, staggerChildren: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function FeaturesSection() {
  return (
    <section id="features" className="bg-black py-20 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="w-full h-full bg-black">
          <div className="absolute inset-0 overflow-hidden">
            {/* Background animation */}
            <div className="absolute inset-0 bg-black animate-pulse opacity-20"></div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-extrabold text-center mb-16 text-white drop-shadow-lg">
          Features
        </h2>

        {/* Feature 1 */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center md:justify-between mb-16 md:mb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="md:w-1/2 text-left mr-8 text-white mb-8 md:mb-0"
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              rotate: 2,
              transition: { duration: 0.3 },
            }}
          >
            <h3 className="text-3xl font-bold mb-6">Write and Share Stories</h3>
            <p className="text-lg mb-6">
              Our text editor provides you with the ultimate creative freedom.
              Whether you prefer typing or handwriting, our tool adapts to your
              style.
            </p>
            <motion.a
              href="#"
              className="inline-block bg-indigo-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-transform transform hover:scale-105"
              whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
            >
              Learn More
            </motion.a>
          </motion.div>
          <motion.div
            className="md:w-1/2"
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              rotate: 1,
              transition: { duration: 0.3 },
            }}
          >
            <Image
              src={feature1}
              alt="Write and Share"
              className="rounded-xl shadow-lg transition-transform transform hover:scale-110"
            />
          </motion.div>
        </motion.div>

        {/* Feature 2 */}
        <motion.div
          className="flex flex-col md:flex-row-reverse items-center justify-center md:justify-between mb-16 md:mb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="ml-0 md:ml-8 md:w-1/2 text-left text-white mb-8 md:mb-0"
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              rotate: -2,
              transition: { duration: 0.3 },
            }}
          >
            <h3 className="text-3xl font-bold mb-6">AI-Powered Filters</h3>
            <p className="text-lg mb-6">
              Enhance your handwritten stories with sophisticated AI filters.
              Our technology ensures that your content is always polished and
              professional.
            </p>
            <motion.a
              href="#"
              className="inline-block bg-indigo-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-transform transform hover:scale-105"
              whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
            >
              Explore Filters
            </motion.a>
          </motion.div>
          <motion.div
            className="md:w-1/2"
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              rotate: -1,
              transition: { duration: 0.3 },
            }}
          >
            <Image
              src={feature2}
              alt="AI Filters"
              className="rounded-xl shadow-lg transition-transform transform hover:scale-110"
            />
          </motion.div>
        </motion.div>

        {/* Feature 3 */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center md:justify-between mb-16 md:mb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="md:w-1/2 text-left text-white mb-8 md:mb-0"
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              rotate: 2,
              transition: { duration: 0.3 },
            }}
          >
            <h3 className="text-3xl font-bold mb-6">Interactive Community</h3>
            <p className="text-lg mb-6">
              Connect with other writers and readers in our interactive
              community. Share your stories, get feedback, and grow together.
            </p>
            <motion.a
              href="#"
              className="inline-block bg-indigo-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-transform transform hover:scale-105"
              whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
            >
              Join the Community
            </motion.a>
          </motion.div>
          <motion.div
            className="md:w-1/2"
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              rotate: 1,
              transition: { duration: 0.3 },
            }}
          >
            <Image
              src={feature3}
              alt="Interactive Community"
              className="rounded-xl shadow-lg transition-transform transform hover:scale-110"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
