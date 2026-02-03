"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Custom pink marker icon using SVG
const pinkIcon = L.divIcon({
  className: "custom-marker",
  html: `
    <svg width="32" height="42" viewBox="0 0 32 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 0C7.164 0 0 7.164 0 16c0 12 16 26 16 26s16-14 16-26c0-8.836-7.164-16-16-16zm0 22c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z" fill="#E41C4C"/>
    </svg>
  `,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

interface MapProps {
  latitude: number;
  longitude: number;
  address?: string;
  businessName?: string;
}

const Map = ({ latitude, longitude, address, businessName }: MapProps) => {
  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={16}
      scrollWheelZoom={false}
      className="w-full h-full rounded-xl z-0"
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[latitude, longitude]} icon={pinkIcon}>
        <Popup>
          <div className="text-center">
            {businessName && <strong className="block">{businessName}</strong>}
            {address && (
              <span className="text-sm text-gray-600">{address}</span>
            )}
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
