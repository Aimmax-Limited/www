import JsBarcode from "jsbarcode";
import React, { useEffect, useRef } from "react";

const BarcodeAnimation: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const animationInterval = useRef<NodeJS.Timeout>(undefined);
  const barcodeContainerRef = useRef<HTMLDivElement>(null);

  // Initialize barcode
  useEffect(() => {
    if (svgRef.current) {
      JsBarcode(svgRef.current, "AIMMAX-123", {
        format: "CODE128",
        displayValue: false,
        margin: 10,
        width: 1.7,
        height: 100,
        background: "transparent",
        lineColor: "#000000",
      });

      // Initially hide all bars
      const bars = svgRef.current.querySelectorAll("rect");
      bars.forEach((bar) => {
        bar.setAttribute("height", "0");
        bar.setAttribute("opacity", "0");
        bar.setAttribute("transform", "translate(0, 80)");
      });
    }
  }, []);

  // Animation logic
  useEffect(() => {
    const animateBars = () => {
      // Reset animation
      const bars = svgRef.current?.querySelectorAll("rect");
      bars?.forEach((bar) => {
        bar.setAttribute("height", "0");
        bar.setAttribute("opacity", "0");
        bar.setAttribute("transform", "translate(0, 100)");
      });

      setTimeout(() => {
        // Animate each bar sequentially
        bars?.forEach((bar, index) => {
          setTimeout(() => {
            bar.style.transition = "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)";
            bar.setAttribute("height", "100");
            bar.setAttribute("opacity", "1");
            bar.setAttribute("transform", "translate(0, 0)");
          }, index * 30);
        });
      }, 100);
    };

    animateBars();
    animationInterval.current = setInterval(animateBars, 15200);

    return () => {
      if (animationInterval.current) {
        clearInterval(animationInterval.current);
      }
    };
  }, []);

  return (
    <div className="w-full max-w-lg mx-auto px-4 py-12 flex flex-col items-center">
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
            <div
              ref={barcodeContainerRef}
              className="relative overflow-hidden bg-white/20 backdrop-blur-sm rounded-lg border border-white/30 shadow-lg"
            >
              {/* Barcode SVG */}
              <div className="flex justify-center items-end h-32 md:h-36">
                <svg ref={svgRef} className="h-full w-auto" />
              </div>

              <div className="text-center font-clashdisplay font-medium text-white/50 tracking-widest mb-2">
                AIMMAX-123
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarcodeAnimation;
