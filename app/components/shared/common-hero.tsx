import { cn } from "~/lib/utils";

export default function CommonHero({
  title,
  className,
  ...props
}: { title: string } & React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "h-[200px] md:h-[350px] lg:h-[400px] xl:h-[450px] bg-[url('/backgrounds/blue-sky.jpg')] bg-top-left flex items-center justify-start sticky top-0 z-10",
        className
      )}
      {...props}
    >
      <h1 className="font-clashdisplay font-medium text-foreground-1 text-3xl sm:text-5xl md:text-6xl lg:text-[80px] xl:text-8xl max-w-screen-xl mx-auto">
        {title}
      </h1>
      <AimmaxOverlay />
    </div>
  );
}

function AimmaxOverlay({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "absolute left-1/2 -translate-x-1/2 w-full text-center text-foreground-1 text-[78px] sm:text-[140px] md:text-[160px] lg:text-[215px] xl:text-[290px] 2xl:text-[340px] 3xl:text-[400px] font-clashdisplay font-bold -z-10 opacity-10",
        className
      )}
      {...props}
    >
      AIMMAX
    </div>
  );
}
