import { motion } from "framer-motion";

// Navbar Animation (on page load)
const navbarVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.0, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Navbar() {
  return (
    <motion.nav
      className="w-full bg-black fixed top-0 left-0 z-50 p-6"
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold tracking-widest text-white">
          WORD CAFE
        </div>
        <div className="hidden md:flex space-x-8 uppercase tracking-wider">
          {["About", "Features", "Download", "Contact"].map((item) => (
            <motion.a
              href={`#${item.toLowerCase()}`}
              className="relative group text-white text-lg font-semibold"
              key={item}
              whileHover={{ scale: 1.05 }} // Slight scale on hover
              transition={{ duration: 0.5 }}
            >
              <span className="relative z-10 text-white">{item}</span>
              {/* Hover Background Effect */}
              <span className="absolute inset-0 bg-indigo-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out transform scale-50 group-hover:scale-110"></span>
            </motion.a>
          ))}
        </div>
        <motion.div
          className="navbar-end"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <button className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition-all">
            Sign In
          </button>
        </motion.div>
      </div>
    </motion.nav>
  );
}
