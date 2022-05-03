import React, { useState } from 'react'
import { Stack, TextField } from '@mui/material'
import { DatePicker, TimePicker, DateTimePicker } from '@mui/lab'

//  yarn add date-fns @date-io/date-fns

//  You have to add provider in app.js

const MuiDateTimePicker = () => {
    const [selectedDate, setSelectedDate] = useState(null)
    const [selectedTime, setSelectedTime] = useState(null)
    const [selectedDateTime, setSelectedDateTime] = useState(null)

    console.log({selectedDate})

    console.log({selectedTime})
    console.log({selectedTime: selectedTime && selectedTime.toLocaleTimeString()})

    console.log({selectedDateTime})

  return (
    <Stack spacing = "1rem" sx = {{width: "250px"}} m = "4rem">
        <DatePicker 
        label = "Date Picker" 
        renderInput={(params) => <TextField {...params} />}
        value = {selectedDate}
        onChange = {(newValue) => {
            setSelectedDate(newValue)
        }}
        />

        <TimePicker 
        label = "Time Picker" 
        renderInput={(params) => <TextField {...params} />}
        value = {selectedTime}
        onChange = {(newValue) => {
            setSelectedTime(newValue)
        }}
        />

        <DateTimePicker 
        label = "Date Time Picker" 
        renderInput={(params) => <TextField {...params} />}
        value = {selectedDateTime}
        onChange = {(newValue) => {
            setSelectedDateTime(newValue)
        }}
        />
    </Stack>
  )
}

export default MuiDateTimePicker