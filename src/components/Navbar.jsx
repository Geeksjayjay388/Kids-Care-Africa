// components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-red-600" fill="#dc2626" />
              <span className="text-2xl font-bold text-gray-900">
                Kids Care <span className="text-red-600">Africa</span>
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-red-600 font-medium">
              Home
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-red-600 font-medium">
              Our Stories
            </Link>
            <Link to="/donate" className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 font-medium transition">
              Donate Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-red-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-4">
            <Link
              to="/"
              className="block text-gray-700 hover:text-red-600 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/blog"
              className="block text-gray-700 hover:text-red-600 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Our Stories
            </Link>
            <Link
              to="/donate"
              className="block bg-red-600 text-white px-4 py-2 rounded-lg text-center hover:bg-red-700 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Donate Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;