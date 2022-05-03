import React, { useState } from 'react'
import { Box, Drawer, Typography, IconButton } from '@mui/material'
import { Menu } from '@mui/icons-material'

const MuiDrawer = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(true)
  return (
      <>
        <IconButton onClick = {() => setIsDrawerOpen(true)} size = "large" color = "inherit">
            <Menu />
        </IconButton>
        <Drawer anchor = "right" open = {isDrawerOpen} onClose = {() => setIsDrawerOpen(false)}>
            <Box p = "1rem" width = "350px" sx = {{border: "1px solid red"}} textAlign="center" role = "presentation">
                <Typography variant = "h6">
                    Side Panel
                </Typography>
            </Box>
        </Drawer>
    </>
  )
}

export default MuiDrawer