import { MapPinnedIcon } from "lucide-react";
import { useEffect, useState } from "react";
import ContactUsHero from "~/components/Contact-us-hero";
import FAQscontact from "~/components/FAQs-contact";
import Footer from "~/components/footer";
import SpotlightCard from "~/components/reactbits/spotlight-card";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

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

  useEffect(() => {
    console.log("FormData :", formData);
  }, [formData]);
  return (
    <>
      <main className="flex flex-col bg-[#B0C4DE]" id="top">
        <ContactUsHero />
        <div>
          {/* Left side - Scrollable content */}
          <div className="scrollable-content bg-slate-900">
            <section className="mb-12">
              <div className="p-4 flex flex-col justify-center">
                <div className="my-8 flex flex-col items-center">
                  <h2 className="text-2xl font-semibold mb-4">
                    <MapPinnedIcon
                      width={50}
                      height={50}
                      color={"#b4fe00"}
                      strokeWidth={1}
                    />
                  </h2>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.921230362498!2d-122.08385178469026!3d37.38605197982444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb24c2c6880c3%3A0x308d9e5a2c68b27c!2s1234%20Asset%20Management%20Street!5e0!3m2!1sen!2sus!4v1683041571234"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="map"
                    className="w-screen-xl"
                  ></iframe>
                </div>
                <div className="flex flex-col md:flex-row justify-center gap-7 items-start">
                  <FAQscontact />
                </div>
              </div>
            </section>
            <section>
              <div className="w-full p-4 flex justify-center pb-10">
                <SpotlightCard className="flex items-center justify-center flex-col w-[90%] max-w-lg pt-4 pb-8 bg-white border-0 backdrop-blur-lg text-black px-3">
                  <p className="text-2xl py-5 text-center ">
                    Want to get regular updates about our{" "}
                    <span className="text-cyan-500">
                      services and promotions
                    </span>
                    ?
                  </p>
                  <div className="flex w-full max-w-sm items-center gap-1">
                    <Input
                      type="email"
                      placeholder="Email"
                      className="border-black"
                    />
                    <Button
                      variant="default"
                      className="bg-[#b4fe00] hover:bg-cyan-500 text-black"
                    >
                      Subscribe
                    </Button>
                  </div>
                </SpotlightCard>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
