import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.3 } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
};

const AboutUsSection = () => {
  return (
    <section id="about" className="bg-gray-800 py-20 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="w-full h-full bg-gray-800">
          <div className="absolute inset-0 bg-black opacity-30 animate-pulse"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* About Us Header */}
        <motion.h2
          className="text-4xl font-extrabold text-center mb-12 text-white drop-shadow-lg"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          About Us
        </motion.h2>

        {/* Text Content */}
        <motion.div
          className="text-center mb-16"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
        >
          <p className="text-lg text-gray-300 mb-4">
            We are committed to revolutionizing the way stories are shared and
            enjoyed. Our platform combines advanced technology with a passion
            for storytelling, offering a unique space for writers and readers
            alike.
          </p>
          <p className="text-lg text-gray-300 mb-8">
            Discover the power of your words and connect with a community of
            like-minded individuals who share your love for storytelling.
          </p>
        </motion.div>

        {/* Team Achievements */}
        <motion.div
          className="mb-16"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <h3 className="text-3xl font-bold text-center mb-8 text-white">
            Our Achievements
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center max-w-xs">
              <h4 className="text-xl font-semibold text-white mb-4">
                1000+ Stories Shared
              </h4>
              <p className="text-gray-300">
                Our community has shared over 1000 stories, each one a unique
                expression of creativity.
              </p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center max-w-xs">
              <h4 className="text-xl font-semibold text-white mb-4">
                Top 10 Writers
              </h4>
              <p className="text-gray-300">
                We feature top writers who inspire and engage our community with
                their exceptional stories.
              </p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center max-w-xs">
              <h4 className="text-xl font-semibold text-white mb-4">
                Global Community
              </h4>
              <p className="text-gray-300">
                Connect with a global network of writers and readers from all
                corners of the world.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Makers' Images */}
        <motion.div
          className="flex justify-center space-x-6 mb-16"
          initial="hidden"
          animate="visible"
        >
          {[1, 2, 3, 4].map((index) => (
            <motion.div
              key={index}
              className="transition-transform transform hover:scale-110"
              variants={imageVariants}
            >
              <Image
                src={`/images/maker${index}.png`}
                alt={`Maker ${index}`}
                width={100}
                height={100}
                className="rounded-full border-4 border-gray-600 shadow-lg"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          className="text-center mb-16"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          <h3 className="text-3xl font-bold mb-8 text-white">
            What Our Users Say
          </h3>
          <div className="flex flex-col items-center space-y-6">
            <blockquote className="bg-gray-700 p-6 rounded-lg shadow-lg max-w-md">
              <p className="text-lg text-gray-300 mb-4">
                “An amazing platform that allows me to connect with fellow
                writers and share my work with the world. Highly recommended!”
              </p>
              <footer className="text-gray-400">— Alex Johnson</footer>
            </blockquote>
            <blockquote className="bg-gray-700 p-6 rounded-lg shadow-lg max-w-md">
              <p className="text-lg text-gray-300 mb-4">
                “A wonderful space for creativity and storytelling. The AI
                filters are a game-changer for my handwritten stories.”
              </p>
              <footer className="text-gray-400">— Jamie Lee</footer>
            </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsSection;
