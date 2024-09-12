import React from "react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-black py-6 text-center">
      <div className="container mx-auto px-4">
        <p className="text-gray-400 text-sm mb-2">
          For support, please contact us at{" "}
          <a
            href="mailto:support@example.com"
            className="text-indigo-400 hover:text-indigo-300 transition-colors duration-300"
          >
            support@example.com
          </a>
        </p>
        <p className="text-gray-600 text-xs">
          &copy; {new Date().getFullYear()} WORD CAFE. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
