import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { COLOR } from '../../Config/color'
import { FONT_FAMILY } from '../../Config/font'
import AnimatedText from '../Animation/AnimatedText'

export default function HeroSearchSection () {
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: {
            xs: '100%',
            sm: '100%',
            md: '100%',
            lg: '100%',
            xl: '100%'
          },
          bgcolor: 'whitesmoke',
          borderRadius: 1,
          maxWidth: '1100px',
          p: 2,
          mt: 10,
          mx: 'auto',
          overflow: 'hidden',
          color: '#000'
        }}
      >
        <TextField
          variant='outlined'
          placeholder='Enter Property type...'
          fullWidth
          sx={{
            '& fieldset': { border: 'none' },
            ml: 1,
            '& .MuiOutlinedInput-root': {
              color: '#000'
            },
            '& .MuiOutlinedInput-input::placeholder': {
              color: '#000',
              opacity: 1
            }
          }}
        />

        <Button
          variant='contained'
          sx={{
            borderRadius: 10,
            backgroundColor: COLOR.primary,
            color: '#fff',
            px: 3,
            textTransform: 'none',
            '&:hover': {
              backgroundColor: COLOR.primary
            }
          }}
        >
          Search
        </Button>
      </Box>
    </Box>
  )
}
