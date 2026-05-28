// src/Components/Work.jsx
import React from 'react';
import { FaStar } from 'react-icons/fa';
import projectImage from '../assets/project-sample.jpg'; 
import projectImage2 from '../assets/project-sample2.jpg';
import projectImage3 from '../assets/project-sample3.jpg';
import projectImage4 from '../assets/project-sample4.jpg';

const Works = () => {
  return (
    <section id='works' className="relative bg-[#1B1E24] py-20 px-6 md:px-20 text-white">

      <h1
        className="font-bold mb-4 text-purple-500 text-6xl text-center font-Mightail"
        data-aos="zoom-in"
      >
        My Works
      </h1>

       
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
      {/* First Project Card */}
      <div className="flex flex-col md:flex-row items-center gap-0 my-10 ml-20">
        <a 
  href="https://safesearch.vercel.app/" 
  target="_blank" 
  rel="noopener noreferrer"
  className="relative w-full md:w-1/2 group block" // Added 'block' to keep layout intact
>
  <img
    src={projectImage}
    alt="Project"
    className="rounded-xl shadow-lg group-hover:shadow-purple-500 transition duration-300 cursor-pointer" // Added 'cursor-pointer'
  />
</a>

        <div className="w-full md:w-1/2">
          
          <h2 className="text-2xl font-bold mb-4 text-purple-500 font-Mightail">Project</h2>
          <p className="text-gray-300 bg-white/10 p-4 rounded-md shadow-inner">
  A web app for SafeSearch that blocks ads, malware, and protects users from online 
  threats — all while helping you explore the best in modern internet security.
</p>

          <div className="flex gap-2 mt-4 text-purple-400">
            <FaStar className="hover:scale-125 transition duration-300" />
            <FaStar className="hover:scale-125 transition duration-300" />
            <FaStar className="hover:scale-125 transition duration-300" />
          </div>
        </div>
      </div>

      {/* Second Project Card (Reversed Layout) */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-0 ml-20 my-10">
                <a 
  href="https://cinematography-gamma.vercel.app/" 
  target="_blank" 
  rel="noopener noreferrer"
  className="relative w-full md:w-1/2 group block" // Added 'block' to keep layout intact
>
  <img
    src={projectImage2}
    alt="Project"
    className="rounded-xl shadow-lg group-hover:shadow-purple-500 transition duration-300 cursor-pointer" // Added 'cursor-pointer'
  />
</a>

        <div className="w-full md:w-1/2">
          
          <h2 className="text-2xl font-bold mb-4 text-purple-500 font-Mightail">Project</h2>
          <p className="text-gray-300 bg-white/10 p-4 rounded-md shadow-inner">
  A portfolio website for a cinematographer built with React and Tailwind CSS. It showcases video projects, photography, and creative work in a clean and modern layout.
</p>

          <div className="flex gap-2 mt-4 text-purple-400">
            <FaStar className="hover:scale-125 transition duration-300" />
            <FaStar className="hover:scale-125 transition duration-300" />
            <FaStar className="hover:scale-125 transition duration-300" />
          </div>
        </div>
      </div>
{/* 3 Project Card */}

         <div className="flex flex-col md:flex-row items-center gap-0 my-10 ml-20">
       <a 
  href="https://burger-landing-olive.vercel.app/" 
  target="_blank" 
  rel="noopener noreferrer"
  className="relative w-full md:w-1/2 group block" // Added 'block' to keep layout intact
>
  <img
    src={projectImage3}
    alt="Project"
    className="rounded-xl shadow-lg group-hover:shadow-purple-500 transition duration-300 cursor-pointer" // Added 'cursor-pointer'
  />
</a>

        <div className="w-full md:w-1/2">
          
          <h2 className="text-2xl font-bold mb-4 text-purple-500 font-Mightail">Project</h2>
          <p className="text-gray-300 bg-white/10 p-4 rounded-md shadow-inner">
 Figma-to-code project for a premium burger joint. Built with pixel-perfect precision, featuring smooth animations, an interactive menu showcase, and a seamless online ordering flow
</p>

          <div className="flex gap-2 mt-4 text-purple-400">
            <FaStar className="hover:scale-125 transition duration-300" />
            <FaStar className="hover:scale-125 transition duration-300" />
            <FaStar className="hover:scale-125 transition duration-300" />
          </div>
        </div>
      </div>
           {/* Second Project Card (Reversed Layout) */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-0 ml-20 my-10">
        <a 
  href="https://ems-tau-blush.vercel.app/" 
  target="_blank" 
  rel="noopener noreferrer"
  className="relative w-full md:w-1/2 group block" // Added 'block' to keep layout intact
>
  <img
    src={projectImage4}
    alt="Project"
    className="rounded-xl shadow-lg group-hover:shadow-purple-500 transition duration-300 cursor-pointer" // Added 'cursor-pointer'
  />
</a>

        <div className="w-full md:w-1/2">
          
          <h2 className="text-2xl font-bold mb-4 text-purple-500 font-Mightail">Project</h2>
          <p className="text-gray-300 bg-white/10 p-4 rounded-md shadow-inner">
  A comprehensive Employee Management System designed to streamline HR workflows and internal operations. 
      It features a centralized employee database, 
      role-based access control, and complete CRUD functionality for seamless team administration.
    </p>

          <div className="flex gap-2 mt-4 text-purple-400">
            <FaStar className="hover:scale-125 transition duration-300" />
            <FaStar className="hover:scale-125 transition duration-300" />
            <FaStar className="hover:scale-125 transition duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
