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

export default function ContactUs() {
  return (
    <>
      <main className="flex flex-col bg-[#B0C4DE]">
        <ContactUsHero />
        <SocialMediaBar />
        <div className="flex flex-col items-center justify-center gap-10 w-full px-4 py-8">
          <Details />
          <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-10 w-full">
            <ContactUsForm />
          </div>
        </div>
        <div className="bg-[#B0C4DE] p-4 flex flex-col justify-center">
          <div className="my-8">
            <h2 className="text-2xl font-semibold mb-4">Our Location</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.921230362498!2d-122.08385178469026!3d37.38605197982444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb24c2c6880c3%3A0x308d9e5a2c68b27c!2s1234%20Asset%20Management%20Street!5e0!3m2!1sen!2sus!4v1683041571234"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="map"
            ></iframe>
          </div>
          <div className="my-8 flex items-center justify-center">
            <Card className="bg-[#B0C4DE] border-0 h-[320px]">
              <CardContent>
                <h2 className="text-2xl font-semibold mb-4 ml-4">Why Choose Us?</h2>
                <ul className="list-disc ml-6 space-y-2 p-2">
                  <li>Compliance with government policies and asset management indicators.</li>
                  <li>Streamlined asset verification and maintenance scheduling.</li>
                  <li>Expertise in barcoding and asset depreciation tracking.</li>
                  <li>Proven track record with government ministries and corporations.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="my-8 w-full">
            <h2 className="text-2xl font-semibold p-4 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4 lg:flex justify-around">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 border border-gray-300 rounded-lg"
              >
                <h3 className="font-semibold">What services do you offer?</h3>
                <p className="text-gray-600">
                  We provide asset management solutions, including tagging, valuation, and accrual accounting transitions.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 border border-gray-300 rounded-lg"
              >
                <h3 className="font-semibold">How can I schedule a consultation?</h3>
                <p className="text-gray-600">
                  Use the contact form above or call us directly to book an appointment.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="w-full bg-[#B0C4DE] p-4 flex justify-center">
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
      </main>
      <Footer />
    </>
  );
}
