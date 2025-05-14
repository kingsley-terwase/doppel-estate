import {useState} from "react";
import {styled, useTheme} from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import {useLocation} from "react-router-dom";
import DashboardNavigLink from "./DashboardNavigLink";
import {navList, drawerWidth} from "./lib";
import Stack from "@mui/material/Stack";
import {MegaphoneRegular, QuestionCircleRegular} from "@fluentui/react-icons";
import {styles} from "./styles";
import Typography from "@mui/material/Typography";
import { FONT_FAMILY } from "../Config/font";
import { COLOR } from "../Config/color";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";


const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
});

const closedMixin = (theme) => ({
    width: "64px",
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
});

const DrawerHeader = styled("div")(({theme}) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(1, 2),
    ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {shouldForwardProp: (prop) => prop !== "open"})(({theme, open}) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open
        ? {...openedMixin(theme), "& .MuiDrawer-paper": openedMixin(theme)}
        : {...closedMixin(theme), "& .MuiDrawer-paper": closedMixin(theme)}),
}));

export default function DashboardSidenav() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
    const [open, setOpen] = useState(!isSmallScreen);
    const location = useLocation();

    const toggleDrawer = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    return (
        <Box sx={{display: "flex", flexDirection: "column", height: "100vh"}}>
            <CssBaseline />
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <Stack direction="row" spacing={1} alignItems="center">
                        <img style={styles.logoImg} src="/Logo/Logo.png" alt="logo" />
                        {open && (
                            <Typography
                                variant="body1"
                                sx={{
                                    fontSize: {xs: "15px", md: "18px"},
                                    fontFamily: FONT_FAMILY.primary,
                                    fontWeight: "700",
                                    color: COLOR.text.primary,
                                }}
                            >
                                Doppel Estate
                            </Typography>
                        )}
                    </Stack>
                    <IconButton onClick={toggleDrawer} sx={{color: theme.palette.mode === "light" ? "#000" : "#fff"}}>
                        {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>

                <Divider />

                <List sx={{flexGrow: 1}}>
                    {navList.map(({label, link, icon}) => (
                        <DashboardNavigLink key={link} to={link} isactive={location.pathname === link ? 1 : 0}>
                            <Stack direction="row" spacing={2} sx={{px: "10px"}}>
                                <Box>{icon}</Box>
                                {open && <Box>{label}</Box>}
                            </Stack>
                        </DashboardNavigLink>
                    ))}
                </List>

                <Divider />

                <Box sx={{paddingBottom: "1rem", paddingTop: "1rem"}}>
                    <Stack spacing={2} sx={{px: open ? "16px" : "10px"}}>
                        <Stack direction="row" spacing={1} alignItems="center">
                            <QuestionCircleRegular style={{fontSize: "20px"}} />
                            {open && <Typography sx={{fontSize: "14px", color: "white"}}>Help</Typography>}
                        </Stack>
                        <Stack direction="row" spacing={1} alignItems="center">
                            <MegaphoneRegular style={{fontSize: "20px"}} />
                            {open && <Typography sx={{fontSize: "14px", color: "white"}}>Report</Typography>}
                        </Stack>
                    </Stack>
                </Box>
            </Drawer>
        </Box>
    );
}
