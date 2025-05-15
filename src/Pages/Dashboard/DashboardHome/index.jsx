import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardGrid from "../../../Component/CardGrid";
import CardGroup from "../../../Component/CardGroup";
import CardActivity from "../../../Component/CardActivity";

const DashboardHomePage = () => {
    return (
        <>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
                <CardGrid />
                <CardGroup />
                <CardActivity />
            </Box>
        </>
    );
};

export default DashboardHomePage;
