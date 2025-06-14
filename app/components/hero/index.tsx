import { useEffect, useState } from "react";
import { Link } from "react-router";
import { cn } from "~/lib/utils";
import Navbar from "../navbar";
import CountUp from "../reactbits/count-up";
import { Button } from "../ui/button";
import AccountingSummation from "./accounting-animation";
import AssetRegisterAnimation from "./asset-register-animation";
import BarcodeAnimation from "./barcode-animation";

export default function Hero({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <>
      <main
        className={cn(
          "h-dvh max-h-[1080px] px-10 bg-slate-800 z-10 relative",
          className
        )}
        {...props}
      >
        <Navbar className="relative z-50" />

        <div className="relative h-[500px] max-w-[1400px] w-full mx-auto">
          <Text />

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

        <div className="max-w-[1400px] w-full mx-auto mt-5 font-clashdisplay tracking-wider group">
          <Button
            size={"lg"}
            variant={"outline"}
            className="group h-12 max-w-3xs flex items-center text-lg text-gray-50 bg-white/5 hover:bg-[#64FFDA] backdrop-blur-xl rounded-xl border border-white/30 shadow-[inset_0_1px_2px_rgba(255,255,255,1)] animate-bounce hover:animate-none"
            asChild
          >
            <Link to="/">Get in touch with us</Link>
          </Button>
        </div>

        <div className="absolute bottom-16 end-1/2 translate-x-[50%] flex items-center justify-center w-full xl:max-w-screen-lg mx-auto">
          <div className="text-slate-300 flex justify-around w-full font-satoshi font-bold">
            {metrics.map((metric, index) => (
              <div className="flex items-center gap-x-1" key={index}>
                <div>
                  <CountUp
                    to={metric.count}
                    delay={0}
                    duration={1}
                    separator=","
                    className="text-4xl font-bold text-[#CCD6F6]"
                  />
                  {metric.modifier && (
                    <span className="text-4xl font-bold">
                      {metric.modifier}
                    </span>
                  )}
                </div>
                <p className="text-xl">{metric.name}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

function Text() {
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
      setTimeout(() => setIsLoaded(true), 300);
    } else {
      window.addEventListener("load", () => {
        setTimeout(() => setIsLoaded(true), 300);
      });
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <>
      <div className="h-full w-full flex justify-start items-center">
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
              <div className="font-clashdisplay max-w-5xl">
                <p className="text-[#F5F7FA] text-start font-semibold mb-3 md:mb-0 text-3xl sm:text-5xl md:text-6xl lg:text-[80px] xl:text-8xl">
                  {slide.title[0]}
                </p>
                <p className="text-3xl sm:text-5xl md:text-6xl lg:text-[80px] xl:text-8xl text-[#b4fe00]">
                  {slide.title[1]}
                </p>
              </div>
            </div>

            <p className="font-satoshi text-slate-100 text-sm md:text-base lg:text-lg xl:text-xl mt-7">
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
    modifier: "M+",
    name: "Assets Tagged",
  },
];
