import React, { useState } from "react";
import { HiOutlineChevronDown } from "react-icons/hi";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { date: "24 Jan", value: 0 },
  { date: "25 Jan", value: 1000 },
  { date: "26 Jan", value: 2000 },
  { date: "27 Jan", value: 1800 },
  { date: "28 Jan", value: 3000 },
  { date: "29 Jan", value: 4000 },
  { date: "30 Jan", value: 3200 },
];

const ChartUserGrowth = ({ height}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Weekly");

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };

  return (
    <div className="bg-white p-6 rounded-xl border border-[#e5e7eb] mt-3 ml-[-35px] ">
      <div className="flex justify-between items-center mb-4 relative">
        <h2 className="text-xl font-semibold text-black mt-[-20px] ">User Growth</h2>
        <div className="relative">
          <button
            className="border border-[#e6e7eb] px-2 py-1.5 rounded-md text-[#4d8073] bg-gray-50 flex items-center cursor-pointer mt-[-6px] text-[14px]"
            onClick={toggleDropdown}
          >
            {selectedOption}
            <HiOutlineChevronDown className="ml-5 text-[#4d8073] text-lg" />
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-1 w-26 bg-white border border-[#e5e6ea] rounded-md z-10 text-[14px] ">
              {data.map((d) => (
                <div
                  key={d.date}
                  className="px-4 py-2 hover:bg-gray-50 hover:text-[#6f988e] cursor-pointer"
                  onClick={() => selectOption(d.date)}
                >
                  {d.date}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <ResponsiveContainer width="100%"  height={height}>
        <LineChart data={data}>
          <XAxis dataKey="date" tick={{ fill: "#4A5568", fontSize: 12 }} />
          <YAxis
            domain={[1000, "auto"]}
            tick={{ fill: "#4A5568", fontSize: 12 }}
            tickFormatter={(value) => `$${value}`}
          />
          <Tooltip formatter={(value) => `$${value}`} />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#4B7663"
            strokeWidth={3}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartUserGrowth;
