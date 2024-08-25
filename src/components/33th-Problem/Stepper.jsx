import React, { useState } from "react";
import steps from "./data";
import "./styles.css";

const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = ({ index }) => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }

    if (currentStep === steps.length - 1) {
      alert("maximum content reached, press back button");
    }
  };

  const handlePrev = ({ index }) => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }

    if (currentStep === 0) {
      alert("you are on start, press next button");
    }
  };

  return (
    <div className="stepper">
      <div>
        {steps.map(({ label, content }, index) => (
          <div key={label} className="stepper-container">
            <div
              className={`step-number ${index <= currentStep ? "active" : ""}`}
            >
              {index + 1}
              {/* condition to check the steps length for line */}
              {index < steps.length - 1 && (
                <div
                  className={`step-line ${index < currentStep ? "active" : ""}`}
                ></div>
              )}
            </div>
            <div className="step-label">{label}</div>
          </div>
        ))}
      </div>

      {/* for displaying content */}
      <div className="stepper-content">{steps[currentStep].content}</div>
      <div className="stepper-controls">
        <button onClick={handleNext}>Next</button>
        <button onClick={handlePrev}>Prev</button>
      </div>
    </div>
  );
};

export default Stepper;
