import React from 'react'
import { Stack } from '@mui/material'
import {LoadingButton} from "@mui/lab"
import { Save } from '@mui/icons-material'



// yarn add @mui/lab


const MuiLoadingButton = () => {
  return (
    <Stack spacing = "1rem" direction = "row" m = "4rem">

        <LoadingButton variant = "outlined">Submit</LoadingButton>
        <LoadingButton loading variant = "outlined">Submit</LoadingButton>

        <LoadingButton loadingIndicator = "Loading..." variant = "outlined">Fetch data</LoadingButton>
        <LoadingButton loading loadingIndicator = "Loading..." variant = "outlined">Fetch data</LoadingButton>

        <LoadingButton loadingPosition='start' startIcon = {<Save />} variant = "outlined">Fetch data</LoadingButton>
        <LoadingButton loading loadingPosition='start' startIcon = {<Save />} variant = "outlined">Fetch data</LoadingButton>

    </Stack>
  )
}

export default MuiLoadingButton