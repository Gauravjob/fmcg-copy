import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { scrollYProgress } = useScroll();
  const progressWidth = useSpring(scrollYProgress, { stiffness: 140, damping: 26, restDelta: 0.001 });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#about' },
    { name: 'Our Products', href: '#products' },
    { name: 'Services', href: '#services' },
    { name: 'Brands', href: '#brands' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      className={`fixed w-full z-50 bg-white/90 backdrop-blur-lg transition-all duration-300 ${
        isScrolled ? 'shadow-[0_10px_30px_-12px_rgba(0,0,0,0.25)] border-b border-gray-100' : 'border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-300 ${isScrolled ? 'h-16' : 'h-20'}`}>
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex-shrink-0 cursor-pointer hover:opacity-90 transition-opacity"
          >
            <motion.img
              whileHover={{ scale: 1.06, rotate: -2 }}
              whileTap={{ scale: 0.95 }}
              src={logo} alt="Vardha" className="h-14 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center h-full">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-[#0f7643] font-semibold transition-colors h-full flex items-center"
              >
                {link.name}
              </a>
            ))}
            
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#apply" 
              className="bg-[#0f7643] text-white px-6 py-2.5 rounded-lg font-bold flex items-center gap-2 hover:bg-[#0d6439] transition-all shadow-md animate-sheen"
            >
              Become a Super Distributor <span>&rarr;</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-[#0f7643] focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer - Premium Full Screen */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 z-40 bg-white/95 backdrop-blur-md flex flex-col justify-center items-center h-[100dvh] w-full"
          >
            <div className="flex flex-col items-center space-y-6 w-full px-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  className="block text-3xl font-black text-gray-800 hover:text-[#0f7643] transition-all"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + navLinks.length * 0.1 }}
                className="w-full pt-10 px-4"
              >
                <a 
                  href="#apply"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-[#0f7643] text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-green-900/20 active:scale-95 transition-all text-lg"
                >
                  Become a Super Distributor &rarr;
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll Progress Bar */}
      <motion.div
        aria-hidden="true"
        className="absolute left-0 bottom-0 h-[3px] w-full origin-left bg-gradient-to-r from-[#007A4D] via-emerald-400 to-[#E33E2B]"
        style={{ scaleX: progressWidth }}
      />
    </nav>
  );
};

export default Navbar;
