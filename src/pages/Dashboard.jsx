import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Card from "../components/Card";
import ChartUserGrowth from "../components/ChartUserGrowth";
import ChartUserAnalytics from "../components/ChartUserAnalytics";
import Table from "../components/Table"; 
import Notification from "../components/Notification"; 

const Dashboard = () => {
  const cardData = [
    { title: "Total Users", value: "3057" },
    { title: "Active Users", value: "3057" },
    { title: "Flagged Users", value: "3057" },
    { title: "Business Users", value: "200" },
  ];
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <Header />
        
        {/* Page Content */}
        <div className="p-5">

           {/* Cards Section */}
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {cardData.map((e,i)=>(
                <Card title={e.title} value={e.value} />
))}
          
          </div>

          {/* Charts Section */}
          <div className="flex  flex-col1 md:flex-col2 gap-6 p-4 ">

          <ChartUserGrowth height={310} width={580}/>

          <ChartUserAnalytics/>
          </div>

         {/* Users Table Section
         <Table /> */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 ">
        <div className="md:col-span-2 w-[668px]">
        <Table />
        </div>
        <div className="md:col-span-1">
        <Notification />
        </div>
        </div>


        </div>
      </div>
    </div>
  );
};

export default Dashboard;


