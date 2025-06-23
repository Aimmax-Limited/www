import type { ReactNode } from "react";
import AnimatedContent from "./reactbits/animated-content";

function AnimateVertical({
  delay = 0,
  threshold = 0.1,
  className = "",
  children,
}: {
  delay?: number;
  threshold?: number;
  className?: string;
  children: ReactNode;
}) {
  return (
    <AnimatedContent
      distance={80}
      delay={delay}
      threshold={threshold}
      className={className}
    >
      {children}
    </AnimatedContent>
  );
}

function AnimateHorizontal({
  delay = 0,
  threshold = 0.1,
  children,
}: {
  delay?: number;
  threshold?: number;
  children: ReactNode;
}) {
  return (
    <AnimatedContent
      direction="horizontal"
      distance={80}
      delay={delay}
      threshold={threshold}
      reverse
    >
      {children}
    </AnimatedContent>
  );
}

export { AnimateHorizontal, AnimateVertical };
