import React, { useState } from 'react';
import { Box, Container, Grid, Stack } from '@mui/material';
import { PropertyCard } from '../../../Component';
import { property } from '../Home/data';
import CategoryList from '../Properties/CategoryList';
import FilterProperty from '../Properties/FilterProperty';

const Properties = () => {
    const categories = [
        { name: 'House (570)', style: { cursor: 'pointer' } },
        { name: 'Office (392)', style: { cursor: 'pointer' } },
        { name: 'Apartment (613)', style: { cursor: 'pointer' } },
        { name: 'Condos (81)', style: { cursor: 'pointer' } },
        { name: 'Villa (52)', style: { cursor: 'pointer' } },
        { name: 'Small Family (460)', style: { cursor: 'pointer' } },
        { name: 'Single Room (878)', style: { cursor: 'pointer' } },
    ];

    const [searchQuery, setSearchQuery] = useState('');
    const [type, setType] = useState('');
    const [status, setStatus] = useState('');
    const [bedroom, setBedroom] = useState('');
    const [bathroom, setBathroom] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [minArea, setMinArea] = useState('');
    const [maxArea, setMaxArea] = useState('');
    const [typeOpen, setTypeOpen] = useState(false);
    const [statusOpen, setStatusOpen] = useState(false);
    const [bedroomOpen, setBedroomOpen] = useState(false);
    const [bathroomOpen, setBathroomOpen] = useState(false);

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
                    spacing={2}
                    justifyContent="center"
                    alignItems="flex-start"
                >
                    <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                        <CategoryList categories={categories} boxKeyPrefix="box1" />
                        <FilterProperty
                            searchQuery={searchQuery}
                            setSearchQuery={setSearchQuery}
                            type={type}
                            setType={setType}
                            typeOpen={typeOpen}
                            setTypeOpen={setTypeOpen}
                            status={status}
                            setStatus={setStatus}
                            statusOpen={statusOpen}
                            setStatusOpen={setStatusOpen}
                            bedroom={bedroom}
                            setBedroom={setBedroom}
                            bedroomOpen={bedroomOpen}
                            setBedroomOpen={setBedroomOpen}
                            bathroom={bathroom}
                            setBathroom={setBathroom}
                            bathroomOpen={bathroomOpen}
                            setBathroomOpen={setBathroomOpen}
                            minPrice={minPrice}
                            setMinPrice={setMinPrice}
                            maxPrice={maxPrice}
                            setMaxPrice={setMaxPrice}
                            minArea={minArea}
                            setMinArea={setMinArea}
                            maxArea={maxArea}
                            setMaxArea={setMaxArea}
                        />
                        {/* Third Box */}
                        <Box
                            sx={{
                                mt: { xs: 2, sm: '20px' },
                                backgroundColor: 'white',
                                p: { xs: 2, sm: 2 },
                                width: '100%',
                            }}
                        >
                            <PropertyCard {...property[0]} />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={8} lg={8} xl={8} sx={{ px: 2 }}>
                        <Box sx={{ mb: 3 }}>
                            <Stack
                                spacing={3}
                                direction={{ xs: 'column', md: 'row' }}
                                sx={{ justifyContent: 'center' }}
                            >
                                {property.slice(0, 2).map((item, idx) => (
                                    <PropertyCard key={`first-${idx}`} {...item} />
                                ))}
                            </Stack>
                            <Stack
                                spacing={3}
                                direction={{ xs: 'column', md: 'row' }}
                                sx={{ justifyContent: 'center', mt: 3 }}
                            >
                                {property.slice(0, 2).map((item, idx) => (
                                    <PropertyCard key={`second-${idx}`} {...item} />
                                ))}
                            </Stack>
                            <Stack
                                spacing={3}
                                direction={{ xs: 'column', md: 'row' }}
                                sx={{ justifyContent: 'center', mt: 3 }}
                            >
                                {property.slice(0, 2).map((item, idx) => (
                                    <PropertyCard key={`third-${idx}`} {...item} />
                                ))}
                            </Stack>
                            <Stack
                                spacing={3}
                                direction={{ xs: 'column', md: 'row' }}
                                sx={{ justifyContent: 'center', mt: 3 }}
                            >
                                {property.slice(0, 2).map((item, idx) => (
                                    <PropertyCard key={`fourth-${idx}`} {...item} />
                                ))}
                            </Stack>
                            <Stack
                                spacing={3}
                                direction={{ xs: 'column', md: 'row' }}
                                sx={{ justifyContent: 'center', mt: 3 }}
                            >
                                {property.slice(0, 2).map((item, idx) => (
                                    <PropertyCard key={`fifth-${idx}`} {...item} />
                                ))}
                            </Stack>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Properties;