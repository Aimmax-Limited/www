import { Link, NavLink } from "react-router";
import { cn } from "~/lib/utils";
import { AnimateVertical } from "./animate-content";
import { Facebook, LinkedIn, Twitter } from "./icons";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Footer({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("max-w-screen-xl mx-auto bg-white px-5", className)}
      {...props}
    >
      <div className="h-[300px] md:h-[350px] grid md:grid-cols-2 xl:grid-cols-5">
        <div className="flex justify-start items-center md:col-span-1 xl:col-span-3">
          <AnimateVertical threshold={0.01}>
            <h2 className="font-fredoka text-3xl md:text-6xl pt-0">
              Get in Touch Today
            </h2>
            <Button
              size={"default"}
              variant={"outline"}
              className="h-12 max-w-3xs mt-8 md:mt-10 flex items-center text-lg text-accent-foreground rounded-xl shadow-[0_6px_15px_rgba(0,0,0,0.4)] hover:shadow-none backdrop-blur-xl bg-accent hover:bg-primary border-0 transition-all duration-500"
              asChild
            >
              <Link to="/contact-us#top">Send a message</Link>
            </Button>
          </AnimateVertical>
        </div>

        <div className="flex flex-col md:justify-center items-start md:col-span-1 xl:col-span-2">
          <AnimateVertical>
            <div className="flex flex-col items-center">
              <p className="text-base md:text-xl md:text-center font-satoshi font-medium pt-10 md:pt-10">
                Want to get regular updates about our{" "}
                <span className="text-primary">services and promotions</span>?
              </p>
              <div className="flex w-full items-center gap-1 h-20 justify-center md:p-3">
                <Input
                  type="email"
                  placeholder="Email"
                  className="border-black md:h-10"
                  autoComplete="on"
                />
                <Button
                  variant="default"
                  className="bg-accent hover:bg-primary text-accent-foreground font-satoshi md:h-10 text-lg ms-2 md:ms-5 shadow-[0_6px_15px_rgba(0,0,0,0.4)] hover:shadow-none transition-all duration-500"
                  size={"lg"}
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </AnimateVertical>
        </div>
      </div>

      <div className="pt-0 md:pt-10 pb-10 md:pb-12 lg:pb-16 xl:pb-20 text-center">
        <AnimateVertical>
          <div className="md:flex justify-between items-center grid xl:grid grid-cols-1 xl:grid-cols-3 py-5">
            <Logo className="max-w-[100px]" />
            <div className="flex flex-col md:flex-row justify-center md:justify-start items-start md:items-center">
              {links.map((link) => (
                <NAvLink key={link.name} name={link.name} path={link.path} />
              ))}
            </div>
            <div className="flex flex-col md:flex-row justify-center md:justify-end items-start md:items-center gap-4 pt-8 md:pt-0 ps-4 md:ps-0">
              <Facebook />
              <Twitter size="20" />
              <LinkedIn size="20" />
            </div>
          </div>
        </AnimateVertical>

        <hr className="h-[3px] bg-background-1 border-0" />

        <div className="pt-5 md:pt-8">
          <AnimateVertical threshold={0.01}>
            <p className="font-satoshi font-medium">
              © 2025 Aimmax Company Ltd. All rights reserved.
            </p>
          </AnimateVertical>
        </div>
      </div>
    </div>
  );
}

function Logo({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex items-center pb-4 md:pb-0", className)} {...props}>
      <img src="./logo-light.svg" alt="Logo" width={90} />
      <div className="text-black font-clashdisplay font-medium text-2xl text-center">
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
            ? "text-primary"
            : isPending
            ? "text-link-hover"
            : "text-foreground"
        }
        preventScrollReset
      >
        <span className="text-[17px]">{name}</span>
      </NavLink>
    </Button>
  );
}

const links = [
  {
    name: "Home",
    path: "/#top",
  },
  {
    name: "Our Services",
    path: "/services#top",
  },
  {
    name: "About Us",
    path: "/about#top",
  },
  {
    name: "Contact Us",
    path: "/contact-us#top",
  },
];
