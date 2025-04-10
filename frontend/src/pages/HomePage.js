import ProfileImage from '../components/ProfileImage'

function HomePage() {
  return (
    <div className="bg-gray-100">
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