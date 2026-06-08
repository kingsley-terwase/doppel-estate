import React from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { useTheme } from "@mui/material/styles";

const HeroSearchSection = () => {
  const theme = useTheme();

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",

          width: "100%",

          maxWidth: "1100px",

          mx: "auto",
          mt: 10,

          p: 1,

          overflow: "hidden",

          borderRadius: "16px",

          backgroundColor: theme.palette.background.paper,

          border: `1px solid ${theme.palette.custom.border.subtle}`,

          boxShadow: "0px 6px 18px rgba(0,0,0,0.08)",

          backdropFilter: "blur(8px)",

          gap: 1,

          flexDirection: {
            xs: "column",
            sm: "row",
          },
        }}
      >
        {/* INPUT */}
        <TextField
          variant="outlined"
          placeholder="Enter property type..."
          fullWidth
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "12px",

              backgroundColor:
                theme.palette.background.paper,

              color: theme.palette.text.primary,

              "& fieldset": {
                border: "none",
              },

              "& input::placeholder": {
                color: theme.palette.text.secondary,
                opacity: 1,
              },
            },
          }}
        />

        {/* BUTTON */}
        <Button
          variant="contained"
          sx={{
            borderRadius: "12px",

            px: 4,
            py: 1.6,

            minWidth: {
              xs: "100%",
              sm: "140px",
            },

            backgroundColor:
              theme.palette.primary.main,

            color:
              theme.palette.primary.contrastText,

            textTransform: "none",

            fontWeight: 600,

            "&:hover": {
              backgroundColor:
                theme.palette.primary.dark,
            },
          }}
        >
          Search
        </Button>
      </Box>
    </Box>
  );
};

export default HeroSearchSection;