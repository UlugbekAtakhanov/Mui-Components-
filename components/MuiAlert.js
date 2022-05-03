import React from 'react'
import { Alert, Stack, AlertTitle, Button } from '@mui/material'
import { Check } from '@mui/icons-material'


const MuiAlert = () => {
  return (
    <Stack spacing = "2rem" p = "4rem">
        <Alert severity = "error">This is an error alert</Alert>
        <Alert severity = "warning">This is an warning alert</Alert>
        <Alert severity = "success">This is an success alert</Alert>
        <Alert severity = "info">This is an info alert</Alert>

        <Alert variant = "outlined" severity = "error">This is an error alert</Alert>
        <Alert variant = "outlined" severity = "warning">This is an warning alert</Alert>
        <Alert variant = "outlined" severity = "success">This is an success alert</Alert>
        <Alert variant = "outlined" severity = "info">This is an info alert</Alert>


        <Alert variant = "filled" severity = "error" onClose={() => alert("Close alert")}>
            <AlertTitle>Error</AlertTitle>
            This is an error alert
        </Alert>

        <Alert variant = "filled" severity = "warning">
            <AlertTitle>Warning</AlertTitle>
            This is an warning alert
        </Alert>

        <Alert variant = "filled" severity = "success">
            <AlertTitle>Success</AlertTitle>
            This is an success alert
        </Alert>

        <Alert variant = "filled" severity = "info">
            <AlertTitle>Info</AlertTitle>
            This is an info alert
        </Alert>

        <Alert icon = {<Check />} variant = "filled" severity = "success" action = {<Button size = "small" color = "inherit" onClick = {() => alert("UNDO button")}>UNDO</Button>}>
            <AlertTitle>Success</AlertTitle>
            This is an success alert
        </Alert>

    </Stack>
  )
}

export default MuiAlert