import React from "react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-black py-8 text-center">
      <div className="container mx-auto px-4">
        {/* Support Info */}
        <p className="text-gray-400 text-sm mb-2">
          For support, please contact us at{" "}
          <a
            href="mailto:support@example.com"
            className="text-indigo-400 hover:text-indigo-300 transition-colors duration-300"
          >
            support@example.com
          </a>
        </p>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="#"
            className="text-gray-400 hover:text-indigo-300 transition duration-300"
          >
            <i className="fab fa-facebook-f"></i> Facebook
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-indigo-300 transition duration-300"
          >
            <i className="fab fa-twitter"></i> Twitter
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-indigo-300 transition duration-300"
          >
            <i className="fab fa-instagram"></i> Instagram
          </a>
        </div>

        {/* Quick Links */}
        <div className="flex justify-center space-x-8 mb-4">
          <a
            href="#about"
            className="text-gray-400 hover:text-indigo-300 transition duration-300"
          >
            About Us
          </a>
          <a
            href="#features"
            className="text-gray-400 hover:text-indigo-300 transition duration-300"
          >
            Features
          </a>
          <a
            href="#faq"
            className="text-gray-400 hover:text-indigo-300 transition duration-300"
          >
            FAQ
          </a>
        </div>

        {/* Legal Info */}
        <p className="text-gray-600 text-xs mb-4">
          <a href="/privacy-policy" className="hover:text-indigo-300">
            Privacy Policy
          </a>{" "}
          |
          <a href="/terms-of-service" className="hover:text-indigo-300 ml-2">
            Terms of Service
          </a>
        </p>

        {/* Copyright Info */}
        <p className="text-gray-600 text-xs">
          &copy; {new Date().getFullYear()} WORD CAFE. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
