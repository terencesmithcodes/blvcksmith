import ContactForm from '../components/ContactForm'

function ContactPage() {
  return (
    <div className="bg-[#FAFAFA] py-10 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center font-['Orbitron'] text-[#000000]">Get In Touch</h1>
          <p className="text-[#000000] text-center mb-6 sm:mb-8 font-medium px-2">
            Have a question or want to work together? Fill out the form below and I'll get back to you as soon as possible.
          </p>
          
          <div className="bg-[#E4E4E7] border-2 border-black p-3 sm:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] w-full md:w-[95%] mx-auto">
            <ContactForm />
          </div>
          
          <div className="mt-12 sm:mt-16">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center font-['Orbitron'] text-[#000000]">Other Ways to Connect</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 text-center">
              <div className="bg-[#E4E4E7] p-4 sm:p-6 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-semibold mb-2 font-['Orbitron']">Email</h3>
                <p className="text-[#000000] break-words">terencesmith1@gmail.com</p>
              </div>
              <div className="bg-[#E4E4E7] p-4 sm:p-6 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-semibold mb-2 font-['Orbitron']">LinkedIn</h3>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#000000] hover:text-[#FACC15] break-words">
                  linkedin.com/in/blvcksmith
                </a>
              </div>
              <div className="bg-[#E4E4E7] p-4 sm:p-6 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-semibold mb-2 font-['Orbitron']">GitHub</h3>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[#000000] hover:text-[#FACC15] break-words">
                  github.com/blvcksmith
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage