import React from 'react'
import { Box, Paper, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material'
import { Masonry } from '@mui/lab'
import { ExpandMore } from '@mui/icons-material'

const heights = [150, 30, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80]

const MuiMasonry = () => {
  return (
      <>
        <Box sx = {{width: "500px", minHeight: "400px", m: "4rem"}}>
            <Masonry columns = {4} spacing = {1}>
                {heights.map((height, index) => (
                    <Paper key = {index} sx = {{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height, border: "1px solid"}}
                    >
                    {index + 1}
                    </Paper>
                ))}
            </Masonry>
        </Box>

        <Box sx = {{width: "500px", minHeight: "400px", m: "4rem"}}>
            <Masonry columns = {4} spacing = {1}>
                {heights.map((height, index) => (
                    <Paper key = {index} sx = {{
                        border: "1px solid"}}
                    >
                        <Accordion sx = {{minHeight: height}}>
                            <AccordionSummary expandIcon = {<ExpandMore />}>
                                <Typography>Accordion {index + 1}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                Content
                            </AccordionDetails>
                        </Accordion>
                    </Paper>
                ))}
            </Masonry>
        </Box>
    </>
  )
}

export default MuiMasonry