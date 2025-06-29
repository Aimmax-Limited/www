import { ChevronRight } from "lucide-react";
import { Link } from "react-router";
import { AnimateVertical } from "../shared/animate-content";
import { Button } from "../shared/ui/button";

export default function Services() {
  return (
    <>
      <div className="px-5 py-10 md:pt-20 md:pb-20 md:p-10">
        <div className="max-w-screen-xl mx-auto">
          <AnimateVertical threshold={0.01} className="max-w-3xl mx-auto">
            <h2 className="style-h2-special h2-no-underline tracking-wide text-center">
              Comprehensive Asset Management Solutions Tailored to Your Needs
            </h2>
          </AnimateVertical>

          <AnimateVertical delay={0.3}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-10 md:pt-20">
              {services.map((service, index) => (
                <div className="text-center flex flex-col" key={index}>
                  <img
                    src={service.src}
                    alt={service.alt}
                    className="aspect-video"
                  />

                  <div className="max-w-[400px] mx-auto">
                    <p className="style-h3 h3-fredoka mt-8">{service.name}</p>
                    <p className="style-p p-small mt-4">
                      {service.description}
                    </p>
                  </div>

                  <Button
                    variant="link"
                    className="mt-8 text-foreground hover:text-link-hover group"
                    asChild
                  >
                    <Link to={service.link}>
                      Learn More{" "}
                      <ChevronRight className="group-hover:-translate-x-1 transition-all duration-500" />
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </AnimateVertical>
        </div>
      </div>
    </>
  );
}

const services = [
  {
    name: "Comprehensive Asset Register Preparation",
    description:
      "Ensures compliance to policies and guides asset and liability reporting templates according to Treasury policy guidelines.",
    src: "/services/register-preparation.jpg",
    alt: "register",
    link: "/services#asset-register-preparation",
  },
  {
    name: "Physical Asset Tagging and Barcoding",
    description:
      "State-of-the-art bar coding using serialized aluminum tags and full-color logos that ensure your assets are easily identifiable and trackable.",
    src: "/services/barcode.jpg",
    alt: "barcode",
    link: "/services#barcode-tagging",
  },
  {
    name: "Expert Accrual-Based Accounting Support",
    description:
      "Expert support that ensures accurate recognition of assets, liabilities and expenses in line with IPSAS and Treasury guidelines.",
    src: "/services/accounting.jpeg",
    alt: "accounting",
    link: "/services#accrual-accounting",
  },
];
