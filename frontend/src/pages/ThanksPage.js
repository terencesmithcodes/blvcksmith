function ThanksPage() {
  return (
    <div className="bg-[#050A18] min-h-screen flex items-center justify-center py-12 sm:py-16 px-4 relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/5 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3 animate-pulse" style={{ animationDuration: '15s' }}></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-500/5 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3 animate-pulse" style={{ animationDuration: '20s' }}></div>
      </div>
      
      <div className="max-w-2xl mx-auto text-center relative z-10">
        <div className="bg-[#0A1020]/90 backdrop-blur-xl rounded-2xl border border-gray-800/50 p-8 md:p-10 shadow-2xl">
          <span className="inline-block px-4 py-1 text-sm font-medium bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full mb-4 tracking-wider">MESSAGE SENT</span>
          <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-white">Thank You!</h1>
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/20 group-hover:text-blue-300 transition-all duration-300">
            <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="text-gray-300 mb-8 text-lg sm:text-xl max-w-md mx-auto">
            Your message has been received. I'll get back to you as soon as possible!
          </p>
          <a 
            href="/#/"
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 text-base font-medium"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}

export default ThanksPage;