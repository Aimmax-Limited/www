import { useEffect, useState } from "react";
import {
  AnimateHorizontal,
  AnimateVertical,
} from "~/components/shared/animate-content";
import CommonHero from "~/components/shared/common-hero";
import Footer from "~/components/shared/footer";
import Navbar from "~/components/shared/navbar";
import SpotlightCard from "~/components/shared/reactbits/spotlight-card";

export default function About() {
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

  return (
    <div className="" id="top">
      <Navbar
        className={`fixed top-0 left-0 z-50 bg-background-1/85 backdrop-blur-sm transition-all duration-500 h-16 ${
          showFixedNav
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      />

      <CommonHero title="About Us" />

      <div className="relative z-20 bg-background" id="content">
        <div className="py-10 xl:py-14 px-4 md:px-8 xl:px-0 max-w-screen-xl mx-auto">
          <AnimateVertical className="flex justify-center">
            <h2 className="style-h2  text-[#e1ddde] mb-8">Company Profile</h2>
          </AnimateVertical>

          <AnimateVertical>
            <p className="style-p text-foreground text-justify">
              Aimmax Company Ltd, a Kenyan firm, consists of experienced
              professionals with diverse expertise. The company has evolved from
              a sole proprietorship to a fully incorporated entity, specializing
              in asset management services and ICT. Aimmax is a trusted service
              provider for government ministries, corporations, and private
              companies, offering comprehensive asset register preparation and
              barcode tagging services.
              <br />
              <br />
              Our solutions are fully aligned with the Treasury asset policy
              management guidelines for the public sector’s 2022/2023
              performance contracting cycle, ensuring compliance and efficiency.
              With a proven track record, Aimmax has successfully served key
              government institutions, including the Ministry of Education,
              Ministry of Foreign Affairs, and the University of Nairobi. Our
              dedication to excellence has earned us trust, positive feedback,
              and long-term partnerships in the industry.
            </p>
          </AnimateVertical>
        </div>

        <div className="py-10 xl:py-14 px-4 md:px-8 xl:px-0 max-w-screen-xl mx-auto grid md:grid-cols-2 gap-10">
          {statements.map((stmt, index) => (
            <SpotlightCard
              className="text-center bg-background/10 rounded-lg backdrop-blur-xl border-0 shadow-[0_6px_15px_rgba(0,0,0,0.3)]"
              spotlightColor="rgba(180, 254, 0, 0)"
              key={index}
            >
              <h3 className="style-h3 pt-5 md:pt-0 mb-8">{stmt.name}</h3>
              <p className="style-p p-small text-foreground px-2 md:px-0">
                {stmt.description}
              </p>
            </SpotlightCard>
          ))}
        </div>

        <div className="py-10 xl:py-14 px-4 md:px-8 xl:px-0 max-w-screen-xl mx-auto border-t border-slate-300">
          <AnimateVertical className="flex justify-center">
            <h2 className="style-h2 text-[#e1ddde] mb-8">Our Strategy</h2>
          </AnimateVertical>

          <AnimateVertical className="style-p">
            <p>
              Our strategy is to build along-term Asset management solutions by
              leveraging the strength of our management team and staff
              capabilities. We will focus, drive and optimize our business to
              embrace new technology to add value to our customers.
              <br /> <br />
              Our Strategic Priorities are:
            </p>

            <ul className="list-decimal ps-5 lg:ps-10 pt-3 font-satoshi font-medium">
              {StrategicPriorities.map((priority, index) => (
                <AnimateHorizontal key={index}>
                  <li className="my-3">{priority}</li>
                </AnimateHorizontal>
              ))}
            </ul>
          </AnimateVertical>
        </div>
      </div>

      <div className="relative z-20 bg-background">
        <Footer className="mt-[100px] md:mt-[200px] lg:mt-[250px]" />
      </div>
    </div>
  );
}

const statements = [
  {
    name: "Mission",
    description:
      "Our mission is to deliver added value services to our clients, guiding actions and decisions with precision and integrity.",
  },
  {
    name: "Vision",
    description:
      "To be the leading Asset Management Company, consistently delivering superior investment performance and innovative solutions that enhance the financial well-being of our clients while adhering to the highest standards·",
  },
];

const StrategicPriorities = [
  "Develop the customer proposition and experience",
  "Deliver high performance in all needs",
  "Share skill and experience across the management team, staff and customers",
  "Build a culture of excellence",
  "Simplify our structure to unlock value",
  "Embrace new technology on Assets management and accounting standards",
];
