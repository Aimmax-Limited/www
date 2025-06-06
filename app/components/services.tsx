import { Link } from "react-router";
import {
  ArrowSquareOut,
  Barcode,
  Calculator,
  ChartLineDown,
  PresentationChart,
  Register,
} from "./icons";
import ShinyText from "./reactbits/shiny-text";
import SpotlightCard from "./reactbits/spotlight-card";
import { Button } from "./ui/button";

const services = [
  {
    name: "Comprehensive Asset Register Preparation",
    description:
      "Ensures compliance to policies and guide Ministry asset and liability reporting templates according to Treasury policy guidelines.",
    icon: Register,
  },
  {
    name: "Physical Asset Tagging and Barcoding",
    description:
      "State-of-the-art bar coding using serialized aluminum tags and full-color logos to enable efficient tracking, verification, and audit readiness.",
    icon: Barcode,
  },
  {
    name: "Accrual-Based Accounting Support",
    description:
      "Expert support for transitioning to accrual-based accounting, enabling accurate recognition of assets, liabilities, and expenses in line with IPSAS and Treasury guidelines.",
    icon: Calculator,
  },
  {
    name: "Asset Tracking and Reconciliation",
    description:
      "End-to-end asset tracking and reconciliation services to ensure real-time visibility, accurate inventory records, and alignment between physical assets and financial registers.",
    icon: PresentationChart,
  },
  {
    name: "Maintenance and Depreciation Management",
    description:
      "Solutions to track asset lifecycles, schedule servicing, and ensure accurate valuation for financial and audit reporting.",
    icon: ChartLineDown,
  },
  // {
  //   name: "Asset Valuation And Fair Market Assessment",
  //   description:
  //     "Professional asset valuation services to determine fair market value, ensuring accurate financial reporting and compliance with government and international standards.",
  //   icon: StackPlus,
  // },
];

export default function Services() {
  return (
    <>
      <div className="py-10 bg-[#B0C4DE]">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="font-clashdisplay font-medium text-xl md:text-3xl lg:text-4xl mb-3 md:mb-3 lg:mb-5">
            OUR SERVICES
          </h2>

          <div className="text-white font-satoshi font-medium text-lg grid grid-cols-3 gap-4">
            {services.map((service, index) => (
              <SpotlightCard
                className=""
                spotlightColor="rgba(0, 128, 128, 1)"
                key={index}
              >
                <div className="">
                  <service.icon />
                </div>
                <p className="font-semibold text-md lg:text-xl my-4">
                  {service.name}
                </p>
                <p className="text-base text-gray-400">{service.description}</p>
              </SpotlightCard>
            ))}
            <SpotlightCard
              className="bg-neutral-100/25 border-0 backdrop-blur-lg"
              spotlightColor="rgba(0, 128, 128, .4)"
            >
              <p className="font-semibold text-slate-900 text-md lg:text-2xl my-4">
                <span className="text-blue-900">Learn more </span> about the
                services we offer
              </p>

              <Button
                variant={"outline"}
                size={"lg"}
                className="group h-14 mt-6 bg-[#0A192F] hover:bg-slate-900 border-0 ring-0 outline-0 text-center text-base rounded-[20px]"
                asChild
              >
                <Link to="/" className="rounded-[20px]">
                  <ShinyText
                    text="More on Services"
                    className="group-hover:text-white hover:bg-slate-900"
                  />
                  <ArrowSquareOut size={"24"} />
                </Link>
              </Button>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </>
  );
}
