import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import { cn } from "~/lib/utils";
import { Menu } from "./icons";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export default function Navbar({
  className,
  home = false,
  ...props
}: { home?: boolean } & React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "w-full flex justify-between items-center",
        home ? "" : "px-0 md:px-2 lg:px-10 xl:px-20 2xl:px-32 3xl:px-40",
        className
      )}
      {...props}
    >
      {home ? (
        <Link to="/">
          <Logo />
        </Link>
      ) : (
        <Link to="/">
          <Logo2 />
        </Link>
      )}

      <div className="hidden md:flex gap-0.5 md:gap-2 lg:gap-10 xl:gap-10 2xl:gap-12">
        {links.map((link) => (
          <NAvLink key={link.name} name={link.name} path={link.path} />
        ))}
        <Button
          variant={"outline"}
          className="group bg-[#b4fe00] border-0 ring-0 outline-0 text-center text-base"
        >
          <Link to={"/"}>Contact Us</Link>
        </Button>
      </div>
      <div className="block md:hidden pe-4">
        <SheetNavbar />
      </div>
    </div>
  );
}

const links = [
  {
    name: "Our Services",
    path: "/dev-services",
  },
  {
    name: "About Us",
    path: "/dev-about",
  },
];

function Logo() {
  return (
    <div className="text-white flex items-center max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] xl:max-w-[600px] mt-2 pointer-events-none">
      <div className="max-w-[80px] md:max-w-[90px] lg:max-w-[100px]">
        <img src="/logo-dark.svg" alt="Aimmax Logo" className="logo" />
      </div>
      <div className="text-center font-clashdisplay">
        <p className="font-medium text-lg md:text-xl lg:text-2xl xl:text-4xl">
          AIMMAX LIMITED
        </p>
        <p className="text-xs sm:text-sm lg:text-lg xl:text-xl">
          Assets Management
        </p>
      </div>
    </div>
  );
}

function Logo2() {
  return (
    <div className="text-white flex items-center max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] xl:max-w-[400px] pointer-events-none">
      <div className="max-w-[80px]">
        <img src="/logo-dark.svg" alt="Aimmax Logo" className="logo" />
      </div>
      <div className="text-center font-mono">
        <p className="font-normal text-lg md:text-xl ">AIMMAX LIMITED</p>
        <p className="text-xs sm:text-sm">Assets Management</p>
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
            : "text-white"
        }
        preventScrollReset
      >
        {name}
      </NavLink>
    </Button>
  );
}

function SheetNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Menu size="38" className="fill-white" />
      </SheetTrigger>
      <SheetContent
        side="top"
        className="py-7 flex flex-col items-start bg-[#0A192F]/95 border-0 opacity-80 backdrop-blur-lg"
      >
        {links.map((link) => (
          <CustomNavLink
            key={link.name}
            name={link.name}
            path={link.path}
            onClick={() => setIsOpen(false)}
          />
        ))}
      </SheetContent>
    </Sheet>
  );
}

function CustomNavLink({
  name,
  path,
  ...props
}: {
  name: string;
  path: string;
} & React.ComponentProps<"button">) {
  return (
    <Button variant="link" className="font-outfit text-base" {...props}>
      <NavLink
        to={path}
        className={({ isActive, isPending }) =>
          isActive ? "text-red-600" : isPending ? "text-blue-600" : "text-white"
        }
        preventScrollReset
      >
        {name}
      </NavLink>
    </Button>
  );
}
