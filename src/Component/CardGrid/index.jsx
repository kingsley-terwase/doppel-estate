import React from 'react';
import { Box, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home'; // Property icon
import { FONT_FAMILY } from '../../Config/font';
import { TYPOGRAPHY_SIZE } from '../../Config/typography';

const CardGrid = () => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        gap: '10px',
        width: '100%',
        padding: '20px',
        boxSizing: 'border-box',
      }}
    >
      {/* Card 1 */}
      <Box
        sx={{
          height: '100px',
          backgroundColor: '#90EE90',
          borderRadius: '3px',
          display: 'flex',
          alignItems: 'center',
          padding: '10px',
        }}
      >
        <Box sx={{ position: 'relative', marginRight: '10px' }}>
          <Box
            sx={{
              width: '40px',
              height: '40px',
              backgroundColor: 'rgba(255, 255, 255, 0.2)', 
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          />
          <HomeIcon
            sx={{
              color: 'white',
              fontSize: '24px',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
        </Box>
        <Box>
          <Typography sx={{ color: 'white', fontSize: '20px', fontWeight: 600, fontFamily: FONT_FAMILY.primary }}>
            350
          </Typography>
          <Typography sx={{ color: 'white', fontSize: '12px', fontFamily: FONT_FAMILY.tertiary, fontSize: TYPOGRAPHY_SIZE.body1 }}>
            Available Property
          </Typography>
        </Box>
      </Box>

      {/* Card 2 */}
      <Box
        sx={{
          height: '100px',
          backgroundColor: '#DDA0DD',
          borderRadius: '3px',
          display: 'flex',
          alignItems: 'center',
          padding: '10px',
        }}
      >
        <Box sx={{ position: 'relative', marginRight: '10px' }}>
          <Box
            sx={{
              width: '40px',
              height: '40px',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          />
          <HomeIcon
            sx={{
              color: 'white',
              fontSize: '24px',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
        </Box>
        <Box>
          <Typography sx={{ color: 'white', fontSize: '20px', fontWeight: 600, fontFamily: FONT_FAMILY.quaternary }}>
            350
          </Typography>
          <Typography sx={{ color: 'white', fontSize: '12px', fontFamily: FONT_FAMILY.tertiary, fontSize: TYPOGRAPHY_SIZE.body1}}>
            Available Property
          </Typography>
        </Box>
      </Box>

      {/* Card 3 */}
      <Box
        sx={{
          height: '100px',
          backgroundColor: '#FFD700',
          borderRadius: '3px',
          display: 'flex',
          alignItems: 'center',
          padding: '10px',
        }}
      >
        <Box sx={{ position: 'relative', marginRight: '10px' }}>
          <Box
            sx={{
              width: '40px',
              height: '40px',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          />
          <HomeIcon
            sx={{
              color: 'white',
              fontSize: '24px',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
        </Box>
        <Box>
          <Typography sx={{ color: 'white', fontSize: '20px', fontWeight: 600 }}>
            350
          </Typography>
          <Typography sx={{ color: 'white', fontSize: '12px', fontFamily: FONT_FAMILY.tertiary, fontSize: TYPOGRAPHY_SIZE.body1}}>
            Available Property
          </Typography>
        </Box>
      </Box>

      {/* Card 4 */}
      <Box
        sx={{
          height: '100px',
          backgroundColor: '#FFA07A', 
          borderRadius: '3px',
          display: 'flex',
          alignItems: 'center',
          padding: '10px',
        }}
      >
        <Box sx={{ position: 'relative', marginRight: '10px' }}>
          <Box
            sx={{
              width: '40px',
              height: '40px',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          />
          <HomeIcon
            sx={{
              color: 'white',
              fontSize: '24px',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
        </Box>
        <Box>
          <Typography sx={{ color: 'white', fontSize: '20px', fontWeight: 600, fontFamily: FONT_FAMILY.primary }}>
            350
          </Typography>
          <Typography sx={{ color: 'white', fontSize: '12px', fontSize: TYPOGRAPHY_SIZE.body1, fontFamily: FONT_FAMILY.tertiary }}>
            Available Property
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CardGrid;