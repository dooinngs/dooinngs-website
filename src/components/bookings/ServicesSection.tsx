"use client";

import { useState } from "react";
import { Category } from "@/data/bookings/types";

interface ServicesSectionProps {
  categories: Category[];
}

const ServicesSection = ({ categories }: ServicesSectionProps) => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [selectedService, setSelectedService] = useState(0);

  const currentCategory = categories[activeCategory];

  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <span className="text-lg">🛠️</span>
        <h2 className="text-lg font-semibold text-gray-900">Services</h2>
        <span className="text-gray-500">•</span>
        <span className="text-gray-500">
          GHS {currentCategory.services[selectedService]?.price || 0}
        </span>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-4">
        {categories.map((category, index) => (
          <button
            key={category.name}
            onClick={() => {
              setActiveCategory(index);
              setSelectedService(0);
            }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === index
                ? "bg-[#E41C4C] text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Services List */}
      <div className="space-y-2">
        {currentCategory.services.map((service, index) => (
          <button
            key={service.name}
            onClick={() => setSelectedService(index)}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${
              selectedService === index ? "bg-gray-100" : "hover:bg-gray-50"
            }`}
          >
            <span className="text-gray-900">
              {service.name} ({service.duration})
            </span>
            <div className="flex items-center gap-3">
              <span className="font-medium text-gray-900">
                GHS {service.price}
              </span>
              {selectedService === index && (
                <span className="w-5 h-5 bg-[#E41C4C] rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
