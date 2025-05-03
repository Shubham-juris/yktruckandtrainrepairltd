import React, { useState } from 'react';
import { Menu, X, Wrench } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          
          <div className="flex items-center">
            <Wrench className="text-red-500 mr-2" size={28} />
            <h1 className="text-2xl font-bold">yktruckandtrainrepair</h1>
          </div>

         
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            <li><a href="#home" className="hover:text-red-500 transition duration-300">Home</a></li>
            <li><a href="#services" className="hover:text-red-500 transition duration-300">Services</a></li>
            <li><a href="#about" className="hover:text-red-500 transition duration-300">About Us</a></li>
            <li><a href="#testimonials" className="hover:text-red-500 transition duration-300">Testimonials</a></li>
            <li><a href="#contact" className="hover:text-red-500 transition duration-300">Contact</a></li>
          </ul>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <a href="#contact" className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition duration-300">Get a Quote</a>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <ul className="flex flex-col space-y-4">
              {['Home', 'Services', 'About Us', 'Testimonials', 'Contact'].map((item, i) => (
                <li key={i}>
                  <a
                    href={`#${item.toLowerCase().replace(/ /g, '')}`}
                    className="block hover:text-red-500 transition duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="inline-block bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get a Quote
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
