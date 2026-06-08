import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { COLORS } from '../Config/color'
import { FONT_FAMILY } from "../Config/font";
import { TYPOGRAPHY_CATEGORY, TYPOGRAPHY_SIZE } from "../Config/typography";
import { BREAK_POINTS } from "../Config/Constants";

/**
 * PALETTE
 */
const buildPalette = (mode) => {
  const isLight = mode === "light";

  return {
    mode,

    primary: {
      main: COLORS.brand.primary,
      dark: COLORS.brand.primaryDark,
      contrastText: COLORS.brand.white,
    },

    secondary: {
      main: COLORS.brand.secondary,
    },

    error: {
      main: COLORS.brand.error,
    },

    background: {
      default: isLight
        ? COLORS.background.light
        : COLORS.background.dark,
      paper: isLight
        ? COLORS.background.paperLight
        : COLORS.background.paperDark,
    },

    text: {
      primary: isLight
        ? COLORS.neutral.dark
        : COLORS.neutral.white,
      secondary: isLight
        ? COLORS.neutral.subtle
        : COLORS.neutral.light,
    },

    custom: {
      accent: COLORS.custom.accent,

      border: {
        default: isLight
          ? COLORS.neutral.mid
          : COLORS.neutral.subtle,
        subtle: isLight
          ? COLORS.neutral.light
          : COLORS.neutral.subtle,
      },

      button: {
        main: COLORS.button.primary,
        hover: COLORS.button.primaryHover,
        border: COLORS.button.primaryBorder,
        secondary: COLORS.button.secondary,
        error: COLORS.button.error,
      },

      card: {
        body: isLight
          ? COLORS.card.bodyLight
          : COLORS.card.bodyDark,
        border: isLight
          ? COLORS.card.borderLight
          : COLORS.card.borderDark,
      },
    },
  };
};

const buildComponents = (mode) => {
  const isLight = mode === "light";

  return {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: isLight
            ? COLORS.background.light
            : COLORS.background.dark,
          color: isLight
            ? COLORS.neutral.dark
            : COLORS.neutral.white,
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundImage: "none",
          backgroundColor: theme.palette.background.paper,
        }),
      },
    },

    MuiCard: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.custom.card.body,
          border: `1px solid ${theme.palette.custom.card.border}`,
        }),
      },
    },

    MuiButton: {
      defaultProps: {
        variant: "contained",
      },

      styleOverrides: {
        root: ({ theme }) => ({
          fontSize: TYPOGRAPHY_SIZE.button?.medium,
          borderRadius: "0.3rem",
          fontFamily: FONT_FAMILY.primary,
          boxShadow: "none",
          textTransform: "unset",
          fontWeight: 400,
          outline: "none",

          backgroundColor: theme.palette.custom.button.main,
          color: theme.palette.primary.contrastText,

          "&:hover": {
            backgroundColor: theme.palette.custom.button.hover,
            boxShadow: "none",
          },
        }),
      },
    },

    MuiContainer: {
      defaultProps: {
        maxWidth: "lg",
      },

      styleOverrides: {
        root: {
          [`@media (min-width:${BREAK_POINTS.xs}px)`]: {
            maxWidth: "100%",
          },
          [`@media (min-width:${BREAK_POINTS.sm}px)`]: {
            maxWidth: "600px",
          },
          [`@media (min-width:${BREAK_POINTS.md}px)`]: {
            maxWidth: "900px",
          },
          [`@media (min-width:${BREAK_POINTS.lg}px)`]: {
            maxWidth: "1300px",
          },
          [`@media (min-width:${BREAK_POINTS.xl}px)`]: {
            maxWidth: "1440px",
          },
        },
      },
    },
  };
};

/**
 * THEME CONFIG
 */
const getAppMode = (mode = "light") => ({
  palette: buildPalette(mode),

  typography: {
    fontFamily: TYPOGRAPHY_CATEGORY.body,

    h1: {
      fontWeight: 500,
      lineHeight: 1.3,
      fontSize: TYPOGRAPHY_SIZE.h1?.xs,
      [`@media (min-width:${BREAK_POINTS.sm}px)`]: {
        fontSize: TYPOGRAPHY_SIZE.h1?.sm,
      },
    },

    h4: {
      fontSize: TYPOGRAPHY_SIZE.h4?.xs,
    },

    h5: {
      fontSize: TYPOGRAPHY_SIZE.h5?.xs,
    },

    h6: {
      fontWeight: 600,
      lineHeight: 1.5,
      fontSize: TYPOGRAPHY_SIZE.h6?.xs,
      [`@media (min-width:${BREAK_POINTS.sm}px)`]: {
        fontSize: TYPOGRAPHY_SIZE.h6?.sm,
      },
    },

    subtitle1: {
      fontSize: TYPOGRAPHY_SIZE.subtitle1?.xs,
    },

    subtitle2: {
      fontSize: TYPOGRAPHY_SIZE.subtitle2?.xs,
    },

    body1: {
      fontSize: TYPOGRAPHY_SIZE.body1?.xs,
      fontFamily: FONT_FAMILY.primary,
    },

    body2: {
      fontSize: TYPOGRAPHY_SIZE.body?.xs,
    },

    caption: {
      fontSize: TYPOGRAPHY_SIZE.caption?.xs,
    },
  },

  components: buildComponents(mode),
});

/**
 * EXPORT THEME
 */
const getTheme = (mode = "light") =>
  responsiveFontSizes(createTheme(getAppMode(mode)));

export default getTheme;