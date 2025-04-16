import React, { useRef, useState, useEffect } from "react";
import { Eye } from "lucide-react";

const Table = () => {
  const users = [
    { name: "John Doe", email: "johndoe@example.com", posts: 15, status: "Active", kyc: "Verified" },
    { name: "Jane Smith", email: "janesmith@example.com", posts: 8, status: "Inactive", kyc: "Pending" },
    { name: "Michael Brown", email: "michaelbrown@example.com", posts: 22, status: "Active", kyc: "Verified" },
    { name: "Emily White", email: "emilywhite@example.com", posts: 5, status: "Inactive", kyc: "Rejected" },
    { name: "David Johnson", email: "davidjohnson@example.com", posts: 12, status: "Active", kyc: "Verified" },
    { name: "Sophia Wilson", email: "sophiawilson@example.com", posts: 18, status: "Inactive", kyc: "Pending" },
    { name: "Robert Taylor", email: "roberttaylor@example.com", posts: 9, status: "Active", kyc: "Verified" },
    { name: "Olivia Martinez", email: "oliviamartinez@example.com", posts: 7, status: "Inactive", kyc: "Rejected" },
    { name: "Sophia Wilson", email: "sophiawilson@example.com", posts: 18, status: "Inactive", kyc: "Pending" },
    { name: "Robert Taylor", email: "roberttaylor@example.com", posts: 9, status: "Active", kyc: "Verified" },
    { name: "Olivia Martinez", email: "oliviamartinez@example.com", posts: 7, status: "Inactive", kyc: "Rejected" },
  ];

  const scrollRef = useRef(null);
  const [showVerticalScroll, setShowVerticalScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const el = scrollRef.current;
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 5) {
        setShowVerticalScroll(true);
      } else {
        setShowVerticalScroll(false);
      }
    };

    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (el) el.removeEventListener("scroll", handleScroll);
    };
  }, []);

  
  const handleViewAll = () => {
    window.open("http://localhost:5173/user-management", "_blank");
  };

  return (
    <div className="bg-white rounded-xl p-6 border border-[#e5e6ea] overflow-x-auto ml-[-35px] mt-[-7px] w-215 ">
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-xl font-bold mt-[-22px] ml-[-14px]">Recent User</h2>
        <button className="border border-[#e5e6ea] bg-[#fafafb] text-[#558679] px-3 py-1 rounded-sm mt-[-12px] w-19 h-7.5 flex justify-center items-center text-[15px] text-nowrap" onClick={handleViewAll}>
          View All
        </button>
      </div>

      <div
        ref={scrollRef}
        className="max-w-full overflow-x-auto transition-all duration-300"
        style={{ overflowY: showVerticalScroll ? "auto" : "hidden", maxHeight: "550px" }}
      >
        <table className="min-w-full table-auto border-separate border-spacing-y-3">
          <thead className="sticky top-0 z-10">
            <tr>
              <th className="text-left text-base font-semibold py-4 px-6 bg-[#aed0b8] text-[#609081] rounded-l-lg">Name</th>
              <th className="text-left text-base font-semibold py-4 px-12 bg-[#aed0b8] text-[#609081]">Email</th>
              <th className="text-left text-base font-semibold py-4 px-14 pr-10 bg-[#aed0b8] text-[#609081] whitespace-nowrap">Total Posts</th>
              <th className="text-left text-base font-semibold py-4 px-30 bg-[#aed0b8] text-[#609081]">Status</th>
              <th className="text-left text-base font-semibold py-4 px-6 bg-[#aed0b8] text-[#609081] whitespace-nowrap">KYC Status</th>
              <th className="text-center text-base font-semibold py-4 px-6 bg-[#aed0b8] text-[#609081] rounded-r-lg">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td className="py-4 px-6 bg-[#f0f5f1] rounded-l-2xl whitespace-nowrap">{user.name}</td>
                <td className="py-4 px-12 bg-[#f0f5f1]">{user.email}</td>
                <td className="py-4 px-14 bg-[#f0f5f1]">{user.posts}</td>
                <td className="bg-[#f0f5f1] text-[#272727] py-4 px-30">{user.status}</td>
                <td className="py-4 px-6 bg-[#f0f5f1] text-[#272727]">{user.kyc}</td>
                <td className="py-4 px-6 bg-[#f0f5f1] text-center rounded-r-2xl">
                  <button className="p-2 bg-[#4d8073] text-white rounded-3xl hover:bg-[#3e6a5f] transition duration-150 ease-in-out">
                    <Eye size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
