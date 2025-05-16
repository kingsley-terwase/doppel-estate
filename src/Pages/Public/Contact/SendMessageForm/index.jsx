import React from 'react';
import { Grid, Typography, TextField, Button } from '@mui/material';
import { FONT_FAMILY } from '../../../Config/font';
import { TYPOGRAPHY_SIZE } from '../../../Config/typography';

const SendMessageForm = () => {
    return (
        <>
            <Typography
                sx={{
                    fontSize: TYPOGRAPHY_SIZE.h4,
                    fontWeight: '600',
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
                    sx={{
                        mt: 3,
                        '& fieldset': { borderColor: 'grey.300' },
                        '&:hover fieldset': { borderColor: 'grey.500' },
                    }}
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
                />
                <TextField
                    label="Message"
                    placeholder="Your Message"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    sx={{
                        mt: 3,
                        '& fieldset': { borderColor: 'grey.300' },
                        '&:hover fieldset': { borderColor: 'grey.500' },
                    }}
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
        </>
    );
};

export default SendMessageForm;
