import React from 'react';
import { Grid, Typography } from '@mui/material';
import { FONT_FAMILY } from '../../../../Config/font';

const ImageSection = () => {
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
        backgroundColor: 'grey.300',
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
          color: 'black',
        }}
      >
        Image Placeholder
      </Typography>
    </Grid>
  );
};

export default ImageSection;
