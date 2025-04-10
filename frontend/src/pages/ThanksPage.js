function ThanksPage() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen flex items-center justify-center py-12 sm:py-16 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-[#E4E4E7] border-2 border-black p-6 sm:p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 font-['Orbitron'] text-[#000000]">Thank You!</h1>
          <div className="w-16 h-16 sm:w-24 sm:h-24 mx-auto mb-4 sm:mb-6 text-[#FACC15]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="text-[#000000] mb-6 sm:mb-8 text-lg sm:text-xl font-medium">
            Your message has been received. I'll get back to you as soon as possible!
          </p>
          <a 
            href="/#/"
            className="inline-flex justify-center border-2 border-black bg-black py-2 px-6 text-md font-bold text-white shadow-[5px_5px_0px_0px_rgba(250,204,21,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all focus:outline-none focus-visible:outline-none"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}

export default ThanksPage;