import React from 'react'
import { SpeedDial, SpeedDialIcon, SpeedDialAction } from '@mui/material'
import { FileCopyOutlined } from '@mui/icons-material'
import { Print } from '@mui/icons-material'
import { Share } from '@mui/icons-material'
import { Edit } from '@mui/icons-material'

const MuiSpeedDial = () => {
  return (
    <SpeedDial
        ariaLabel='Navigation speed dial'
        sx = {{position: "absolute", right: 16, bottom: 16}}
        icon = {<SpeedDialIcon openIcon = {<Edit />} />}
    >
        <SpeedDialAction icon = {<FileCopyOutlined />} tooltipTitle = "Copy" tooltipOpen />
        <SpeedDialAction icon = {<Print />} tooltipTitle = "Print" />
        <SpeedDialAction icon = {<Share />} tooltipTitle = "Share" />
    </SpeedDial>
  )
}

export default MuiSpeedDial