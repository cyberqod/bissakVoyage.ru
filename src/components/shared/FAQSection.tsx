
import React from "react";
import { Plus, Minus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title: string;
  subtitle?: string;
  items: FAQItem[];
}

const FAQSection = ({ title, subtitle, items }: FAQSectionProps) => {
  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        {subtitle && <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
      </div>
      
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          {items.map((item, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-neutral px-6 rounded-lg shadow-sm border border-gray-100"
            >
              <AccordionTrigger className="py-4 hover:no-underline">
                <div className="flex items-center justify-between w-full">
                  <span className="text-lg font-semibold">{item.question}</span>
                  <div className="flex-shrink-0 ml-4">
                    {/* L'icône change automatiquement grâce à la rotation CSS */}
                    {/* <Plus className="h-4 w-4 transition-transform duration-200" /> */}
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="py-4 text-gray-600">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQSection;
