import { useNavigate } from 'react-router-dom'
import { Box, Container, Grid, Typography } from '@mui/material'
import { property } from '../Home/data'
import { PropertyCard } from '../../../Component'
import { useTheme } from '@mui/material/styles'
import { FONT_FAMILY } from '../../../Config/font'

const Properties = () => {
  const theme = useTheme();
  const navigate = useNavigate()
  const available = property.filter(p => p.status === 'available')  // ✅ was: item.filter
  const soldout = property.filter(p => p.status === 'soldout')    // ✅ was: item.filter

  return (
    <Box sx={{ pt: 12, pb: 8, backgroundColor: 'grey.200', minHeight: '100vh' }}>
      <Container maxWidth='lg'>

        {/* ── Page heading ── */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant='h4' fontWeight={700} color='#000'>
            All Properties
          </Typography>
          <Typography
            variant='body1'
            color='text.primary'
            sx={{ mt: 1, fontFamily: FONT_FAMILY.quaternary }}
          >
            Browse our available and sold out listings below.
          </Typography>
        </Box>

        {/* ── Available ── */}
        <Typography variant='h6' fontWeight={700} color='#000' sx={{ mb: 2 }}>
          Available
        </Typography>
        <Grid container spacing={3} sx={{ mb: 6 }}>
          {available.map((item, idx) => (
            <Grid item key={idx} xs={12} sm={6} md={4}>
              <PropertyCard
                {...item}
                onClick={() => navigate(`/property/${item.propertynumber}`)}
              />
            </Grid>
          ))}
        </Grid>

        {/* ── Sold Out ── */}
        <Typography variant='h6' fontWeight={700} color='#000' sx={{ mb: 2 }}>
          Sold Out
        </Typography>
        <Grid container spacing={3}>
          {soldout.map((item, idx) => (
            <Grid item key={idx} xs={12} sm={6} md={4}>
              <PropertyCard
                {...item}
                onClick={() => navigate(`/property/${item.propertynumber}`)}
              />
            </Grid>
          ))}
        </Grid>

      </Container>
    </Box>
  )
}

export default Properties