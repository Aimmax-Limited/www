import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import { cn } from "~/lib/utils";
import { Menu } from "./icons";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export default function Navbar({
  className,
  home = false,
  dark = true,
  ...props
}: { home?: boolean; dark?: boolean } & React.ComponentProps<"div">) {
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
          <Logo dark={dark} />
        </Link>
      ) : (
        <Link to="/">
          <Logo2 dark={dark} />
        </Link>
      )}

      <div className="hidden md:flex gap-0.5 md:gap-2 lg:gap-10 xl:gap-10 2xl:gap-12">
        {links.map((link) => (
          <NAvLink
            key={link.name}
            name={link.name}
            path={link.path}
            dark={dark}
          />
        ))}
        <Button
          variant={"outline"}
          className="group bg-accent hover:bg-primary border-0 ring-0 outline-0 text-center text-base text-accent-foreground"
        >
          <Link to={"/contact-us#top"}>Contact Us</Link>
        </Button>
      </div>
      <div className="block md:hidden pe-4">
        <SheetNavbar dark={dark} />
      </div>
    </div>
  );
}

const links = [
  {
    name: "Our Services",
    path: "/services#top",
  },
  {
    name: "About Us",
    path: "/about#top",
  },
];

function Logo({ dark = true }: { dark?: boolean }) {
  return (
    <div
      className={`flex items-center max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] xl:max-w-[600px] mt-2 pointer-events-none ${
        dark ? "text-background" : "text-foreground"
      }`}
    >
      <div className="max-w-[80px] md:max-w-[90px] lg:max-w-[100px]">
        <img
          src={dark ? "/logo-dark.svg" : "/logo-light.svg"}
          alt="Aimmax Logo"
          className="logo"
        />
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

function Logo2({ dark = true }: { dark?: boolean }) {
  return (
    <div
      className={`flex items-center max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] xl:max-w-[400px] pointer-events-none ${
        dark ? "text-background" : "text-foreground"
      }`}
    >
      <div className="max-w-[80px]">
        <img
          src={dark ? "/logo-dark.svg" : "/logo-light.svg"}
          alt="Aimmax Logo"
          className="logo"
        />
      </div>
      <div className="text-center font-mono hidden md:block">
        <p className="font-normal text-lg md:text-xl ">AIMMAX LIMITED</p>
        <p className="text-xs sm:text-sm">Assets Management</p>
      </div>
    </div>
  );
}

function NAvLink({
  name,
  path,
  dark,
  ...props
}: {
  name: string;
  path: string;
  dark: boolean;
} & React.ComponentProps<"button">) {
  return (
    <Button variant="link" {...props}>
      <NavLink
        to={path}
        className={({ isActive, isPending }) =>
          isActive
            ? "text-primary"
            : isPending
            ? "text-link-hover"
            : dark
            ? "text-background"
            : "text-foreground"
        }
        preventScrollReset
      >
        <span className="font-medium text-[1.1rem]">{name}</span>
      </NavLink>
    </Button>
  );
}

function SheetNavbar({ dark = true }: { dark?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Menu
          size="38"
          className={`${dark ? "fill-foreground-1" : "fill-foreground"}`}
        />
      </SheetTrigger>
      <SheetContent
        side="top"
        className="py-7 flex flex-col items-start bg-background-1/70 border-0 backdrop-blur-xs"
      >
        {links.map((link) => (
          <Button
            variant="link"
            className="font-outfit text-base"
            onClick={() => setIsOpen(false)}
            key={link.name}
          >
            <NavLink
              to={link.path}
              className={({ isActive, isPending }) =>
                isActive
                  ? "text-primary"
                  : isPending
                  ? "text-link-hover"
                  : "text-foreground-1"
              }
              preventScrollReset
            >
              {link.name}
            </NavLink>
          </Button>
        ))}
      </SheetContent>
    </Sheet>
  );
}
