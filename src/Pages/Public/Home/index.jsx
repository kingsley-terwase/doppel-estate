import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '@mui/material/styles'
import {
  CityCard,
  FeaturedProperties,
  PropertyCard,
  TestimonialSlider,
  VideoBanner,
} from '../../../Component'
import { city, property, propertyList } from './data'
import { FONT_FAMILY } from '../../../Config/font'

// ── Sub-components ────────────────────────────────────────────────────────────

const SectionHeading = ({ children }) => {
  const theme = useTheme()   // ✅ uncommented

  return (
    <Typography
      variant="h5"
      fontWeight={700}
      color="text.primary"
      sx={{ textAlign: 'center' }}
    >
      {children}
      <hr style={{ borderColor: theme.palette.primary.main, marginTop: '0.5rem' }} />
    </Typography>
  )
}

const SectionWrapper = ({ children, sx = {} }) => {
  const theme = useTheme()   // ✅ uncommented

  return (
    <Box sx={{ backgroundColor: theme.palette.background.default, pb: 6, ...sx }}>
      <Container maxWidth="lg">{children}</Container>
    </Box>
  )
}

const SectionHeader = ({ title, subtitle }) => (
  <Box
    sx={{
      pt: '4rem',
      pb: '2rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '0.5rem',
    }}
  >
    <SectionHeading>{title}</SectionHeading>
    {subtitle && (
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ py: '1rem', textAlign: 'center', whiteSpace: 'pre-line' }}
      >
        {subtitle}
      </Typography>
    )}
  </Box>
)

// ── Main Page ─────────────────────────────────────────────────────────────────

const HomePage = () => {
  const theme = useTheme()
  const navigate = useNavigate()

  const available = property.filter((p) => p.status === 'available')
  const soldout   = property.filter((p) => p.status === 'soldout')

  const handlePropertyClick = (propertynumber) => {
    navigate(`/property/${propertynumber}`)
  }

  return (
    <>
      {/* ── Available Properties ── */}
      <SectionWrapper>
        <SectionHeader
          title="AVAILABLE ESTATE PROPERTIES"
          subtitle={`We are excited to offer you the best real estate options in the market, still selling\nhigh-quality properties that meet your needs and exceed your expectations.`}
        />
        <Grid container spacing={3} justifyContent="center" sx={{ mb: 3 }}>
          {available.map((item, idx) => (
            <Grid item key={idx} xs={12} sm={6} md={3}>
              <PropertyCard
                {...item}
                onClick={() => handlePropertyClick(item.propertynumber)}
              />
            </Grid>
          ))}
        </Grid>
      </SectionWrapper>

      {/* ── Sold-Out Properties ── */}
      <SectionWrapper>
        <SectionHeader
          title="HISTORY OF SOLD-OUT ESTATE PROPERTIES"
          subtitle={`Mauris primis turpis Laoreet magna felis mi\namet quam enim curae. Sodales semper tempor dictum faucibus habitasse.`}
        />
        <Grid container spacing={3} justifyContent="center" sx={{ mb: 9 }}>
          {soldout.map((item, idx) => (
            <Grid item key={idx} xs={12} sm={6} md={3}>
              <PropertyCard
                {...item}
                onClick={() => handlePropertyClick(item.propertynumber)}
              />
            </Grid>
          ))}
        </Grid>
      </SectionWrapper>

      {/* ── Cities Section ── */}
      <Box sx={{ backgroundColor: theme.palette.background.paper }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              pt: '4rem',
              pb: '2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <SectionHeading>WE HAVE ESTATE IN THESE CITIES</SectionHeading>
            <Grid container spacing={3} justifyContent="center" sx={{ mb: 9, mt: 1 }}>
              {city.map((item, idx) => (
                <Grid item key={idx} xs={12} sm={6} md="auto">
                  <CityCard {...item} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* ── Featured Properties ── */}
      <Box sx={{ py: '3rem', backgroundColor: theme.palette.background.default }}>
        <FeaturedProperties />
      </Box>

      {/* ── Stats Banner ── */}
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
          backgroundColor: theme.palette.primary.main,
        }}
      >
        {propertyList.map((list, index) => (
          <Box
            key={index}
            sx={{ flex: '1 1 auto', minWidth: '150px', maxWidth: '320px' }}
          >
            <Typography
              variant="h6"
              fontWeight={600}
              color={theme.palette.primary.contrastText}  // ✅ replaces common.white
            >
              {list.label}
            </Typography>
            <Typography
              variant="body1"
              color={theme.palette.primary.contrastText}  // ✅ replaces common.white
              sx={{ fontFamily: FONT_FAMILY.primary }}    // ✅ quaternary → primary
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