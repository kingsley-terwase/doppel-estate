import { useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { motion, AnimatePresence } from 'framer-motion'
import { CommentQuoteFilled } from '@fluentui/react-icons';
const testimonials = [
  {
    quote:
      'Posuere mus curabitur parturient scelerisque suspendisse elementum facilisis dignissim non purus torquent turpis interdum hendrerit erat ultrices pretium risus elementum. Fringilla aliquet mattis lacinia quam a montes maecenas parturient urna varius. Sollicitudin pede sapien taciti dui.',
    name: 'Mark Wiggins',
    position: 'CEO ( Grodins Group )',
    image: 'https://randomuser.me/api/portraits/men/1.jpg' // Profile Image
  },
  {
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum tortor sem.',
    name: 'Jane Doe',
    position: 'Managing Director ( XYZ Corp )',
    image: 'https://randomuser.me/api/portraits/women/2.jpg'
  },
  {
    quote:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    name: 'John Smith',
    position: 'CTO ( ABC Ltd )',
    image: 'https://randomuser.me/api/portraits/men/3.jpg'
  }
]

const TestimonialSlider = () => {
  const [index, setIndex] = useState(0)

  return (
    <Box sx={{ textAlign: 'center', maxWidth: 800, margin: 'auto', py: 5 }}>
      <Typography
        variant='caption'
        color='#000'
        sx={{ letterSpacing: 1 }}
      >
        Testimonial
      </Typography>

      <Typography variant='h4' fontWeight='bold' sx={{ mt: 1, color: '#000', mb: 2 }}>
        What Clients Say About Us
      </Typography>

      <Box
        sx={{
          width: 50,
          height: 3,
          backgroundColor: '#c49b63',
          margin: 'auto',
          mb: 2
        }}
      />

      <CommentQuoteFilled size={40} color='#c49b63' />

      <AnimatePresence mode='wait'>
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <Avatar
            src={testimonials[index].image}
            alt={testimonials[index].name}
            sx={{
              width: 80,
              height: 80,
              margin: '20px auto',
              border: '3px solid #c49b63'
            }}
          />

          <Typography
            variant='body1'
            sx={{ fontStyle: 'italic', mt: 2, color: '#000' }}
          >
            “ {testimonials[index].quote} ”
          </Typography>

          <Typography variant='subtitle2' fontWeight='bold' sx={{ mt: 2,color: '#000'  }}>
            {testimonials[index].name}
          </Typography>
          <Typography variant='caption' color='#c49b63'>
            {testimonials[index].position}
          </Typography>
        </motion.div>
      </AnimatePresence>

      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 3 }}>
        {testimonials.map((_, i) => (
          <Box
            key={i}
            sx={{
              width: i === index ? 10 : 6,
              height: i === index ? 10 : 6,
              borderRadius: '50%',
              backgroundColor: i === index ? '#c49b63' : '#e0e0e0',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onClick={() => setIndex(i)}
          />
        ))}
      </Box>
    </Box>
  )
}

export default TestimonialSlider
