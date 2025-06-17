import React from 'react';
import { useSpring, animated } from 'react-spring';
import { Button } from './ui/button';
import { Link } from 'react-router';

const ContactHero = () => {
  // Animation for the contact methods
  const contactAnimations = useSpring({
    from: { opacity: 0, transform: 'translateX(100px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
    delay: 300,
  });

  return (
    <div className="contact-hero flex bg-slate-800 justify-between min-h-dvh">
      {/* Left side - Text content */}
      <div className="flex flex-col hero-text gap-15">
        <div><h1 className='text-white font-bold text-8xl'>at <span className='text-[#b4fe00]'>AIMMAX COMPANY LTD.</span> we are all about solving asset related issues!</h1>
        <p className='text-slate-100'>
          We specialize in deliveriing top notch asset management services that include the preparation of comprehensive asset registers, asset valuation for fair market value and physical tagging with <span className='text-[#258c9e]'>GK</span> full-color logo tags
        </p>
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
      </div>

      {/* Right side - Animated contact illustrations */}
      <animated.div className="hero-illustrations" style={contactAnimations}>
        <div className="contact-method gap-20">
          <div className="illustration email">
            <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <path d="M22 6l-10 7L2 6"/>
            </svg>
          </div>
        </div>
        
        <div className="contact-method">
          <div className="illustration phone">
            <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
            </svg>
          </div>
        </div>
        
        <div className="contact-method">
          <div className="illustration chat">
            <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
            </svg>
          </div>
        </div>
      </animated.div>
    </div>
  );
};

export default ContactHero;