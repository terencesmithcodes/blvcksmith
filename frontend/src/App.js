import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import ServiceCard from './components/ProjectCard'
import ContactForm from './components/ContactForm'
import BackgroundVideo from './components/BackgroundVideo'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import ServicesPage from './pages/ServicesPage'
import ProjectsPage from './pages/ProjectsPage'
import ProjectDetailPage from './pages/ProjectDetailPage'
import ThanksPage from './pages/ThanksPage'
import NotFound from './pages/NotFound'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'

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
    <div className="flex flex-col min-h-screen bg-primary">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:id" element={<ProjectDetailPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/thanks" element={<ThanksPage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App