import { Skeleton, Stack, Box, Avatar, Typography } from '@mui/material'
import React, {useState, useEffect} from 'react'
import Image from 'next/image';

const MuiSkeleton = () => {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000);
    }, [])
  return (
    <Stack spacing = ".5rem" width = "250px" m = "4rem" >
        <Skeleton variant = "circular" width = "4rem" height = "4rem" />
        <Skeleton variant = "text" />
        <Skeleton variant = "rectangular" height = "8rem" />

        <Skeleton animation = "wave" variant = "circular" width = "4rem" height = "4rem" />
        <Skeleton animation = "wave" variant = "text" />
        <Skeleton animation = "wave" variant = "rectangular" height = "8rem" />

        <Skeleton animation = {false} variant = "circular" width = "4rem" height = "4rem" />
        <Skeleton animation = {false} variant = "text" />
        <Skeleton animation = {false} variant = "rectangular" height = "8rem" />

        <Box sx = {{width: "250px"}}>
            {loading? (
                <Skeleton variant = 'rectangular' width = {256} height = {144} animation = "wave" />
            ) : (
                <Box sx = {{position: "relative", width: "256px", height: "144px"}}>
                    <Image src = "https://source.unsplash.com/random/256x144" layout='fill' objectFit='cover' />
                </Box>
            )}
            <Stack direction = "row" alignItems = "center" spacing = ".5rem" sx = {{width: "100%", marginTop: "12px"}}>
                {loading ? (
                    <Skeleton variant = "circular" width = {40} height = {40} animation = "wave" /> 
                ) : (
                    <Avatar>V</Avatar>
                )}
                <Stack sx = {{width: "80%"}}>
                    {loading ? (
                        <>
                            <Typography variant = "body1">
                                <Skeleton width = "100%" animation = "wave" />
                            </Typography>
                            <Typography variant = "body2">
                                <Skeleton width = "100%" animation = "wave" />
                            </Typography>
                        </>
                    ) : (
                          <>
                            <Typography variant = "body1">
                                React MUI Tutorial
                            </Typography>
                        </>
                    )}
                </Stack>
            </Stack>
        </Box>

    </Stack>
  )
}

export default MuiSkeleton