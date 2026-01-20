"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const ImagePlaceholder = ({ size = "large" }: { size?: "large" | "small" }) => (
  <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-200">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={size === "large" ? "w-16 h-16" : "w-8 h-8"}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  </div>
);

const ImageGallery = () => {
  return (
    <>
      {/* Mobile Slider */}
      <div className="block sm:hidden -mx-4 mb-0">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          className="aspect-[4/3] w-full"
        >
          {[1, 2, 3, 4, 5].map((_, index) => (
            <SwiperSlide key={index} className="relative bg-gray-200">
              <ImagePlaceholder size="large" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop Grid */}
      <div className="hidden sm:grid grid-cols-4 gap-2 mb-8 rounded-xl overflow-hidden">
        {/* Main large image */}
        <div className="col-span-2 row-span-2 bg-gray-200 aspect-square relative">
          <ImagePlaceholder size="large" />
        </div>
        {/* Smaller images */}
        <div className="bg-gray-200 aspect-square relative">
          <ImagePlaceholder size="small" />
        </div>
        <div className="bg-gray-200 aspect-square relative">
          <ImagePlaceholder size="small" />
        </div>
        <div className="bg-gray-200 aspect-square relative">
          <ImagePlaceholder size="small" />
        </div>
        <div className="bg-gray-200 aspect-square relative">
          <ImagePlaceholder size="small" />
        </div>
      </div>
    </>
  );
};

export default ImageGallery;
