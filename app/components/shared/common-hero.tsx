import { cn } from "~/lib/utils";
import Navbar from "./navbar";

export default function CommonHero({
  title,
  className,
  ...props
}: { title: string } & React.ComponentProps<"div">) {
  return (
    <div className={cn("bg-background sticky top-0", className)} {...props}>
      <Navbar className="h-16" dark={false} />
      <div className="w-full mt-0 sm:mt-[2rem] md:mt-[4rem]">
        <h1 className="font-clashdisplay font-medium text-[#21679c] text-center style-h1 max-w-screen-xl mx-auto">
          {title}
        </h1>
      </div>
      <AimmaxOverlay />
    </div>
  );
}

function AimmaxOverlay({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "absolute top-7 sm:top-12 xl:-top-10 left-1/2 -translate-x-1/2 w-full tracking-widest text-center text-[#b2d3e7] opacity-50 text-[78px] sm:text-[140px] md:text-[160px] lg:text-[215px] xl:text-[290px] 2xl:text-[340px] 3xl:text-[400px] font-clashdisplay font-bold -z-10",
        className
      )}
      {...props}
    >
      AIMMAX
    </div>
  );
}
