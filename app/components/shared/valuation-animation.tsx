import React, { useEffect, useRef, useState } from "react";

const ValuationAnimation: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [displayValue, setDisplayValue] = useState(0);
  const animationInterval = useRef<NodeJS.Timeout>(undefined);
  const assetTypes = ["Land", "Buildings", "Machinery", "Vehicles", "ICT"];

  // Valuation steps configuration
  const steps = [
    { label: "Identify Asset", duration: 1000 },
    { label: "Market Analysis", duration: 1500 },
    { label: "Condition Assessment", duration: 1500 },
    { label: "Calculate Value", duration: 2000 },
    { label: "IPSAS Compliance Check", duration: 1500 },
  ];

  // Animation logic
  useEffect(() => {
    let currentStep = 0;
    let valueTimer: NodeJS.Timeout;

    const runStep = (index: number) => {
      setActiveStep(index);

      // Reset value when starting calculation
      if (index === 3) {
        setDisplayValue(0);
        const targetValue = Math.floor(Math.random() * 900000) + 100000;
        const increment = targetValue / 20;

        let current = 0;
        valueTimer = setInterval(() => {
          current += increment;
          if (current >= targetValue) {
            current = targetValue;
            clearInterval(valueTimer);
          }
          setDisplayValue(Math.floor(current));
        }, 50);
      } else if (index !== 3 && valueTimer) {
        clearInterval(valueTimer);
      }
    };

    // Initial animation sequence
    const runInitialAnimation = () => {
      steps.forEach((step, index) => {
        setTimeout(
          () => runStep(index),
          index === 0
            ? 0
            : steps.slice(0, index).reduce((acc, s) => acc + s.duration, 0)
        );
      });
    };

    // Loop animation
    const startLoop = () => {
      animationInterval.current = setInterval(() => {
        currentStep = (currentStep + 1) % steps.length;
        runStep(currentStep);
      }, 7500);
    };

    runInitialAnimation();
    const loopTimeout = setTimeout(
      startLoop,
      steps.reduce((acc, step) => acc + step.duration, 0)
    );

    return () => {
      clearTimeout(loopTimeout);
      if (animationInterval.current) clearInterval(animationInterval.current);
      if (valueTimer) clearInterval(valueTimer);
    };
  }, []);

  // Value meter component
  const ValueMeter = () => {
    const progress =
      activeStep === 3 ? Math.min(100, (displayValue / 1000000) * 100) : 0;

    return (
      <div className="mt-2 w-full">
        <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        {activeStep === 3 && (
          <div className="text-center mt-2 font-mono text-white/80">
            KSh {displayValue.toLocaleString()}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="w-full max-w-lg mx-auto px-4 py-8 flex flex-col items-center">
      <div className="relative w-full">
        <div className="text-center mb-1">
          <h2 className="text-xl font-semibold text-slate-400/90 tracking-wider">
            PROFESSIONAL VALUATION
          </h2>
        </div>

        {/* Valuation Card */}
        <div className="relative rounded-xl overflow-hidden p-4">
          <div className="relative bg-white/10 backdrop-blur-xl rounded-xl border border-white/30 shadow-lg p-8">
            {/* Asset Type Selector */}
            <div className="flex justify-center space-x-2 mb-1">
              {assetTypes.map((type, i) => (
                <div
                  key={i}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                    activeStep >= 2 && i === activeStep % assetTypes.length
                      ? "bg-blue-500/90 text-white"
                      : "bg-white/5 text-white/50"
                  }`}
                >
                  {type}
                </div>
              ))}
            </div>

            {/* Process Visualization */}
            <div className="h-40 flex flex-col items-center justify-center">
              {/* Step Indicator */}
              <div className="w-full max-w-xs mx-auto mb-6">
                <div className="flex justify-between text-xs text-white/60 mb-1">
                  <span>Inspection</span>
                  <span>Analysis</span>
                  <span>Valuation</span>
                </div>
                <div className="flex h-1 bg-white/10 rounded-full overflow-hidden">
                  {steps.map((_, step) => (
                    <div
                      key={step}
                      className={`h-full transition-all duration-500 ${
                        activeStep >= step ? "bg-blue-500" : "bg-white/5"
                      }`}
                      style={{ width: `${100 / steps.length}%` }}
                    />
                  ))}
                </div>
              </div>

              {/* Active Step Display */}
              <div className="text-center w-full">
                <div className="text-white/90 font-medium mb-1 h-6">
                  {steps[activeStep].label}...
                </div>
                {activeStep === 3 && <ValueMeter />}
              </div>
            </div>

            {/* Compliance Badge */}
            {activeStep === 4 && (
              <div className="mt-2 flex justify-center animate-fadeIn">
                <div className="flex items-center bg-green-500/10 border border-green-500/30 rounded-full px-4 py-1 text-sm text-green-400">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Treasury Compliant
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValuationAnimation;
