import React from "react";
import { NavLink } from "react-router-dom"; // ✅ NavLink Import
import { FaTh, FaUsers, FaSignOutAlt } from "react-icons/fa";
import { MdManageAccounts, MdOutlineAnalytics } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { RiShieldUserLine, RiMoneyDollarCircleLine } from "react-icons/ri";
import { BsDatabaseGear } from "react-icons/bs";

const Sidebar = () => {
  return (
    //<div className="ml-64  p-5">

      <div className="w-64 bg-[#cde1d4] h-screen fixed top-0 left-0 p-5 flex flex-col justify-between">
        {/* Logo */}
        <div className="flex justify-center items-center mb-5 mt-9">
          <img src="/assets/logo.png" alt="Logo" className="w-23 h-23 object-contain" />
        </div>

        {/* Menu Items */}
        <ul className="space-y-1 flex-grow mt-8 text-[15px] font-medium cursor-pointer text-[#528579]">
          <NavLink to="/" className={({ isActive }) => isActive ? "bg-[#aed0b8] p-3 rounded-3xl flex items-center gap-2" : "p-3 flex items-center gap-2"}>
            <FaTh /> Dashboard
          </NavLink>
          <NavLink to="/user-management" className={({ isActive }) => isActive ? "bg-[#aed0b8] p-3 rounded-3xl flex items-center gap-2" : "p-3 flex items-center gap-2"}>
            <FaUsers /> User Management
          </NavLink>
          <NavLink to="/brand-management" className={({ isActive }) => isActive ? "bg-[#aed0b8] p-3 rounded-3xl flex items-center gap-2" : "p-3 flex items-center gap-2"}>
            <TbBrandBooking /> Brand Management
          </NavLink>
          <NavLink to="/activity-monitoring" className={({ isActive }) => isActive ? "bg-[#aed0b8] p-3 rounded-3xl flex items-center gap-2" : "p-3 flex items-center gap-2"}>
            <MdManageAccounts /> Activity Monitoring
          </NavLink>
          <NavLink to="/user-deactivation" className={({ isActive }) => isActive ? "bg-[#aed0b8] p-3 rounded-3xl flex items-center gap-2" : "p-3 flex items-center gap-2"}>
            <RiShieldUserLine /> User Deactivation
          </NavLink>
          <NavLink to="/transaction-management" className={({ isActive }) => isActive ? "bg-[#aed0b8] p-3 rounded-3xl flex items-center gap-2 text-nowrap" : "p-3 flex items-center gap-2 text-nowrap"}>
            <RiMoneyDollarCircleLine /> Transaction Management
          </NavLink>
          <NavLink to="/reports-analytics" className={({ isActive }) => isActive ? "bg-[#aed0b8] p-3 rounded-3xl flex items-center gap-2" : "p-3 flex items-center gap-2"}>
            <MdOutlineAnalytics /> Reports & Analytics
          </NavLink>
          <NavLink to="/cms" className={({ isActive }) => isActive ? "bg-[#aed0b8] p-3 rounded-3xl flex items-center gap-2" : "p-3 flex items-center gap-2"}>
            <BsDatabaseGear /> CMS
          </NavLink>
        </ul>

        {/* Logout Button */}
        <button className="mt-[-8px] flex items-center justify-center gap-2 bg-[#4c7062] text-white p-3 rounded-3xl w-full cursor-pointer">
          <FaSignOutAlt /> Logout
        </button>
      </div>
    //</div>
  );
};

export default Sidebar;
