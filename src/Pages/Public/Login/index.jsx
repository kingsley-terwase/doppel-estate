import React from 'react';
import { Box, Grid } from '@mui/material';
import LoginImageSection from '../Login/LoginImageSection';
import LoginFormSection from '../Login/LoginFormSection';


const Login = () => {
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
      <Grid container sx={{ height: '100%' }}>
        <LoginImageSection />
        <LoginFormSection />
      </Grid>
    </Box>
  );
};

export default Login;
