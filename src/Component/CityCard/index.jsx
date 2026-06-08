import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import LocationOnIcon from "@mui/icons-material/LocationOn";

import { FONT_FAMILY } from "../../Config/font";
import { TYPOGRAPHY_SIZE } from "../../Config/typography";

const CityCard = ({ src, label, subTitle }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 220,

        backgroundColor: theme.palette.background.paper,

        borderRadius: 2.5,

        border: `1px solid ${theme.palette.custom.card.border}`,

        p: 2.5,
        boxSizing: "border-box",

        textAlign: "center",

        transition: "all 0.3s ease",

        boxShadow: "0px 4px 12px rgba(0,0,0,0.08)",

        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0px 10px 20px rgba(0,0,0,0.15)",
        },
      }}
    >
      {/* IMAGE */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mb: 2,
        }}
      >
        <Box
          component="img"
          src={src}
          alt={label}
          sx={{
            width: 130,
            height: 130,

            borderRadius: "50%",
            objectFit: "cover",

            border: `4px solid ${theme.palette.primary.main}`,

            backgroundColor: theme.palette.custom.card.body,
          }}
        />
      </Box>

      {/* TITLE */}
      <Typography
        sx={{
          fontSize: TYPOGRAPHY_SIZE.body1,
          fontWeight: 700,
          fontFamily: FONT_FAMILY.quaternary,

          color: theme.palette.text.primary,

          mb: 0.8,
        }}
      >
        {label}
      </Typography>

      {/* SUBTITLE */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 0.5,
        }}
      >
        <LocationOnIcon
          sx={{
            fontSize: 16,
            color: theme.palette.primary.main,
          }}
        />

        <Typography
          sx={{
            fontSize: TYPOGRAPHY_SIZE.body2 || 14,
            fontFamily: FONT_FAMILY.quaternary,

            color: theme.palette.text.secondary,
          }}
        >
          {subTitle}
        </Typography>
      </Box>
    </Box>
  );
};

export default CityCard;