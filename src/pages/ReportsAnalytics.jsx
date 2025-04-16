import React, { useState } from "react";
import Header from "../components/Header";
import { Calendar } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ChartUserGrowth from "../components/ChartUserGrowth";
import ChartContent from "../components/ChartContent";

const  ReportsAnalytics = () => {
const [startDate, setStartDate] = useState(null);

 
  return (
    <div className="flex flex-col w-full min-h-screen ">
      <Header />

      <div className="flex flex-col p-6 w-full h-[calc(100vh-60px)]">
        {/* Header Row */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold mt-[2px] ml-[-20px]">Reports & Analytics</h1>
          <div className="relative w-64 mt-[35px] ">
          
              <div className="flex space-x-4 ml-[-460px] my-[-46px]">
               <div className="relative">
                <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                placeholderText="Start Date"
                className="px-4 py-2 border border-[#4d8073] text-[black] rounded-full focus:outline-none 
                w-[320px] custom-placeholder"
              />
                <Calendar className="absolute right-3 top-2.5 w-4 h-4 text-[#4d8073] pointer-events-none" />
                </div>
                </div>

              <button className="flex justify-center items-center w-39 p-3  border border-[#f6f6f6] bg-[#4d8073]  text-white rounded-4xl ml-[-120px] mt-[-30px] cursor-pointer whitespace-nowrap">  Export as PDF </button>


              <button className="flex justify-center items-center w-39 p-3  border border-[#4d8073] bg-[#4d8073] rounded-4xl ml-[60px] mt-[-50px] cursor-pointer  text-white">  Export as CSV</button>

          </div>
        </div>
        <div className="flex md:flex-col2 gap-4 ml-3">
         <div className="w-[600px]">
          <ChartUserGrowth height={310} />
          </div>
        
        <div className="w-[610px] h-[500px] mt-3 ml-3 ">
         {/* ChartContent */}
        <ChartContent />
        </div>
        </div>

        <div className="flex flex-col p-6 pb-16 ml-[-14px] mt-[-100px] w-[1310px]">
        {/* Charts Section */}
        
      
          <ChartUserGrowth height={500} />
          </div>
          
    
      </div>
    </div>
  );
};

export default  ReportsAnalytics;



