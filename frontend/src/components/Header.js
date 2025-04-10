function Header({ onNavClick }) {
  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto py-4 px-6 flex justify-between items-center">
        <a href="#home" onClick={(e) => { e.preventDefault(); onNavClick('home'); }} className="text-2xl font-bold">Blvck Smith</a>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#home" onClick={(e) => { e.preventDefault(); onNavClick('home'); }} className="hover:text-gray-300">Home</a></li>
            <li><a href="#projects" onClick={(e) => { e.preventDefault(); onNavClick('projects'); }} className="hover:text-gray-300">Projects</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); onNavClick('contact'); }} className="hover:text-gray-300">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header