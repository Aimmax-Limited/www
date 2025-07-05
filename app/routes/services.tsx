import { useEffect, useRef, useState } from "react";
import {
  AnimateHorizontal,
  AnimateVertical,
} from "~/components/shared/animate-content";
import CommonHero from "~/components/shared/common-hero";
import Footer from "~/components/shared/footer";
import Navbar from "~/components/shared/navbar";

export default function Services() {
  const sectionsRef = useRef<HTMLElement[]>([]);
  const navLinksRef = useRef<HTMLAnchorElement[]>([]);

  // Register refs for sections and nav links
  const registerSectionRef = (element: HTMLElement | null) => {
    if (element) sectionsRef.current.push(element);
  };

  const registerNavLinkRef = (element: HTMLAnchorElement | null) => {
    if (element) navLinksRef.current.push(element);
  };

  // Smooth scrolling and active state management
  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "";
      sectionsRef.current.forEach((section) => {
        const sectionTop = section.offsetTop;
        console.log(window.scrollY);
        if (window.scrollY >= sectionTop + 400) {
          currentSection = `#${section.id}`;
        }
      });

      navLinksRef.current.forEach((link) => {
        link.classList.remove("active", "bg-accent/60");
        if (link.getAttribute("href") === currentSection) {
          link.classList.add("active", "bg-accent/60");
        }
      });
    };

    const handleClick = (e: MouseEvent, link: HTMLAnchorElement) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      const targetSection = document.querySelector(targetId!);

      // Update active class
      navLinksRef.current.forEach((navLink) => {
        navLink.classList.remove("active", "bg-accent/60");
      });
      link.classList.add("active", "bg-accent/60");

      // Smooth scroll to section
      targetSection?.scrollIntoView({
        behavior: "auto",
      });
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Add click event listeners to nav links
    navLinksRef.current.forEach((link) => {
      link.addEventListener("click", (e) => handleClick(e, link));
    });

    // Initialize first link as active
    if (navLinksRef.current[0]) {
      navLinksRef.current[0].classList.add("bg-accent/60");
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      navLinksRef.current.forEach((link) => {
        link.removeEventListener("click", (e) => handleClick(e, link));
      });
    };
  }, []);

  const [showFixedNav, setShowFixedNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const content = document.getElementById("content");
      const contentTop = content?.getBoundingClientRect().top;
      const contentBottom = content?.getBoundingClientRect().bottom;

      contentTop &&
        contentBottom &&
        setShowFixedNav(contentTop <= 0 && contentBottom > 64);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stickyRef = useRef<HTMLElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  useStickyOnScroll(stickyRef, sectionRef);

  return (
    <div className="bg-background" id="top">
      <Navbar
        className={`fixed top-0 left-0 z-50 bg-background-1/85 backdrop-blur-sm transition-all duration-500 h-16 ${
          showFixedNav
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      />

      <CommonHero title="Our Services" />

      <div className="bg-background relative z-20" id="content">
        <div className="py-10 xl:pt-14 px-4 xl:px-0 max-w-screen-xl mx-auto">
          <div className="flex justify-center items-center mb-8">
            <h2 className="style-h2 tracking-wide">
              Current Situation and Problem Statement
            </h2>
          </div>
          <div className="style-p">
            <p>
              Many public institutions manage assets manually, leading to
              several challenges:
            </p>
            <ul className="list-decimal ps-5 lg:ps-10 pt-3">
              {ProblemStatements.map((stmt, index) => (
                <li className="my-3" key={index}>
                  {stmt}
                </li>
              ))}
            </ul>
          </div>

          <p className="style-p pt-10">
            In response to these issues, we provide a range of professional
            services designed to modernize and optimize asset management
            operations.
          </p>
        </div>

        <div className="mx-auto relative" ref={sectionRef}>
          {/* Glassmorphism Side Nav */}
          <nav
            className="absolute z-10 top-12 -translate-x-[100%] right-1/2 h-[500px] w-[400px] p-8 hidden xl:flex flex-col gap-6 bg-background/80 shadow-2xl backdrop-blur-sm rounded-2xl transition-all duration-500"
            ref={stickyRef}
          >
            <h4 className="font-bold font-satoshi text-lg">Our services</h4>
            {services.map((service) => (
              <a
                key={service.name}
                href={`#${service.id}`}
                ref={registerNavLinkRef}
                className="px-4 py-3 rounded-lg font-satoshi font-medium transition-all duration-300 hover:bg-accent/30"
              >
                {service.name}
              </a>
            ))}

            <AimmaxLimited dark={false} />
          </nav>

          {/* Main Content */}
          <main className="flex-1">
            {services.map((service, index) => (
              <section
                key={service.name}
                id={`${service.id}`}
                ref={registerSectionRef}
                className={`mb-8 p-8 ${
                  index % 2 === 0 ? "glass-card-dark" : "glass-card"
                }`}
              >
                <div className="lg:ps-80 max-w-screen-xl mx-auto">
                  {service.component()}
                </div>
              </section>
            ))}
          </main>
        </div>
      </div>

      <div className="relative z-20 bg-background">
        <Footer className="mt-[100px] md:mt-[200px] lg:mt-[250px]" />
      </div>
    </div>
  );
}

function TaggingAndBarcoding() {
  return (
    <>
      <AnimateVertical className="flex justify-center items-center mb-6 md:mb-10 lg:mb-14 xl:mb-16">
        {/* <Barcode className="fill-accent me-5" /> */}
        <h2 className="style-h2 tracking-wide">
          Physical Asset Tagging and Barcoding
        </h2>
      </AnimateVertical>

      <AnimateVertical>
        <div className="relative mb-8">
          <p className="text-justify style-p">
            Using serialized aluminum barcode tags with full-color GK logos, we
            physically label each asset with a unique identifier. This allows
            for accurate and seamless scanning during audits and routine asset
            verification. Our barcoding system integrates smoothly with digital
            asset registers and financial management platforms like{" "}
            <StyledInlineText
              text="IFMIS"
              className="font-bold brush-highlight"
            />
            , enabling real-time tracking across locations and departments.
          </p>
        </div>
      </AnimateVertical>

      <AnimateVertical className="style-p">
        <p>Key Features: </p>

        <ol className="list-decimal ps-5 lg:ps-10 pt-3">
          {BarcodeKeyFeatures.map((feature, index) => (
            <li
              className={`my-3 ${index < 2 && "xl:max-w-[850px]"}`}
              key={index}
            >
              <span className="font-bold">{feature.name}:</span>{" "}
              {feature.description}
            </li>
          ))}
        </ol>
      </AnimateVertical>
    </>
  );
}

function Valuation() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <AnimateVertical className="flex justify-center items-center mb-6 md:mb-10 lg:mb-14 xl:mb-16">
          <h2 className="style-h2 underline-dark tracking-wide">
            Comprehensive Asset Valuation
          </h2>
        </AnimateVertical>

        <AnimateVertical>
          <div className="relative mb-8">
            <p className="text-justify style-p">
              Aimmax Company Ltd offers comprehensive Valuation Services to help
              organizations determine the true worth of their assets in
              compliance with{" "}
              <StyledInlineText
                text="International Public Sector Accounting Standards (IPSAS) "
                className="font-bold brush-highlight"
              />
              and Government of Kenya (GOK) Treasury policies. Our team of
              certified and experienced valuers conducts precise valuations for
              fixed assets, land, buildings, machinery, vehicles and ICT
              equipment, ensuring transparency and regulatory compliance.
            </p>
          </div>
        </AnimateVertical>

        <AnimateVertical className="style-p">
          <p>Key Features: </p>

          <ol className="list-decimal ps-5 lg:ps-10 pt-3">
            {ValuationKeyFeatures.map((feature, index) => (
              <li
                className={`my-3 ${index < 2 && "xl:max-w-[850px]"}`}
                key={index}
              >
                <span className="font-bold">{feature.name}:</span>{" "}
                {feature.description}
              </li>
            ))}
          </ol>
        </AnimateVertical>
      </div>
    </>
  );
}

function AssetRegisterPreparation() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <AnimateVertical className="mb-6 md:mb-10 lg:mb-14 xl:mb-16 flex items-center justify-center">
          {/* <Register className="fill-accent me-5" /> */}
          <h2 className="style-h2 underline-dark tracking-wide">
            Comprehensive Assets Register Preparation
          </h2>
        </AnimateVertical>

        <AnimateVertical>
          <div className="relative">
            <p className=" style-p text-justify">
              At Aimmax Company Ltd, we specialize in delivering accurate and
              fully compliant Comprehensive Asset Register Preparation services
              that support both public and private sector organizations in
              achieving effective asset management and financial accountability.
              <br /> <br />
              Our process involves the systematic identification, classification
              and documentation of all fixed and movable assets, ensuring that
              every item is properly accounted for and tracked throughout its
              lifecycle. Each register is prepared in alignment{" "}
              <StyledInlineText
                text="Treasury’s asset policy guidelines"
                className="font-bold brush-highlight brush-dark"
              />{" "}
              and is{" "}
              <StyledInlineText
                text="fully compatible with the IFMIS system"
                className="font-bold brush-highlight brush-dark"
              />{" "}
              .
              <br /> <br />
              Our asset registers are provided in both soft and hard copy
              formats, designed for direct upload into financial management
              systems. They are customized to suit each client’s structure and
              operational needs, and ideal for government ministries,
              departments, state agencies, universities and corporations
              transitioning from manual or outdated systems.
              <br /> <br />
            </p>
          </div>
        </AnimateVertical>

        <AnimateVertical>
          <div className="mb-10 mt-4 style-p">
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
              className="style-h3 tracking-wide mb-5"
              id="asset-register-benefits"
            >
              Key Benefits of a Comprehensive Assets Register
            </h3>
          </AnimateVertical>

          <ul className="style-p list-decimal ps-5 lg:ps-10 max-w-6xl xl:text-justify">
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
    </>
  );
}

function AccrualAccounting() {
  return (
    <>
      <AnimateVertical className="flex justify-center items-center mb-6 md:mb-10 lg:mb-14 xl:mb-16">
        <h2 className="style-h2">Expert Accrual-Based Accounting Support</h2>
      </AnimateVertical>

      <AnimateVertical>
        <div className="style-p text-justify">
          <div className="relative">
            <p className="pb-8">
              Transitioning from cash-based to accrual-based accounting is a
              crucial step for organizations seeking improved financial
              accuracy. At Aimmax Company Ltd, we provide expert support to help
              institutions, especially within the public sector, adopt and
              implement accrual accounting in full compliance with{" "}
              <StyledInlineText
                text="IPSAS (International Public Sector Accounting Standards)"
                className="font-bold brush-highlight"
              />
              . Our team works efficiently to ensure that all assets,
              liabilities, revenues, and expenses are recorded when they are
              incurred not just when cash is exchanged. This provides a true and
              complete picture of your financial position.
            </p>
          </div>
          <div className="md:mt-10">
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
        </div>
      </AnimateVertical>
    </>
  );
}

function AimmaxLimited({ dark = true }: { dark?: boolean }) {
  return (
    <div
      className={`flex justify-center items-center mt-3 max-w-[300px] pointer-events-none`}
    >
      <div className="text-center font-mono block">
        <p className="font-normal text-xl ">AIMMAX LIMITED</p>
        <p className="text-xs">Assets Management</p>
      </div>
    </div>
  );
}

function useStickyOnScroll(
  stickyRef: React.RefObject<HTMLElement | null>,
  sectionRef: React.RefObject<HTMLDivElement | null>
) {
  useEffect(() => {
    const handleScroll = () => {
      if (!stickyRef.current || !sectionRef.current) return;

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const sticky = stickyRef.current;

      const sectionTop = sectionRect.top;
      const sectionBottom = sectionRect.bottom;
      const stickyHeight = sticky.offsetHeight + 160;

      if (sectionTop <= 15 && sectionBottom >= stickyHeight) {
        sticky.classList.add("fixed", "top-30");
        sticky.classList.remove("absolute", "bottom-10", "top-auto");
      } else if (sectionBottom < stickyHeight) {
        sticky.classList.remove("fixed", "top-30");
        sticky.classList.add("absolute", "bottom-10", "top-auto");
      } else {
        sticky.classList.remove("fixed", "top-30", "bottom-10");
        sticky.classList.add("absolute");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [stickyRef, sectionRef]);
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

const services = [
  {
    name: "Comprehensive Asset Register Preparation",
    id: "asset-register-preparation",
    component: AssetRegisterPreparation,
  },
  {
    name: "Physical Asset Tagging and Barcoding",
    id: "barcode-tagging",
    component: TaggingAndBarcoding,
  },
  {
    name: "Comprehensive Asset Valuation",
    id: "valuation",
    component: Valuation,
  },
  {
    name: "Expert Accrual-Based Accounting Support",
    id: "accrual-accounting",
    component: AccrualAccounting,
  },
];

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
  {
    name: "Performance Contracting",
    description:
      "Our solution is designed to meet the stringent requirements of the Treasury asset policy management guidelines for the public sector's performance contracting cycle of 2024/2025.",
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

const ValuationKeyFeatures = [
  {
    name: "Fair Market Value Assessment",
    description:
      "We determine the current market value of assets, considering factors such as age, condition, depreciation and market trends.",
  },
  {
    name: "Compliance with IPSAS & GOK Guidelines",
    description:
      "Our valuations adhere to IPSAS standards, which require assets to be recorded at cost or fair value under accrual accounting.",
  },
  {
    name: "Revaluation & Depreciation Tracking",
    description:
      "Periodic revaluations to reflect changes in asset value over time.",
  },
  {
    name: "Support for Financial & Audit Processes",
    description:
      "Provides documented evidence for audit trails and financial statements helping organizations avoid over- or under-valuation in accounting records.",
  },
  {
    name: "Insurance & Disposal Advisory",
    description:
      "Ensures assets are adequately insured based on correct valuations and guides asset disposal decisions by establishing realistic market prices",
  },
];
