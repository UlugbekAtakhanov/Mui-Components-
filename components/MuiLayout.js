import { Box, Stack, Divider, Grid, Paper } from '@mui/material'
import React from 'react'


const MuiLayout = () => {
  return (
      <Box p = "2rem" bgcolor="#eee">
        <Paper sx = {{padding: "2rem"}} elevation = {2}>

            {/* //   it is instead div tag and is for CSS writing  */}
            <Box>box</Box>

            <Box>
                <Box component = "span">span</Box>
                <Box component = "span">span</Box>
            </Box>

            <Box component = "article">box</Box>

            {/* //   it is a div element with display:flex; and flex-direction: column;  */}
            <Stack sx = {{border: "1px solid blue"}} direction = "row" spacing = "2rem" divider = {<Divider orientation = "vertical" flexItem />}>
                <Box sx = {{
                    backgroundColor: "primary.main",
                    color: "white",
                    width: "100px",
                    height: "100px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems:"center",
                    cursor: "pointer",
                    border: "3px solid black",
                    "&:hover": {
                        backgroundColor: "primary.light"
                    }
                }}>stying</Box>

                <Box
                    display = "flex"
                    width = "100px"
                    height = "100px"
                    bgcolor = "success.main"
                    justifyContent="center"
                    alignItems = "center"
                    border = "5px solid"
                    borderColor="red"
                >a</Box>
            </Stack>

            <Stack mt = "2rem" sx = {{border: "1px solid blue"}} spacing = "2rem" divider = {<Divider />}>
                <Box sx = {{
                    backgroundColor: "primary.main",
                    color: "white",
                    width: "100px",
                    height: "100px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems:"center",
                    cursor: "pointer",
                    border: "3px solid black",
                    "&:hover": {
                        backgroundColor: "primary.light"
                    }
                }}>stying</Box>

                <Box
                    display = "flex"
                    width = "100px"
                    height = "100px"
                    bgcolor = "success.main"
                    justifyContent="center"
                    alignItems = "center"
                    border = "5px solid"
                    borderColor="red"
                >a</Box>
            </Stack>


            <Grid container my = "2rem" rowSpacing={2} columnSpacing = {2}> 
                <Grid item xs = {12} sm = {6} md = {4} lg = {3}      border = "1px solid white">
                    <Box  p = "1rem"  bgcolor="primary.light">Item 1</Box>
                </Grid>
                <Grid item xs = {12} sm = {6} md = {4} lg = {3}      border = "1px solid white">
                    <Box  p = "1rem"  bgcolor="primary.light">Item 2</Box>
                </Grid>
                <Grid item xs = {12} sm = {6} md = {4} lg = {3}      border = "1px solid white">
                    <Box  p = "1rem"  bgcolor="primary.light">Item 3</Box>
                </Grid>
                <Grid item xs = {12} sm = {6} md = {4} lg = {3}      border = "1px solid white">
                    <Box  p = "1rem"  bgcolor="primary.light">Item 4</Box>
                </Grid>
            </Grid>

                {/* 1fr  == same width in all items  */}
            <Grid container my = "2rem" border = "1px solid" > 
                <Grid item xs     border = "1px solid white">
                    <Box  p = "1rem"  bgcolor="primary.light">Item 1</Box>
                </Grid>
                <Grid item xs     border = "1px solid white">
                    <Box  p = "1rem"  bgcolor="primary.light">Item 2</Box>
                </Grid>
                <Grid item xs     border = "1px solid white">
                    <Box  p = "1rem"  bgcolor="primary.light">Item 3</Box>
                </Grid>
                <Grid item xs     border = "1px solid white">
                    <Box  p = "1rem"  bgcolor="primary.light">Item 4</Box>
                </Grid>
            </Grid>

                {/* auto  == takes necessary width  */}
            <Grid container my = "2rem" border = "1px solid" > 
                <Grid item xs     border = "1px solid white">
                    <Box  p = "1rem"  bgcolor="primary.light">Item 1</Box>
                </Grid>
                <Grid item xs = "auto"     border = "1px solid white">
                    <Box  p = "1rem"  bgcolor="primary.light">Item 2</Box>
                </Grid>
                <Grid item xs     border = "1px solid white">
                    <Box  p = "1rem"  bgcolor="primary.light">Item 3</Box>
                </Grid>
                <Grid item xs     border = "1px solid white">
                    <Box  p = "1rem"  bgcolor="primary.light">Item 4</Box>
                </Grid>
            </Grid>



        </Paper>
    </Box>
  )
}

export default MuiLayout