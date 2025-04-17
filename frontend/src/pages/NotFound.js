import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-16 bg-[#050A18] relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/5 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3 animate-pulse" style={{ animationDuration: '15s' }}></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-500/5 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3 animate-pulse" style={{ animationDuration: '20s' }}></div>
      </div>
      
      <div className="max-w-2xl mx-auto text-center relative z-10 px-4">
        <div className="bg-[#0A1020]/90 backdrop-blur-xl rounded-2xl border border-gray-800/50 p-8 md:p-10 shadow-2xl">
          <span className="inline-block px-4 py-1 text-sm font-medium bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full mb-4 tracking-wider">ERROR</span>
          <h1 className="text-6xl sm:text-8xl font-bold mb-4 text-white">404</h1>
          <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-white">Page Not Found</h2>
          <p className="text-gray-300 mb-8 text-lg max-w-md mx-auto">
            The page you are looking for might have been removed, had its name changed,
            or is temporarily unavailable.
          </p>
          <Link 
            to="/" 
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 text-base font-medium"
          >
            Go back home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound