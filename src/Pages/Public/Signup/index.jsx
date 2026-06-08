import React from "react";
import { Box, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import ImageSection from "../Signup/ImageSection";
import FormSection from "../Signup/FormSection";

const Signup = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Grid container sx={{ height: "100%" }}>
        <ImageSection />
        <FormSection />
      </Grid>
    </Box>
  );
};

export default Signup;