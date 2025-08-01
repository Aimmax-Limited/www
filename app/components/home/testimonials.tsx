import type { EmblaCarouselType } from "embla-carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { cn } from "~/lib/utils";
import { AnimateVertical } from "../shared/animate-content";
import { Quote } from "../shared/icons";
import { Button } from "../shared/ui/button";

export default function Testimonials() {
  return (
    <div className="pb-24 bg-background-1 text-foreground-1">
      <AnimateVertical className="max-w-screen-xl mx-auto px-5 flex flex-col items-center">
        <h2 className="text-secondary-foreground style-h3 text-center mb-3 md:mb-3 lg:mb-5">
          Our clients share their experiences working with us
        </h2>

        <Quote size="40pt" className="fill-accent/90 mb-5" />

        <EmblaCarouselAutoPlay slides={testimonials} options={{ loop: true }} />
        <EmblaCarouselAutoScroll logos={testimonials} className="mt-10" />
      </AnimateVertical>
    </div>
  );
}

const EmblaCarouselAutoPlay = ({
  slides,
  options,
  className,
  ...props
}: {
  slides: {
    clientName: string;
    clientLogo: string;
    text: string;
  }[];
  options: {};
} & React.ComponentProps<"section">) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ delay: 7000, stopOnInteraction: false }),
  ]);

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, []);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick
  );

  return (
    <section className={cn("embla relative", className)} {...props}>
      <div className="embla__viewport " ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide " key={index}>
              <div className="flex justify-center">
                <p className="max-w-screen-lg pointer-events-none text-center font-fredoka tracking-wide leading-relaxed lg:text-xl my-4">
                  "{slide.text}"
                </p>
              </div>

              <div className="flex flex-col items-center mt-5">
                {/* <img
                  src={slide.clientLogo}
                  alt={`${slide.clientName} Logo`}
                  className="h-20"
                /> */}
                <p className="text-secondary-foreground text-lg font-fredoka font-bold italic mt-3">
                  {slide.clientName}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-5 md:mt-10">
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot bg-secondary/10 backdrop-blur-2xl".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

type UseDotButtonType = {
  selectedIndex: number;
  scrollSnaps: number[];
  onDotButtonClick: (index: number) => void;
};

const useDotButton = (
  emblaApi: EmblaCarouselType | undefined,
  onButtonClick?: (emblaApi: EmblaCarouselType) => void
): UseDotButtonType => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
      if (onButtonClick) onButtonClick(emblaApi);
    },
    [emblaApi, onButtonClick]
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  };
};

type PropType = React.ComponentPropsWithRef<"button">;

const DotButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props;

  return <Button {...restProps}>{children}</Button>;
};

export const EmblaCarouselAutoScroll = ({
  logos,
  className,
  ...props
}: {
  logos: {
    clientName: string;
    clientLogo: string;
  }[];
} & React.ComponentProps<"div">) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    AutoScroll({
      playOnInit: true,
      stopOnMouseEnter: true,
      stopOnFocusIn: false,
      stopOnInteraction: false,
      startDelay: 0,
      speed: 1,
    }),
  ]);

  return (
    <div className={cn("w-full", className)} {...props}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {logos.map((logo, index) => (
            <div className="flex-[0_0_50%] md:flex-[0_0_35%]" key={index}>
              <img
                src={logo.clientLogo}
                alt={`${logo.clientName} Logo`}
                className="h-20 md:h-32"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const testimonials = [
  {
    clientLogo: "/client-logos/uon-seeklogo.png",
    clientName: "University Of Nairobi",
    text: "Aimmax helped us build a compliant, IFMIS-ready asset register with accurate tagging and valuation. Their expertise made our transition to accrual accounting smooth and improved audit outcomes significantly. Their support made our shift to accrual accounting smooth and significantly improved audit outcomes.",
  },
  {
    clientLogo: "/client-logos/icea-lion-logo.png",
    clientName: "ICEA Lion",
    text: "Working with Aimmax streamlined our entire asset management process. Their barcoding system made verification simple and the register they delivered aligned perfectly with IPSAS and Treasury guidelines. Their team was efficient, knowledgeable and committed to delivering results.",
  },
  {
    clientLogo: "/client-logos/kenyatta-university-seeklogo.png",
    clientName: "Kenyatta University",
    text: "Aimmax delivered a complete and compliant asset register that has greatly improved how we track and manage our assets. Their attention to detail, from tagging to valuation, ensured every asset was accounted for. We now have better transparency, faster audits and a reliable system in place.",
  },
  {
    clientLogo: "/client-logos/moe-logo.png",
    clientName: "Ministry of Education",
    text: "Aimmax Company Ltd provided us with a reliable and accurate asset register that has transformed our asset tracking and reporting. Their barcoding and valuation services were precise and fully aligned with government policies. We now operate with greater efficiency, accountability and confidence in our asset data.",
  },
];
