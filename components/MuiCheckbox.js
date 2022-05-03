import React, { useState } from 'react'
import { Box, FormControlLabel, Checkbox, FormControl, FormLabel, FormGroup } from '@mui/material'

import { BookmarkBorder } from '@mui/icons-material'
import { Bookmark } from '@mui/icons-material'

const MuiCheckbox = () => {
    const [acceptTnc, setAcceptTnc] = useState(false)
    const [skills, setSkills] = useState([])

    const handleChange = (e) => {
        setAcceptTnc(e.target.checked)
    }
    console.log({acceptTnc})

    const handleSkillsChange = (e) => {
        const value = e.target.value
        if (skills.includes(value)) {
            setSkills(skills.filter(skill => skill != value))
        } else {
            setSkills([...skills, value])
        }
    }
    console.log({skills})

  return (
    <Box margin = "2rem">

        <Box>
            <FormControlLabel label = "I accept terms and conditions"
             control = {<Checkbox
             checked = {acceptTnc}
             onChange = {handleChange}
             color = "secondary" size = "small" />} />
            <FormControlLabel label = "I accept terms and conditions" control = {<Checkbox color = "info" size = "medium" />} />
            <FormControlLabel label = "I accept terms and conditions" control = {<Checkbox color = "error" size = "large" />} />
        </Box>

        <Box marginTop="2rem">
            <Checkbox icon = {<BookmarkBorder />} checkedIcon = {<Bookmark />} checked = {acceptTnc} onChange = {handleChange} />
        </Box>

        <Box marginTop="2rem">
            <FormControl>
                <FormLabel>Skills</FormLabel>
                <FormGroup>
                    <FormControlLabel label = "HTML" control = {<Checkbox value = "html" checked = {skills.includes("html")} onChange = {handleSkillsChange} />} />
                    <FormControlLabel label = "CSS" control = {<Checkbox value = "css" checked = {skills.includes("css")} />} onChange = {handleSkillsChange} />
                    <FormControlLabel label = "JavaScript" control = {<Checkbox value = "js" checked = {skills.includes("js")} onChange = {handleSkillsChange} />} />
                </FormGroup>
            </FormControl>
        </Box>

        {/* row */}
        <Box marginTop="2rem">
            <FormControl>
                <FormLabel>Skills</FormLabel>
                <FormGroup row>
                    <FormControlLabel label = "HTML" control = {<Checkbox value = "html" checked = {skills.includes("html")} onChange = {handleSkillsChange} />} />
                    <FormControlLabel label = "CSS" control = {<Checkbox value = "css" checked = {skills.includes("css")} />} onChange = {handleSkillsChange} />
                    <FormControlLabel label = "JavaScript" control = {<Checkbox value = "js" checked = {skills.includes("js")} onChange = {handleSkillsChange} />} />
                </FormGroup>
            </FormControl>
        </Box>

    </Box>
  )
}

export default MuiCheckbox