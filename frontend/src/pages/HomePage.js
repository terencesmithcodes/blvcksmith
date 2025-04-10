import ProfileImage from '../components/ProfileImage'

import React, { useState, useEffect } from 'react';

function HomePage() {
  // State to track if user has scrolled
  const [hasScrolled, setHasScrolled] = useState(false);
  
  // Setup scroll event listener to track user scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100 && !hasScrolled) {
        setHasScrolled(true);
      } else if (window.scrollY <= 100 && hasScrolled) {
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
  
  return (
    <div className="bg-gray-100">
      {/* Floating Scroll Indicator Arrow */}
      {!hasScrolled && (
        <div 
          onClick={scrollDown}
          className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50 cursor-pointer animate-bounce"
          style={{
            width: "40px",
            height: "40px",
            backgroundColor: "#FACC15",
            borderRadius: "50%",
            border: "2px solid black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "4px 4px 0px 0px rgba(0,0,0,1)"
          }}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      )}
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Blvck Smith</h1>
          <p className="text-xl md:text-2xl mb-8">Web Developer & Software Engineer</p>
          <a 
            href="/contact" 
            className="inline-block bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Get In Touch
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="w-64 h-64 mx-auto shadow-lg">
                <ProfileImage size={256} />
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">About Me</h2>
              <p className="text-gray-700 mb-6">
                I'm a passionate software developer with expertise in building modern web applications.
                I specialize in React, Node.js, and AWS cloud technologies. With a focus on creating clean,
                efficient, and user-friendly applications, I strive to deliver high-quality solutions
                that meet client needs.
              </p>
              <p className="text-gray-700 mb-6">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source
                projects, or enjoying outdoor activities.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="/contact" 
                  className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
                >
                  Contact Me
                </a>
                <a 
                  href="/projects" 
                  className="bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 transition duration-300"
                >
                  View Projects
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">My Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              'JavaScript', 'React', 'Node.js', 'Express', 
              'MongoDB', 'AWS', 'Git', 'HTML/CSS', 
              'Tailwind CSS', 'RESTful APIs', 'Responsive Design', 'Database Design'
            ].map((skill, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center">
                <p className="font-medium">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage