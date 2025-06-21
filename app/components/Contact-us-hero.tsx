import { useState } from "react";
import { animated, useSpring } from "react-spring";
import "../ContactSplitPage.css";
import ContactIllustration from "./contactIllustration";
import Navbar from "./navbar";
const ContactHero = () => {
  // Animation for the contact methods
  const contactAnimations = useSpring({
    from: { opacity: 0, transform: "translateX(100px)" },
    to: { opacity: 1, transform: "translateX(0)" },
    delay: 300,
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className="relative contact-hero flex bg-[url('/blue.jpeg')] bg-cover  min-h-dvh items-center">
      <div className="absolute inset-0 bg-gradient-to-t from-black/0 to-black/20"></div>

      <Navbar
        className={`fixed top-0 left-0 z-50 bg-[#0A192F]/95 backdrop-blur-sm h-16 shadow-[0_4px_14px_rgba(0,0,0,0.4)]`}
      />

      <div className="mt-10 md:mt-20 lg:mt-28 xl:mt-32 flex flex-col lg:flex-row">
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col hero-text gap-15 text-center items-center">
            <div>
              <p className="text-white font-bold text-4xl lg:text-6xl">
                at <span className="text-[#b4fe00]">AIMMAX LIMITED.</span> we
                are all about solving asset related issues!
              </p>
              <p className="text-slate-100">
                Do you have any questions or require more information? Our team
                of experts are happy to assist you.{" "}
              </p>
            </div>

            <ContactIllustration />
          </div>
          {/* Right side - Animated contact illustrations */}
          <animated.div
            className="hero-illustrations w-fit justify-center items-center md:mt-12 lg:mt-0  md:w-full lg:max-w-fit"
            style={contactAnimations}
          >
            {/*<AnimatedForm/>*/}
            <div className="fixed-form bg-[#B0C4DE]/30 self-center">
              <div className="max-w-full">
                <h2 className="text-3xl pb-2">Leave Us a message!</h2>
                <p>
                  Want us to be part of the solution to your asset management
                  challenges?
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
                    />
                    <label htmlFor="name">Name</label>
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
                    />
                    <label htmlFor="phone">Phone</label>
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
                    />
                    <label htmlFor="email">Email</label>
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject" className="hidden">
                      Subject
                    </label>
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
                      placeholder=""
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                    <label htmlFor="message">Message</label>
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white mt-4 hover:bg-[#b4fe00]/70 submit-btn  bg-[#b4fe00] px-4 py-2 rounded"
                  >
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
