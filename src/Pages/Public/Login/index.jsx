import React from 'react';
import { Box, Container, Grid, Typography, TextField, Button, Checkbox, FormControlLabel, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom'; // Added import for routing
import { FONT_FAMILY } from '../../../Config/font';
import { COLOR } from '../../../Config/color';
import { TYPOGRAPHY_SIZE } from '../../../Config/typography';
import Signup from '../../../Pages/Public/Signup';

const Login = () => {
  return (
    <Box
      sx={{
        pt: 18,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey.200',
        minHeight: '100vh',
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="flex-start"
        >
          <Grid item xs={12} sm={6} md={7} lg={7} xl={7}>
            <Box
              sx={{
                backgroundColor: 'grey.300',
                borderRadius: '8px',
                p: 3,
                minHeight: '400px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'black',
                textAlign: 'center',
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontFamily: FONT_FAMILY.primary,
                  fontWeight: 500,
                }}
              >
                Image Placeholder
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={5} lg={5} xl={5}>
            <Box
              sx={{
                backgroundColor: 'white',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                p: 4,
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontFamily: FONT_FAMILY.primary,
                  color: 'black',
                  mb: 3,
                  fontWeight: 400,
                  fontSize: TYPOGRAPHY_SIZE.body1,
                  textAlign: 'left',
                  fontFamily: FONT_FAMILY.primary,
                }}
              >
                User Login
              </Typography>
              <TextField
                placeholder="Username"
                variant="outlined"
                fullWidth
                sx={{ mb: 2 }}
                InputProps={{
                  sx: {
                    fontFamily: FONT_FAMILY.primary,
                    borderRadius: '8px',
                    backgroundColor: '#218DC9',
                    border: '1px solid #212121',
                    height: '40px',
                    padding: '0 12px',
                    '& .MuiOutlinedInput-notchedOutline': {
                      border: 'none',
                    },
                    '& input::placeholder': {
                      color: '#ffffff',
                      opacity: 1,
                    },
                  },
                }}
                InputLabelProps={{
                  sx: {
                    fontFamily: FONT_FAMILY.primary,
                  },
                }}
              />
              <TextField
                placeholder="Password"
                type="password"
                variant="outlined"
                fullWidth
                sx={{ mb: 2 }}
                InputProps={{
                  sx: {
                    fontFamily: FONT_FAMILY.primary,
                    borderRadius: '8px',
                    backgroundColor: '#218DC9',
                    border: '1px solid #212121',
                    height: '40px',
                    padding: '0 12px',
                    '& .MuiOutlinedInput-notchedOutline': {
                      border: 'none',
                    },
                    '& input::placeholder': {
                      color: '#ffffff',
                      opacity: 1,
                    },
                  },
                }}
                InputLabelProps={{
               
                }}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      color: '#218DC9',
                      backgroundColor: 'white',
                      '&.Mui-checked': {
                        color: '#218DC9',
                      },
                    }}
                  />
                }
                label="Remember next time"
                sx={{
                  mb: 2,
                  justifyContent: 'flex-start',
                  '& .MuiTypography-root': {
                    fontFamily: FONT_FAMILY.quaternary,
                    color: '#212121',
                  },
                }}
              />
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#218DC9',
                  color: 'white',
                  fontFamily: FONT_FAMILY.primary,
                  fontWeight: 600,
                  borderRadius: '40px',
                  py: '8px',
                  px: '2rem',
                  textTransform: 'capitalize',
                  mb: 2,
                  width: '100%',
                  '&:hover': {
                    backgroundColor: '#1a6f9e',
                  },
                }}
              >
                Sign Up
              </Button>
              <Typography
                variant="body2"
                sx={{
                  fontFamily: FONT_FAMILY.quaternary,
                  color: 'black',
                  mb: 1,
                  textAlign: 'left',
                }}
              >
                Forgot Password or Username
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontFamily: FONT_FAMILY.quaternary,
                  color: 'black',
                  textAlign: 'left',
                }}
              >
                Don’t have account?{' '}
                <Link
                  component={RouterLink} // Use RouterLink for navigation
                  to="/signup"
                  sx={{
                    fontFamily: FONT_FAMILY.quaternary,
                    color: COLOR.primary || '#218DC9',
                    textDecoration: 'none',
                    '&:hover': {
                      textDecoration: 'underline',
                      cursor: 'pointer'
                    },
                  }}
                >
                  Click here
                </Link>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Login;