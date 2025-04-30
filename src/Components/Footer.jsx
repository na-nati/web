import React from 'react';
import {FaGithub,FaTelegram,FaLinkedin  } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative bg-gray-800 text-white py-10 px-6 overflow-hidden">
      {/* Background Dot Decorations */}
      <div className="absolute top-16 left-25 grid grid-cols-5 gap-1 z-0 opacity-20">
        {Array.from({ length: 25 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
        ))}
      </div>

      <div className="absolute bottom-16 right-15 grid grid-cols-5 gap-1 z-0 opacity-20">
        {Array.from({ length: 25 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
        ))}
      </div>

      <div className="absolute bottom-24 left-80 grid grid-cols-6 gap-1 z-0 opacity-20">
        {Array.from({ length: 36 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
        ))}
      </div>

      <div className="absolute top-0 right-0 m-4 grid grid-cols-3 gap-1 z-0 opacity-20">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
        ))}
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-12 text-center md:text-left">
        {/* Navigation Links */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <h2 className="text-lg font-bold text-purple-400">Links</h2>
          <a href="#home" className="hover:text-purple-300">Home</a>
          <a href="#about" className="hover:text-purple-300">About</a>
          <a href="#services" className="hover:text-purple-300">Services</a>
          <a href="#contact" className="hover:text-purple-300">Contact</a>
        </div>

        {/* Personal Info */}
        <div className="max-w-md">
          <h1 className="text-purple-400 text-xl font-Mightail mb-2">Nanati Getachew</h1>
          <p className="text-gray-400 font-LinearSans">
            A Frontend-focused Web Developer building the frontend of websites and web 
            applications that lead to the success of the overall product.
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 items-center">
          <a href="https://github.com/na-nati"><FaGithub className="text-xl hover:text-purple-400" /></a>
          <a href="https://t.me/Nanati06"><FaTelegram className="text-xl hover:text-purple-400" /></a>
          <a href="https://www.linkedin.com/in/nanati-getachew-98b6722aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"><FaLinkedin className="text-xl hover:text-purple-400" /></a>
          
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10"></div>

      <div className="text-center text-sm text-gray-500 mt-4 font-LinearSans">
        &copy; {new Date().getFullYear()} .Made by Nanati Getachew.
      </div>
    </footer>
  );
};

export default Footer;
