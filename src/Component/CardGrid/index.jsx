import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import HomeIcon from "@mui/icons-material/Home";

import { FONT_FAMILY } from "../../Config/font";
import { TYPOGRAPHY_SIZE } from "../../Config/typography";

const dashboardCards = [
  {
    id: 1,
    title: "No of Estates",
    value: "350",
    variant: "primary",
  },
  {
    id: 2,
    title: "Available Property",
    value: "120",
    variant: "secondary",
  },
  {
    id: 3,
    title: "Sold Property",
    value: "230",
    variant: "warning",
  },
  {
    id: 4,
    title: "Active realtor",
    value: "85",
    variant: "success",
  },
];

const getCardColor = (variant, theme) => {
  switch (variant) {
    case "primary":
      return theme.palette.primary.main;

    case "secondary":
      return theme.palette.secondary.main;

    case "warning":
      return theme.palette.custom.accent;

    case "success":
      return theme.palette.primary.dark;

    default:
      return theme.palette.primary.main;
  }
};

const CardGrid = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: 2,
        width: "100%",
        p: { xs: 2, sm: 2.5 },
        boxSizing: "border-box",
      }}
    >
      {dashboardCards.map((card) => {
        const bg = getCardColor(card.variant, theme);

        return (
          <Box
            key={card.id}
            sx={{
              height: 110,

              backgroundColor: bg,
              borderRadius: 2,

              display: "flex",
              alignItems: "center",

              p: 2,

              border: `1px solid ${theme.palette.custom.border.subtle}`,

              boxShadow: "0px 4px 12px rgba(0,0,0,0.08)",

              transition: "0.25s ease",

              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: "0px 8px 18px rgba(0,0,0,0.15)",
              },
            }}
          >
            {/* ICON WRAPPER */}
            <Box
              sx={{
                position: "relative",
                mr: 1.8,
              }}
            >
              <Box
                sx={{
                  width: 52,
                  height: 52,

                  backgroundColor: "rgba(255,255,255,0.18)",
                  borderRadius: "50%",

                  border: `1px solid ${theme.palette.custom.card.border}`,

                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              />

              <HomeIcon
                sx={{
                  color: theme.palette.primary.contrastText,
                  fontSize: 28,

                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />
            </Box>

            {/* TEXT */}
            <Box>
              <Typography
                sx={{
                  color: theme.palette.primary.contrastText,
                  fontSize: TYPOGRAPHY_SIZE.h5 || 24,
                  fontWeight: 700,
                  fontFamily: FONT_FAMILY.primary,
                  lineHeight: 1.2,
                }}
              >
                {card.value}
              </Typography>

              <Typography
                sx={{
                  color: theme.palette.primary.contrastText,
                  fontSize: TYPOGRAPHY_SIZE.body1,
                  fontFamily: FONT_FAMILY.tertiary,
                  opacity: 0.95,
                  mt: 0.5,
                }}
              >
                {card.title}
              </Typography>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default CardGrid;