import React from "react";

const Notification = () => {
  const notifications = [
    { user: "Austin Robertson", message: "Lorem Ipsum is simply dummy text...", time: "9 min ago" },
    { user: "Austin Robertson", message: "Lorem Ipsum is simply dummy text...", time: "9 min ago" },
    { user: "Austin Robertson", message: "Lorem Ipsum is simply dummy text...", time: "9 min ago" },
    { user: "Austin Robertson", message: "Lorem Ipsum is simply dummy text...", time: "9 min ago" },
    { user: "Austin Robertson", message: "Lorem Ipsum is simply dummy text...", time: "9 min ago" },
    { user: "Austin Robertson", message: "Lorem Ipsum is simply dummy text...", time: "9 min ago" },
    { user: "Austin Robertson", message: "Lorem Ipsum is simply dummy text...", time: "9 min ago" },
    { user: "Austin Robertson", message: "Lorem Ipsum is simply dummy text...", time: "9 min ago" },
    { user: "Austin Robertson", message: "Lorem Ipsum is simply dummy text...", time: "9 min ago" },
    { user: "Austin Robertson", message: "Lorem Ipsum is simply dummy text...", time: "9 min ago" },
    { user: "Austin Robertson", message: "Lorem Ipsum is simply dummy text...", time: "9 min ago" },
    { user: "Austin Robertson", message: "Lorem Ipsum is simply dummy text...", time: "9 min ago" },
    { user: "Abdul RAFAY", message: "Lorem Ipsum is simply dummy text...", time: "9 min ago" },
    { user: "Abdul RAFAY", message: "Lorem Ipsum is simply dummy text...", time: "9 min ago" },
    { user: "Abdul RAFAY", message: "Lorem Ipsum is simply dummy text...", time: "9 min ago" },
    { user: "Abdul RAFAY", message: "Lorem Ipsum is simply dummy text...", time: "9 min ago" },
    { user: "Abdul RAFAY", message: "Lorem Ipsum is simply dummy text...", time: "9 min ago" },
    { user: "Abdul RAFAY", message: "Lorem Ipsum is simply dummy text...", time: "9 min ago" },
    { user: "Wajahat Baloch", message: "Lorem Ipsum is simply dummy text...", time: "9 min ago" },
  ];


  const handleViewAll = () => {
    // Replace with your actual URL for user management page
    window.open("http://localhost:5173/notifications", "_blank");
  };

  return (
    <div className="bg-white rounded-xl p-4 border border-[#e5e6ea] ml-[-15px] mt-[-7px] w-[420px] ">
      {/* Header with View All Button */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Notifications</h2>
        <button className="border border-[#e5e6ea] bg-[#fafafb] text-[#558679] px-3 py-1 rounded-sm mt-[-12px] w-19 h-7.5 flex justify-center items-center text-[15px] text-nowrap" onClick={handleViewAll}>
          View All
        </button>
      </div>

      {/* Notification List */}
      <div className="space-y-4 max-h-138 overflow-y-auto ">
        {notifications.map((notification, index) => (
          <div key={index} className="flex justify-between items-center p-3 bg-white border border-[#e5e6ea] rounded-lg hover:bg-[#f0f5f1]">
            <div>
              <h4 className="font-semibold text-[#404040]">{notification.user}</h4>
              <p className="text-[#8d8d8d] text-sm">{notification.message}</p>
            </div>
            <span className="text-[#4d8073] text-lg">{notification.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notification;

