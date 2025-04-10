import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] py-16 bg-[#FAFAFA]">
      <div className="p-6 sm:p-10 bg-[#E4E4E7] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-md mx-4">
        <h1 className="text-5xl sm:text-6xl font-bold font-['Orbitron'] text-[#000000] mb-4 text-center">404</h1>
        <h2 className="text-xl sm:text-2xl font-semibold font-['Orbitron'] text-[#000000] mb-6 text-center">Page Not Found</h2>
        <p className="text-[#000000] mb-8 text-center">
          The page you are looking for might have been removed, had its name changed,
          or is temporarily unavailable.
        </p>
        <div className="flex justify-center">
          <Link 
            to="/" 
            className="inline-flex justify-center border-2 border-black bg-black py-2 px-6 text-md font-bold text-white shadow-[5px_5px_0px_0px_rgba(250,204,21,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all focus:outline-none focus-visible:outline-none"
          >
            Go back home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound