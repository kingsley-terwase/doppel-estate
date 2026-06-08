import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { FONT_FAMILY } from '../../../../Config/font';
import { useTheme } from '@mui/material/styles';

const OtpImageSection = () => {
    const theme = useTheme();
    return (
        <Grid item xs={12} sm={6} md={7} lg={7} xl={7} sx={{ height: '100%' }}>
            <Box
                sx={{
                    backgroundColor: theme.palette.background.default,
                    borderRadius: '8px',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: theme.palette.primary.dark,
                    textAlign: 'center',
                }}
            >
                <Typography
                    variant="h6"
                    sx={{
                        fontFamily: FONT_FAMILY.primary,
                        fontWeight: 500,
                    }}
                >


                    <img
                        src="./Images/Home_5.png"
                        alt="Login Image"
                        style={{ width: '100%', height: '100vh' }}
                    />
                </Typography>
            </Box>
        </Grid>
    );
};

export default OtpImageSection;
