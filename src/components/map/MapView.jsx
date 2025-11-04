import React from "react";
import {
  LayersControl,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  Tooltip,
  useMap,
  useMapEvent,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Layer from "./Layer";
import useDutyStore from "../../store/useDutyStore";

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
  const locations = useDutyStore((state) => state.location);
  console.log("Locations MapView", locations);
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
        {locations.map((items, index) => {
          return (
            <Marker key={index} position={[items.lat, items.lng]}>
              <Popup>
                <div className="text-sm">{items.name}</div>
                <div className="text-sm text-gray-500">
                  {items.lat},{items.lng}
                </div>
              </Popup>
              <Tooltip>
                <div>
                  {items.name}
                </div>
              </Tooltip>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default MapView;
