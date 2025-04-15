import React, { useState } from "react";
import Header from "../components/Header";
import { Pencil, Trash } from "lucide-react";
import { useParams } from "react-router-dom";

const Johndoebrand = () => {
  const { slug } = useParams();
  const [activeTab, setActiveTab] = useState("brandPost");

  return (
    <div>
      <Header />

      {/* Brand Info Card (static) */}
      <div className="flex flex-col p-6 w-220 h-70 rounded-lg border border-[#4d8073] absolute">
        <h2 className="text-[18px] font-normal mr-2 text-black mt-[-5px]">Brand Details</h2>

        <div className="bg-white p-6 w-210 h-50 rounded-sm mt-3 mr-3 shadow-xs">
          <img src="/assets/john.png" alt="" className="mt-[-15px] ml-[-15px]" />

          <div className="absolute right-7 top-1/3 transform -translate-y-1/2 flex gap-3">
            <button className="bg-[#4d8073] text-white p-2 rounded-full">
              <Pencil className="w-6 h-6" />
            </button>
          </div>

          <h3 className="ml-[-14px] mt-2 text-[#404040] text-[16px] font-normal">BrandX</h3>
          <p className="text-[#919191] font-normal text-[14px] ml-[-14px]">contact@brandx.com</p>
          <p className="text-[#404040] font-normal text-[16px] ml-[-14px] mt-6">Status</p>
          <p className="text-[#404040] font-medium text-[18px] ml-[-14px] mt-2">Active</p>
        </div>
      </div>

      {/* Buttons for Tabs */}
      <div className="flex gap-3  p-6 w-220 h-320 mt-78 rounded-lg border border-[#4d8073] ">
      <div
    className={`flex gap-3 transition-all duration-300 ${
      activeTab === "activityLog" ? "h-[10px]" : "h-[100px]"
    }`}
  >
        
        <button
          onClick={() => setActiveTab("brandPost")}
          className={`text-[16px] font-normal rounded-3xl cursor-pointer w-32 h-12 whitespace-nowrap text-[#023a2d] ${
            activeTab === "brandPost" ? "bg-[#aed0b8]" : "bg-[#cde1d4]"
          }`}
        >
          Brand Post
        </button>
      
        <button
          onClick={() => setActiveTab("activityLog")}
          className={`text-[16px] font-normal rounded-3xl cursor-pointer w-32 h-12 whitespace-nowrap text-[#023a2d] ${
            activeTab === "activityLog" ? "bg-[#aed0b8]" : "bg-[#cde1d4]"
          }`}
        >
          Activity Log
        </button>
        </div>
      </div>
      {/* Tab Content */}
      <div className="mt-[-500px] px-6">
        {activeTab === "brandPost" ? (
          <div>
            <h2 className="text-xl font-semibold mt-[-1140px]">Posts</h2>

            {/* Brand Posts data*/}
            <div className="bg-white w-210 h-100 rounded-lg mt-[60px] shadow-xs ">
            <div className="bg-[#f0f6f5] p-4 rounded-xl mb-6 w-205 h-95 border border-[#d1d1d1] absolute mt-[10px] ml-[10px]">
              <p className="mb-2">Join me for a live chat tomorrow at 6 PM! Let's talk design, trends, and everything UI. 🗨️ Don’t miss it, it’s only up for 2 days!</p>
              <img src="https://good-nature-blog-uploads.s3.amazonaws.com/uploads/2022/01/good-nature-homepage-hero_2-scaled.jpg" className="rounded-md w-200 h-70" alt="post" />
                  {/* Buttons */}
                  <div className="relative right-[-700px] top-[-90px] flex gap-2">
              <button className="bg-[#4d8073] text-white p-4 rounded-3xl absolute mt-[-420px]">
              <Pencil className="w-17 h-4" />
             </button>
             <button className="bg-[#4d8073] text-white p-4 rounded-full absolute mt-[-350px]">
             <Trash className="w-17 h-4" />
             </button>
            </div>
            </div>
            </div>
            <h2 className="text-xl font-semibold mt-[90px]">Posts</h2>
            {/* Posts */}
            <div className="bg-white w-210 h-100 rounded-lg mt-[60px] shadow-xs ">
            <div className="bg-[#f0f6f5] p-4 rounded-xl mb-6 w-205 h-95 border border-[#d1d1d1] absolute mt-[10px] ml-[10px]">
              <p className="mb-2">Excited to share my latest blog post on UX design patterns! 🚀 Check it out now!</p>
              <img src="https://img.freepik.com/premium-photo/wide-angle-shot-single-tree-growing-clouded-sky-sunset-surrounded-by-grass_181624-22807.jpg" className="rounded-md w-200 h-70" alt="post" />

                {/* Buttons */}
              <div className="relative right-[-700px] top-[-90px] flex gap-2">
              <button className="bg-[#4d8073] text-white p-4 rounded-3xl absolute mt-[-390px]">
              <Pencil className="w-17 h-4" />
             </button>
             <button className="bg-[#4d8073] text-white p-4 rounded-3xl absolute mt-[-320px]">
             <Trash className="w-17 h-4" />
             </button>
            </div>
            </div>
            </div>
          </div>
        ) : (
          <div>
           
            {/* Activity Logs data */}
         <h2 className="text-[18px] font-normal mb-4 my-[-1190px] text-[#010101]">
         Activity Logs
         </h2>

        <div className="w-[840px] max-h-[500px] overflow-y-auto pr-2 rounded-xl bg-white">
        <table className="text-left w-full border-separate border-spacing-0">
        <thead className="sticky top-0 bg-[#aed0b8] text-[#4d8073]">
        <tr>
        <th className="p-3 rounded-tl-xl">Timestamp</th>
        {/* <th className="p-3 rounded-tr-xl">Action</th> */}
       </tr>
       </thead>

    <tbody>
      {Array(30)
        .fill(0)
        .map((_, i) => (
          <tr key={i}>
            <td colSpan={2}>
              <div className="flex justify-between bg-[#f0f5f1] p-3 rounded-xl mt-4 h-15">
                <span className="mt-2">2025-02-03</span>
                <span className="mt-2 text-[#5a8b7d]">
                  {i % 2 === 0 ? "Updated Brand Information" : "Added A New Post"}
                </span>
              </div>
            </td>
          </tr>
        ))}
    </tbody>
  </table>
</div>
</div>
        )}
      </div>
    </div>
    
  );
};

export default Johndoebrand;
