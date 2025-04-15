import React from "react";
import Header from "../components/Header";
import { Search } from "lucide-react";

const UserManagement = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <Header />
      <div className="flex flex-col p-6 w-max h-screen rounded-lg bg-white border border-[#e5e6ea] overflow-x-scroll">
        <div className="flex justify-between items-center mb-4 mt-[-6px] ">
          <h1 className="text-xl font-bold ">User Management</h1>
          <div className="relative w-64">
            <input
              type="text"
              placeholder="Search"
              className="w-110 p-3 pl-15 border border-[#f6f6f6] bg-[#f6f6f6] placeholder:text-[#cacaca] rounded-3xl ml-[-180px]"
            />
            <Search className="absolute left-[-155px] top-4 text-[#4d8073] w-5 h-5" />
          </div>
        </div>

        {/* Table */}
        <div className="w-full">
        <div className="min-w-[1000px]">
        <div className="grid grid-cols-5 bg-[#aed0b8] text-[#609081] font-semibold p-4 rounded-lg min-w-max gap-x-10">
            <span>Name</span>
            <span>Email</span>
            <span>Total Post</span>
            <span>Status</span>
            <span>KYC Status</span>
          </div>

          {/* No Data Found */}
          <div className="flex flex-col items-center justify-center h-40 mt-6 bg-[#f0f5f1] rounded-lg ">
            <Search className="text-[#609081] mt-[-30px] w-15 h-15 ml-[170px]" />
            <p className="text-[#609081] text-xl font-semibold mt-5 ml-[190px]">No Data Found</p>
          </div>
        </div>
      </div>
    </div>
    </div>
   
  );
};

export default UserManagement;
