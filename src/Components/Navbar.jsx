import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleClose = () => setIsOpen(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-10 h-16 text-white bg-[#1B1E30] opacity-90 z-50"
    >
     
      <div className="text-3xl font-bold text-purple-400 font-Mightail">N</div>

      <div className="hidden md:flex space-x-10 font-Mightail gap-10">
        {['home', 'about', 'works', 'contact'].map((item) => (
          <Link
            key={item}
            to={item}
            smooth={true}
            duration={500}
            offset={-50}
            spy={true}
            className="cursor-pointer hover:text-purple-400"
            activeClass="text-purple-400"
          >
            {item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' ')}
          </Link>
        ))}
      </div>

      
      <div className="md:hidden z-50" onClick={handleToggle}>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#1B1E30] flex flex-col items-center py-6 space-y-4 md:hidden font-Mightail">
          {['home', 'about', 'works', 'contact'].map((item) => (
            <Link
              key={item}
              to={item}
              smooth={true}
              duration={500}
              offset={-50}
              spy={true}
              onClick={handleClose}
              className="cursor-pointer hover:text-purple-400 text-lg"
              activeClass="text-purple-400"
            >
              {item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' ')}
            </Link>
          ))}
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
