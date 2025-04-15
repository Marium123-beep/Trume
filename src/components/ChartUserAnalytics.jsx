import React, { useState } from "react";
import { HiOutlineChevronDown } from "react-icons/hi";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";

// Pie data
const pieData = [
  { name: "Total Users", value: 39 },
  { name: "Active Users", value: 35 },
  { name: "Unactive Users", value: 26 },
];

const COLORS = ["#4d8073", "#aed0b8", "#f0f5f1"];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-black text-white text-sm p-2 rounded-md text-center">
        <p className="m-0">{payload[0].name}</p>
        <p className="m-0">Value: {payload[0].value}</p>
      </div>
    );
  }
  return null;
};

const ChartUserAnalytics = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("24 Jan");

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 mt-3 ml-[1px] h-[400px] w-[525px]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-black mt-[-20px]">User Analytics</h2>
        <div className="relative">
          <button
            className="border border-[#e6e7eb] px-2 py-1.5 rounded-md text-[#4d8073] bg-gray-50 flex items-center cursor-pointer mt-[-6px] text-[14px]"
            onClick={toggleDropdown}
          >
            {selectedOption}
            <HiOutlineChevronDown className="ml-5 text-[#4d8073] text-lg" />
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-1 w-26 bg-white border border-[#e5e6ea] rounded-md z-10 text-[14px] shadow-md">
              {["24 Jan", "25 Jan", "26 Jan", "27 Jan", "28 Jan", "29 Jan", "30 Jan"].map((option) => (
                <div
                  key={option}
                  className="px-4 py-2 hover:bg-gray-50 hover:text-[#6f988e] cursor-pointer"
                  onClick={() => selectOption(option)}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-center items-center mt-6">
        <div className="rounded-full border-[#b9d6c1] border-1 p-2 mb-4 mt-[-9px]">
          <ResponsiveContainer width={250} height={250}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={110}
                startAngle={90}
                endAngle={-270}
                stroke="none"
                labelLine={false}
                label={({ name, cx, cy, midAngle, outerRadius }) => {
                  const RADIAN = Math.PI / 180;
                  const radius = outerRadius - 51;
                  const x = cx + radius * Math.cos(-midAngle * RADIAN);
                  const y = cy + radius * Math.sin(-midAngle * RADIAN);

                  const fillColor = name === "Total Users" ? "#f7f9f8" : "#4d8073";

                  return (
                    <text
                      x={x}
                      y={y}
                      fill={fillColor}
                      textAnchor="middle"
                      dominantBaseline="central"
                      fontSize={12}
                      fontWeight={500}
                    >
                      {name}
                    </text>
                  );
                }}
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Custom Legend */}
      <div className="flex justify-center space-x-5 ml-4">
        {pieData.map((entry, index) => (
          <div key={entry.name} className="flex items-center space-x-1">
            <div
              className="w-4 h-4 rounded-md"
              style={{ backgroundColor: COLORS[index] }}
            ></div>
            <span className="text-[#3d3d3d] text-md">{entry.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChartUserAnalytics;
