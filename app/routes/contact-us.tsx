import { MapPinnedIcon } from "lucide-react";
import { useEffect, useState } from "react";
import FAQ from "~/components/contact-us/faq";
import ContactHero from "~/components/contact-us/hero";
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

  return (
    <>
      <main className="flex flex-col" id="top">
        <ContactHero />
        <div>
          {/* Left side - Scrollable content */}
          <div className="scrollable-content bg-background-1">
            <section className="mb-12">
              <div className="p-4 flex flex-col justify-center">
                <div className="mb-8 flex flex-col items-center">
                  <h2 className="text-2xl font-semibold mb-4">
                    <MapPinnedIcon
                      width={50}
                      height={50}
                      color={"#b4fe00"}
                      strokeWidth={1}
                      className="animate-pulse"
                    />
                  </h2>
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
