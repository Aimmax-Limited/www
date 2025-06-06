import type { Route } from "./+types/home";
import Navbar from "~/components/navbar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Aimmax limited" },
    { name: "description", content: "Welcome to Aimmax limited" },
  ];
}

export default function Home() {
  return (<><Navbar/></>);
}
