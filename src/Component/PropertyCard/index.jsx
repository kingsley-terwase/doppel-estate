import { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import {
  Heart24Regular,
  Share24Regular,
  Bed24Regular,
  Crop24Regular,
  CheckmarkCircle24Filled,
  ArrowSwapFilled,
  SearchSparkleFilled,
  BuildingHomeRegular,
  BuildingHome24Regular,
  Location16Regular
} from '@fluentui/react-icons'
import Button from '@mui/material/Button'
import OnImgBtn from '../OnImgBtn'
import { COLOR } from '../../Config/color'
import { FONT_FAMILY } from '../../Config/font'
import { Location24Regular } from '@fluentui/react-icons/fonts'

const PropertyCard = ({
  image,
  title,
  span,
  price,
  location,
  beds,
  baths,
  size,
  agent,
  posted
}) => {
  const [liked, setLiked] = useState(false)

  return (
    <Box
      sx={{
        maxWidth: 410,
        boxShadow: 3,
        bgcolor: 'white',
        overflow: 'hidden'
      }}
    >
      <Box sx={{ position: 'relative' }}>
        <Box component='img' src={image} alt={title}
          sx={{
            width: '100%',
            transition: 'transform 0.3s ease-in-out',
            "&:hover": {
              transform: 'scale(1.05)',
            }
        }} />

        <Stack
          direction='row'
          spacing={0.5}
          sx={{
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'absolute',
            bottom: 20,
            left: 15
          }}
        >
          <BuildingHome24Regular />
          <Typography variant='body2' color='#fff'>
            Apartment
          </Typography>
        </Stack>
        <Stack
          direction='row'
          spacing={0.5}
          sx={{ position: 'absolute', bottom: 20, right: 15 }}
        >
          <IconButton
            sx={{ px: '10px', backgroundColor: '#212529', borderRadius: 0 }}
          >
            <ArrowSwapFilled />
          </IconButton>
          <IconButton
            sx={{ px: '10px', backgroundColor: '#212529', borderRadius: 0 }}
            onClick={() => setLiked(!liked)}
          >
            <Heart24Regular color={liked ? 'red' : 'black'} />
          </IconButton>
          <IconButton
            sx={{ px: '10px', backgroundColor: '#212529', borderRadius: 0 }}
          >
            <SearchSparkleFilled />
          </IconButton>
        </Stack>
        <Stack
          direction='row'
          spacing={0.5}
          sx={{ position: 'absolute', top: 10, left: 10 }}
        >
          <OnImgBtn label='Rent' bgColor='#212529' />
          <OnImgBtn label='Featured' bgColor={COLOR.primary} />
        </Stack>
      </Box>

      <Box sx={{ px: '0.8rem' }}>
        <Typography
          variant='subtitle1'
          sx={{ display: 'flex', alignItems: 'center', color: '#000' }}
          fontWeight='bold'
        >
          ${price}{' '}
          <span style={{ fontSize: '13px', fontWeight: 400, color: 'gray' }}>
            {span}
          </span>
        </Typography>
        <Typography
          sx={{
            fontSize: '18px',
            py: '8px',
            fontWeight: '500',
            fontFamily: FONT_FAMILY.quaternary,
            color: '#000'
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontSize: '15px',
            display: 'flex',
            alignItems: 'center',
            fontFamily: FONT_FAMILY.quinary,
            color: 'gray'
          }}
        >
          <Location16Regular /> {location}
        </Typography>
      </Box>
      <Box sx={{ borderTop: '1px solid whitesmoke', my: 2 }} />
      <Stack direction='row' sx={{ px: '1rem', pb: '1rem', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box sx={{display: 'flex', gap: '8px', alignItems: 'center'}}>
          <Avatar src={agent?.image || ''} />
          <Typography fontWeight='bold' sx={{ color: '#000' }}>
            {agent?.name || 'Unknown agent'}
          </Typography>
        </Box>
        <Typography variant='body2' sx={{ color: '#000' }}>
          {posted}
        </Typography>
      </Stack>
      
    </Box>
  )
}

export default PropertyCard
