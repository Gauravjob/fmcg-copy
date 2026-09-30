import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logo from '../assets/logo.png';
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">    
          <div>    
            <img src={logo} alt="Vardha Logo" className="h-16 w-auto mb-6" />
            <p className="text-gray-400 text-sm leading-relaxed">
              Delivering excellence and quality products across the nation for over 30 years. Your trusted partner in FMCG distribution.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-black text-sm uppercase tracking-[0.2em] mb-8">Quick Links</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li><a href="#about" className="hover:text-green-400 transition-colors">About Us</a></li>
              <li><a href="#products" className="hover:text-green-400 transition-colors">Our Products</a></li>
              <li><a href="#services" className="hover:text-green-400 transition-colors">Distributor Support</a></li>
              <li><a href="#apply" className="hover:text-green-400 transition-colors">Apply Now</a></li>
            </ul>
          </div>
          
          <div id="contact">
            <h4 className="text-white font-black text-sm uppercase tracking-[0.2em] mb-8">Contact Us</h4>
            <ul className="space-y-6 text-sm font-bold">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 text-green-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">Vardha Group, Near Viratpati Steels, Gorakhnath Road, Bargadwa, Gorakhpur - 273007</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-green-500 shrink-0" />
                <span>+91 96701 11167</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-green-500 shrink-0" />
                <span>info@vardha.live</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 pb-20 md:pb-0">
          <p className="text-center md:text-left">&copy; {new Date().getFullYear()} Vardha FMCG. All rights reserved.</p>
          <p className="mt-4 md:mt-0 text-center md:text-right"></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
