import React, { useState } from "react";
import Header from "../components/Header";
import { Search, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";


//slug step1
const generateSlug = (name) => {
  return name
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
};


const ActivityMonitoring = () => {
const navigate = useNavigate();

  const handleEye = () => {
    navigate("/Johndoeactivity"); // ✅ This navigates to the new page
  };


  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = 5;

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      <Header />

      <div className="flex flex-col p-6 w-full h-[calc(100vh-60px)] rounded-lg bg-white border border-[#e5e6ea] overflow-auto">
        {/* Header Row */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold">Activity Monitoring</h1>
          <div className="relative w-64 ">
          <input
                          type="text"
                          placeholder="Search"
                          className="w-110 p-3 pl-15 border border-[#f6f6f6] bg-[#f6f6f6] placeholder:text-[#cacaca] rounded-3xl ml-[-350px] "
                        />
              <Search className="absolute left-[-330px] top-4 text-[#4d8073] w-5 h-5" />
              <button className="flex justify-center items-center w-40 p-3  border border-[#f6f6f6] bg-[#cde1d4] rounded-3xl ml-[100px] mt-[-50px] cursor-pointer ">  <img src="/assets/filtericon.svg" alt="Filter Icon" className="w-4 h-4 mr-2 text-[#4d8073]" /> Filter</button>
          </div>
        </div>

        {/* Table Header */}
        <div className="grid grid-cols-[2fr_3fr_1fr_1fr_auto] bg-[#aed0b8] text-[#609081] font-semibold p-4 rounded-lg w-full">
          <span>User/Brand</span>
          <span>Activity Type</span>
          <span className="ml-[-180px] ">Date</span>
          <span className="ml-[-100px]">Status</span>
        </div>

        {/* Table Rows */}
        <div className="mt-4 rounded-lg space-y-5">
          {/* Just displaying all for demo; You can slice based on currentPage */}
          {[
            { name: "John Doe", ActivityType: "Post Created", Date: "2025-02-10", status: "	Completed" },
            { name: "Jane Smith", ActivityType: "	Profile Updated", Date: "2025-02-11", status: "Pending" },
            { name: "Michael Brown", ActivityType: "Comment Added", Date: "2025-02-12", status: "Completed" },
            { name: "Emily White", ActivityType: "Post Deleted", Date: "2025-02-10", status: "	Failed" },
            { name: "David Johnson", ActivityType: "Password Changed", Date: "2025-02-09" , status: "	Completed" },
            { name: "Sophia Wilson", ActivityType: "Email Verified", Date: "2025-02-08", status: "Completed" },
            { name: "Robert Taylor", ActivityType: "Logged In", Date: "2025-02-13", status: "Completed" },
            { name: "Olivia Martinez", ActivityType: "Two-Factor Enabled", Date: "2025-02-07", status: "Completed" },
            { name: "Liam Anderson", ActivityType: "Post Shared", Date: "2025-02-11", status: "	Pending" },
            { name: "Emma Thomas", ActivityType: "Account Deactivated", Date: "2025-02-12", status: "	Failed" },
          ].map((item, index) => (
            <div key={index} className="grid grid-cols-[2fr_3fr_1fr_1fr_auto] p-4 bg-[#f0f5f1] text-gray-700 items-center rounded-lg w-full">
              <span>{item.name}</span>
              <span>{item.ActivityType}</span>
              <span className="ml-[-180px]">{item.Date}</span>
              <span className="font-semibold text-[#4a4b4a] ml-[-100px]">{item.status}</span>
              <span className="flex justify-center">
              {/* //slug step2 */}
                <button onClick={() => navigate(`/activity/${generateSlug(item.name)}`)}
                className="bg-[#4d8073] text-white p-2 rounded-full ml-[-40px]">
                  
                  <Eye className="w-5 h-5" />
                </button>
              </span>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-4 space-x-2 text-[13px]">
          <button
            onClick={handlePrevious}
            className="px-3.5 py-1.5 bg-[#aed0b8] text-white rounded-sm"
            disabled={currentPage === 1}
          >
            ‹
          </button>

          {[1, 2, 3, 4, 5].map((num) => (
            <button
              key={num}
              onClick={() => setCurrentPage(num)}
              className={`px-3 py-1.5 rounded-sm ${
                num === currentPage ? "bg-[#4d8073] text-white" : "bg-white text-[#4d8073]"
              }`}
            >
              {num}
            </button>
          ))}

          <button
            onClick={handleNext}
            className="px-3.5 py-1.5 bg-[#aed0b8] text-white rounded-sm"
            disabled={currentPage === totalPages}
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActivityMonitoring;

