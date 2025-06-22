import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function ContactInfoAnimation() {
  const [isVisible, setIsVisible] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 800);
    return () => clearTimeout(timer);
  }, [canvasRef.current]);

  return (
    <div
      className="flex flex-col md:flex-row items-center justify-between gap-15 w-fit"
      ref={canvasRef}
    >
      <motion.div
        key={1}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0 * 0.2 }}
      >
        <div className="illustration email bg-white/5 backdrop-blur-md">
          <div
            className={`mt-4  pt-2 hidden ${
              isVisible ? "rollout flex  gap-8" : "flex gap-10"
            }`}
          >
            <div className="flex justify-start  h-full pl-4 animate-pulse">
              <svg
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#b4fe00"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <path d="M22 6l-10 7L2 6" />
              </svg>
            </div>
            <div>
              <p className="">0721 376 993</p>
              <p className="">0733 796 154</p>
              <p className="">0705 863 394</p>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        key={2}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 * 0.2 }}
      >
        <div className="illustration phone  bg-white/5 backdrop-blur-md">
          <div
            className={`mt-4 pt-3 hidden ${
              isVisible ? "rollout flex  gap-8" : "flex gap-8"
            }`}
          >
            <div className="flex justify-start h-full animate-pulse mt-2 pl-4">
              <svg
                width="50"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#b4fe00"
              >
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
              </svg>
            </div>
            <div className=" h-full flex flex-col items-start flex-1 ">
              <p className="">omemcompany@gmail.com</p>
              <p className="">aimmaxcom@gmail.com</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
