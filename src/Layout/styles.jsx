import {blueGrey, grey, lightGreen, red} from "@mui/material/colors";
import {drawerWidth, layoutPad, navHeight} from "./lib";
import {FONT_FAMILY} from "../Config/font";
import { COLOR } from "../Config/color";


export const styles = {
  
    wrap: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        zIndex: 10,
        height: "100vh",
    },

    logoImg: {
        width: "30px",
        height: "30px",
    },

    togBtn: {
        mr: 2,
        display: {sm: "none"},
    },
    sidenavWrap: {
        width: {sm: drawerWidth},
        flexShrink: {sm: 0},
        borderRight: "1px solid rgba(255, 255, 255, 0.2)",
    },
    paperSm: {
        display: {xs: "block", sm: "none"},
        "& .MuiDrawer-paper": {
            backgroundColor: "#000",
            boxSizing: "border-box",
            width: drawerWidth,
            overflowY: "visible",
        },
    },
    paperLg: {
        display: {xs: "none", sm: "block"},
        "& .MuiDrawer-paper": {
            backgroundColor: "#000",
            boxSizing: "border-box",
            width: drawerWidth,
            overflowY: "visible",
        },
    },
    content: {
      flexGrow: 1,
        pl: layoutPad + "px",
        pr: layoutPad + "px",
        pt: 10,
        pb: layoutPad + "px",
        maxWidth: "100%",
        minHeight: "100vh",
        flex: 1,
        overflowY: "auto",
    },
  nav: {
        position: "fixed",
        width: "100%",
        padding: "1rem",
        pl: {xs: layoutPad + "px", md: `${drawerWidth + layoutPad}px`},
        pr: layoutPad + "px",
        height: navHeight + "px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        // borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
        // zIndex: -99,
    },
    sidenav: {
        px: 3,
        pt: 2,
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
    },
    sideNavig: {
        flex: 1,
        height: "100%",
        overflowY: "auto",
        "&::-webkit-scrollbar": {
            width: "5px",
        },
        "&::-webkit-scrollbar-track": {
            background: "#f1f1f1",
        },
        "&::-webkit-scrollbar-thumb": {
            background: "#888",
            borderRadius: "999px",
        },
        "&::-webkit-scrollbar-thumb:hover": {
            background: "#555",
        },
    },
    navLInkIn: {
        display: "flex",
        alignItems: "center",
        gap: 1,
    },
    navLinkSub: {
        display: "flex",
        alignItems: "center",
        gap: "8px",
        color: "rgba(255, 255, 255, 0.75)",
        textDecoration: "none",
        padding: "0.5rem 1.5rem",
        borderRadius: "6px",
        fontFamily: FONT_FAMILY.secondary,
        fontSize: "0.75rem",
        fontWeight: 600,
    },
    linkWrap: {
        display: "flex",
        flexDirection: "column",
    },
};
