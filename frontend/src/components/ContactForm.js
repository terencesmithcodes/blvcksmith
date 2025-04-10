import { useState } from 'react'

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState({
    type: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const { name, email, message } = formData

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    // FormSubmit.co will handle the form submission, but we still track state
    setIsSubmitting(true)
    
    // We'll let the form naturally submit to FormSubmit.co
    // This is a fallback in case JavaScript is disabled
    setTimeout(() => {
      setIsSubmitting(false)
      // No status updates needed since the page will redirect to the thank you page
    }, 1000)
  }

  return (
    <form 
      action="https://formsubmit.co/terencesmith1@gmail.com" 
      method="POST" 
      className="space-y-6 w-full max-w-lg mx-auto"
      onSubmit={handleSubmit}
    >
      {/* FormSubmit.co configuration */}
      <input type="hidden" name="_subject" value="New contact form submission from BlvckSmith Website" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value="https://blvcksmith.com/#/thanks" />
      <input type="text" name="_honey" style={{display: 'none'}} />
      
      {status.message && (
        <div
          className={`p-4 border-2 border-black ${
            status.type === 'success' 
              ? 'bg-[#FACC15] text-black font-bold' 
              : 'bg-[#EF4444] text-white font-bold'
          }`}
        >
          {status.message}
        </div>
      )}
      
      <div className="w-full">
        <label htmlFor="name" className="block text-sm font-bold text-[#000000]">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleChange}
          required
          className="mt-1 block w-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:border-[#FACC15] focus:ring-[#FACC15] px-3 py-2 bg-white text-[#000000] appearance-none rounded-none focus-visible:outline-none text-base"
          autoCapitalize="words"
        />
      </div>
      
      <div className="w-full">
        <label htmlFor="email" className="block text-sm font-bold text-[#000000]">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
          className="mt-1 block w-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:border-[#FACC15] focus:ring-[#FACC15] px-3 py-2 bg-white text-[#000000] appearance-none rounded-none focus-visible:outline-none text-base"
          autoCapitalize="off"
          autoCorrect="off"
        />
      </div>
      
      <div className="w-full">
        <label htmlFor="message" className="block text-sm font-bold text-[#000000]">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          value={message}
          onChange={handleChange}
          required
          className="mt-1 block w-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:border-[#FACC15] focus:ring-[#FACC15] px-3 py-2 bg-white text-[#000000] appearance-none rounded-none focus-visible:outline-none text-base"
        />
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex justify-center border-2 border-black bg-black py-2 px-6 text-md font-bold text-white shadow-[5px_5px_0px_0px_rgba(250,204,21,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all focus:outline-none focus-visible:outline-none disabled:opacity-50 w-full sm:w-auto"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}

export default ContactForm