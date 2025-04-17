import ContactForm from '../components/ContactForm'

function ContactPage() {
  return (
    <div className="bg-[#FAFAFA] py-10 sm:py-16 md:mb-10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center font-['Orbitron'] text-[#000000]">Get In Touch</h1>
          <p className="text-[#000000] text-center mb-6 sm:mb-8 font-medium px-2">
            Have a question or want to work together? Fill out the form below and I'll get back to you as soon as possible.
          </p>
          
          <div className="bg-[#0A1020] border-2 border-black p-3 sm:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] w-full md:w-[95%] mx-auto">
            <ContactForm />
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default ContactPage