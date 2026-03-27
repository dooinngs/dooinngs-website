interface MapProps {
  latitude: number;
  longitude: number;
  address?: string;
  businessName?: string;
}

const Map = ({ latitude, longitude, businessName }: MapProps) => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const query = businessName
    ? `${encodeURIComponent(businessName)}@${latitude},${longitude}`
    : `${latitude},${longitude}`;

  const src = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${query}&zoom=16`;

  return (
    <iframe
      src={src}
      className="w-full h-full rounded-xl border-0"
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
};

export default Map;
