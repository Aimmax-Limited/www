import AccountingSummation from "~/components/home/hero/accounting-animation";
import AssetRegisterAnimation from "~/components/home/hero/asset-register-animation";
import BarcodeAnimation from "~/components/home/hero/barcode-animation";
import {
  AnimateHorizontal,
  AnimateVertical,
} from "~/components/shared/animate-content";
import Footer from "~/components/shared/footer";
import { Barcode, Calculator, Register } from "~/components/shared/icons";
import Navbar from "~/components/shared/navbar";

export default function Services() {
  return (
    <div className="bg-white" id="top">
      <Navbar
        className={`fixed top-0 left-0 z-50 bg-[#0A192F]/95 backdrop-blur-sm h-16 shadow-[0_4px_14px_rgba(0,0,0,0.4)]`}
      />

      <div className="mt-16 h-[200px] md:h-[350px] lg:h-[500px] bg-[url('/backgrounds/blue-sky.jpg')] bg-top-left flex items-center justify-start sticky top-0 z-10">
        <h1 className="font-clashdisplay font-medium text-foreground-1 text-3xl sm:text-5xl md:text-6xl lg:text-[80px] xl:text-8xl max-w-screen-xl mx-auto">
          Our Services
        </h1>
      </div>

      <div className="relative z-20 bg-background">
        <div className="py-10 px-4 xl:px-0 max-w-screen-xl mx-auto">
          <h2 className="font-fredoka font-medium lg:font-normal text-center text-2xl md:text-3xl lg:text-[40px] mb-8">
            Current Situation and Problem Statement
          </h2>
          <p className="text-lg font-satoshi font-medium">
            Many public institutions manage assets manually, leading to several
            challenges:
          </p>
          <ul className="list-decimal ps-5 lg:ps-10 pt-3 font-satoshi font-medium">
            {ProblemStatements.map((stmt, index) => (
              <li className="my-3" key={index}>
                {stmt}
              </li>
            ))}
          </ul>

          <p className="text-lg font-satoshi font-medium pt-10">
            In response to these issues, we provide a range of professional
            services designed to modernize and optimize asset management
            operations.
          </p>
        </div>

        <div
          className="py-10 xl:py-16 px-4 xl:px-0 max-w-screen-xl mx-auto"
          id="barcode-tagging"
        >
          <AnimateVertical>
            <h2 className="font-fredoka font-medium lg:font-normal text-2xl md:text-3xl lg:text-[40px] mb-6 md:mb-10 lg:mb-14 xl:mb-16 flex justify-center items-center">
              <Barcode className="fill-accent me-5" /> Physical Asset Tagging
              and Barcoding
            </h2>
          </AnimateVertical>

          <AnimateVertical>
            <div className="relative mb-8">
              <p className="xl:max-w-[800px] text-justify text-lg font-satoshi font-medium">
                Using serialized aluminum barcode tags with full-color GK logos,
                we physically label each asset with a unique identifier. This
                allows for accurate and seamless scanning during audits and
                routine asset verification. Our barcoding system integrates
                smoothly with digital asset registers and financial management
                platforms like{" "}
                <StyledInlineText text="IFMIS" className="font-bold" />,
                enabling real-time tracking across locations and departments.
              </p>
              <div className="hidden xl:block absolute right-0 -top-10">
                <BarcodeAnimation />
              </div>
            </div>
          </AnimateVertical>

          <AnimateVertical>
            <p className="text-lg font-satpshi font-medium">Key Features: </p>

            <ol className="list-decimal ps-5 lg:ps-10 pt-3">
              {BarcodeKeyFeatures.map((feature, index) => (
                <li className="my-3" key={index}>
                  <span className="font-bold">{feature.name}:</span>{" "}
                  {feature.description}
                </li>
              ))}
            </ol>
          </AnimateVertical>
        </div>

        <div
          className="bg-slate-900 text-foreground-1 py-10 xl:py-16 px-4 xl:px-0"
          id="asset-register-preparation"
        >
          <div className="max-w-screen-xl mx-auto">
            <AnimateVertical>
              <h2 className="font-fredoka font-medium lg:font-normal text-2xl md:text-3xl lg:text-[40px] mb-6 md:mb-10 lg:mb-14 xl:mb-16 flex items-center justify-center">
                <Register className="fill-accent me-5" /> Comprehensive Assets
                Register Preparation
              </h2>
            </AnimateVertical>

            <AnimateVertical>
              <div className="relative">
                <p className="xl:ms-[380px] xl:max-w-[920px] font-satoshi font-medium text-[17px] md:text-lg text-justify">
                  At Aimmax Company Ltd, we specialize in delivering accurate
                  and fully compliant Comprehensive Asset Register Preparation
                  services that support both public and private sector
                  organizations in achieving effective asset management and
                  financial accountability.
                  <br /> <br />
                  Our process involves the systematic identification,
                  classification and documentation of all fixed and movable
                  assets, ensuring that every item is properly accounted for and
                  tracked throughout its lifecycle. Each register is prepared in
                  alignment with Treasury’s asset policy guidelines and is fully
                  compatible with the IFMIS system.
                  <br /> <br />
                  Our asset registers are provided in both soft and hard copy
                  formats, designed for direct upload into financial management
                  systems. They are customized to suit each client’s structure
                  and operational needs, and ideal for government ministries,
                  departments, state agencies, universities and corporations
                  transitioning from manual or outdated systems.
                  <br /> <br />
                </p>

                <div className="hidden xl:block absolute left-0 -top-20">
                  <AssetRegisterAnimation />
                </div>
              </div>
            </AnimateVertical>

            <AnimateVertical>
              <div className="mb-10 mt-4 font-satoshi font-medium text-[17px] md:text-lg">
                The assets register captures detailed information, including:
                <ul className="list-disc ps-5 pt-3 lg:ps-10 grid xl:grid-cols-2">
                  {AssetRegisterDetails.map((detail, index) => (
                    <li className="my-2" key={index}>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateVertical>

            <div>
              <AnimateVertical>
                <h3
                  className="font-fredoka text-start text-xl md:text-xl lg:text-[30px] mb-5"
                  id="asset-register-benefits"
                >
                  Key Benefits of a Comprehensive Assets Register
                </h3>
              </AnimateVertical>

              <ul className="font-satoshi font-medium text-[17px] md:text-lg list-decimal ps-5 lg:ps-10 max-w-6xl xl:text-justify">
                {AssetRegisterBenefits.map((benefit, index) => (
                  <AnimateHorizontal key={index}>
                    <li className="my-3">
                      <span className="font-bold text-accent/80">
                        {benefit.name}:
                      </span>{" "}
                      {benefit.description}
                    </li>
                  </AnimateHorizontal>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div
          className="py-10 xl:py-16 px-4 xl:px-0 max-w-screen-xl mx-auto"
          id="accrual-accounting"
        >
          <AnimateVertical>
            <h2 className="font-fredoka font-medium lg:font-normal text-center text-2xl md:text-3xl lg:text-[40px] mb-6 md:mb-10 lg:mb-14 xl:mb-16 flex justify-center items-center">
              <Calculator className="fill-accent me-5" /> Expert Accrual-Based
              Accounting Support
            </h2>
          </AnimateVertical>

          <AnimateVertical>
            <div className="font-satoshi font-medium text-[17px] md:text-lg text-justify">
              <div className="relative">
                <p className="pb-8 xl:max-w-[890px]">
                  Transitioning from cash-based to accrual-based accounting is a
                  crucial step for organizations seeking improved financial
                  accuracy. At Aimmax Company Ltd, we provide expert support to
                  help institutions, especially within the public sector, adopt
                  and implement accrual accounting in full compliance with{" "}
                  <StyledInlineText
                    text="IPSAS (International Public Sector Accounting Standards)"
                    className="font-bold"
                  />
                  . Our team works efficiently to ensure that all assets,
                  liabilities, revenues, and expenses are recorded when they are
                  incurred not just when cash is exchanged. This provides a true
                  and complete picture of your financial position.
                </p>

                <div className="hidden xl:block absolute right-0 -top-10">
                  <AccountingSummation
                    className="text-secondary-fg-1"
                    borderColors={["", "border-black/10"]}
                  />
                </div>
              </div>
              Why Choose Accrual Over Cash Basis?
              <ul className="list-disc ps-5 lg:ps-10">
                {WhyAccrual.map((reason, index) => (
                  <li className="my-3" key={index}>
                    <span className="font-bold">{reason.name}:</span>{" "}
                    {reason.description}
                  </li>
                ))}
              </ul>
            </div>
          </AnimateVertical>
        </div>
      </div>

      <div className="relative z-20 bg-background">
        <Footer className="mt-[100px] md:mt-[200px] lg:mt-[250px]" />
      </div>
    </div>
  );
}

function StyledInlineText({
  text,
  className,
  ...props
}: { text: string } & React.ComponentProps<"span">) {
  return (
    <span className={className} {...props}>
      {text}
    </span>
  );
}

const ProblemStatements = [
  "Lack of automated electronic data capture.",
  "Office assets not barcoded or tagged.",
  "Tedious asset verification and validation processes.",
  "Difficulties in merging physical assets with existing inventory registers.",
  "Missing or unavailable store card entry details.",
  "Inaccurate yearly depreciation values for accounting and insurance purposes.",
  "Incomplete asset history from cost to disposal.",
];

const WhyAccrual = [
  {
    name: "Enhanced Transparency",
    description:
      "Discloses the full financial impact of transactions and decisions.",
  },
  {
    name: "Improved Audit Ratings",
    description:
      "Facilitates clean and favorable audit opinions from oversight bodies.",
  },
  {
    name: "Strategic Decision-Making",
    description: "Enables better budgeting, planning and asset utilization.",
  },
];

const AssetRegisterBenefits = [
  {
    name: "Compliance",
    description:
      "Adherence to government policies and asset management indicators ensures that your ministry remains in full compliance with the latest regulations.",
  },
  {
    name: "Framework Development",
    description:
      "Our services guide Ministry asset and liability reporting templates according to Treasury policy guidelines, ensuring accurate and efficient reporting.",
  },
  {
    name: "Standardization",
    description:
      "Establishing a standard asset register format and categorization facilitates seamless data uploading to the IFMIS system, streamlining asset management processes.",
  },
  {
    name: " Source Identification",
    description:
      "Quick identification of asset sources and year of purchase helps in maintaining accurate records and audits.",
  },
  {
    name: "Efficient Verification",
    description:
      "With our advanced tagging and barcoding system, physical identification of assets becomes quick and efficient, reducing time and effort spent on verification.",
  },
  {
    name: "Asset Tracking",
    description:
      "High-value movable equipment such as laptops and PDAs can be tracked effectively, preventing loss and ensuring accountability.",
  },
  {
    name: "Depreciation Tracking",
    description:
      "Our solutions provide accurate tracking of asset depreciation schedules, ensuring precise financial reporting.",
  },
  {
    name: "Maintenance Scheduling",
    description:
      "Regular maintenance and service schedules are easily managed, prolonging the useful life of assets and optimizing performance.",
  },
  {
    name: "Net Book Value Establishment",
    description:
      "Easy establishment of the net book value for asset disposal enhances decision-making processes.",
  },
  {
    name: "Ownership Records",
    description:
      "Comprehensive records of asset ownership are created for GOK departments and projects, ensuring accountability and transparency.",
  },
  {
    name: "Standardized Accounting",
    description:
      "Our services aid the transition from cash basis to accrual accounting according to IPSAS standards, providing a standardized accounting format that meets Treasury guidelines.",
  },
];

const BarcodeKeyFeatures = [
  {
    name: "Quick Identification",
    description:
      "Simplifies asset verification processes, saving time and reducing human error.",
  },
  {
    name: "Supports Lifecycle Tracking",
    description:
      "Enables monitoring from acquisition through maintenance to disposal.",
  },
  {
    name: "Compliance Ready",
    description:
      "Fully aligned with public sector asset management and Treasury guidelines.",
  },
  {
    name: "High Quality Tags",
    description:
      "Weather-resistant, tamper-proof aluminum tags ensure long-lasting identification even in demanding environments.",
  },
  {
    name: "Unique Serial Codes",
    description:
      "Each asset is assigned a unique barcode, eliminating duplication and enhancing accountability.",
  },
  {
    name: "Loss Prevention",
    description:
      "Enhances security and tracking for high-value movable items like laptops, ICT equipment and mobile devices.",
  },
];

const AssetRegisterDetails = [
  "Asset number (both visible and bar coded)",
  "Asset class",
  "Asset source of funds",
  "Asset status",
  "Asset depreciation schedule",
  "Asset category",
  "Asset net book value",
  "Asset user",
  "ICT software information",
  "Buildings data information",
  "Asset location (floor and office room)",
  "Year and value of fresh valuation or revaluation",
  "Asset accumulated depreciation value",
  "Asset description (serial number, model, etc.)",
  "Land data information from various legal documents",
  "Motor vehicle registration documents and status",
  "Asset accounting basis in consistency with international standards",
  "Remarks and any other required data",
];
