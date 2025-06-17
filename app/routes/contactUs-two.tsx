import React, { useState } from 'react';
import '../ContactSplitPage.css';
import { SocialMediaBar } from '~/components/socialMediaBar';
import ContactHero from '~/components/Contact-us-hero';

const ContactSplitPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-split-container">
      {/* Left side - Scrollable content */}
      <div className="scrollable-content bg-slate-800">
        <ContactHero/>
        <section className="mb-12">
          <h2>Our Offices</h2>
          <div className="office-card">
            <h3>New York HQ</h3>
            <p>123 Business Avenue<br/>New York, NY 10001</p>
            <p>☎ (212) 555-1234</p>
          </div>
          <div className="office-card">
            <h3>London Office</h3>
            <p>45 Innovation Street<br/>London, UK EC1A 1BB</p>
            <p>☎ +44 20 7946 0958</p>
          </div>
        </section>

        <section className="mb-12">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <h3>What are your support hours?</h3>
            <p>Our team is available Monday-Friday, 9AM-6PM EST.</p>
          </div>
          <div className="faq-item">
            <h3>How quickly can I expect a response?</h3>
            <p>We typically respond within 24 hours during business days.</p>
          </div>
        </section>

        <section className="mb-12">
          
          <SocialMediaBar/>
        </section>
      </div>

      {/* Right side - Fixed contact form */}
      <div className="fixed-form bg-[#B0C4DE]">
        <div className="max-w-full">
          <h2 className='text-3xl pb-2'>Leave Us a message!</h2>
          <p>Do you have any questions or require more information? Our team of experts are happy to assist you. We look forward to your inquiry and to working together to find the best solutions for your challenges</p>
          <form onSubmit={handleSubmit} className='mt-6'>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="phone"
                id="phone"
                name="phone"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSplitPage;