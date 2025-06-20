import type { ReactNode } from "react";
import { Link, NavLink } from "react-router";
import { cn } from "~/lib/utils";
import { Facebook, LinkedIn, Twitter } from "./icons";
import AnimatedContent from "./reactbits/animated-content";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Footer({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (

    <div className="max-w-screen-xl mx-auto bg-white px-5 ">
      <div className="flex ">
        <div className=" md:h-[300px] flex flex-col md:flex-row">
          <div className="flex justify-start items-start pt-10 md:w-1/2 p-3">
            <AnimateVertical threshold={0.01}>
              <h2 className="font-fredoka text-xl md:text-3xl pt-0">
                Get in Touch Today
              </h2>
              <p className="text-base md:text-lg font-satoshi font-medium pt-3 md:pt-4 w-5/6">
                Ready to take the next step in managing your assets? Contact us
                now for personalized insight and to schedule a consultation
              </p>
              <Button
                size={"lg"}
                variant={"outline"}
                className="h-12 max-w-3xs mt-8 md:mt-8 flex items-center text-lg text-black rounded-xl shadow-[0_6px_15px_rgba(0,0,0,0.4)] hover:shadow-none backdrop-blur-xl bg-[#b4fe00] hover:bg-[#64FFDA] border-0 transition-all duration-500"
                asChild
              >
                <Link to="/">Click Me!</Link>
              </Button>
            </AnimateVertical>
          </div>

          <div className="flex flex-col justify-center pt-10 md:justify-start items-start md:w-1/2">
            <AnimateVertical>
              <div className="flex  flex-col items-center">
                <p className=" text-[18px] md:text-[25px] pb-3 ml-3">
                          Want to get regular updates about our <span className="text-cyan-500">services and promotions</span>?
            
                        </p>
                        <div className="flex w-full items-center gap-1  h-20 justify-center p-3">
                          <Input type="email" placeholder="Email" className="border-black h-12" />
                          <Button variant="default" className="bg-[#b4fe00] hover:bg-cyan-500 text-black h-12 text-lg" size={'lg'}>Subscribe</Button>
                        </div>
              </div>
              
            </AnimateVertical>
          </div>
          

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

        <hr className="h-[3px] bg-slate-800 border-0" />

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
            ? "text-cyan-500"
            : isPending
            ? "text-green-400"
            : "text-black"
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

    path: "/dev-services#top",
  },
  {
    name: "About Us",
    path: "/dev-about#top",
  },
  {
    name: "Contact Us",
    path: "/dev-contactUs#top",
  },
];

function AnimateVertical({
  delay = 0,
  threshold = 0.1,
  children,
}: {
  delay?: number;
  threshold?: number;
  children: ReactNode;
}) {
  return (
    <AnimatedContent distance={80} delay={delay} threshold={threshold}>
      {children}
    </AnimatedContent>
  );
}
