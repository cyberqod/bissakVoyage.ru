
import React from "react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  image?: string;
}

const TestimonialCard = ({ quote, name, role, image }: TestimonialCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <svg
            className="h-8 w-8 text-primary"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h3v10h-9zm-14 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3v10h-9z" />
          </svg>
        </div>
        <p className="text-gray-700 flex-grow mb-6">{quote}</p>
        <div className="flex items-center mt-auto">
          {image ? (
            <img
              src={image}
              alt={name}
              className="h-10 w-10 rounded-full object-cover mr-3"
            />
          ) : (
            <div className="h-10 w-10 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center mr-3">
              {name.charAt(0)}
            </div>
          )}
          <div>
            <h4 className="font-medium text-gray-900">{name}</h4>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
