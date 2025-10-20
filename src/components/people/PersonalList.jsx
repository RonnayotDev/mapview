import React from "react";
import useDutyStore from "../../store/useDutyStore";
import { Users, Clock } from "lucide-react";

const PersonalList = () => {
  const personal = useDutyStore((state) => state.personal);
  console.log("personalList response >>>", personal);

  return (
    <div className="w-80 bg-white overflow-y-auto">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-3 mb-2">
          <Users className="text-blue-500" size={28} />
          <h2 className="text-2xl font-bold text-gray-800">
            รายชื่อเจ้าหน้าที่
          </h2>
        </div>
        <p className="text-sm text-gray-500">ลากไปยังจุดเพื่อเพิ่มเข้าเวร</p>
      </div>
      <div className="p-4 space-y-2">
        {personal.map((items, index) => {
          return (
            <div
              key={index}
              className="flex items-center gap-3 p-3
         bg-blue-100 border border-blue-300 rounded-lg
         cursor-move hover:shadow-md hover:scale-105"
            >
              <div className="text-3xl">{items.avatar}</div>
              <div className="flex-1">
                <div className="font-semibold text-gray-800">{items.name}</div>
                <div className="text-xs text-gray-500">{items.position}</div>
              </div>
              <div className="text-gray-400">
                <Clock />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PersonalList;
