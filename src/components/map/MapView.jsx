import React from "react";
import {
  LayersControl,
  MapContainer,
  Marker,
  TileLayer,
  useMap,
  useMapEvent,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Layer from "./Layer";

const ClickToAdd = ({ adding, onPick }) => {
  const map = useMapEvent({
    click: (e) => {
      if (adding) {
        onPick(e.latlng.lat, e.latlng.lng);
      }
    },
  });
  return;
};

const MapView = ({ adding, onPick }) => {
  console.log("Mapview Prop Adding", adding);
  return (
    <div className="flex-1">
      <MapContainer
        className="h-full"
        center={[13, 100]}
        zoom={7}
        scrollWheelZoom={true}
      >
        <Layer />
        <ClickToAdd adding={adding} onPick={onPick} />
      </MapContainer>
    </div>
  );
};

export default MapView;
