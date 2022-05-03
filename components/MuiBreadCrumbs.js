import React from 'react'
import { Box, Breadcrumbs, Link, Stack, Typography } from '@mui/material'
import { NavigateNext } from '@mui/icons-material'

const MuiBreadCrumbs = () => {
  return (
    <Stack spacing = "2rem" p = "2rem">
        <Breadcrumbs>
            <Link underline = "hover" href = "#">Home</Link>
            <Link underline = "hover" href = "#">Catalog</Link>
            <Link underline = "hover" href = "#">Accessories</Link>
            <Typography color = "text.primary">Shoes</Typography>
        </Breadcrumbs>
        <Breadcrumbs separator = "-">
            <Link underline = "hover" href = "#">Home</Link>
            <Link underline = "hover" href = "#">Catalog</Link>
            <Link underline = "hover" href = "#">Accessories</Link>
            <Typography color = "text.primary">Shoes</Typography>
        </Breadcrumbs>
        <Breadcrumbs separator = {<NavigateNext fontSize='small' />}>
            <Link underline = "hover" href = "#">Home</Link>
            <Link underline = "hover" href = "#">Catalog</Link>
            <Link underline = "hover" href = "#">Accessories</Link>
            <Typography color = "text.primary">Shoes</Typography>
        </Breadcrumbs>
        <Breadcrumbs separator = {<NavigateNext fontSize='small' />} maxItems = {2}>
            <Link underline = "hover" href = "#">Home</Link>
            <Link underline = "hover" href = "#">Catalog</Link>
            <Link underline = "hover" href = "#">Accessories</Link>
            <Typography color = "text.primary">Shoes</Typography>
        </Breadcrumbs>
        <Breadcrumbs separator = {<NavigateNext fontSize='small' />} maxItems = {2} itemsAfterCollapse = {2}>
            <Link underline = "hover" href = "#">Home</Link>
            <Link underline = "hover" href = "#">Catalog</Link>
            <Link underline = "hover" href = "#">Accessories</Link>
            <Typography color = "text.primary">Shoes</Typography>
        </Breadcrumbs>
        <Breadcrumbs separator = {<NavigateNext fontSize='small' />} maxItems = {2} itemsBeforeCollapse = {2}>
            <Link underline = "hover" href = "#">Home</Link>
            <Link underline = "hover" href = "#">Catalog</Link>
            <Link underline = "hover" href = "#">Accessories</Link>
            <Typography color = "text.primary">Shoes</Typography>
        </Breadcrumbs>
    </Stack>
  )
}

export default MuiBreadCrumbs