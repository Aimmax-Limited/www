import { Link } from "react-router";
import {
  ArrowSquareOut,
  DesktopTower,
  ListChecks,
  SealCheck,
  Target,
  TrendUp,
} from "./icons";
import ShinyText from "./reactbits/shiny-text";
import SpotlightCard from "./reactbits/spotlight-card";
import { Button } from "./ui/button";

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

export default function WhyChooseUs() {
  return (
    <>
      <div className="py-10 bg-[#B0C4DE]">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="font-clashdisplay font-medium text-xl md:text-3xl lg:text-4xl mb-3 md:mb-3 lg:mb-5">
            WHY CHOOSE US?
          </h2>

          <p className="font-satoshi text-justify text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-xl mb-5 ms-2">
            In a landscape where precision, compliance and accountability are
            critical, choosing the right asset management partner can make all
            the difference. At{" "}
            <span className="font-bold text-md">Aimmax Company Ltd</span>, we
            combine deep industry expertise, cutting-edge technology and an
            unwavering commitment to excellence to deliver solutions that enable
            smarter decisions, greater transparency and long-term value for your
            organization. <br /> <br />
            Here’s what sets us apart and why clients across sectors continue to
            choose Aimmax:
          </p>

          <div className="text-white font-satoshi font-medium text-lg grid grid-cols-3 gap-4">
            {items.map((item, index) => (
              <SpotlightCard
                className={
                  (index + 1) % 4 === 0 || (index + 1) % 4 === 1
                    ? "col-span-2"
                    : ""
                }
                spotlightColor="rgba(0, 128, 128, .4)"
                key={index}
              >
                <div className="">
                  <item.icon />
                </div>
                <p className="font-semibold text-md lg:text-xl my-4">
                  {item.name}
                </p>
                <p className="text-base text-gray-400">{item.description}</p>
              </SpotlightCard>
            ))}
            <SpotlightCard
              className="bg-neutral-100/25 border-0 backdrop-blur-lg"
              spotlightColor="rgba(0, 128, 128, .2)"
            >
              <p className="font-semibold text-slate-900 text-md lg:text-2xl my-4">
                Click below to explore our{" "}
                <span className="text-blue-900">
                  asset reporting guidelines
                </span>{" "}
                in detail.
              </p>

              <Button
                variant={"outline"}
                size={"lg"}
                className="group h-14 mt-6 bg-[#0A192F] hover:bg-slate-900 border-0 ring-0 ring-blue-800 hover:ring-2 hover:ring-offset-1 outline-0 text-center text-base rounded-[20px]"
                asChild
              >
                <Link to="/" className="rounded-[20px]">
                  <ShinyText
                    text="Asset Reporting Guidlines"
                    className="text-white/80 group-hover:text-white group-hover:bg-slate-900"
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
