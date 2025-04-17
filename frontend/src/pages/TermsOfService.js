import React from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function TermsOfService() {
  return (
    <div className="flex flex-col min-h-screen bg-primary">
      {/* Mobile Header - Modern Sleek Design */}
      <div className="md:hidden bg-gray-900 text-white p-4 relative overflow-hidden border-b border-gray-800">
        <div className="flex justify-between items-center relative z-10">
          <div className="flex items-center">
            <Link to="/">
              <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">BlvckSmith</h1>
            </Link>
          </div>
          <Link 
            to="/"
            className="text-white py-2 px-4 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 transition-all text-sm font-medium"
          >
            Back Home
          </Link>
        </div>
      </div>

      {/* Desktop Header - Fixed Navigation */}
      <header className="hidden md:flex justify-between items-center py-4 px-8 bg-black/70 backdrop-blur-lg fixed top-0 left-0 right-0 z-50 border-b border-white/10">
        <div className="flex items-center">
          <Link to="/">
            <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">BlvckSmith</h1>
          </Link>
        </div>
        
        <div className="flex items-center space-x-4">
          <Link 
            to="/"
            className="px-5 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 text-sm font-medium"
          >
            Back to Home
          </Link>
        </div>
      </header>
      
      {/* Spacer for fixed header on desktop */}
      <div className="hidden md:block h-16"></div>

      {/* Main Content */}
      <main className="flex-grow py-10 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-text">Terms of Service</h1>
          
          <div className="max-w-3xl mx-auto bg-text border-2 border-black p-6 sm:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div className="space-y-6 text-secondary">
              <div>
                <h2 className="text-xl font-bold mb-2">1. Agreement to Terms</h2>
                <p>By accessing our website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>
              </div>
              
              <div>
                <h2 className="text-xl font-bold mb-2">2. Use License</h2>
                <p>Permission is granted to temporarily view the materials on BlvckSmith's website for personal, non-commercial use only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Modify or copy the materials;</li>
                  <li>Use the materials for any commercial purpose or for any public display;</li>
                  <li>Attempt to reverse engineer any software contained on BlvckSmith's website;</li>
                  <li>Remove any copyright or other proprietary notations from the materials; or</li>
                  <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
                </ul>
                <p className="mt-2">This license shall automatically terminate if you violate any of these restrictions and may be terminated by BlvckSmith at any time.</p>
              </div>
              
              <div>
                <h2 className="text-xl font-bold mb-2">3. Services</h2>
                <p>BlvckSmith provides web development, design, and related services as described on our website. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without notice.</p>
                <p className="mt-2">We will use reasonable efforts to complete services by any specified deadline, but time will not be of the essence in the performance of these services.</p>
              </div>
              
              <div>
                <h2 className="text-xl font-bold mb-2">4. Payments and Billing</h2>
                <p>Pricing for our services is outlined in the proposal or agreement provided to each client. Unless otherwise specified:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>An initial deposit is required before work begins;</li>
                  <li>Milestone payments will be invoiced according to the agreed-upon schedule;</li>
                  <li>Final payment is due upon project completion;</li>
                  <li>Invoices are payable within 14 days of receipt;</li>
                  <li>Late payments may incur additional fees.</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-xl font-bold mb-2">5. Intellectual Property</h2>
                <p>Upon receipt of full payment, clients will receive ownership rights to the final deliverables, except for:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Third-party components that are subject to their own license terms;</li>
                  <li>Our pre-existing intellectual property, including frameworks, templates, or tools;</li>
                  <li>Concepts or proposals that are not selected for the final deliverable.</li>
                </ul>
                <p className="mt-2">BlvckSmith retains the right to display and link to your project as part of our portfolio and to write about the project on websites, in articles, and in books about design.</p>
              </div>
              
              <div>
                <h2 className="text-xl font-bold mb-2">6. Limitation of Liability</h2>
                <p>In no event shall BlvckSmith be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials or services provided by BlvckSmith, even if BlvckSmith has been notified orally or in writing of the possibility of such damage.</p>
              </div>
              
              <div>
                <h2 className="text-xl font-bold mb-2">7. Governing Law</h2>
                <p>These Terms shall be governed and construed in accordance with the laws of Georgia, United States, without regard to its conflict of law provisions.</p>
              </div>
              
              <div>
                <h2 className="text-xl font-bold mb-2">8. Contact Information</h2>
                <p>If you have any questions about these Terms, please contact us at:</p>
                <p className="mt-2">BlvckSmith<br/>
                123 Web Dev Lane<br/>
                Atlanta, GA 30308<br/>
                info@blvcksmith.com<br/>
                (404) 860-5633</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}

export default TermsOfService;