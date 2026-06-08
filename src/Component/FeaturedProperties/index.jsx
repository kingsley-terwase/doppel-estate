import { useState, useRef } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { motion, AnimatePresence } from "framer-motion";
import PropertyCard from "../PropertyCard";

const properties = {
  all: [
    { id: 1, image: "/Images/Home_4.png", title: "Family House Residence", price: "$1850", location: "VT 05403", beds: 7, baths: 5, size: 1200, type: "APARTMENT" },
    { id: 2, image: "/Images/Home_4.png", title: "House Residence", price: "$1850", location: "VT 05403", beds: 7, baths: 5, size: 1200, type: "APARTMENT" },
    { id: 3, image: "/Images/Home_4.png", title: "Family House Residence", price: "$1850", location: "VT 05403", beds: 7, baths: 5, size: 1200, type: "APARTMENT" },
    { id: 4, image: "/Images/Home_4.png", title: "Family House Residence", price: "$1850", location: "VT 05403", beds: 7, baths: 5, size: 1200, type: "APARTMENT" },
    { id: 5, image: "/Images/Home_4.png", title: "Family House Residence", price: "$1850", location: "VT 05403", beds: 7, baths: 5, size: 1200, type: "APARTMENT" },
    { id: 6, image: "/Images/Home_4.png", title: "Family House Residence", price: "$1850", location: "VT 05403", beds: 7, baths: 5, size: 1200, type: "APARTMENT" },
    { id: 7, image: "/Images/Home_4.png", title: "Family House Residence", price: "$1850", location: "VT 05403", beds: 7, baths: 5, size: 1200, type: "APARTMENT" },
    { id: 8, image: "/Images/Home_5.png", title: "Gorgeous Villa Bay View", price: "$3450", location: "MO 66210", beds: 7, baths: 5, size: 1200, type: "VILLA" },
    { id: 9, image: "/Images/Home_6.png", title: "New Developed Condos", price: "$1,0450", location: "MO 66210", beds: 7, baths: 5, size: 1200, type: "CONDOS" },
  ],
  house: [
    { id: 1, image: "/Images/Home_4.png", title: "Family House Residence", price: "$1850", location: "VT 05403", beds: 7, baths: 5, size: 1200, type: "APARTMENT" },
  ],
  villa: [
    { id: 8, image: "/Images/Home_5.png", title: "Gorgeous Villa Bay View", price: "$3450", location: "MO 66210", beds: 7, baths: 5, size: 1200, type: "VILLA" },
  ],
  apartment: [
    { id: 9, image: "/Images/Home_6.png", title: "New Developed Condos", price: "$1,0450", location: "MO 66210", beds: 7, baths: 5, size: 1200, type: "CONDOS" },
  ],
};

const CARDS_PER_PAGE = 3;

const FeaturedProperties = () => {
  const theme = useTheme();

  const [activeTab, setActiveTab] = useState("all");
  const [page, setPage] = useState(0);
  const tabScrollRef = useRef(null);

  const items = properties[activeTab];
  const totalPages = Math.ceil(items.length / CARDS_PER_PAGE);

  const visible = items.slice(
    page * CARDS_PER_PAGE,
    page * CARDS_PER_PAGE + CARDS_PER_PAGE
  );

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setPage(0);
  };

  const scrollTabs = (dir) => {
    if (tabScrollRef.current) {
      tabScrollRef.current.scrollBy({
        left: dir === "left" ? -120 : 120,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 1200,
        mx: "auto",
        px: 2,
      }}
    >
      {/* HEADER */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 2,
          mb: 3,
        }}
      >
        <Typography
          sx={{
            fontSize: theme.typography.h5?.fontSize,
            fontWeight: 600,
            color: theme.palette.text.primary,
          }}
        >
          Featured Properties
        </Typography>

        {/* TABS */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <IconButton
            size="small"
            onClick={() => scrollTabs("left")}
          >
            <ArrowBackIosNewIcon fontSize="small" />
          </IconButton>

          <Box
            ref={tabScrollRef}
            sx={{
              display: "flex",
              overflowX: "auto",
              gap: 1,
              maxWidth: { xs: 220, sm: 360 },
              scrollbarWidth: "none",
              "&::-webkit-scrollbar": { display: "none" },
            }}
          >
            {Object.keys(properties).map((tab) => {
              const active = activeTab === tab;

              return (
                <Box
                  key={tab}
                  onClick={() => handleTabChange(tab)}
                  sx={{
                    px: 2.5,
                    py: 0.8,
                    borderRadius: 10,
                    cursor: "pointer",
                    whiteSpace: "nowrap",

                    fontSize: 14,

                    border: `1px solid ${
                      active
                        ? theme.palette.primary.main
                        : theme.palette.custom.border.subtle
                    }`,

                    backgroundColor: active
                      ? theme.palette.primary.main
                      : "transparent",

                    color: active
                      ? theme.palette.primary.contrastText
                      : theme.palette.text.secondary,

                    transition: "0.2s ease",
                  }}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </Box>
              );
            })}
          </Box>

          <IconButton
            size="small"
            onClick={() => scrollTabs("right")}
          >
            <ArrowForwardIosIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>

      {/* CARDS */}
      <Box sx={{ position: "relative" }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: 3,
            minHeight: 360,
          }}
        >
          <AnimatePresence mode="sync">
            {visible.map((property) => (
              <motion.div
                key={`${activeTab}-${property.id}-${page}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.35 } }}
                exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
              >
                <PropertyCard {...property} />
              </motion.div>
            ))}
          </AnimatePresence>
        </Box>

        {/* PAGINATION */}
        {totalPages > 1 && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
              mt: 3,
            }}
          >
            <IconButton
              onClick={() => setPage((p) => Math.max(p - 1, 0))}
              disabled={page === 0}
            >
              <ArrowBackIosNewIcon fontSize="small" />
            </IconButton>

            <Box sx={{ display: "flex", gap: 1 }}>
              {Array.from({ length: totalPages }).map((_, i) => (
                <Box
                  key={i}
                  onClick={() => setPage(i)}
                  sx={{
                    width: i === page ? 20 : 8,
                    height: 8,
                    borderRadius: 4,
                    cursor: "pointer",
                    transition: "0.3s ease",

                    backgroundColor:
                      i === page
                        ? theme.palette.primary.main
                        : theme.palette.custom.border.subtle,
                  }}
                />
              ))}
            </Box>

            <IconButton
              onClick={() =>
                setPage((p) => Math.min(p + 1, totalPages - 1))
              }
              disabled={page === totalPages - 1}
            >
              <ArrowForwardIosIcon fontSize="small" />
            </IconButton>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default FeaturedProperties;