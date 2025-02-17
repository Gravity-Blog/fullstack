// src/ToggleSwitch.js
import React from 'react';
import PropTypes from 'prop-types';
import { Sun, Moon } from 'lucide-react';

const ToggleSwitch = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input 
        type="checkbox" 
        checked={isDarkMode} 
        onChange={toggleDarkMode} 
        className="sr-only peer" 
      />
      <div className="w-11 h-6 bg-gray-200 rounded-full peer 
        dark:bg-gray-700 peer-checked:after:translate-x-full 
        peer-checked:bg-blue-600 after:content-[''] after:absolute 
        after:top-0.5 after:left-[2px] after:bg-white after:rounded-full 
        after:h-5 after:w-5 after:transition-all">
      </div>
      <button onClick={() => { console.log("Button Clicked"); toggleDarkMode(); }} aria-label="Toggle dark mode" className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
        {isDarkMode ? <Sun /> : <Moon />}
      </button>
    </label>
  );
};

ToggleSwitch.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired
};

export default ToggleSwitch;