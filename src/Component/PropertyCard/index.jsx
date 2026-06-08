import { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import IconButton from '@mui/material/IconButton'
import { useTheme } from '@mui/material/styles'
import { Heart24Regular, Share24Regular, Location16Regular } from '@fluentui/react-icons'
import { FONT_FAMILY } from '../../Config/font'

const formatPrice = (price) => {
  if (!price) return 'N/A'
  const cleaned = parseFloat(String(price).replace(/,/g, '').replace(/[^0-9.]/g, ''))
  if (isNaN(cleaned)) return `₦${String(price).toUpperCase()}`
  if (cleaned >= 1_000_000) {
    const m = cleaned / 1_000_000
    return `₦${m % 1 === 0 ? m : m.toFixed(1)} MILLION`
  }
  if (cleaned >= 1_000) {
    const k = cleaned / 1_000
    return `₦${k % 1 === 0 ? k : k.toFixed(1)}K`
  }
  return `₦${cleaned.toLocaleString()}`
}

const statusConfig = {
  soldout:   { label: 'Sold Out',  bg: '#424242' },
  available: { label: 'Available', bg: '#2e7d32' },
}

const PropertyCard = ({ image, title, price, propertynumber, location, size, discount, status, onClick }) => {
   const theme = useTheme()
  const [liked, setLiked] = useState(false)

  const statusBadge  = status ? statusConfig[status] : null
  const displayPrice = formatPrice(price)
  const cleanSize    = size ? String(size).replace(/[a-zA-Z]/g, '').trim() : null

  return (
    <Box
      onClick={onClick}
      sx={{
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        borderRadius: 2,
        border: `1px solid ${theme.palette.custom.card.border}`,
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        cursor: 'pointer',
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' },
      }}
    >
      {/* Image */}
      <Box sx={{ position: 'relative', overflow: 'hidden' }}>
        <Box
          component="img"
          src={image}
          alt={title || 'Property image'}
          sx={{ width: '100%', display: 'block' }}
        />

        {discount && (
          <Box sx={{ position: 'absolute', top: 10, left: 10, backgroundColor: theme.palette.error.main, px: 1.2, py: 0.6, borderRadius: 5, zIndex: 1 }}>
            <Typography sx={{ fontSize: '13px', fontWeight: 800, color: theme.palette.common.white }}>
              -{discount}% Off
            </Typography>
          </Box>
        )}

        {statusBadge && (
          <Box sx={{ position: 'absolute', bottom: 10, left: 10, backgroundColor: statusBadge.bg, px: 1, py: 0.4, borderRadius: 1, zIndex: 1 }}>
            <Typography sx={{ fontSize: '11px', fontWeight: 700, color: theme.palette.common.white }}>
              {statusBadge.label}
            </Typography>
          </Box>
        )}

        <Stack direction="row" spacing={0.5} sx={{ position: 'absolute', top: 10, right: 10 }}>
          <IconButton
            onClick={(e) => { e.stopPropagation(); setLiked(p => !p) }}
            size="small"
            sx={{ backgroundColor: 'rgba(0,0,0,0.45)', borderRadius: 0, '&:hover': { backgroundColor: 'rgba(0,0,0,0.65)' } }}
          >
            <Heart24Regular style={{ color: liked ? theme.palette.error.main : theme.palette.common.white, fontSize: 18 }} />
          </IconButton>
          <IconButton
            onClick={(e) => e.stopPropagation()}
            size="small"
            sx={{ backgroundColor: 'rgba(0,0,0,0.45)', borderRadius: 0, '&:hover': { backgroundColor: 'rgba(0,0,0,0.65)' } }}
          >
            <Share24Regular style={{ color: theme.palette.common.white, fontSize: 18 }} />
          </IconButton>
        </Stack>
      </Box>

      {/* Info */}
      <Box sx={{ px: '0.8rem', pt: '0.6rem', pb: '0.4rem' }}>
        <Typography
          variant="subtitle1"
          fontWeight={700}
          sx={{
            color: theme.palette.primary.main,
            fontFamily: FONT_FAMILY.quaternary,
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}
        >
          {displayPrice}
          <span style={{ fontSize: '12px', fontWeight: 500, color: theme.palette.text.secondary }}>
            {propertynumber}
          </span>
        </Typography>

        <Typography sx={{ fontSize: '16px', fontWeight: 600, fontFamily: FONT_FAMILY.quaternary, color: theme.palette.text.primary, mt: 0.3 }}>
          {title}
        </Typography>

        <Typography sx={{ fontSize: '13px', display: 'flex', alignItems: 'center', gap: 0.4, fontFamily: FONT_FAMILY.quinary, color: theme.palette.text.secondary, mt: 0.5 }}>
          <Location16Regular /> {location}
        </Typography>
      </Box>

      <Box sx={{ borderTop: `1px solid ${theme.palette.custom.border.subtle}`, mx: '0.8rem' }} />

      <Stack direction="row" spacing={2} sx={{ px: '0.8rem', py: '0.6rem' }}>
        {cleanSize && (
          <Typography sx={{ fontSize: '13px', color: theme.palette.text.secondary, fontFamily: FONT_FAMILY.quinary }}>
            📐 {cleanSize} sqm
          </Typography>
        )}
      </Stack>
    </Box>
  )
}

export default PropertyCard