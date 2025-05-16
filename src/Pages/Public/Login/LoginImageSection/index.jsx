import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { FONT_FAMILY } from '../../../../Config/font';

const LoginImageSection = () => {
  return (
    <Grid item xs={12} sm={6} md={7} lg={7} xl={7} sx={{ height: '100%' }}>
      <Box
        sx={{
          backgroundColor: 'grey.300',
          borderRadius: '8px',
          height: '100%',
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
  );
};

export default LoginImageSection;
