import Button from '@mui/material/Button';
import React from 'react'
import { FONT_FAMILY } from '../../Config/font'
import { COLOR } from '../../Config/color';

const OnImgBtn = ({ label, bgColor }) => {
  return (
    <>
      <Button
        sx={{
          px: 1, 
          py: 0, 
          borderRadius: 0,
          backgroundColor: bgColor,
          fontSize: '12px',
          color: '#fff',
          fontFamily: FONT_FAMILY.tertiary,
          fontWeight: 400,
          "&:hover": {
            backgroundColor: '#000',
          }
        }}
      >
        {label}
      </Button>
    </>
  )
}

export default OnImgBtn
