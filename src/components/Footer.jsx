// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Globe,
  Shield,
  Award,
  Send,
  Newspaper
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Organization Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <Heart className="h-10 w-10 text-red-500 animate-pulse" fill="#ef4444" />
              <div>
                <span className="text-2xl font-bold">Kids Care Africa</span>
                <p className="text-sm text-gray-400">Bringing Hope Since 2010</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              We are a non-profit organization dedicated to providing sustainable solutions 
              for African children in need of clean water, safe shelter, nutritious food, 
              and quality education.
            </p>
            
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-green-400" />
                <span className="text-sm text-gray-300">Verified NGO</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-400" />
                <span className="text-sm text-gray-300">Transparent</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-purple-400" />
                <span className="text-sm text-gray-300">5 Countries</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white border-l-4 border-red-600 pl-3">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/" 
                  className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                >
                  <div className="w-1 h-1 bg-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/blog" 
                  className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                >
                  <div className="w-1 h-1 bg-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  Our Stories
                </Link>
              </li>
              <li>
                <Link 
                  to="/donate" 
                  className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                >
                  <div className="w-1 h-1 bg-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  Donate Now
                </Link>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                >
                  <div className="w-1 h-1 bg-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  Our Projects
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                >
                  <div className="w-1 h-1 bg-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  Get Involved
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                >
                  <div className="w-1 h-1 bg-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  Volunteer
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white border-l-4 border-red-600 pl-3">
              Stay Connected
            </h3>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                <span className="text-gray-400 text-sm">
                  123 Hope Avenue, Westlands<br />
                  Nairobi, Kenya 00100
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span className="text-gray-400 text-sm">+254 700 123 456</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span className="text-gray-400 text-sm">info@kidscareafrica.org</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-6">
              <p className="text-gray-300 text-sm mb-3">Subscribe to our newsletter</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-grow px-3 py-2 text-gray-900 rounded-l-lg focus:outline-none text-sm"
                />
                <button className="bg-red-600 px-4 py-2 rounded-r-lg hover:bg-red-700 transition">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links & Accreditation */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Media */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 transition-colors group"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 transition-colors group"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 transition-colors group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 transition-colors group"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 transition-colors group"
                aria-label="Blog"
              >
                <Newspaper className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">93%</div>
                <div className="text-xs text-gray-400">Program Efficiency</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">A+</div>
                <div className="text-xs text-gray-400">Charity Rating</div>
              </div>
              <div className="h-8 w-px bg-gray-700"></div>
              <div className="text-sm text-gray-400">
                Registered Charity #123-456-789
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-950 py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-500 text-sm text-center md:text-left">
              <p>&copy; {currentYear} Kids Care Africa. All rights reserved.</p>
              <p className="mt-1">Transforming lives across Africa since 2010.</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-gray-500 text-sm">
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <a href="#" className="hover:text-white transition">Terms of Service</a>
              <a href="#" className="hover:text-white transition">Financial Reports</a>
              <a href="#" className="hover:text-white transition">Contact Us</a>
              <a href="#" className="hover:text-white transition">Careers</a>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="mt-6 pt-6 border-t border-gray-800 text-center">
            <p className="text-gray-500 text-sm italic max-w-3xl mx-auto">
              "Our mission is to provide sustainable solutions that empower African children 
              with clean water, safe shelter, nutritious food, and quality education, 
              creating lasting change in their communities."
            </p>
          </div>

          {/* Security & Payment Badges */}
          <div className="mt-6 flex flex-wrap justify-center items-center gap-4">
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <Shield className="w-4 h-4 text-green-400" />
              <span>256-bit SSL Encryption</span>
            </div>
            <div className="text-gray-400">•</div>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <Heart className="w-4 h-4 text-red-400" />
              <span>Donations are Tax-Deductible</span>
            </div>
            <div className="text-gray-400">•</div>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <Globe className="w-4 h-4 text-blue-400" />
              <span>Operating in 5 African Countries</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;