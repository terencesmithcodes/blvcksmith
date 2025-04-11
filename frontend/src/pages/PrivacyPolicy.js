import React from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen bg-primary">
      {/* Header */}
      <header className="bg-secondary text-text py-4 border-b-4 border-accent">
        <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <div className="w-8 h-8 mr-2 bg-white border border-accent rounded-sm overflow-hidden">
              <img src="/images/logo.svg" alt="BS Logo" className="w-full h-full object-contain" />
            </div>
            <h1 className="text-xl font-bold">BlvckSmith</h1>
          </Link>
          <Link 
            to="/"
            className="text-text hover:text-accent transition-colors py-1 px-3 border-2 border-accent hover:bg-secondary/20"
          >
            Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow py-10 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-text">Privacy Policy</h1>
          
          <div className="max-w-3xl mx-auto bg-text border-2 border-black p-6 sm:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div className="space-y-6 text-secondary">
              <div>
                <h2 className="text-xl font-bold mb-2">Introduction</h2>
                <p>This Privacy Policy explains how BlvckSmith ("we," "us," or "our") collects, uses, discloses, and safeguards your information when you visit our website or use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.</p>
              </div>
              
              <div>
                <h2 className="text-xl font-bold mb-2">Information We Collect</h2>
                <p>We may collect information about you in a variety of ways. The information we may collect includes:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Personal Data: Personally identifiable information such as your name, email address, and telephone number that you voluntarily give to us when you choose to participate in various activities related to our website.</li>
                  <li>Derivative Data: Information our servers automatically collect when you access our website, such as your IP address, browser type, operating system, access times, and the pages you have viewed.</li>
                  <li>Financial Data: Financial information such as data related to your payment method (e.g., credit card number) when you purchase services from us. We store only very limited financial information that we need to process payments.</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-xl font-bold mb-2">Use of Your Information</h2>
                <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you to:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Create and manage your account.</li>
                  <li>Process payments and refunds.</li>
                  <li>Respond to your comments, questions, and requests.</li>
                  <li>Send you technical notices, updates, security alerts, and support messages.</li>
                  <li>Improve our website and marketing efforts.</li>
                  <li>Monitor and analyze usage and trends to improve your experience with our website.</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-xl font-bold mb-2">Disclosure of Your Information</h2>
                <p>We may share information we have collected about you in certain situations. Your information may be disclosed as follows:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>By Law or to Protect Rights: If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.</li>
                  <li>Third-Party Service Providers: We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.</li>
                  <li>Business Transfers: If we or our subsidiaries are involved in a merger, acquisition, or asset sale, your information may be transferred.</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-xl font-bold mb-2">Security of Your Information</h2>
                <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>
              </div>
              
              <div>
                <h2 className="text-xl font-bold mb-2">Contact Us</h2>
                <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
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

export default PrivacyPolicy;