import { Stack, CircularProgress, LinearProgress } from '@mui/material'
import React from 'react'

const MuiProgress = () => {
  return (
    <Stack spacing = "1rem" p = "4rem">
        <CircularProgress />
        <CircularProgress color = "error" />
        <CircularProgress color = "success" />

        <CircularProgress variant = "determinate" value={60} />

        <LinearProgress />
        <LinearProgress color = "error" />
        <LinearProgress color = "success" />

        <LinearProgress variant = "determinate" value={60} />


    </Stack>
  )
}

export default MuiProgress