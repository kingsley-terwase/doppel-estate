import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { FONT_FAMILY } from "../Config/font";
import { TYPOGRAPHY_CATEGORY, TYPOGRAPHY_SIZE } from "../Config/typography";
import { BREAK_POINTS } from "../Config/constants";

const themes = {
    light: {
        primary: "#1565C0",
        secondary: "#FF6F00",
        background: "#FFFFFF",
        text: "#000000",
    },
    dark: {
        primary: "#90CAF9",
        secondary: "#FFA726",
        background: "#000000",
        text: "#FFFFFF",
    },
};

const getAppMode = (mode, isDashboard = false) => {
    const themeColors = themes[mode] || themes.light;

    return {
        palette: {
            mode,
            primary: {
                main: themeColors.primary,
            },
            secondary: {
                main: themeColors.secondary,
            },
            background: {
                default: isDashboard ? themes.dark.background : themes.light.background,
            },
            text: {
                primary: themeColors.text,
            },
        },
        typography: {
            fontFamily: TYPOGRAPHY_CATEGORY.body,
            h1: {
                fontWeight: 500,
                lineHeight: 1.3,
                fontSize: TYPOGRAPHY_SIZE.h1.xs,
                [`@media (min-width:${BREAK_POINTS.sm}px)`]: {
                    fontSize: TYPOGRAPHY_SIZE.h1.sm,
                },
            },
            h6: {
                fontWeight: 600,
                fontSize: TYPOGRAPHY_SIZE.h6.xs,
                lineHeight: 1.5,
                [`@media (min-width:${BREAK_POINTS.sm}px)`]: {
                    fontSize: TYPOGRAPHY_SIZE.h6.sm,
                },
            },
            h5: {
                fontSize: TYPOGRAPHY_SIZE.h5.xs,
            },
            h4: {
                fontSize: TYPOGRAPHY_SIZE.h4.xs,
            },
            subtitle1: {
                fontSize: TYPOGRAPHY_SIZE.subtitle1.xs,
            },
            subtitle2: {
                fontSize: TYPOGRAPHY_SIZE.subtitle2.xs,
            },
            body1: {
                fontSize: TYPOGRAPHY_SIZE.body1.xs,
                fontFamily: FONT_FAMILY.primary,
            },
            body2: {
                fontSize: TYPOGRAPHY_SIZE.body.xs,
            },
            caption: {
                fontSize: TYPOGRAPHY_SIZE.caption.xs,
            },
        },
        components: {
            MuiCssBaseline: {
                styleOverrides: {
                    body: {
                        backgroundColor: isDashboard ? themes.dark.background : themes.light.background,
                        color: themeColors.text,
                    },
                },
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        fontSize: TYPOGRAPHY_SIZE.button.medium,
                        borderRadius: "0.3rem",
                        fontFamily: FONT_FAMILY.primary,
                        boxShadow: "none",
                        py: 0,
                        outline: "none",
                        textTransform: "unset",
                        fontWeight: 400,
                    },
                },
                defaultProps: {
                    variant: "contained",
                },
            },
        },
    };
};

const getTheme = (mode, isDashboard = false) => responsiveFontSizes(createTheme(getAppMode(mode, isDashboard)));

export default getTheme;
