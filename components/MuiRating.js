import React, { useState } from 'react'
import { Rating, Stack } from '@mui/material'

import { Favorite } from '@mui/icons-material'
import { FavoriteBorder } from '@mui/icons-material'

const MuiRating = () => {
    const [value, setValue] = useState(null)
    const handleRating = (_, value) => {
        setValue(value)
    }
    console.log({value})
  return (
    <Stack margin ="2rem" spacing="2rem">

        <Rating value={value} onChange = {handleRating} />

        {/* 0.5 */}
        <Rating value={value} onChange = {handleRating} precision = {0.5} />

        <Rating value={value} onChange = {handleRating} precision = {0.5} size= "small" />
        <Rating value={value} onChange = {handleRating} precision = {0.5} size= "medium" />
        <Rating value={value} onChange = {handleRating} precision = {0.5} size= "large" />


        {/* another icon */}
        <Rating icon = {<Favorite color = "error" />} emptyIcon = {<FavoriteBorder />} value={value} onChange = {handleRating} precision = {0.5} size= "large" />
        
        {/* Read only */}
        <Rating readOnly icon = {<Favorite color = "error" />} emptyIcon = {<FavoriteBorder />} value={3} precision = {0.5} size= "large" />
        
        {/* highlight selected icon */}
        <Rating highlightSelectedOnly icon = {<Favorite color = "error" />} emptyIcon = {<FavoriteBorder />} value={value} onChange = {handleRating} precision = {0.5} size= "large" />



    </Stack>
  )
}

export default MuiRating