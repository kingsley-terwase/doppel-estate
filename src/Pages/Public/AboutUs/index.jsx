import React, { useState, useEffect } from 'react'
import { useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Divider from '@mui/material/Divider'
import useMediaQuery from '@mui/material/useMediaQuery'
import {
  Building20Regular,
  CheckmarkCircle24Regular,
  PersonFeedback24Regular,
  People24Regular
} from '@fluentui/react-icons'
import { PageFirstBg } from '../../../Component'
import { FONT_FAMILY } from '../../../Config/font'

const team = [
  {
    name: 'Terwase Johnson',
    role: 'CEO & Founder',
    image: '/Images/Person_1.png',
    bio: 'With over 15 years in real estate, Sarah founded Premium Properties to revolutionize how people find their dream homes.'
  },
  {
    name: 'Michael Chen',
    role: 'Lead Real Estate Agent',
    image: '/Images/Person_2.png',
    bio: 'Michael specializes in luxury properties and has closed deals worth over $50 million in the past five years.'
  },
  {
    name: 'Priya Patel',
    role: 'Property Manager',
    image: '/Images/Person_3.png',
    bio: 'Priya ensures all properties are impeccably maintained and manages the rental portfolio with precision.'
  },
  {
    name: 'David Wilson',
    role: 'Marketing Director',
    image: '/Images/Person_4.png',
    bio: 'David crafts compelling campaigns using modern digital strategies to showcase our listings.'
  }
]

const values = [
  {
    title: 'Integrity',
    description: 'We uphold honesty and transparency in every interaction.',
    src: '/Illus/illus_1.png'
  },
  {
    title: 'Excellence',
    description:
      'We pursue excellence in all aspects of our service and listings.',
    src: '/Illus/illus_3.png'
  },
  {
    title: 'Client-Focused',
    description: 'Your needs and dreams are our top priority.',
    src: '/Illus/illus_2.png'
  },
  {
    title: 'Community',
    description: 'We actively contribute to the communities we serve.',
    src: '/Illus/illus_4.png'
  }
]

// Company timeline
const milestones = [
  {
    year: '2010',
    achievement: 'Founded with just 3 agents in a shared office'
  },
  { year: '2013', achievement: 'Expanded to 15 agents and opened our HQ' },
  { year: '2016', achievement: 'Surpassed $100M in annual sales' },
  { year: '2019', achievement: 'Launched second branch in South City' },
  {
    year: '2022',
    achievement: 'Ranked Top 10 Real Estate Agency in the region'
  },
  {
    year: '2024',
    achievement: 'Grew to a team of 50+ professionals across the metro'
  }
]

export default function AboutUsPage () {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  // Hero image scroll effect (optional)
  const [scrollOffset, setScrollOffset] = useState(0)
  useEffect(() => {
    const handleScroll = () => setScrollOffset(window.pageYOffset)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Box sx={{ flexGrow: 1 }}>
      <PageFirstBg label='Home / about us' subLabel='About Us' />
      <Container sx={{ py: 4 }}>
        <Grid container spacing={4} alignItems='start'>
          <Grid item xs={12} md={5}>
            <Typography
              variant='h4'
              sx={{ fontFamily: FONT_FAMILY.sept }}
              fontWeight='bold'
              gutterBottom
            >
              Our Story
            </Typography>
            <Typography
              variant='body1'
              sx={{ fontFamily: FONT_FAMILY.sept, fontWeight: 500 }}
              paragraph
            >
              Founded in 2010, Premium Properties was built on the belief that
              buying a house should be about finding a place to call home.
            </Typography>
            <Typography
              variant='body1'
              sx={{ fontFamily: FONT_FAMILY.sept, fontWeight: 500 }}
              paragraph
            >
              From a humble beginning, we've grown into one of the region's most
              respected agencies, delivering tailored, transparent services for
              over a decade.
            </Typography>
            <Typography
              variant='body1'
              sx={{ fontFamily: FONT_FAMILY.sept, fontWeight: 500 }}
            >
              Our team combines local expertise with a deep commitment to client
              success—because your story is part of ours.
            </Typography>
          </Grid>
          <Grid item xs={12} md={7}>
            <Paper
              component={'div'}
              sx={{
                height: '100%',
                borderRadius: 0,
                minHeight: 400,
                backgroundImage: 'url(/Images/Home_14.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
          </Grid>
        </Grid>
      </Container>

      <Box sx={{ backgroundColor: '#f5f5f5', py: 8 }}>
        <Container>
          <Typography
            variant='h4'
            sx={{ fontFamily: FONT_FAMILY.sept }}
            fontWeight='bold'
            gutterBottom
            textAlign='center'
          >
            Our Core Values
          </Typography>
          <Typography
            variant='body1'
            align='center'
            sx={{
              maxWidth: 800,
              fontWeight: 600,
              fontFamily: FONT_FAMILY.sept,
              mx: 'auto',
              mb: 6
            }}
          >
            Our values are the foundation of how we operate—with integrity,
            dedication, and a client-first mindset.
          </Typography>

          <Grid container spacing={4}>
            {values.map((value, idx) => (
              <Grid item xs={12} sm={6} md={3} key={idx}>
                <Card
                  sx={{ height: '100%', boxShadow: 0, backgroundColor: '#fff' }}
                >
                  <CardContent sx={{ textAlign: 'center' }}>
                    <Box>
                      <img
                        src={value.src}
                        style={{ width: '140px', objectFit: 'cover' }}
                        alt='icon'
                      />
                    </Box>
                    <Typography
                      variant='subtitle1'
                      sx={{ fontFamily: FONT_FAMILY.tertiary }}
                      fontWeight='600'
                    >
                      {value.title}
                    </Typography>
                    <Typography
                      variant='body2'
                      sx={{
                        fontFamily: FONT_FAMILY.sept,
                        mt: 1,
                        fontWeight: 'bold'
                      }}
                    >
                      {value.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Container sx={{ py: 8 }}>
        <Typography
          variant='h4'
          sx={{ fontFamily: FONT_FAMILY.sept }}
          fontWeight='bold'
          gutterBottom
          textAlign='center'
        >
          Meet Our Team
        </Typography>
        <Typography
          variant='body1'
          align='center'
          sx={{
            maxWidth: 800,
            fontWeight: 600,
            fontFamily: FONT_FAMILY.sept,
            mx: 'auto',
            mb: 6
          }}
        >
          Behind every successful deal is a passionate expert. Our diverse,
          talented team is dedicated to delivering results you can trust.
        </Typography>
        <Grid container spacing={4}>
          {team.map((member, idx) => (
            <Grid item xs={12} sm={6} md={3} key={idx}>
              <Card
                sx={{
                  backgroundColor: '#fff',
                  height: '440px',
                  borderRadius: 0,
                  boxShadow: 2
                }}
              >
                <CardMedia
                  component='img'
                  height='240'
                  image={member.image}
                  alt={member.name}
                />
                <CardContent>
                  <Typography
                    variant='subtitle1'
                    sx={{ fontFamily: FONT_FAMILY.tertiary }}
                    fontWeight='bold'
                  >
                    {member.name}
                  </Typography>
                  <Typography
                    variant='body2'
                    fontWeight={'400'}
                    gutterBottom
                    color='gray'
                  >
                    {member.role}
                  </Typography>
                  <Divider sx={{ my: 1 }} />
                  <Typography
                    variant='body2'
                    sx={{ fontFamily: FONT_FAMILY.sept }}
                  >
                    {member.bio}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box sx={{ backgroundColor: '#fff', py: 8 }}>
        <Container>
        <Typography
            variant='h4'
            sx={{ fontFamily: FONT_FAMILY.sept }}
            fontWeight='bold'
            gutterBottom
            textAlign='center'
          >
            Our Journey
          </Typography>
          <Typography
            variant='body1'
            align='center'
            sx={{ maxWidth: 800, fontWeight: 600,  fontFamily: FONT_FAMILY.sept, mx: 'auto', mb: 6 }}
          >
         Every milestone reflects our continued growth and the trust our
         clients place in us.
          </Typography>
          <Box sx={{ mx: 'auto' }}>
          <Grid container spacing={2}>
            {milestones.map((item, idx) => (            
                <Grid item xs={12} md={4}>
                <Paper
                  component='div'
                key={idx}
                sx={{
                  p: 2,
                  mb: 3,
                  display: 'flex',
                  boxShadow: 0,
                  border: '1px solid rgba(204, 199, 199, 0.47)',
                   backgroundColor: '#fff',
                  flexDirection: { xs: 'column', sm: 'row' },
                  alignItems: { xs: 'flex-start', sm: 'center' },
                  gap: 2,
                  transition: 'transform  0.3s ease-in-out',
                  "&:hover": {
                    transform: 'scale(1.05)',
                  }
                }}
              >
                <Box
                  sx={{
                    backgroundColor: '#1976d2',
                      p: 3,
                      width: '100%',
                      maxWidth: '70px',
                      height: 'auto',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 800,
                      color: '#fff',
                      fontSize: '1rem',
                      fontFamily: FONT_FAMILY.tertiary,
                    borderRadius: '50%',
                  }}
                >
                  {item.year}
                </Box>
                  <Box>
                  <Typography variant='body1'>{item.achievement}</Typography>
                </Box>
                  </Paper>
                 </Grid>             
            ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}
