import Typography from '@mui/material/Typography'
import React from 'react'
import Box from '@mui/material/Box'
import {
  CityCard,
  FeaturedProperties,
  PropertyCard,
  PurchaseCard,
  TestimonialSlider,
  VideoBanner
} from '../../../Component'
import { city, property, propertyList } from './data'
import Stack from '@mui/material/Stack'
import Container from '@mui/material/Container'
import { COLOR } from '../../../Config/color'
import { FONT_FAMILY } from '../../../Config/font'

const HomePage = () => {
  return (
    <>
      <Box sx={{ backgroundColor: 'whitesmoke', pb: 6 }}>
        <Container maxWidth='lg'>
          <Box
            sx={{
              pt: '4rem',
              pb: '2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Typography variant='h6' color='initial'>
              Featured Properties
            </Typography>
            <Typography
              variant='body1'
              color='initial'
              sx={{
                py: '1rem',
                textAlign: 'center',
                display: 'block'
              }}
            >
              Mauris primis turpis Laoreet magna felis mi <br /> amet quam enim
              curae. Sodales semper tempor dictum faucibus habitasse.
            </Typography>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Stack
              spacing={3}
              direction={{ xs: 'column', md: 'row' }}
              sx={{ justifyContent: 'center' }}
            >
              {property.map((item, idx) => (
                <PropertyCard key={idx} {...item} />
              ))}
            </Stack>
          </Box>
        </Container>
      </Box>
      <Box>
        <Container maxWidth='lg'>
          <Box
            sx={{
              pt: '4rem',
              pb: '2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Typography variant='h6' color='initial'>
              Featured Properties in These Cities
            </Typography>
            <Typography
              variant='body1'
              color='initial'
              sx={{
                py: '1rem',
                textAlign: 'center',
                display: 'block'
              }}
            >
              Mauris primis turpis Laoreet magna felis mi <br /> amet quam enim
              curae. Sodales semper tempor dictum faucibus habitasse.
            </Typography>
          </Box>
          <Box sx={{ mb: 9 }}>
            <Stack
              spacing={6}
              direction={{ xs: 'column', md: 'row' }}
              sx={{ justifyContent: 'center' }}
            >
              {city.map((item, idx) => (
                <CityCard key={idx} {...item} />
              ))}
            </Stack>
          </Box>
        </Container>
      </Box>
      <Box
        sx={{
          py: '3rem',
          backgroundColor: '#f1f1f1'
        }}
      >
        <FeaturedProperties />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          gap: { xs: '0.5rem', sm: '1rem', md: '2rem' },
          py: '4rem',
          px: '1rem',
          backgroundColor: COLOR.primary
        }}
      >
        {propertyList.map((list, index) => (
          <Box
            key={index}
            sx={{
              flex: '1 1 auto',
              minWidth: '150px',
              maxWidth: '320px'
            }}
          >
            <Typography variant='h6' sx={{ fontWeight: '600' }} color='#fff'>
              {list.label}
            </Typography>
            <Typography
              variant='body1'
              color='#fff'
              sx={{ fontFamily: FONT_FAMILY.quaternary }}
            >
              {list.subLabel}
            </Typography>
          </Box>
        ))}
      </Box>
      <TestimonialSlider />
      <VideoBanner />
    </>
  )
}

export default HomePage
