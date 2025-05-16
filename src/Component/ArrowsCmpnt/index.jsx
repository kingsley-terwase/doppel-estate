import IconButton from '@mui/material/IconButton';

export const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: 'absolute',
        right: 10,
        top: '45%',
        width: 40,
        height: 40,
        borderRadius: '50%',
        zIndex: 5,
        color: 'white',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
        },
      }}
    >
      ➡
    </IconButton>
  );
};

export const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: 'absolute',
        left: 10,
        top: '45%',
        width: 40,
        height: 40,
        borderRadius: '50%',
        zIndex: 5,
        color: 'white',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
        },
      }}
    >
      ⬅
    </IconButton>
  );
};
