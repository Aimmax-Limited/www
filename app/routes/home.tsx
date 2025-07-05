import { useEffect, useState } from "react";
import Hero from "~/components/home/hero";
import Services from "~/components/home/services";
import Testimonials from "~/components/home/testimonials";
import WhyChooseUs from "~/components/home/why-choose-us";
import Footer from "~/components/shared/footer";
import Navbar from "~/components/shared/navbar";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Aimmax Limited | Assets Management" },
    {
      name: "description",
      content:
        "Expert comprehensive assets register preparation, barcoding solutions, valuation and accrual-based accounting services in Kenya",
    },
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
    <main id="top">
      <Hero id="hero" />

      {/* Shown only when the user scrolls past the hero section */}
      <Navbar
        className={`fixed top-0 left-0 z-50 bg-background-1/85 backdrop-blur-sm transition-all duration-500 h-16 ${
          showFixedNav
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      />

      <Services />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
    </main>
  );
}
