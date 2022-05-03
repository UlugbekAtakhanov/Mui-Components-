import React from 'react'
import { Box, List, ListItem, ListItemText, ListItemIcon, ListItemAvatar, Avatar, ListItemButton, Divider } from '@mui/material'
import { Mail } from '@mui/icons-material'

const MuiList = () => {
  return (
    <Box sx = {{width: "400px", bgcolor: "#efefef", margin: "3rem"}}>
        <List>

            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <ListItemAvatar>
                            <Avatar>
                                    <Mail />
                            </Avatar>
                        </ListItemAvatar>
                    </ListItemIcon>
                    <ListItemText primary = "List item 1" secondary = "Secondary Text" />
                </ListItemButton>
            </ListItem>

            <Divider />

            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <ListItemAvatar>
                            <Avatar>
                                    <Mail />
                            </Avatar>
                        </ListItemAvatar>
                    </ListItemIcon>
                    <ListItemText primary = "List item 2" secondary = "Secondary Text"  />
                </ListItemButton>
            </ListItem>

            <Divider />

            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <ListItemAvatar>
                            <Avatar>
                                    <Mail />
                            </Avatar>
                        </ListItemAvatar>
                    </ListItemIcon>
                    <ListItemText primary = "List item 3" secondary = "Secondary Text"  />
                </ListItemButton>
            </ListItem>

        </List>
    </Box>
  )
}

export default MuiList