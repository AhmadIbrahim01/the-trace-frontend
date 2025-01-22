import React from "react";
import "leaflet/dist/leaflet.css";
import "./MapComponent.css";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { Icon } from "leaflet";

import pin from "../../assets/images/pin.svg";
const MapComponent = ({ latitude, longitude }) => {
  const customIcon = new Icon({
    iconUrl: pin,
    iconSize: [50, 50],
  });

  return (
    <MapContainer
      center={[latitude || 33.89031080600027, longitude || 35.47024942065306]}
      zoom={20}
    >
      <TileLayer
        attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker
        position={[
          latitude || 33.89031080600027,
          longitude || 35.47024942065306,
        ]}
        icon={customIcon}
      ></Marker>
    </MapContainer>
  );
};

export default MapComponent;
