
import React from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeading = ({ title, subtitle, centered = true }: SectionHeadingProps) => {
  return (
    <div className={`mb-10 ${centered ? "text-center" : "text-left"}`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">{title}</h2>
      {subtitle && <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;
