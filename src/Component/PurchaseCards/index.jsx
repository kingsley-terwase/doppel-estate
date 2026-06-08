import React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import SquareFootIcon from "@mui/icons-material/SquareFoot";

import { useTheme } from "@mui/material/styles";

import { FONT_FAMILY } from "../../Config/font";

const PurchaseCard = () => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: 360,

        borderRadius: "20px",

        overflow: "hidden",

        backgroundColor:
          theme.palette.background.paper,

        border: `1px solid ${theme.palette.custom.card.border}`,

        boxShadow: "0px 4px 14px rgba(0,0,0,0.08)",

        transition:
          "transform 0.25s ease, box-shadow 0.25s ease",

        "&:hover": {
          transform: "translateY(-6px)",

          boxShadow: "0px 12px 24px rgba(0,0,0,0.15)",
        },
      }}
    >
      {/* IMAGE */}
      <Box
        sx={{
          position: "relative",
        }}
      >
        <CardMedia
          component="img"
          height="220"
          image="/Images/Home_4.png"
          alt="Luxury Family House"
          sx={{
            objectFit: "cover",
          }}
        />

        {/* STATUS BADGE */}
        <Chip
          label="For Sale"
          size="small"
          sx={{
            position: "absolute",

            top: 14,
            left: 14,

            backgroundColor:
              theme.palette.primary.main,

            color:
              theme.palette.primary.contrastText,

            fontWeight: 600,

            fontFamily: FONT_FAMILY.primary,
          }}
        />
      </Box>

      {/* CONTENT */}
      <CardContent
        sx={{
          p: "1rem",
        }}
      >
        {/* TITLE + PRICE */}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
          spacing={1}
        >
          <Typography
            sx={{
              fontSize: "18px",

              fontWeight: 700,

              lineHeight: 1.4,

              color:
                theme.palette.text.primary,

              fontFamily: FONT_FAMILY.secondary,
            }}
          >
            Luxury Family House
          </Typography>

          <Typography
            sx={{
              fontSize: "18px",

              fontWeight: 700,

              color:
                theme.palette.primary.main,

              whiteSpace: "nowrap",

              fontFamily: FONT_FAMILY.primary,
            }}
          >
            ₦3.5M
          </Typography>
        </Stack>

        {/* LOCATION */}
        <Stack
          direction="row"
          alignItems="center"
          spacing={0.5}
          sx={{
            mt: 1,
          }}
        >
          <LocationOnIcon
            sx={{
              fontSize: 18,

              color:
                theme.palette.text.secondary,
            }}
          />

          <Typography
            sx={{
              fontSize: "14px",

              color:
                theme.palette.text.secondary,

              fontFamily: FONT_FAMILY.primary,
            }}
          >
            Los Angeles, CA
          </Typography>
        </Stack>

        {/* PROPERTY FEATURES */}
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{
            mt: 2,

            py: 1.5,

            borderTop: `1px solid ${theme.palette.custom.border.subtle}`,

            borderBottom: `1px solid ${theme.palette.custom.border.subtle}`,
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            spacing={0.5}
          >
            <BedIcon
              sx={{
                fontSize: 18,

                color:
                  theme.palette.primary.main,
              }}
            />

            <Typography
              sx={{
                fontSize: "13px",

                color:
                  theme.palette.text.secondary,
              }}
            >
              4 Beds
            </Typography>
          </Stack>

          <Stack
            direction="row"
            alignItems="center"
            spacing={0.5}
          >
            <BathtubIcon
              sx={{
                fontSize: 18,

                color:
                  theme.palette.primary.main,
              }}
            />

            <Typography
              sx={{
                fontSize: "13px",

                color:
                  theme.palette.text.secondary,
              }}
            >
              3 Baths
            </Typography>
          </Stack>

          <Stack
            direction="row"
            alignItems="center"
            spacing={0.5}
          >
            <SquareFootIcon
              sx={{
                fontSize: 18,

                color:
                  theme.palette.primary.main,
              }}
            />

            <Typography
              sx={{
                fontSize: "13px",

                color:
                  theme.palette.text.secondary,
              }}
            >
              1200 sqft
            </Typography>
          </Stack>
        </Stack>

        {/* BUTTON */}
        <Button
          fullWidth
          variant="contained"
          sx={{
            mt: 3,

            py: 1.2,

            borderRadius: "12px",

            backgroundColor:
              theme.palette.custom.button.main,

            color:
              theme.palette.primary.contrastText,

            fontWeight: 600,

            fontFamily: FONT_FAMILY.primary,

            textTransform: "none",

            boxShadow: "none",

            "&:hover": {
              backgroundColor:
                theme.palette.custom.button.hover,

              boxShadow: "none",
            },
          }}
        >
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default PurchaseCard;