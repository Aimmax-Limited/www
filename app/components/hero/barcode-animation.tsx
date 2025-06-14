import React, { useCallback, useEffect, useRef, useState } from "react";

interface BarcodeDigit {
  digit: string;
  width: number;
}

const BarcodeAnimation: React.FC = () => {
  const [currentBarcode, setCurrentBarcode] = useState<BarcodeDigit[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const animationInterval = useRef<NodeJS.Timeout>(undefined);

  // Generate new barcode data
  const generateBarcode = useCallback(() => {
    const digits = Array.from({ length: 16 }, () =>
      Math.floor(Math.random() * 10).toString()
    );
    return digits.map((digit) => ({
      digit,
      width: 0.8 + Math.random() * 3.2, // Random width between 0.8-4
    }));
  }, []);

  // Start the infinite animation cycle
  useEffect(() => {
    const animateBarcode = () => {
      setIsAnimating(false);

      // Wait for the next animation frame (allows DOM to reset)
      requestAnimationFrame(() => {
        // Generate new barcode immediately
        setCurrentBarcode(generateBarcode());

        // Then trigger animation one frame later
        requestAnimationFrame(() => {
          setIsAnimating(true);
        });
      });
    };

    // Initial setup
    setCurrentBarcode(generateBarcode());
    // setIsAnimating(true);
    const timer = setTimeout(() => {
      setIsAnimating(true);
    }, 300);

    // Start animation loop
    animationInterval.current = setInterval(animateBarcode, 9200);

    return () => {
      if (animationInterval.current) {
        clearInterval(animationInterval.current);
      }
      clearTimeout(timer);
    };
  }, [generateBarcode]);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-12 flex flex-col items-center">
      <div className="relative w-full">
        <div className="text-center">
          <h2 className="text-xl font-clashdisplay font-semibold text-slate-400/90 tracking-wider">
            BARCODE TAGGING
          </h2>
        </div>
        {/* Aluminum Tag Container */}
        <div className="relative rounded-xl overflow-hidden p-4">
          {/* Glassmorphism Layer */}
          <div className="relative bg-white/10 backdrop-blur-xl rounded-xl border border-white/30 shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] p-8">
            {/* Screw Holes */}
            <div className="absolute top-4 left-4 w-3 h-3 rounded-full bg-gray-500 border border-gray-600 shadow-inner" />
            <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-gray-500 border border-gray-600 shadow-inner" />
            <div className="absolute bottom-4 left-4 w-3 h-3 rounded-full bg-gray-500 border border-gray-600 shadow-inner" />
            <div className="absolute bottom-4 right-4 w-3 h-3 rounded-full bg-gray-500 border border-gray-600 shadow-inner" />

            {/* Barcode Container */}
            <div className="relative overflow-hidden bg-white/20 backdrop-blur-sm rounded-lg p-6 border border-white/30 shadow-lg">
              {/* Barcode */}
              <div className="flex justify-center items-end min-w-64 h-32 md:h-36 gap-1">
                {currentBarcode.map((item, index) => (
                  <BarWithDigit
                    key={`${item.digit}-${index}`}
                    digit={item.digit}
                    width={item.width}
                    index={index}
                    isAnimating={isAnimating}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Bar component with improved animation
const BarWithDigit = React.memo<{
  digit: string;
  width: number;
  index: number;
  isAnimating: boolean;
}>(({ digit, width, index, isAnimating }) => {
  const barRef = useRef<HTMLDivElement>(null);
  const digitRef = useRef<HTMLSpanElement>(null);
  const delay = index * 50;

  useEffect(() => {
    if (!barRef.current || !digitRef.current) return;

    if (isAnimating) {
      // Animate in
      barRef.current.style.height = `100%`;
      barRef.current.style.opacity = "1";
      barRef.current.style.transform = "translateY(0)";

      digitRef.current.style.opacity = "1";
      digitRef.current.style.transform = "translateY(0)";
    } else {
      // Reset for next animation
      barRef.current.style.height = "0%";
      barRef.current.style.opacity = "0";
      barRef.current.style.transform = "translateY(20px)";

      digitRef.current.style.opacity = "0";
      digitRef.current.style.transform = "translateY(10px)";
    }
  }, [isAnimating]);

  return (
    <div className="h-full flex flex-col items-center mx-px">
      {/* Bar */}
      <div
        ref={barRef}
        className="w-full bg-gradient-to-b from-gray-900 to-black origin-bottom"
        style={{
          width: `${width * 0.25}rem`,
          height: "0%",
          opacity: 0,
          transform: "translateY(20px)",
          transition: `height 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}ms, opacity 0.4s ease ${delay}ms, transform 0.4s ease ${delay}ms`,
          boxShadow: "inset 0 1px 2px rgba(255,255,255,0.1)",
        }}
      />

      {/* Digit */}
      <span
        ref={digitRef}
        className="text-xs font-mono font-bold text-white/80"
        style={{
          opacity: 0,
          transform: "translateY(10px)",
          transition: `opacity 0.3s ease ${
            delay + 300
          }ms, transform 0.3s ease ${delay + 300}ms`,
        }}
      >
        {digit}
      </span>
    </div>
  );
});

export default BarcodeAnimation;
