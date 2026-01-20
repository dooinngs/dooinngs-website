"use client";

import Image from "next/image";

const TopBanner = () => {
  return (
    <div className="bg-white border-b border-gray-100 py-6 sm:py-8 px-4 sm:px-6 lg:px-8 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#E41C4C] rounded-lg flex items-center justify-center">
            <Image
              src="/assets/logos/logo-icon.svg"
              alt="Dooinngs"
              width={24}
              height={24}
              className="w-6 h-6"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>
          <div>
            <p className="font-semibold text-gray-900">Get the dooinngs app</p>
            <p className="text-sm text-gray-500">Download the app to book</p>
          </div>
        </div>
        <div className="hidden sm:flex flex-row gap-1 sm:gap-2">
          <button className="group flex items-center gap-2 px-3 py-1.5 rounded-full bg-black text-white hover:bg-gray-900 border border-gray-800 cursor-pointer min-w-[110px] justify-center transition-all duration-300 transform hover:scale-105">
            <Image
              src="/assets/icons/apple.svg"
              alt="Apple logo"
              width={25}
              height={25}
              className="w-[25px] h-[25px]"
            />
            <span className="flex flex-col text-left ml-0.5">
              <span className="text-[7px] font-medium tracking-wide leading-none mb-0.5">
                Download on the
              </span>
              <span className="text-[12px] font-bold leading-none tracking-wide">
                App Store
              </span>
            </span>
          </button>
          <button className="group flex items-center gap-2 px-3 py-1.5 rounded-full bg-black text-white hover:bg-gray-900 border border-gray-800 cursor-pointer min-w-[110px] justify-center transition-all duration-300 transform hover:scale-105">
            <Image
              src="/assets/icons/playstore.svg"
              alt="Play Store logo"
              width={25}
              height={25}
              className="w-[25px] h-[25px]"
            />
            <span className="flex flex-col text-left ml-0.5">
              <span className="text-[7px] font-medium tracking-wide leading-none mb-0.5 uppercase">
                GET IT ON
              </span>
              <span className="text-[12px] font-bold leading-none tracking-wide">
                Google Play
              </span>
            </span>
          </button>
        </div>
        <button
          onClick={() => {
            const userAgent = navigator.userAgent.toLowerCase();
            if (/iphone|ipad|ipod/.test(userAgent)) {
              window.open("https://apps.apple.com", "_blank");
            } else if (/android/.test(userAgent)) {
              window.open("https://play.google.com", "_blank");
            } else {
              window.open("https://apps.apple.com", "_blank");
            }
          }}
          className="sm:hidden px-4 py-2 bg-[#E41C4C] text-white rounded-full text-xs font-bold hover:bg-[#E41C4C]/80 transition-colors"
        >
          Use App
        </button>
      </div>
    </div>
  );
};

export default TopBanner;
