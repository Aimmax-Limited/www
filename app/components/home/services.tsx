import { ArrowRight, CheckCircle } from "lucide-react";
import { Card } from "~/components/shared/ui/card";
import { AnimateVertical } from "../shared/animate-content";

export default function Services() {
  return (
    <section className="py-10 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimateVertical threshold={0.01} className="max-w-3xl mx-auto">
          <h2 className="style-h2 h2-no-underline tracking-wide text-center">
            Comprehensive Asset Management Solutions Tailored to Your Needs
          </h2>
        </AnimateVertical>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 pt-10 md:pt-20 text-foreground">
          {services.map((service, index) => (
            <AnimateVertical delay={0.3} key={service.name} className="group">
              <ServiceCard service={service} />
            </AnimateVertical>
          ))}
        </div>
      </div>
    </section>
  );
}

interface Service {
  name: string;
  description: string;
  src: string;
  alt: string;
  link: string;
}

interface ServiceCardProps {
  service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <Card className="h-full group relative overflow-hidden bg-background/0 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 pt-0">
      {/* Image Section */}
      <div className="relative overflow-hidden h-48">
        <img
          src={service.src}
          alt={service.alt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

        {/* Floating success icon */}
        <div className="absolute bottom-4 right-4 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
          <CheckCircle className="w-5 h-5 text-green-600" />
        </div>
      </div>

      {/* Content Section */}
      <div className="p-8">
        <h3 className="style-h3 h3-fredoka mb-4 text-blue-500 group-hover:text-blue-600 transition-colors duration-300">
          {service.name}
        </h3>

        <p className="font-satoshi font-medium mb-6 text-foreground style-p p-small mt-4">
          {service.description}
        </p>

        {/* Learn More Link */}
        <div className="flex items-center justify-between">
          <a
            href={service.link}
            className="inline-flex items-center text-blue-500 hover:text-link-hover font-semibold text-sm transition-all duration-300 group-hover:gap-3 gap-2"
          >
            Learn More
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          {/* Professional badge */}
          <div className="flex items-center space-x-1 text-xs text-foreground">
            <div className="w-2 h-2 rounded-full bg-link-hover"></div>
            <span>Professional</span>
          </div>
        </div>
      </div>

      {/* Subtle hover border effect */}
      {/* <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent rounded-lg transition-colors duration-500 pointer-events-none"></div> */}
    </Card>
  );
};

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
    name: "Comprehensive Asset Valuation",
    description:
      "Our valuations ensure compliance with IPSAS and Treasury guidelines, for accurate financial reporting and asset management decisions.",
    src: "/services/valuation.jpg",
    alt: "valuation",
    link: "/services#valuation",
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
