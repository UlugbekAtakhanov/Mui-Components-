import React, { useState } from 'react'
import { Stack, TextField, InputAdornment } from '@mui/material'

import SearchIcon from '@mui/icons-material/Search';

const MuiTextField = () => {
  const [value, setValue] = useState("")

  return (
    <Stack spacing = "2rem" padding = "2rem">

      <Stack spacing = {4} direction = "row">
        {/* TextField is like inputs */}
        <TextField label = "name">default</TextField>
        <TextField label = "name" variant = "outlined"></TextField>
        <TextField label = "name" variant = "filled"></TextField>
        <TextField label = "name" variant = "standard"></TextField>
      </Stack>

      <Stack direction = "row">
        <TextField label = "small and secondary" size = "small" color = "secondary"></TextField>
      </Stack>

      <Stack direction="row" spacing = {2}>
        <TextField label = "Required Field" required></TextField>
        <TextField label = "Helper Text" helperText = "it is a helper text in small font-size"></TextField>
        <TextField label = "Password" type = "password" color = "success"></TextField>
        <TextField label = "Disabled" type = "password" color = "success" disabled></TextField>
      </Stack>

      <Stack direction="row" spacing = {2}>

        <TextField label = "Amount" InputProps={{
          startAdornment: <InputAdornment position = "start">$</InputAdornment>,
        }}></TextField>

        <TextField label = "Weight" InputProps = {{
          endAdornment: <InputAdornment position = "end">kg</InputAdornment>
        }}></TextField>

        <TextField label = "search" InputProps={{
          startAdornment: <InputAdornment position = "start"><SearchIcon /></InputAdornment>
        }}></TextField>

        <TextField label = "Error" type = "password" error = {!value} helperText = {!value ? "Required" : "Do not share your password"} onChange = {e => setValue(e.target.value)}></TextField>

      </Stack>


    </Stack>
  )
}

export default MuiTextField