import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import { useTheme, alpha } from "@mui/material/styles";
import { motion, AnimatePresence } from "framer-motion";
import { CommentQuoteFilled } from "@fluentui/react-icons";

const testimonials = [
  {
    quote:
      "Posuere mus curabitur parturient scelerisque suspendisse elementum facilisis dignissim non purus torquent turpis interdum hendrerit erat ultrices pretium risus elementum.",
    name: "Mark Wiggins",
    position: "CEO ( Grodins Group )",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum tortor sem.",
    name: "Jane Doe",
    position: "Managing Director ( XYZ Corp )",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    quote:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    name: "John Smith",
    position: "CTO ( ABC Ltd )",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];

const TestimonialSlider = () => {
  const theme = useTheme();
  const [index, setIndex] = useState(0);

  const accent = theme.palette.custom.accent;
  const isLight = theme.palette.mode === "light";

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        px: 2,
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Paper
        elevation={0}
        sx={{
          maxWidth: 850,
          mx: "auto",
          textAlign: "center",
          px: { xs: 3, sm: 5, md: 8 },
          py: { xs: 5, md: 7 },

          backgroundColor: theme.palette.custom.card.body,

          border: `1px solid ${theme.palette.custom.card.border}`,

          borderRadius: 4,

          position: "relative",

          overflow: "hidden",

          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: 4,
            background: `linear-gradient(to right, ${theme.palette.primary.main}, ${accent})`,
          },
        }}
      >
        <Typography
          variant="caption"
          sx={{
            letterSpacing: 2,
            textTransform: "uppercase",
            fontWeight: 600,
            color: accent,
          }}
        >
          Testimonial
        </Typography>

        <Typography
          variant="h4"
          sx={{
            mt: 1.5,
            mb: 2,
            fontWeight: 700,
            color: theme.palette.text.primary,
          }}
        >
          What Clients Say About Us
        </Typography>

        <Box
          sx={{
            width: 70,
            height: 4,
            borderRadius: 10,
            backgroundColor: theme.palette.primary.main,
            mx: "auto",
            mb: 4,
          }}
        />

        <Box
          sx={{
            width: 70,
            height: 70,
            mx: "auto",
            mb: 3,

            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            borderRadius: "50%",

            backgroundColor: alpha(
              theme.palette.primary.main,
              isLight ? 0.08 : 0.18
            ),

            border: `1px solid ${alpha(
              theme.palette.primary.main,
              0.2
            )}`,
          }}
        >
          <CommentQuoteFilled
            size={34}
            color={theme.palette.primary.main}
          />
        </Box>

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.45 }}
          >
            <Avatar
              src={testimonials[index].image}
              alt={testimonials[index].name}
              sx={{
                width: 90,
                height: 90,
                mx: "auto",
                mb: 3,

                border: `4px solid ${theme.palette.background.paper}`,

                outline: `3px solid ${accent}`,

                boxShadow: `0 10px 30px ${alpha(
                  theme.palette.primary.main,
                  0.18
                )}`,
              }}
            />

            <Typography
              variant="body1"
              sx={{
                maxWidth: 650,
                mx: "auto",

                lineHeight: 1.9,

                fontStyle: "italic",

                color: theme.palette.text.secondary,
              }}
            >
              “ {testimonials[index].quote} ”
            </Typography>

            <Typography
              variant="h6"
              sx={{
                mt: 4,
                fontWeight: 700,
                color: theme.palette.text.primary,
              }}
            >
              {testimonials[index].name}
            </Typography>

            <Typography
              variant="body2"
              sx={{
                mt: 0.5,
                color: accent,
                fontWeight: 500,
              }}
            >
              {testimonials[index].position}
            </Typography>
          </motion.div>
        </AnimatePresence>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 1.2,
            mt: 5,
          }}
        >
          {testimonials.map((_, i) => {
            const active = i === index;

            return (
              <Box
                key={i}
                onClick={() => setIndex(i)}
                sx={{
                  width: active ? 28 : 10,
                  height: 10,

                  borderRadius: 10,

                  backgroundColor: active
                    ? theme.palette.primary.main
                    : alpha(theme.palette.text.secondary, 0.25),

                  transition: "all 0.3s ease",

                  cursor: "pointer",

                  "&:hover": {
                    backgroundColor: active
                      ? theme.palette.primary.dark
                      : alpha(theme.palette.primary.main, 0.45),
                  },
                }}
              />
            );
          })}
        </Box>
      </Paper>
    </Box>
  );
};

export default TestimonialSlider;