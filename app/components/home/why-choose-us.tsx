import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "react-router";
import { cn } from "~/lib/utils";
import { DesktopTower, ListChecks, SealCheck, Target, TrendUp } from "../icons";
import AnimatedContent from "../reactbits/animated-content";
import SpotlightCard from "../reactbits/spotlight-card";
import { Button } from "../ui/button";

export default function WhyChooseUs() {
  return (
    <>
      <div className="px-5 py-10 md:pt-20 md:pb-20 md:p-10 bg-slate-900 text-black">
        <div className="max-w-screen-xl mx-auto">
          <AnimateVertical>
            <h2 className="font-fredoka font-normal text-white text-center text-xl md:text-3xl lg:text-[40px] max-w-2xl mx-auto">
              Why Clients Trust Us: Personalized Asset Management for Long-Term
              Success
            </h2>
          </AnimateVertical>

          <div className="text-lg grid grid-cols-1 md:grid-cols-3 gap-4 pt-10 md:pt-20">
            {items.map((item, index) => (
              <SpotlightCard
                className={cn(
                  "bg-slate-900/10 rounded-lg hover:bg-slate-800/40 backdrop-blur-xl border-slate-900/30 hover:shadow-[0_4px_16px_rgba(0,0,0,0.1)] transition-all duration-500",
                  (index + 1) % 4 === 0 || (index + 1) % 4 === 1
                    ? "md:col-span-2"
                    : "col-span-1"
                )}
                spotlightColor="rgba(0, 128, 128, .0)"
                key={index}
              >
                <AnimateVertical>
                  <div className="">
                    <item.icon className="fill-[#b4fe00]" />
                  </div>
                  <p className="text-white font-fredoka text-md lg:text-xl my-4">
                    {item.name}
                  </p>
                  <p className="font-satoshi font-medium text-base text-gray-400">
                    {item.description}
                  </p>
                </AnimateVertical>
              </SpotlightCard>
            ))}
            <AnimateVertical>
              <SpotlightCard
                className="bg-slate-900/10 rounded-lg hover:bg-slate-800/60 backdrop-blur-xl border-slate-900/30 hover:shadow-[0_4px_16px_rgba(0,0,0,0.1)] transition-all duration-500"
                spotlightColor="rgba(0, 128, 128, .0)"
              >
                <p className="font-fredoka text-slate-100 text-md lg:text-2xl my-4">
                  Explore the{" "}
                  <span className="text-[#b4fe00]">
                    key benefits of comprehensive asset register
                  </span>{" "}
                  in detail.
                </p>

                <Button
                  variant="link"
                  className="mt-12 text-white hover:text-green-500 group"
                  asChild
                >
                  <Link to="/dev-services#asset-register-benefits">
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

function AnimateVertical({
  delay = 0,
  children,
}: {
  delay?: number;
  children: ReactNode;
}) {
  return (
    <AnimatedContent distance={80} delay={delay}>
      {children}
    </AnimatedContent>
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
