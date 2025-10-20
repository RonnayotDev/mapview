import React from "react";
import {
  LayersControl,
  MapContainer,
  Marker,
  TileLayer,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Layer from "./Layer";

const MapView = () => {
  return (
    <div className="flex-1">
      <MapContainer
        className="h-full"
        center={[13, 100]}
        zoom={7}
        scrollWheelZoom={true}
      >
        <Layer />
      </MapContainer>
    </div>
  );
};

export default MapView;
