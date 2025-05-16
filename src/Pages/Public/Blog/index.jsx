import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import TextField from '@mui/material/TextField'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import { useNavigate } from 'react-router-dom'
import { FONT_FAMILY } from '../../../Config/font'
import { blogData, categories, recentPosts, recentProperties, tags } from './data'
import Container from '@mui/material/Container'
import { PageFirstBg } from '../../../Component'

export default function BlogPage () {
  const navigate = useNavigate()

  return (
    <>
      <PageFirstBg label=" Home / Blog" subLabel='Blogs'/>
      <Box px={4} py={8} sx={{ backgroundColor: 'whitesmoke' }}>
        <Container maxWidth='lg'>
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <Grid container spacing={2}>
                {blogData.map(blog => (
                  <Grid item xs={12} sm={6} key={blog.id}>
                    <Card
                      onClick={() => navigate(`/blogs/${blog.id}`)}
                      sx={{
                        backgroundColor: '#fff',
                        cursor: 'pointer',
                        boxShadow: 2
                      }}
                    >
                      <CardMedia
                        component='img'
                        height='240'
                        image={blog.image}
                        alt={blog.title}
                      />
                      <CardContent>
                        <Typography
                          variant='subtitle1'
                          fontWeight={600}
                          gutterBottom
                        >
                          {blog.title}
                        </Typography>
                        <Typography variant='caption'>
                          By {blog.author} | {blog.date}
                        </Typography>
                        <Typography variant='body2' mt={1}>
                          {blog.excerpt}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
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
