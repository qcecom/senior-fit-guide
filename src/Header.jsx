import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/SeniorFitGuide.png';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-400 text-white w-full shadow-lg">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        {/* Logo */}
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={logo}
              alt="Senior Fit Guide Logo"
              className="h-10 w-auto transition-transform duration-300 hover:scale-105"
            />
            <span className="text-lg font-bold hidden sm:inline">Senior Fit Guide</span>
          </Link>
        </div>

        {/* Menu */}
        <nav className="flex flex-wrap justify-center md:justify-end items-center gap-3 text-sm md:text-base font-medium">
          <Link to="/" className="hover:text-gray-100 transition">Home</Link>
          <Link to="/shop" className="hover:text-gray-100 transition">Shop</Link>
          <Link to="/senior-health" className="hover:text-gray-100 transition">Senior Health</Link>
          <Link to="/health-insurance" className="hover:text-gray-100 transition">Health Insurance</Link>
          <Link to="/home-health-care" className="hover:text-gray-100 transition">Home Health</Link>
          <Link to="/videos" className="hover:text-gray-100 transition">Videos</Link>
          <Link to="/blog" className="hover:text-gray-100 transition">Blog</Link>
          <Link to="/contact" className="hover:text-gray-100 transition">Contact</Link>
          <a
            href="https://www.youtube.com/@ForeverHealthyYT/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-4 py-2 rounded text-sm md:text-base"
          >
            Subscribe
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
