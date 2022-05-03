import { Check } from '@mui/icons-material'
import { Snackbar, Button, Box, Alert, AlertProps, AlertTitle } from '@mui/material'
import React, { useState, forwardRef } from 'react'

const SnackbarAlert = forwardRef(
    function SnackbarAlert(props, ref) {
        return <Alert elevation={6} ref = {ref} {...props} />
    }
)

const MuiSnackbar = () => {
    const [open, setOpen] = useState(false)
    const handleClose = (e, reason) => {
        if (reason === "clickaway") {
            return
        }
        setOpen(false)
    }
  return (
    <Box p = "4rem">
        <Button variant = "outlined" onClick={() => setOpen(true)}>Submit</Button>

            {/* <Snackbar 
            message = "Form submitted successfully"
            autoHideDuration={4000} 
            open = {open} 
            onClose = {handleClose} 
            anchorOrigin = {{
                vertical: "bottom",
                horizontal: "left"
            }}
            /> */}

            <Snackbar open = {open} autoHideDuration = {6000} onClose = {handleClose}>
                <SnackbarAlert onClose = {handleClose} severity = "error">
                    Form submitted successfully !
                </SnackbarAlert>
            </Snackbar>

    </Box>
  )
}

export default MuiSnackbar