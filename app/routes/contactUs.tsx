import ContactUsForm from "~/components/ContactForm";
import Details from "~/components/Details";
import Footer from "~/components/footer";
import ContactUsHero from "~/components/Contact-us-hero";
import { SocialMediaBar } from "~/components/socialMediaBar";
import SpotlightCard from "~/components/reactbits/spotlight-card";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import { motion } from "framer-motion";
import FAQscontact from "~/components/FAQs-contact";
import WhyUscontact from "~/components/whyUs-contact";
import { MapPinnedIcon } from "lucide-react";
import Navbar from "~/components/navbar";
import { useEffect, useState } from "react";

export default function ContactUs() {

  const [formData, setFormData] = useState({
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    });
  
    const handleChange = (e: { target: { name: any; value: any } }) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    };
  
    const handleSubmit = (e: { preventDefault: () => void }) => {
      e.preventDefault();
      // Handle form submission
      console.log("Form submitted:", formData);


    };
  
    useEffect(()=> {
      console.log('FormData :', formData)
    },[formData])
  return (
    <>
      <main className="flex flex-col bg-[#B0C4DE]">
        <ContactUsHero />
        <div className="contact-split-container">
      {/* Left side - Scrollable content */}
      <div className="scrollable-content bg-slate-800">
      
        <section className="mb-12">
          <div className="p-4 flex flex-col justify-center">
            <div className="my-8 flex flex-col items-center">
              <h2 className="text-2xl font-semibold mb-4">
                <MapPinnedIcon width={50} height={50} color={"#b4fe00"} />
              </h2>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.921230362498!2d-122.08385178469026!3d37.38605197982444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb24c2c6880c3%3A0x308d9e5a2c68b27c!2s1234%20Asset%20Management%20Street!5e0!3m2!1sen!2sus!4v1683041571234"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="map"
                className="max-w-screen-xl"
              ></iframe>
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-7 items-start">
              <FAQscontact />
            </div>
          </div>
        </section>
        <section>
          <div className="w-full p-4 flex justify-center">
          <SpotlightCard className="flex items-center justify-center flex-col w-[90%] max-w-lg p-4 bg-neutral-100/25 border-0 backdrop-blur-lg text-black">
            <p className="text-2xl py-5 text-center">
              Want to get regular updates about our services and promotions?
            </p>
            <div className="flex w-full max-w-sm items-center gap-1">
              <Input type="email" placeholder="Email" className="border-black" />
              <Button variant="default">Subscribe</Button>
            </div>
          </SpotlightCard>
        </div>
        </section>

        <section className="mb-12">
          <SocialMediaBar />
        </section>
      </div>

      {/* Right side - Fixed contact form */}
      <div className="fixed-form bg-[#B0C4DE]/20">
        <div className="max-w-full">
          <h2 className="text-3xl pb-2">Leave Us a message!</h2>
          <p>
            Do you have any questions or require more information? Our team of
            experts are happy to assist you. We look forward to your inquiry and
            to working together to find the best solutions for your challenges
          </p>
          <form onSubmit={handleSubmit} className="mt-6">
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
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
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
              <label htmlFor="subject" className="">Subject</label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full pl-[15px] p-3"
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
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
          
    
        
        
      </main>
      <Footer />
    </>
  );
}
