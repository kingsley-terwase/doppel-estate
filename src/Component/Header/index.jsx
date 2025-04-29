import React, {useState, useEffect} from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import {FONT_FAMILY} from "../../Config/font";
import {navLinks} from "./static";
import {Link, useLocation} from "react-router-dom";
import {style} from "./styles";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AnimatedText from "../Animation/AnimatedText";
import Button from "@mui/material/Button";
import {COLOR} from "../../Config/color";
import HeroSearchSection from "../HeroSearch";


const Header = () => {
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    const [showTopNav, setShowTopNav] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const backgrounds = [
        {image: "/Images/Home_4.png", overlay: "rgba(0, 0, 0, 0.8)"},
        {image: "/Images/Home_5.png", overlay: "rgba(0, 0, 0, 0.8)"},
        {image: "/Images/Home_6.png", overlay: "rgba(50, 0, 0, 0.6)"},
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setIsScrolled(scrollY > 60);
            setShowTopNav(scrollY <= 60);
        };
        window.addEventListener("scroll", handleScroll);

        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
        }, 5000);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearInterval(interval);
        };
    }, []);

    const toggleDrawer = () => setDrawerOpen(!drawerOpen);

    return (
        <>
            <AppBar
                position="fixed"
                elevation={isScrolled ? 0 : 0}
                sx={{
                    backgroundColor: isScrolled || !isHomePage ? "white" : "transparent",
                    boxShadow: isScrolled || !isHomePage ? "2px 4px 6px rgba(0, 0, 0, 0.2)" : null,
                    color: isScrolled || !isHomePage ? "black" : "white",
                    transition: "background-color 0.3s ease, color 0.3s ease",
                    ...(isHomePage && {
                        padding: isScrolled ? "0" : {xs: "0", sm: "1rem 2rem"},
                    }),
                }}
            >
                <Container maxWidth="lg">
                    <Toolbar disableGutters sx={{justifyContent: "space-between", width: "100%"}}>
                        <Link style={{textDecoration: "none"}} to="/">
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingRight: "1rem"}}>
                                <img style={{ width: "70px" }} src="/Logo/Logo.png" alt="logo" />
                                <Typography variant="body1" sx={{ color: isScrolled ? "#000" : "#fff" }}>Doppel Estate</Typography>
                            </Box>
                        </Link>
                        <Box sx={{display: {xs: "block", md: "none"}}}>
                            <IconButton onClick={toggleDrawer} color="inherit">
                                <MenuIcon />
                            </IconButton>
                        </Box>
                        <Stack
                            direction="row"
                            spacing={3}
                            sx={{display: {xs: "none", md: "flex"}, marginLeft: "auto", pr: 2}}
                        >
                            {navLinks.map((link, index) => (
                                <Link key={index} to={link.path} style={{textDecoration: "none", color: "inherit"}}>
                                    <Typography sx={{fontFamily: FONT_FAMILY.primary, pt: "9px"}}>
                                        {link.label}
                                    </Typography>
                                </Link>
                            ))}
                            <Link to="/login" style={{textDecoration: "none", color: "inherit"}}>
                                <Button
                                    sx={{
                                        textTransform: "capitalize",
                                        color: "white",
                                        borderRadius: '40px',
                                        py: "5px",
                                        px: "2rem",
                                        backgroundColor: COLOR.primary,
                                        fontFamily: FONT_FAMILY.primary,
                                    }}
                                >
                                    Login
                                </Button>
                            </Link>
                        </Stack>
                    </Toolbar>
                </Container>
            </AppBar>

            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
                <Box sx={{width: 250, padding: "1rem"}}>
                    <IconButton onClick={toggleDrawer} sx={{mb: 2}}>
                        <CloseIcon />
                    </IconButton>
                    <Stack spacing={2}>
                        {navLinks.map((link, index) => (
                            <Typography key={index} variant="body1" onClick={toggleDrawer} sx={{cursor: "pointer"}}>
                                {link.label}
                            </Typography>
                        ))}
                    </Stack>
                </Box>
            </Drawer>
            {isHomePage && (
                <Box
                    sx={{
                        position: "relative",
                        backgroundImage: `url(${backgrounds[currentImageIndex].image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        display: 'center',
                        alignItems: 'center',
                        justifyContent: 'Center',
                        height: "700px",
                        color: "white",
                        overflow: "hidden",
                    }}
                >
                    <Box
                        sx={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            backgroundColor: backgrounds[currentImageIndex].overlay, 
                            zIndex: 2,
                        }}
                    />
                    <Box
                        sx={{
                            position: "relative",
                            zIndex: 2,
                            textAlign: "center",
                            mt: "6rem",
                            mx: "auto",
                            // width: {xs: "90%", sm: "80%", md: "100%"},
                        }}
                    >
                        <HeroSearchSection />
                    </Box>
                </Box>
            )}
        </>
    );
};

export default Header;
