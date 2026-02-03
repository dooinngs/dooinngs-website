"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
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
  QRCodeSection,
  ProviderNotFound,
} from "@/components/bookings";
import { getPublicBusiness } from "@/api/client";
import { BusinessResponse } from "@/types/bookings";

export default function BookingPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = React.use(params);
  const slug = resolvedParams.id;

  const {
    data: response,
    isLoading,
    error,
  } = useQuery<BusinessResponse>({
    queryKey: getPublicBusiness.key(slug),
    queryFn: () => getPublicBusiness.fn(slug),
  });

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#E41C4C] border-t-transparent"></div>
      </div>
    );
  }

  // Error state
  if (error || !response?.data) {
    return <ProviderNotFound id={slug} />;
  }

  const { business_details, user_profile, photos, service_types } =
    response.data;

  // Map service_types to boolean flags for AvailabilityTags
  const homeService = service_types.includes("home");
  const walkIn = service_types.includes("walkin");

  return (
    <div className="min-h-screen bg-white lg:pb-0">
      <TopBanner />

      {/* Main Content */}
      <div className="lg:container lg:mx-auto lg:px-8 lg:py-8">
        <div className="sm:hidden">
          <ImageGallery images={photos.map((p) => p.image_url)} />
        </div>

        <div className="relative z-10 -mt-6 sm:mt-0 bg-white rounded-t-3xl sm:rounded-none px-4 pt-6 sm:px-0 sm:pt-0 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] sm:shadow-none">
          <div className="hidden sm:block">
            <ProviderHeader
              name={business_details.business_name}
              address={business_details.location.street_address}
            />
          </div>

          <div className="sm:hidden mb-6">
            <h1 className="text-2xl font-bold text-gray-900">
              {business_details.business_name}
            </h1>
            <p className="text-gray-500 text-sm mt-1">
              {business_details.location.street_address}
            </p>
          </div>

          <div className="hidden sm:block">
            <ImageGallery images={photos.map((p) => p.image_url)} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-8">
              <StatsRow priceRange="GHS 40-150" completedJobs={0} rating={0} />

              <AvailabilityTags homeService={homeService} walkIn={walkIn} />

              <ServicesSection
                categories={business_details.service_categories}
              />

              <LocationSection
                address={business_details.location.street_address}
                latitude={business_details.location.latitude}
                longitude={business_details.location.longitude}
                businessName={business_details.business_name}
              />

              <BusinessOwner
                name={`${user_profile.first_name} ${user_profile.last_name}`}
                title="Business Owner"
                avatar={user_profile.profile_photo}
              />

              {/* Reviews section - empty for now since API doesn't have reviews */}
              {/* <ReviewsSection reviews={[]} /> */}
            </div>

            {/* Right Column - QR Code */}
            <div className="hidden lg:block">
              <QRCodeSection providerName={business_details.business_name} />
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
