import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import about from "../assets/about.png";
import '@fortawesome/fontawesome-free/css/all.min.css';

const About = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    AOS.init({ duration: 1000 });
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const getParallaxStyle = (index) => {
    const moveX = (mousePosition.x - window.innerWidth / 2) * (0.05 + index * 0.01);
    const moveY = (mousePosition.y - window.innerHeight / 2) * (0.05 + index * 0.01);
    return {
      transform: `translate(${moveX}px, ${moveY}px)`,
    };
  };

  const skills = [
    { name: 'React', icon: 'fab fa-react', color: 'text-blue-400' },
    { name: 'Tailwind', icon: 'fas fa-wind', color: 'text-cyan-400' },
    { name: 'CSS3', icon: 'fab fa-css3-alt', color: 'text-blue-500' },
    { name: 'HTML5', icon: 'fab fa-html5', color: 'text-orange-500' },
    { name: 'JavaScript', icon: 'fab fa-js', color: 'text-yellow-400' },
    { name: 'Git', icon: 'fab fa-git-alt', color: 'text-red-500' },
    { name: 'Figma', icon: 'fab fa-figma', color: 'text-pink-400' },
  ];

  return (
    <div id="about" className="relative min-h-screen bg-[#1B1E24] text-white p-8">
      
      <div className="absolute top-17 left-0 grid grid-cols-5 gap-1 z-0 opacity-20">
        {Array.from({ length: 25 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
        ))}
      </div>
      <div className="absolute bottom-55 right-0 mr-0 grid grid-cols-5 gap-1 z-0 opacity-20">
        {Array.from({ length: 25 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
        ))}
      </div>

      
      <div className="absolute inset-10 z-0 pointer-events-none opacity-80 font-Mightail">
        {[
          'React', 'Tailwind', 'CSS', 'HTML', 'JavaScript', 'Git', 
          'React', 'Tailwind', 'Figma'
        ].map((tech, i) => {
          const positions = [
            'top-10 left-5',
            'top-20 right-10',
            'top-1/2 left-10',
            'top-1/3 right-20',
            'bottom-10 left-20',
            'bottom-20 right-5',
            'top-1/4 left-1/3',
            'bottom-1/3 right-1/4',
            'top-40 left-1/2',
            'bottom-1/4 right-1/3'
          ];
          return (
            <div
              key={i}
              className={`absolute ${positions[i]} text-2xl text-purple-500 opacity-10 transform rotate-${i * 10}`}
              style={getParallaxStyle(i)}
            >
              {tech}
            </div>
          );
        })}
      </div>

   
      <h1 className="text-5xl font-bold text-center text-purple-400 mb-6 font-Mightail" data-aos="fade-down">
        About Me
      </h1>


      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center md:flex-row md:space-x-8">
     
          <div className="text-center md:text-left text-gray-400 max-w-lg" data-aos="fade-right">
            <h2 className="text-2xl font-bold text-white mb-4">Hi, I'm Nanati Getachew</h2>
            <p className="text-sm mb-4">
              I am a fourth-year student at Adama Science and Technology, 
              passionate about frontend development with a deep interest in web technologies and UI/UX design.
            </p>
            <p className="text-sm mb-4">
              I have experience with modern frontend frameworks like React, TailwindCSS, and JavaScript, and I love keeping up-to-date with the latest trends in web development.
            </p>
            <p className="text-sm">
              When I'm not coding, I enjoy learning new design tools, exploring the latest tech trends, and contributing to open-source projects.
            </p>
          </div>

        
          <div className="mt-8 md:mt-0" data-aos="fade-left">
            <img src={about} alt="About Me" className="w-full h-auto object-cover" />
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="mt-16 text-center">
        <h3 className="text-3xl font-bold text-purple-400 mb-6" data-aos="zoom-in">
          My Skills
        </h3>
        <div className="flex flex-wrap justify-center gap-10">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group hover:text-purple-500 transition-all duration-300 text-white"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <i className={`${skill.icon} text-5xl mb-2 ${skill.color}`}></i>
              <p className="mt-2">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
