import React from "react";
import { Box, Grid, Container } from "@mui/material";

const Profile = () => {
  return (
    <Box
      sx={{
        pt: 18,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "grey",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={4}
            xl={4}
            sx={{ backgroundColor: "green", height: "300px" }}
          >
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={8}
            lg={8}
            xl={8}
            sx={{ backgroundColor: "black", height: "300px" }}
          >
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Profile;
