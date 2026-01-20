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
    <div className="min-h-screen bg-white">
      <TopBanner />

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ProviderHeader name={provider.name} address={provider.address} />

        <ImageGallery />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
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
          <div className="lg:col-span-1">
            <QRCodeSection providerName={provider.name} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
