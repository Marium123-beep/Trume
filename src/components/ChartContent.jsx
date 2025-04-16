import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { HiOutlineChevronDown } from "react-icons/hi";
import React, { useState } from 'react';



const data = [
  { date: '16 Dec', value: 1400 },
  { date: '17 Dec', value: 2000 },
  { date: '18 Dec', value: 2600 },
  { date: '19 Dec', value: 2900 },
  { date: '20 Dec', value: 3300 },
  { date: '21 Dec', value: 3900 },
  { date: '22 Dec', value: 1800 },
];

const ChartContent = () => {
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
    <div className="bg-white rounded-xl border border-[#e5e7eb] p-4  w-[630px]">
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-xl font-semibold text-black mt-[-5px]">Content Engagement</h2>
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

    <div className='mt-6'>
      <ResponsiveContainer width="100%" height={316}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
          <XAxis dataKey="date" tick={{ fill: '#6b7280', fontSize: 12 }} />
          <YAxis tick={{ fill: '#6b7280', fontSize: 12 }} tickFormatter={(value) => `$${value}`} />
          <Tooltip formatter={(value) => [`$${value}`, 'Engagement']} />
          <Bar dataKey="value" fill="#4d8073" radius={[12, 12, 0, 0]} barSize={24}  />
        </BarChart>
      </ResponsiveContainer>
    </div>
    </div>
  );
};

export default ChartContent;