import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import {useMemo, useState, useEffect, useContext, createContext} from "react";
import {ThemeProvider} from "@mui/material";
import getTheme from "../Theme/theme";

const AppThemeContext = createContext();

export const useAppTheme = () => useContext(AppThemeContext);

const AppThemeProvider = ({children}) => {
    const [mode, setMode] = useState(() => {
        const storedMode = localStorage.getItem("themeMode");
        return storedMode ? storedMode : "dark";
    });

    useEffect(() => {
        localStorage.setItem("themeMode", mode);
    }, [mode]);

    const toggleTheme = () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    };

    const theme = useMemo(() => getTheme(mode), [mode]);

    return (
        <AppThemeContext.Provider value={{mode, toggleTheme}}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </AppThemeContext.Provider>
    );
};

export default AppThemeProvider;
