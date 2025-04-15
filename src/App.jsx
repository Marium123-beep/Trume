import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import UserManagement from "./pages/UserManagement";
import BrandManagement from "./pages/BrandManagement";
import ActivityMonitoring from "./pages/ActivityMonitoring";
import UserDeactivation from "./pages/UserDeactivation";
import TransactionManagement from "./pages/TransactionManagement";
import ReportsAnalytics from "./pages/ReportsAnalytics";
import CMS from "./pages/CMS";
import NotificationsPage from "./pages/NotificationsPage";
import Profile from "./pages/Profile";
import './App.css'
import { User } from "lucide-react";
import Privacypolicy from "./pages/Privacypolicy"; 
import TermsCondition from "./pages/TermsCondition"; 
import  Johndoebrand from "./pages/Johndoebrand.jsx"; 
import Johndoeactivity from "./pages/Johndoeactivity.jsx";



const App = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="ml-64 p-5 w-full">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/user-management" element={<UserManagement />} />
            <Route path="/brand-management" element={<BrandManagement />} /> 
            <Route path="/activity-monitoring" element={<ActivityMonitoring />} />
            <Route path="/user-deactivation" element={<UserDeactivation />} />
            <Route path="/transaction-management" element={<TransactionManagement />} />
            <Route path="/reports-analytics" element={<ReportsAnalytics />} />
            <Route path="/cms" element={<CMS />} />
            <Route path="/notifications" element={<NotificationsPage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/privacypolicy" element={<Privacypolicy />} /> 
            <Route path="/termscondition" element={<TermsCondition />} />
            {/* <Route path="/Johndoe" element={<Johndoe />} />  */}
            <Route path="/brands/:slug" element={<Johndoebrand />} />
            //{/* //slug step6 */}
            <Route path="/activity/:slug" element={<Johndoeactivity />} />
            
              
          </Routes>
        </div>
      </div>
    </Router>
  );
};


export default App
