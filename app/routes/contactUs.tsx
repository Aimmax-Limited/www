import ContactUsForm from "~/components/ContactForm"
import Navbar from "~/components/navbar"

export default function ContactUs() {
    return (<><Navbar/>
    <main>
    <div className="flex items-center flex-col">
        <h1>Leave us a message</h1>
        <ContactUsForm/></div>
    <div>
        <ContactUs/>
    </div>
    </main></>)
}