import { Box, Card, CardContent, Typography, CardActions, Button, CardMedia } from '@mui/material'
import React from 'react'

const MuiCard = () => {
  return (
    <Box height = "100vh" bgcolor = "#eee" p = "4rem">
        <Box width = "300px">
            <Card>
                <CardMedia component = "img" height="200" image = "https://source.unsplash.com/random" alt = "img" />
                <CardContent>
                    <Typography variant = "h5" gutterBottom>
                        Card
                    </Typography>
                    <Typography variant = "body2" color = "text.secondary">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. A quidem eos sint asperiores at vitae voluptate accusantium molestiae maiores? Quos!
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant='text' size = "small">Share</Button>
                    <Button variant='text' size = "small">Learn More</Button>
                </CardActions>
            </Card>
        </Box>
    </Box>
  )
}

export default MuiCard