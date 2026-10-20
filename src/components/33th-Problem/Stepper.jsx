import React, { useState } from "react";
import steps from "./data";

const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="flex flex-col items-center p-4 sm:p-6 w-full max-w-2xl mx-auto">
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 w-full flex flex-col gap-8">
        <h2 className="text-zinc-400 font-medium text-sm tracking-widest uppercase">Multi-Step Form</h2>

        {/* Step Indicators */}
        <div className="flex items-center w-full">
          {steps.map(({ label }, index) => (
            <React.Fragment key={label}>
              <div className="flex flex-col items-center gap-2 flex-shrink-0">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 border-2 ${index < currentStep
                      ? "bg-blue-500 border-blue-500 text-white"
                      : index === currentStep
                        ? "bg-transparent border-blue-500 text-blue-400"
                        : "bg-transparent border-white/10 text-zinc-600"
                    }`}
                >
                  {index < currentStep ? "✓" : index + 1}
                </div>
                <span className={`text-xs font-medium whitespace-nowrap ${index <= currentStep ? 'text-zinc-300' : 'text-zinc-600'}`}>
                  {label}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div className={`flex-1 h-px mx-2 mb-5 transition-all duration-500 ${index < currentStep ? 'bg-blue-500' : 'bg-white/10'}`} />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Content */}
        <div className="bg-[#18181c] border border-white/5 rounded-xl p-6 min-h-[100px] flex items-center justify-center">
          <p className="text-zinc-300 text-sm text-center">{steps[currentStep].content}</p>
        </div>

        {/* Controls */}
        <div className="flex gap-4 pt-4 border-t border-white/5">
          <button
            onClick={handlePrev}
            disabled={currentStep === 0}
            className="flex-1 py-3 rounded-xl text-sm font-semibold transition-all disabled:opacity-40 disabled:cursor-not-allowed bg-[#18181c] border border-white/10 text-zinc-400 hover:bg-white/10 hover:text-white"
          >
            ← Back
          </button>
          <button
            onClick={handleNext}
            disabled={currentStep === steps.length - 1}
            className="flex-1 py-3 rounded-xl text-sm font-semibold transition-all disabled:opacity-40 disabled:cursor-not-allowed bg-blue-500 hover:bg-blue-600 text-white"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stepper;
