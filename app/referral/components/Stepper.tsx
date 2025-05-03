'use client';
import React from 'react';

interface StepperProps {
  currentStep: number;
}

export default function Stepper({ currentStep }: StepperProps) {
  const steps = ['Patient Info', 'Referral Details', 'Additional Info', 'Review'];

  return (
    <div className="flex overflow-x-auto gap-4 mb-10 px-1 sm:justify-between sm:overflow-visible">
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const isActive = stepNumber === currentStep;

        return (
          <div key={step} className="flex-1 text-center min-w-[72px] sm:min-w-0">
            <div
              className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center font-semibold transition-all ${
                isActive
                  ? 'bg-wk-indigo text-white'
                  : 'bg-white text-wk-navy border border-gray-300'
              }`}
            >
              {stepNumber}
            </div>
            <p
              className={`text-sm mt-2 font-medium ${
                isActive ? 'text-wk-indigo' : 'text-wk-navy'
              }`}
            >
              {step}
            </p>
          </div>
        );
      })}
    </div>
  );
}