import { Mail, MapPin, Phone } from "lucide-react"
import Navbar from "./navbar"


export default function ContactUsHero() {
    return (
        <section className="h-[400px] bg-gradient-to-b from-[#076585] to-[#B0C4DE] flex flex-col">
            <Navbar/>
            <div className="font-satoshi-italic flex  flex-col items-center justify-center flex-grow sm:self-center">
                <h1 className="text-[#0A192F] text-4xl font-bold">Get in Touch with Aimmax Company Ltd</h1>
            <p className="text-lg mt-2 text-gray-600">With decades of expertise, Aimmax Company Ltd sets the benchmark in asset management by delivering innovative solutions that redefine efficiency and accountability.
            </p>
            </div>
        
        </section>
    )
}