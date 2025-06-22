import { Link } from "react-router";
import StarBorder from "../reactbits/star-border";

export default function Intro() {
  return (
    <div className="p-5 md:p-10 bg-[#B0C4DE] text-slate-900">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="font-clashdisplay font-medium text-xl md:text-3xl lg:text-4xl mb-3 md:mb-3 lg:mb-5">
          YOUR TRUSTED ASSET MANAGEMENT PARTNER
        </h2>

        <div className="font-satoshi text-justify text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-xl ms-2">
          <p>
            In today’s fast-moving world, effective asset management is
            essential for organizations to achieve their strategic objectives.
            Aimmax Company Ltd specializes in providing high-quality asset
            management solutions, including the development of comprehensive
            asset registers, accurate asset valuation, and physical tagging with
            GK full-color logo tags.
          </p>

          <p className="mt-4 md:mt-6 lg:mt-8">
            Our advanced barcoding system features serialized aluminum tags,
            enabling seamless asset tracking, scanning, and reconciliation
            throughout an asset’s lifecycle. Our solutions are fully aligned
            with the Treasury asset policy management guidelines for the public
            sector’s 2022/2023 performance contracting cycle, ensuring
            compliance and efficiency.
          </p>

          <p className="mt-4 md:mt-6 lg:mt-8">
            With a proven track record, Aimmax has successfully served key
            government institutions, including the Ministry of Education,
            Ministry of Foreign Affairs, and the University of Nairobi. Our
            dedication to excellence has earned us trust, positive feedback, and
            long-term partnerships in the industry.
          </p>

          <StarBorder as="button" className="mt-8 font-semibold" color="red">
            <Link to="/">About Us</Link>
          </StarBorder>
        </div>
      </div>
    </div>
  );
}
