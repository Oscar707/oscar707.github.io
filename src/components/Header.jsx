import React from 'react';

const Header = () => {
  return (
    <header className="w-full bg-gray-900 text-white p-5">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Main title */}
        <a href="/" className="text-lg  transition-colors">
        <h1 className="text-2xl font-bold">
          OSCAR CHEN
        </h1>
            </a>
        
        {/* Navigation */}
        <nav>
          <div className="flex items-center space-x-6">
            <a href="/" className="text-lg hover:text-gray-300 transition-colors">
              Home
            </a>
            <a href="/projects" className="text-lg hover:text-gray-300 transition-colors">
              Projects
            </a>
            <a href="/photos" className="text-lg hover:text-gray-300 transition-colors">
              Photos
            </a>
            <a href="/resume" className="text-lg hover:text-gray-300 transition-colors">
              Resume
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;