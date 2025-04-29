import {useState} from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import {styles} from "./styles";
import DashboardNav from "./DashboardNav";
import DashboardSideNav from "./DashboardSidenav";
import { useTheme } from "@mui/material";

const DashboardLayout = ({children}) => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const theme = useTheme();

    const handleClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleTransitionEnd = () => setIsClosing(false);

    const handleToggle = () => {
        if (!isClosing) setMobileOpen(!mobileOpen);
    };

    return (
        <>
            <CssBaseline />
            <DashboardNav onTog={handleToggle} />

            <Box sx={{display: "flex", height: "100vh"}}>
                <DashboardSideNav mobileOpen={mobileOpen} onClose={handleClose} onTransitionEnd={handleTransitionEnd} />

                <Box component="main" sx={{ ...styles.content, backgroundColor: theme.palette.mode === "light" ?  "whitesmoke" : "",}}>
                    {children}
                </Box>
            </Box>
        </>
    );
};

export default DashboardLayout;
