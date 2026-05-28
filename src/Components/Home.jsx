import React from 'react';
import Navbar from './Navbar';
import profile from "../assets/profile.jpg";
import {
  FaReact, FaCss3Alt, FaJs, FaHtml5, FaGithub,
  FaDribbble, FaPython, FaNodeJs, FaKey, FaFigma, FaTelegram, FaLinkedin ,
} from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiVite } from 'react-icons/si';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div id='home' className="min-h-screen bg-[#1B1E24] text-white relative flex overflow-hidden">
      <Navbar />

      {/* Sidebar with animation */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-16 left-0 h-150 flex flex-col items-center w-30 justify-center space-y-8 px-4 bg-[#1B1E24] border-r border-gray-700"
      >
        <div className="flex flex-col space-y-6 text-gray-400 text-xl">
          <a href="https://github.com/na-nati" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-purple-400" />
          </a>
          <a href="https://t.me/Nanati06" target="_blank" rel="noopener noreferrer">
            <FaTelegram className="hover:text-purple-400" />
          </a>
          <a href="https://www.linkedin.com/in/nanati-getachew-98b6722aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-purple-400" />
          </a>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 ml-20 flex items-center justify-center px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center space-x-10 mt-20"
        >
      
                   {/* Background Dot Decorations */}
<div className="absolute top-17 left-0  grid grid-cols-5 gap-1 z-0 opacity-20">
  {Array.from({ length: 25 }).map((_, i) => (
    <div key={i} className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
  ))}
</div>

<div className="absolute bottom-55 right-0 mr-0 grid grid-cols-5 gap-1 z-0 opacity-20">
  {Array.from({ length: 25 }).map((_, i) => (
    <div key={i} className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
  ))}
</div>
<div className="absolute bottom-40 right-35 mr-35 grid grid-cols-5 gap-1 z-0 opacity-20">
  {Array.from({ length: 36 }).map((_, i) => (
    <div key={i} className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
  ))}
</div>
<div className="absolute bottom-55 left-55 m-4 grid grid-cols-5 gap-1 z-0 opacity-20">
  {Array.from({ length: 36 }).map((_, i) => (
    <div key={i} className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
  ))}
</div>


<div className="absolute top-0 right-0 m-4 grid grid-cols-3 gap-1 z-52 opacity-20">
  {Array.from({ length: 16 }).map((_, i) => (
    <div key={i} className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
  ))}
</div>
          

          
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative group w-52 h-52 mb-6"
          >
            <img
              src={profile}
              alt="Woman Technologist Emoji"
              className="w-full h-full object-cover rounded-full shadow-[0_0_70px_rgba(192,132,252,0.6)]"
            />
            
            
            <FaReact className="text-cyan-400 text-xl absolute top-[-20px] left-[20%] opacity-0 group-hover:opacity-100 transition duration-300" />
            <SiTailwindcss className="text-blue-400 text-xl absolute top-[10%] left-[-25px] opacity-0 group-hover:opacity-100 transition duration-300" />
            <FaCss3Alt className="text-blue-600 text-xl absolute top-[30%] right-[-20px] opacity-0 group-hover:opacity-100 transition duration-300" />
            <FaJs className="text-yellow-400 text-xl absolute top-[-25px] right-[10%] opacity-0 group-hover:opacity-100 transition duration-300" />
            <FaHtml5 className="text-orange-500 text-xl absolute top-[5%] left-[70%] opacity-0 group-hover:opacity-100 transition duration-300" />
            <SiTypescript className="text-blue-500 text-xl absolute top-[12%] left-[45%] opacity-0 group-hover:opacity-100 transition duration-300" />
            <FaFigma className="text-pink-500 text-xl absolute top-[18%] right-[50%] opacity-0 group-hover:opacity-100 transition duration-300" />
            <SiVite className="text-purple-500 text-xl absolute top-[30%] left-[0%] opacity-0 group-hover:opacity-100 transition duration-300" />
          </motion.div>

          
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center md:text-left max-w-xl"
          >
            <h1 className="text-3xl text-gray-400 mb-2">
              Hi! I'm <span className="text-purple-400 font-Mightail">Nanati Getachew</span>
            </h1>
            <h1 className="text-3xl font-bold leading-tight font-Mightail">
              Frontend Developer <br />
            </h1>
            <h2 className="text-xl font-bold mt-6 text-white font-LinearSans">
              Passionate About Crafting Beautiful Web Interfaces.
            </h2>
            <p className="mt-6 text-sm text-gray-400 font-LinearSans">
  I'm a passionate frontend developer who enjoys turning ideas into responsive, user-friendly websites with clean, maintainable code.
</p>

             <a
    href="#contact"
    className="inline-block mt-6 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold rounded-lg shadow-md transition"
  >
    Contact Me
  </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
