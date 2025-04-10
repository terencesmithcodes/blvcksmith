import { useState, useEffect } from 'react'
import Footer from './components/Footer'
import ServiceCard from './components/ProjectCard'
import ContactForm from './components/ContactForm'
import BackgroundVideo from './components/BackgroundVideo'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Check window resize (for potential mobile optimizations)
  useEffect(() => {
    const handleResize = () => {
      // We can add mobile-specific logic here if needed in the future
    }
    
    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

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
  ]

  // Technologies we work with
  const technologies = [
    'JavaScript', 'React', 'Node.js', 'Express', 
    'MongoDB', 'AWS', 'Git', 'HTML/CSS', 
    'Tailwind CSS', 'RESTful APIs', 'Responsive Design', 'Database Design',
    'GraphQL', 'Docker', 'Kubernetes', 'CI/CD',
    'Shopify', 'WordPress', 'Next.js', 'TypeScript'
  ]

  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAFA]">
      {/* Mobile Header - Neo-Brutalist */}
      <div className="md:hidden bg-[#000000] text-[#FAFAFA] p-4 relative overflow-hidden border-b-4 border-[#FACC15]">
        <div className="flex justify-between items-center relative z-10">
          <div className="flex items-center">
            <div className="w-8 h-8 mr-2 bg-white border border-[#FACC15] rounded-sm overflow-hidden">
              <img src="/images/logo.svg" alt="BS Logo" className="w-full h-full object-contain" />
            </div>
            <h1 className="text-xl font-bold font-['Orbitron']">BlvckSmith</h1>
          </div>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[#FAFAFA] focus:outline-none p-1 rounded hover:bg-[#FACC15] hover:text-black transition-colors"
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
        
        {/* Mobile Menu - Neo-Brutalist */}
        <div 
          className={`mt-4 transform transition-all duration-500 ${
            mobileMenuOpen 
              ? 'opacity-100 max-h-[600px]' 
              : 'opacity-0 max-h-0 overflow-hidden'
          }`}
        >
          <div className="p-5 bg-[#E4E4E7] rounded-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] border-2 border-black">
            <div className="flex flex-col items-center mb-8">
              <div className="w-full h-32 mb-4 relative animate-scale-in border-2 border-black bg-white p-2">
                <img src="/images/logo.svg" alt="BlvckSmith Logo" className="w-full h-full object-contain" />
              </div>
              <div className="text-center">
                <h2 className="text-xl font-bold animate-fade-in text-[#000000] font-['Orbitron'] mb-2">BlvckSmith</h2>
                <p className="text-sm animate-fade-in font-['Orbitron']" style={{ animationDelay: '200ms' }}>
                  <span className="bg-[#FACC15] px-2 py-1 border-2 border-black text-black">WEB</span> <span className="bg-black text-white px-2 py-1 border-2 border-black">DEV</span>
                </p>
              </div>
            </div>
            
            <div className="border-t-2 border-black pt-4 mb-4"></div>
            
            <div className="text-sm text-[#000000] mb-6 animate-fade-in font-medium" style={{ animationDelay: '400ms' }}>
              We create custom web solutions that help businesses grow and thrive in the digital world.
            </div>
            
            <div className="flex justify-center space-x-6 animate-fade-in" style={{ animationDelay: '600ms' }}>
              {[
                { href: "https://github.com", label: "GitHub", icon: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" },
                { href: "https://linkedin.com", label: "LinkedIn", icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
                { href: "https://twitter.com", label: "Twitter", icon: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" }
              ].map((social) => (
                <a 
                  key={social.label}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex flex-col items-center"
                >
                  <svg className="w-6 h-6 text-[#000000] hover:text-[#FACC15] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                  <span className="text-xs mt-1 text-[#000000] font-medium">{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row flex-grow">
        {/* Left Info Card - Hidden on mobile, centered vertically */}
        <aside className="hidden md:block md:w-1/5 lg:w-1/6 p-4 flex items-center justify-center">
          <div className="bg-[#E4E4E7] rounded-none border-2 border-black p-6 sticky top-8 overflow-hidden relative mx-auto shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex flex-col items-center relative">
              <div className="w-full h-48 mb-8 relative z-10 animate-scale-in">
                <img src="/images/logo.svg" alt="BlvckSmith Logo" className="w-full h-full object-contain" />
              </div>
              
              <h1 className="text-2xl font-bold mb-3 text-[#000000] animate-fade-in font-['Orbitron']" style={{ animationDelay: '300ms' }}>BlvckSmith</h1>
              <p className="text-sm text-[#000000] text-center mb-4 animate-fade-in font-medium font-['Orbitron']" style={{ animationDelay: '400ms' }}>
                <span className="bg-[#FACC15] px-2 py-1 border-2 border-black">WEB</span> <span className="bg-black text-white px-2 py-1 border-2 border-black">DEV</span>
              </p>
              
              <div className="w-full border-t-2 border-black pt-4 mb-2"></div>
              
              <div className="flex justify-center space-x-3 animate-fade-in" style={{ animationDelay: '600ms' }}>
                {[
                  { 
                    href: "https://github.com", 
                    label: "GitHub",
                    path: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                  },
                  { 
                    href: "https://linkedin.com", 
                    label: "LinkedIn",
                    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                  },
                  { 
                    href: "https://twitter.com", 
                    label: "Twitter",
                    path: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                  }
                ].map((social, index) => (
                  <a 
                    key={social.label}
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label={social.label}
                    className="transform transition-all hover:scale-125 hover:rotate-6"
                  >
                    <svg className="w-5 h-5 text-[#000000] hover:text-[#FACC15] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-grow min-h-screen flex flex-col">
          <div className="flex-grow">
          {/* Hero Section - Neo-Brutalist with Background Video */}
          <section className="text-[#000000] py-20 md:py-32 px-4 md:px-12 relative min-h-[600px] flex items-center overflow-hidden">
            {/* Background Video */}
            <BackgroundVideo videoSrc="/videos/background.mp4" />
            
            {/* Content */}
            <div className="max-w-4xl mx-auto relative z-20 mt-20">
              {/* Mobile-only content */}
              <div className="md:hidden mb-12">
                {/* Handled by the mobile menu */}
              </div>

              <div className="bg-white/70 p-6 border-4 border-black inline-block shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <h1 className="text-5xl md:text-6xl font-bold mb-8 animate-fade-in leading-tight tracking-tight">
                  Forge Your <span className="text-[#EF4444] bg-[#FACC15] px-2 border-2 border-black">Digital</span> Presence
                </h1>
                <p className="text-xl text-[#000000] mb-10 animate-fade-in max-w-2xl font-bold" style={{ animationDelay: '200ms' }}>
                  Expert web development and technical consulting to help your business thrive in the digital world.
                </p>
                <div className="flex justify-start">
                  <button 
                    onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                    className="bg-black text-white hover:bg-[#FACC15] hover:text-black border-4 border-black px-10 py-4 font-bold animate-fade-in text-lg shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:shadow-none transition-all"
                    style={{ animationDelay: '400ms' }}
                  >
                    GET STARTED
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section - Neo-Brutalist */}
          <section className="py-16 px-4 md:px-12 bg-[#FAFAFA]">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-2 animate-fade-in text-[#000000]">Our Services</h2>
              <p className="text-[#000000] mb-10 animate-fade-in font-medium" style={{ animationDelay: '200ms' }}>
                We provide a range of web development services to help businesses succeed online
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {services.map((service, index) => (
                  <div 
                    key={service.id} 
                    className="animate-fade-in"
                    style={{ 
                      animationDelay: `${200 + (index * 150)}ms`,
                      opacity: 0
                    }}
                  >
                    <ServiceCard project={service} />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Technologies Section - Neo-Brutalist */}
          <section className="py-16 px-4 md:px-12 bg-[#000000]">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-2 animate-fade-in text-[#FAFAFA]">Technologies</h2>
              <p className="text-[#E4E4E7] mb-10 animate-fade-in font-medium" style={{ animationDelay: '200ms' }}>
                We work with the latest technologies to build modern, scalable web solutions
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {technologies.map((tech, index) => (
                  <div 
                    key={index} 
                    className="skill-item bg-[#E4E4E7] p-4 text-center text-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(250,204,21,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
                    style={{ 
                      animationName: 'scaleIn',
                      animationDuration: '0.5s',
                      animationFillMode: 'forwards',
                      animationDelay: `${100 + (index * 50)}ms`
                    }}
                  >
                    <p className="font-bold">{tech}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section - Neo-Brutalist */}
          <section id="contact" className="py-16 px-4 md:px-12 bg-[#FAFAFA]">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-2 animate-fade-in text-[#000000]">Contact Us</h2>
              <p className="text-[#000000] mb-10 animate-fade-in font-medium" style={{ animationDelay: '200ms' }}>
                Ready to start your project? Reach out to discuss how we can help.
              </p>
              
              <div className="bg-[#E4E4E7] border-2 border-black p-8 animate-scale-in shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]" style={{ animationDelay: '200ms', opacity: 0 }}>
                <div className="animate-fade-in" style={{ animationDelay: '400ms', opacity: 0 }}>
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
  )
}

export default App