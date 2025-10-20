import React from "react";
import { LayersControl, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Layer = () => {
  return (
    <LayersControl>
      <LayersControl.BaseLayer name="OSM" checked>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </LayersControl.BaseLayer>
      <LayersControl.Overlay name="TEST" checked>
        <Marker position={[13, 100]}></Marker>
      </LayersControl.Overlay>
    </LayersControl>
  );
};

export default Layer;
