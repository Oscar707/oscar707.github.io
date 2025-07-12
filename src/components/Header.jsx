import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="w-full bg-gray-900 text-white p-5">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Main title */}
        <Link to="/" className="text-lg transition-colors">
            <div className="flex items-center">
              <img 
                src="/logo.svg" 
                alt="Logo" 
                className="h-8 w-auto"
              />
            </div>
          </Link>
        
        {/* Navigation */}
        <nav>
          <div className="flex items-center space-x-6">
            <Link to="/" className="text-lg hover:text-gray-400 hover:translate-x-1 transition-all duration-200">
              Home
            </Link>
            <Link to="/projects" className="text-lg hover:text-gray-400 hover:translate-x-1 transition-all duration-200">
              Projects
            </Link>
            <Link to="/photos" className="text-lg hover:text-gray-400 hover:translate-x-1 transition-all duration-200">
              Photos
            </Link>
            <Link to="/articles" className="text-lg hover:text-gray-400 hover:translate-x-1 transition-all duration-200">
              Articles
            </Link>
            <a 
                href="/Oscar_CV25.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-lg hover:text-gray-400 hover:translate-x-1 transition-all duration-200"
              >
                Resume
              </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;