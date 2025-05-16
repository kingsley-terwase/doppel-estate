
import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import SendMessageForm from '../Contact/SendMessageForm';
import ContactInfo from '../Contact/ContactInfo';

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
                    <Grid item xs={12} sm={6}>
                        <SendMessageForm />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <ContactInfo />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Contact;
