import React, { useState } from 'react'
import { Box, Stack, TextField, MenuItem } from '@mui/material'

const MuiSelect = () => {
    const [country, setCountry] = useState("")
    const [countries, setCountries] = useState([])
    const handleChangeCountry = (e) => {
        setCountry(e.target.value)
    }
    console.log({country})

    const handleChangeCountries = (e) => {
        const value = e.target.value
        setCountries(value)
    }
    console.log({countries})
  return (
    <div>

        <Box margin = "2rem" width = "250px">
            <TextField fullWidth label = "Select country" select onChange={handleChangeCountry} value = {country}>
                <MenuItem value = "US">USA</MenuItem>
                <MenuItem value = "UK">United Kingdom</MenuItem>
                <MenuItem value = "SW">Switzerland</MenuItem>
            </TextField>
        </Box>

        {/* Multiple selecting */}
        <Box margin = "2rem" width = "250px">
            <TextField SelectProps={{
                multiple: true
            }} fullWidth label = "Select multiple countries" select onChange={handleChangeCountries} value = {countries}>
                <MenuItem value = "US">USA</MenuItem>
                <MenuItem value = "UK">United Kingdom</MenuItem>
                <MenuItem value = "SW">Switzerland</MenuItem>
            </TextField>
        </Box>

        <Box margin = "2rem" width = "250px">
            <TextField SelectProps={{
                multiple: true
            }}
            error = {!countries.length}
            value = {countries}
            onChange={handleChangeCountries}
            helperText = {!countries.length ? "Required" : []}
            fullWidth label = "Select multiple countries" select>
                <MenuItem value = "US">USA</MenuItem>
                <MenuItem value = "UK">United Kingdom</MenuItem>
                <MenuItem value = "SW">Switzerland</MenuItem>
            </TextField>
        </Box>

    </div>
  )
}

export default MuiSelect