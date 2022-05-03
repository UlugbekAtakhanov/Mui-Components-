import React from 'react'
import { Stack, Link, Typography } from '@mui/material'

const MuiLink = () => {
  return (
    <Stack p = "2rem" direction = "row" spacing = "2rem">
        <Link href = "#">Link</Link>
        <Link href = "#" color = "secondary">Secondary</Link>
        <Link href = "#" underline = "hover">Underline hover</Link>
        <Link href = "#" underline = "none">Underline none</Link>

        <Typography variant = "h6">
            <Link href = "#">Inside Typography</Link>
        </Typography>

        <Link variant = "h4">Without</Link>

    </Stack>
  )
}

export default MuiLink