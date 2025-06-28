import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, ChevronDown } from 'lucide-react';

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
      image: "src/assets/project1.png",
      github: "https://github.com/ShreyasBadgujar/E-Commerce-Website",
      live: "https://e-commerce-website-seven-fawn.vercel.app/"
    },
    {
      title: "Doctor Appointment App",
      description: "Interactive data visualization dashboard with machine learning insights and predictive analytics.",
      tech: ["React", "MongoDB", "Express", "Node.js"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      github: "https://github.com/ShreyasBadgujar/Doctor-appointment",
      live: "#"
    },
    {
      title: "Mobile Fitness App",
      description: "Cross-platform mobile app for workout tracking with social features and progress analytics.",
      tech: ["React Native", "Firebase", "Redux", "Expo"],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
      github: "#",
      live: "#"
    }
  ];

  const skills = [
    { name: "React", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "Python", level: 80 },
    { name: "AWS", level: 75 },
    { name: "UI/UX Design", level: 88 }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 animate-pulse" style={{animationDuration: '8s'}} />
      
      {/* Floating Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-slate-900/90 backdrop-blur-lg border-b border-slate-700' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Shreyas Badgujar
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-slate-300 hover:text-white transition-all duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-3 py-2 text-slate-300 hover:text-white transition-colors"
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
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
              Full-Stack Developer
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Crafting digital experiences with cutting-edge technology and innovative design
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#projects"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-semibold hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border-2 border-cyan-400 rounded-full text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-cyan-400" size={32} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-slate-300 leading-relaxed">
                I'm a passionate full-stack developer with 5+ years of experience creating digital solutions that make a difference. I specialize in React, Node.js, and modern web technologies.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open source projects, or mentoring aspiring developers.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4 pt-4">
                <a href="https://github.com/ShreyasBadgujar" className="p-3 bg-slate-800 rounded-full hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-600 transition-all duration-300">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/shreyas-badgujar-a97058258/" className="p-3 bg-slate-800 rounded-full hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-600 transition-all duration-300">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="p-3 bg-slate-800 rounded-full hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-600 transition-all duration-300">
                  <Mail size={24} />
                </a>
              </div>
            </div>
            
            {/* Skills */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">Skills & Expertise</h3>
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-300">{skill.name}</span>
                    {/* <span className="text-cyan-400">{skill.level}%</span> */}
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-cyan-400 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    /> 
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-cyan-400">{project.title}</h3>
                  <p className="text-slate-300 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-700 text-cyan-400 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="flex items-center text-slate-300 hover:text-cyan-400 transition-colors"
                    >
                      <Github size={16} className="mr-1" />
                      Code
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center text-slate-300 hover:text-cyan-400 transition-colors"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's create something amazing together.
          </p>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-slate-400">
                  Your Name
                </div>
                <div className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-slate-400">
                  Your Email
                </div>
              </div>
              <div className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-slate-400">
                Subject
              </div>
              <div className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-slate-400 h-32 flex items-start">
                Your Message
              </div>
              <button
                onClick={() => alert('Thanks for your interest! This is a demo contact form.')}
                className="w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg text-white font-semibold hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-700 text-center text-slate-400 relative z-10">
        <p>&copy; 2025 Shreyas Badgujar. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;