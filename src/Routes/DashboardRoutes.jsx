import React from "react";
import {Routes, Route} from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import DashboardHomePage from "../Pages/Dashboard/DashboardHome";
import Message from "../Pages/Dashboard/Message";
import Profile from "../Pages/Dashboard/Profile";

const DashboardRoutes = () => {
    return (
        <DashboardLayout>
            <Routes>
                <Route path="/" element={<DashboardHomePage />} />
                <Route path="/dashboard/message" element={<Message />} />  
                <Route path="/dashboard/profile" element={<Profile />} />
            </Routes>
        </DashboardLayout>
    );
};

export default DashboardRoutes;
