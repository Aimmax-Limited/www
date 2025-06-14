import { useEffect, useState } from "react";

const AssetRegisterAnimation = () => {
  const [animate, setAnimate] = useState(false);

  // Trigger animation once after mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 300); // Optional delay before animation starts

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full w-max-sm mx-auto px-4 py-12 flex flex-col items-center">
      <div className="relative w-full">
        <div className="relative rounded-xl overflow-hidden p-8">
          <div className="text-center mb-2">
            <div className="h-8 mx-auto rounded-sm uppercase text-base font-clashdisplay font-semibold text-slate-400/90 tracking-wider">
              ASSET REGISTER PREPARATION
            </div>
          </div>

          <div className="relative bg-white/1 backdrop-blur-xl rounded-xl border border-white/30 shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] p-4">
            {/* Grid */}
            <div className="relative h-64 bg-white/1 backdrop-blur-xl rounded-lg border border-white/10 shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] overflow-hidden">
              {/* Vertical lines */}
              <div className="absolute inset-0 flex">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={`v-${i}`}
                    className={`h-full border-r border-gray-400 transition-all duration-700 ${
                      animate
                        ? "translate-y-0 opacity-100"
                        : "translate-y-full opacity-0"
                    }`}
                    style={{
                      width: `${100 / 6}%`,
                      left: `${(i + 1) * (100 / 6)}%`,
                      transitionDelay: `${500 + i * 100}ms`,
                    }}
                  />
                ))}
              </div>

              {/* Horizontal lines */}
              <div className="absolute inset-0 flex flex-col">
                {[...Array(7)].map((_, i) => (
                  <div
                    key={`h-${i}`}
                    className={`w-full border-b border-gray-400 transition-all duration-700 ${
                      animate
                        ? "translate-x-0 opacity-100"
                        : "translate-x-full opacity-0"
                    }`}
                    style={{
                      height: `${100 / 8}%`,
                      top: `${(i + 1) * (100 / 8)}%`,
                      transitionDelay: `${800 + i * 80}ms`,
                    }}
                  />
                ))}
              </div>

              {/* Corners */}
              {[
                "top-0 left-0",
                "top-0 right-0",
                "bottom-0 left-0",
                "bottom-0 right-0",
              ].map((pos, i) => (
                <div
                  key={`corner-${i}`}
                  className={`absolute ${pos} w-2 h-2 border-gray-500 transition-opacity duration-300 ${
                    animate ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ transitionDelay: `${1200 + i * 100}ms` }}
                />
              ))}

              {/* Grid fill overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 transition-opacity duration-1000 ${
                  animate ? "opacity-100" : "opacity-0"
                }`}
                style={{ transitionDelay: "1600ms" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetRegisterAnimation;
