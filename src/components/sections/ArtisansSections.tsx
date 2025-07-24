"use client";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

const artisanData = [
  { src: "/assets/images/ArtisanImages/Image1.svg", label: "Painters" },
  { src: "/assets/images/ArtisanImages/image2.svg", label: "Painters" },
  { src: "/assets/images/ArtisanImages/Image3.svg", label: "Painters" },
  { src: "/assets/images/ArtisanImages/Image4.svg", label: "Painters" },
  { src: "/assets/images/ArtisanImages/Image5.svg", label: "Painters" },
  { src: "/assets/images/ArtisanImages/Image6.svg", label: "Painters" },
  { src: "/assets/images/ArtisanImages/Image7.svg", label: "Painters" },
  { src: "/assets/images/ArtisanImages/Image8.svg", label: "Painters" },
  { src: "/assets/images/ArtisanImages/Image9.svg", label: "Painters" },
  { src: "/assets/images/ArtisanImages/Image10.svg", label: "Painters" },
  { src: "/assets/images/ArtisanImages/Image12.svg", label: "Painters" },
  { src: "/assets/images/ArtisanImages/Image13.svg", label: "Painters" },
  { src: "/assets/images/ArtisanImages/Image14.svg", label: "Painters" },
  { src: "/assets/images/ArtisanImages/Image15.svg", label: "Painters" },
  { src: "/assets/images/ArtisanImages/Image16.svg", label: "Painters" },

  // Add the rest of your 16 images and labels here
];

const ArtisansSections = () => {
  useEffect(() => {
    // Add linear timing function for smooth continuous scrolling
    const style = document.createElement("style");
    style.textContent = `
      .artisan-swiper .swiper-wrapper {
        transition-timing-function: linear !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section className="w-full py-20 md:py-45">
      <div className=" mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#232323] font-figtree">
          Make <span className="text-[#E41C4C]">money</span> as a skilled
          <br />
          artisan with <span className="text-[#E41C4C]">Dooinngs</span>
        </h2>
        <p className="text-center text-[#9D9D9D] text-sm md:text-xl mb-20 font-figtree">
          Get started with Dooinngs as a skilled professional
          <br />
          and make as much as you can at your call
        </p>
        <Swiper
          className="artisan-swiper py-4 px-1"
          modules={[Autoplay, FreeMode]}
          spaceBetween={24}
          slidesPerView="auto"
          loop={true}
          freeMode={true}
          allowTouchMove={false}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          speed={4000}
        >
          {artisanData.map((artisan, idx) => (
            <SwiperSlide key={idx} className="!w-[280px] md:!w-[380px]">
              <div className="w-[280px] h-[400px] md:w-[380px] md:h-[560px] rounded-[8px] overflow-hidden flex flex-col items-center justify-end relative shadow-lg">
                <img
                  src={artisan.src}
                  alt={artisan.label}
                  className="w-full h-[400px] md:h-[560px] object-cover"
                  style={{ display: "block" }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ArtisansSections;
