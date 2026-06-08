import React from 'react';
import { Box, Grid } from '@mui/material';
import LoginImageSection from '../Login/LoginImageSection';
import LoginFormSection from './LoginFormSection';
import { ToastContainer, toast } from "react-toastify";
import { useTheme } from '@mui/material/styles';

const Login = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.palette.background.default,
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
