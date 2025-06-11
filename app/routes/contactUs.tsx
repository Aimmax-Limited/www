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
    <main className=" flex flex-grow justify-center">
    <div className="flex items-center flex-col justify-center gap-10 w-full">
        <Details/>
        <h1 className="text-2xl font-semibold">or</h1>
    <div className="w-[400px] md:w-[500px] " >
        <h1 className="p-4 text-3xl">Leave us a message!</h1>
        <ContactUsForm/>
    </div>
    </div>
    
    </main>
     
               <div className="w-full bg-[#B0C4DE] p-4 flex justify-center"> <SpotlightCard className='custom-spotlight-card flex items-center justify-center flex-col  w-[500px] p-4 bg-neutral-100/25 border-0 backdrop-blur-lg text-black' spotlightColor='rgba(0, 299, 255, 0.2)'>
            <p className='text-2xl py-5'>Want to get regular updates about our services and promotions ?</p>
            <div className='flex w-full max-w-sm items-center gap-1'>
                <Input type='email' placeholder='Email' className="border-black"/><Button variant={'default'}>Subscribe</Button>
            </div>
        </SpotlightCard></div>
    <Footer/>
    </main>)
}