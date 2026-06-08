import React from "react";

import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import CardGrid from "../../../Component/CardGrid";
import CardGroup from "../../../Component/CardGroup";
import ReusableTable from "../../../Component/Tabulation";


const AdminDashboard = () => {
    const columns = [
        {
            field: "id",
            headerName: "ID",
        },
        {
            field: "name",
            headerName: "Client Name",
        },
        {
            field: "property",
            headerName: "Property",
        },
        {
            field: "amount",
            headerName: "Amount",
        },
        {
            field: "status",
            headerName: "Status",
            renderCell: (row) => (
                <Chip
                    label={row.status}
                    color={
                        row.status === "Completed"
                            ? "success"
                            : row.status === "Pending"
                            ? "warning"
                            : "error"
                    }
                    size="small"
                    sx={{
                        borderRadius: "8px",
                        fontWeight: 600,
                    }}
                />
            ),
        },
    ];

    const rows = [
        {
            id: 1,
            name: "John Doe",
            property: "3 Bedroom Duplex",
            amount: "$120,000",
            status: "Completed",
        },
        {
            id: 2,
            name: "Sarah Johnson",
            property: "Luxury Apartment",
            amount: "$85,000",
            status: "Pending",
        },
        {
            id: 3,
            name: "Michael Smith",
            property: "Office Space",
            amount: "$230,000",
            status: "Cancelled",
        },
      
    ];

    return (
            <Box sx={{display: "flex", flexDirection: "column", gap: 3 }}>
                <CardGrid />
                <CardGroup />
                <ReusableTable
                    title="Recent Property Transactions"
                    columns={columns}
                    rows={rows}
                />
            </Box>
    );
};

export default AdminDashboard;