import { useParams, useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'
import Chip from '@mui/material/Chip'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Stack from '@mui/material/Stack'
import { FONT_FAMILY } from '../../../Config/font'
import { blogData } from '../Blog/data'
import Button from '@mui/material/Button'
import { ChevronLeft20Filled } from '@fluentui/react-icons'
import Container from '@mui/material/Container'
import { PageFirstBg, ReviewForm } from '../../../Component'
import { categories, recentPosts, recentProperties, tags } from '../Blog/data'
import TextField from '@mui/material/TextField';
export default function SingleBlogPage () {
  const { id } = useParams()
  const navigate = useNavigate()
  const blog = blogData.find(blog => blog.id === parseInt(id))

  if (!blog) {
    return <Typography variant='h6'>Blog post not found.</Typography>
  }

  return (
    <>
      <PageFirstBg label='Home/blogs/singleblogs' subLabel='Blogs' />
      <Box px={4} py={2} sx={{ backgroundColor: 'whitesmoke' }}>
        <Container maxWidth='lg'>
          <Button sx={{ mb: 2, color: '#fff' }}>
            <Typography
              variant='body2'
              sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
              onClick={() => navigate(-1)}
            >
              <ChevronLeft20Filled />
              Back to Blogs
            </Typography>
          </Button>

          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <Box sx={{ backgroundColor: '#fff' }}>
                <img
                  src={blog.image}
                  alt={blog.title}
                  width='100%'
                  height={450}
                  style={{ objectFit: 'cover', borderRadius: 4 }}
                />
                <Box p={2}>
                  <Typography variant='h5' fontWeight={600} mt={1} mb={1}>
                    {blog.title}
                  </Typography>
                  <Typography variant='caption'>
                    By {blog.author} | {blog.date}
                  </Typography>
                  <Divider sx={{ my: 1 }} />
                  <Typography variant='body1'>{blog.content}</Typography>
                </Box>
              </Box>
              <ReviewForm />
            </Grid>

            <Grid item xs={12} md={4}>
              <Box mb={4} sx={{ backgroundColor: '#fff', py: 4, px: 4 }}>
                <Box sx={{ backgroundColor: 'whitesmoke' }}>
                  <TextField
                    fullWidth
                    placeholder='Search ...'
                    size='small'
                    variant='outlined'
                  />
                </Box>
              </Box>

              <Box mb={4} sx={{ backgroundColor: '#fff', py: 4, px: 4 }}>
                <Typography
                  variant='subtitle1'
                  sx={{ fontFamily: FONT_FAMILY.quaternary }}
                  fontWeight={600}
                >
                  CATEGORIES
                </Typography>
                <List dense>
                  {categories.map((cat, index) => (
                    <ListItem
                      key={index}
                      sx={{ borderBottom: '1px solid whitesmoke' }}
                    >
                      <ListItemText
                        primary={`${cat.label} (${cat.count
                          .toString()
                          .padStart(2, '0')})`}
                        primaryTypographyProps={{ fontSize: 14 }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>

              <Box mb={4} sx={{ backgroundColor: '#fff', py: 4, px: 4 }}>
                <Typography
                  variant='subtitle1'
                  sx={{ fontFamily: FONT_FAMILY.quaternary }}
                  fontWeight={600}
                >
                  RECENT POSTS
                </Typography>
                <List>
                  {recentPosts.map((post, index) => (
                    <ListItem
                      key={index}
                      sx={{ borderBottom: '1px solid whitesmoke' }}
                    >
                      <ListItemText
                        primary={post}
                        primaryTypographyProps={{ fontSize: 14 }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>

              <Box mb={4} sx={{ backgroundColor: '#fff', py: 4, px: 4 }}>
                <Typography
                  variant='subtitle1'
                  sx={{ fontFamily: FONT_FAMILY.quaternary }}
                  fontWeight={600}
                >
                  TAGS
                </Typography>
                <Divider />
                <Stack direction='row' flexWrap='wrap' gap={1}>
                  {tags.map((tag, index) => (
                    <Chip
                      key={index}
                      label={tag}
                      sx={{
                        cursor: 'pointer',
                        '&:hover': { backgroundColor: '#1565C0', color: '#fff' }
                      }}
                      variant='outlined'
                      size='small'
                    />
                  ))}
                </Stack>
              </Box>
              <Box sx={{ backgroundColor: '#fff', py: 4, px: 4 }}>
                <Typography
                  variant='subtitle1'
                  sx={{ fontFamily: FONT_FAMILY.quaternary }}
                  fontWeight={600}
                >
                  RECENT PROPERTIES
                </Typography>
                <List dense>
                  {recentProperties.map((property, index) => (
                    <ListItem
                      key={index}
                      sx={{ borderBottom: '1px solid whitesmoke' }}
                      disableGutters
                    >
                      <ListItemText
                        primary={property}
                        primaryTypographyProps={{ fontSize: 14 }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}
