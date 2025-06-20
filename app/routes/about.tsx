import Footer from "~/components/footer";
import Navbar from "~/components/navbar";

export default function About() {
  return (
    <div className="bg-white">
      <Navbar
        className={`fixed top-0 left-0 z-50 bg-[#0A192F]/95 backdrop-blur-sm h-16 shadow-[0_4px_14px_rgba(0,0,0,0.4)]`}
      />

      <div className="mt-16 h-[200px] md:h-[350px] lg:h-[500px] bg-[url('/backgrounds/blue-sky.jpg')] bg-top-left flex items-center justify-start sticky top-0 z-10">
        <h1 className="font-clashdisplay font-medium text-white text-3xl sm:text-5xl md:text-6xl lg:text-[80px] xl:text-8xl max-w-screen-xl mx-auto">
          About Us
        </h1>
      </div>

      <div className="relative z-20 bg-white">
        <div className="py-10 px-4 xl:px-0 max-w-screen-xl mx-auto">
          <h2 className="font-fredoka font-medium lg:font-normal text-center text-2xl md:text-3xl lg:text-[40px] mb-8">
            Company Profile
          </h2>
          <p className="text-lg font-satoshi font-medium">
            Aimmax Company Ltd, a Kenyan firm, consists of experienced
            professionals with diverse expertise. The company has evolved from a
            sole proprietorship to a fully incorporated entity, specializing in
            asset management services and ICT. Aimmax is a trusted service
            provider for government ministries, corporations, and private
            companies, offering comprehensive asset register preparation and
            barcode tagging services.
            <br />
            <br />
            Our solutions are fully aligned with the Treasury asset policy
            management guidelines for the public sector’s 2022/2023 performance
            contracting cycle, ensuring compliance and efficiency. With a proven
            track record, Aimmax has successfully served key government
            institutions, including the Ministry of Education, Ministry of
            Foreign Affairs, and the University of Nairobi. Our dedication to
            excellence has earned us trust, positive feedback, and long-term
            partnerships in the industry.
          </p>
        </div>
      </div>

      <div className="relative z-20 bg-white">
        <Footer className="mt-[100px] md:mt-[200px] lg:mt-[250px]" />
      </div>
    </div>
  );
}
