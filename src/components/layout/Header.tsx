"use client";
import React, { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-[#E41C4C] relative">
      {/* Navbar */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 sm:py-6 lg:py-8 xl:py-[49px]">
          {/* Left side: Logo and nav links */}
          <div className="flex items-center gap-2 sm:gap-4 lg:gap-8">
            <div className="flex items-center">
              <Image
                src="/assets/logos/logo.svg"
                alt="Logo"
                width={150}
                height={32}
                className="sm:w-[180px] sm:h-[39px] lg:w-[200px] lg:h-[43px] xl:w-[235px] xl:h-[51px]"
              />
            </div>
            <nav className="hidden md:flex items-center gap-3 lg:gap-6">
              <a
                href="#"
                className="text-white text-sm lg:text-lg font-medium hover:underline transition-colors"
              >
                Dooers
              </a>
              <a
                href="#"
                className="text-white text-sm lg:text-lg font-medium hover:underline transition-colors"
              >
                FAQs
              </a>
            </nav>
          </div>

          {/* Right side: Auth buttons (desktop) and Mobile menu button */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center gap-2 sm:gap-4">
              <button className="px-2 py-2 sm:px-3 sm:py-2 lg:px-4 lg:py-[10px] rounded-full bg-white text-[#E41C4C] text-xs sm:text-sm lg:text-base font-semibold hover:bg-gray-100 transition cursor-pointer">
                Create an account
              </button>
              <button className="px-2 py-2 sm:px-3 sm:py-2 lg:px-4 lg:py-[10px] rounded-full border border-white text-white text-xs sm:text-sm lg:text-base font-semibold hover:bg-white hover:text-[#E41C4C] transition cursor-pointer">
                Sign in
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X size={24} />
              ) : (
                <Image
                  src="/assets/icons/menu.svg"
                  alt="Menu"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`md:hidden absolute right-4 w-70 bg-white shadow-2xl border border-gray-200 rounded-lg z-50 transition-all duration-300 ease-in-out transform ${
            isMobileMenuOpen
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 -translate-y-4 invisible"
          }`}
        >
          <div className="px-4 py-6">
            {/* Navigation Links */}
            <nav className="flex flex-col gap-4 mb-6">
              <a
                href="#"
                className="text-gray-800 text-lg font-medium hover:text-[#E41C4C] transition-colors py-2 border-b border-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Dooers
              </a>
              <a
                href="#"
                className="text-gray-800 text-lg font-medium hover:text-[#E41C4C] transition-colors py-2 border-b border-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQs
              </a>
            </nav>

            {/* Mobile Auth Buttons */}
            <div className="flex flex-col gap-3">
              <button
                className="w-full px-4 py-3 rounded-full bg-[#E41C4C] text-white text-base font-semibold hover:bg-[#d1184a] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Create an account
              </button>
              <button
                className="w-full px-4 py-3 rounded-full border-2 border-[#E41C4C] text-[#E41C4C] text-base font-semibold hover:bg-[#E41C4C] hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign in
              </button>
            </div>
          </div>
        </div>

        {/* Overlay */}
        {isMobileMenuOpen && (
          <div
            className="md:hidden fixed inset-0 bg-black/20 z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </div>

      {/* Hero Section under Navbar, aligned with navbar */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <section className="flex flex-col lg:flex-row items-center justify-between min-h-[50vh] sm:min-h-[60vh] lg:min-h-[70vh] py-6 sm:py-8 lg:py-12">
          {/* Left: Texts and Buttons */}
          <div className="flex-1 flex flex-col items-center md:items-start gap-3 sm:gap-4 lg:gap-6 max-w-3xl">
            <h1 className="text-[45px] sm:text-2xl md:text-5xl lg:text-5xl xl:text-[70px] font-[700] leading-tight text-center md:text-left">
              <span className="text-[#FF7E9D]">Connecting</span>
              <br />
              <span className="text-white">
                artisans <span className="text-[#FF7E9D]">to the</span>
              </span>
              <br />
              <span className="text-white">
                rest <span className="text-[#FF7E9D]">of the</span> world
              </span>
            </h1>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-white max-w-lg lg:max-w-none text-center md:text-left">
              Need something done? Dooinngs connects you to skilled
              professionals to get a job done swiftly and effectively
            </p>
            <div className="flex flex-row gap-3 sm:gap-4 mt-4 sm:mt-6 w-full sm:w-auto max-w-md sm:max-w-none">
              <button className="group flex items-center gap-2 sm:gap-4 lg:gap-2 px-2 sm:px-6 py-3 sm:py-4 rounded-full bg-gradient-to-r from-gray-900 to-black text-white cursor-pointer w-full sm:w-auto min-w-[120px] sm:min-w-[200px] justify-center hover:from-gray-800 hover:to-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                <img
                  src="/assets/icons/apple.svg"
                  alt="Apple logo"
                  className="w-5 h-5 sm:w-9 sm:h-9 group-hover:scale-110 transition-transform duration-300"
                />
                <span className="flex flex-col items-start text-left">
                  <span className="text-[8px] sm:text-xs lg:text-[10px] text-gray-300 font-medium tracking-wide uppercase">
                    Coming soon to
                  </span>
                  <span className="text-xs sm:text-lg font-bold leading-tight tracking-tight">
                    App Store
                  </span>
                </span>
              </button>
              <button className="group flex items-center gap-2 sm:gap-4 lg:gap-2 px-2 sm:px-6 py-3 sm:py-4 rounded-full bg-gradient-to-r from-gray-900 to-black text-white cursor-pointer w-full sm:w-auto min-w-[120px] sm:min-w-[200px] justify-center hover:from-gray-800 hover:to-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                <img
                  src="/assets/icons/playstore.svg"
                  alt="Play Store logo"
                  className="w-5 h-5 sm:w-9 sm:h-9 group-hover:scale-110 transition-transform duration-300"
                />
                <span className="flex flex-col items-start text-left">
                  <span className="text-[8px] sm:text-xs lg:text-[10px] text-gray-300 font-medium tracking-wide uppercase">
                    Coming soon to
                  </span>
                  <span className="text-xs sm:text-lg font-bold leading-tight tracking-tight">
                    Google Play
                  </span>
                </span>
              </button>
            </div>
          </div>
          {/* Right: Image Collage */}
          <div className="flex-1 flex justify-center mt-6 sm:mt-8 lg:mt-10 xl:mt-0 relative">
            <div className="w-[374px] h-[393px] md:w-[590px] md:h-[618px] flex items-center justify-center mx-auto">
              <img
                src="/assets/images/Frame.png"
                alt="Skilled professionals"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Header;
