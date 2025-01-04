import React from "react";
import "leaflet/dist/leaflet.css";
import "./MapComponent.css";
import { MapContainer, TileLayer } from "react-leaflet";

const MapComponent = ({ latitude, longitude }) => {
  return (
    <MapContainer center={[latitude || 48.8566, longitude || 2.3522]} zoom={20}>
      <TileLayer
        attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};

export default MapComponent;
