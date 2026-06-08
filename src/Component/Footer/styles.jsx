import { FONT_FAMILY } from "../../Config/font";

export const getFooterStyles = (theme) => ({
  footerContainer: {
    backgroundColor: theme.palette.background.default,
    paddingTop: "5rem",
    paddingBottom: "1rem",
    color: theme.palette.text.primary,
  },

  footerContent: {
    maxWidth: "1200px",
    margin: "0 auto",
    width: "100%",
  },

  column: {
    flex: 1,
    minWidth: "200px",
  },

  columnHeader: {
    marginBottom: "1rem",
    fontFamily: FONT_FAMILY.secondary,
    fontWeight: 700,
    color: theme.palette.text.primary,
  },

  columnText: {
    fontFamily: FONT_FAMILY.primary,
    marginBottom: "0.5rem",
    color: theme.palette.text.secondary,
  },

  socialIcons: {
    marginTop: "1rem",
    display: "flex",
    gap: "1rem",
    paddingTop: "9px",
    paddingBottom: "9px",
  },

  iconButton: {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.background.paper,
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    },
  },

  icon: {
    color: theme.palette.primary.main,
  },

  newsletterBox: {
    display: "flex",
    marginTop: "1rem",
  },

  inputField: {
    flex: 1,
    padding: "0.5rem",
    borderRadius: "5px 0 0 5px",
    border: `1px solid ${theme.palette.custom.border.subtle}`,
    outline: "none",
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
  },

  // ✅ hover handled by MUI Button's sx prop in the component
  subscribeButton: {
    padding: "0.8rem 1rem",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    fontFamily: FONT_FAMILY.primary,
    borderRadius: "0 5px 5px 0",
    border: "none",
    cursor: "pointer",
    textTransform: "none",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },

  footerBottom: {
    marginTop: "2rem",
    textAlign: "center",
    borderTop: `1px solid ${theme.palette.custom.border.subtle}`,
    paddingTop: "1rem",
    marginBottom: { xs: "8rem", md: 0 },  // ✅ works fine since used via sx={}
  },

  footerText: {
    color: theme.palette.text.secondary,
    fontFamily: FONT_FAMILY.primary,
  },
});