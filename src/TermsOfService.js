// src/TermsOfService.js
import React from 'react';

const TermsOfService = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 font-sans bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">Terms of Service</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-2">
        Welcome to our service! These terms outline the rules and regulations for using our platform.
      </p>
      <p className="text-gray-600 dark:text-gray-300 mb-2">
        By accessing this service, you agree to comply with these terms. If you do not agree, please do not use our service.
      </p>
      <p className="text-gray-600 dark:text-gray-300">
        We reserve the right to modify these terms at any time. Please review them periodically for any changes.
      </p>
    </div>
  );
};

export default TermsOfService;