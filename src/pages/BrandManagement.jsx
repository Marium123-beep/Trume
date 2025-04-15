import React, { useState } from "react";
import Header from "../components/Header";
import { Search, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

const generateSlug = (name) => {
  return name
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
};

const BrandManagement = () => {
  const navigate = useNavigate();

  const handleEye = () => {
    navigate("/Johndoebrand"); // ✅ This navigates to the new page
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
          <h1 className="text-xl font-bold">Brand Management</h1>
          <div className="relative w-64 ">
          <input
                          type="text"
                          placeholder="Search"
                          className="w-110 p-3 pl-15 border border-[#f6f6f6] bg-[#f6f6f6] placeholder:text-[#cacaca] rounded-3xl ml-[-180px]"
                        />
              <Search className="absolute left-[-155px] top-4 text-[#4d8073] w-5 h-5" />
          </div>
        </div>

        {/* Table Header */}
        <div className="grid grid-cols-[2fr_3fr_1fr_1fr_auto] bg-[#aed0b8] text-[#609081] font-semibold p-4 rounded-lg w-full">
          <span>Brand Name</span>
          <span>Email</span>
          <span>Total Post</span>
          <span>Status</span>
        </div>

        {/* Table Rows */}
        <div className="mt-4 rounded-lg space-y-5">
          {/* Just displaying all for demo; You can slice based on currentPage */}
          {[
            { name: "John Doe", email: "johndoe@example.com", posts: 15, status: "Inactive" },
            { name: "Jane Smith", email: "janesmith@example.com", posts: 8, status: "Inactive",slug: "Jane Smith" },
            { name: "Michael Brown", email: "michaelbrown@example.com", posts: 22, status: "Inactive" },
            { name: "Emily White", email: "emilywhite@example.com", posts: 5, status: "Inactive" },
            { name: "David Johnson", email: "davidjohnson@example.com", posts: 12, status: "Active" },
            { name: "Sophia Wilson", email: "sophiawilson@example.com", posts: 18, status: "Inactive" },
            { name: "William Green", email: "williamgreen@example.com", posts: 10, status: "Inactive" },
            { name: "Liam Anderson", email: "liamanderson@example.com", posts: 11, status: "Active" },
            { name: "Noah Thomas", email: "	noahthomas@example.com", posts: 14, status: "Active" },
            { name: "Ava Jackson", email: "avajackson@example.com", posts: 6, status: "Inactive" },
            { name: "Mason Harris", email: "masonharris@example.com", posts: 7, status: "Inactive" },
            { name: "Olivia Harris", email: "oliviaharris@example.com", posts: 10, status: "Active" },
            { name: "Isabella Clark", email: "isabellaclark@example.com", posts: 17, status: "Inactive" },
          ].map((item, index) => (
            <div key={index} className="grid grid-cols-[2fr_3fr_1fr_1fr_auto] p-4 bg-[#f0f5f1] text-gray-700 items-center rounded-lg w-full">
              <span>{item.name}</span>
              <span>{item.email}</span>
              <span>{item.posts}</span>
              <span className="font-semibold text-[#4a4b4a]">{item.status}</span>
              <span className="flex justify-center">
                {/* <button onClick={handleEye} className="bg-[#4d8073] text-white p-2 rounded-full ml-[-40px]">
                  <Eye className="w-5 h-5" />
                  
                </button> */}
                <button
                onClick={() => navigate(`/brands/${generateSlug(item.name)}`)}
                className="bg-[#4d8073] text-white p-2 rounded-full ml-[-40px]"
                >
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

export default BrandManagement;
