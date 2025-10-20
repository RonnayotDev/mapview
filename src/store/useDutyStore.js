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
      set({
        personal: personal,
      });

      console.log("Response Zustand",personal)
    } catch (err) {
      console.log(err);
    }
  },
});

const useDutyStore = create(dutyStore);

export default useDutyStore;
