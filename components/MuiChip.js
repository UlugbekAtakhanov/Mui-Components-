import React, { useState } from 'react'
import { Stack, Chip, Avatar } from '@mui/material'
import { Face } from '@mui/icons-material'

const MuiChip = () => {
    const [chips, setChips] = useState(["chip1", "chip2", "chip3"])
    const handleDelete = (currentChip) => {
        setChips(chips.filter(chip => chip !== currentChip))
    }
  return (
    <Stack direction = "row" spacing = "1rem" p = "4rem">
        <Chip label = "Chip" />
        <Chip label = "Chip" color = "primary" />
        <Chip label = "Chip" color = "primary" size = "small" />
        <Chip label = "Chip outlined" color = "primary" size = "large" variant = "outlined" />
        <Chip avatar = {<Avatar>V</Avatar>} label = "Chip outlined" color = "primary" size = "large" variant = "outlined" />
        <Chip icon = {<Face />} label = "Chip" color = "primary" />
        <Chip label = "Click" color = "success" onClick = {() => alert("Clicked")} />
        <Chip label = "Delete" color = "error" onClick = {() => alert("Clicked")} onDelete = {() => alert("Delete handler called")} />

        <Stack>
            {chips.map(chip => (
                <Chip key = {chip} label = {chip} onDelete = {() => handleDelete(chip)} />
            ))}
        </Stack>
    </Stack>
  )
}

export default MuiChip