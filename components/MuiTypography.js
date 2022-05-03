import React from 'react'
import { Typography } from '@mui/material'

const MuiTypography = () => {
  return (
    <div style = {{padding: "2rem"}}>
      <Typography variant = "h1">this is heading </Typography>
      <Typography variant = "h2">this is heading </Typography>
      <Typography variant = "h3">this is heading </Typography>
      <Typography variant = "h4">this is heading </Typography>
      <Typography variant = "h5">this is heading </Typography>
      <Typography variant = "h6">this is heading </Typography>

      {/* it is also h6 */} <br />
      <Typography variant = "subtitle1">subtitle1 </Typography>
      <Typography variant = "subtitle2">subtitle2 </Typography>

      {/* it is p element */} <br />
      <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam vero aperiam voluptatum obcaecati non esse delectus eos veritatis perferendis necessitatibus pariatur et tempora, quod, tempore maxime quis illo unde molestias. </Typography>
      <Typography variant = "body1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam vero aperiam voluptatum obcaecati non esse delectus eos veritatis perferendis necessitatibus pariatur et tempora, quod, tempore maxime quis illo unde molestias. </Typography>
      <Typography variant = "body2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, fugiat est repellendus fugit natus aperiam labore neque nostrum possimus quas error dolorum quasi nulla ea nihil quisquam, non perferendis beatae. </Typography>

    </div>
  )
}

export default MuiTypography