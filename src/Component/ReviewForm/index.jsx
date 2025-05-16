import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Rating from '@mui/material/Rating'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import {
  Star24Regular,
  Star24Filled,
  Send24Regular,
  Delete24Regular,
  Emoji24Regular,
  Image24Regular,
  AttachRegular
} from '@fluentui/react-icons'
import { FONT_FAMILY } from '../../Config/font'

const ReviewForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    review: '',
    rating: 0,
    recommend: false,
    images: []
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  })

  const handleChange = e => {
    const { name, value, checked, type } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  // Handle rating change
  const handleRatingChange = (event, newValue) => {
    setFormData(prevData => ({
      ...prevData,
      rating: newValue
    }))
  }

  // Handle image upload
  const handleImageUpload = e => {
    // In a real application, you would handle file uploads
    // Here we're just storing the file names
    if (e.target.files) {
      const fileNames = Array.from(e.target.files).map(file => file.name)
      setFormData(prevData => ({
        ...prevData,
        images: [...prevData.images, ...fileNames]
      }))
    }
  }

  // Remove uploaded image
  const removeImage = index => {
    setFormData(prevData => ({
      ...prevData,
      images: prevData.images.filter((_, i) => i !== index)
    }))
  }

  // Handle form submission
  const handleSubmit = e => {
    e.preventDefault()
    setIsSubmitting(true)

    // Validate form
    if (
      !formData.name ||
      !formData.email ||
      !formData.review ||
      formData.rating === 0
    ) {
      setSnackbar({
        open: true,
        message: 'Please fill in all required fields',
        severity: 'error'
      })
      setIsSubmitting(false)
      return
    }

    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData)
      setSnackbar({
        open: true,
        message: 'Thank you for your review!',
        severity: 'success'
      })
      setIsSubmitting(false)

      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        title: '',
        review: '',
        rating: 0,
        recommend: false,
        images: []
      })
    }, 1500)
  }

  const handleSnackbarClose = () => {
    setSnackbar(prev => ({
      ...prev,
      open: false
    }))
  }

  return (
    <>
      <Card sx={{ backgroundColor: '#fff', py:3, my:4}}>
        <CardContent sx={{pb: 8, px:4,}}>
          <Typography
            variant='subtitle2'
            sx={{ mb: 3, fontWeight: 500 }}
          >
            Reviews
          </Typography>

          <Divider sx={{ mb: 1}} />

          <Box component='form' onSubmit={handleSubmit} noValidate>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  required
                  placeholder='Your Name'
                  name='name'
                  sx={{
                    height: 'var(--form-height)',
                    backgroundColor: 'var(--form-bg)',
                    border: '1px solid whitesmoke',
                    borderRadius: '8px',
                    '& .MuiInputBase-root': {
                      height: '100%',
                    },
                    '& input': {
                      height: '100%',
                      boxSizing: 'border-box',
                    },
                  }}
                  value={formData.name}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  required
                  placeholder='Email Address'
                  name='email'
                  type='email'
                  sx={{
                    height: 'var(--form-height)',
                    backgroundColor: 'var(--form-bg)',
                    border: '1px solid whitesmoke',
                    borderRadius: '8px',
                    '& .MuiInputBase-root': {
                      height: '100%',
                    },
                    '& input': {
                      height: '100%',
                      boxSizing: 'border-box',
                    },
                  }}
                  value={formData.email}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  placeholder='Review Title'
                  name='title'
                  value={formData.title}
                  onChange={handleChange}
                  sx={{
                    height: 'var(--form-height)',
                    backgroundColor: 'var(--form-bg)',
                    border: '1px solid whitesmoke',
                    borderRadius: '8px',
                    '& .MuiInputBase-root': {
                      height: '100%',
                    },
                    '& input': {
                      height: '100%',
                      boxSizing: 'border-box',
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  name='review'
                  multiline
                  rows={4}
                  sx={{
                    backgroundColor: 'var(--form-bg)',
                    border: '1px solid whitesmoke',
                    borderRadius: '8px',
                    '& .MuiInputBase-root': {
                      height: '100%',
                    },
                    '& input': {
                      height: '100%',
                      boxSizing: 'border-box',
                    },
                  }}
                  value={formData.review}
                  onChange={handleChange}
                  placeholder='Share your experience with this product...'
                />
              </Grid>

              <Grid item xs={12}>
                <Typography variant='subtitle2' sx={{fontFamily:FONT_FAMILY.sept}}>
                  Add Photos (Optional)
                </Typography>
                <Button
                  variant='outlined'
                  component='label'
                  startIcon={<Image24Regular />}
                  sx={{ mr: 2 }}
                >
                  Upload Images
                  <input
                    type='file'
                    hidden
                    multiple
                    accept='image/*'
                    onChange={handleImageUpload}
                  />
                </Button>

                {formData.images.length > 0 && (
                  <Stack
                    direction='row'
                    spacing={1}
                    sx={{ mt: 2, flexWrap: 'wrap', gap: 1 }}
                  >
                    {formData.images.map((image, index) => (
                      <Paper
                        key={index}
                        sx={{
                          p: 1,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          width: 'fit-content'
                        }}
                      >
                        <Typography variant='body2' sx={{ mr: 1 }}>
                          {image}
                        </Typography>
                        <Button
                          size='small'
                          color='error'
                          onClick={() => removeImage(index)}
                        >
                          <Delete24Regular />
                        </Button>
                      </Paper>
                    ))}
                  </Stack>
                )}
              </Grid>

              <Grid item xs={12} sx={{ mt: 1 }}>
                <Button
                  fullWidth
                  type='submit'
                  variant='contained'
                  size='large'
                  disabled={isSubmitting}
                  startIcon={<Send24Regular />}
                  sx={{ px: 4, color: '#fff', }}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Review'}
                </Button>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbar.severity}
          variant='filled'
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  )
}

export default ReviewForm
