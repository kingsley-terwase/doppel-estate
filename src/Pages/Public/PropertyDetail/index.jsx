import { useParams, useNavigate } from 'react-router-dom'
import { Box, Container, Typography, Stack, Chip, Button } from '@mui/material'
import { Location16Regular } from '@fluentui/react-icons'
import { property } from '../Home/data'
import { useTheme } from '@mui/material/styles'
import { FONT_FAMILY } from '../../../Config/font'

// ── Pure utility — no hook needed here ───────────────────────────────────────
const formatPrice = (price) => {
  if (!price) return 'N/A'
  const cleaned = parseFloat(String(price).replace(/,/g, '').replace(/[^0-9.]/g, ''))
  if (isNaN(cleaned)) return `₦${String(price).toUpperCase()}`
  if (cleaned >= 1_000_000) {
    const m = cleaned / 1_000_000
    return `₦${m % 1 === 0 ? m : m.toFixed(1)}M`
  }
  if (cleaned >= 1_000) {
    const k = cleaned / 1_000
    return `₦${k % 1 === 0 ? k : k.toFixed(1)}K`
  }
  return `₦${cleaned.toLocaleString()}`
}

// ── Sub-components receive values as props — no hook needed ──────────────────
const GoldLine = ({ gold }) => (
  <Box sx={{
    width: 36, height: '1px',
    background: `linear-gradient(90deg, ${gold}, #f0d080)`,
    my: 2.5,
  }} />
)

const SectionLabel = ({ children }) => (
  <Typography sx={{
    fontSize: '9px',
    letterSpacing: '0.28em',
    color: 'rgba(255,255,255,0.3)',
    textTransform: 'uppercase',
    fontFamily: FONT_FAMILY.primary,
    fontWeight: 600,
    mb: 2,
    display: 'flex',
    alignItems: 'center',
    gap: 1.5,
    '&::after': {
      content: '""',
      flex: 1,
      height: '1px',
      backgroundColor: 'rgba(255,255,255,0.07)',
    },
  }}>
    {children}
  </Typography>
)

// ── Main component ────────────────────────────────────────────────────────────
const PropertyDetail = () => {
  // ✅ useTheme is NOW inside the component body — this is the only correct place
  const theme = useTheme()
  const { id } = useParams()
  const navigate = useNavigate()

  // ✅ all theme-derived constants defined INSIDE the component
  const GOLD = theme.palette.custom?.accent ?? '#c49b63'
  const BG_PAGE = '#0f0f0f'
  const BG_CARD = '#161616'
  const TEXT_DIM = theme.palette.text.disabled
  const AVAILABLE = theme.palette.primary.main
  const SOLD_FG = TEXT_DIM
  const SOLD_BG = BG_CARD

  const item = property.find(p => p.propertynumber === id)
  const cleanSize = item?.size ? String(item.size).replace(/[a-zA-Z]/g, '').trim() : null

  if (!item) return (
    <Box sx={{
      backgroundColor: BG_PAGE,
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography sx={{
          fontFamily: FONT_FAMILY.secondary,
          fontSize: '2rem',
          color: 'rgba(255,255,255,0.3)',
        }}>
          Property not found
        </Typography>
        <Button
          onClick={() => navigate('/properties')}
          sx={{ mt: 3, color: GOLD, letterSpacing: '0.12em', fontSize: '12px' }}
        >
          ← Return to Listings
        </Button>
      </Box>
    </Box>
  )

  const stats = [
    cleanSize && { label: 'Area (sqm)', value: cleanSize },
    item.bedrooms && { label: 'Bedrooms', value: item.bedrooms },
    item.bathrooms && { label: 'Bathrooms', value: item.bathrooms },
    item.type && { label: 'Type', value: item.type },
  ].filter(Boolean)

  const isSoldOut = item.status === 'soldout'

  return (
    <Box sx={{
      backgroundColor: BG_PAGE,
      minHeight: '100vh',
      pt: { xs: 10, md: 12 },
      pb: { xs: 6, md: 10 },
      px: { xs: 2, md: 4 },
      fontFamily: FONT_FAMILY.secondary,
    }}>
      <Container maxWidth="xl" disableGutters>

        {/* ── Back button ── */}
        <Button
          onClick={() => navigate(-1)}
          sx={{
            mb: 2.5,
            color: 'rgba(255,255,255,0.45)',
            fontSize: '11px',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            fontFamily: FONT_FAMILY.primary,
            fontWeight: 500,
            px: 0,
            '&:hover': { color: GOLD, background: 'none' },
          }}
        >
          ← Back to Listings
        </Button>

        {/* ── Main card ── */}
        <Box sx={{
          backgroundColor: BG_CARD,
          border: '1px solid rgba(255,255,255,0.07)',
          boxShadow: '0 32px 80px rgba(0,0,0,0.7)',
          overflow: 'hidden',
          color: '#fff',
        }}>

          {/* Top split: image + info */}
          <Box sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            height: { xs: 'auto', md: '60vh' },
          }}>

            {/* Image panel */}
            <Box sx={{
              position: 'relative',
              width: { xs: '100%', md: '60%' },
              height: { xs: '56vw', md: '100%' },
              flexShrink: 0,
              overflow: 'hidden',
            }}>
              <Box
                component="img"
                src={item.image}
                alt={item.title}
                sx={{
                  width: '100%', height: '100%',
                  objectFit: 'cover', display: 'block',
                  filter: 'brightness(0.78)',
                  transform: 'scale(1.04)',
                  transition: 'transform 10s ease',
                  '&:hover': { transform: 'scale(1.0)' },
                }}
              />
              <Box sx={{
                position: 'absolute', inset: 0,
                background: `linear-gradient(to right, transparent 55%, ${BG_CARD} 100%)`,
                pointerEvents: 'none',
              }} />

              {/* Status badge */}
              <Box sx={{
                position: 'absolute', bottom: 20, left: 20,
                backgroundColor: isSoldOut ? `${SOLD_BG}e6` : 'rgba(10,50,25,0.9)',
                color: isSoldOut ? SOLD_FG : '#6fcf97',
                border: `1px solid ${isSoldOut ? TEXT_DIM : AVAILABLE}`,
                fontSize: '10px', letterSpacing: '0.2em', fontWeight: 700,
                px: 2, py: 0.7,
                textTransform: 'uppercase',
                fontFamily: FONT_FAMILY.primary,
                backdropFilter: 'blur(6px)',
              }}>
                {isSoldOut ? 'Sold Out' : 'Available'}
              </Box>

              {/* Discount badge */}
              {item.discount && (
                <Box sx={{
                  position: 'absolute', top: 0, left: 20,
                  background: `linear-gradient(135deg, ${theme.palette.error.main}, #e74c3c)`,
                  color: '#fff',
                  fontSize: '11px', fontWeight: 700,
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  px: 2, py: 0.8,
                  fontFamily: FONT_FAMILY.primary,
                }}>
                  {item.discount}% OFF
                </Box>
              )}
            </Box>

            {/* Info panel */}
            <Box sx={{
              width: { xs: '100%', md: '40%' },
              height: { xs: 'auto', md: '100%' },
              display: 'flex', flexDirection: 'column',
              justifyContent: 'center',
              px: { xs: 3, md: 5 }, py: { xs: 4, md: 5 },
              overflowY: 'auto',
              borderLeft: { md: '1px solid rgba(255,255,255,0.05)' },
            }}>

              <Typography sx={{
                fontSize: '10px', letterSpacing: '0.26em',
                color: 'rgba(255,255,255,0.28)',
                textTransform: 'uppercase',
                fontFamily: FONT_FAMILY.primary, mb: 1.5,
              }}>
                {item.propertynumber}
              </Typography>

              <Typography sx={{
                fontSize: { xs: '1.5rem', md: '1.8rem' },
                fontWeight: 400, lineHeight: 1.2,
                color: '#fff',
                fontFamily: FONT_FAMILY.secondary,
                letterSpacing: '-0.01em', mb: 0.8,
              }}>
                {item.title}
              </Typography>

              <Box sx={{
                display: 'flex', alignItems: 'center', gap: 0.8,
                color: 'rgba(255,255,255,0.38)',
                fontSize: '13px', fontFamily: FONT_FAMILY.primary, mb: 2,
              }}>
                <Location16Regular style={{ opacity: 0.4, flexShrink: 0 }} />
                {item.location}
              </Box>

              <Typography sx={{
                fontSize: { xs: '1.9rem', md: '2.4rem' },
                fontFamily: FONT_FAMILY.secondary,
                fontWeight: 600, letterSpacing: '-0.02em',
                lineHeight: 1, color: GOLD,
              }}>
                {formatPrice(item.price)}
              </Typography>

              {/* ✅ pass GOLD as prop — no hook inside GoldLine */}
              <GoldLine gold={GOLD} />

              {/* Stats */}
              {stats.length > 0 && (
                <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mb: 3 }}>
                  {stats.map((s, i) => (
                    <Box key={i} sx={{
                      border: '1px solid rgba(255,255,255,0.08)',
                      backgroundColor: 'rgba(255,255,255,0.03)',
                      px: 1.8, py: 1, textAlign: 'center', minWidth: 66,
                    }}>
                      <Typography sx={{
                        fontFamily: FONT_FAMILY.secondary,
                        fontSize: '1.05rem', fontWeight: 600,
                        color: '#fff', lineHeight: 1,
                      }}>
                        {s.value}
                      </Typography>
                      <Typography sx={{
                        fontSize: '9px', letterSpacing: '0.15em',
                        color: 'rgba(255,255,255,0.28)',
                        textTransform: 'uppercase',
                        fontFamily: FONT_FAMILY.primary, mt: 0.3,
                      }}>
                        {s.label}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              )}

              {/* Agent card */}
              {item.agent && (
                <Box sx={{
                  border: '1px solid rgba(255,255,255,0.07)',
                  background: 'rgba(255,255,255,0.02)',
                  p: 2, display: 'flex', alignItems: 'center',
                  justifyContent: 'space-between', gap: 2, flexWrap: 'wrap',
                }}>
                  <Stack direction="row" spacing={1.5} alignItems="center">
                    <Box
                      component="img"
                      src={item.agent.image || ''}
                      alt={item.agent.name}
                      sx={{
                        width: 38, height: 38, borderRadius: '50%',
                        objectFit: 'cover',
                        border: `1.5px solid ${GOLD}4d`,
                      }}
                    />
                    <Box>
                      <Typography sx={{
                        fontFamily: FONT_FAMILY.secondary,
                        fontSize: '1rem', fontWeight: 600,
                        color: '#fff', lineHeight: 1.2,
                      }}>
                        {item.agent.name}
                      </Typography>
                      <Typography sx={{
                        fontSize: '9px', color: 'rgba(255,255,255,0.28)',
                        letterSpacing: '0.1em', textTransform: 'uppercase',
                        fontFamily: FONT_FAMILY.primary,
                      }}>
                        {item.agent.title || 'Listed Agent'}
                      </Typography>
                    </Box>
                  </Stack>

                  <Stack spacing={0.5} alignItems="flex-end">
                    {item.agent.phone && (
                      <Typography component="a" href={`tel:${item.agent.phone}`} sx={{
                        fontSize: '13px', color: GOLD,
                        textDecoration: 'none', fontWeight: 600,
                        fontFamily: FONT_FAMILY.primary,
                      }}>
                        {item.agent.phone}
                      </Typography>
                    )}
                    {item.agent.email && (
                      <Typography component="a" href={`mailto:${item.agent.email}`} sx={{
                        fontSize: '11px', color: 'rgba(255,255,255,0.25)',
                        textDecoration: 'none', fontFamily: FONT_FAMILY.primary,
                      }}>
                        {item.agent.email}
                      </Typography>
                    )}
                  </Stack>
                </Box>
              )}

              {/* CTA */}
              <Button
                fullWidth
                onClick={() => item.agent?.phone && window.open(`tel:${item.agent.phone}`)}
                sx={{
                  mt: 2,
                  background: `linear-gradient(135deg, ${GOLD} 0%, #f0d080 100%)`,
                  color: '#0a0a0a',
                  borderRadius: 0, py: 1.6,
                  fontFamily: FONT_FAMILY.primary,
                  fontWeight: 700, letterSpacing: '0.14em',
                  fontSize: '11px', textTransform: 'uppercase',
                  '&:hover': {
                    background: `linear-gradient(135deg, #d4b87e 0%, #f5e090 100%)`,
                  },
                }}
              >
                Enquire About This Property
              </Button>
            </Box>
          </Box>

          {/* Bottom detail section */}
          <Box sx={{
            borderTop: '1px solid rgba(255,255,255,0.06)',
            px: { xs: 3, md: 6 }, py: { xs: 4, md: 5 },
          }}>
            {item.description && (
              <Box sx={{ mb: 5 }}>
                <SectionLabel>About This Property</SectionLabel>
                <Typography sx={{
                  fontSize: { xs: '1.05rem', md: '1.15rem' },
                  lineHeight: 1.9, color: 'rgba(255,255,255,0.5)',
                  fontFamily: FONT_FAMILY.secondary, maxWidth: '72ch',
                }}>
                  {item.description}
                </Typography>
              </Box>
            )}

            {item.amenities?.length > 0 && (
              <Box sx={{ mb: 5 }}>
                <SectionLabel>Amenities & Features</SectionLabel>
                <Stack direction="row" flexWrap="wrap" gap={1}>
                  {item.amenities.map((amenity, i) => (
                    <Chip key={i} label={amenity} sx={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      color: 'rgba(255,255,255,0.65)',
                      fontSize: '12px', letterSpacing: '0.05em',
                      fontFamily: FONT_FAMILY.primary,
                      borderRadius: 0, fontWeight: 500,
                      '&:hover': { background: 'rgba(255,255,255,0.08)' },
                    }} />
                  ))}
                </Stack>
              </Box>
            )}

            {item.nearbyPlaces?.length > 0 && (
              <Box>
                <SectionLabel>Nearby Landmarks</SectionLabel>
                <Box sx={{ maxWidth: 460 }}>
                  {item.nearbyPlaces.map((place, i) => (
                    <Box key={i} sx={{
                      display: 'flex', alignItems: 'center', gap: 2,
                      py: 1.5,
                      borderBottom: '1px solid rgba(255,255,255,0.04)',
                      color: 'rgba(255,255,255,0.5)',
                      fontSize: '14px', fontFamily: FONT_FAMILY.primary,
                      '&:last-child': { borderBottom: 'none' },
                    }}>
                      <Box sx={{
                        width: 26, height: 26, borderRadius: '50%',
                        border: `1px solid ${GOLD}38`,
                        display: 'flex', alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '11px', flexShrink: 0,
                      }}>
                        📍
                      </Box>
                      {place}
                    </Box>
                  ))}
                </Box>
              </Box>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default PropertyDetail