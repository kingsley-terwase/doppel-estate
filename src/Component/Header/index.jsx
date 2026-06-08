import React, { useState, useEffect } from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";

import { useTheme } from "@mui/material/styles";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { Link, useLocation } from "react-router-dom";

import Slider from "react-slick";

import { FONT_FAMILY } from "../../Config/font";
import { navLinks } from "./static";

import { NextArrow, PrevArrow } from "../ArrowsCmpnt";
import HeroSearchSection from "../HeroSearch";
import AnimatedText from "../Animation/AnimatedText";

const sliderData = [
  {
    image: "/Images/Home_4.png",
    overlay: "rgba(0,0,0,0.5)",
    title: "Find Your Dream Home",
    subtitle:
      "Luxury properties across the globe, We have listed over 100000+ property in our database",
  },
  {
    image: "/Images/Home_5.png",
    overlay: "rgba(0,0,0,0.5)",
    title: "Invest in Your Future",
    subtitle: "The smartest real estate decisions",
  },
  {
    image: "/Images/Home_14.png",
    overlay: "rgba(12,1,1,0.5)",
    title: "Comfort & Style",
    subtitle: "Live where you love",
  },
];

const Header = () => {
  const theme = useTheme();

  const location = useLocation();

  const isHomePage = location.pathname === "/";

  const [isScrolled, setIsScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    prevArrow: <PrevArrow />,
  };

  const navbarSolid = isScrolled || !isHomePage;

  return (
    <>
      {/* HEADER */}
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: navbarSolid
            ? theme.palette.background.paper
            : "transparent",

          color: navbarSolid
            ? theme.palette.text.primary
            : theme.palette.primary.contrastText,

          borderBottom: navbarSolid
            ? `1px solid ${theme.palette.custom.border.subtle}`
            : "none",

          transition:
            "background-color 0.3s ease, color 0.3s ease",

          backdropFilter: navbarSolid ? "blur(10px)" : "none",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            sx={{
              justifyContent: "space-between",
              minHeight: "80px",
            }}
          >
            {/* LOGO */}
            <Link
              to="/"
              style={{
                textDecoration: "none",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  pr: 2,
                }}
              >
                <Box
                  component="img"
                  src="/Logo/Logo.png"
                  alt="logo"
                  sx={{
                    width: 70,
                  }}
                />

                <Typography
                  variant="body1"
                  sx={{
                    color: navbarSolid
                      ? theme.palette.text.primary
                      : theme.palette.primary.contrastText,

                    fontFamily: FONT_FAMILY.secondary,
                    fontWeight: 700,
                  }}
                >
                  Doppel Estate
                </Typography>
              </Box>
            </Link>

            {/* MOBILE MENU */}
            <Box
              sx={{
                display: {
                  xs: "block",
                  md: "none",
                },
              }}
            >
              <IconButton color="inherit" onClick={toggleDrawer}>
                <MenuIcon />
              </IconButton>
            </Box>

            {/* DESKTOP NAV */}
            <Stack
              direction="row"
              spacing={3}
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                },

                ml: "auto",
                pr: 2,

                alignItems: "center",
              }}
            >
              {navLinks.map((link, i) => {
                const active = location.pathname === link.path;

                return (
                  <Link
                    key={i}
                    to={link.path}
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: FONT_FAMILY.primary,

                        pt: "9px",

                        color: active
                          ? theme.palette.primary.main
                          : navbarSolid
                          ? theme.palette.text.primary
                          : theme.palette.primary.contrastText,

                        fontWeight: active ? 700 : 500,

                        transition: "0.2s ease",

                        "&:hover": {
                          color: theme.palette.primary.main,
                        },
                      }}
                    >
                      {link.label}
                    </Typography>
                  </Link>
                );
              })}

              {/* LOGIN BUTTON */}
              <Link
                to="/login"
                style={{
                  textDecoration: "none",
                }}
              >
                <Button
                  sx={{
                    textTransform: "capitalize",

                    color: theme.palette.primary.contrastText,

                    borderRadius: "40px",

                    py: "6px",
                    px: "2rem",

                    backgroundColor: theme.palette.primary.main,

                    fontFamily: FONT_FAMILY.primary,

                    "&:hover": {
                      backgroundColor:
                        theme.palette.primary.dark,
                    },
                  }}
                >
                  Login
                </Button>
              </Link>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer}
      >
        <Box
          sx={{
            width: 260,
            p: 2,

            height: "100%",

            backgroundColor:
              theme.palette.background.paper,
          }}
        >
          <IconButton onClick={toggleDrawer} sx={{ mb: 2 }}>
            <CloseIcon />
          </IconButton>

          <Stack spacing={2}>
            {navLinks.map((link, index) => {
              const active = location.pathname === link.path;

              return (
                <Link
                  key={index}
                  to={link.path}
                  onClick={toggleDrawer}
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <Typography
                    sx={{
                      cursor: "pointer",

                      color: active
                        ? theme.palette.primary.main
                        : theme.palette.text.primary,

                      fontWeight: active ? 700 : 500,

                      fontFamily: FONT_FAMILY.primary,
                    }}
                  >
                    {link.label}
                  </Typography>
                </Link>
              );
            })}
          </Stack>
        </Box>
      </Drawer>

      {/* HERO SLIDER */}
      {isHomePage && (
        <Box
          className="custom-slider"
          sx={{
            position: "relative",
            height: 600,
            overflow: "hidden",
          }}
        >
          <Slider {...sliderSettings}>
            {sliderData.map((slide, i) => (
              <Box
                key={i}
                sx={{
                  position: "relative",

                  height: 600,

                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",

                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* OVERLAY */}
                <Box
                  sx={{
                    position: "absolute",

                    top: 0,
                    left: 0,

                    width: "100%",
                    height: "100%",

                    backgroundColor: slide.overlay,

                    zIndex: 1,
                  }}
                />

                {/* CONTENT */}
                <Box
                  sx={{
                    position: "relative",
                    zIndex: 2,

                    color:
                      theme.palette.primary.contrastText,

                    textAlign: "center",

                    mx: "auto",
                    mt: 25,
                    px: 2,
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color:
                        theme.palette.primary.contrastText,

                      fontFamily: FONT_FAMILY.secondary,

                      mb: 2,
                    }}
                  >
                    Doppel Estate
                  </Typography>

                  <AnimatedText
                    text={slide.title}
                    sx={{
                      "& span": {
                        fontFamily: FONT_FAMILY.sept,
                      },

                      fontWeight: 900,

                      fontSize: {
                        xs: "1.8rem",
                        sm: "2.5rem",
                        md: "3rem",
                        lg: "4rem",
                      },

                      color:
                        theme.palette.primary.contrastText,

                      mb: 1,
                      textAlign: "center",
                    }}
                  />

                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: FONT_FAMILY.sept,

                      mb: 4,

                      mx: "30px",

                      color:
                        theme.palette.primary.contrastText,
                    }}
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
  );
};

export default Header;