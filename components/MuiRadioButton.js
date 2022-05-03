import { Box, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, Stack, FormHelperText } from '@mui/material'
import React, { useState } from 'react'

const MuiRadioButton = () => {
    const [value, setValue] = useState("")
    const handleChange = (e) => {
        setValue(e.target.value)
    }
    console.log({value})
  return (
    <Stack spacing = "2rem" margin = "2rem">

        <FormControl id = "id">
            <FormLabel>
                Years of experience
            </FormLabel>
            <RadioGroup name = "job-experience-group" value = {value} onChange={handleChange}>
                <FormControlLabel control = {<Radio />} label = "0-2" value = "0-2" />
                <FormControlLabel control = {<Radio />} label = "3-5" value = "3-5" />
                <FormControlLabel control = {<Radio />} label = "6-10" value = "6-10" />
            </RadioGroup>
        </FormControl>

        {/* in a row */}
        <FormControl id = "id1" error>
            <FormLabel>
                Years of experience
            </FormLabel>
            <RadioGroup row name = "job-experience-group" value = {value} onChange={handleChange}>
                <FormControlLabel control = {<Radio color = "secondary" size = "small" />} label = "0-2" value = "0-2" />
                <FormControlLabel control = {<Radio color = "warning" size = "medium"  />} label = "3-5" value = "3-5" />
                <FormControlLabel control = {<Radio color = "error" size = "large"  />} label = "6-10" value = "6-10" />
            </RadioGroup>
            <FormHelperText>Invalid selection</FormHelperText>
        </FormControl>

    </Stack>
  )
}

export default MuiRadioButton