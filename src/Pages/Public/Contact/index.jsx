import React from 'react';
import { Box, Container, Grid, Stack, Typography, TextField, Button } from '@mui/material';
import { FONT_FAMILY } from '../../../Config/font';
import { TYPOGRAPHY_SIZE } from '../../../Config/typography';
import { COLOR } from '../../../Config/color';
import { grey } from '@mui/material/colors';

const Contact = () => {
    return (
        <Box
            sx={{
                pt: 18,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'grey.200',
                minHeight: '100vh',
            }}
        >
            <Container maxWidth="lg">
                <Grid
                    container
                    spacing={6}
                    justifyContent="center"
                    alignItems="flex-start"
                >
                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                        <Typography
                            sx={{
                                fontSize: TYPOGRAPHY_SIZE.h4,
                                fontWeight: '500',
                                color: 'black',
                                fontFamily: FONT_FAMILY.secondary,
                                mb: 3,
                            }}
                        >
                            Send Message
                        </Typography>
                        <form>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="Name"
                                        placeholder="Your Name"
                                        variant="outlined"
                                        fullWidth
                                        inputProps={{
                                            sx: {
                                                '&::placeholder': {
                                                    color: '#2C8743',
                                                    fontFamily: FONT_FAMILY.quinary,
                                                    fontSize: TYPOGRAPHY_SIZE.body,
                                                },
                                            },
                                        }}
                                        InputProps={{
                                            sx: {
                                                fontSize: TYPOGRAPHY_SIZE.body,
                                                fontFamily: FONT_FAMILY.quinary,
                                                backgroundColor: '#fff',
                                                borderRadius: '8px',
                                            },
                                        }}
                                        InputLabelProps={{
                                            sx: {
                                                fontSize: TYPOGRAPHY_SIZE.body,
                                                fontFamily: FONT_FAMILY.quinary,
                                            },
                                        }}
                                        sx={{
                                            '& fieldset': { borderColor: 'grey.300' },
                                            '&:hover fieldset': { borderColor: 'grey.500' },
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="Email"
                                        placeholder="Your Email"
                                        variant="outlined"
                                        fullWidth
                                        inputProps={{
                                            sx: {
                                                '&::placeholder': {
                                                    color: '#2C8743',
                                                    fontFamily: FONT_FAMILY.quinary,
                                                    fontSize: TYPOGRAPHY_SIZE.body,
                                                },
                                            },
                                        }}
                                        InputProps={{
                                            sx: {
                                                fontSize: TYPOGRAPHY_SIZE.body,
                                                fontFamily: FONT_FAMILY.quinary,
                                                backgroundColor: '#fff',
                                                borderRadius: '8px',
                                            },
                                        }}
                                        InputLabelProps={{
                                            sx: {
                                                fontSize: TYPOGRAPHY_SIZE.body,
                                                fontFamily: FONT_FAMILY.quinary,
                                            },
                                        }}
                                        sx={{
                                            '& fieldset': { borderColor: 'grey.300' },
                                            '&:hover fieldset': { borderColor: 'grey.500' },
                                        }}
                                    />
                                </Grid>
                            </Grid>
                            <TextField
                                label="Subject"
                                placeholder="Your Subject"
                                variant="outlined"
                                fullWidth
                                inputProps={{
                                    sx: {
                                        '&::placeholder': {
                                            color: '#2C8743',
                                            fontFamily: FONT_FAMILY.quinary,
                                            fontSize: TYPOGRAPHY_SIZE.body,
                                        },
                                    },
                                }}
                                InputProps={{
                                    sx: {
                                        fontSize: TYPOGRAPHY_SIZE.body,
                                        fontFamily: FONT_FAMILY.quinary,
                                        backgroundColor: '#fff',
                                        borderRadius: '8px',
                                    },
                                }}
                                InputLabelProps={{
                                    sx: {
                                        fontSize: TYPOGRAPHY_SIZE.body,
                                        fontFamily: FONT_FAMILY.quinary,
                                    },
                                }}
                                sx={{
                                    mt: 3,
                                    '& fieldset': { borderColor: 'grey.300' },
                                    '&:hover fieldset': { borderColor: 'grey.500' },
                                }}
                            />
                            <TextField
                                label="Message"
                                placeholder="Your Message"
                                variant="outlined"
                                fullWidth
                                multiline
                                rows={4}
                                inputProps={{
                                    sx: {
                                        '&::placeholder': {
                                            color: '#2C8743',
                                            fontFamily: FONT_FAMILY.quinary,
                                            fontSize: TYPOGRAPHY_SIZE.body,
                                        },
                                    },
                                }}
                                InputProps={{
                                    sx: {
                                        fontSize: TYPOGRAPHY_SIZE.body,
                                        fontFamily: FONT_FAMILY.quinary,
                                        backgroundColor: '#fff',
                                        borderRadius: '8px',
                                        minHeight: '200px',
                                    },
                                }}
                                InputLabelProps={{
                                    sx: {
                                        fontSize: TYPOGRAPHY_SIZE.body,
                                        fontFamily: FONT_FAMILY.quinary,
                                    },
                                }}
                                sx={{
                                    mt: 3,
                                    '& fieldset': { borderColor: 'grey.300' },
                                    '&:hover fieldset': { borderColor: 'grey.500' },
                                }}
                            />
                            <Button
                                variant="contained"
                                sx={{
                                    mt: 3,
                                    backgroundColor: '#218DC9',
                                    color: '#fff',
                                    fontFamily: FONT_FAMILY.quinary,
                                    fontSize: TYPOGRAPHY_SIZE.body,
                                    fontWeight: 600,
                                    padding: '8px 24px',
                                    borderRadius: '8px',
                                    textTransform: 'none',
                                    '&:hover': {
                                        backgroundColor: '#1a6f9e',
                                    },
                                }}
                            >
                                Send Message
                            </Button>
                        </form>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6} sx={{ px: 2 }}>
                        <Typography
                            sx={{
                                fontSize: TYPOGRAPHY_SIZE.h4,
                                fontWeight: '500',
                                color: 'black',
                                fontFamily: FONT_FAMILY.secondary,
                                mb: 3,
                            }}
                        >
                            Get In Touch
                        </Typography>
                        <Typography sx={{
                            fontSize: TYPOGRAPHY_SIZE.subtitle2,
                            fontWeight: '300',
                            fontFamily: FONT_FAMILY.primary,
                            color: COLOR.text.primary,


                        }}>
                            Nullam vel enim risus. Integer rhoncus hendrerit sem egestas porttitor.
                        </Typography>
                        <Typography sx={{
                            fontSize: TYPOGRAPHY_SIZE.subtitle2,
                            fontWeight: '300',
                            fontFamily: FONT_FAMILY.tertiary,
                            color: 'black',
                            mt: 2,
                        }}>
                            Office Address :
                        </Typography>
                        <Typography sx={{
                            fontSize: TYPOGRAPHY_SIZE.subtitle2,
                            fontWeight: '300',
                            fontFamily: FONT_FAMILY.primary,
                            color: COLOR.text.primary,
                        }}>
                            Level 13, 2 Elizabeth St, Melbourne, Victoria 3000 Australia
                        </Typography>
                        <Typography sx={{
                            fontSize: TYPOGRAPHY_SIZE.subtitle2,
                            fontWeight: '300',
                            fontFamily: FONT_FAMILY.tertiary,
                            color: 'black',
                            mt: 2,
                        }}>
                            Contact Number :
                        </Typography>
                        <Typography sx={{
                            fontSize: TYPOGRAPHY_SIZE.subtitle2,
                            fontWeight: '300',
                            fontFamily: FONT_FAMILY.primary,
                            color: COLOR.text.primary,
                        }}>
                            (1) 000 991 8830, (800) 8001-8588
                        </Typography>
                        <Typography sx={{
                            fontSize: TYPOGRAPHY_SIZE.subtitle2,
                            fontWeight: '300',
                            fontFamily: FONT_FAMILY.tertiary,
                            color: 'black',
                            mt: 2,
                        }}>
                            Email Address :
                        </Typography>
                        <Typography sx={{
                            fontSize: TYPOGRAPHY_SIZE.subtitle2,
                            fontWeight: '300',
                            fontFamily: FONT_FAMILY.primary,
                            color: COLOR.text.primary,

                        }}>
                            Info@patron.com, support@patron.com
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: TYPOGRAPHY_SIZE.h5,
                                fontWeight: '400',
                                color: 'black',
                                fontFamily: FONT_FAMILY.primary,
                                mt: 2,
                            }}
                        >
                            Career Info
                        </Typography>
                        <Typography sx={{
                            fontSize: TYPOGRAPHY_SIZE.subtitle2,
                            fontWeight: '300',
                            fontFamily: FONT_FAMILY.primary,
                            color: COLOR.text.primary,
                            mt: 1,

                        }}>
                            If you’re interested in employment opportunities at Unicoder, please email us:
                        </Typography>
                        <Typography sx={{
                            fontSize: TYPOGRAPHY_SIZE.subtitle2,
                            fontWeight: '300',
                            fontFamily: FONT_FAMILY.primary,
                            color: '#1a6f9e',
                            mt: 1,

                        }}>
                            support@unicoderbd.com
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Contact;