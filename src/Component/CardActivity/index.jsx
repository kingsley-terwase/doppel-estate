import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

import { TYPOGRAPHY_SIZE } from "../../Config/typography";
import { FONT_FAMILY } from "../../Config/font";

const estate = [
  {
    id: 1,
    estate: "Nirala Estate",
    estatePerimeter: "50,000sqm",
    Plot: "100 x 100m (1 hectare)",
    total: "500 plots",
    sold: "150 plots",
    available: "350 plots",
    amount_plot: "$50,000",
    status: "available",
  },
  {
    id: 2,
    estate: "Apollo Family Apartment",
    estatePerimeter: "30,000sqm",
    Plot: "50 x 50m (0.25 hectare)",
    total: "300 plots",
    sold: "100 plots",
    available: "200 plots",
    amount_plot: "$40,000",
    status: "pending",
  },
];

const getStatusColor = (status, theme) => {
  switch (status) {
    case "available":
      return theme.palette.primary.main;

    case "pending":
      return theme.palette.secondary.main;

    case "sold":
      return theme.palette.error.main;

    default:
      return theme.palette.text.secondary;
  }
};

const EstateCard = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        p: { xs: 2, sm: 2.5 },
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          width: "100%",
          minHeight: 280,

          backgroundColor: theme.palette.background.paper,
          borderRadius: "18px",

          border: `1px solid ${theme.palette.custom.card.border}`,
          boxShadow: "0px 4px 12px rgba(0,0,0,0.08)",

          overflow: "hidden",
        }}
      >
        {/* HEADER */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.2,

            p: 2.5,

            borderBottom: `1px solid ${theme.palette.custom.border.subtle}`,

            backgroundColor: theme.palette.custom.card.body,
          }}
        >
          <NotificationsActiveIcon
            sx={{
              color: theme.palette.primary.main,
              fontSize: 24,
            }}
          />

          <Typography
            sx={{
              color: theme.palette.text.primary,
              fontSize: TYPOGRAPHY_SIZE.body1,
              fontWeight: 700,
              fontFamily: FONT_FAMILY.tertiary,
            }}
          >
            Recent Activity
          </Typography>
        </Box>

        {/* LIST */}
        <Box
          sx={{
            maxHeight: 320,
            overflowY: "auto",
            py: 1,

            "&::-webkit-scrollbar": {
              width: 6,
            },

            "&::-webkit-scrollbar-thumb": {
              backgroundColor: theme.palette.custom.border.default,
              borderRadius: 10,
            },
          }}
        >
          {estate.map((item) => (
            <Box
              key={item.id}
              sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: 1.5,

                px: 2.5,
                py: 1.8,

                transition: "0.25s ease",

                borderBottom: `1px solid ${theme.palette.custom.border.subtle}`,

                "&:hover": {
                  backgroundColor: theme.palette.action?.hover || "#f5f7fb",
                },
              }}
            >
              {/* STATUS DOT */}
              <FiberManualRecordIcon
                sx={{
                  color: getStatusColor(item.status, theme),
                  fontSize: 12,
                  mt: 0.8,
                }}
              />

              {/* CONTENT */}
              <Box>
                <Typography
                  sx={{
                    color: theme.palette.text.primary,
                    fontSize: TYPOGRAPHY_SIZE.caption,
                    fontWeight: 700,
                    fontFamily: FONT_FAMILY.tertiary,
                    mb: 0.5,
                  }}
                >
                  {item.estate}
                </Typography>

                <Typography
                  sx={{
                    color: theme.palette.text.secondary,
                    fontSize: TYPOGRAPHY_SIZE.body2 || 14,
                    lineHeight: 1.6,
                    fontFamily: FONT_FAMILY.tertiary,
                  }}
                >
                  {item.estatePerimeter} • {item.total} • {item.available}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default EstateCard;