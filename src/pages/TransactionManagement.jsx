import React, { useState } from "react";
import Header from "../components/Header";
import { Search, Eye } from "lucide-react";
import { Calendar } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TransactionManagement  = () => {
const [startDate, setStartDate] = useState(null);
const [endDate, setEndDate] = useState(null);
 
  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      <Header />

      <div className="flex flex-col p-6 w-full h-[calc(100vh-60px)] rounded-lg bg-white border border-[#e5e6ea] overflow-auto">
        {/* Header Row */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold mt-[-2px]">Transaction Management</h1>
          <div className="relative w-64 ">
          <input
                          type="text"
                          placeholder="Search"
                          className="w-70 p-3 pl-15 border border-[#f6f6f6] bg-[#f6f6f6] placeholder:text-[#cacaca] rounded-3xl ml-[-650px]"
                        />
              <Search className="absolute left-[-630px] top-4 text-[#4d8073] w-5 h-5" />

              <div className="flex space-x-4 ml-[-350px] my-[-46px]">
               <div className="relative">
                <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                placeholderText="Start Date"
                className="px-4 py-2 border border-[#4d8073] text-[black] rounded-full focus:outline-none 
                w-[130px] custom-placeholder"
              />
                <Calendar className="absolute right-3 top-2.5 w-4 h-4 text-[#4d8073] pointer-events-none" />
                </div>

                  <div className="relative">
                  <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  placeholderText="End Date"
                  className="px-4 py-2 border border-[#4d8073] text-black rounded-full focus:outline-none 
                  w-[130px] custom-placeholder"
                  />
                 <Calendar className="absolute right-3 top-2.5 w-4 h-4 text-[#4d8073] pointer-events-none" />
                </div>
                </div>

              <button className="flex justify-center items-center w-32 p-3  border border-[#f6f6f6] bg-[#cde1d4] rounded-4xl ml-[-30px] mt-[-30px] cursor-pointer ">  <img src="/assets/filtericon.svg" alt="Filter Icon" className="w-4 h-4 mr-2 text-[#4d8073] " /> Filter</button>


              <button className="flex justify-center items-center w-32 p-3  border border-[#4d8073] bg-[#4d8073] rounded-4xl ml-[120px] mt-[-50px] cursor-pointer  text-white">  Export</button>

          </div>
        </div>

        {/* Table Header */}
        <div className="grid grid-cols-[2fr_3fr_1fr_1fr_auto] bg-[#aed0b8] text-[#609081] font-semibold p-4 rounded-lg w-full">
          <span>Transaction ID</span>
          <span className="ml-[-100px]">Brand</span>
          <span className="ml-[-350px] ">Amount</span>
          <span className="ml-[-280px] ">Date</span>
          <span className="ml-[-200px]">Status</span>
        </div>

        {/* Table Rows */}
        <div className="mt-4 rounded-lg space-y-5">
          {/* Just displaying all for demo; You can slice based on currentPage */}
          {[
            { TransactionID: "1", Brand: "John Doe", 	Amount: "$200", Date:"2025-02-10",  status: "	Completed" },
            { TransactionID: "2", Brand: "Jane Smith", 	Amount: "	$200", Date:"2025-02-11",  status: "Pending" },
            { TransactionID: "3", Brand: "Michael Brown", 	Amount: "	$200", Date:"2025-02-12",  status: "	Completed" },
            { TransactionID: "4", Brand: "Emily White", 	Amount: "	$200", Date:"2025-02-10",  status: "Failed" },
            { TransactionID: "5", Brand: "David Johnson", 	Amount: "	$200", Date:"2025-02-09",  status: "	Completed" },
            { TransactionID: "6", Brand: "Sophia Wilson", 	Amount: "	$200", Date:"2025-02-08",  status: "	Completed" },
            { TransactionID: "7", Brand: "	Robert Taylor", 	Amount: "	$200", Date:"2025-02-13",  status: "	Completed" },
            { TransactionID: "8", Brand: "Olivia Martinez", 	Amount: "	$200", Date:"2025-02-07",  status: "	Completed" },
            { TransactionID: "9", Brand: "Liam Anderson", 	Amount: "	$200", Date:"2025-02-11",  status: "	Pending" },
            { TransactionID: "10", Brand: "Liam Anderson", 	Amount: "	$200", Date:"2025-02-12",  status: "	Failed" },
          ].map((item, index) => (
            <div key={index} className="grid grid-cols-[2fr_3fr_1fr_1fr_auto] p-4 bg-[#f0f5f1] text-gray-700 items-center rounded-lg w-full">
              <span>{item.TransactionID}</span>
              <span className="ml-[-100px]">{item.Brand}</span>
              <span className="ml-[-350px]">{item.Amount}</span>
              <span className="font-semibold text-[#4a4b4a] ml-[-280px]">{item.Date}</span>
              <span className="font-semibold text-[#4a4b4a] ml-[-200px]">{item.status}</span>
            </div>
          ))}
        </div>

      
       
      </div>
    </div>
  );
};

export default  TransactionManagement;


