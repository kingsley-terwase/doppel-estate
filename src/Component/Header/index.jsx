import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { Link, useLocation } from 'react-router-dom'
import Slider from 'react-slick'
import { FONT_FAMILY } from '../../Config/font'
import { navLinks } from './static'
import { COLOR } from '../../Config/color'
import { NextArrow, PrevArrow } from '../ArrowsCmpnt'
import HeroSearchSection from '../HeroSearch'
import AnimatedText from '../Animation/AnimatedText'

const sliderData = [
  {
    image: '/Images/Home_4.png',
    overlay: 'rgba(0, 0, 0, 0.5)',
    title: 'Find Your Dream Home',
    subtitle: 'Luxury properties across the globe, We have listed over 100000+ property in our database'
  },
  {
    image: '/Images/Home_5.png',
    overlay: 'rgba(0, 0, 0, 0.5)',
    title: 'Invest in Your Future',
    subtitle: 'The smartest real estate decisions'
  },
  {
    image: '/Images/Home_14.png',
    overlay: 'rgba(12, 1, 1, 0.5)',
    title: 'Comfort & Style',
    subtitle: 'Live where you love'
  }
]

const Header = () => {
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  const [isScrolled, setIsScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)

  const toggleDrawer = () => setDrawerOpen(!drawerOpen)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const sliderSettings = {
    dots: false,
    infinite: true,
    arrows: true,
    autoplay: false,
    speed: 800,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  }

  return (
    <>
      <AppBar
        position='fixed'
        elevation={isScrolled ? 1 : 0}
        sx={{
          backgroundColor: isScrolled || !isHomePage ? 'white' : 'transparent',
          boxShadow:
            isScrolled || !isHomePage
              ? 'none'
              : 'none',
          color: isScrolled || !isHomePage ? 'black' : 'white',
          transition: 'background-color 0.3s ease, color 0.3s ease'
        }}
      >
        <Container maxWidth='lg'>
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            <Link to='/' style={{ textDecoration: 'none' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', pr: 2 }}>
                <img
                  style={{ width: '70px' }}
                  src='/Logo/Logo.png'
                  alt='logo'
                />
                <Typography
                  variant='body1'
                  sx={{ color: isScrolled ? '#000' : '#fff' }}
                >
                  Doppel Estate
                </Typography>
              </Box>
            </Link>

            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
              <IconButton onClick={toggleDrawer} color='inherit'>
                <MenuIcon />
              </IconButton>
            </Box>

            <Stack
              direction='row'
              spacing={3}
              sx={{ display: { xs: 'none', md: 'flex' }, ml: 'auto', pr: 2 }}
            >
              {navLinks.map((link, i) => (
                <Link
                  key={i}
                  to={link.path}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <Typography
                    sx={{ fontFamily: FONT_FAMILY.primary, pt: '9px' }}
                  >
                    {link.label}
                  </Typography>
                </Link>
              ))}
              <Link
                to='/login'
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <Button
                  sx={{
                    textTransform: 'capitalize',
                    color: 'white',
                    borderRadius: '40px',
                    py: '5px',
                    px: '2rem',
                    backgroundColor: COLOR.primary,
                    fontFamily: FONT_FAMILY.primary
                  }}
                >
                  Login
                </Button>
              </Link>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer anchor='right' open={drawerOpen} onClose={toggleDrawer}>
        <Box sx={{ width: 250, padding: '1rem' }}>
          <IconButton onClick={toggleDrawer} sx={{ mb: 2 }}>
            <CloseIcon />
          </IconButton>
          <Stack spacing={2}>
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                onClick={toggleDrawer}
                style={{ textDecoration: 'none' }}
              >
                <Typography variant='body1' sx={{ cursor: 'pointer' }}>
                  {link.label}
                </Typography>
              </Link>
            ))}
          </Stack>
        </Box>
      </Drawer>

      {isHomePage && (
        <Box
          className='custom-slider'
          sx={{ position: 'relative', height: '600px', overflow: 'hidden' }}
        >
          <Slider {...sliderSettings}>
            {sliderData.map((slide, i) => (
              <Box
                key={i}
                sx={{
                  position: 'relative',
                  height: '600px',
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: slide.overlay,
                    zIndex: 1
                  }}
                />
                <Box
                  sx={{
                    position: 'relative',
                    zIndex: 2,
                    color: 'white',
                    textAlign: 'center',
                    mx: 'auto',
                    mt: 25,
                    px: 2
                  }}
                >
                  <Typography
                    variant='subtitle1'
                    sx={{
                      color: '#fff',
                      fontFamily: FONT_FAMILY.secondary,
                      mb: 2,
                      textAlign: 'center'
                    }}
                  >
                    Doppel Estate
                  </Typography>
                  <AnimatedText
                    text={slide.title}
                    sx={{
                      '& span': {
                        fontFamily: FONT_FAMILY.sept
                      },
                      fontWeight: 900,
                      fontSize: {
                        xs: '0.5rem',
                        sm: '0.9rem',
                        md: '1rem',
                        lg: '2rem',
                        xl: '2.1rem'
                      },
                      color: '#fff',
                      mb: 1,
                      textAlign: 'center'
                    }}
                  />

                  <Typography
                    variant='body1'
                    sx={{ fontFamily: FONT_FAMILY.sept, mb: 4,  mx:'30px',}}
                  >
                    {slide.subtitle}
                  </Typography>
                  <HeroSearchSection />
                </Box>
              </Box>
            ))}
          </Slider>
        </Box>
      )}
    </>
  )
}

export default Header
