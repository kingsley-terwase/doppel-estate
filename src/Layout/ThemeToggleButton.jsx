import React from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { useAppTheme } from "../Contexts/AppThemeProvider";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";

const ThemeToggleButton = () => {
    const { mode, toggleTheme } = useAppTheme();

    return (
        <Tooltip title={mode === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}>
            <IconButton onClick={toggleTheme} color="inherit">
                {mode === "light" ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
            </IconButton>
        </Tooltip>
    );
};

export default ThemeToggleButton;
