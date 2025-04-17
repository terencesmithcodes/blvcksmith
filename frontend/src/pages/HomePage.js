import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import ServiceCard from '../components/ProjectCard';
import ContactForm from '../components/ContactForm';
import BackgroundVideo from '../components/BackgroundVideo';

function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // State to track if user has scrolled
  const [hasScrolled, setHasScrolled] = useState(false);
  
  // Setup scroll event listener to track user scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.8 && !hasScrolled) {
        setHasScrolled(true);
      } else if (window.scrollY <= window.innerHeight * 0.8 && hasScrolled) {
        setHasScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasScrolled]);
  
  // Function to smoothly scroll down
  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight * 0.8,
      behavior: 'smooth'
    });
  };

  // Services offered
  const services = [
    {
      id: 1,
      title: 'Custom Web Development',
      description: 'Full-stack web applications built from the ground up with modern technologies and best practices.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'AWS'],
    },
    {
      id: 2,
      title: 'E-commerce Solutions',
      description: 'Scalable online stores with secure payment processing, inventory management, and customer analytics.',
      technologies: ['React', 'Node.js', 'Stripe', 'Shopify', 'PayPal'],
    },
    {
      id: 3,
      title: 'API Development & Integration',
      description: 'Custom API development and third-party integrations to connect your business systems seamlessly.',
      technologies: ['REST', 'GraphQL', 'OAuth', 'Webhooks', 'Microservices'],
    },
    {
      id: 4,
      title: 'Cloud Infrastructure',
      description: 'Robust, scalable cloud architecture designed for performance, security, and cost optimization.',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Serverless'],
    },
    {
      id: 5,
      title: 'Technical Consulting',
      description: 'Expert guidance on technology stack selection, architecture planning, and development workflows.',
      technologies: ['Code Reviews', 'Architecture Design', 'Tech Selection', 'Security Audits'],
    },
    {
      id: 6,
      title: 'Website Maintenance',
      description: 'Ongoing support, updates, performance optimization, and security monitoring for your web applications.',
      technologies: ['Performance Tuning', 'Security Patches', 'Backup Systems', 'Monitoring'],
    },
  ];

  // Technologies we work with
  const technologies = [
    'JavaScript', 'React', 'Node.js', 'Express', 
    'MongoDB', 'AWS', 'Git', 'HTML/CSS', 
    'Tailwind CSS', 'RESTful APIs', 'Responsive Design', 'Database Design',
    'GraphQL', 'Docker', 'Kubernetes', 'CI/CD',
    'Shopify', 'WordPress', 'Next.js', 'TypeScript'
  ];
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-950">
      {/* Mobile Header - Modern Sleek Design */}
      <div className="md:hidden bg-gray-900 text-white p-4 relative overflow-hidden border-b border-gray-800">
        <div className="flex justify-between items-center relative z-10">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">BlvckSmith</h1>
          </div>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white focus:outline-none p-1 rounded-lg hover:bg-gray-800 transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu - Modern Flyout */}
        <div 
          className={`fixed inset-0 z-50 bg-gray-900/90 backdrop-blur-lg transform transition-all duration-500 ${
            mobileMenuOpen 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 -translate-x-full'
          }`}
        >
          <div className="h-full flex flex-col p-6">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">BlvckSmith</h2>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="text-white p-2 rounded-full hover:bg-gray-800 transition-colors"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <nav className="mb-8">
              <ul className="space-y-4">
                {[
                  { name: "Home", href: "/" },
                  { name: "Services", href: "#services", onClick: () => { setMobileMenuOpen(false); document.getElementById('services').scrollIntoView({ behavior: 'smooth' }); } },
                  { name: "Projects", href: "/projects" },
                  { name: "About", href: "/about" },
                  { name: "Contact", href: "#contact", onClick: () => { setMobileMenuOpen(false); document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }); } }
                ].map((item, i) => (
                  <li key={i} className="transform transition-all duration-300" style={{ transitionDelay: `${i * 50}ms` }}>
                    <a 
                      href={item.href}
                      onClick={item.onClick}
                      className="flex items-center px-4 py-3 text-white text-xl font-medium rounded-lg hover:bg-gray-800 group transition-all duration-300"
                    >
                      <span className="w-2 h-2 rounded-full bg-blue-500 mr-4 transform scale-0 group-hover:scale-100 transition-all duration-300"></span>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            
            <div className="border-t border-gray-800 pt-6 mb-6"></div>
            
            <div className="text-gray-300 mb-8 animate-fade-in font-medium">
              Expert web development and digital solutions to help your business thrive online.
            </div>
            
            <div className="flex justify-center space-x-8 mb-auto">
              {[
                { href: "https://github.com", label: "GitHub", icon: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12", color: "text-blue-400" },
                { href: "https://linkedin.com", label: "LinkedIn", icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z", color: "text-purple-400" },
                { href: "https://twitter.com", label: "Twitter", icon: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085a4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z", color: "text-cyan-400" }
              ].map((social) => (
                <a 
                  key={social.label}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`${social.color} hover:text-white transform transition-all hover:scale-125 duration-300`}
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
            
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
              }}
              className="mt-8 py-4 px-6 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-all duration-300 text-base font-medium shadow-lg shadow-blue-500/20"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-grow bg-gray-950">
        {/* Desktop Navigation Bar - Appears on Scroll */}
        <header className={`hidden md:flex justify-between items-center py-4 px-8 bg-black/40 backdrop-blur-lg fixed top-0 left-0 right-0 z-50 border-b border-white/10 transition-all duration-500 ${hasScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}`}>
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">BlvckSmith</h1>
          </div>
          
          <nav>
            <ul className="flex space-x-8">
              {[
                { name: "Home", href: "/" },
                { name: "Services", href: "#services" },
                { name: "Projects", href: "/projects" },
                { name: "About", href: "/about" },
                { name: "Contact", href: "#contact" }
              ].map((item, i) => (
                <li key={i}>
                  <a 
                    href={item.href}
                    className="text-gray-300 hover:text-white relative overflow-hidden group transition-all duration-300"
                  >
                    <span className="relative z-10">{item.name}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex space-x-4">
              {[
                { 
                  href: "https://github.com", 
                  label: "GitHub",
                  path: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
                  color: "text-blue-400"
                },
                { 
                  href: "https://linkedin.com", 
                  label: "LinkedIn",
                  path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
                  color: "text-purple-400"
                },
                { 
                  href: "https://twitter.com", 
                  label: "Twitter",
                  path: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085a4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z",
                  color: "text-cyan-400"
                }
              ].map((social, index) => (
                <a 
                  key={social.label}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={social.label}
                  className={`${social.color} transform transition-all hover:scale-125 hover:rotate-6 hover:text-white duration-300`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
            
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="px-5 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 text-sm font-medium"
            >
              Get Started
            </button>
          </div>
        </header>
        
        {/* Hamburger Menu for Desktop when not scrolled */}
        <button 
          className={`hidden md:flex fixed top-6 right-6 z-50 items-center justify-center w-12 h-12 rounded-full bg-black/30 backdrop-blur-lg text-white border border-white/10 hover:bg-black/50 transition-all duration-300 ${hasScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        
        {/* Desktop Menu Flyout */}
        <div 
          className={`fixed top-0 right-0 z-50 transform transition-all duration-500 ${
            mobileMenuOpen 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 translate-x-full pointer-events-none'
          }`}
        >
          <div className="h-screen w-96 bg-black/60 backdrop-blur-md flex flex-col p-8 border-l border-white/10 shadow-2xl">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">BlvckSmith</h2>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="text-white p-2 rounded-full hover:bg-gray-800/50 transition-colors"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <nav className="mb-8">
              <ul className="space-y-4">
                {[
                  { name: "Home", href: "/" },
                  { name: "Services", href: "#services", onClick: () => { setMobileMenuOpen(false); document.getElementById('services').scrollIntoView({ behavior: 'smooth' }); } },
                  { name: "Projects", href: "/projects" },
                  { name: "About", href: "/about" },
                  { name: "Contact", href: "#contact", onClick: () => { setMobileMenuOpen(false); document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }); } }
                ].map((item, i) => (
                  <li key={i} className="transform transition-all duration-300 translate-x-8 opacity-0" style={{ 
                    animation: mobileMenuOpen ? `fadeInRight 0.5s ease-out ${i * 0.1}s forwards` : 'none'
                  }}>
                    <a 
                      href={item.href}
                      onClick={item.onClick}
                      className="flex items-center py-2 text-white text-lg font-medium hover:text-blue-400 group transition-all duration-300"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3 transform scale-0 group-hover:scale-100 transition-all duration-300"></span>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            
            <div className="border-t border-gray-800/50 pt-6 mb-6"></div>
            
            <div className="mt-auto">
              <div className="flex justify-start space-x-5 mb-8">
                {[
                  { href: "https://github.com", label: "GitHub", icon: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12", color: "text-blue-400" },
                  { href: "https://linkedin.com", label: "LinkedIn", icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z", color: "text-purple-400" },
                  { href: "https://twitter.com", label: "Twitter", icon: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085a4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z", color: "text-cyan-400" }
                ].map((social) => (
                  <a 
                    key={social.label}
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`${social.color} hover:text-white transform transition-all hover:scale-125 duration-300`}
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.icon} />
                    </svg>
                  </a>
                ))}
              </div>
              
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full py-3 px-5 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-all duration-300 text-base font-medium shadow-lg shadow-blue-500/20"
              >
                Start Your Project
              </button>
            </div>
          </div>
        </div>
        
        {/* Add keyframes for slide-in animation */}
        <style jsx>{`
          @keyframes fadeInRight {
            from {
              opacity: 0;
              transform: translateX(20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}</style>

        {/* Main Content */}
        <main className="flex-grow min-h-screen flex flex-col">
          <div className="flex-grow">
          {/* Hero Section - Modern Sleek Design */}
          <section className="py-20 md:py-36 px-4 md:px-12 relative min-h-[600px] flex items-center overflow-hidden bg-gradient-to-br from-gray-900 to-black">
            {/* Background Video */}
            <BackgroundVideo videoSrc="/videos/background.mp4" />
            
            {/* Abstract Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-blue-500/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDuration: '15s' }}></div>
              <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-purple-500/10 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2 animate-pulse" style={{ animationDuration: '20s' }}></div>
              <div className="absolute top-1/2 left-1/2 w-1/3 h-1/3 bg-cyan-500/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDuration: '8s' }}></div>
            </div>
            
            {/* Content */}
            <div className="max-w-5xl mx-auto relative z-20">
              <div className="text-center">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 animate-fade-in leading-tight tracking-tight text-white">
                  Forge Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Digital</span> Presence
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-12 animate-fade-in max-w-2xl mx-auto font-light" style={{ animationDelay: '200ms' }}>
                  Expert web development and technical consulting to help your business thrive in the digital world.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <button 
                    onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-10 py-4 font-bold animate-fade-in text-lg rounded-full hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300 transform"
                    style={{ animationDelay: '400ms' }}
                  >
                    GET STARTED
                  </button>
                  <Link 
                    to="/projects" 
                    className="bg-transparent border border-purple-500 text-white hover:text-purple-300 px-10 py-4 font-medium animate-fade-in text-lg rounded-full hover:border-purple-300 hover:shadow-lg hover:shadow-purple-500/20 hover:scale-105 transition-all duration-300 transform"
                    style={{ animationDelay: '600ms' }}
                  >
                    VIEW PROJECTS
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section - Modern Cards with Hover Effects */}
          <section id="services" className="py-24 px-4 md:px-12 bg-[#070B14]">
            <div className="max-w-6xl mx-auto">
              <div className="mb-20 text-center">
                <span className="inline-block px-4 py-1 text-sm font-medium bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full mb-4 tracking-wider">WHAT WE OFFER</span>
                <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in text-white">Our Services</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
                <p className="text-gray-300 max-w-2xl mx-auto animate-fade-in text-lg" style={{ animationDelay: '200ms' }}>
                  We provide a comprehensive range of web development services tailored to help your business succeed in the digital landscape
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <div 
                    key={service.id} 
                    className="animate-fade-in"
                    style={{ 
                      animationDelay: `${200 + (index * 150)}ms`,
                      opacity: 0
                    }}
                  >
                    <div className="bg-[#0D1321] rounded-xl p-8 h-full border border-gray-800 group hover:bg-gradient-to-br hover:from-[#0D1321] hover:to-[#101628] hover:border-blue-500/30 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10">
                      <div className="mb-5 inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-300 transition-colors duration-300">{service.title}</h3>
                      <p className="text-gray-400 mb-5 group-hover:text-gray-300 transition-colors duration-300">{service.description}</p>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {service.technologies.map((tech, i) => (
                          <span key={i} className="inline-block px-2 py-1 text-xs font-medium bg-[#161F38] text-gray-300 rounded group-hover:bg-blue-900/30 group-hover:text-blue-300 transition-all duration-300">{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Technologies Section - Modern 3D Tag Cloud */}
          <section className="py-24 px-4 md:px-12 bg-[#030712] relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-blue-600/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDuration: '12s' }}></div>
              <div className="absolute bottom-1/4 right-1/4 w-1/2 h-1/2 bg-purple-600/5 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2 animate-pulse" style={{ animationDuration: '18s' }}></div>
            </div>
            
            <div className="max-w-6xl mx-auto relative z-10">
              <div className="mb-20 text-center">
                <span className="inline-block px-4 py-1 text-sm font-medium bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full mb-4 tracking-wider">OUR TOOLKIT</span>
                <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in text-white">Technologies</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
                <p className="text-gray-300 max-w-2xl mx-auto animate-fade-in text-lg" style={{ animationDelay: '200ms' }}>
                  We leverage cutting-edge technologies to build modern, scalable, and high-performance web solutions
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-5">
                {technologies.map((tech, index) => {
                  // Create different visual styles based on index for variety
                  const variations = [
                    {
                      bg: "bg-gradient-to-r from-blue-600 to-blue-800",
                      text: "text-white",
                      shadow: "shadow-blue-500/20",
                      hoverBg: "hover:from-blue-500 hover:to-blue-700",
                      scale: "hover:scale-110"
                    },
                    {
                      bg: "bg-gradient-to-r from-purple-600 to-indigo-800",
                      text: "text-white",
                      shadow: "shadow-purple-500/20",
                      hoverBg: "hover:from-purple-500 hover:to-indigo-700",
                      scale: "hover:scale-110"
                    },
                    {
                      bg: "bg-[#0F172A]",
                      text: "text-blue-300",
                      shadow: "shadow-blue-500/10",
                      hoverBg: "hover:bg-[#1E293B]",
                      scale: "hover:scale-105"
                    },
                    {
                      bg: "bg-transparent border border-blue-500/30",
                      text: "text-blue-400",
                      shadow: "shadow-none",
                      hoverBg: "hover:border-blue-400",
                      scale: "hover:scale-105"
                    },
                    {
                      bg: "bg-transparent border border-purple-500/30",
                      text: "text-purple-400",
                      shadow: "shadow-none",
                      hoverBg: "hover:border-purple-400",
                      scale: "hover:scale-105"
                    }
                  ];
                  
                  const style = variations[index % variations.length];
                  
                  return (
                    <div 
                      key={index} 
                      className={`skill-item px-5 py-3 rounded-lg text-center ${style.text} ${style.bg} ${style.hoverBg} shadow-lg ${style.shadow} ${style.scale} hover:shadow-xl hover:-rotate-1 transition-all duration-300 transform cursor-pointer`}
                      style={{ 
                        animationName: 'scaleIn',
                        animationDuration: '0.5s',
                        animationFillMode: 'forwards',
                        animationDelay: `${100 + (index * 50)}ms`
                      }}
                    >
                      <p className="font-medium">{tech}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Contact Section - Modern Sleek Contact Form */}
          <section id="contact" className="py-24 px-4 md:px-12 bg-[#050A18] relative">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/5 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3 animate-pulse" style={{ animationDuration: '15s' }}></div>
              <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-500/5 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3 animate-pulse" style={{ animationDuration: '20s' }}></div>
            </div>
            
            <div className="max-w-6xl mx-auto relative z-10">
              <div className="mb-20 text-center">
                <span className="inline-block px-4 py-1 text-sm font-medium bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full mb-4 tracking-wider">GET IN TOUCH</span>
                <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in text-white">Contact Us</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
                <p className="text-gray-300 max-w-2xl mx-auto animate-fade-in text-lg" style={{ animationDelay: '200ms' }}>
                  Ready to start your project? Reach out to discuss how we can help you achieve your digital goals.
                </p>
              </div>
              
              <div className="max-w-3xl mx-auto bg-[#0A1020]/90 backdrop-blur-xl rounded-2xl border border-gray-800/50 p-8 md:p-10 animate-scale-in shadow-2xl hover:shadow-blue-500/5 transition-all duration-500" style={{ animationDelay: '200ms', opacity: 0 }}>
                <div className="animate-fade-in" style={{ animationDelay: '400ms', opacity: 0 }}>
                  {/* Form header with animated gradient */}
                  <div className="mb-8 pb-8 border-b border-gray-700/30">
                    <h3 className="text-2xl font-bold text-white mb-2">Send a Message</h3>
                    <p className="text-gray-400">Fill out the form below and we'll get back to you within 24 hours</p>
                  </div>
                  
                  <ContactForm />
                  
                </div>
              </div>
            </div>
          </section>
          </div>
          
          {/* Footer */}
          <div className="relative z-10">
            <Footer />
          </div>
        </main>
      </div>
      
    </div>
  );
}

export default HomePage;