import React from 'react';
import { Moon } from 'lucide-react';

const Header = () => {
    return (
      <header className="w-full bg-gray-900 text-white p-5">
        <div className="max-w-screen-xl mx-auto">
          {/* Main title */}
          <h1 className="text-2xl font-bold mb-4 text-center">
            OSCAR CHEN
          </h1>
          
          {/* Navigation */}
          <nav className="flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <a href="/" className="hover:text-gray-300 transition-colors">
                Home
              </a>
              <a href="/projects" className="hover:text-gray-300 transition-colors">
                Projects
              </a>
              <a href="/photos" className="hover:text-gray-300 transition-colors">
                Photos
              </a>
            </div>
            <button 
              className="p-1 hover:bg-gray-800 rounded-full transition-colors"
              aria-label="Toggle theme"
            >
              <Moon size={20} />
            </button>
          </nav>
        </div>
      </header>
    );
  };
  
  export default Header;