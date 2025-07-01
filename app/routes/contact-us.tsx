import { MapPinnedIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { animated, useSpring } from "react-spring";
import ContactInfoAnimation from "~/components/contact-us/contact-animation";
import FAQ from "~/components/contact-us/faq";
import ContactHero from "~/components/contact-us/hero";
import CommonHero from "~/components/shared/common-hero";
import Footer from "~/components/shared/footer";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    console.log("FormData :", formData);
  }, [formData]);
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

  const [status, setStatus] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState({
    error: false,
    message: "",
  });

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    setStatus(true);
    e.preventDefault();
    // Handle form submission
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwopR1JUOzoY9-Stc8X3gKYPT_9zFVX1RTa81Rd7m8W5zxhF8G_6WBbiq55DNabHO3_fA/exec",
        {
          method: "POST",
          body: new URLSearchParams(formData),
        }
      );

      if (response.ok) {
        setStatus(false);
        setFormData({
          name: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
        });
        setSubmitted(true);
      } else {
        setStatus(false);
        setError({
          error: true,
          message: `Oops! Couldn't send your MessageChannel Try again`,
        });
      }
    } catch (error) {
      setStatus(false);
      setError({
        error: true,
        message: JSON.stringify(error),
      });
    }
    console.log("Form submitted:", formData);
    setTimeout(() => setSubmitted(false), 1500);
  };

  return (
    <>
      <main className="flex flex-col" id="top">
        <CommonHero title="Contact Us" className="" />
        <div className="md:relative contact-hero   bg-background min-h-dvh items-center z-20">
          <div className="mt-10 md:mt-20 lg:mt-28 xl:mt-32 flex flex-col lg:flex-row z-20 pt-5 pb-5">
            <div className="flex flex-col lg:flex-row z-10 bg-background">
              <div className="flex flex-col hero-text gap-15 text-center ">
                <div className="lg:w-3/5 self-start gap-2 flex flex-col">
                  <p className="text-foreground font-bold text-4xl lg:text-6xl">
                    at{" "}
                    <span className="style-h2-contact text-foreground">
                      AIMMAX LIMITED.
                    </span>{" "}
                    we are all about solving asset related issues!
                  </p>
                  <p className="">
                    Do you have any questions or require more information? Our
                    team of experts are happy to assist you.{" "}
                  </p>
                </div>
                <div className="lg:ml-20">
                  <ContactInfoAnimation />
                </div>
              </div>
              {/* Right side - Animated contact illustrations */}
              <animated.div
                className="hero-illustrations w-fit justify-center items-center  lg:absolute top-30 right-7 md:mt-12 lg:mt-0 md:w-full lg:max-w-fit"
                style={contactAnimations}
              >
                {/*<AnimatedForm/>*/}
                <div className="fixed-form bg-white/5 self-center">
                  {!submitted ? (
                    <div className="max-w-full">
                      <h2 className="text-3xl pb-2">Leave Us a message!</h2>
                      <p>
                        Want us to be part of the solution to your asset
                        management challenges?
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
                            autoComplete="on"
                            required
                          />
                          <label htmlFor="name">Name</label>
                        </div>
                        <div className="form-group">
                          <input
                            type="tel"
                            pattern="0[17][0-9]{8}"
                            id="phone"
                            name="phone"
                            title="Phone can only be numbers"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder=""
                            autoComplete="on"
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
                            autoComplete="on"
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
                          className="w-full text-white mt-4 bg-accent hover:bg-primary submit-btn px-4 py-2 rounded"
                        >
                          Send Message
                        </button>
                      </form>
                    </div>
                  ) : (
                    <div className="text-center max-w-full min-h-full">
                      {error.error
                        ? error.message
                        : "Thank you for reaching out to us . we typically respond in less than 24 hours"}
                    </div>
                  )}
                </div>
              </animated.div>
            </div>
          </div>
        </div>
        <div className="z-20">
          {/* Left side - Scrollable content */}
          <div className="scrollable-content bg-background-1 ">
            <section className="mb-12">
              <div className="p-4 flex flex-col justify-center">
                <div className="mb-8 flex flex-col items-center pt-2">
                  
                  <iframe
                    className="w-full"
                    title="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8177210078156!2d36.82142707589617!3d-1.2832174356247046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d5ef82815f%3A0x2b087c5079b170a9!2sImenti%20House!5e0!3m2!1sen!2ske!4v1750441787726!5m2!1sen!2ske"
                    width="600"
                    height="450"
                    style={{}}
                    loading="lazy"
                  ></iframe>
                </div>
                <div className="flex flex-col md:flex-row justify-center gap-7 items-start">
                  <FAQ />
                </div>
              </div>
            </section>
            <section>
              <div className="w-full p-4 flex justify-center pb-10"></div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
