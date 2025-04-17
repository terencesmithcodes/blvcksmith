import ProjectCard from '../components/ProjectCard'

function ProjectsPage() {
  // Sample project data - in a real app, this would come from an API
  const projects = [
    {
      id: 1,
      title: 'Digital Buildings',
      description: 'A showcase of architectural masterpieces, featuring modern designs and innovative building concepts.',
      image: '/images/project1.jpg',
      technologies: ['React', 'Three.js', 'CSS Animations', 'Responsive Design'],
      url: 'https://terencesmithcodes.github.io/digitalbuildings1/#/',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A productivity application for managing tasks, projects, and deadlines with team collaboration features.',
      image: '/images/project2.jpg',
      technologies: ['React', 'Redux', 'Node.js', 'MongoDB'],
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A weather application that displays current and forecasted weather data for any location worldwide.',
      image: '/images/project3.jpg',
      technologies: ['JavaScript', 'HTML/CSS', 'OpenWeather API'],
    },
    {
      id: 4,
      title: 'Social Media Platform',
      description: 'A social networking platform with user profiles, posts, comments, and real-time messaging.',
      image: '/images/project4.jpg',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    },
    {
      id: 5,
      title: 'Personal Finance Tracker',
      description: 'An application to track personal expenses, income, and investments with visualization and reporting features.',
      image: '/images/project5.jpg',
      technologies: ['React', 'Chart.js', 'Firebase', 'Redux'],
    },
    {
      id: 6,
      title: 'Recipe Sharing Network',
      description: 'A platform for food enthusiasts to share, discover, and save recipes with social features and meal planning.',
      image: '/images/project6.jpg',
      technologies: ['React', 'Node.js', 'GraphQL', 'PostgreSQL'],
    },
  ]

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold mb-10 text-center">My Projects</h1>
        <p className="text-gray-700 text-center mb-12 max-w-2xl mx-auto">
          Here are some of the projects I've worked on. Each project showcases different skills and technologies.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectsPage