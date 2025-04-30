// src/Components/Work.jsx
import React from 'react';
import { FaStar } from 'react-icons/fa';
import projectImage from '../assets/project-sample.jpg'; 
import projectImage2 from '../assets/project-sample2.jpg';

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
        <div className="relative w-full md:w-1/2 group">
          <img
            src={projectImage}
            alt="Project"
            className="rounded-xl shadow-lg group-hover:shadow-purple-500 transition duration-300"
          />
        </div>

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
        <div className="relative w-full md:w-1/2 group">
          <img
            src={projectImage2}
            alt="Project"
            className="rounded-xl shadow-lg group-hover:shadow-purple-500 transition duration-300"
          />
        </div>

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
    </section>
  );
};

export default Works;
