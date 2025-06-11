import ContactUsForm from "~/components/ContactForm";

import Details from "~/components/Details"
import Footer from "~/components/footer"
import ContactUsHero from "~/components/Contact-us-hero"
import { SocialMediaBar } from "~/components/socialMediaBar";
import SpotlightCard from "~/components/reactbits/spotlight-card";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
export default function ContactUs() {
    return (<main className="flex flex-col bg-[#B0C4DE]">
    <ContactUsHero/>
    <SocialMediaBar/>
    <main className=" flex flex-grow justify-center bg-[#0A192F]">
    <div className="flex items-center flex-col justify-center gap-20 w-4/5">
        <Details/>
    <div >
        <h1 className="p-4 text-3xl">Leave us a message</h1>
        <ContactUsForm/>
    </div>
    </div>
    
    </main>
     
               <div> <SpotlightCard className='custom-spotlight-card flex items-center justify-center flex-col text-amber-50' spotlightColor='rgba(0, 299, 255, 0.2)'>
            <p className='text-2xl text-amber-50 py-5'>Want to get regular access to updates about our services and promotions ?</p>
            <div className='flex w-full max-w-sm items-center gap-1'>
                <Input type='email' placeholder='Email'/><Button variant={'outline'}>Subscribe</Button>
            </div>
        </SpotlightCard></div>
    <Footer/>
    </main>)
}