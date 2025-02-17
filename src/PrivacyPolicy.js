// src/PrivacyPolicy.js
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 font-sans bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">Privacy Policy</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-2">
        Your privacy is important to us. This policy outlines how we collect, use, and protect your information.
      </p>
      <p className="text-gray-600 dark:text-gray-300 mb-2">
        We collect data to provide better services to our users. This includes information you provide directly, as well as data collected automatically.
      </p>
      <p className="text-gray-600 dark:text-gray-300">
        We do not share your personal information with third parties without your consent, except as required by law.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
