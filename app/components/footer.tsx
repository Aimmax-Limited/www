export default function Footer() {
  return (
    <>
      {/* <div className="bg-[#B5E3D8]/50 h-[70px] md:h-[120px] lg:h-[100px]"></div> */}
      <div className="py-10 bg-black text-center">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-gray-400 text-sm md:text-base lg:text-lg mb-5">
            © 2025 Aimmax Company Ltd. All rights reserved. Designed with
            integrity and innovation to deliver excellence in asset management.
          </p>
          <div className="flex flex-wrap justify-center">
            <a href="#" className="text-blue-500 hover:text-blue-700 mr-5">
              Services
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-700 mr-5">
              About Us
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-700 mr-5">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
