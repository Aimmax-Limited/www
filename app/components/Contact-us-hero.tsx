import Navbar from "./navbar"


export default function ContactUsHero() {
    return (
        <section className="h-[340px] sm:h-[300px] bg-[#B0C4DE] flex flex-col">
            <Navbar/>
            <div className="text-4xl md:text-6xl font-satoshi-italic flex items-center justify-center flex-grow sm:"><h1 className="text-[#0A192F]">Contact Us</h1></div>
        </section>
    )
}