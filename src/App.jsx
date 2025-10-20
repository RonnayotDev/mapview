import React, { useEffect, useState } from "react";
import PersonalList from "./components/people/PersonalList";
import Header from "./components/layout/Header";
import MapView from "./components/map/MapView";
import LocationList from "./components/locations/LocationList";
import axios from "axios";
import useDutyStore from "./store/useDutyStore";

const App = () => {
  const [adding, setAdding] = useState(false);
  const [pending, setPending] = useState(null);

  const fetchAll = useDutyStore((state) => state.fetchAll);

  useEffect(() => {
    fetchAll();
  }, []);

  const onPick = (lat, lng) => {
    setPending({
      lat: lat,
      lng: lng,
    });
  };

  console.log("Pending",pending)

  return (
    <div className="flex h-screen bg-gray-100">
      <PersonalList />
      <div className="flex flex-col flex-1">
        <Header adding={adding} setAdding={setAdding} />
        <div className="flex flex-1 overflow-hidden">
          <MapView adding={adding} onPick={onPick} />
          <LocationList />
        </div>
      </div>
    </div>
  );
};

export default App;
