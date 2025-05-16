import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react'
import { FONT_FAMILY } from '../../Config/font';

const PageFirstBg = ({ label, subLabel }) => {
  return (
    <>
      <Box sx={{ position: 'relative' }}>
        <img
          src='/Images/bg.png'
          style={{ height: '250px', objectFit: 'cover', width: '100%' }}
        />
        <Box sx={{ position: 'absolute', bottom: 0, left: 160 }}>
          <Typography
            sx={{ fontFamily: FONT_FAMILY.secondary }}
            color='#fff'
            mb={1}
          >
           {label}
          </Typography>
          <Typography
            sx={{ fontFamily: FONT_FAMILY.primary }}
            variant='h5'
            color='#fff'
            fontWeight={600}
            mb={4}
          >
            {subLabel}
          </Typography>
        </Box>
      </Box>
    </>
  )
}

export default PageFirstBg
