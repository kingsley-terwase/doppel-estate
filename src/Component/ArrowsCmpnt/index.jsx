import IconButton from '@mui/material/IconButton'
import { useTheme } from '@mui/material/styles'

export const NextArrow = (props) => {
  const theme = useTheme()
  const { onClick } = props

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
        color: theme.palette.primary.contrastText,        // ✅ white
        backgroundColor: theme.palette.custom.button.main, // ✅ was: palette.button.main
        '&:hover': {
          backgroundColor: theme.palette.custom.button.hover, // ✅ was: palette.button.dark
        },
      }}
    >
      ➡
    </IconButton>
  )
}

export const PrevArrow = (props) => {
  const theme = useTheme()
  const { onClick } = props

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
        color: theme.palette.primary.contrastText,         // ✅ was: palette.primary.neutral
        backgroundColor: theme.palette.custom.button.main,  // ✅ was: palette.button.main
        '&:hover': {
          backgroundColor: theme.palette.custom.button.hover, // ✅ was: palette.button.dark
        },
      }}
    >
      ⬅
    </IconButton>
  )
}