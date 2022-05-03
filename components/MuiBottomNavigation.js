import React, { useState } from 'react'
import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import { Home } from '@mui/icons-material'
import { Favorite } from '@mui/icons-material'
import { Person } from '@mui/icons-material'

const MuiBottomNavigation = () => {
    const [value, setValue] = useState(0)
  return (
    <BottomNavigation showLabels sx = {{width: "100%", position: "absolute", bottom: 0}}  value = {value} onChange = {(e, newValue) => setValue(newValue)}>
        <BottomNavigationAction label = "Home" icon = {<Home />} />
        <BottomNavigationAction label = "Favorites" icon = {<Favorite />} />
        <BottomNavigationAction label = "Profile" icon = {<Person />} />
        <BottomNavigationAction label = "Home" icon = {<Home />} />
        <BottomNavigationAction label = "Favorites" icon = {<Favorite />} />
        <BottomNavigationAction label = "Profile" icon = {<Person />} />
    </BottomNavigation>
  )
}

export default MuiBottomNavigation