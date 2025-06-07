import Footer from "~/components/footer";
import Hero from "~/components/hero";
import Intro from "~/components/intro";
import Navbar from "~/components/navbar";
import Services from "~/components/services";
import WhyChooseUs from "~/components/why-choose-us";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Aimmax Limited" },
    { name: "description", content: "Aimmax Limited Assets Management" },
  ];
}

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Intro />
      <Services />
      <WhyChooseUs />
      <Footer />
    </>
  );
}
