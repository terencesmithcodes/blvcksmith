function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-[#000000] text-[#FAFAFA] py-10 w-full border-t-4 border-[#FACC15] relative z-10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-bold mb-2 font-['Orbitron']">BlvckSmith</h2>
            <p className="text-[#E4E4E7]">Web Development & Consulting</p>
          </div>
          
          <div className="flex flex-col md:flex-row md:space-x-12 space-y-4 md:space-y-0 text-center md:text-left w-full md:w-auto">
            <div className="w-full md:w-auto">
              <h3 className="text-lg font-semibold mb-2 font-['Orbitron']">Contact</h3>
              <p className="text-[#E4E4E7] break-words">info@blvcksmith.com</p>
              <p className="text-[#E4E4E7]">(555) 123-4567</p>
            </div>
            
            <div className="w-full md:w-auto">
              <h3 className="text-lg font-semibold mb-2 font-['Orbitron']">Address</h3>
              <p className="text-[#E4E4E7]">123 Web Dev Lane</p>
              <p className="text-[#E4E4E7]">San Francisco, CA 94105</p>
            </div>
          </div>
        </div>
        
        <div className="border-t-2 border-[#FACC15] mt-6 md:mt-8 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#E4E4E7] text-center md:text-left">&copy; {year} BlvckSmith. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex flex-wrap justify-center md:justify-start space-x-4">
            <a href="/#/privacy" className="text-[#E4E4E7] hover:text-[#FACC15] transition-colors font-medium">Privacy Policy</a>
            <a href="/#/terms" className="text-[#E4E4E7] hover:text-[#FACC15] transition-colors font-medium">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;