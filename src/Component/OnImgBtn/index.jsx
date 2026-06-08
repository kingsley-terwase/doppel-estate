import React from "react";

import Button from "@mui/material/Button";

import { useTheme } from "@mui/material/styles";

import { FONT_FAMILY } from "../../Config/font";

const OnImgBtn = ({ label }) => {
  const theme = useTheme();

  return (
    <Button
      sx={{
        px: 1.5,
        py: 0.4,

        borderRadius: "6px",

        minWidth: "unset",

        backgroundColor:
          theme.palette.custom.button.main,

        color:
          theme.palette.primary.contrastText,

        fontSize: "12px",

        fontFamily: FONT_FAMILY.tertiary,

        fontWeight: 500,

        lineHeight: 1.2,

        border: `1px solid ${theme.palette.custom.button.main}`,

        textTransform: "capitalize",

        boxShadow: "none",

        "&:hover": {
          backgroundColor:
            theme.palette.custom.button.hover,

          border: `1px solid ${theme.palette.custom.button.hover}`,

          boxShadow: "none",
        },
      }}
    >
      {label}
    </Button>
  );
};

export default OnImgBtn;