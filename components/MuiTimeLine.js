import React from 'react'
import {Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent} from "@mui/lab"
import { Box } from '@mui/material'

const MuiTimeline = () => {
  return (
      <Box>
        <Timeline>


            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>

                <TimelineContent>
                    City A
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot  />
                    <TimelineConnector />
                </TimelineSeparator>

                <TimelineContent>
                    City B
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                    {/* <TimelineConnector /> */}
                </TimelineSeparator>

                <TimelineContent>
                    City C
                </TimelineContent>
            </TimelineItem>


        </Timeline>



        <Timeline position='left'>


            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot color = "secondary" variant='outlined' />
                    <TimelineConnector />
                </TimelineSeparator>

                <TimelineContent>
                    City A
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot color = "secondary" />
                    <TimelineConnector />
                </TimelineSeparator>

                <TimelineContent>
                    City B
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot color = "secondary" />
                    {/* <TimelineConnector /> */}
                </TimelineSeparator>

                <TimelineContent>
                    City C
                </TimelineContent>
            </TimelineItem>


        </Timeline>




        <Timeline position='alternate'>


            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot color = "secondary" variant='outlined' />
                    <TimelineConnector />
                </TimelineSeparator>

                <TimelineContent>
                    City A
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot color = "secondary" />
                    <TimelineConnector />
                </TimelineSeparator>

                <TimelineContent>
                    City B
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot color = "secondary" />
                    {/* <TimelineConnector /> */}
                </TimelineSeparator>

                <TimelineContent>
                    City C
                </TimelineContent>
            </TimelineItem>


        </Timeline>



        <Timeline position='alternate'>


            <TimelineItem>

                <TimelineOppositeContent color = "text.secondary">
                    09:30 am
                </TimelineOppositeContent>

                <TimelineSeparator>
                    <TimelineDot color = "secondary" variant='outlined' />
                    <TimelineConnector />
                </TimelineSeparator>

                <TimelineContent>
                    City A
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                
                <TimelineOppositeContent color = "text.secondary">
                    10:30 am
                </TimelineOppositeContent>

                <TimelineSeparator>
                    <TimelineDot color = "secondary" />
                    <TimelineConnector />
                </TimelineSeparator>

                <TimelineContent>
                    City B
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                
                <TimelineOppositeContent color = "text.secondary">
                    11:30 am
                </TimelineOppositeContent>

                <TimelineSeparator>
                    <TimelineDot color = "secondary" />
                    {/* <TimelineConnector /> */}
                </TimelineSeparator>

                <TimelineContent>
                    City C
                </TimelineContent>
            </TimelineItem>


        </Timeline>
    </Box>
  )
}

export default MuiTimeline