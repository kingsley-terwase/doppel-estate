import { Box, Typography } from '@mui/material';
import { TYPOGRAPHY_SIZE } from '../../Config/typography';
import { FONT_FAMILY } from '../../Config/font';

const CardActivity = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                width: '100%',
                px: { xs: 2, sm: 3, md: 4 },
                py: { xs: 2, sm: 2, md: 3 },
                boxSizing: 'border-box',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    backgroundColor: 'whitesmoke',
                    width: '100%',
                    height: { xs: 'auto', md: '250px' },
                    flexDirection: 'column',
                    overflowY: 'auto',
                    borderRadius: '8px',
                }}
            >
                <Typography
                    sx={{
                        color: 'black',
                        fontSize: { xs: '16px', sm: TYPOGRAPHY_SIZE.body1 },
                        fontWeight: 600,
                        fontFamily: FONT_FAMILY.tertiary,
                        mt: '20px',
                        ml: '20px',
                    }}
                >
                    Recent Activity
                </Typography>

                {[
                    {
                        date: 'Dec 27th, 10:12am',
                        message: 'Get new message from custome on city tradecenter.',
                    },
                    {
                        date: 'Dec 21th, 09:12pm',
                        message: 'New property approve for Rent by homex.',
                    },
                    {
                        date: 'Dec 18th, 12:12pm',
                        message: 'Booking request for Nirala Appartment',
                    },
                    {
                        date: 'Dec 15th, 05:45pm',
                        message: 'Payment receive from customer invoice no 2319891',
                    },
                    {
                        date: 'Dec 15th, 03:32pm',
                        message: 'Comments replay by admin in Apolo Family Appartment',
                    },
                    {
                        date: 'Dec 15th, 03:32pm',
                        message: 'Comments replay by admin in Apolo Family Appartment',
                    },
                ].map((activity, index) => (
                    <Typography
                        key={index}
                        sx={{
                            color: 'black',
                            fontSize: { xs: '12px', sm: TYPOGRAPHY_SIZE.caption },
                            fontWeight: 600,
                            fontFamily: FONT_FAMILY.tertiary,
                            mt: '10px',
                            ml: '20px',
                        }}
                    >
                        {activity.date} -{' '}
                        <span
                            style={{
                                color: 'grey',
                                fontSize: TYPOGRAPHY_SIZE.caption,
                                fontFamily: FONT_FAMILY.tertiary,
                            }}
                        >
                            {activity.message}
                        </span>
                    </Typography>
                ))}
            </Box>
        </Box>
    );
};

export default CardActivity;
