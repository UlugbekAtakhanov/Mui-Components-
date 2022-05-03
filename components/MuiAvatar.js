import { Stack, Avatar, AvatarGroup } from '@mui/material'
import React from 'react'

const MuiAvatar = () => {
  return (
    <Stack spacing = "2rem" p = "4rem">
        <Stack direction = "row" spacing = "1rem">
            <Avatar sx = {{backgroundColor: "primary.light"}}>BW</Avatar>
            <Avatar  sx = {{backgroundColor: "secondary.light"}}>CK</Avatar>
        </Stack>    
        <Stack direction = "row" spacing = "1rem">
            <AvatarGroup>
                <Avatar sx = {{backgroundColor: "primary.light"}}>BW</Avatar>
                <Avatar  sx = {{backgroundColor: "secondary.light"}}>CK</Avatar>
                <Avatar src = "https://randomuser.me/api/portraits/women/79.jpg" alt = "jane" />
                <Avatar src = "https://randomuser.me/api/portraits/women/51.jpg" alt = "jane" />
            </AvatarGroup>
        </Stack>    
        <Stack direction = "row" spacing = "1rem" >
            <AvatarGroup max = {3}>
                <Avatar sx = {{backgroundColor: "primary.light"}}>BW</Avatar>
                <Avatar  sx = {{backgroundColor: "secondary.light"}}>CK</Avatar>
                <Avatar src = "https://randomuser.me/api/portraits/women/79.jpg" alt = "jane" />
                <Avatar src = "https://randomuser.me/api/portraits/women/51.jpg" alt = "jane" />
            </AvatarGroup>
        </Stack>    
          <Stack direction = "row" spacing = "1rem">
            <Avatar variant = "square" sx = {{backgroundColor: "primary.light", width: 48, height: 48}}>BW</Avatar>
            <Avatar variant = "rounded"  sx = {{backgroundColor: "secondary.light", width: 48, height: 48}}>CK</Avatar>
            <Avatar  sx = {{backgroundColor: "secondary.light", width: 48, height: 48}}>CK</Avatar>
        </Stack>    
    </Stack>
  )
}

export default MuiAvatar