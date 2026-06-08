import { useState } from "react";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { useTheme, alpha } from "@mui/material/styles";

import DashboardNav from "./DashboardNav";
import DashboardSideNav from "./DashboardSidenav";

const drawerWidth = 260;
const navHeight = 70;

const DashboardLayout = ({ children }) => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const theme = useTheme();

    const isLight = theme.palette.mode === "light";

    const handleClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleToggle = () => {
        if (!isClosing) {
            setMobileOpen((prev) => !prev);
        }
    };

    return (
        <>
            <CssBaseline />
            <DashboardNav onTog={handleToggle} />

            <Box
                sx={{
                    display: "flex",
                    minHeight: "100vh",
                    backgroundColor:
                        theme.palette.background.default,
                    color: theme.palette.text.primary,
                    position: "relative",
                    overflow: "hidden",
                    transition: "all 0.3s ease",
                    "&::before": {
                        content: '""',
                        position: "fixed",
                        inset: 0,
                        pointerEvents: "none",
                        background: isLight
                            ? `
                                radial-gradient(
                                    circle at top right,
                                    ${alpha(
                                theme.palette.primary.main,
                                0.07
                            )},
                                    transparent 30%
                                ),
                                radial-gradient(
                                    circle at bottom left,
                                    ${alpha(
                                theme.palette.secondary.main,
                                0.05
                            )},
                                    transparent 30%
                                )
                              `
                            : `
                                radial-gradient(
                                    circle at top right,
                                    ${alpha(
                                theme.palette.primary.main,
                                0.16
                            )},
                                    transparent 35%
                                ),
                                radial-gradient(
                                    circle at bottom left,
                                    ${alpha(
                                theme.palette.secondary.main,
                                0.10
                            )},
                                    transparent 35%
                                )
                              `,

                        zIndex: 0,
                    },
                }}
            >
                {/* SIDEBAR */}
                <DashboardSideNav
                    mobileOpen={mobileOpen}
                    onClose={handleClose}
                    onTransitionEnd={handleTransitionEnd}
                />

                {/* MAIN CONTENT */}
                <Box
                    component="main"
                    sx={{
                        flexGrow: 1,
                        position: "relative",
                        zIndex: 1,

                        // Remove fixed ml — flexGrow handles spacing
                        width: {
                            xs: "100%",
                            md: `calc(100% - ${drawerWidth}px)`,
                        },

                        mt: `${navHeight}px`,

                        px: {
                            xs: 1.5,
                            sm: 2,
                            md: 2.5,
                        },

                        py: {
                            xs: 2,
                            sm: 2.5,
                            md: 3,
                        },

                        minHeight: `calc(100vh - ${navHeight}px)`,
                        overflowX: "hidden",
                        transition: "margin 0.3s ease, width 0.3s ease",
                    }}
                >
                    {/* CONTENT WRAPPER */}
                    <Box
                        sx={{
                            width: "100%",
                            minHeight: `calc(100vh - ${navHeight}px - 48px)`, // fills viewport

                            borderRadius: {
                                xs: "18px",
                                md: "22px",
                            },

                            backgroundColor: alpha(
                                theme.palette.background.paper,
                                isLight ? 0.85 : 0.92
                            ),

                            border: `1px solid ${alpha(
                                theme.palette.custom.card.border,
                                isLight ? 0.14 : 0.45
                            )}`,

                            backdropFilter: "blur(14px)",
                            WebkitBackdropFilter: "blur(14px)",

                            boxShadow: isLight
                                ? `0 12px 40px rgba(0,0,0,0.06), 0 2px 12px rgba(0,0,0,0.04)`
                                : `0 14px 42px rgba(0,0,0,0.34), 0 2px 14px rgba(0,0,0,0.25)`,

                            "&::after": {
                                content: '""',
                                position: "absolute",
                                inset: 0,
                                borderRadius: { xs: "18px", md: "22px" },
                                pointerEvents: "none",
                                border: `1px solid ${alpha(
                                    theme.palette.common.white,
                                    isLight ? 0.25 : 0.04
                                )}`,
                            },

                            position: "relative",
                            p: { xs: 2, sm: 2.5, md: 3 },
                            transition: "all 0.3s ease",
                        }}
                    >
                        {children}
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default DashboardLayout;