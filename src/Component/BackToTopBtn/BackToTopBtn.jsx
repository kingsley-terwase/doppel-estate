import React, { useState, useEffect } from "react";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useTheme } from "@mui/material/styles";

const BackToTopBtn = () => {
    const theme = useTheme();
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        showButton && (
            <Fab
                onClick={scrollToTop}
                sx={{
                    position: "fixed",
                    bottom: 16,
                    right: 16,
                    zIndex: 1000,

                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.primary.contrastText,

                    "&:hover": {
                        backgroundColor: theme.palette.primary.dark,
                        color: theme.palette.primary.contrastText,
                    },
                }}
            >
                <KeyboardArrowUpIcon />
            </Fab>
        )
    );
};

export default BackToTopBtn;