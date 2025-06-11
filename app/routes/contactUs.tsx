import ContactUsForm from "~/components/ContactForm";

import Details from "~/components/Details"
import Footer from "~/components/footer"
import ContactUsHero from "~/components/Contact-us-hero"
import { SocialMediaBar } from "~/components/socialMediaBar";
import SpotlightCard from "~/components/reactbits/spotlight-card";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";

export default function ContactUs() {

  return (
    <main className="flex flex-col bg-[#B0C4DE]">
      <ContactUsHero />
      <SocialMediaBar />
      <div className="flex flex-col items-center justify-center gap-10 w-full px-4 py-8">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-10 w-full">
          <Details />
          <ContactUsForm />
        </div>
      </div>
      <div className="w-full bg-[#B0C4DE] p-4 flex justify-center">
        <SpotlightCard className="custom-spotlight-card flex items-center justify-center flex-col w-[90%] max-w-lg p-4 bg-neutral-100/25 border-0 backdrop-blur-lg text-black">
          <p className="text-2xl py-5 text-center">Want to get regular updates about our services and promotions?</p>
          <div className="flex w-full max-w-sm items-center gap-1">
            <Input type="email" placeholder="Email" className="border-black" />
            <Button variant="default">Subscribe</Button>
          </div>
        </SpotlightCard>
      </div>
      <Footer />
    </main>
  );
};
