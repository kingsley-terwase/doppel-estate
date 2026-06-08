export const getStyles = (theme) => ({
  dividerStyle: {
    py: 0,

    width: "100%",
    maxWidth: 360,

    borderRadius: 2,

    border: "1px solid",

    borderColor: theme.palette.custom.border.subtle,

    backgroundColor: theme.palette.background.paper,
  },

  TopnavOverlay: {
    position: "absolute",

    top: 0,
    left: 0,
    right: 0,
    bottom: 0,

    width: "100%",
    height: "100%",

    zIndex: 1,

    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.25))",
  },
});