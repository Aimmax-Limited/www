import type { ReactNode } from "react";
import Footer from "~/components/footer";
import Navbar from "~/components/navbar";
import AnimatedContent from "~/components/reactbits/animated-content";
import SpotlightCard from "~/components/reactbits/spotlight-card";

export default function About() {
  return (
    <div className="bg-white" id="top">

      <Navbar
        className={`fixed top-0 left-0 z-50 bg-[#0A192F]/95 backdrop-blur-sm h-16 shadow-[0_4px_14px_rgba(0,0,0,0.4)]`}
      />

      <div className="mt-16 h-[200px] md:h-[350px] lg:h-[500px] bg-[url('/backgrounds/blue-sky.jpg')] bg-top-left flex items-center justify-start sticky top-0 z-10">
        <h1 className="font-clashdisplay font-medium text-white text-3xl sm:text-5xl md:text-6xl lg:text-[80px] xl:text-8xl max-w-screen-xl mx-auto">
          About Us
        </h1>
      </div>

      <div className="relative z-20 bg-white">

        <div className="py-10 xl:py-14 px-4 md:px-8 xl:px-0 max-w-screen-xl mx-auto grid md:grid-cols-2 gap-10">
          {statements.map((stmt, index) => (
            <SpotlightCard
              className="text-center bg-white/10 rounded-lg hover:bg-white backdrop-blur-xl border-0 shadow-[0_6px_15px_rgba(0,0,0,0.3)]"
              spotlightColor="rgba(180, 254, 0, 0)"
              key={index}
            >
              <h3 className="font-fredoka font-medium lg:font-normal text-2xl md:text-3xl lg:text-[40px] pt-5 md:pt-0 mb-8">
                {stmt.name}
              </h3>
              <p className="font-satoshi font-medium text-[17px] text-slate-800 px-2 md:px-0">
                {stmt.description}
              </p>
            </SpotlightCard>
          ))}
        </div>

        <div className="py-10 xl:py-14 px-4 md:px-8 xl:px-0 max-w-screen-xl mx-auto border-t border-slate-300">
          <AnimateVertical>
            <h2 className="font-fredoka font-medium lg:font-normal text-center text-2xl md:text-3xl lg:text-[40px] mb-8">
              Company Profile
            </h2>
          </AnimateVertical>

          <AnimateVertical>
            <p className="text-lg font-satoshi font-medium text-slate-800 text-justify">
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

        <div className="py-10 xl:py-14 px-4 md:px-8 xl:px-0 max-w-screen-xl mx-auto border-t border-slate-300">
          <AnimateVertical>
            <h2 className="font-fredoka font-medium lg:font-normal text-center text-2xl md:text-3xl lg:text-[40px] mb-8">
              Our Strategy
            </h2>
          </AnimateVertical>

          <AnimateVertical>
            <p className="text-lg font-satoshi font-medium">
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

      <div className="relative z-20 bg-white">
        <Footer className="mt-[100px] md:mt-[200px] lg:mt-[250px]" />
      </div>
    </div>
  );
}


function AnimateVertical({
  delay = 0,
  threshold = 0.1,
  children,
}: {
  delay?: number;
  threshold?: number;
  children: ReactNode;
}) {
  return (
    <AnimatedContent distance={80} delay={delay} threshold={threshold}>
      {children}
    </AnimatedContent>
  );
}

function AnimateHorizontal({
  delay = 0,
  threshold = 0.1,
  children,
}: {
  delay?: number;
  threshold?: number;
  children: ReactNode;
}) {
  return (
    <AnimatedContent
      direction="horizontal"
      distance={80}
      delay={delay}
      threshold={threshold}
      reverse
    >
      {children}
    </AnimatedContent>
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

