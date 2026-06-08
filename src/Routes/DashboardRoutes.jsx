import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import AdminDashboard from "../Pages/Dashboard/AdminDashboard";
import Message from "../Pages/Dashboard/Message";
import Profile from "../Pages/Dashboard/Profile";
import Permission from "../Pages/Dashboard/Permissions";

const DashboardRoutes = () => {
    return (
        <DashboardLayout>
            <Routes>
                <Route index element={<AdminDashboard />} />
                <Route path="message" element={<Message />} />
                <Route path="profile" element={<Profile />} />
                <Route path="permission" element={<Permission />} />
                <Route path="*" element={<Navigate to="/dashboard" replace />} />
            </Routes>
        </DashboardLayout>
    );
};

export default DashboardRoutes;