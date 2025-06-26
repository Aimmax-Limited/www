import { ChevronRight } from "lucide-react";
import { Link } from "react-router";
import { cn } from "~/lib/utils";
import { AnimateVertical } from "../shared/animate-content";
import {
  DesktopTower,
  ListChecks,
  SealCheck,
  Target,
  TrendUp,
} from "../shared/icons";
import SpotlightCard from "../shared/reactbits/spotlight-card";
import { Button } from "../shared/ui/button";

export default function WhyChooseUs() {
  return (
    <>
      <div className="px-5 py-10 md:pt-20 md:pb-20 md:p-10 bg-background-1 text-foreground-1">
        <div className="max-w-screen-xl mx-auto">
          <AnimateVertical className="max-w-3xl mx-auto">
            <h2 className="style-h2 h2-no-underline text-center tracking-wide">
              Why Clients Trust Us: Personalized Asset Management for Long-Term
              Success
            </h2>
          </AnimateVertical>

          <div className="text-lg grid grid-cols-1 lg:grid-cols-3 gap-4 pt-10 md:pt-20">
            {items.map((item, index) => (
              <SpotlightCard
                className={cn(
                  "card__colors rounded-lg backdrop-blur-xl transition-all duration-500",
                  (index + 1) % 4 === 0 || (index + 1) % 4 === 1
                    ? "lg:col-span-2"
                    : "col-span-1"
                )}
                spotlightColor="rgba(0, 128, 128, .0)"
                key={index}
              >
                <AnimateVertical>
                  <div className="">
                    <item.icon className="fill-accent" />
                  </div>
                  <p className="style-p my-4">{item.name}</p>
                  <p className="style-p p-small text-secondary-foreground-1">
                    {item.description}
                  </p>
                </AnimateVertical>
              </SpotlightCard>
            ))}
            <AnimateVertical>
              <SpotlightCard
                className="card__colors rounded-lg backdrop-blur-xl transition-all duration-500"
                spotlightColor="rgba(0, 128, 128, .0)"
              >
                <p className="font-fredoka text-md lg:text-2xl my-4">
                  Explore the{" "}
                  <span className="text-accent">
                    key benefits of comprehensive asset register
                  </span>{" "}
                  in detail.
                </p>

                <Button
                  variant="link"
                  className="mt-12 text-foreground-1 hover:text-link-hover group"
                  asChild
                >
                  <Link to="/services#asset-register-benefits">
                    Key Benefits of A Comprehensive Asset Register{" "}
                    <ChevronRight className="group-hover:-translate-x-1 transition-all duration-500" />
                  </Link>
                </Button>
              </SpotlightCard>
            </AnimateVertical>
          </div>
        </div>
      </div>
    </>
  );
}

const items = [
  {
    name: "Strict Compliance with Government Standards",
    description:
      "At Aimmax, we prioritize strict adherence to government regulations and standards to ensure your organization remains fully compliant and audit-ready. We align all our processes with the latest Treasury guidelines, International Public Sector Accounting Standards (IPSAS) and the specific asset management policies that govern the public sector.",
    icon: ListChecks,
  },
  {
    name: "Technology-Driven Efficiency",
    description:
      "From serialized aluminum barcodes to IFMIS-compatible digital registers, Aimmax leverages technology to streamline asset tracking, reconciliation and reporting reducing manual work and human error.",
    icon: DesktopTower,
  },
  {
    name: "Accrual Accounting Practice",
    description:
      "Aimmax supports your shift to accrual accounting, ensuring accurate asset recognition and compliance with IPSAS and Treasury standards for improved financial reporting and audits.",
    icon: TrendUp,
  },
  {
    name: "Commitment to Accuracy and Transparency",
    description:
      "By integrating valuation, tagging and reporting into a standardized process, Aimmax ensures that asset data is complete, verifiable and transparent supporting better governance and accountability.",
    icon: Target,
  },
  {
    name: "Proven Public Sector Experience",
    description:
      "With a track record of successful engagements across key ministries and institutions (like the Ministry of Education and the University of Nairobi), Aimmax brings deep understanding of public sector needs and constraints.",
    icon: SealCheck,
  },
];
