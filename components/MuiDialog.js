import React, { useState } from 'react'
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Box } from '@mui/material'

const MuiDialog = () => {
    const [open, setOpen] = useState(false)
  return (
    <Box p = "4rem">
        <Button onClick = {() => setOpen(true)}>open dialog</Button>

        <Dialog open = {open} onClose = {() => setOpen(false)} aria-labelledby='"dialog-title' aria-describedby='dialog-description'>

            <DialogTitle id = "dialog-title">Submit the test ?</DialogTitle>

            <DialogContent>
                <DialogContentText id = "dialog-description">
                    Are you sure you want to submit the test? You will not be able to edit after submitting
                </DialogContentText>
            </DialogContent>

            <DialogActions>
                <Button onClick={() => setOpen(false)}>Cancel</Button>
                <Button onClick={() => setOpen(false)} autoFocus>Submit</Button>
            </DialogActions>

        </Dialog>
    </Box>
  )
}

export default MuiDialog