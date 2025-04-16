import React from "react";
import { FaBell } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook

const Header = () => {
  const navigate = useNavigate(); // Initialize navigate function

  return (
    <div className="flex justify-between items-center p-4 bg-[#f7f9f8]">
      <h2 className="text-[30px] font-normal text-[#010101] ml-[-15px] mt-2">
        Dashboard
      </h2>
      <div className="flex items-center gap-4 absolute ml-[1160px]">
        {/* Notification Icon */}
        <div
          className="w-12 h-12 bg-[#4c7b6d] rounded-full flex justify-center items-center cursor-pointer"
          onClick={() => navigate("/notifications")} // Redirect on click
        >
          <FaBell className="text-white text-lg" />
        </div>

        {/* User Profile Icon */}
        <div
          className="w-12 h-12 border rounded-full flex justify-center items-center cursor-pointer"
          onClick={() => navigate("/profile")} // Navigate to profile page
        >
          <img src="/assets/user.jpg" alt="User" className="rounded-full w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default Header;
