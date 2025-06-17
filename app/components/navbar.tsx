import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import { cn } from "~/lib/utils";
import ShinyText from "./reactbits/shiny-text";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Services",
    path: "/",
  },
  {
    name: "Portfolio",
    path: "/dev-contactUs",
  },
  {
    name: "About us",
    path: "/dev-about",
  },
];

export default function Navbar({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("w-full flex justify-between items-center", className)}
      {...props}
    >
      <DarkLogo />
      <div className="hidden md:flex pe-0 md:pe-2 lg:pe-10 xl:pe-20 2xl:pe-32 3xl:pe-40 gap-0.5 md:gap-2 lg:gap-10 xl:gap-10 2xl:gap-12">
        {links.map((link) => (
          <NAvLink key={link.name} name={link.name} path={link.path} />
        ))}
        <Button
          variant={"outline"}
          className="group bg-slate-900 hover:bg-blue-600 border-0 ring-0 outline-0 hover:ring hover:ring-offset-2 text-center text-base"
        >
          <Link to={"/contact us"}>
            <ShinyText
              text="Contact us"
              className="text-white/80 group-hover:text-white"
            />
          </Link>
        </Button>
      </div>
      <div className="block md:hidden pe-4">
        <SheetBar />
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className="flex items-center">
      <img src="./logo-light.svg" alt="Logo" width={90} />
      <div className="text-black font-mono text-center">
        <p>Aimmax</p>
        <p>Limited</p>
      </div>
    </div>
  );
}

function DarkLogo() {
  return (
    <div className="flex items-center">
      <img src="./logo-dark.svg" alt="Logo" width={90} />
      <div className="text-white font-mono text-center">
        <p>Aimmax</p>
        <p>Limited</p>
      </div>
    </div>
  );
}

function NAvLink({
  name,
  path,
  ...props
}: { name: string; path: string } & React.ComponentProps<"button">) {
  return (
    <Button variant="link">
      <NavLink
        to={path}
        className={({ isActive, isPending }) =>
          isActive
            ? "text-cyan-500"
            : isPending
            ? "text-green-400"
            : "text-black"
        }
        preventScrollReset
      >
        {name}
      </NavLink>
    </Button>
  );
}

function SheetBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <img src="./align-right.svg" alt="Menu Icon" width={60} className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent className="flex flex-col items-center">
        {links.map((link) => (
          <NAvLink
            key={link.name}
            name={link.name}
            path={link.path}
            onClick={() => setIsOpen(false)}
          />
        ))}
        <Button
          variant={"outline"}
          className="group bg-[#0A192F] hover:bg-slate-900 border-0 ring-0 outline-0 text-center text-base"
        >
          <Link to={"/contact us"}>
            <ShinyText
              text="Contact us"
              className="group-hover:text-teal-600 hover:bg-slate-900"
            />
          </Link>
        </Button>
      </SheetContent>
    </Sheet>
  );
}
