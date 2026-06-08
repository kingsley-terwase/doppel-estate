import React from 'react';
import { Typography } from '@mui/material';
import { FONT_FAMILY } from '../../../../Config/font';
import { TYPOGRAPHY_SIZE } from '../../../../Config/typography';

const ContactInfo = () => {
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
                Get In Touch
            </Typography>
            <Typography sx={{
                fontSize: TYPOGRAPHY_SIZE.subtitle2,
                fontWeight: '300',
                fontFamily: FONT_FAMILY.primary,
                color: 'black',
            }}>
                ...we are eager to hear from you
            </Typography>
            <Typography sx={{
                fontSize: TYPOGRAPHY_SIZE.subtitle2,
                fontWeight: '600',
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
                color: 'black',
            }}>
                19, Toyota house Gaduwa, Box 971 Gboko, FCT Abuja, Nigeria
            </Typography>
            <Typography sx={{
                fontSize: TYPOGRAPHY_SIZE.subtitle2,
                fontWeight: '600',
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
                color: 'black',
            }}>
                +234 7063217676
            </Typography>
            <Typography sx={{
                fontSize: TYPOGRAPHY_SIZE.subtitle2,
                fontWeight: '600',
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
                color: 'black',
            }}>
                doppelhomes@gmail.com
            </Typography>
            <Typography
                sx={{
                    fontSize: TYPOGRAPHY_SIZE.h5,
                    fontWeight: '600',
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
                color: 'black',
                mt: 1,
            }}>
                If you’re interested joining or want coaching session us, please email us:
            </Typography>
            <Typography sx={{
                fontSize: TYPOGRAPHY_SIZE.subtitle2,
                fontWeight: '300',
                fontFamily: FONT_FAMILY.primary,
                color: 'black',
                mt: 1,
            }}>
                support@dopplehome.com
            </Typography>
        </>
    );
};

export default ContactInfo;
