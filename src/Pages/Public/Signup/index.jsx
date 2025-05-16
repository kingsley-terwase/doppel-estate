import React from 'react';
import { Box, Grid } from '@mui/material';
import ImageSection from '../Signup/ImageSection';
import FormSection from '../Signup/FormSection';


const Signup = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey.200',
      }}
    >
      <Grid container spacing={0} sx={{ height: '100%', width: '100%' }}>
       <ImageSection />
       <FormSection />

      </Grid>
    </Box>
  );
};

export default Signup;
