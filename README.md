## 1. Install React

```bash
npm create vite@latest client -- --template react
```

## 2. Install Tailwind

https://tailwindcss.com/

```bash
npm install tailwindcss @tailwindcss/vite
```

## 4. JSON Server

https://www.npmjs.com/package/json-server

```bash
npm i json-server
```

```json
{
  "personnel": [
    {
      "id": "1",
      "name": "สมชาย ใจดี",
      "position": "หัวหน้าเวร",
      "avatar": "👨‍✈️"
    },
    {
      "id": "2",
      "name": "สมหญิง รักงาน",
      "position": "รองหัวหน้า",
      "avatar": "👩‍✈️"
    },
    {
      "id": "3",
      "name": "วิชัย มานะ",
      "position": "เจ้าหน้าที่",
      "avatar": "👨‍💼"
    },
    {
      "id": "4",
      "name": "สุดา สวยงาม",
      "position": "เจ้าหน้าที่",
      "avatar": "👩‍💼"
    },
    {
      "id": "5",
      "name": "ประยุทธ ขยัน",
      "position": "เจ้าหน้าที่",
      "avatar": "👨‍🔧"
    },
    {
      "id": "6",
      "name": "มาลี ยิ้มแย้ม",
      "position": "เจ้าหน้าที่",
      "avatar": "👩‍🔧"
    }
  ],
  "locations": [
    {
      "id": "8140",
      "name": "จุดที่ 1",
      "lat": 13.765141252643984,
      "lng": 100.50659894943239,
      "maxCapacity": 5
    },
    {
      "id": "952f",
      "name": "จุดที่ 2",
      "lat": 13.762937265148677,
      "lng": 100.50640046596529,
      "maxCapacity": 5
    }
  ],
  "locationPersonnel": [
    {
      "id": "72e8",
      "locationId": "952f",
      "personId": "2"
    }
  ]
}
```

and Config package.json

```json
  "scripts": {
    "dev": "vite",
    "kaika": "json-server --watch db.json",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
```

## 5. React-Leaflet

```bash
npm i react-leaflet leaflet
```

## 6. Layout

App.jsx

```jsx
import Header from "./components/layout/Header";
import LocationList from "./components/locations/LocationList";
import MapView from "./components/map/MapView";
import PersonnelList from "./components/people/PersonnelList";

const App = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <PersonnelList />

      <div className="flex flex-1 flex-col">
        <Header />
        <div className="flex flex-1 overflow-hidden">
          <MapView />
          <LocationList />
        </div>
      </div>
    </div>
  );
};
export default App;
```

/components/layout/Header.jsx

```jsx
const Header = () => {
  return (
    <div
      className="bg-white shadow-sm 
    border-b border-gray-200 p-4"
    >
      Header
    </div>
  );
};
export default Header;
```

/components/locations/LocationsList.jsx

```jsx
const LocationList = () => {
  return (
    <div className="w-96 bg-white shadow-lg overflow-y-auto border-l border-gray-200">
      LocationList
    </div>
  );
};
export default LocationList;
```

/components/map/MapView.jsx

```jsx
const MapView = () => {
  return <div className="flex-1">MapView</div>;
};
export default MapView;
```

/components/people/PersonelList.jsx

```jsx
const PersonnelList = () => {
  return <div className="w-80 bg-white overflow-y-auto">PersonnelList</div>;
};
export default PersonnelList;
```

## 7. Global State (Zustand)

https://github.com/pmndrs/zustand

```bash
npm install zustand
```

/store/useDutyStore.js

การสร้าง Store

```js
import { create } from "zustand";

const dutyStore = () => ({
  personnel: [],
  locations: [],
  assignments: [],
  selectedLocationId: null,

  kaika: "tam",
  jukkru: () => console.log("Jukkru!!!"),
});

const useDutyStore = create(dutyStore);

export default useDutyStore;
```

การเรียกใช้ Store

```js
import useDutyStore from "../../store/useDutyStore";

// rafce
const PersonelList = () => {
  // Zustand
  const kaika = useDutyStore((state) => state.kaika);
  console.log(kaika);

  return <div className="w-80 bg-white overflow-y-auto">PersonelList</div>;
};
export default PersonelList;
```
