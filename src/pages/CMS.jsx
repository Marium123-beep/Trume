import React from "react";
import Header from "../components/Header";
import { Pencil, Trash } from "lucide-react";
import { useNavigate } from "react-router-dom"; // ✅ Make sure this is imported

const CMS = () => {
  const navigate = useNavigate();

  const handleEdit1 = () => {
    navigate("/Privacypolicy"); // ✅ This navigates to the new page
  };

  const handleEdit2 = () => {
    navigate("/TermsCondition"); // ✅ This navigates to the new page
  };

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <Header />

      <div className="flex flex-col p-6 w-263 h-70 rounded-lg bg-white border border-[#e5e6ea] ">
        <div className="flex justify-between items-center mb-4 mt-[-6px] ">
          <h1 className="text-xl font-bold">CMS</h1>
        </div>

        {/* Pages Label */}
        <div className="flex flex-col justify-center items-start h-15 mt-2 bg-[#f0f5f1] rounded-lg hover:bg-[#aed0b8]">
          <h3 className="ml-2">Pages</h3>
        </div>

        {/* Privacy Policy Row */}
        <div className="flex flex-col justify-center items-start h-15 mt-6 bg-[#f0f5f1] rounded-lg hover:bg-[#aed0b8] relative px-4 py-2">
          <h3 className="ml-[-6px]">Privacy Policy</h3>

          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex gap-3">
            <button
              onClick={handleEdit1} 
              className="bg-[#4d8073] text-white p-2 rounded-full"
            >
              <Pencil className="w-5 h-5" />
            </button>

            <button className="bg-[#4d8073] text-white p-2 rounded-full">
              <Trash className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Terms & Conditions Row */}
        <div className="flex flex-col justify-center items-start h-15 mt-6 bg-[#f0f5f1] rounded-lg hover:bg-[#aed0b8] relative px-4 py-2">
          <h3 className="ml-[-6px]">Terms & Conditions</h3>

          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex gap-3">
            <button
              onClick={handleEdit2}
              className="bg-[#4d8073] text-white p-2 rounded-full"
            >
              <Pencil className="w-5 h-5" />
            </button>

            <button className="bg-[#4d8073] text-white p-2 rounded-full">
              <Trash className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CMS;
