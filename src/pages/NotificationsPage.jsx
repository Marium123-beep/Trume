import React from "react";
import Header from "../components/Header"; // Ensure correct path

const notifications = [
  { name: "Whitney Francis", message: "Deployed Workcation (2d89f0c8 in master) to production", time: "1h" },
  { name: "Michael Scott", message: "Reviewed and approved your pull request", time: "2h" },
  { name: "Pam Beesly", message: "Commented on your design draft", time: "3h" },
  { name: "Jim Halpert", message: "Pushed new commits to the repository", time: "4h" },
  { name: "Dwight Schrute", message: "Updated the project documentation", time: "5h" },
  { name: "Angela Martin", message: "Marked your task as completed", time: "6h" },
  { name: "Stanley Hudson", message: "Left feedback on your latest report", time: "7h" },
  { name: "Ryan Howard", message: "Requested changes to your proposal", time: "8h" },
  { name: "Kelly Kapoor", message: "Mentioned you in a comment", time: "9h" },
];

const Notifications = () => {
  return (
    <div>
      {/* Header Component Include Kiya */}
      <Header />  
      
      <div className="p-6">
      <div className="border border-[#e5e6ea] rounded-lg bg-white  p-6 w-[1120px] max-w-[95%] ml-[-20px] mt-[-25px]">
        <h2 className="text-xl font-bold mb-4 mt-[-7px] ml-[-7px]">Notifications</h2>
        <div className="border border-[#e5e6ea] rounded-lg p-4 bg-white max-h-[770px] overflow-y-auto">
          {notifications.map((notification, index) => (
            <div key={index} className="py-3 flex justify-between items-center last:border-b-0">
              <div className="mt-2 ml-2">
                <h3 className="text-lg font-normal">{notification.name}</h3>
                <p className="text-gray-600">{notification.message}</p>
              </div>
              <span className="text-[#70998f] text-sm">{notification.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Notifications;

