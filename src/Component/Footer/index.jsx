import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button"; 
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { WhatsApp } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";     
import { getFooterStyles } from "./styles";          

const Footer = () => {
  const theme = useTheme();         
  const style = getFooterStyles(theme); 

  return (
    <Box sx={style.footerContainer}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={4}
        sx={style.footerContent}
      >
        {/* Brand Section */}
        <Box sx={style.column}>
          <Typography variant="h6" sx={style.columnHeader}>
            Doppel Homes
          </Typography>
          <Typography variant="body2" sx={style.columnText}>
            We are a real estate company interested in making your dream home a
            reality, achieving your dream home is our priority
          </Typography>
          <Box sx={style.socialIcons}>
            <IconButton sx={style.iconButton}>
              <FacebookIcon />
            </IconButton>
            <IconButton sx={style.iconButton}>
              <YouTubeIcon />
            </IconButton>
            <IconButton sx={style.iconButton}>
              <WhatsApp />
            </IconButton>
          </Box>
        </Box>

        {/* Quick Links Section */}
        <Box sx={style.column}>
          <Typography variant="h6" sx={style.columnHeader}>
            Quick Links
          </Typography>
          <Stack spacing={1}>
            {["About Us", "Services", "Contact"].map((link) => (
              <Stack key={link} direction="row" alignItems="center" spacing={1}>
                <StarBorderIcon sx={style.icon} />
                <Typography variant="body2" sx={style.columnText}>
                  {link}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Box>

        <Box sx={style.column}>
          <Typography variant="h6" sx={style.columnHeader}>
            Contact Us
          </Typography>
          <Typography variant="body2" sx={style.columnText}>
            19, Toyota house Gaduwa, Box 971 Gboko, FCT Abuja, Nigeria
          </Typography>
          <Typography variant="body2" sx={style.columnText}>
            Phone: +234 070 63 21 7676
          </Typography>
          <Typography variant="body2" sx={style.columnText}>
            Email: contact@doppelhome.com
          </Typography>
        </Box>

        <Box sx={style.column}>
          <Typography variant="h6" sx={style.columnHeader}>
            Newsletter
          </Typography>
          <Typography variant="body2" sx={style.columnText}>
            Subscribe to our newsletter to stay updated with our events and
            announcements.
          </Typography>
          <Box sx={style.newsletterBox}>
            <input
              type="email"
              placeholder="Enter your email"
              style={style.inputField}
            />
            <Button
              variant="contained"
              disableElevation
              sx={style.subscribeButton}
            >
              Subscribe
            </Button>
          </Box>
        </Box>
      </Stack>

      <Box sx={style.footerBottom}>
        <Typography variant="body2" sx={style.footerText}>
          © 2025 Doppel Estate. All rights reserved. Powered by Advanztek Nig. Ltd.
        </Typography>
        <Typography variant="body1" sx={style.footerText}>
          Designed by Primetek Nig. (080109745451)
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;