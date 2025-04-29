import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CloseIcon from '@mui/icons-material/Close';
import Container from '@mui/material/Container';
import { COLOR } from '../../Config/color';

const VideoBanner = () => {
  const [open, setOpen] = useState(false);
  const videoUrl = 'https://youtube.com/shorts/2M3ckqiHMvU?si=J_AnpXvSpcBnI02i';

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: 300,
        backgroundImage: "url('/Images/Home_5.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 5,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', 
        },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: { xs: 'block', md: 'flex' },
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'relative',
          zIndex: 1, 
        }}
      >
        <Box>
          <Typography variant="h4" fontWeight="bold" color="white">
            Do you want to sell your property?
          </Typography>
          <Typography variant="body1" color="white" sx={{ mt: 1 }}>
            You can also fill out our online form if you are interested in
            learning more.
          </Typography>
          <Typography variant="body1" fontWeight="bold" color="white" sx={{ mt: 2 }}>
            Please Call : +902 100 523551
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            cursor: 'pointer',
            position: 'relative',
          }}
          onClick={() => setOpen(true)}
        >
          <Box
            sx={{
              position: 'absolute',
              width: 50,
              height: 50,
              backgroundColor: COLOR.primary,
              borderRadius: '50%',
              animation: 'ripple 1.5s infinite',
              '@keyframes ripple': {
                '0%': { transform: 'scale(1)', opacity: 1 },
                '100%': { transform: 'scale(4)', opacity: 0 },
              },
            }}
          />
          <IconButton
            sx={{
              backgroundColor:COLOR.primary,
              color: 'white',
              width: 50,
              height: 50,
              zIndex: 2,
            }}
          >
            <PlayArrowIcon fontSize="large" />
          </IconButton>
          <Typography variant="body1" color="white">
            Play Video
          </Typography>
        </Box>
      </Container>

      {/* Video Modal */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '80%',
            maxWidth: 800,
            bgcolor: 'black',
            boxShadow: 24,
            p: 2,
            borderRadius: 2,
          }}
        >
          {/* Close Button */}
          <IconButton sx={{ position: 'absolute', top: 10, right: 10, color: 'white' }} onClick={() => setOpen(false)}>
            <CloseIcon />
          </IconButton>

          <Box sx={{ position: 'relative', paddingTop: '56.25%' }}>
            <iframe
              src={videoUrl}
              title="Video"
              allow="autoplay; encrypted-media"
              allowFullScreen
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                border: 'none',
                width: '100%',
                height: '100%',
                borderRadius: 4,
              }}
            ></iframe>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default VideoBanner;
