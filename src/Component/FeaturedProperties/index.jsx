import { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { motion, AnimatePresence } from 'framer-motion'
import PropertyCard from '../PropertyCard'

const properties = {
  all: [
    {
      id: 1,
      image: '/Images/Home_4.png',
      title: 'Family House Residence',
      price: '$1850',
      location: 'VT 05403',
      beds: 7,
      baths: 5,
      size: 1200,
      type: 'APARTMENT'
    },
    {
      id: 2,
      image: '/Images/Home_5.png',
      title: 'Gorgeous Villa Bay View',
      price: '$3450',
      location: 'MO 66210',
      beds: 7,
      baths: 5,
      size: 1200,
      type: 'VILLA'
    },
    {
      id: 3,
      image: '/Images/Home_6.png',
      title: 'New Developed Condos',
      price: '$1,0450',
      location: 'MO 66210',
      beds: 7,
      baths: 5,
      size: 1200,
      type: 'CONDOS'
    }
  ],
  house: [
    {
      id: 1,
      image: '/Images/Home_4.png',
      title: 'Family House Residence',
      price: '$1850',
      location: 'VT 05403',
      beds: 7,
      baths: 5,
      size: 1200,
      type: 'APARTMENT'
    }
  ],
  villa: [
    {
      id: 2,
      image: '/Images/Home_5.png',
      title: 'Gorgeous Villa Bay View',
      price: '$3450',
      location: 'MO 66210',
      beds: 7,
      baths: 5,
      size: 1200,
      type: 'VILLA'
    }
  ],
  apartment: [
    {
      id: 3,
      image: '/Images/Home_6.png',
      title: 'New Developed Condos',
      price: '$1,0450',
      location: 'MO 66210',
      beds: 7,
      baths: 5,
      size: 1200,
      type: 'CONDOS'
    }
  ]
}

const tabVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  exit: { opacity: 0, y: -70, transition: { duration: 0.5 } }
}

const FeaturedProperties = () => {
  const [activeTab, setActiveTab] = useState('all')

  return (
    <Box
      sx={{
        maxWidth: '1200px',
        margin: 'auto',
        padding: 2
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 2,
          marginBottom: 3
        }}
      >
        <Box>
        <Typography variant='h5' color='initial' fontWeight='500' gutterBottom>
          Featured Properties
        </Typography>
       </Box>
        <Box sx={{display: 'flex'}}>
          {Object.keys(properties).map(tab => (
            <Box
              key={tab}
              variant={activeTab === tab ? 'contained' : 'outlined'}
              onClick={() => setActiveTab(tab)}
              sx={{
                border: activeTab === tab ? '1px solid lightgray' : null,
                borderRadius: activeTab === tab ? '40px' : null,
                cursor: 'pointer',
                px: '20px',
                py: '5px',
                color: activeTab === tab ? 'black' : 'gray',
                backgroundColor: activeTab === tab ? 'lightgray' : null,
                transition: 'all 0.2s ease-in-out'
              }}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </Box>
          ))}
        </Box>
      </Box>

      <Grid container spacing={3}>
        <AnimatePresence mode='sync'>
          {properties[activeTab].map((property, index) => (
            <Grid item xs={12} sm={6} md={4} key={property.id}>
              <motion.div
                initial={{ opacity: 0, scale: 0.2 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.6 }
                }}
                exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.5 } }}
              >
                <PropertyCard {...property} />
              </motion.div>
            </Grid>
          ))}
        </AnimatePresence>
      </Grid>
    </Box>
  )
}

export default FeaturedProperties
