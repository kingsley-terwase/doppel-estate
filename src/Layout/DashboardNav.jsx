import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { navStackRow, searchTypoProps, togProps } from "./lib";
import { styles } from "./styles";
import MenuIcon from "@mui/icons-material/Menu";
import { FONT_FAMILY } from "../Config/font";
import { useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import { BUTTON_BORDER } from "../Config/color";
import ThemeToggleButton from "./ThemeToggleButton"; 
import { useTheme } from "@mui/material";
import { WalletCreditCardRegular } from "@fluentui/react-icons";

const DashboardNav = ({ onTog }) => {
    const theme = useTheme();
    const location = useLocation();

    const getCurrentPagename = (pathname) => {
        switch (pathname) {
            case "/dashboard":
                return "Dashboard";
            case "/dashboard/listing":
                return "Listing";
            case "/dashboard/message":
                return "Message";
            case "/dashboard/profile":
                return "Profile";
            default:
                return "Dashboard";
        }
    };

    const pageName = getCurrentPagename(location.pathname);

    return (
        <Box
            sx={{
                ...styles.nav,
                color: theme.palette.text.primary,
                backgroundColor: 'black',
                borderBottom:
                    theme.palette.mode === "light"
                        ? "1px solid rgba(0, 0, 0, 0.1)"
                        : "1px solid rgba(255, 255, 255, 0.2)",
            }}
        >
            <Stack {...navStackRow}>
                <IconButton onClick={onTog} sx={styles.togBtn} {...togProps}>
                    <MenuIcon sx={{ color: theme.palette.text.primary }} />
                </IconButton>
                <Typography variant="body1">{pageName}</Typography>
            </Stack>

            <Stack {...navStackRow}>
                <ThemeToggleButton />
            </Stack>
        </Box>
    );
};

export default DashboardNav;
