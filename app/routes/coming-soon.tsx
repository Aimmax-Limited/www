import { Mail, PhoneCall } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import ShinyText from "~/components/shared/reactbits/shiny-text";
import { cn } from "~/lib/utils";

export default function ComingSoon() {
  const BP_HEIGHT = 800;

  const [height_, setHeight] = useState(0);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHeight(window.innerHeight);
    }
  }, []);

  return (
    <div className="min-h-dvh bg-[#0A192F] text-white font-clashdisplay">
      <div className="h-full max-w-screen-md md:max-w-screen-lg mx-auto flex flex-col items-center">
        <div
          className={cn(height_ >= BP_HEIGHT ? "mt-28" : "mt-14", "md:mt-28")}
        >
          <h1
            className="font-semibold text-center text-4xl md:text-6xl lg:text-8xl uppercase"
            style={{ wordSpacing: "30px" }}
          >
            Aimmax Limited
          </h1>

          <p className="p-2 sm:max-w-screen-xs md:max-w-screen-lg text-base md:text-lg text-center font-satoshi mt-10">
            We specialize in smart, compliant asset management offering
            valuation, barcoding, and custom asset register solutions that
            empower institutions to manage, track and report assets with
            confidence and accuracy.
          </p>
        </div>

        <div
          className={cn(
            height_ >= BP_HEIGHT ? "mt-28" : " mt-10",
            "max-w-screen-ms md:mt-36 flex flex-col justify-between items-center gap-3 font-satoshi"
          )}
        >
          <h2 className="font-clashdisplay font-medium text-4xl">Contact Us</h2>

          <div className="flex items-center gap-2">
            <PhoneCall className="size-5 pt-1" /> +254 721376993
          </div>
          <div className="flex items-center gap-2">
            <PhoneCall className="size-5 pt-1" /> +254 733796154
          </div>
          <div className="flex items-center gap-2">
            <PhoneCall className="size-5 pt-1" /> +254 705863394
          </div>
          <Link
            to="mailto:aimmaxcom@gmail.com"
            className="flex items-center gap-2 hover:underline underline-offset-3"
          >
            <Mail className="size-5 pt-1" />
            <p>aimmaxcom@gmail.com</p>
          </Link>
        </div>

        <div
          className={cn(
            height_ >= BP_HEIGHT ? "mt-28" : "mt-10",
            "md:mt-28 text-xl"
          )}
        >
          <ShinyText text="Full website coming soon"></ShinyText>
        </div>

        <div className="min-h-10 bg-slate-800 fixed bottom-0 left-0 w-full text-center font-satoshi flex justify-center items-center transition-opacity duration-400">
          <div className="max-w-screen-xl mx-auto text-white text-sm md:text-base lg:text-lg ">
            © 2025 Aimmax Company Ltd. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
