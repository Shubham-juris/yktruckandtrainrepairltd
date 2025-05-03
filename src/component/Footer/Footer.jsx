import React from 'react';
import { Wrench, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Wrench className="text-red-500 mr-2" size={24} />
              <h2 className="text-xl font-bold">yktruckandtrainrepairltd</h2>
            </div>
            <p className="text-gray-400 mb-4">
              Professional car and train repair services with over 20 years of experience. Quality work guaranteed.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition duration-300">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition duration-300">Services</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition duration-300">About Us</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition duration-300">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition duration-300">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-white transition duration-300">Car Repair</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition duration-300">Train Systems</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition duration-300">Engine Diagnostics</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition duration-300">Brake Services</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition duration-300">General Maintenance</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="text-red-500 mr-2 mt-1" />
                <span className="text-gray-400">123 Repair Street, 123 City, MC 12345</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-red-500 mr-2" />
                <span className="text-gray-400">(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-red-500 mr-2" />
                <span className="text-gray-400">info@yktruckandtrainrepairltd.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} yktruckandtrainrepairltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
