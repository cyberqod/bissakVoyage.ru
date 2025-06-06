
import React from "react";
import { CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface Feature {
  title: string;
  included: boolean;
}

interface PriceCardProps {
  title: string;
  price: string;
  description: string;
  features: Feature[];
  popular?: boolean;
  buttonText?: string;
  buttonLink?: string;
}

const PriceCard = ({
  title,
  price,
  description,
  features,
  popular = false,
  buttonText = "Choisir ce forfait",
  buttonLink = "/contact",
}: PriceCardProps) => {
  return (
    <div
      className={`rounded-lg shadow-lg overflow-hidden ${
        popular
          ? "border-2 border-primary transform scale-105 md:scale-110 z-10"
          : "border border-gray-200"
      }`}
    >
      {popular && (
        <div className="bg-primary py-1 text-white text-center text-sm font-medium">
          Recommandé
        </div>
      )}
      
      <div className="bg-white p-6">
        <h3 className="text-xl font-bold text-gray-900 text-center">{title}</h3>
        <div className="mt-4 text-center">
          <span className="text-3xl font-bold">{price}</span>
        </div>
        <p className="mt-2 text-gray-600 text-center text-sm">{description}</p>
        
        <ul className="mt-6 space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              {feature.included ? (
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
              ) : (
                <XCircle className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" />
              )}
              <span className={feature.included ? "text-gray-700" : "text-gray-500"}>
                {feature.title}
              </span>
            </li>
          ))}
        </ul>
        
        <div className="mt-6">
          <Button
            className={`w-full ${
              popular ? "bg-primary hover:bg-primary/90" : "bg-gray-800 hover:bg-gray-900"
            } text-white`}
            asChild
          >
            <Link to={buttonLink}>{buttonText}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
