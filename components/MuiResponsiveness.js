import { Box } from '@mui/material'
import React from 'react'

const MuiResponsiveness = () => {
  return (
    <Box sx = {{
        margin: "1rem",
        height: "300px", 
        width: {
            xs: 100, // 0
            sm: 200, // 600
            md: 300, // 900
            lg: 400, // 1200
            xl: 500, // 1536
        }, 
        bgcolor: "secondary.customBlue"}}>
        
    </Box>
  )
}

export default MuiResponsiveness