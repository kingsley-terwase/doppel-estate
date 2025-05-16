import React from 'react';
import {
    Grid,
    Box,
    Typography,
    TextField,
    Button,
    Checkbox,
    FormControlLabel,
    Link,
} from '@mui/material';
import { FONT_FAMILY } from '../../../Config/font';
import { COLOR } from '../../../Config/color';
import { TYPOGRAPHY_SIZE } from '../../../Config/typography';

const RightGrid = () => {
    return (
        <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={6}
            xl={6}
            sx={{
                height: '100vh',
                backgroundColor: 'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Box
                sx={{
                    width: '80%',
                    maxWidth: '500px',
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    boxShadow: 'none',
                    p: 4,
                }}
            >
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2, mb: 3 }}>
                    <img src="./Logo/Logo.png" style={{ width: '50px', height: '50px' }} />
                </Box>

                <Typography
                    variant="h4"
                    sx={{
                        fontFamily: FONT_FAMILY.secondary,
                        color: 'black',
                        mb: 3,
                        fontWeight: 400,
                        fontSize: TYPOGRAPHY_SIZE.h5,
                        textAlign: 'center',
                    }}
                >
                    Sign Up
                </Typography>

                <Box component="form">
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField placeholder="First Name" variant="outlined" fullWidth sx={textFieldStyle} />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField placeholder="Last Name" variant="outlined" fullWidth sx={textFieldStyle} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField placeholder="Email" variant="outlined" fullWidth sx={textFieldStyle} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField placeholder="Password" type="password" variant="outlined" fullWidth sx={textFieldStyle} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField placeholder="Re-password" type="password" variant="outlined" fullWidth sx={textFieldStyle} />
                        </Grid>
                    </Grid>

                    <FormControlLabel
                        control={<Checkbox sx={{ color: '#BDBDBD', '&.Mui-checked': { color: '#9E9E9E' } }} />}
                        label="Remember next time"
                        sx={{
                            mb: 2,
                            '& .MuiTypography-root': {
                                fontFamily: FONT_FAMILY.quaternary,
                                color: '#212121',
                            },
                        }}
                    />

                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: COLOR.primary,
                            color: 'white',
                            fontFamily: FONT_FAMILY.primary,
                            fontWeight: 600,
                            borderRadius: '40px',
                            py: '8px',
                            px: '2rem',
                            textTransform: 'capitalize',
                            mb: 2,
                            width: '100%',
                        }}
                    >
                        Sign Up
                    </Button>

                    <Typography
                        variant="body2"
                        sx={{
                            fontFamily: FONT_FAMILY.quaternary,
                            color: 'black',
                            mb: 1,
                            textAlign: 'left',
                        }}
                    >
                        Forgot Password or Username
                    </Typography>

                    <Typography
                        variant="body2"
                        sx={{
                            fontFamily: FONT_FAMILY.quaternary,
                            color: 'black',
                            textAlign: 'left',
                        }}
                    >
                        Don’t have account?{' '}
                        <Link
                            href="/signup"
                            sx={{
                                fontFamily: FONT_FAMILY.quaternary,
                                color: COLOR.primary,
                                textDecoration: 'none',
                                '&:hover': {
                                    textDecoration: 'underline',
                                    cursor: 'pointer',
                                },
                            }}
                        >
                            Click here
                        </Link>
                    </Typography>
                </Box>
            </Box>
        </Grid>
    );
};

const textFieldStyle = {
    mb: 2,
    '& .MuiOutlinedInput-root': {
        borderRadius: '8px',
        backgroundColor: '#E0E0E0',
        border: '1px solid #BDBDBD',
        height: '40px',
        padding: '0 12px',
        '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
        '& input::placeholder': {
            color: '#616161',
            opacity: 1,
        },
    },
};

export default RightGrid;
