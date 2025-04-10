import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function ServicesPage() {
  // Set initial active tab
  const [activeTab, setActiveTab] = useState('services');
  
  // Check for tab parameter in URL to set active tab and scroll to specific resource section
  useEffect(() => {
    // First run the default scroll to top
    window.scrollTo(0, 0);
    
    // Check for tab and source in search params
    const urlParams = new URLSearchParams(window.location.search);
    const tabParam = urlParams.get('tab');
    const sourceParam = urlParams.get('source');
    
    if (tabParam) {
      setActiveTab(tabParam);
      
      // Allow time for the DOM to update with the new tab content
      setTimeout(() => {
        // If specifically the resources tab, check for specific section to scroll to
        if (tabParam === 'resources') {
          let targetElement = null;
          
          // Determine which section to scroll to based on source parameter
          if (sourceParam === 'planner') {
            targetElement = document.getElementById('plannerSection');
          } else if (sourceParam === 'budget') {
            targetElement = document.getElementById('budgetGuideSection');
          } else if (sourceParam === 'contracts' || sourceParam === 'hiring' || 
                     sourceParam === 'content' || sourceParam === 'security') {
            targetElement = document.getElementById('articlesSection');
          } else {
            // Default to articles section if no specific source
            targetElement = document.getElementById('articlesSection');
          }
          
          // Scroll to the target element if found
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 100);
    }
    // Also check for hash fragment for backward compatibility
    else if (window.location.hash === '#resources') {
      setActiveTab('resources');
    }
  }, []);
  const [projectType, setProjectType] = useState('basic');
  const [projectScope, setProjectScope] = useState('small');
  const [timeframe, setTimeframe] = useState('standard');
  const [activeFaq, setActiveFaq] = useState(null);

  // Toggle FAQ item
  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Calculate estimated price based on selected options
  const calculateEstimatedPrice = () => {
    let basePrice = 0;
    
    // Base price by project type
    switch(projectType) {
      case 'basic': basePrice = 2500; break;
      case 'ecommerce': basePrice = 5000; break;
      case 'webapp': basePrice = 7500; break;
      case 'api': basePrice = 6000; break;
      default: basePrice = 2500;
    }
    
    // Multiplier based on scope
    const scopeMultiplier = {
      'small': 1,
      'medium': 1.5,
      'large': 2.5
    }[projectScope] || 1;
    
    // Adjustment based on timeframe
    const timeframeAdjustment = {
      'urgent': 1.3,
      'standard': 1,
      'flexible': 0.9
    }[timeframe] || 1;
    
    return Math.round(basePrice * scopeMultiplier * timeframeAdjustment);
  };

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
      ],
      startingPrice: '$7,500+',
      priceFactors: ['Complexity of features', 'Number of user roles', 'Integration requirements']
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
      ],
      startingPrice: '$5,000+',
      priceFactors: ['Number of products', 'Custom checkout flow', 'Inventory complexity']
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
      ],
      startingPrice: '$6,000+',
      priceFactors: ['Number of endpoints', 'Security requirements', 'Data volume']
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
      ],
      startingPrice: '$4,000+',
      priceFactors: ['Infrastructure complexity', 'Migration requirements', 'Security needs']
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
      ],
      startingPrice: '$150/hour',
      priceFactors: ['Project complexity', 'Consultation depth', 'Duration of engagement']
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
      ],
      startingPrice: '$500/month',
      priceFactors: ['Site complexity', 'Update frequency', 'Support level needed']
    }
  ];

  // Development process steps
  const processSteps = [
    {
      title: "Discovery & Planning",
      description: "We begin with a deep dive into your business goals, user needs, and technical requirements. This phase includes project scoping, timeline development, and creating a detailed roadmap.",
      clientResponsibilities: "Provide business requirements, participate in discovery calls, review and approve project plan",
      duration: "1-2 weeks"
    },
    {
      title: "Design & Prototyping",
      description: "We create wireframes and design mockups that align with your brand and meet user experience best practices. Interactive prototypes help visualize the final product before development begins.",
      clientResponsibilities: "Provide brand assets, review designs, provide timely feedback on prototypes",
      duration: "2-4 weeks"
    },
    {
      title: "Development",
      description: "Our developers build your solution using modern frameworks and coding standards. We follow an agile approach with regular sprints and demonstrations of progress.",
      clientResponsibilities: "Review sprint demos, provide feedback, participate in weekly status meetings",
      duration: "4-12 weeks (varies by project scope)"
    },
    {
      title: "Testing & QA",
      description: "Comprehensive testing ensures your application works flawlessly across devices and browsers. We conduct thorough quality assurance to identify and fix any issues.",
      clientResponsibilities: "Participate in user acceptance testing, report any issues found, validate fixes",
      duration: "1-3 weeks"
    },
    {
      title: "Deployment",
      description: "We carefully launch your application to production, ensuring a smooth transition with minimal downtime. This includes server configuration, domain setup, and SSL implementation.",
      clientResponsibilities: "Provide access to hosting accounts, review pre-launch checklist, approve final deployment",
      duration: "3-5 days"
    },
    {
      title: "Post-Launch Support",
      description: "After launch, we provide ongoing monitoring and support to address any issues that arise. We also implement analytics to track performance and user behavior.",
      clientResponsibilities: "Report any issues, participate in post-launch review, provide feedback on analytics",
      duration: "30 days included, maintenance plans available after"
    }
  ];

  // FAQ items
  const faqItems = [
    {
      question: "How do we handle changes during development?",
      answer: "We follow an agile approach that accommodates changes throughout the development process. Small changes that don't affect the project scope are included at no additional cost. For larger changes, we provide a clear estimate of the impact on timeline and budget before proceeding. All changes are documented in our project management system to maintain transparency."
    },
    {
      question: "What happens if we need to pause the project?",
      answer: "We understand that business priorities can shift. If you need to pause a project, we'll document the current state, create a comprehensive handoff, and secure all work completed so far. When you're ready to resume, we'll conduct a project restart meeting to reassess timelines and resources. A nominal project maintenance fee may apply for pauses longer than 30 days."
    },
    {
      question: "Do you offer maintenance after launch?",
      answer: "Yes, we provide several maintenance plans to keep your application running smoothly after launch. Our basic plan includes security updates, performance monitoring, and bug fixes. Premium plans add features like regular backups, uptime monitoring, content updates, and priority support. All plans include a dedicated support contact who is familiar with your specific project."
    },
    {
      question: "How do payments work?",
      answer: "We structure payments around project milestones rather than time periods. Typically, this includes an initial deposit (30%), payments at key project milestones (50%), and a final payment upon project completion (20%). For projects longer than two months, we may suggest monthly milestone payments. We accept various payment methods including ACH transfers, credit cards, and checks."
    },
    {
      question: "Can you work with our existing team?",
      answer: "Absolutely. We frequently collaborate with in-house developers, designers, and IT teams. We're happy to adapt our processes to integrate with your team, whether that means joining your Slack channels, using your preferred project management tools, or participating in your sprint planning meetings. We can provide knowledge transfer to your team throughout the project."
    },
    {
      question: "What technologies do you specialize in?",
      answer: "Our core expertise is in modern JavaScript technologies including React, Node.js, and related frameworks. We're also experienced with MongoDB, PostgreSQL, AWS, and various API integration approaches. While we have these preferences, we're technology-agnostic where appropriate and will recommend the best solution for your specific needs rather than forcing our preferred stack."
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

      {/* Tabs Navigation */}
      <div className="bg-[#000000] text-[#FAFAFA] px-4 py-2">
        <div className="container mx-auto flex flex-wrap justify-center space-x-1 sm:space-x-4">
          <button 
            onClick={() => setActiveTab('services')}
            className={`px-4 py-2 font-medium transition-colors ${activeTab === 'services' ? 'bg-[#FACC15] text-black' : 'hover:bg-white/10'}`}
          >
            Services
          </button>
          <button 
            onClick={() => setActiveTab('pricing')}
            className={`px-4 py-2 font-medium transition-colors ${activeTab === 'pricing' ? 'bg-[#FACC15] text-black' : 'hover:bg-white/10'}`}
          >
            Pricing
          </button>
          <button 
            onClick={() => setActiveTab('process')}
            className={`px-4 py-2 font-medium transition-colors ${activeTab === 'process' ? 'bg-[#FACC15] text-black' : 'hover:bg-white/10'}`}
          >
            Our Process
          </button>
          <button 
            onClick={() => setActiveTab('faq')}
            className={`px-4 py-2 font-medium transition-colors ${activeTab === 'faq' ? 'bg-[#FACC15] text-black' : 'hover:bg-white/10'}`}
          >
            FAQ
          </button>
          <button 
            onClick={() => setActiveTab('resources')}
            className={`px-4 py-2 font-medium transition-colors ${activeTab === 'resources' ? 'bg-[#FACC15] text-black' : 'hover:bg-white/10'}`}
          >
            Resources
          </button>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow py-10 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Services Tab */}
          {activeTab === 'services' && (
            <>
              <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center font-['Orbitron'] text-[#000000]">Our Services</h1>
              <p className="text-[#000000] text-center mb-12 max-w-3xl mx-auto font-medium">
                At BlvckSmith, we offer a comprehensive range of web development and technical services to help your business thrive in the digital world. Each service is tailored to meet your specific needs and objectives.
              </p>

              {/* Transparency Badges */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <div className="bg-[#000000] text-white px-4 py-2 font-medium border-2 border-[#000000] flex items-center">
                  <span className="text-[#FACC15] mr-2">✓</span>
                  No Hidden Fees
                </div>
                <div className="bg-[#000000] text-white px-4 py-2 font-medium border-2 border-[#000000] flex items-center">
                  <span className="text-[#FACC15] mr-2">✓</span>
                  Clear Milestone Payments
                </div>
                <div className="bg-[#000000] text-white px-4 py-2 font-medium border-2 border-[#000000] flex items-center">
                  <span className="text-[#FACC15] mr-2">✓</span>
                  Scope Protection Guarantee
                </div>
              </div>

              {/* Services */}
              <div className="space-y-16 max-w-4xl mx-auto">
                {serviceDetails.map((service) => (
                  <div 
                    key={service.id} 
                    className="bg-[#E4E4E7] border-2 border-black p-6 sm:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                  >
                    <div className="flex flex-wrap justify-between items-start mb-4">
                      <h2 className="text-2xl font-bold font-['Orbitron'] text-[#000000]">{service.title}</h2>
                      <div className="mt-2 sm:mt-0 bg-[#FACC15] text-black px-3 py-1 font-bold border-2 border-black">
                        Starting at {service.startingPrice}
                      </div>
                    </div>
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

                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-2 font-['Orbitron'] text-[#000000]">Pricing Factors:</h3>
                      <ul className="space-y-2">
                        {service.priceFactors.map((factor, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-[#000000] mr-2">$</span>
                            <span>{factor}</span>
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
            </>
          )}

          {/* Pricing Tab */}
          {activeTab === 'pricing' && (
            <>
              <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center font-['Orbitron'] text-[#000000]">Pricing & Estimates</h1>
              <p className="text-[#000000] text-center mb-12 max-w-3xl mx-auto font-medium">
                We believe in transparent pricing that reflects the value we deliver. Each project is unique, but we provide starting price ranges to help you budget appropriately.
              </p>
              
              <div className="max-w-4xl mx-auto mb-16">
                <div className="bg-[#E4E4E7] border-2 border-black p-6 sm:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <h2 className="text-2xl font-bold mb-6 font-['Orbitron'] text-[#000000]">Project Estimate Calculator</h2>
                  <p className="mb-6 font-medium">Use this calculator to get a rough estimate for your project. Actual pricing will depend on specific requirements and will be determined during our consultation.</p>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-lg font-semibold mb-2 font-['Orbitron'] text-[#000000]">Project Type</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                        <button 
                          onClick={() => setProjectType('basic')}
                          className={`p-3 border-2 border-black ${projectType === 'basic' ? 'bg-[#FACC15] font-bold' : 'bg-white hover:bg-gray-100'}`}
                        >
                          Basic Website
                        </button>
                        <button 
                          onClick={() => setProjectType('ecommerce')}
                          className={`p-3 border-2 border-black ${projectType === 'ecommerce' ? 'bg-[#FACC15] font-bold' : 'bg-white hover:bg-gray-100'}`}
                        >
                          E-commerce Store
                        </button>
                        <button 
                          onClick={() => setProjectType('webapp')}
                          className={`p-3 border-2 border-black ${projectType === 'webapp' ? 'bg-[#FACC15] font-bold' : 'bg-white hover:bg-gray-100'}`}
                        >
                          Web Application
                        </button>
                        <button 
                          onClick={() => setProjectType('api')}
                          className={`p-3 border-2 border-black ${projectType === 'api' ? 'bg-[#FACC15] font-bold' : 'bg-white hover:bg-gray-100'}`}
                        >
                          API Development
                        </button>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-lg font-semibold mb-2 font-['Orbitron'] text-[#000000]">Project Scope</label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <button 
                          onClick={() => setProjectScope('small')}
                          className={`p-3 border-2 border-black ${projectScope === 'small' ? 'bg-[#FACC15] font-bold' : 'bg-white hover:bg-gray-100'}`}
                        >
                          Small (2-5 pages/features)
                        </button>
                        <button 
                          onClick={() => setProjectScope('medium')}
                          className={`p-3 border-2 border-black ${projectScope === 'medium' ? 'bg-[#FACC15] font-bold' : 'bg-white hover:bg-gray-100'}`}
                        >
                          Medium (5-10 pages/features)
                        </button>
                        <button 
                          onClick={() => setProjectScope('large')}
                          className={`p-3 border-2 border-black ${projectScope === 'large' ? 'bg-[#FACC15] font-bold' : 'bg-white hover:bg-gray-100'}`}
                        >
                          Large (10+ pages/features)
                        </button>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-lg font-semibold mb-2 font-['Orbitron'] text-[#000000]">Timeframe</label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <button 
                          onClick={() => setTimeframe('urgent')}
                          className={`p-3 border-2 border-black ${timeframe === 'urgent' ? 'bg-[#FACC15] font-bold' : 'bg-white hover:bg-gray-100'}`}
                        >
                          Urgent (ASAP)
                        </button>
                        <button 
                          onClick={() => setTimeframe('standard')}
                          className={`p-3 border-2 border-black ${timeframe === 'standard' ? 'bg-[#FACC15] font-bold' : 'bg-white hover:bg-gray-100'}`}
                        >
                          Standard (1-3 months)
                        </button>
                        <button 
                          onClick={() => setTimeframe('flexible')}
                          className={`p-3 border-2 border-black ${timeframe === 'flexible' ? 'bg-[#FACC15] font-bold' : 'bg-white hover:bg-gray-100'}`}
                        >
                          Flexible (3+ months)
                        </button>
                      </div>
                    </div>
                    
                    <div className="pt-6 border-t-2 border-black">
                      <div className="text-center">
                        <div className="text-lg font-semibold mb-2 font-['Orbitron'] text-[#000000]">Estimated Project Cost</div>
                        <div className="text-3xl font-bold text-[#000000]">${calculateEstimatedPrice().toLocaleString()}</div>
                        <p className="mt-3 text-sm">This is a rough estimate. Contact us for a detailed quote.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="bg-[#E4E4E7] border-2 border-black p-6 sm:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <h2 className="text-2xl font-bold mb-6 font-['Orbitron'] text-[#000000]">Our Pricing Philosophy</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2 font-['Orbitron'] text-[#000000]">Value-Based Pricing</h3>
                      <p>We price our services based on the value they provide to your business, not just the hours we spend. This ensures that you receive a return on your investment and that our incentives are aligned with your success.</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2 font-['Orbitron'] text-[#000000]">No Surprise Fees</h3>
                      <p>We provide detailed quotes before beginning work and stick to them. Any additional costs will be discussed and approved before implementation. We believe in complete transparency throughout the project lifecycle.</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2 font-['Orbitron'] text-[#000000]">Milestone-Based Payments</h3>
                      <p>Rather than requiring large upfront payments, we structure our billing around project milestones. This ensures you only pay for completed work and helps manage cash flow for your business.</p>
                    </div>
                    
                    <div className="pt-6 border-t-2 border-black">
                      <h3 className="text-lg font-semibold mb-2 font-['Orbitron'] text-[#000000]">Factors That Influence Price</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-[#FACC15] mr-2">•</span>
                          <span><strong>Complexity:</strong> More complex features require more development time and expertise.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#FACC15] mr-2">•</span>
                          <span><strong>Scope:</strong> The number of pages, features, or integrations directly impacts the project size.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#FACC15] mr-2">•</span>
                          <span><strong>Timeline:</strong> Expedited projects require more resources and often prioritization over other work.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#FACC15] mr-2">•</span>
                          <span><strong>Integrations:</strong> Third-party systems that need to be connected add complexity.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#FACC15] mr-2">•</span>
                          <span><strong>Design Requirements:</strong> Custom designs require more time than template-based approaches.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Process Tab */}
          {activeTab === 'process' && (
            <>
              <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center font-['Orbitron'] text-[#000000]">Our Development Process</h1>
              <p className="text-[#000000] text-center mb-12 max-w-3xl mx-auto font-medium">
                We follow a structured yet flexible process that ensures quality results while adapting to your specific needs. Transparency and collaboration are central to our approach.
              </p>
              
              <div className="relative max-w-5xl mx-auto mb-16">
                {/* Timeline line */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-1 bg-black"></div>
                
                {/* Process steps */}
                <div className="space-y-12">
                  {processSteps.map((step, index) => (
                    <div key={index} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center`}>
                      {/* Timeline dot */}
                      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-[#FACC15] border-4 border-black rounded-full z-10"></div>
                      
                      {/* Content box */}
                      <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'} pl-12 md:pl-0`}>
                        <div className="bg-[#E4E4E7] border-2 border-black p-5 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                          <div className="flex justify-between items-start mb-3">
                            <h3 className="text-xl font-bold font-['Orbitron'] text-[#000000]">{index + 1}. {step.title}</h3>
                            <span className="bg-[#000000] text-white px-2 py-1 text-sm font-medium">{step.duration}</span>
                          </div>
                          <p className="mb-4">{step.description}</p>
                          <div>
                            <h4 className="font-semibold mb-2 text-[#000000]">Your Responsibilities:</h4>
                            <p className="text-sm">{step.clientResponsibilities}</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Spacer for alternating layout */}
                      <div className="w-full md:w-1/2"></div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="max-w-4xl mx-auto">
                <div className="bg-[#E4E4E7] border-2 border-black p-6 sm:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <h2 className="text-2xl font-bold mb-6 font-['Orbitron'] text-[#000000]">Scope Management</h2>
                  
                  <div className="space-y-6">
                    <p>Changes are a natural part of the development process. Here's how we handle them to keep your project on track:</p>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2 font-['Orbitron'] text-[#000000]">Clear Requirements Documentation</h3>
                      <p>We start with detailed requirements documentation that serves as our shared understanding of the project scope. This becomes our baseline for identifying and managing changes.</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2 font-['Orbitron'] text-[#000000]">Change Request Process</h3>
                      <p>When new requirements or changes arise, we follow a structured process:</p>
                      <ol className="list-decimal pl-6 space-y-2 mt-2">
                        <li>Document the requested change</li>
                        <li>Analyze impact on timeline, budget, and other features</li>
                        <li>Present options with clear estimates</li>
                        <li>Implement changes only after your approval</li>
                      </ol>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2 font-['Orbitron'] text-[#000000]">Flexibility Buffer</h3>
                      <p>We build a small flexibility buffer into our projects to accommodate minor changes without affecting the timeline or budget. This allows for refinements as the project evolves.</p>
                    </div>
                    
                    <div className="pt-6 border-t-2 border-black">
                      <h3 className="text-lg font-semibold mb-2 font-['Orbitron'] text-[#000000]">Typical Project Timeline</h3>
                      <p className="mb-4">While every project is unique, here's a general timeline for a mid-sized web application:</p>
                      
                      <div className="bg-white border-2 border-black p-4">
                        <div className="flex items-center mb-2">
                          <div className="w-1/4 font-medium">Weeks 1-2:</div>
                          <div>Discovery, planning, and design concepts</div>
                        </div>
                        <div className="flex items-center mb-2">
                          <div className="w-1/4 font-medium">Weeks 3-4:</div>
                          <div>Design finalization and prototyping</div>
                        </div>
                        <div className="flex items-center mb-2">
                          <div className="w-1/4 font-medium">Weeks 5-10:</div>
                          <div>Core development in 2-week sprints</div>
                        </div>
                        <div className="flex items-center mb-2">
                          <div className="w-1/4 font-medium">Weeks 11-12:</div>
                          <div>Testing, refinement, and client review</div>
                        </div>
                        <div className="flex items-center">
                          <div className="w-1/4 font-medium">Week 13:</div>
                          <div>Deployment and launch</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* FAQ Tab */}
          {activeTab === 'faq' && (
            <>
              <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center font-['Orbitron'] text-[#000000]">Frequently Asked Questions</h1>
              <p className="text-[#000000] text-center mb-12 max-w-3xl mx-auto font-medium">
                We've compiled answers to the most common questions our clients ask. If you don't find what you're looking for, please contact us directly.
              </p>
              
              <div className="max-w-3xl mx-auto space-y-6">
                {faqItems.map((faq, index) => (
                  <div 
                    key={index} 
                    className="bg-[#E4E4E7] border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                  >
                    <button
                      className="w-full px-6 py-4 text-left font-['Orbitron'] font-semibold flex justify-between items-center"
                      onClick={() => toggleFaq(index)}
                    >
                      <span>{faq.question}</span>
                      <span className="text-xl">{activeFaq === index ? '−' : '+'}</span>
                    </button>
                    
                    {activeFaq === index && (
                      <div className="px-6 py-4 border-t-2 border-black">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Resources Tab */}
          {activeTab === 'resources' && (
            <>
              <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center font-['Orbitron'] text-[#000000]">Client Resources</h1>
              <p className="text-[#000000] text-center mb-12 max-w-3xl mx-auto font-medium">
                We've created these resources to help you plan, prepare, and get the most out of your web development project.
              </p>
              
              <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                <div id="plannerSection" className="bg-[#E4E4E7] border-2 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <div className="bg-[#FACC15] -mt-10 -ml-10 p-4 border-2 border-black inline-block">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                  </div>
                  
                  <h2 className="text-2xl font-bold mt-4 mb-3 font-['Orbitron'] text-[#000000]">Project Planner Document</h2>
                  <p className="mb-6">A comprehensive guide to help you organize requirements, gather assets, and prepare for your web development project.</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Business goals worksheet</span>
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Feature prioritization template</span>
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Content collection checklist</span>
                    </div>
                  </div>
                  
                  <a href="/resources/project-planner.html?source=planner" className="inline-flex justify-center border-2 border-black bg-black py-2 px-6 text-md font-bold text-white shadow-[5px_5px_0px_0px_rgba(250,204,21,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all focus-visible:outline-none">
                    View Document
                  </a>
                </div>
                
                <div id="budgetGuideSection" className="bg-[#E4E4E7] border-2 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <div className="bg-[#FACC15] -mt-10 -ml-10 p-4 border-2 border-black inline-block">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="1" x2="12" y2="23"></line>
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                    </svg>
                  </div>
                  
                  <h2 className="text-2xl font-bold mt-4 mb-3 font-['Orbitron'] text-[#000000]">Web Project Budget Guide</h2>
                  <p className="mb-6">Learn how to effectively budget for your web development project with our comprehensive guide.</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Cost breakdown by project type</span>
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>ROI calculation formulas</span>
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Ongoing maintenance planning</span>
                    </div>
                  </div>
                  
                  <a href="/resources/budget-guide.html?source=budget" className="inline-flex justify-center border-2 border-black bg-black py-2 px-6 text-md font-bold text-white shadow-[5px_5px_0px_0px_rgba(250,204,21,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all focus-visible:outline-none">
                    View Document
                  </a>
                </div>
                
                <div id="articlesSection" className="bg-[#E4E4E7] border-2 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:col-span-2">
                  <h2 className="text-2xl font-bold mb-4 font-['Orbitron'] text-[#000000]">Helpful Articles</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-2">Understanding Web Development Contracts</h3>
                      <p className="text-sm mb-3">Learn about the key elements of a web development contract and what to look for before signing.</p>
                      <a href="/resources/web-development-contracts.html?source=contracts" className="text-[#000000] font-medium underline">Read Article →</a>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">5 Questions to Ask Before Hiring a Developer</h3>
                      <p className="text-sm mb-3">Important questions that will help you identify the right development partner for your project.</p>
                      <a href="/resources/hiring-developer-questions.html?source=hiring" className="text-[#000000] font-medium underline">Read Article →</a>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Preparing Content for Your Website</h3>
                      <p className="text-sm mb-3">A guide to gathering and organizing content that will make your development process smoother.</p>
                      <a href="/resources/preparing-website-content.html?source=content" className="text-[#000000] font-medium underline">Read Article →</a>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Web Security Essentials for Business Owners</h3>
                      <p className="text-sm mb-3">What you need to know about keeping your website secure and your customer data protected.</p>
                      <a href="/resources/web-security-essentials.html?source=security" className="text-[#000000] font-medium underline">Read Article →</a>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

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