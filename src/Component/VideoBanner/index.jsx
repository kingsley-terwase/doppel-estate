import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme, alpha } from "@mui/material/styles";
import { FONT_FAMILY } from "../../Config/font";

const VideoBanner = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const videoUrl = "https://www.youtube.com/embed/2M3ckqiHMvU?autoplay=1";

  const primary     = theme.palette.primary.main;
  const primaryDark = theme.palette.primary.dark;

  // ✅ background.dark doesn't exist on the theme — use background.default instead
  const bgOverlay   = theme.palette.background.default;

  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          py: { xs: 8, md: 12 },
          backgroundImage: "url('/Images/Home_5.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          overflow: "hidden",

          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            // ✅ both values are now valid, defined color strings
            background: `linear-gradient(
              135deg,
              ${alpha(bgOverlay, 0.82)},
              ${alpha(primaryDark, 0.72)}
            )`,
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: { xs: "flex-start", md: "center" },
              justifyContent: "space-between",
              gap: 5,
            }}
          >
            {/* LEFT CONTENT */}
            <Box sx={{ maxWidth: 650 }}>
              <Typography
                variant="caption"
                sx={{
                  color: theme.palette.custom.accent,
                  textTransform: "uppercase",
                  letterSpacing: 2,
                  fontWeight: 700,
                }}
              >
                Property Consultation
              </Typography>

              <Typography
                variant="h3"
                sx={{
                  mt: 1.5,
                  fontWeight: 700,
                  lineHeight: 1.2,
                  color: theme.palette.common.white,
                  fontFamily: FONT_FAMILY.secondary,
                }}
              >
                Do You Want To Sell Your Property?
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mt: 2,
                  maxWidth: 580,
                  lineHeight: 1.9,
                  color: alpha(theme.palette.common.white, 0.82),
                  fontFamily: FONT_FAMILY.primary,
                }}
              >
                You can also fill out our online form if you are interested
                in learning more about our property sales, valuation, and
                marketing process.
              </Typography>

              <Box
                sx={{
                  mt: 4,
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Button size="large" sx={{ px: 3.5, py: 1.4, fontWeight: 600 }}>
                  Contact Us
                </Button>

                <Typography
                  variant="body1"
                  sx={{
                    color: theme.palette.common.white,
                    fontWeight: 600,
                    fontFamily: FONT_FAMILY.primary,
                  }}
                >
                  Please Call : +902 100 523551
                </Typography>
              </Box>
            </Box>

            {/* VIDEO PLAY BUTTON */}
            <Box
              onClick={() => setOpen(true)}
              sx={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                alignSelf: { xs: "center", md: "center" },
                mt: { xs: 3, md: 0 },
              }}
            >
              {/* Outer ripple */}
              <Box
                sx={{
                  position: "absolute",
                  width: 120, height: 120,
                  borderRadius: "50%",
                  backgroundColor: alpha(primary, 0.15),
                  animation: "ripple 2s infinite",
                  "@keyframes ripple": {
                    "0%":   { transform: "scale(0.8)", opacity: 1 },
                    "100%": { transform: "scale(1.6)", opacity: 0 },
                  },
                }}
              />

              {/* Inner ripple */}
              <Box
                sx={{
                  position: "absolute",
                  width: 90, height: 90,
                  borderRadius: "50%",
                  backgroundColor: alpha(primary, 0.2),
                  animation: "ripple 2s infinite 0.5s",
                }}
              />

              <IconButton
                sx={{
                  width: 80, height: 80,
                  backgroundColor: primary,
                  color: theme.palette.common.white,
                  border: `4px solid ${alpha(theme.palette.common.white, 0.2)}`,
                  zIndex: 2,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: primaryDark,
                    transform: "scale(1.05)",
                  },
                }}
              >
                <PlayArrowIcon sx={{ fontSize: 42 }} />
              </IconButton>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* VIDEO MODAL */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%", left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "95%", sm: "90%", md: "80%" },
            maxWidth: 950,
            borderRadius: 4,
            overflow: "hidden",
            backgroundColor: theme.palette.background.paper,
            border: `1px solid ${theme.palette.custom.card.border}`,
            // ✅ theme.palette.common.black is valid in MUI
            boxShadow: `0 25px 60px ${alpha(theme.palette.common.black, 0.35)}`,
          }}
        >
          <IconButton
            onClick={() => setOpen(false)}
            sx={{
              position: "absolute",
              top: 12, right: 12,
              zIndex: 5,
              backgroundColor: alpha(theme.palette.common.black, 0.45),
              color: theme.palette.common.white,
              "&:hover": {
                backgroundColor: alpha(theme.palette.common.black, 0.7),
              },
            }}
          >
            <CloseIcon />
          </IconButton>

          <Box sx={{ position: "relative", width: "100%", paddingTop: "56.25%" }}>
            <iframe
              src={videoUrl}
              title="Property Video"
              allow="autoplay; encrypted-media"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0, left: 0,
                width: "100%", height: "100%",
                border: "none",
              }}
            />
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default VideoBanner;