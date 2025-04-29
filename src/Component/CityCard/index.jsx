import Box from '@mui/material/Box'
import React from 'react'
import Typography from '@mui/material/Typography'
import { FONT_FAMILY } from '../../Config/font'

const CityCard = ({ src, label, subTitle }) => {
  return (
    <>
      <Box>
        <Box>
          <Box
            component='img'
            src={src}
            sx={{
              width: '200px',
              borderRadius: '50%',
              height: '200px'
            }}
          />
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant='body1'
            sx={{
              fontWeight: 600,
              fontFamily: FONT_FAMILY.quaternary
            }}
            color='initial'
          >
            {label}
          </Typography>
          <Typography
            variant='body2'
            sx={{ fontFamily: FONT_FAMILY.quaternary }}
            color='gray'
          >
            {subTitle}
          </Typography>
        </Box>
      </Box>
    </>
  )
}

export default CityCard
