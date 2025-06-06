import Hero from "~/components/hero";
import Intro from "~/components/intro";
import Services from "~/components/services";
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
      <Hero />
      <Intro />
      <Services />
    </>
  );
}
