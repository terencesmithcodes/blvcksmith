import { useParams, Link } from 'react-router-dom'
import ProjectImage from '../components/ProjectImage'

function ProjectDetailPage() {
  const { id } = useParams()
  
  // Sample project data - in a real app, this would come from an API
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-featured e-commerce platform with product management, shopping cart, and payment processing.',
      fullDescription: `
        This e-commerce platform provides a comprehensive solution for online retailers. It includes features such as:
        
        - Product catalog with categories and search functionality
        - User registration and authentication
        - Shopping cart and checkout process
        - Payment integration with Stripe
        - Order management and tracking
        - Admin dashboard for product and order management
        
        The application was built using React for the frontend, with state management handled by Redux. The backend API was developed with Node.js and Express, with MongoDB as the database. User authentication is handled securely using JWT.
        
        The project was deployed on AWS using EC2 for the server and S3 for static assets storage. It also implements responsive design to ensure a seamless experience across all devices.
      `,
      image: '/images/project1.jpg',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
      demoUrl: 'https://example.com',
      repoUrl: 'https://github.com',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A productivity application for managing tasks, projects, and deadlines with team collaboration features.',
      fullDescription: `
        This task management application helps individuals and teams organize and track their work efficiently. Key features include:
        
        - Task creation, editing, and deletion
        - Project organization and categorization
        - Due date setting and reminders
        - Team collaboration with shared tasks and projects
        - Activity tracking and notifications
        - Drag-and-drop interface for task prioritization
        
        The frontend was built with React and Redux for state management. The backend uses Node.js and Express, with MongoDB for data storage. Real-time updates are implemented using Socket.io for instant collaboration.
        
        The application includes user authentication and role-based permissions to ensure data security. It also features a responsive design for mobile and desktop use.
      `,
      image: '/images/project2.jpg',
      technologies: ['React', 'Redux', 'Node.js', 'MongoDB'],
      demoUrl: 'https://example.com',
      repoUrl: 'https://github.com',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A weather application that displays current and forecasted weather data for any location worldwide.',
      fullDescription: `
        This weather dashboard provides users with accurate and up-to-date weather information for locations around the world. Features include:
        
        - Current weather conditions display
        - 5-day forecast with detailed information
        - Location search functionality
        - Geolocation support for local weather
        - Weather maps with various data layers
        - Severe weather alerts and notifications
        
        The application was built using vanilla JavaScript, HTML, and CSS, demonstrating proficiency in core web technologies. It integrates with the OpenWeather API to fetch real-time weather data.
        
        The UI is designed to be clean, intuitive, and responsive across all devices. Local storage is used to save user preferences and recently searched locations.
      `,
      image: '/images/project3.jpg',
      technologies: ['JavaScript', 'HTML/CSS', 'OpenWeather API'],
      demoUrl: 'https://example.com',
      repoUrl: 'https://github.com',
    },
    {
      id: 4,
      title: 'Social Media Platform',
      description: 'A social networking platform with user profiles, posts, comments, and real-time messaging.',
      fullDescription: `
        This social media platform enables users to connect, share content, and communicate with each other. Key features include:
        
        - User profiles with customization options
        - Post creation with text, images, and videos
        - Comments and reactions on posts
        - Real-time private messaging
        - Friend/follower system
        - Notification system
        - Feed algorithm for personalized content
        
        The application uses React for the frontend with context API for state management. The backend is built with Node.js and Express, using MongoDB for database storage. Socket.io is implemented for real-time messaging and notifications.
        
        The platform includes robust user authentication, data privacy controls, and content moderation features. It's fully responsive and optimized for both mobile and desktop use.
      `,
      image: '/images/project4.jpg',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      demoUrl: 'https://example.com',
      repoUrl: 'https://github.com',
    },
    {
      id: 5,
      title: 'Personal Finance Tracker',
      description: 'An application to track personal expenses, income, and investments with visualization and reporting features.',
      fullDescription: `
        This personal finance tracker helps users manage their finances and make informed decisions. Key features include:
        
        - Expense and income tracking with categorization
        - Budget creation and monitoring
        - Investment portfolio tracking
        - Financial goal setting
        - Data visualization with charts and graphs
        - Recurring transaction management
        - Report generation for monthly and yearly analysis
        
        The application was built using React for the frontend, with Redux for state management. Chart.js is used for data visualization, and Firebase provides authentication and real-time database functionality.
        
        The application prioritizes data security and privacy for sensitive financial information. It features a clean, intuitive interface that makes financial management accessible to users of all experience levels.
      `,
      image: '/images/project5.jpg',
      technologies: ['React', 'Chart.js', 'Firebase', 'Redux'],
      demoUrl: 'https://example.com',
      repoUrl: 'https://github.com',
    },
    {
      id: 6,
      title: 'Recipe Sharing Network',
      description: 'A platform for food enthusiasts to share, discover, and save recipes with social features and meal planning.',
      fullDescription: `
        This recipe sharing platform connects food enthusiasts and home chefs to share their culinary creations. Key features include:
        
        - Recipe creation with ingredients, instructions, and photos
        - Recipe discovery with search and filter functionality
        - User profiles and recipe collections
        - Rating and review system
        - Social sharing and following capabilities
        - Meal planning and grocery list generation
        - Nutritional information calculation
        
        The frontend was built with React, while the backend uses Node.js with GraphQL for efficient data querying. PostgreSQL serves as the database for structured recipe and user data.
        
        The application features a modern, responsive design with a focus on high-quality food photography and easy-to-follow recipe layouts. It supports multiple devices to facilitate cooking from anywhere.
      `,
      image: '/images/project6.jpg',
      technologies: ['React', 'Node.js', 'GraphQL', 'PostgreSQL'],
      demoUrl: 'https://example.com',
      repoUrl: 'https://github.com',
    },
  ]
  
  const project = projects.find(p => p.id === parseInt(id))
  
  if (!project) {
    return (
      <div className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Project not found</h2>
        <p className="mb-6">The project you're looking for doesn't exist.</p>
        <Link to="/projects" className="text-blue-600 hover:text-blue-800 font-semibold">
          Back to Projects
        </Link>
      </div>
    )
  }
  
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <Link to="/projects" className="text-blue-600 hover:text-blue-800 font-semibold mb-6 inline-block">
          &larr; Back to Projects
        </Link>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-10">
          <div className="relative w-full h-96 bg-gray-200">
            <ProjectImage title={project.title} width={1200} height={600} />
          </div>
        </div>
        
        <h1 className="text-3xl font-bold mb-6">{project.title}</h1>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, index) => (
            <span key={index} className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="prose prose-lg max-w-none mb-10">
          {project.fullDescription.split('\n').map((paragraph, index) => (
            <p key={index} className="mb-4">{paragraph}</p>
          ))}
        </div>
        
        <div className="flex flex-wrap gap-4">
          <a 
            href={project.demoUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Live Demo
          </a>
          <a 
            href={project.repoUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-900 transition duration-300"
          >
            GitHub Repository
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetailPage