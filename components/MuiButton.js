import React, { useState } from 'react'
import { Button, Stack, IconButton, ButtonGroup, ToggleButtonGroup, ToggleButton, Typography } from '@mui/material'

import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';

const MuiButton = () => {

    const [formats, setFormats] = useState([])
    const [formats1, setFormats1] = useState(null)

    const handleFormatChange = (e, updatedFormat) => {
        setFormats(updatedFormat)
    }
    
    const handleFormatChange1 = (e, updatedFormat) => {
        setFormats1(updatedFormat)
    }

  return (
    //   Stack is div element, and works as flex
    <Stack paddingBottom = {50}  spacing = "2rem" padding = "2rem">

        <Stack spacing = {2} direction = "row">
            {/* buttons */}
            <Button variant='text'>Text</Button>
            <Button variant = "contained">Contained</Button>
            <Button variant = "outlined">Outlined</Button>

            {/* a element */}
            <Button href = "#">link</Button>
        </Stack>

        <Stack spacing = {2} direction = "row">
            <Button variant = "text" color = "primary">primary</Button>
            <Button variant = "text" color = "secondary">secondary</Button>
            <Button variant = "text" color = "error">error</Button>
            <Button variant = "text" color = "warning">warning</Button>
            <Button variant = "text" color = "info">info</Button>
            <Button variant = "text" color = "success">success</Button>
        </Stack>

        <Stack spacing = {2} direction = "row">
            <Button variant = "contained" color = "primary">primary</Button>
            <Button variant = "contained" color = "secondary">secondary</Button>
            <Button variant = "contained" color = "error">error</Button>
            <Button variant = "contained" color = "warning">warning</Button>
            <Button variant = "contained" color = "info">info</Button>
            <Button variant = "contained" color = "success">success</Button>
        </Stack>

        <Stack spacing = {2} direction = "row">
            <Button variant = "outlined" color = "primary">primary</Button>
            <Button variant = "outlined" color = "secondary">secondary</Button>
            <Button variant = "outlined" color = "error">error</Button>
            <Button variant = "outlined" color = "warning">warning</Button>
            <Button variant = "outlined" color = "info">info</Button>
            <Button variant = "outlined" color = "success">success</Button>
        </Stack>

        <Stack direction = "row" spacing = {2} display = "block">
            <Button variant = "contained" size = "small">small</Button>
            <Button variant = "contained" size = "medium">medium</Button>
            <Button variant = "contained" size = "large">large</Button>
        </Stack>

        <Stack direction = "row" spacing = {2}>

            {/* disable onclick event */}
            <Button variant = "contained" startIcon={<SendIcon />} disableRipple>Send</Button> 

            {/* disable shadow */}
            <Button variant = "contained" endIcon={<SendIcon />} disableElevation>Send</Button>

            <Button variant = "contained" endIcon={<SendIcon />} onClick = {() => alert("Clicked")}>Send</Button>

            <IconButton color = "success" size = "small">
                <SendIcon />
            </IconButton>

        </Stack>

        <Stack spacing = {2} alignItems = "start">

            <ButtonGroup>
                <Button variant = "contained">left</Button>
                <Button variant = "contained">center</Button>
                <Button variant = "contained">right</Button>
            </ButtonGroup>

            <ButtonGroup variant = "contained" >
                <Button>left</Button>
                <Button>center</Button>
                <Button>right</Button>
            </ButtonGroup>

            <ButtonGroup variant = "outlined" color = "success" >
                <Button>left</Button>
                <Button>center</Button>
                <Button>right</Button>
            </ButtonGroup>

            <ButtonGroup orientation='vertical' variant = "contained" color = "secondary" size = "small" >
                <Button>left</Button>
                <Button>center</Button>
                <Button>right</Button>
            </ButtonGroup>

        </Stack>

        <Stack spacing = {6}>
            <ToggleButtonGroup>
                <ToggleButton value = "bold"><FormatBoldIcon/></ToggleButton>
                <ToggleButton value = "italic"><FormatItalicIcon/></ToggleButton>
                <ToggleButton value = "underlined"><FormatUnderlinedIcon/></ToggleButton>
            </ToggleButtonGroup>

            {/* Toggling many choices */}
            <Stack spacing = {1}  alignItems="start">
                <Typography variant = "body2">Many Choices</Typography>
                <ToggleButtonGroup value = {formats} onChange = {handleFormatChange} color = "warning" orientation='vertical' size = "small" >
                    <ToggleButton value = "bold"><FormatBoldIcon/></ToggleButton>
                    <ToggleButton value = "italic"><FormatItalicIcon/></ToggleButton>
                    <ToggleButton value = "underlined"><FormatUnderlinedIcon/></ToggleButton>
                </ToggleButtonGroup>
                <Stack>{JSON.stringify(formats)}</Stack>
            </Stack>

            {/* Toggling one choice */}
            <Stack spacing = {1}  alignItems="start">
                <Typography variant = "body2">One Choice</Typography>
                <ToggleButtonGroup exclusive value = {formats1} onChange = {handleFormatChange1} color = "error"  size = "small" >
                    <ToggleButton value = "bold"><FormatBoldIcon/></ToggleButton>
                    <ToggleButton value = "italic"><FormatItalicIcon/></ToggleButton>
                    <ToggleButton value = "underlined"><FormatUnderlinedIcon/></ToggleButton>
                </ToggleButtonGroup>
                <Stack>{JSON.stringify(formats1)}</Stack>
            </Stack>

        </Stack>

    </Stack>
  )
}

export default MuiButton