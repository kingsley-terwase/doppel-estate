import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

const CategoryList = ({ categories, boxKeyPrefix }) => {
    const splitCategory = (name) => {
        const match = name.match(/^(.+)\s(\(\d+\))$/);
        if (match) {
            return { text: match[1], number: match[2] };
        }
        return { text: name, number: '' };
    };

    return (
        <Box
            sx={{
                width: '100%',
                height: { xs: 'auto', sm: '450px' }, 
                minHeight: { xs: '350px' }, 
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                backgroundColor: 'white',
                p: { xs: 2, sm: 0 },
            }}
        >
            <Stack
                direction="column"
                spacing={{ xs: 1.5, sm: 2 }}
                sx={{
                    mt: 4,
                    mr: { xs: 2, sm: 15 },
                    ml: { xs: 2, sm: 4 },
                    width: '100%',
                }}
            >
                {categories.map((category, idx) => {
                    const { text, number } = splitCategory(category.name);
                    return (
                        <Box
                            key={`${boxKeyPrefix}-${idx}`}
                            sx={{
                                borderBottom: '1px dashed #666',
                                pb: { xs: 1, sm: 1.5 },
                            }}
                        >
                            <Typography
                                sx={{
                                    color: '#333',
                                    fontSize: { xs: '12px', sm: '14px' },
                                    fontWeight: 300,
                                    letterSpacing: '0.02em',
                                    ...category.style,
                                    display: 'inline',
                                }}
                            >
                                {text}
                            </Typography>
                            {number && (
                                <Typography
                                    sx={{
                                        color: '#c49b63',
                                        fontSize: { xs: '12px', sm: '14px' },
                                        fontWeight: 300,
                                        letterSpacing: '0.02em',
                                        ...category.style,
                                        display: 'inline',
                                    }}
                                >
                                    {number}
                                </Typography>
                            )}
                        </Box>
                    );
                })}
            </Stack>
        </Box>
    );
};

export default CategoryList;