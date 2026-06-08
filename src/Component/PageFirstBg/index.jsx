import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { useTheme } from "@mui/material/styles";

import { FONT_FAMILY } from "../../Config/font";

const PageFirstBg = ({ label, subLabel }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "relative",

        width: "100%",
        height: "250px",

        overflow: "hidden",
      }}
    >
      {/* BACKGROUND IMAGE */}
      <Box
        component="img"
        src="/Images/bg.png"
        alt={label}
        sx={{
          width: "100%",
          height: "100%",

          objectFit: "cover",
        }}
      />

      {/* OVERLAY */}
      <Box
        sx={{
          position: "absolute",

          top: 0,
          left: 0,

          width: "100%",
          height: "100%",

          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.25), rgba(0,0,0,0.6))",

          zIndex: 1,
        }}
      />

      {/* CONTENT */}
      <Box
        sx={{
          position: "absolute",

          bottom: {
            xs: 24,
            md: 40,
          },

          left: {
            xs: 20,
            sm: 40,
            md: 80,
            lg: 120,
          },

          zIndex: 2,
        }}
      >
        <Typography
          sx={{
            fontFamily: FONT_FAMILY.secondary,

            color:
              theme.palette.primary.contrastText,

            mb: 1,

            fontSize: {
              xs: "14px",
              sm: "16px",
            },

            opacity: 0.9,
          }}
        >
          {label}
        </Typography>

        <Typography
          variant="h4"
          sx={{
            fontFamily: FONT_FAMILY.primary,

            color:
              theme.palette.primary.contrastText,

            fontWeight: 700,

            lineHeight: 1.2,

            fontSize: {
              xs: "1.8rem",
              sm: "2.2rem",
              md: "2.8rem",
            },
          }}
        >
          {subLabel}
        </Typography>
      </Box>
    </Box>
  );
};

export default PageFirstBg;