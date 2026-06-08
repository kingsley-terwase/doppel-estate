import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import HomeIcon from "@mui/icons-material/Home";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CommentIcon from "@mui/icons-material/Comment";

import { FONT_FAMILY } from "../../Config/font";
import { TYPOGRAPHY_SIZE } from "../../Config/typography";

const analyticsCards = [
  {
    id: 1,
    title: "Property Deals",
    value: "530",
    icon: HomeIcon,
    tone: "primary",
  },
  {
    id: 2,
    title: "Property Views",
    value: "349",
    icon: VisibilityIcon,
    tone: "secondary",
  },
  {
    id: 3,
    title: "Public Comments",
    value: "120",
    icon: CommentIcon,
    tone: "accent",
  },
];

const getToneColor = (tone, theme) => {
  switch (tone) {
    case "primary":
      return theme.palette.primary.main;

    case "secondary":
      return theme.palette.secondary.main;

    case "accent":
      return theme.palette.custom.accent;

    default:
      return theme.palette.primary.main;
  }
};

const CardGroup = () => {
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
      {analyticsCards.map((card) => {
        const color = getToneColor(card.tone, theme);

        return (
          <Box
            key={card.id}
            sx={{
              height: 190,

              background: `linear-gradient(135deg, ${color}20, ${
                theme.palette.background.paper
              })`,

              borderRadius: 2,
              border: `1px solid ${theme.palette.custom.card.border}`,

              boxShadow: "0px 4px 12px rgba(0,0,0,0.08)",

              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",

              p: 2.5,

              transition: "all 0.3s ease",

              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: "0px 10px 20px rgba(0,0,0,0.15)",
              },
            }}
          >
            {/* ICON WRAPPER */}
            <Box
              sx={{
                mb: 2,
              }}
            >
              <Box
                sx={{
                  width: 60,
                  height: 60,

                  backgroundColor: color,
                  borderRadius: "50%",

                  border: `2px solid ${theme.palette.background.paper}`,

                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",

                  boxShadow: "0px 4px 10px rgba(0,0,0,0.12)",
                }}
              >
                {React.createElement(card.icon, {
                  sx: {
                    color: theme.palette.primary.contrastText,
                    fontSize: 30,
                  },
                })}
              </Box>
            </Box>

            {/* TEXT */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  color: theme.palette.text.primary,
                  fontSize: TYPOGRAPHY_SIZE.h4 || 24,
                  fontWeight: 700,
                  fontFamily: FONT_FAMILY.primary,
                  lineHeight: 1.2,
                }}
              >
                {card.value}
              </Typography>

              <Typography
                sx={{
                  color: theme.palette.text.secondary,
                  fontSize: TYPOGRAPHY_SIZE.body1,
                  fontWeight: 500,
                  fontFamily: FONT_FAMILY.tertiary,
                  mt: 0.8,
                  textAlign: "center",
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

export default CardGroup;