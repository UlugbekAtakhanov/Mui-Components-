import React from 'react'
import { Stack, Badge } from '@mui/material'
import { Mail } from '@mui/icons-material'

const MuiBadge = () => {
  return (
    <Stack spacing = "1rem" direction = "row" p = "4rem">
        <Badge showZero badgeContent = {0} color = "primary">
            <Mail fontSize='large' />
        </Badge>
        <Badge badgeContent = {5} color = "primary">
            <Mail fontSize='large' />
        </Badge>
        <Badge badgeContent = {5} color = "error">
            <Mail fontSize='large' />
        </Badge>
        <Badge badgeContent = {200} color = "error">
            <Mail fontSize='large' />
        </Badge>
        <Badge max={999} badgeContent = {200} color = "error">
            <Mail fontSize='large' />
        </Badge>

        <Badge  variant = "dot" color = "primary">
            <Mail fontSize='large' />
        </Badge>
        <Badge invisible = {true}  variant = "dot" color = "primary">
            <Mail fontSize='large' />
        </Badge>

    </Stack>
  )
}

export default MuiBadge