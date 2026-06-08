import React from 'react';
import { Grid, Typography } from '@mui/material';
import { FONT_FAMILY } from '../../../../Config/font';
import { useTheme } from '@mui/material/styles';

const ImageSection = () => {
  const theme = useTheme();
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={6}
      lg={6}
      xl={6}
      sx={{
        height: '100vh',
        backgroundColor: theme.palette.background.contrastText,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '8px',
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontFamily: FONT_FAMILY.primary,
          fontWeight: 500,
          textAlign: 'center',
          color: theme.palette.text.primary,
        }}
      >
        <img
          src="./Images/Home_3.png"
          alt="Signup Image"
          style={{ width: '100%', height: '100vh' }}
        />
      </Typography>
    </Grid>
  )
};

export default ImageSection;
