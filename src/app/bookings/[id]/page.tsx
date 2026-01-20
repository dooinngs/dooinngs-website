"use client";

import React from "react";
import Footer from "@/components/layout/Footer";
import {
  TopBanner,
  ProviderHeader,
  ImageGallery,
  StatsRow,
  AvailabilityTags,
  ServicesSection,
  LocationSection,
  BusinessOwner,
  ReviewsSection,
  QRCodeSection,
  ProviderNotFound,
} from "@/components/bookings";
import { getProvider } from "@/data/bookings";

export default function BookingPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = React.use(params);
  const provider = getProvider(resolvedParams.id);

  if (!provider) {
    return <ProviderNotFound id={resolvedParams.id} />;
  }

  return (
    <div className="min-h-screen bg-white lg:pb-0">
      <TopBanner />

      {/* Main Content */}
      <div className="lg:container lg:mx-auto lg:px-8 lg:py-8">
        <div className="sm:hidden">
          <ImageGallery />
        </div>

        <div className="relative z-10 -mt-6 sm:mt-0 bg-white rounded-t-3xl sm:rounded-none px-4 pt-6 sm:px-0 sm:pt-0 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] sm:shadow-none">
          <div className="hidden sm:block">
            <ProviderHeader name={provider.name} address={provider.address} />
          </div>

          <div className="sm:hidden mb-6">
            <h1 className="text-2xl font-bold text-gray-900">
              {provider.name}
            </h1>
            <p className="text-gray-500 text-sm mt-1">{provider.address}</p>
          </div>

          <div className="hidden sm:block">
            <ImageGallery />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-8">
              <StatsRow
                priceRange={provider.priceRange}
                completedJobs={provider.completedJobs}
                rating={provider.rating}
              />

              <AvailabilityTags
                homeService={provider.homeService}
                walkIn={provider.walkIn}
              />

              <ServicesSection categories={provider.categories} />

              <LocationSection address={provider.location.address} />

              <BusinessOwner
                name={provider.owner.name}
                title={provider.owner.title}
              />

              <ReviewsSection reviews={provider.reviews} />
            </div>

            {/* Right Column - QR Code */}
            <div className="hidden lg:block">
              <QRCodeSection providerName={provider.name} />
            </div>
          </div>
        </div>
        {/* Sticky Bottom Button for Mobile */}
        <div className="sticky bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100 lg:hidden z-50 mt-auto">
          <button className="w-full py-3 bg-[#E41C4C] text-white rounded-full font-bold text-lg hover:bg-[#E41C4C]/90 transition-colors shadow-lg">
            Download dooinngs to book
          </button>
        </div>
      </div>

      <div className="hidden lg:block">
        <Footer />
      </div>
    </div>
  );
}
