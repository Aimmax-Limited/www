import { useEffect, useState } from "react";
import { Link } from "react-router";
import Navbar from "~/components/shared/navbar";
import CountUp from "~/components/shared/reactbits/count-up";
import { Button } from "~/components/shared/ui/button";
import { cn } from "~/lib/utils";

import AccountingSummation from "./accounting-animation";
import AssetRegisterAnimation from "./asset-register-animation";
import BarcodeAnimation from "./barcode-animation";

export default function Hero({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <>
      <div
        className={cn(
          "h-[700px] max-h-svh md:h-svh md:max-h-[850px] xl:max-h-[1080px] px-1 lg:px-10 bg-[url('/backgrounds/blue-sky.jpg')] bg-cover z-10 relative",
          className
        )}
        {...props}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20"></div>

        <Navbar className="relative z-50" home />

        <div className="relative h-[475px] hero__text-height max-w-[1400px] w-full mx-auto">
          <Text className="" />

          <div className="hidden hero__animations">
            <div className="absolute right-0 top-0 z-10">
              <BarcodeAnimation />
            </div>

            <div className="absolute right-0 top-80">
              <AssetRegisterAnimation />
            </div>

            <div className="absolute right-[25%] top-[350px]">
              <AccountingSummation />
            </div>
          </div>

          <div className="absolute right-1/2 translate-x-1/2 lg:right-10 lg:translate-x-0 top-36 md:top-44 hero__sm-animation">
            <AccountingSummation />
          </div>
        </div>

        <div className="hero__button flex justify-center lg:justify-start max-w-[1400px] w-full mx-auto mt-5 font-clashdisplay tracking-wider group">
          <Button
            size={"lg"}
            variant={"outline"}
            className="group h-12 max-w-3xs flex items-center text-lg text-slate-900 bg-[#b4fe00] hover:bg-[#64FFDA] backdrop-blur-xl rounded-xl border border-white/30 shadow-[0_6px_15px_rgba(255,255,255,0.4)] hover:shadow-none"
            asChild
          >
            <Link to="/dev-contact-us#top">Get in touch with us</Link>
          </Button>
        </div>

        <div className="hidden absolute md:bottom-10 end-1/2 translate-x-[50%] hero__metrics items-center justify-center w-full max-w-[1024px] mx-auto">
          <div className="text-slate-300 flex flex-row justify-center md:justify-around w-full font-satoshi font-bold">
            {metrics.map((metric, index) => (
              <div
                className="flex flex-col justify-center items-center text-center gap-x-1"
                key={index}
              >
                <div>
                  <CountUp
                    to={metric.count}
                    delay={0}
                    duration={1}
                    separator=","
                    className="text-2xl xl:text-4xl font-bold text-[#CCD6F6]"
                  />
                  {metric.modifier && (
                    <span className="text-2xl xl:text-4xl font-bold">
                      {metric.modifier}
                    </span>
                  )}
                </div>
                <p className="text-lg md:text-xl">{metric.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function Text({ className, ...props }: React.ComponentProps<"div">) {
  const [current, setCurrent] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInitial, setIsInitial] = useState(true);
  const delay = 10000;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, delay);

    return () => clearInterval(interval);
  }, [slides.length]);

  // Mark initial animation as complete after first slide change
  useEffect(() => {
    if (isInitial && current !== 0) {
      setIsInitial(false);
    }
  }, [current, isInitial]);

  useEffect(() => {
    const handleLoad = () => setIsLoaded(true);

    if (document.readyState === "complete") {
      setTimeout(() => setIsLoaded(true), 200);
    } else {
      window.addEventListener("load", () => {
        setTimeout(() => setIsLoaded(true), 200);
      });
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <>
      <div
        className={cn(
          "h-full w-full flex justify-start items-start xl:items-center p-7 hero__text-padding",
          className
        )}
        {...props}
      >
        {slides.map((slide, index) => (
          <div
            className={cn(
              "max-w-[1400px] w-full mx-auto text-start absolute left-[50%] -translate-x-1/2 transition-all duration-[2000ms] ease-in-out",
              // Initial render animation (only for first slide)
              isInitial && index === 0
                ? isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-[10px] opacity-0"
                : // Regular slide transitions
                current === index
                ? "opacity-100"
                : "opacity-0"
            )}
            key={index}
          >
            <div className="relative">
              <div className="font-clashdisplay max-w-5xl text-center lg:text-start">
                <p className="text-[#F5F7FA] font-semibold mb-3 md:mb-0 text-3xl sm:text-5xl md:text-6xl lg:text-[80px] xl:text-8xl">
                  {slide.title[0]}
                </p>
                <p className="hero__title-2 sm:text-5xl md:text-6xl lg:text-[80px] xl:text-8xl text-[#b4fe00]">
                  {slide.title[1]}
                </p>
              </div>
            </div>

            <p className="font-satoshi text-center lg:text-start text-slate-100 text-sm md:text-base lg:text-lg xl:text-xl mt-4 lg:mt-6">
              {slide.subtitle}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

const slides = [
  {
    title: ["EFFICIENT ASSET", "REGISTER PREPARATION"],
    subtitle:
      "Streamline asset tracking, valuation and compliance with our expert solutions.",
  },
  {
    title: ["PHYSICAL ASSET", "TAGGING AND BARCODING"],
    subtitle: "State-of-the-art bar coding with serialized aluminum tags.",
  },
  {
    title: ["ACCRUAL BASIS OF", "ACCOUNTING"],
    subtitle:
      "Essential for enhanced transparency and improved financial reporting.",
  },
];

const metrics = [
  {
    count: 100,
    modifier: "M+",
    name: "Assets Tagged",
  },
  {
    count: 10,
    modifier: "+",
    name: "Firms & ministries managed",
  },
  {
    count: 100,
    modifier: "+",
    name: "Accounts Managed",
  },
];
