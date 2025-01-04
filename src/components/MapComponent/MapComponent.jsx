import React from "react";
import "leaflet/dist/leaflet.css";
import "./MapComponent.css";
import { MapContainer, TileLayer } from "react-leaflet";

const MapComponent = ({ latitude, longitude }) => {
  return (
    <MapContainer
      center={[latitude || 33.89031080600027, longitude || 35.47024942065306]}
      zoom={20}
    >
      <TileLayer
        attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};

export default MapComponent;
