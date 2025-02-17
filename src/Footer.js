// src/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-2 text-center fixed bottom-0 w-full border-t border-gray-700">
      <div className="max-w-4xl mx-auto px-6">
        <p className="mt-4">&copy; {new Date().getFullYear()} Gravity Blog</p>
      </div>
    </footer>
  );
};

export default Footer;