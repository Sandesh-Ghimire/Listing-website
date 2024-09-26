import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-indigo-700 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-300">
              We help students achieve their educational dreams by connecting them with scholarships that align with their goals. Get personalized guidance and find the perfect scholarship for you.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/scholarships" className="hover:text-indigo-300">
                  Scholarships
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-indigo-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-indigo-300">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/request-guidance" className="hover:text-indigo-300">
                  Request Guidance
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                <span>Email: </span>
                <a
                  href="mailto:ghimiresandesh@gmail.com"
                  className="hover:text-indigo-300"
                >
                  ghimiresandesh@gmail.com
                </a>
              </li>
              <li>Phone: +977 98XXXXXXXX</li>
              <li>Address: Kathmandu, Nepal</li>
            </ul>
          </div>
        </div>

        {/* Horizontal Divider */}
        <div className="border-t border-indigo-500 mt-8 pt-4 text-center">
          <p className="text-gray-400">
            © 2024 Scholarship Finder. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
