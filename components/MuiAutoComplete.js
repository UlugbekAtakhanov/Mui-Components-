import { Stack, Autocomplete, TextField } from '@mui/material'
import React, { useState } from 'react'

const skills = ["html", "css", "javascript", "react", "next.js"]

const skillsOptions = skills.map((skill, index) => ({id: index + 1, label: skill}))

const MuiAutoComplete = () => {
    const [value, setValue] = useState(null)
    const [skillsObject, setSkillsObject] = useState(null)
    console.log({value})
    console.log({skillsObject})
  return (
    <Stack spacing = "2rem" width = "250px" margin = "2rem">
        
        <Autocomplete options = {skills} renderInput = {(params) => <TextField {...params} label = "skills" />} value = {value} onChange = {(_, newValue) => setValue(newValue)} />

        {/* another value */}
        <Autocomplete freeSolo options = {skills} renderInput = {(params) => <TextField {...params} label = "skills" />} value = {value} onChange = {(_, newValue) => setValue(newValue)} />
        
        {/* from object */}
        <Autocomplete options = {skillsOptions} renderInput = {(params) => <TextField {...params} label = "skills" />} value = {skillsObject} onChange = {(_, newValue) => setSkillsObject(newValue)} />



    </Stack>
  )
}

export default MuiAutoComplete