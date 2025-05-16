import React from 'react';
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Link,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { COLOR } from '../../../../Config/color';
import { TYPOGRAPHY_SIZE } from '../../../../Config/typography';
import { FONT_FAMILY } from '../../../../Config/font';

const LoginFormSection = () => {
  return (
    <Grid item xs={12} sm={6} md={5} lg={5} xl={5} sx={{ height: '100%', backgroundColor: 'white' }}>
      <Box
        sx={{
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            backgroundColor: 'white',
            borderRadius: '12px',
            p: 4,
            width: '100%',
            maxWidth: '400px',
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2, mb: 3 }}>
            <img src="./Logo/Logo.png" style={{ width: '50px', height: '50px' }} />
          </Box>

          <Typography
            variant="h4"
            sx={{
              fontFamily: FONT_FAMILY.secondary,
              color: 'black',
              mb: 3,
              fontWeight: 400,
              fontSize: TYPOGRAPHY_SIZE.h5,
              textAlign: 'center',
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
                borderRadius: '20px',
                backgroundColor: '#E0E0E0',
                border: '1px solid grey',
                height: '40px',
                padding: '0 12px',
                '& .MuiOutlinedInput-notchedOutline': {
                  border: 'none',
                },
                '& input::placeholder': {
                  color: '#424242',
                  opacity: 1,
                },
              },
            }}
          />

          {/* Password */}
          <TextField
            placeholder="Password"
            type="password"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
            InputProps={{
              sx: {
                fontFamily: FONT_FAMILY.primary,
                borderRadius: '20px',
                backgroundColor: '#E0E0E0',
                border: '1px solid grey',
                height: '40px',
                padding: '0 12px',
                '& .MuiOutlinedInput-notchedOutline': {
                  border: 'none',
                },
                '& input::placeholder': {
                  color: '#424242',
                  opacity: 1,
                },
              },
            }}
          />

          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  color: '#424242',
                  backgroundColor: 'white',
                  '&.Mui-checked': {
                    color: '#424242',
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
              color: 'white',
              backgroundColor: COLOR.primary,
              fontFamily: FONT_FAMILY.primary,
              fontWeight: 600,
              borderRadius: '40px',
              py: '8px',
              px: '2rem',
              textTransform: 'capitalize',
              mb: 2,
              width: '100%',
              mt: '20px',
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
              component={RouterLink}
              to="/signup"
              sx={{
                fontFamily: FONT_FAMILY.quaternary,
                color: COLOR.primary || '#218DC9',
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline',
                  cursor: 'pointer',
                },
              }}
            >
              Click here
            </Link>
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
};

export default LoginFormSection;
