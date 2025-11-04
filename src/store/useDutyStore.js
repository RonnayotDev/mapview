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
      const assignments = await api.get("/locationPersonnel");
      set({
        personal: personal,
        location: locations,
        assignments: assignments,
      });

      console.log("Response Personal Zustand", personal);
      console.log("Response Location Zustand", locations);
      console.log("Response Assignments Zustand", assignments);
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
  assignPerson: async (personId, locationId)=> {
    try {
      console.log(personId,locationId)
      const res = await api.post("/locationPersonnel",{
        personId: personId,
        locationId: locationId
      })
      console.log("Assign Person Zustand Success!",res)
    } catch (error) {
      console.log(error)
    }
  }
});

const useDutyStore = create(dutyStore);

export default useDutyStore;
