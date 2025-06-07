import { useEffect, useState } from "react";
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
  const [showFixedNav, setShowFixedNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero");
      const heroBottom = hero?.getBoundingClientRect().bottom;

      heroBottom && setShowFixedNav(heroBottom <= 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Hero id="hero" />

      {/* Shown only when the user scrolls past the hero section */}
      <Navbar
        className={`fixed top-0 left-0 z-50 bg-[#0A192F]/85 backdrop-blur-sm transition-all duration-500 h-16 ${
          showFixedNav
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      />

      <Intro />
      <Services />
      <WhyChooseUs />
      <Footer />
    </>
  );
}
