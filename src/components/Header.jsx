import React from 'react';

const Header = () => {
  return (
    <header className="w-full bg-gray-900 text-white p-5">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Main title */}
        <h1 className="text-2xl font-bold">
          OSCAR CHEN
        </h1>
        
        {/* Navigation */}
        <nav>
          <div className="flex items-center space-x-6">
            <a href="/" className="text-lg hover:text-gray-400 hover:translate-x-1 transition-all duration-200">
              Home
            </a>
            <a href="/projects" className="text-lg hover:text-gray-400 hover:translate-x-1 transition-all duration-200">
              Projects
            </a>
            <a href="/photos" className="text-lg hover:text-gray-400 hover:translate-x-1 transition-all duration-200">
              Photos
            </a>
            <a href="/resume" className="text-lg hover:text-gray-400 hover:translate-x-1 transition-all duration-200">
              Resume
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;