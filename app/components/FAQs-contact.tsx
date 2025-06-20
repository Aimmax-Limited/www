

import React, { useEffect, useRef, useState } from 'react';
import { useSpring, animated } from 'react-spring';

function FAQscontact() {
  
  const [isVisible, setIsVisible] = useState([false, false, false, false]);
  const canvasRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {

        sections.forEach((_, index) => {
          setTimeout(() => {
            setIsVisible((prev) => {
              const updated = [...prev];
              updated[index] = true;
              return updated;
            });
          }, index * 500);
        });

      }
    }, {threshold: 0.3})

    if (canvasRef.current) {
      observer.observe(canvasRef.current);
    }

    return () => observer.disconnect();
  }, [canvasRef])

  const sections = [{question: 'What services do you offer?', answer: 'We provide asset management solutions, including tagging, valuation, and accrual accounting transitions.'},
    {question: 'How can I schedule a consultation?', answer: 'Use the contact form above or call us directly to book an appointment.'},
    {question: 'What are your support hours?', answer: 'Our team is available Monday-Friday, 9AM-6PM EST.'},
    {question: 'How quickly can I expect a response?', answer: 'Use the contact form above or call us directly to book an appointment.'}
    

  ]
  
  return (
    <div className="my-2 w-fit text-slate-100" ref={canvasRef}>

            <h2 className="text-2xl font-semibold p-4 text-center text-[#b4fe00]">F A Qs</h2>

            <div className="space-y-4 justify-around">

              {sections.map((section, index) => {
                const style = useSpring({
                                    opacity: isVisible[index] ? 1 : 0,
                                    transform: isVisible[index] ? "translateX(0px)" : "translateX(-50px)",
                                    config: { duration: 600 },
                                });
                return (<animated.div style={style} key={index} className="p-4 border border-gray-300 rounded-lg">
                  <h3>{section.question}</h3>
                  <p>{section.answer}</p>
                </animated.div>)
              })}
              
            </div>
          </div>
  );
}

export default FAQscontact;
