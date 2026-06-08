import React from "react";

import {
    Box,
    Drawer,
    Typography,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Stack,
    Divider,
} from "@mui/material";

import {
    alpha,
    useTheme,
} from "@mui/material/styles";

import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import HomeWorkRoundedIcon from "@mui/icons-material/HomeWorkRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import AdminPanelSettingsRoundedIcon from "@mui/icons-material/AdminPanelSettingsRounded";

import { useLocation, useNavigate } from "react-router-dom";

import { FONT_FAMILY } from "../Config/font";

const drawerWidth = 260;

const menuItems = [
    {
        title: "Estate",
        icon: <HomeWorkRoundedIcon />,
        path: "/dashboard",
    },
    {
        title: "Admin officer",
        icon: <AdminPanelSettingsRoundedIcon />,
        path: "/dashboard/admin",
    },
    {
        title: "Realtors",
        icon: <GroupsRoundedIcon />,
        path: "/dashboard/realtors",
    },
    {
        title: "Settings",
        icon: <SettingsRoundedIcon />,
        path: "/dashboard/settings",
    },
    {
        title: "Sign out",
        icon: <LogoutRoundedIcon />,
        path: "/logout",
    },
];

const DashboardSideNav = ({
    mobileOpen,
    onClose,
    onTransitionEnd,
}) => {
    const theme = useTheme();

    const navigate = useNavigate();

    const location = useLocation();

    const isLight =
        theme.palette.mode === "light";

    const handleNavigate = (path) => {
        navigate(path);

        if (onClose) {
            onClose();
        }
    };

    const drawerContent = (
        <Box
            sx={{
                height: "100%",

                display: "flex",

                flexDirection: "column",

                backgroundColor:
                    theme.palette.background.paper,

                color:
                    theme.palette.text.primary,

                overflow: "hidden",
            }}
        >

            <Box
                sx={{
                    px: 3,
                    py: 3,

                    borderBottom: `1px solid ${alpha(
                        theme.palette.custom.border
                            .subtle,
                        0.5
                    )}`,
                }}
            >
                <Stack
                    direction="row"
                    spacing={1.5}
                    alignItems="center"
                >
                    <Box
                        sx={{
                            width: 46,
                            height: 46,

                            borderRadius: "14px",

                            display: "flex",

                            alignItems: "center",

                            justifyContent:
                                "center",

                            background: `linear-gradient(135deg,
                                ${theme.palette.primary.main},
                                ${theme.palette.primary.dark}
                            )`,

                            color:
                                theme.palette.common
                                    .white,

                            boxShadow: `0 8px 18px ${alpha(
                                theme.palette.primary
                                    .main,
                                0.28
                            )}`,
                        }}
                    >
                        <DashboardRoundedIcon />
                    </Box>

                    <Box>
                        <Typography
                            sx={{
                                fontSize: "17px",

                                fontWeight: 800,

                                lineHeight: 1.1,

                                fontFamily:
                                    FONT_FAMILY.primary,

                                color: theme
                                    .palette.text
                                    .primary,
                            }}
                        >
                            Prime Estate
                        </Typography>

                        <Typography
                            sx={{
                                fontSize: "12px",

                                mt: 0.4,

                                color: theme
                                    .palette.text
                                    .secondary,
                            }}
                        >
                            Admin Dashboard
                        </Typography>
                    </Box>
                </Stack>
            </Box>

            {/* MENU */}
            <Box
                sx={{
                    flex: 1,

                    px: 2,
                    py: 2,

                    overflowY: "auto",
                }}
            >
                <Typography
                    sx={{
                        px: 1.5,
                        mb: 1.5,

                        fontSize: "12px",

                        fontWeight: 700,

                        letterSpacing: 1,

                        textTransform:
                            "uppercase",

                        color: theme.palette
                            .text.secondary,
                    }}
                >
                    Main Menu
                </Typography>

                <List
                    disablePadding
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 0.8,
                    }}
                >
                    {menuItems.map((item) => {
                        const active =
                            location.pathname ===
                            item.path;

                        return (
                            <ListItem
                                key={item.title}
                                disablePadding
                            >
                                <ListItemButton
                                    onClick={() =>
                                        handleNavigate(
                                            item.path
                                        )
                                    }
                                    sx={{
                                        minHeight: 52,

                                        px: 1.5,

                                        borderRadius:
                                            "16px",

                                        display: "flex",

                                        alignItems:
                                            "center",

                                        gap: 1.5,

                                        transition:
                                            "all 0.25s ease",

                                        backgroundColor:
                                            active
                                                ? alpha(
                                                      theme
                                                          .palette
                                                          .primary
                                                          .main,
                                                      isLight
                                                          ? 0.12
                                                          : 0.18
                                                  )
                                                : "transparent",

                                        border: active
                                            ? `1px solid ${alpha(
                                                  theme
                                                      .palette
                                                      .primary
                                                      .main,
                                                  0.22
                                              )}`
                                            : `1px solid transparent`,

                                        "&:hover":
                                            {
                                                backgroundColor:
                                                    active
                                                        ? alpha(
                                                              theme
                                                                  .palette
                                                                  .primary
                                                                  .main,
                                                              isLight
                                                                  ? 0.16
                                                                  : 0.24
                                                          )
                                                        : theme
                                                              .palette
                                                              .custom
                                                              .card
                                                              .body,

                                                transform:
                                                    "translateX(3px)",
                                            },
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display:
                                                "flex",

                                            alignItems:
                                                "center",

                                            justifyContent:
                                                "center",

                                            color:
                                                active
                                                    ? theme
                                                          .palette
                                                          .primary
                                                          .main
                                                    : theme
                                                          .palette
                                                          .text
                                                          .secondary,
                                        }}
                                    >
                                        {item.icon}
                                    </Box>

                                    <ListItemText
                                        primary={
                                            item.title
                                        }
                                        primaryTypographyProps={{
                                            fontSize:
                                                "14px",

                                            fontWeight:
                                                active
                                                    ? 700
                                                    : 500,

                                            color:
                                                active
                                                    ? theme
                                                          .palette
                                                          .primary
                                                          .main
                                                    : theme
                                                          .palette
                                                          .text
                                                          .primary,

                                            fontFamily:
                                                FONT_FAMILY.primary,
                                        }}
                                    />
                                </ListItemButton>
                            </ListItem>
                        );
                    })}
                </List>
            </Box>

            {/* FOOTER */}
            <Box
                sx={{
                    px: 2.5,
                    py: 2.2,

                    borderTop: `1px solid ${alpha(
                        theme.palette.custom.border
                            .subtle,
                        0.4
                    )}`,
                }}
            >
                <Typography
                    sx={{
                        fontSize: "13px",

                        fontWeight: 600,

                        color: theme.palette
                            .text.primary,
                    }}
                >
                    Prime Estate CRM
                </Typography>

                <Typography
                    sx={{
                        fontSize: "12px",

                        mt: 0.5,

                        color: theme.palette
                            .text.secondary,
                    }}
                >
                    Smart property management
                    solution
                </Typography>
            </Box>
        </Box>
    );

    return (
        <>
            {/* MOBILE DRAWER */}
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={onClose}
                onTransitionEnd={
                    onTransitionEnd
                }
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    display: {
                        xs: "block",
                        md: "none",
                    },

                    "& .MuiDrawer-paper": {
                        width: drawerWidth,

                        boxSizing:
                            "border-box",

                        border: "none",

                        backgroundColor:
                            theme.palette
                                .background.paper,

                        boxShadow: `0 12px 40px ${alpha(
                            theme.palette.common
                                .black,
                            0.25
                        )}`,
                    },
                }}
            >
                {drawerContent}
            </Drawer>

            {/* DESKTOP DRAWER */}
            <Drawer
                variant="permanent"
                open
                sx={{
                    display: {
                        xs: "none",
                        md: "block",
                    },

                    width: drawerWidth,

                    flexShrink: 0,

                    "& .MuiDrawer-paper": {
                        width: drawerWidth,

                        boxSizing:
                            "border-box",

                        top: "70px",

                        height:
                            "calc(100% - 70px)",

                        overflowX:
                            "hidden",

                        borderRight: `1px solid ${alpha(
                            theme.palette.custom
                                .border.subtle,
                            0.5
                        )}`,

                        backgroundColor:
                            alpha(
                                theme.palette
                                    .background.paper,
                                0.94
                            ),

                        backdropFilter:
                            "blur(14px)",

                        WebkitBackdropFilter:
                            "blur(14px)",
                    },
                }}
            >
                {drawerContent}
            </Drawer>
        </>
    );
};

export default DashboardSideNav;