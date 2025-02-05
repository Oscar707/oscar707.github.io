import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-gray-900 text-white">
      <div className="max-w-screen-xl mx-auto p-5">
        <div className="flex justify-between items-center">
          {/* Main title */}
          <a href="#/" className="text-lg transition-colors">
            <div className="flex items-center">
              <img 
                src="/logo.svg" 
                alt="Logo" 
                className="h-8 w-auto"
              />
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="flex items-center space-x-6">
              <a href="#/" className="text-lg hover:text-gray-300 transition-colors">
                Home
              </a>
              <a href="#/projects" className="text-lg hover:text-gray-300 transition-colors">
                Projects
              </a>
              <a href="#/photos" className="text-lg hover:text-gray-300 transition-colors">
                Photos
              </a>
              <a 
                href="/Oscar_CV25.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-lg hover:text-gray-300 transition-colors"
              >
                Resume
              </a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-md hover:bg-gray-800"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4">
            <div className="flex flex-col space-y-4">
              <a href="#/" className="text-lg hover:text-gray-300 transition-colors py-2">
                Home
              </a>
              <a href="#/projects" className="text-lg hover:text-gray-300 transition-colors py-2">
                Projects
              </a>
              <a href="#/photos" className="text-lg hover:text-gray-300 transition-colors py-2">
                Photos
              </a>
              <a 
                href="/Oscar_CV25.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-lg hover:text-gray-300 transition-colors py-2"
              >
                Resume
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;