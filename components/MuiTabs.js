import React, { useState } from 'react'
import { Box, Tab } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Favorite } from '@mui/icons-material'

const MuiTabs = () => {
    const [value, setValue] = useState("1")
    const handleChange = (e, newValue) => {
        setValue(newValue)
    }
  return (
    <Box p = "4rem">
        <TabContext value = {value}>
            <Box sx = {{borderBottom: 1, borderColor: "divider"}}>
                <TabList onChange={handleChange}  textColor = "secondary" indicatorColor = "secondary" centered>
                    <Tab icon = {<Favorite fontSize = "1rem" />} iconPosition = "start" label = "Tab One" value = "1" />
                    <Tab label = "Tab Two" value = "2" disabled />
                    <Tab label = "Tab Three" value = "3" />
                    <Tab label = "Tab Four" value = "4" />
                    <Tab label = "Tab Five" value = "5" />
                    <Tab label = "Tab Six" value = "6" />
                </TabList>
            </Box>
            <TabPanel value = "1">Panel one</TabPanel>
            <TabPanel value = "2">Panel two</TabPanel>
            <TabPanel value = "3">Panel three</TabPanel>
            <TabPanel value = "4">Panel four</TabPanel>
            <TabPanel value = "5">Panel five</TabPanel>
            <TabPanel value = "6">Panel six</TabPanel>
        </TabContext>

        <TabContext value = {value}>
            <Box sx = {{borderBottom: 1, borderColor: "divider", width: "300px", mt: "10rem"}}>
                <TabList onChange={handleChange}  textColor = "secondary" indicatorColor = "secondary" variant = "scrollable" scrollButtons = "auto">
                    <Tab icon = {<Favorite fontSize = "1rem" />} iconPosition = "start" label = "Tab One" value = "1" />
                    <Tab label = "Tab Two" value = "2" disabled />
                    <Tab label = "Tab Three" value = "3" />
                    <Tab label = "Tab Four" value = "4" />
                    <Tab label = "Tab Five" value = "5" />
                    <Tab label = "Tab Six" value = "6" />
                </TabList>
            </Box>
            <TabPanel value = "1">Panel one</TabPanel>
            <TabPanel value = "2">Panel two</TabPanel>
            <TabPanel value = "3">Panel three</TabPanel>
            <TabPanel value = "4">Panel four</TabPanel>
            <TabPanel value = "5">Panel five</TabPanel>
            <TabPanel value = "6">Panel six</TabPanel>
        </TabContext>
    </Box>
  )
}

export default MuiTabs