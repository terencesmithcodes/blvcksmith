import React from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function ServicesPage() {
  // Service details with expanded information
  const serviceDetails = [
    {
      id: 1,
      title: 'Custom Web Development',
      description: 'Full-stack web applications built from the ground up with modern technologies and best practices.',
      fullDescription: [
        'We create custom web applications tailored to your specific business requirements and objectives.',
        'Our full-stack approach ensures a seamless integration between front-end and back-end components.',
        'We utilize the latest frameworks and technologies to build scalable, high-performance applications.',
        'Our development process includes thorough planning, iterative development, comprehensive testing, and ongoing support.'
      ],
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'AWS'],
      benefits: [
        'Tailored solutions that perfectly match your business requirements',
        'Scalable architecture that grows with your business',
        'Modern user interfaces with exceptional user experience',
        'Secure and reliable applications with regular maintenance'
      ]
    },
    {
      id: 2,
      title: 'E-commerce Solutions',
      description: 'Scalable online stores with secure payment processing, inventory management, and customer analytics.',
      fullDescription: [
        'We build custom e-commerce platforms or enhance existing ones to help you sell products and services online.',
        'Our solutions include secure payment gateways, inventory management systems, and customer relationship tools.',
        'We create seamless shopping experiences across desktop and mobile devices.',
        'Our e-commerce platforms integrate with your existing business systems for streamlined operations.'
      ],
      technologies: ['React', 'Node.js', 'Stripe', 'Shopify', 'PayPal'],
      benefits: [
        'Increased sales through optimized customer journeys',
        'Reduced cart abandonment with streamlined checkout processes',
        'Enhanced customer loyalty through personalized experiences',
        'Comprehensive analytics to understand customer behavior'
      ]
    },
    {
      id: 3,
      title: 'API Development & Integration',
      description: 'Custom API development and third-party integrations to connect your business systems seamlessly.',
      fullDescription: [
        'We develop custom APIs that enable different software systems to communicate and share data effectively.',
        'Our integration services connect your existing systems with third-party platforms and services.',
        'We ensure secure data exchange between different applications and platforms.',
        'Our APIs follow RESTful or GraphQL standards with comprehensive documentation.'
      ],
      technologies: ['REST', 'GraphQL', 'OAuth', 'Webhooks', 'Microservices'],
      benefits: [
        'Streamlined data flow between different business systems',
        'Automated workflows that save time and reduce errors',
        'Enhanced functionality through third-party service integration',
        'Improved business intelligence with consolidated data sources'
      ]
    },
    {
      id: 4,
      title: 'Cloud Infrastructure',
      description: 'Robust, scalable cloud architecture designed for performance, security, and cost optimization.',
      fullDescription: [
        'We design and implement cloud infrastructure solutions that provide reliability, scalability, and security.',
        'Our cloud services include architecture planning, migration, deployment, and ongoing management.',
        'We optimize your cloud resources to balance performance needs with cost efficiency.',
        'Our solutions implement industry best practices for security and compliance.'
      ],
      technologies: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Serverless'],
      benefits: [
        'Improved application reliability and uptime',
        'Scalable infrastructure that handles traffic spikes',
        'Reduced operational costs through optimized resource usage',
        'Enhanced security with modern protection mechanisms'
      ]
    },
    {
      id: 5,
      title: 'Technical Consulting',
      description: 'Expert guidance on technology stack selection, architecture planning, and development workflows.',
      fullDescription: [
        'We provide strategic technical consulting to help you make informed decisions about your technology investments.',
        'Our consulting services include technology assessments, architecture reviews, and roadmap planning.',
        'We offer expert guidance on selecting the right technologies and frameworks for your projects.',
        'Our team helps establish efficient development workflows and best practices.'
      ],
      technologies: ['Code Reviews', 'Architecture Design', 'Tech Selection', 'Security Audits'],
      benefits: [
        'Informed technology decisions aligned with business goals',
        'Optimized development processes that improve efficiency',
        'Reduced technical debt through strategic planning',
        'Access to expert knowledge without permanent hiring costs'
      ]
    },
    {
      id: 6,
      title: 'Website Maintenance',
      description: 'Ongoing support, updates, performance optimization, and security monitoring for your web applications.',
      fullDescription: [
        'We provide comprehensive maintenance services to keep your websites and applications running smoothly.',
        'Our maintenance includes regular updates, security patches, and performance optimizations.',
        'We monitor your applications for potential issues and resolve them proactively.',
        'Our support plans offer peace of mind with responsive assistance when you need it.'
      ],
      technologies: ['Performance Tuning', 'Security Patches', 'Backup Systems', 'Monitoring'],
      benefits: [
        'Improved website reliability and uptime',
        'Enhanced security against evolving threats',
        'Optimized performance for better user experience',
        'Reduced risk of data loss with regular backups'
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAFA]">
      {/* Header */}
      <header className="bg-[#000000] text-[#FAFAFA] py-4 border-b-4 border-[#FACC15]">
        <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <div className="w-8 h-8 mr-2 bg-white border border-[#FACC15] rounded-sm overflow-hidden">
              <img src="/images/logo.svg" alt="BS Logo" className="w-full h-full object-contain" />
            </div>
            <h1 className="text-xl font-bold font-['Orbitron']">BlvckSmith</h1>
          </Link>
          <Link 
            to="/"
            className="text-[#FAFAFA] hover:text-[#FACC15] transition-colors py-1 px-3 border-2 border-[#FACC15] hover:bg-[#000000]/20"
          >
            Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow py-10 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center font-['Orbitron'] text-[#000000]">Our Services</h1>
          <p className="text-[#000000] text-center mb-12 max-w-3xl mx-auto font-medium">
            At BlvckSmith, we offer a comprehensive range of web development and technical services to help your business thrive in the digital world. Each service is tailored to meet your specific needs and objectives.
          </p>

          {/* Services */}
          <div className="space-y-16 max-w-4xl mx-auto">
            {serviceDetails.map((service) => (
              <div 
                key={service.id} 
                className="bg-[#E4E4E7] border-2 border-black p-6 sm:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
              >
                <h2 className="text-2xl font-bold mb-4 font-['Orbitron'] text-[#000000]">{service.title}</h2>
                <p className="text-[#000000] font-medium mb-6">{service.description}</p>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2 font-['Orbitron'] text-[#000000]">What We Offer:</h3>
                  <ul className="space-y-2">
                    {service.fullDescription.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-[#FACC15] mr-2">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2 font-['Orbitron'] text-[#000000]">Benefits:</h3>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-[#EF4444] mr-2">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 font-['Orbitron'] text-[#000000]">Technologies:</h3>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, index) => (
                      <span key={index} className="bg-[#000000] text-white px-3 py-1 text-sm font-medium border-2 border-[#000000]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4 font-['Orbitron'] text-[#000000]">Ready to Get Started?</h2>
            <p className="text-[#000000] mb-6 max-w-2xl mx-auto">
              Contact us today to discuss your project requirements and discover how we can help your business succeed online.
            </p>
            <Link
              to="/contact"
              className="inline-flex justify-center border-2 border-black bg-black py-2 px-6 text-md font-bold text-white shadow-[5px_5px_0px_0px_rgba(250,204,21,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all focus-visible:outline-none"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}

export default ServicesPage;