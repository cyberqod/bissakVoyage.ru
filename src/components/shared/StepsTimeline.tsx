
import React from "react";
import { CheckCircle, CircleDashed } from "lucide-react";

interface Step {
  id: number;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface StepsTimelineProps {
  steps: Step[];
  currentStep?: number;
}

const StepsTimeline = ({ steps, currentStep = 0 }: StepsTimelineProps) => {
  return (
    <div className="py-4">
      {steps.map((step, index) => {
        const isCompleted = currentStep > step.id;
        const isCurrent = currentStep === step.id;
        const isLast = index === steps.length - 1;

        return (
          <div key={step.id} className="relative">
            {/* Timeline vertical line */}
            {!isLast && (
              <div
                className={`absolute h-full left-6 top-6 border-l-2 ${
                  isCompleted ? "border-primary" : "border-gray-300"
                }`}
                style={{ height: "calc(100% - 24px)" }}
              />
            )}

            <div className="flex mb-8">
              {/* Step circle */}
              <div className="flex-shrink-0 z-10">
                {isCompleted ? (
                  <CheckCircle className="h-12 w-12 text-primary" />
                ) : isCurrent ? (
                  <div className="h-12 w-12 rounded-full border-2 border-primary bg-primary/10 flex items-center justify-center text-primary font-semibold">
                    {step.id}
                  </div>
                ) : (
                  <div className="h-12 w-12 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-500 font-semibold">
                    {step.id}
                  </div>
                )}
              </div>

              {/* Step content */}
              <div className="ml-4">
                <h3 className={`text-lg font-semibold ${isCurrent ? "text-primary" : ""}`}>
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StepsTimeline;
