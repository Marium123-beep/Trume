import React from "react";
// import { Users } from "lucide-react";

const Card = ({ title, value }) => {
  return (
    <div className="bg-[#f0f5f1] p-5 rounded-xl flex flex-col items-start border border-[#cde1d4] ml-[-20px] mt-[-22px] h-[140px] w-[315px]">
      <img src="/assets/asset 4.svg" alt="Logo" className="ml-[205px] text-[#cde1d4] h-4 w-4 "/>
      <img src="/assets/Musers.svg" alt="Logo"  className="my-[30px] ml-[-8px] mt-[-25px] bg-[#aed0b8] p-2 rounded-full text-[#4c8175]"/>


      {/* <Users className="text-green-600 w-8 h-8 mb-2" /> */}
      <h2 className="text-black font-normal ml-[-10px] text-[14px]">{title}</h2>
      <p className="text-2xl text-[#4c8175] font-normal ml-[-10px]">{value}</p>
    </div>
  );
};

export default Card;
