import React, {useState} from 'react';
import { useSpring, animated } from 'react-spring';
import { Button } from './ui/button';
import { Link } from 'react-router';
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
    <div className="relative contact-hero flex bg-[url('/white.jpeg')] bg-cover  min-h-dvh items-center">
      <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-black/20'></div>
      <Navbar/>
      <div className='flex'><div className="flex flex-col hero-text gap-15">
        <div><h1 className='text-white font-bold text-8xl'>at <span className='text-[#b4fe00]'>AIMMAX LIMITED.</span> we are all about solving asset related issues!</h1>
        <p className='text-slate-100'>Want us to be part of the solution to your asset management challenges?</p>
        </div>
      
        <div className="">
          <Button size={"lg"}
            variant={"outline"}
            className="group h-12 max-w-3xs flex items-center text-lg text-gray-50 bg-white/5 hover:bg-[#64FFDA] backdrop-blur-xl rounded-xl border border-white/30 shadow-[inset_0_1px_2px_rgba(255,255,255,1)] animate-bounce hover:animate-none"
            asChild>
              <Link to={'/dev-contactUs'}>Reach out!</Link>

          </Button>
        </div>
        <ContactIllustration/>
      </div>

      {/* Right side - Animated contact illustrations */}
      <animated.div className="hero-illustrations justify-center hidden" style={contactAnimations}>
        <form onSubmit={handleSubmit} className=" p-10 bg-white/3 backdrop-blur-sm w-full">
            <div className="form-group animate-fade-in opacity-0 [animation-fill-mode:forwards] [animation-delay:100ms]" >
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
              <label htmlFor="subject" className='hidden'>Subject</label>
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
            <button type="submit" className="submit-btn animate-pulse hover:animate-none bg-blue-500 px-4 py-2 rounded">
              Send Message
            </button>
          </form>
      </animated.div>
      </div>
      
    </div>
  );
};

export default ContactHero;
