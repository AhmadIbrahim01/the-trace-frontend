import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";

const MapComponent = () => {
  return (
    <MapContainer center={[48.8566, 2.3522]} zoom={20}>
      <TileLayer
        attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};

export default MapComponent;
