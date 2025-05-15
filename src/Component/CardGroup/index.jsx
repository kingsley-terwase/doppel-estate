import React from 'react';
import { Box, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CommentIcon from '@mui/icons-material/Comment';
import { FONT_FAMILY } from '../../Config/font';

const CardGroup = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        width: '100%',
        padding: '20px',
        boxSizing: 'border-box',
        gap: '20px', 
      }}
    >
      <Box
        sx={{
          minWidth: '250px', 
          flex: '1 1 calc(30% - 20px)',
          height: '180px',
          background: 'linear-gradient(135deg, #FFFFFF, #F5F5F5)',
          borderRadius: '10px', 
          boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '20px',
          boxSizing: 'border-box',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'scale(1.05)',
          
          },
        }}
      >
        <Box sx={{ position: 'relative', marginBottom: '10px' }}>
          <Box
            sx={{
              width: '50px',
              height: '50px',
              backgroundColor: '#424242',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          />
          <HomeIcon
            sx={{
              color: 'white',
              fontSize: '28px',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
        </Box>
        <Box textAlign="center">
          <Typography sx={{ color: '#333', fontSize: '24px', fontWeight: 700 }}>
            530
          </Typography>
          <Typography sx={{ color: '#666', fontSize: '14px', fontWeight: 500, fontFamily: FONT_FAMILY.tertiary }}>
            Property Deals
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          minWidth: '250px',
          flex: '1 1 calc(30% - 20px)',
          height: '180px',
          background: 'linear-gradient(135deg, #FFFFFF, #F5F5F5)',
          borderRadius: '10px',
          boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '20px',
          boxSizing: 'border-box',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: '0 6px 16px rgba(0, 0, 0, 0.2)',
          },
        }}
      >
        <Box sx={{ position: 'relative', marginBottom: '10px' }}>
          <Box
            sx={{
              width: '50px',
              height: '50px',
              backgroundColor: '#424242',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          />
          <VisibilityIcon
            sx={{
              color: 'white',
              fontSize: '28px',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
        </Box>
        <Box textAlign="center">
          <Typography sx={{ color: '#333', fontSize: '24px', fontWeight: 700 }}>
            349
          </Typography>
          <Typography sx={{ color: '#666', fontSize: '14px', fontWeight: 500, fontFamily: FONT_FAMILY.tertiary }}>
            Property Views
          </Typography>
        </Box>
      </Box>

      {/* Card 3: Total Public Comments */}
      <Box
        sx={{
          minWidth: '250px',
          flex: '1 1 calc(30% - 20px)',
          height: '180px',
          background: 'linear-gradient(135deg, #FFFFFF, #F5F5F5)',
          borderRadius: '10px',
          boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '20px',
          boxSizing: 'border-box',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: '0 6px 16px rgba(0, 0, 0, 0.2)',
          },
        }}
      >
        <Box sx={{ position: 'relative', marginBottom: '10px' }}>
          <Box
            sx={{
              width: '50px',
              height: '50px',
              backgroundColor: '#424242',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          />
          <CommentIcon
            sx={{
              color: 'white',
              fontSize: '28px',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
        </Box>
        <Box textAlign="center">
          <Typography sx={{ color: '#333', fontSize: '24px', fontWeight: 700 }}>
            120
          </Typography>
          <Typography sx={{ color: '#666', fontSize: '14px', fontWeight: 500, fontFamily: FONT_FAMILY.tertiary }}>
            Total Public Comments
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CardGroup;