import React, {useState} from 'react';
import { useSpring, animated } from 'react-spring';
import ContactIllustration from './contactIllustration';
import Navbar from './navbar';
import '../ContactSplitPage.css'
const ContactHero = () => {
  // Animation for the contact methods
  const contactAnimations = useSpring({
    from: { opacity: 0, transform: 'translateX(100px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
    delay: 300,
  });


  const [formData, setFormData] = useState({
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    });
  
    const handleChange = (e: { target: { name: any; value: any } }) => {
      const { name, value } = e.target;
      setFormData((prev: any) => ({
        ...prev,
        [name]: value,
      }));
    };
  
    const handleSubmit = (e: { preventDefault: () => void }) => {
      e.preventDefault();
      // Handle form submission
      console.log("Form submitted:", formData);
    };

  return (
    <div className="relative contact-hero flex bg-[url('/blue.jpeg')] bg-cover  min-h-dvh items-center">
      <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-black/20'></div>
      <Navbar/>
      <div className='flex flex-col lg:flex-row'>
        <div className='flex'><div className="flex flex-col hero-text gap-15 text-center items-center" >
        <div><h1 className='text-white font-bold text-8xl'>at <span className='text-[#b4fe00]'>AIMMAX LIMITED.</span> we are all about solving asset related issues!</h1>
        <p className='text-slate-100'>Do you have any questions or require more information? Our team of
            experts are happy to assist you. </p>
        </div>
      
        <div className=" w-full flex justify-center h-[60px]">
          
        </div>
        <ContactIllustration/>
        
      </div>
      {/* Right side - Animated contact illustrations */}
      <animated.div className="hero-illustrations justify-center" style={contactAnimations}>
       {/*<AnimatedForm/>*/}
       <div className="fixed-form bg-[#B0C4DE]/30">
        <div className="max-w-full">
          <h2 className="text-3xl pb-2">Leave Us a message!</h2>
          <p>
            Want us to be part of the solution to your asset management challenges?
          </p>
          <form onSubmit={handleSubmit} className="mt-6">
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder=""
                required
              /><label htmlFor="name">Name</label>
            </div>
            <div className="form-group">
              
              <input
                type="phone"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder=""
                required
              /><label htmlFor="phone">Phone</label>
            </div>
            <div className="form-group">
              
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder=""
                required
              /><label htmlFor="email">Email</label>
            </div>
            <div className="form-group">
              <label htmlFor="subject" className="hidden">Subject</label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full p-3"
              >
                
                <option value="Support">Support</option>
                <option value="Technical">Technical</option>
                <option value="Sale">Sale</option>
              </select>
            </div>
            <div className="form-group">
              
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea><label htmlFor="message">Message</label>
            </div>
            <button type="submit" className="w-full submit-btn text-white mt-4 hover:bg-blue-700 submit-btn  bg-blue-500 px-4 py-2 rounded">
              Send Message
            </button>
          </form>
        </div>
      </div>
      </animated.div>
      </div>
      

      
      </div>
      
    </div>
  );
};

export default ContactHero;
