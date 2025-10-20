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
      console.log("Response Location Zustand", locations)
    } catch (err) {
      console.log(err);
    }
  },
});

const useDutyStore = create(dutyStore);

export default useDutyStore;
