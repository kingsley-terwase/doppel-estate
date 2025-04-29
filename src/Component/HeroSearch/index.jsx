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
      <AnimatedText
        text="Search what you are looking for..."
        sx={{
          fontWeight: 500,
          fontSize: { xs:'0.5rem', sm: '0.9rem', md: '1rem', lg: '2rem', xl: '2.1rem'},
          fontFamily: FONT_FAMILY.secondary,
          color: '#fff',
          mb: 1,
          textAlign: 'center'
        }}
      />
  

      <Typography
        variant='subtitle1'
        sx={{
          color: '#fff',
          fontFamily: FONT_FAMILY.secondary,
          mb: 4,
          textAlign: 'center'
        }}
      >
        We have listed over 100000+ property in our database
      </Typography>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: { xs: '100%', sm: '100%', md: '100%', lg: '100%', xl: '700px' },
          bgcolor: 'whitesmoke',
          borderRadius: 2,
          p: 1,
          overflow: 'hidden',
          color: '#000'
        }}
      >
        <TextField
          variant='outlined'
          placeholder='Enter Keyword...'
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
