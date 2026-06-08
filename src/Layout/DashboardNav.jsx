import React, {
    useCallback,
    useEffect,
    useMemo,
    useState,
} from "react";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Tooltip from "@mui/material/Tooltip";

import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import MenuIcon from "@mui/icons-material/Menu";
import DeleteSweepRoundedIcon from "@mui/icons-material/DeleteSweepRounded";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";

import { useLocation, useNavigate } from "react-router-dom";

import {
    alpha,
    useTheme,
} from "@mui/material/styles";

import ThemeToggleButton from "./ThemeToggleButton";

import { FONT_FAMILY } from "../Config/font";

const DashboardNav = ({ onTog }) => {
    const theme = useTheme();

    const location = useLocation();

    const navigate = useNavigate();

    const isLight =
        theme.palette.mode === "light";

    const [anchorEl, setAnchorEl] =
        useState(null);

    const [loading, setLoading] =
        useState(false);

    const [notifications, setNotifications] =
        useState([]);

    const open = Boolean(anchorEl);

    /**
     * ROUTE TITLES
     */
    const routeTitles = {
        "/": "Home",
        "/dashboard": "Dashboard",
        "/dashboard/listing": "Listing",
        "/dashboard/message": "Message",
        "/dashboard/profile": "Profile",
    };

    const pageName =
        routeTitles[location.pathname] ||
        "Dashboard";

    /**
     * FETCH NOTIFICATIONS
     */
    const fetchNotifications =
        useCallback(async () => {
            try {
                setLoading(true);

                const data = [
                    {
                        id: 1,
                        title:
                            "New Land Purchase",
                        message:
                            "Mr John purchased Plot 24 at Guzape Estate.",
                        time: "2 mins ago",
                        isRead: false,
                    },
                    {
                        id: 2,
                        title:
                            "Payment Received",
                        message:
                            "₦2,500,000 payment confirmed.",
                        time: "10 mins ago",
                        isRead: false,
                    },
                    {
                        id: 3,
                        title:
                            "Inspection Scheduled",
                        message:
                            "Site inspection fixed for tomorrow.",
                        time: "1 hour ago",
                        isRead: true,
                    },
                ];

                setNotifications(data);
            } catch (error) {
                console.error(
                    "Failed to fetch notifications:",
                    error
                );
            } finally {
                setLoading(false);
            }
        }, []);

    useEffect(() => {
        fetchNotifications();
    }, [fetchNotifications]);

    /**
     * UNREAD COUNT
     */
    const unreadCount = useMemo(() => {
        return notifications.filter(
            (item) => !item.isRead
        ).length;
    }, [notifications]);

    /**
     * HANDLERS
     */
    const handleNotificationClick = (
        event
    ) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleReadNotification = (
        id
    ) => {
        setNotifications((prev) =>
            prev.map((item) =>
                item.id === id
                    ? {
                          ...item,
                          isRead: true,
                      }
                    : item
            )
        );
    };

    const handleClearAll = () => {
        setNotifications([]);
    };

    const handleGoToProfile = () => {
        navigate("/dashboard/profile");
    };

    return (
        <Box
            sx={{
                position: "fixed",

                top: 0,
                left: 0,
                right: 0,

                height: "70px",

                zIndex: 1300,

                display: "flex",

                alignItems: "center",

                justifyContent:
                    "space-between",

                px: {
                    xs: 2,
                    md: 3,
                },

                backgroundColor: alpha(
                    theme.palette.background.paper,
                    isLight ? 0.88 : 0.94
                ),

                backdropFilter: "blur(16px)",

                WebkitBackdropFilter:
                    "blur(16px)",

                borderBottom: `1px solid ${alpha(
                    theme.palette.custom.border
                        .subtle,
                    isLight ? 0.18 : 0.4
                )}`,

                boxShadow: isLight
                    ? `
                        0 4px 20px rgba(0,0,0,0.05),
                        0 2px 10px rgba(0,0,0,0.03)
                      `
                    : `
                        0 4px 20px rgba(0,0,0,0.28)
                      `,

                transition:
                    "all 0.3s ease",
            }}
        >
            {/* LEFT SIDE */}
            <Stack
                direction="row"
                spacing={2}
                alignItems="center"
            >
                <IconButton
                    onClick={onTog}
                    sx={{
                        display: {
                            xs: "flex",
                            md: "none",
                        },

                        width: 42,
                        height: 42,

                        borderRadius: "12px",

                        backgroundColor:
                            theme.palette.custom
                                .card.body,

                        border: `1px solid ${alpha(
                            theme.palette.custom
                                .card.border,
                            isLight ? 0.1 : 0.4
                        )}`,

                        color:
                            theme.palette.text
                                .primary,

                        transition:
                            "all 0.25s ease",

                        "&:hover": {
                            backgroundColor:
                                alpha(
                                    theme.palette
                                        .primary.main,
                                    0.08
                                ),

                            transform:
                                "translateY(-1px)",
                        },
                    }}
                >
                    <MenuIcon />
                </IconButton>

                <Typography
                    sx={{
                        fontSize: {
                            xs: "18px",
                            md: "22px",
                        },

                        fontWeight: 700,

                        fontFamily:
                            FONT_FAMILY.primary,

                        color:
                            theme.palette.text
                                .primary,

                        letterSpacing:
                            "-0.3px",
                    }}
                >
                    {pageName}
                </Typography>
            </Stack>

            {/* RIGHT SIDE */}
            <Stack
                direction="row"
                spacing={1.5}
                alignItems="center"
            >
                {/* NOTIFICATION BUTTON */}
                <IconButton
                    onClick={
                        handleNotificationClick
                    }
                    sx={{
                        width: 45,
                        height: 45,

                        borderRadius: "12px",

                        backgroundColor:
                            theme.palette.custom
                                .card.body,

                        border: `1px solid ${alpha(
                            theme.palette.custom
                                .card.border,
                            isLight ? 0.1 : 0.4
                        )}`,

                        color:
                            theme.palette.text
                                .primary,

                        transition:
                            "all 0.25s ease",

                        "&:hover": {
                            backgroundColor:
                                alpha(
                                    theme.palette
                                        .primary.main,
                                    0.08
                                ),

                            transform:
                                "translateY(-1px)",
                        },
                    }}
                >
                    <Badge
                        badgeContent={
                            unreadCount
                        }
                        color="error"
                    >
                        <NotificationsNoneRoundedIcon />
                    </Badge>
                </IconButton>

                {/* NOTIFICATION MENU */}
                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    disableScrollLock
                    transformOrigin={{
                        horizontal: "right",
                        vertical: "top",
                    }}
                    anchorOrigin={{
                        horizontal: "right",
                        vertical: "bottom",
                    }}
                    PaperProps={{
                        sx: {
                            width: {
                                xs: "calc(100vw - 32px)",
                                sm: 360,
                            },

                            maxWidth: 360,

                            mt: 1.5,

                            borderRadius:
                                "20px",

                            overflow:
                                "hidden",

                            backgroundColor:
                                theme.palette
                                    .background
                                    .paper,

                            border: `1px solid ${alpha(
                                theme.palette
                                    .custom.border
                                    .subtle,
                                isLight
                                    ? 0.18
                                    : 0.4
                            )}`,

                            boxShadow:
                                isLight
                                    ? `
                                        0 10px 35px rgba(0,0,0,0.08)
                                      `
                                    : `
                                        0 14px 40px rgba(0,0,0,0.35)
                                      `,
                        },
                    }}
                >
                    {/* MENU HEADER */}
                    <Box
                        sx={{
                            px: 2,
                            py: 2,

                            display: "flex",

                            alignItems:
                                "center",

                            justifyContent:
                                "space-between",

                            backgroundColor:
                                theme.palette
                                    .background
                                    .paper,
                        }}
                    >
                        <Typography
                            sx={{
                                fontWeight: 700,

                                color: theme
                                    .palette.text
                                    .primary,

                                fontFamily:
                                    FONT_FAMILY.primary,
                            }}
                        >
                            Notifications
                        </Typography>

                        <Button
                            size="small"
                            onClick={
                                handleClearAll
                            }
                            startIcon={
                                <DeleteSweepRoundedIcon />
                            }
                            disabled={
                                notifications.length ===
                                0
                            }
                            sx={{
                                minWidth:
                                    "unset",

                                px: 1.5,

                                py: 0.6,

                                fontSize:
                                    "12px",

                                borderRadius:
                                    "10px",
                            }}
                        >
                            Clear All
                        </Button>
                    </Box>

                    <Divider
                        sx={{
                            borderColor:
                                alpha(
                                    theme.palette
                                        .custom
                                        .border
                                        .subtle,
                                    0.3
                                ),
                        }}
                    />

                    {/* MENU BODY */}
                    <Box
                        sx={{
                            maxHeight: 380,
                            overflowY:
                                "auto",
                        }}
                    >
                        {loading ? (
                            <Box
                                sx={{
                                    py: 6,

                                    display:
                                        "flex",

                                    justifyContent:
                                        "center",
                                }}
                            >
                                <CircularProgress
                                    size={28}
                                />
                            </Box>
                        ) : notifications.length ===
                          0 ? (
                            <Box
                                sx={{
                                    py: 6,
                                    px: 2,

                                    textAlign:
                                        "center",

                                    color: theme
                                        .palette
                                        .text
                                        .secondary,
                                }}
                            >
                                <Typography
                                    fontWeight={
                                        700
                                    }
                                >
                                    No notifications
                                </Typography>

                                <Typography
                                    variant="body2"
                                    sx={{
                                        mt: 0.5,
                                    }}
                                >
                                    You're all
                                    caught up
                                </Typography>
                            </Box>
                        ) : (
                            notifications.map(
                                (item) => (
                                    <MenuItem
                                        key={
                                            item.id
                                        }
                                        onClick={() =>
                                            handleReadNotification(
                                                item.id
                                            )
                                        }
                                        sx={{
                                            py: 1.8,

                                            px: 2,

                                            alignItems:
                                                "flex-start",

                                            transition:
                                                "all 0.2s ease",

                                            borderBottom: `1px solid ${alpha(
                                                theme
                                                    .palette
                                                    .custom
                                                    .border
                                                    .subtle,
                                                0.12
                                            )}`,

                                            backgroundColor:
                                                item.isRead
                                                    ? "transparent"
                                                    : alpha(
                                                          theme
                                                              .palette
                                                              .primary
                                                              .main,
                                                          0.08
                                                      ),

                                            "&:hover":
                                                {
                                                    backgroundColor:
                                                        alpha(
                                                            theme
                                                                .palette
                                                                .primary
                                                                .main,
                                                            0.12
                                                        ),
                                                },
                                        }}
                                    >
                                        <Box
                                            width="100%"
                                        >
                                            <Stack
                                                direction="row"
                                                justifyContent="space-between"
                                                alignItems="center"
                                            >
                                                <Typography
                                                    sx={{
                                                        fontWeight: 700,

                                                        fontSize:
                                                            "14px",

                                                        color: theme
                                                            .palette
                                                            .text
                                                            .primary,

                                                        fontFamily:
                                                            FONT_FAMILY.primary,
                                                    }}
                                                >
                                                    {
                                                        item.title
                                                    }
                                                </Typography>

                                                {!item.isRead ? (
                                                    <FiberManualRecordIcon
                                                        sx={{
                                                            fontSize: 10,

                                                            color: theme
                                                                .palette
                                                                .primary
                                                                .main,
                                                        }}
                                                    />
                                                ) : (
                                                    <CheckRoundedIcon
                                                        sx={{
                                                            fontSize: 18,

                                                            color: "#10b981",
                                                        }}
                                                    />
                                                )}
                                            </Stack>

                                            <Typography
                                                sx={{
                                                    fontSize:
                                                        "13px",

                                                    color: theme
                                                        .palette
                                                        .text
                                                        .secondary,

                                                    mt: 0.7,

                                                    lineHeight: 1.5,
                                                }}
                                            >
                                                {
                                                    item.message
                                                }
                                            </Typography>

                                            <Typography
                                                sx={{
                                                    fontSize:
                                                        "11px",

                                                    color: alpha(
                                                        theme
                                                            .palette
                                                            .text
                                                            .secondary,
                                                        0.8
                                                    ),

                                                    mt: 1,
                                                }}
                                            >
                                                {
                                                    item.time
                                                }
                                            </Typography>
                                        </Box>
                                    </MenuItem>
                                )
                            )
                        )}
                    </Box>
                </Menu>

                {/* THEME TOGGLE */}
                <ThemeToggleButton />

                {/* PROFILE AVATAR */}
                <Tooltip
                    title="View Profile"
                    arrow
                >
                    <IconButton
                        onClick={
                            handleGoToProfile
                        }
                        sx={{
                            p: 0,

                            "&:hover": {
                                opacity: 0.96,
                            },
                        }}
                    >
                        <Avatar
                            sx={{
                                width: 42,
                                height: 42,

                                backgroundColor:
                                    theme.palette
                                        .primary
                                        .main,

                                color:
                                    theme.palette
                                        .primary
                                        .contrastText,

                                fontWeight: 700,

                                fontFamily:
                                    FONT_FAMILY.primary,

                                border: `2px solid ${alpha(
                                    theme.palette
                                        .primary
                                        .main,
                                    0.2
                                )}`,

                                transition:
                                    "all 0.25s ease",

                                "&:hover": {
                                    transform:
                                        "scale(1.06)",

                                    boxShadow: `0 6px 16px ${alpha(
                                        theme
                                            .palette
                                            .primary
                                            .main,
                                        0.35
                                    )}`,
                                },
                            }}
                        >
                            A
                        </Avatar>
                    </IconButton>
                </Tooltip>
            </Stack>
        </Box>
    );
};

export default DashboardNav;