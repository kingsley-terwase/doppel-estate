import React from "react";
import {Routes, Route} from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import DashboardHomePage from "../Pages/Dashboard/DashboardHome";

const DashboardRoutes = () => {
    return (
        <DashboardLayout>
            <Routes>
                <Route path="/" element={<DashboardHomePage />} />         
            </Routes>
        </DashboardLayout>
    );
};

export default DashboardRoutes;
