import React, { useState } from 'react'
import { AppBar, Toolbar, IconButton, Typography, Box, Button, Stack, Menu, MenuItem } from '@mui/material'
import { CatchingPokemon } from '@mui/icons-material'
import { KeyboardArrowDown } from '@mui/icons-material'

const MuiNavbar = () => {
    const [anchorElement, setAnchorElement] = useState(null)
    const open = Boolean(anchorElement)
    const handleClick = (e) => {
        setAnchorElement(e.currentTarget)
    }
    const handleClose = () => {
        setAnchorElement(null)
    }
  return (
    <AppBar position="static">
        <Toolbar>
            <IconButton size = "large" edge = "start" color = "inherit">
                <CatchingPokemon />
            </IconButton>
            <Typography variant = "h6" flex = "1">
                Pokemon App
            </Typography>
            <Stack direction = "row" spacing = "1rem">
                <Button color = "inherit">Features</Button>
                <Button color = "inherit">Pricing</Button>
                <Button color = "inherit">News</Button>

                <Button color = "inherit" id = "resources-button"
                    onClick={handleClick}
                    aria-controls = {open ? "resources-menu" : undefined}
                    aria-haspopup = "true"
                    aria-expanded = {open ? "true" : undefined}
                    endIcon = {<KeyboardArrowDown />}
                >Resources</Button>

                <Button color = "inherit">Log In</Button>
            </Stack>
            <Menu id = "resources-menu" anchorEl={anchorElement} 
            open = {anchorElement} 
            MenuListProps = {{
                "aria-labelledby" : "resources-button",
            }}
            onClose ={handleClose}
            anchorOrigin = {{
                vertical: "bottom",
                horizontal: "right"
            }}
            transformOrigin = {{
                vertical: "top",
                horizontal: "right"
            }}
            >
                <MenuItem onClick = {handleClose}>Blog</MenuItem>
                <MenuItem onClick = {handleClose}>Posdcast</MenuItem>
            </Menu>
        </Toolbar>
    </AppBar>
  )
}

export default MuiNavbar