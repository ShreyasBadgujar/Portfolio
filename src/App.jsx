// import { useState, useEffect } from 'react';
// import { Menu, X, Github, Linkedin, Mail, ExternalLink, ChevronDown } from 'lucide-react';
// import Project1 from "./assets/project1.png"
// import Project2 from "./assets/Project2.png"
// import Project3 from "./assets/Project3.png"

// const Portfolio = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => setScrollY(window.scrollY);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const projects = [
//     {
//       title: "E-Commerce Platform",
//       description: "A responsive E-Commerce website built with HTML, CSS, and JavaScript, featuring product browsing, cart management, and a smooth checkout simulation.",
//       tech: ["HTML","CSS","Javascript"],
//       image: Project1,
//       github: "https://github.com/ShreyasBadgujar/E-Commerce-Website",
//       live: "https://e-commerce-website-seven-fawn.vercel.app/"
//     },
//     {
//       title: "Doctor Appointment App",
//       description: "Interactive data visualization dashboard with machine learning insights and predictive analytics.",
//       tech: ["React", "MongoDB", "Express", "Node.js"],
//       image: Project2,
//       github: "https://github.com/ShreyasBadgujar/Doctor-appointment",
//       live: "#"
//     },
//     {
//       title: "AI Story-Generator",
//       description: "Create unique stories instantly using the power of Google's Gemini API. Just enter a prompt, and let the AI turn your idea into a compelling narrative.",
//       tech: ["React", "Gemini Api"],
//       image: Project3,
//       github: "https://github.com/ShreyasBadgujar/Ai-StoryGenarator.git",
//       live: "#"
//     }
//   ];

//     const skills = [
//     { 
//       name: "React", 
//       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
//     },
//     { 
//       name: "JavaScript", 
//       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
//     },
//     { 
//       name: "Node.js", 
//       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
//     },
//     { 
//       name: "C++", 
//       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
//     },
//     { 
//       name: "Express", 
//       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
//     },
//     { 
//       name: "MongoDB", 
//       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
//       {/* Animated Background */}
//       <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 animate-pulse" style={{animationDuration: '8s'}} />
      
//       {/* Floating Particles */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         {[...Array(20)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60 animate-bounce"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 3}s`,
//               animationDuration: `${3 + Math.random() * 2}s`
//             }}
//           />
//         ))}
//       </div>

//       {/* Navigation */}
//       <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-slate-900/90 backdrop-blur-lg border-b border-slate-700' : 'bg-transparent'}`}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
//               Shreyas Badgujar
//             </div>
            
//             {/* Desktop Menu */}
//             <div className="hidden md:flex space-x-8">
//               {['Home', 'About', 'Projects'].map((item) => (
//                 <a
//                   key={item}
//                   href={`#${item.toLowerCase()}`}
//                   className="text-slate-300 hover:text-white transition-all duration-300 relative group"
//                 >
//                   {item}
//                   <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full" />
//                 </a>
//               ))}
//             </div>

//             {/* Mobile Menu Button */}
//             <button
//               className="md:hidden text-white"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//             >
//               {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-700">
//             <div className="px-2 pt-2 pb-3 space-y-1">
//               {['Home', 'About', 'Projects', 'Contact'].map((item) => (
//                 <a
//                   key={item}
//                   href={`#${item.toLowerCase()}`}
//                   className="block px-3 py-2 text-slate-300 hover:text-white transition-colors"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   {item}
//                 </a>
//               ))}
//             </div>
//           </div>
//         )}
//       </nav>

//       {/* Hero Section */}
//       <section id="home" className="min-h-screen flex items-center justify-center relative">
//         <div className="text-center px-4 z-10">
//           <div className="animate-fade-in-up">
//             <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
//               Full-Stack Developer
//             </h1>
//             <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
//               Crafting digital experiences with cutting-edge technology and innovative design
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <a
//                 href="#projects"
//                 className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-semibold hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
//               >
//                 View My Work
//               </a>
//             </div>
//           </div>
//         </div>
        
//         {/* Scroll Indicator */}
//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//           <ChevronDown className="text-cyan-400" size={32} />
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="about" className="py-20 px-4 relative z-10">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
//             About Me
//           </h2>
          
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div className="space-y-6">
//               <p className="text-lg text-slate-300 leading-relaxed">
//                 I'm a fresher MERN stack developer with a strong foundation in building full-stack web applications using MongoDB, Express.js, React, and Node.js. I’m also passionate about problem solving and regularly practice coding challenges in C++ to sharpen my algorithmic thinking.
//               </p>
//               <p className="text-lg text-slate-300 leading-relaxed">
//                 When I’m not coding, I enjoy learning new technologies, contributing to beginner-friendly open source projects, and continuously improving my skills.
//               </p>
              
//               {/* Social Links */}
//               <div className="flex space-x-4 pt-4">
//                 <a href="https://github.com/ShreyasBadgujar" className="p-3 bg-slate-800 rounded-full hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-600 transition-all duration-300">
//                   <Github size={24} />
//                 </a>
//                 <a href="https://www.linkedin.com/in/shreyas-badgujar-a97058258/" className="p-3 bg-slate-800 rounded-full hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-600 transition-all duration-300">
//                   <Linkedin size={24} />
//                 </a>
//                 <a href="#" className="p-3 bg-slate-800 rounded-full hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-600 transition-all duration-300">
//                   <Mail size={24} />
//                 </a>
//               </div>
//             </div>
            
//             {/* Skills */}
//             <div className="bg-slate-800 p-6 rounded-lg">
//       <div className="space-y-6">
//         <h3 className="text-2xl font-bold text-cyan-400 mb-6">Skills & Expertise</h3>
//         {skills.map((skill, index) => (
//           <div key={skill.name} className="flex items-center space-x-3 p-3 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors duration-200">
//             <img 
//               src={skill.logo} 
//               alt={`${skill.name} logo`}
//               className="w-8 h-8 object-contain"
//             />
//             <span className="text-slate-300 font-medium">{skill.name}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//           </div>
//         </div>
//       </section>

//       {/* Projects Section */}
//       <section id="projects" className="py-20 px-4 relative z-10">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
//             Featured Projects
//           </h2>
          
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {projects.map((project, index) => (
//               <div
//                 key={index}
//                 className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 group"
//               >
//                 <div className="relative overflow-hidden">
//                   <img
//                     src={project.image}
//                     alt={project.title}
//                     className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                 </div>
                
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold mb-2 text-cyan-400">{project.title}</h3>
//                   <p className="text-slate-300 mb-4">{project.description}</p>
                  
//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {project.tech.map((tech, techIndex) => (
//                       <span
//                         key={techIndex}
//                         className="px-3 py-1 bg-slate-700 text-cyan-400 rounded-full text-sm"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
                  
//                   <div className="flex space-x-4">
//                     <a
//                       href={project.github}
//                       className="flex items-center text-slate-300 hover:text-cyan-400 transition-colors"
//                     >
//                       <Github size={16} className="mr-1" />
//                       Code
//                     </a>
//                     <a
//                       href={project.live}
//                       className="flex items-center text-slate-300 hover:text-cyan-400 transition-colors"
//                     >
//                       <ExternalLink size={16} className="mr-1" />
//                       Live Demo
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>


//       {/* Footer */}
//       <footer className="py-8 px-4 border-t border-slate-700 text-center text-slate-400 relative z-10">
//         <p>&copy; 2025 Shreyas Badgujar. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default Portfolio;

import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, ChevronDown } from 'lucide-react';
import Project1 from "./assets/project1.png"
import Project2 from "./assets/project2.png"
import Project3 from "./assets/project3.png"

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A responsive E-Commerce website built with HTML, CSS, and JavaScript, featuring product browsing, cart management, and a smooth checkout simulation.",
      tech: ["HTML","CSS","Javascript"],
      image: Project1,
      github: "https://github.com/ShreyasBadgujar/E-Commerce-Website",
      live: "https://e-commerce-website-seven-fawn.vercel.app/"
    },
    {
      title: "Doctor Appointment App",
      description: "Interactive data visualization dashboard with machine learning insights and predictive analytics.",
      tech: ["React", "MongoDB", "Express", "Node.js"],
      image: Project2,
      github: "https://github.com/ShreyasBadgujar/Doctor-appointment",
      live: "#"
    },
    {
      title: "AI Story-Generator",
      description: "Create unique stories instantly using the power of Google's Gemini API. Just enter a prompt, and let the AI turn your idea into a compelling narrative.",
      tech: ["React", "Gemini Api"],
      image: Project3,
      github: "https://github.com/ShreyasBadgujar/Ai-StoryGenarator.git",
      live: "#"
    }
  ];

  const skills = [
    { 
      name: "React", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
    },
    { 
      name: "JavaScript", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
    },
    { 
      name: "Node.js", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
    },
    { 
      name: "C++", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
    },
    { 
      name: "Express", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
    },
    { 
      name: "MongoDB", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white overflow-x-hidden relative">
      {/* Animated Mesh Background */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 animate-pulse" style={{animationDuration: '4s'}} />
        <div className="absolute inset-0 bg-gradient-to-tl from-blue-500/10 via-indigo-500/10 to-purple-500/10 animate-pulse" style={{animationDuration: '6s', animationDelay: '2s'}} />
      </div>
      
      {/* Enhanced Floating Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full ${i % 3 === 0 ? 'bg-gradient-to-r from-cyan-400 to-blue-500' : i % 3 === 1 ? 'bg-gradient-to-r from-purple-400 to-pink-500' : 'bg-gradient-to-r from-emerald-400 to-teal-500'} opacity-70`}
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(6, 182, 212, 0.3); }
          50% { box-shadow: 0 0 40px rgba(6, 182, 212, 0.6), 0 0 60px rgba(168, 85, 247, 0.4); }
        }
        
        .glow-effect {
          animation: glow 3s ease-in-out infinite;
        }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrollY > 50 ? 'bg-slate-950/80 backdrop-blur-xl border-b border-slate-700/50 shadow-2xl' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent hover:scale-110 transition-transform duration-300">
              Shreyas Badgujar
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Projects'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-slate-300 hover:text-white transition-all duration-300 relative group px-4 py-2 rounded-full hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-purple-500/20"
                >
                  {item}
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-purple-500/20 p-2 rounded-full transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-950/90 backdrop-blur-xl border-t border-slate-700/50 shadow-2xl">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-3 py-2 text-slate-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-purple-500/20 rounded-lg transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative">
        <div className="text-center px-4 z-10">
          <div className="space-y-8">
            <h1 className="text-5xl p-10 md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse glow-effect">
              Full-Stack Developer
            </h1>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#projects"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-semibold hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/25 transform transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Animated Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse" />
            </div>
            <ChevronDown className="text-cyan-400" size={24} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 bg-slate-900/30 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-500">
              <p className="text-lg text-slate-300 leading-relaxed">
                I'm a fresher MERN stack developer with a strong foundation in building full-stack web applications using MongoDB, Express.js, React, and Node.js. I'm also passionate about problem solving and regularly practice coding challenges in C++ to sharpen my algorithmic thinking.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                When I'm not coding, I enjoy learning new technologies, contributing to beginner-friendly open source projects, and continuously improving my skills.
              </p>
              
              {/* Enhanced Social Links */}
              <div className="flex space-x-4 pt-6">
                <a 
                  href="https://github.com/ShreyasBadgujar" 
                  className="p-4 bg-gradient-to-r from-slate-800 to-slate-700 rounded-full hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/25"
                >
                  <Github size={24} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/shreyas-badgujar-a97058258/" 
                  className="p-4 bg-gradient-to-r from-slate-800 to-slate-700 rounded-full hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/25"
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href="#" 
                  className="p-4 bg-gradient-to-r from-slate-800 to-slate-700 rounded-full hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/25"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
            
            {/* Enhanced Skills Section */}
            <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-purple-400/50 transition-all duration-500">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-8">Skills & Expertise</h3>
                <div className="grid grid-cols-2 gap-4">
                  {skills.map((skill, index) => (
                    <div 
                      key={skill.name} 
                      className="flex items-center space-x-3 p-4 bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-xl hover:from-cyan-500/20 hover:to-purple-500/20 transition-all duration-300 hover:scale-105 border border-slate-600/30 hover:border-cyan-400/50"
                    >
                      <div className="w-10 h-10 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-full flex items-center justify-center">
                        <img 
                          src={skill.logo} 
                          alt={`${skill.name} logo`}
                          className="w-6 h-6 object-contain filter brightness-110"
                        />
                      </div>
                      <span className="text-slate-300 font-medium">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-cyan-500/80 to-purple-600/80 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Featured
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gradient-to-r from-slate-700/50 to-slate-600/50 border border-slate-600/30 text-cyan-400 rounded-full text-sm hover:from-cyan-500/20 hover:to-purple-500/20 hover:border-cyan-400/50 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="flex items-center text-slate-300 hover:text-cyan-400 transition-colors duration-300 hover:scale-105 transform"
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center text-slate-300 hover:text-cyan-400 transition-colors duration-300 hover:scale-105 transform"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="py-12 px-4 border-t border-slate-700/50 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-slate-900/50 to-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
            <p className="text-slate-400 mb-4">
              &copy; 2025 Shreyas Badgujar. All rights reserved.
            </p>
            <div className="flex justify-center space-x-6">
              <a 
                href="https://github.com/ShreyasBadgujar" 
                className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/shreyas-badgujar-a97058258/" 
                className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#" 
                className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;