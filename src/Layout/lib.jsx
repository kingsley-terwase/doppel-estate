import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import EventNoteIcon from '@mui/icons-material/EventNote';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ChurchIcon from '@mui/icons-material/Church';
import GroupIcon from '@mui/icons-material/Group';
import SettingsIcon from '@mui/icons-material/Settings';
import { grey, yellow } from "@mui/material/colors";
import {FONT_FAMILY} from "../Config/font";
import Box from "@mui/material/Box";
import {useLocation} from "react-router-dom";
import { Shapes24Filled, Apps24Filled, CalculatorRegular, WalletRegular, MaximizeRegular, PersonRegular, SettingsRegular, PageFitRegular } from "@fluentui/react-icons";



export const drawerWidth = 240;
export const layoutPad = 22;
export const navHeight = 60;

export const togProps = {
    color: "inherit",
    "aria-label": "open drawer",
    edge: "start",
};

export const modalProps = {
    keepMounted: true,
};

export const navStackRow = {
    direction: "row",
    alignItems: "center",
    gap: 1,
};

export const searchTypoProps = {
    variant: "body2",
    display: "flex",
    alignItems: "center",
    gap: 0.5,
    color: grey[400],
    fontFamily: FONT_FAMILY.secondary,
};

export const avatarBadgeOrigin = {vertical: "bottom", horizontal: "right"};
export const logoLayoutProps = {
    direction: "row",
    alignItems: "center",
    gap: 0.5,
};

export const navIconProps = {
    fontSize: "small",
    style: {
        color: "rgba(255, 255, 255, 0.65)",
    },
};

export const navList = [
    {
        label: "Dashboard",
        link: "/dashboard",
        icon: <Apps24Filled  style={{ fontSize: "14px" }} />,
        subNav: [],
    },
    {
        label: "Listing",
        link: "/dashboard/listing",
        icon: <MaximizeRegular  style={{ fontSize: "20px" }} />,
        subNav: [],
    },
    {
        label: "Message",
        link: "/dashboard/message",
        icon: <CalculatorRegular  style={{ fontSize: "20px" }} />,
        subNav: [],
    },
    {
        label: "Profile",
        link: "/dashboard/profile",
        icon: <PersonRegular style={{ fontSize: "20px" }} />,
        subNav: [],
    },
    {
        label: "Settings",
        link: "#",
        icon: <SettingsRegular style={{ fontSize: "18px" }} />,
        subNav: [],
    },
];

export const showSubMenu = (activeIndex, i, len) => {
    if (activeIndex == i && len > 0) return true;
    return false;
};

export const handleClick = (activeIndex, len, i, update) => {
    if (len < 1 || activeIndex == i) return update(null);
    return update(i);
};

export const showExpandIcon = (len) => {
    if (len > 0) return true;
    return false;
};

export const isActive = (path, subMenu) => {
    const location = useLocation();
    const currentPath = location.pathname;
    if (path === currentPath) return Number(true);
    if (subMenu.length < 1) return Number(false);
    return Number(subMenu.some((item) => item.link === currentPath));
};
