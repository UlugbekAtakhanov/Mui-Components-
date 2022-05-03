import React from 'react'
import { Tooltip, IconButton, Box } from '@mui/material'
import { Delete } from '@mui/icons-material'

const MuiTooltip = () => {
  return (
      <Box p = "4rem">
        <Tooltip title = "Delete" placement = "right-start" arrow enterDelay={500} leaveDelay = {200}>
            <IconButton>
                <Delete />
            </IconButton>
        </Tooltip>
      </Box>
  )
}

export default MuiTooltip