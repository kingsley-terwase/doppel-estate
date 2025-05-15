import React from 'react';
import { Box, Stack, Typography, TextField, Select, MenuItem, InputAdornment, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { FONT_FAMILY } from '../../../../Config/font';
import { COLOR } from '../../../../Config/color';

const FilterProperty = ({
    searchQuery, setSearchQuery,
    type, setType, typeOpen, setTypeOpen,
    status, setStatus, statusOpen, setStatusOpen,
    bedroom, setBedroom, bedroomOpen, setBedroomOpen,
    bathroom, setBathroom, bathroomOpen, setBathroomOpen,
    minPrice, setMinPrice, maxPrice, setMaxPrice,
    minArea, setMinArea, maxArea, setMaxArea
}) => {
    return (
        <Box
            sx={{
                width: '100%',
                height: { xs: 'auto', sm: '640px' },
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
                p: { xs: 2, sm: 0 },
                mt: { xs: 2, sm: '20px' },
            }}
        >
            <Stack
                direction="column"
                spacing={{ xs: 1.5, sm: 2 }}
                sx={{
                    mt: { xs: 2, sm: 4 },
                    mr: { xs: 2, sm: 15 },
                    ml: { xs: 2, sm: 4 },
                    width: '100%',
                    maxWidth: '300px',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Typography
                    sx={{
                        fontSize: { xs: '14px', sm: '16px' },
                        fontWeight: 600,
                        color: '#333',
                        mt: 7,
                        mb: 1,
                        textAlign: 'center',
                    }}
                >
                    FILTER PROPERTY
                </Typography>
                <Box
                    sx={{
                        border: '2px solid #ccc',
                        height: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        px: 1,
                        width: '100%',
                    }}
                >
                    <TextField
                        variant="standard"
                        placeholder="Enter Keywords..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        InputProps={{
                            disableUnderline: true,
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon sx={{ color: '#666', fontSize: '20px' }} />
                                </InputAdornment>
                            ),
                        }}
                        sx={{
                            flex: 1,
                            '& .MuiInputBase-input': {
                                fontSize: { xs: '12px', sm: '14px' },
                                color: '#333',
                                textAlign: 'center',
                            },
                        }}
                    />
                </Box>
                <Box
                    sx={{
                        border: '2px solid #ccc',
                        height: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        px: 1,
                        cursor: 'pointer',
                        position: 'relative',
                        width: '100%',
                    }}
                    onClick={() => setTypeOpen(!typeOpen)}
                >
                    <Typography
                        sx={{
                            fontSize: { xs: '12px', sm: '14px' },
                            color: '#333',
                            flex: 1,
                            textAlign: 'center',
                        }}
                    >
                        {type || 'Types'}
                    </Typography>
                    <ArrowDropDownIcon sx={{ color: '#666', fontSize: '20px' }} />
                    <Select
                        open={typeOpen}
                        onClose={() => setTypeOpen(false)}
                        onOpen={() => setTypeOpen(true)}
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        displayEmpty
                        variant="standard"
                        disableUnderline
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            opacity: 0,
                        }}
                    >
                        <MenuItem value="" disabled>
                            Select Type
                        </MenuItem>
                        {['House', 'Office', 'Apartment', 'Condos', 'Villa'].map((option) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </Select>
                </Box>
                <Box
                    sx={{
                        border: '2px solid #ccc',
                        height: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        px: 1,
                        cursor: 'pointer',
                        position: 'relative',
                        width: '100%',
                    }}
                    onClick={() => setStatusOpen(!statusOpen)}
                >
                    <Typography
                        sx={{
                            fontSize: { xs: '12px', sm: '14px' },
                            color: '#333',
                            flex: 1,
                            textAlign: 'center',
                        }}
                    >
                        {status || 'Status'}
                    </Typography>
                    <ArrowDropDownIcon sx={{ color: '#666', fontSize: '20px' }} />
                    <Select
                        open={statusOpen}
                        onClose={() => setStatusOpen(false)}
                        onOpen={() => setStatusOpen(true)}
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        displayEmpty
                        variant="standard"
                        disableUnderline
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            opacity: 0,
                        }}
                    >
                        <MenuItem value="" disabled>
                            Select Status
                        </MenuItem>
                        {['For Sale', 'For Rent'].map((option) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </Select>
                </Box>
                <Box
                    sx={{
                        border: '2px solid #ccc',
                        height: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        px: 1,
                        cursor: 'pointer',
                        position: 'relative',
                        width: '100%',
                    }}
                    onClick={() => setBedroomOpen(!bedroomOpen)}
                >
                    <Typography
                        sx={{
                            fontSize: { xs: '12px', sm: '14px' },
                            color: '#333',
                            flex: 1,
                            textAlign: 'center',
                        }}
                    >
                        {bedroom || 'Bedroom'}
                    </Typography>
                    <ArrowDropDownIcon sx={{ color: '#666', fontSize: '20px' }} />
                    <Select
                        open={bedroomOpen}
                        onClose={() => setBedroomOpen(false)}
                        onOpen={() => setBedroomOpen(true)}
                        value={bedroom}
                        onChange={(e) => setBedroom(e.target.value)}
                        displayEmpty
                        variant="standard"
                        disableUnderline
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            opacity: 0,
                        }}
                    >
                        <MenuItem value="" disabled>
                            Select Bedroom
                        </MenuItem>
                        {[1, 2, 3, 4, 5].map((option) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </Select>
                </Box>
                <Box
                    sx={{
                        border: '2px solid #ccc',
                        height: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        px: 1,
                        cursor: 'pointer',
                        position: 'relative',
                        width: '100%',
                    }}
                    onClick={() => setBathroomOpen(!bathroomOpen)}
                >
                    <Typography
                        sx={{
                            fontSize: { xs: '12px', sm: '14px' },
                            color: '#333',
                            flex: 1,
                            textAlign: 'center',
                        }}
                    >
                        {bathroom || 'Bathroom'}
                    </Typography>
                    <ArrowDropDownIcon sx={{ color: '#666', fontSize: '20px' }} />
                    <Select
                        open={bathroomOpen}
                        onClose={() => setBathroomOpen(false)}
                        onOpen={() => setBathroomOpen(true)}
                        value={bathroom}
                        onChange={(e) => setBathroom(e.target.value)}
                        displayEmpty
                        variant="standard"
                        disableUnderline
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            opacity: 0,
                        }}
                    >
                        <MenuItem value="" disabled>
                            Select Bathroom
                        </MenuItem>
                        {[1, 2, 3, 4, 5].map((option) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </Select>
                </Box>
                <Box
                    sx={{
                        border: '2px solid #ccc',
                        height: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        px: 1,
                        width: '100%',
                    }}
                >
                    <TextField
                        variant="standard"
                        placeholder="Min. Price"
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                        InputProps={{
                            disableUnderline: true,
                        }}
                        sx={{
                            flex: 1,
                            '& .MuiInputBase-input': {
                                fontSize: { xs: '12px', sm: '14px' },
                                color: '#333',
                                textAlign: 'center',
                            },
                        }}
                    />
                </Box>
                <Box
                    sx={{
                        border: '2px solid #ccc',
                        height: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        px: 1,
                        width: '100%',
                    }}
                >
                    <TextField
                        variant="standard"
                        placeholder="Max. Price"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                        InputProps={{
                            disableUnderline: true,
                        }}
                        sx={{
                            flex: 1,
                            '& .MuiInputBase-input': {
                                fontSize: { xs: '12px', sm: '14px' },
                                color: '#333',
                                textAlign: 'center',
                            },
                        }}
                    />
                </Box>
                <Box
                    sx={{
                        border: '2px solid #ccc',
                        height: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        px: 1,
                        width: '100%',
                    }}
                >
                    <TextField
                        variant="standard"
                        placeholder="Min. Area (sqft)"
                        value={minArea}
                        onChange={(e) => setMinArea(e.target.value)}
                        InputProps={{
                            disableUnderline: true,
                        }}
                        sx={{
                            flex: 1,
                            '& .MuiInputBase-input': {
                                fontSize: { xs: '12px', sm: '14px' },
                                color: '#333',
                                textAlign: 'center',
                            },
                        }}
                    />
                </Box>
                <Box
                    sx={{
                        border: '2px solid #ccc',
                        height: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        px: 1,
                        width: '100%',
                    }}
                >
                    <TextField
                        variant="standard"
                        placeholder="Max. Area (sqft)"
                        value={maxArea}
                        onChange={(e) => setMaxArea(e.target.value)}
                        InputProps={{
                            disableUnderline: true,
                        }}
                        sx={{
                            flex: 1,
                            '& .MuiInputBase-input': {
                                fontSize: { xs: '12px', sm: '14px' },
                                color: '#333',
                                textAlign: 'center',
                            },
                        }}
                    />
                </Box>
                <Button
                    sx={{
                        height: '40px',
                        width: '100%',
                        fontFamily: FONT_FAMILY.primary,
                        backgroundColor: COLOR.primary,
                        color: 'white',
                        fontWeight: 300,
                        fontSize: '14px',
                        textTransform: 'none',
                        mb: 8,
                    }}
                >
                    Search Property
                </Button>
            </Stack>
        </Box>
    );
};

export default FilterProperty;