import { cn } from "~/lib/utils";
import Navbar from "./navbar";
import CountUp from "./reactbits/count-up";
import GradientText from "./reactbits/gradient-text";
import RotatingText from "./reactbits/rotating-text";

export default function Hero({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <>
      <main className={cn("h-dvh px-10 bg-[#0A192F]", className)} {...props}>
        <Navbar />

        <div className="grid grid-cols-2 gap-x-4 xl:h-[700px]">
          <div className="flex items-center">
            <GradientText
              colors={["#B0CFE0", "#4682A9", "#2C3E50", "#0A192F", "#B0CFE0"]}
            >
              <RotatingText
                mainClassName="px-2 sm:px-2 md:px-3 overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                texts={[
                  "EFFICIENT ASSET REGISTER PREPARATION",
                  "PHYSICAL ASSET TAGGING AND BARCODING",
                ]}
                rotationInterval={5000}
                splitBy="lines"
                splitLevelClassName="overflow-hidden text-8xl font-clashdisplay font-semibold"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ type: "spring", damping: 50, stiffness: 400 }}
                // transition={{ type: "keyframes", ease: "easeInOut" }}
                animatePresenceMode="wait"
              />
            </GradientText>
          </div>

          <div></div>
        </div>

        <div className="flex items-center justify-center xl:max-w-screen-lg mx-auto rounded-3xl p-4 bg-slate-100/5 backdrop-blur-3xl hover:shadow-sm shadow-sky-500/30 transition-shadow duration-400 ease-in-out">
          <div className="flex justify-around w-full">
            <GradientText
              childrenClassName="flex items-center gap-x-2 text-xl font-satoshi font-bold"
              colors={["#40FFAA", "#4079FF", "#E0FFF4", "#0A192F", "#40FFAA"]}
            >
              <CountUp
                to={100}
                delay={0}
                duration={1}
                separator=","
                className="text-4xl font-bold"
              />
              <span className="text-4xl font-bold">M+</span>
              Assets Managed
            </GradientText>
            <GradientText
              childrenClassName="flex items-center gap-x-2 text-xl font-satoshi font-bold"
              colors={["#B0C4DE", "#5F9EA0", "#5D8AA8", "#003153", "#B0C4DE"]}
            >
              <CountUp
                to={100}
                delay={0}
                separator=","
                className="text-4xl font-bold"
              />
              Assets Managed
            </GradientText>
            <GradientText
              childrenClassName="flex items-center gap-x-2 text-xl font-satoshi font-bold"
              colors={["#87CEEB", "#4682B4", "#191970", "#4169E1", "#87CEEB"]}
            >
              <CountUp
                to={100}
                delay={0}
                separator=","
                className="text-4xl font-bold"
              />
              Assets Managed
            </GradientText>
          </div>
        </div>
      </main>
    </>
  );
}
