import React, { useState, useEffect } from "react";

import {
    Box,
    Container,
    Typography,
    Grid,
    Paper,
    Card,
    CardContent,
    CardMedia,
    Divider,
    useMediaQuery,
} from "@mui/material";

import {
    alpha,
    useTheme,
} from "@mui/material/styles";

import { PageFirstBg } from "../../../Component";

import { FONT_FAMILY } from "../../../Config/font";

// ─────────────────────────────────────────────────────────────
// TEAM DATA
// ─────────────────────────────────────────────────────────────
const team = [
    {
        name: "Terwase Johnson",
        role: "CEO & Founder",
        image: "/Images/Person_1.png",
        bio: "With over 15 years in real estate, Sarah founded Premium Properties to revolutionize how people find their dream homes.",
    },

    {
        name: "Michael Chen",
        role: "Lead Real Estate Agent",
        image: "/Images/Person_2.png",
        bio: "Michael specializes in luxury properties and has closed deals worth over $50 million in the past five years.",
    },

    {
        name: "Priya Patel",
        role: "Property Manager",
        image: "/Images/Person_3.png",
        bio: "Priya ensures all properties are impeccably maintained and manages the rental portfolio with precision.",
    },

    {
        name: "David Wilson",
        role: "Marketing Director",
        image: "/Images/Person_4.png",
        bio: "David crafts compelling campaigns using modern digital strategies to showcase our listings.",
    },
];

// ─────────────────────────────────────────────────────────────
// VALUES DATA
// ─────────────────────────────────────────────────────────────
const values = [
    {
        title: "Integrity",
        description:
            "We uphold honesty and transparency in every interaction.",
        src: "/Illus/illus_1.png",
    },

    {
        title: "Excellence",
        description:
            "We pursue excellence in all aspects of our service and listings.",
        src: "/Illus/illus_3.png",
    },

    {
        title: "Client-Focused",
        description:
            "Your needs and dreams are our top priority.",
        src: "/Illus/illus_2.png",
    },

    {
        title: "Community",
        description:
            "We actively contribute to the communities we serve.",
        src: "/Illus/illus_4.png",
    },
];

// ─────────────────────────────────────────────────────────────
// TIMELINE DATA
// ─────────────────────────────────────────────────────────────
const milestones = [
    {
        year: "2010",
        achievement:
            "Founded with just 3 agents in a shared office",
    },

    {
        year: "2013",
        achievement:
            "Expanded to 15 agents and opened our HQ",
    },

    {
        year: "2016",
        achievement:
            "Surpassed $100M in annual sales",
    },

    {
        year: "2019",
        achievement:
            "Launched second branch in South City",
    },

    {
        year: "2022",
        achievement:
            "Ranked Top 10 Real Estate Agency in the region",
    },

    {
        year: "2024",
        achievement:
            "Grew to a team of 50+ professionals across the metro",
    },
];

// ─────────────────────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────────────────────
export default function AboutUsPage() {
    const theme = useTheme();

    const isLight =
        theme.palette.mode === "light";

    const isMobile =
        useMediaQuery(theme.breakpoints.down("sm"));

    const [scrollOffset, setScrollOffset] =
        useState(0);

    useEffect(() => {
        const handleScroll = () =>
            setScrollOffset(window.pageYOffset);

        window.addEventListener(
            "scroll",
            handleScroll
        );

        return () =>
            window.removeEventListener(
                "scroll",
                handleScroll
            );
    }, []);

    return (
        <Box
            sx={{
                backgroundColor:
                    theme.palette.background.default,

                color:
                    theme.palette.text.primary,

                overflow: "hidden",
            }}
        >
            {/* HERO */}
            <PageFirstBg
                label="Home / About Us"
                subLabel="About Us"
            />

            {/* STORY SECTION */}
            <Container
                sx={{
                    py: {
                        xs: 6,
                        md: 10,
                    },
                }}
            >
                <Grid
                    container
                    spacing={5}
                    alignItems="center"
                >
                    <Grid
                        item
                        xs={12}
                        md={5}
                    >
                        <Typography
                            variant="h4"
                            sx={{
                                fontFamily:
                                    FONT_FAMILY.sept,

                                fontWeight: 800,

                                mb: 3,

                                color:
                                    theme.palette
                                        .text.primary,
                            }}
                        >
                            Our Story
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                fontFamily:
                                    FONT_FAMILY.sept,

                                fontWeight: 500,

                                lineHeight: 1.9,

                                color:
                                    theme.palette
                                        .text.secondary,

                                mb: 2,
                            }}
                        >
                            Founded in 2010,
                            Premium Properties was
                            built on the belief
                            that buying a house
                            should be about
                            finding a place to
                            call home.
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                fontFamily:
                                    FONT_FAMILY.sept,

                                fontWeight: 500,

                                lineHeight: 1.9,

                                color:
                                    theme.palette
                                        .text.secondary,

                                mb: 2,
                            }}
                        >
                            From humble
                            beginnings, we've
                            grown into one of
                            the region's most
                            respected agencies,
                            delivering tailored
                            and transparent
                            services for over a
                            decade.
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                fontFamily:
                                    FONT_FAMILY.sept,

                                fontWeight: 500,

                                lineHeight: 1.9,

                                color:
                                    theme.palette
                                        .text.secondary,
                            }}
                        >
                            Our team combines
                            local expertise with
                            a deep commitment to
                            client success —
                            because your story is
                            part of ours.
                        </Typography>
                    </Grid>

                    {/* IMAGE */}
                    <Grid
                        item
                        xs={12}
                        md={7}
                    >
                        <Paper
                            elevation={0}
                            sx={{
                                minHeight: {
                                    xs: 300,
                                    md: 480,
                                },

                                borderRadius: 5,

                                overflow: "hidden",

                                border: `1px solid ${theme.palette.custom.card.border}`,

                                backgroundImage:
                                    "url(/Images/Home_14.png)",

                                backgroundSize:
                                    "cover",

                                backgroundPosition:
                                    "center",

                                transform: `translateY(${scrollOffset * 0.03}px)`,

                                transition:
                                    "transform 0.2s linear",

                                boxShadow:
                                    isLight
                                        ? `0 10px 30px ${alpha(
                                              "#000",
                                              0.08
                                          )}`
                                        : `0 12px 35px ${alpha(
                                              "#000",
                                              0.35
                                          )}`,
                            }}
                        />
                    </Grid>
                </Grid>
            </Container>

            {/* VALUES */}
            <Box
                sx={{
                    py: {
                        xs: 6,
                        md: 10,
                    },

                    backgroundColor:
                        theme.palette.custom.card
                            .body,
                }}
            >
                <Container>
                    <Typography
                        variant="h4"
                        textAlign="center"
                        sx={{
                            fontFamily:
                                FONT_FAMILY.sept,

                            fontWeight: 800,

                            mb: 2,
                        }}
                    >
                        Our Core Values
                    </Typography>

                    <Typography
                        variant="body1"
                        align="center"
                        sx={{
                            maxWidth: 760,

                            mx: "auto",

                            mb: 7,

                            lineHeight: 1.9,

                            fontWeight: 500,

                            fontFamily:
                                FONT_FAMILY.sept,

                            color:
                                theme.palette
                                    .text.secondary,
                        }}
                    >
                        Our values are the
                        foundation of how we
                        operate — with
                        integrity, dedication,
                        and a client-first
                        mindset.
                    </Typography>

                    <Grid
                        container
                        spacing={4}
                    >
                        {values.map(
                            (value, idx) => (
                                <Grid
                                    item
                                    xs={12}
                                    sm={6}
                                    md={3}
                                    key={idx}
                                >
                                    <Card
                                        elevation={
                                            0
                                        }
                                        sx={{
                                            height:
                                                "100%",

                                            borderRadius: 4,

                                            backgroundColor:
                                                theme
                                                    .palette
                                                    .background
                                                    .paper,

                                            border: `1px solid ${theme.palette.custom.card.border}`,

                                            transition:
                                                "all 0.3s ease",

                                            "&:hover":
                                                {
                                                    transform:
                                                        "translateY(-6px)",

                                                    boxShadow:
                                                        theme
                                                            .shadows[8],
                                                },
                                        }}
                                    >
                                        <CardContent
                                            sx={{
                                                textAlign:
                                                    "center",

                                                p: 4,
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    mb: 2,
                                                }}
                                            >
                                                <img
                                                    src={
                                                        value.src
                                                    }
                                                    alt={
                                                        value.title
                                                    }
                                                    style={{
                                                        width: "120px",

                                                        objectFit:
                                                            "contain",
                                                    }}
                                                />
                                            </Box>

                                            <Typography
                                                variant="h6"
                                                sx={{
                                                    fontFamily:
                                                        FONT_FAMILY.tertiary,

                                                    fontWeight: 700,

                                                    mb: 1.5,
                                                }}
                                            >
                                                {
                                                    value.title
                                                }
                                            </Typography>

                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    fontFamily:
                                                        FONT_FAMILY.sept,

                                                    fontWeight: 500,

                                                    lineHeight: 1.8,

                                                    color: theme
                                                        .palette
                                                        .text
                                                        .secondary,
                                                }}
                                            >
                                                {
                                                    value.description
                                                }
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            )
                        )}
                    </Grid>
                </Container>
            </Box>

            {/* TEAM */}
            <Container
                sx={{
                    py: {
                        xs: 6,
                        md: 10,
                    },
                }}
            >
                <Typography
                    variant="h4"
                    textAlign="center"
                    sx={{
                        fontFamily:
                            FONT_FAMILY.sept,

                        fontWeight: 800,

                        mb: 2,
                    }}
                >
                    Meet Our Team
                </Typography>

                <Typography
                    variant="body1"
                    align="center"
                    sx={{
                        maxWidth: 760,

                        mx: "auto",

                        mb: 7,

                        lineHeight: 1.9,

                        fontWeight: 500,

                        fontFamily:
                            FONT_FAMILY.sept,

                        color:
                            theme.palette.text
                                .secondary,
                    }}
                >
                    Behind every successful
                    deal is a passionate
                    expert. Our diverse and
                    talented team is dedicated
                    to delivering results you
                    can trust.
                </Typography>

                <Grid
                    container
                    spacing={4}
                >
                    {team.map(
                        (member, idx) => (
                            <Grid
                                item
                                xs={12}
                                sm={6}
                                md={3}
                                key={idx}
                            >
                                <Card
                                    sx={{
                                        height:
                                            "100%",

                                        borderRadius: 5,

                                        overflow:
                                            "hidden",

                                        backgroundColor:
                                            theme
                                                .palette
                                                .background
                                                .paper,

                                        border: `1px solid ${theme.palette.custom.card.border}`,

                                        transition:
                                            "all 0.3s ease",

                                        "&:hover":
                                            {
                                                transform:
                                                    "translateY(-8px)",

                                                boxShadow:
                                                    theme
                                                        .shadows[10],
                                            },
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        height="260"
                                        image={
                                            member.image
                                        }
                                        alt={
                                            member.name
                                        }
                                    />

                                    <CardContent
                                        sx={{
                                            p: 3,
                                        }}
                                    >
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                fontFamily:
                                                    FONT_FAMILY.tertiary,

                                                fontWeight: 700,
                                            }}
                                        >
                                            {
                                                member.name
                                            }
                                        </Typography>

                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: theme
                                                    .palette
                                                    .primary
                                                    .main,

                                                fontWeight: 600,

                                                mt: 0.5,
                                            }}
                                        >
                                            {
                                                member.role
                                            }
                                        </Typography>

                                        <Divider
                                            sx={{
                                                my: 2,
                                            }}
                                        />

                                        <Typography
                                            variant="body2"
                                            sx={{
                                                fontFamily:
                                                    FONT_FAMILY.sept,

                                                lineHeight: 1.8,

                                                color: theme
                                                    .palette
                                                    .text
                                                    .secondary,
                                            }}
                                        >
                                            {
                                                member.bio
                                            }
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        )
                    )}
                </Grid>
            </Container>

            {/* JOURNEY */}
            <Box
                sx={{
                    py: {
                        xs: 6,
                        md: 10,
                    },

                    backgroundColor:
                        theme.palette.background
                            .paper,
                }}
            >
                <Container>
                    <Typography
                        variant="h4"
                        textAlign="center"
                        sx={{
                            fontFamily:
                                FONT_FAMILY.sept,

                            fontWeight: 800,

                            mb: 2,
                        }}
                    >
                        Our Journey
                    </Typography>

                    <Typography
                        variant="body1"
                        align="center"
                        sx={{
                            maxWidth: 760,

                            mx: "auto",

                            mb: 7,

                            lineHeight: 1.9,

                            fontWeight: 500,

                            fontFamily:
                                FONT_FAMILY.sept,

                            color:
                                theme.palette
                                    .text.secondary,
                        }}
                    >
                        Every milestone
                        reflects our continued
                        growth and the trust
                        our clients place in
                        us.
                    </Typography>

                    <Grid
                        container
                        spacing={3}
                    >
                        {milestones.map(
                            (item, idx) => (
                                <Grid
                                    item
                                    xs={12}
                                    md={4}
                                    key={idx}
                                >
                                    <Paper
                                        elevation={
                                            0
                                        }
                                        sx={{
                                            p: 3,

                                            height:
                                                "100%",

                                            display:
                                                "flex",

                                            alignItems:
                                                "center",

                                            gap: 2.5,

                                            borderRadius: 4,

                                            backgroundColor:
                                                theme
                                                    .palette
                                                    .background
                                                    .default,

                                            border: `1px solid ${theme.palette.custom.card.border}`,

                                            transition:
                                                "all 0.3s ease",

                                            "&:hover":
                                                {
                                                    transform:
                                                        "translateY(-5px)",

                                                    boxShadow:
                                                        theme
                                                            .shadows[6],
                                                },
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                minWidth: 72,

                                                minHeight: 72,

                                                borderRadius:
                                                    "50%",

                                                display:
                                                    "flex",

                                                alignItems:
                                                    "center",

                                                justifyContent:
                                                    "center",

                                                backgroundColor:
                                                    theme
                                                        .palette
                                                        .primary
                                                        .main,

                                                color:
                                                    theme
                                                        .palette
                                                        .primary
                                                        .contrastText,

                                                fontWeight: 800,

                                                fontSize:
                                                    "1rem",

                                                fontFamily:
                                                    FONT_FAMILY.tertiary,

                                                boxShadow: `0 8px 20px ${alpha(
                                                    theme
                                                        .palette
                                                        .primary
                                                        .main,
                                                    0.3
                                                )}`,
                                            }}
                                        >
                                            {
                                                item.year
                                            }
                                        </Box>

                                        <Typography
                                            variant="body1"
                                            sx={{
                                                fontWeight: 500,

                                                lineHeight: 1.8,

                                                color: theme
                                                    .palette
                                                    .text
                                                    .secondary,
                                            }}
                                        >
                                            {
                                                item.achievement
                                            }
                                        </Typography>
                                    </Paper>
                                </Grid>
                            )
                        )}
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
}