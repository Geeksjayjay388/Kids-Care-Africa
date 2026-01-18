// components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine if we should show the solid "scrolled" style
  // Always show solid on non-home pages, or when scrolled/open
  const showSolid = scrolled || isOpen || !isHome;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Stories', path: '/blog' },
  ];

  return (
    <div className="fixed w-full z-50 top-4 px-4 pointer-events-none">
      <nav className={`max-w-5xl mx-auto pointer-events-auto transition-all duration-500 ease-in-out ${showSolid
          ? 'bg-white/90 backdrop-blur-md shadow-lg py-3 px-6 rounded-full border border-gray-100'
          : 'bg-white/10 backdrop-blur-sm py-4 px-6 rounded-full border border-white/20'
        }`}>
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className={`p-1.5 rounded-full transition-colors ${showSolid ? 'bg-red-50' : 'bg-white/20'}`}>
              <img src="https://imgs.search.brave.com/G40-mJA8YOGslIdxD7ve2RPjQljgLPnOjRWEnxdT27A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTUv/NDQ2LzA4My9zbWFs/bC9hLWNoZWVyZnVs/LXlvdW5nLWFmcmlj/YW4tZ2lybC13aXRo/LXRyYWRpdGlvbmFs/LWFkb3JubWVudHMt/cG5nLnBuZw" alt="Logo" className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <span className={`text-xl font-bold tracking-tight transition-colors duration-300 ${showSolid ? 'text-gray-900' : 'text-white'
              }`}>
              Kids Care <span className={`${showSolid ? 'text-red-600' : 'text-red-300'}`}>Africa</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium text-sm hover:text-red-600 transition-colors ${showSolid ? 'text-gray-700' : 'text-white hover:text-white/80'
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/donate"
              className={`px-5 py-2 rounded-full font-semibold text-sm transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 ${showSolid
                  ? 'bg-red-600 text-white hover:bg-red-700'
                  : 'bg-white text-red-600 hover:bg-gray-100'
                }`}
            >
              Donate Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-1 rounded-full transition-colors ${showSolid ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/20'
                }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-64 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}>
          <div className={`rounded-2xl p-4 space-y-2 ${showSolid ? 'bg-gray-50' : 'bg-black/20 backdrop-blur-md'}`}>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block px-4 py-2 rounded-lg font-medium transition-colors ${showSolid
                    ? 'text-gray-700 hover:bg-white hover:text-red-600'
                    : 'text-white hover:bg-white/20'
                  }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/donate"
              className="block w-full text-center px-4 py-2 rounded-lg font-bold bg-red-600 text-white hover:bg-red-700 transition"
              onClick={() => setIsOpen(false)}
            >
              Donate Now
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;