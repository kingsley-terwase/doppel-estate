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
                Nullam vel enim risus. Integer rhoncus hendrerit sem egestas porttitor.
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
                Level 13, 2 Elizabeth St, Melbourne, Victoria 3000 Australia
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
                (1) 000 991 8830, (800) 8001-8588
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
                Info@patron.com, support@patron.com
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
                If you’re interested in employment opportunities at Unicoder, please email us:
            </Typography>
            <Typography sx={{
                fontSize: TYPOGRAPHY_SIZE.subtitle2,
                fontWeight: '300',
                fontFamily: FONT_FAMILY.primary,
                color: 'black',
                mt: 1,
            }}>
                support@unicoderbd.com
            </Typography>
        </>
    );
};

export default ContactInfo;
