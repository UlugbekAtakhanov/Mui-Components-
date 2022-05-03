import React from 'react'
import { TableContainer, Table, TableHead, TableBody, TableCell, Paper, TableRow, Box } from '@mui/material'

const MuiTable = () => {
  return (
    <Box p = "4rem" bgcolor = "#eee" minHeight="100vh">
        <TableContainer component={Paper} sx = {{maxHeight: "400px"}}>
            <Table stickyHeader>

                <TableHead>
                    <TableRow sx = {{bgcolor: "primary"}}>
                        <TableCell>Id</TableCell>
                        <TableCell>First Name</TableCell>
                        <TableCell>Last Name</TableCell>
                        <TableCell align = "center">Email</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    <TableRow>
                        <TableCell>12345678</TableCell>
                        <TableCell>John</TableCell>
                        <TableCell>Doe</TableCell>
                        <TableCell align = "center">johndoe@gmail.com</TableCell>
                    </TableRow>
                </TableBody>

                <TableBody>
                    <TableRow>
                        <TableCell>12345678</TableCell>
                        <TableCell>John</TableCell>
                        <TableCell>Doe</TableCell>
                        <TableCell align = "center">johndoe@gmail.com</TableCell>
                    </TableRow>
                </TableBody>

                <TableBody>
                    <TableRow>
                        <TableCell>12345678</TableCell>
                        <TableCell>John</TableCell>
                        <TableCell>Doe</TableCell>
                        <TableCell align = "center">johndoe@gmail.com</TableCell>
                    </TableRow>
                </TableBody>

                <TableBody>
                    <TableRow>
                        <TableCell>12345678</TableCell>
                        <TableCell>John</TableCell>
                        <TableCell>Doe</TableCell>
                        <TableCell align = "center">johndoe@gmail.com</TableCell>
                    </TableRow>
                </TableBody>

                <TableBody>
                    <TableRow>
                        <TableCell>12345678</TableCell>
                        <TableCell>John</TableCell>
                        <TableCell>Doe</TableCell>
                        <TableCell align = "center">johndoe@gmail.com</TableCell>
                    </TableRow>
                </TableBody>

                <TableBody>
                    <TableRow>
                        <TableCell>12345678</TableCell>
                        <TableCell>John</TableCell>
                        <TableCell>Doe</TableCell>
                        <TableCell align = "center">johndoe@gmail.com</TableCell>
                    </TableRow>
                </TableBody>

                <TableBody>
                    <TableRow>
                        <TableCell>12345678</TableCell>
                        <TableCell>John</TableCell>
                        <TableCell>Doe</TableCell>
                        <TableCell align = "center">johndoe@gmail.com</TableCell>
                    </TableRow>
                </TableBody>

                <TableBody>
                    <TableRow>
                        <TableCell>12345678</TableCell>
                        <TableCell>John</TableCell>
                        <TableCell>Doe</TableCell>
                        <TableCell align = "center">johndoe@gmail.com</TableCell>
                    </TableRow>
                </TableBody>

                <TableBody>
                    <TableRow>
                        <TableCell>12345678</TableCell>
                        <TableCell>John</TableCell>
                        <TableCell>Doe</TableCell>
                        <TableCell align = "center">johndoe@gmail.com</TableCell>
                    </TableRow>
                </TableBody>

                <TableBody>
                    <TableRow>
                        <TableCell>12345678</TableCell>
                        <TableCell>John</TableCell>
                        <TableCell>Doe</TableCell>
                        <TableCell align = "center">johndoe@gmail.com</TableCell>
                    </TableRow>
                </TableBody>

            </Table>
        </TableContainer>
    </Box>
  )
}

export default MuiTable