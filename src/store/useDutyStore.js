import { create } from "zustand";
import api from "../lib/api";

const dutyStore = (set, get) => ({
  personal: [],
  location: [],
  assignments: [],
  selectedLocationId: null,
  fetchAll: async () => {
    try {
      const personal = await api.get("/personnel");
      const locations = await api.get("/locations");
      set({
        personal: personal,
        location: locations,
      });

      console.log("Response Personal Zustand", personal);
      console.log("Response Location Zustand", locations);
    } catch (err) {
      console.log(err);
    }
  },
  addLocation: async (lat, lng, name) => {
    try {
      const res = await api.post("/locations", {
        name: name,
        lat: Number(lat),
        lng: Number(lng),
        maxCapacity: 5,
      });
      await get().fetchAll()
      console.log("Add Location Zustand Success!");
    } catch (err) {
      console.log("Add Location Zustand Err", err);
    }
  },
});

const useDutyStore = create(dutyStore);

export default useDutyStore;
