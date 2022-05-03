import React, { useState } from 'react'
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box } from '@mui/material'
import { ExpandMore } from '@mui/icons-material'

const MuiAccordion = () => {
  const [expanded, setExpanded] = useState(false)
  const handleChange = (isExpanded, panelId) => {
    setExpanded(isExpanded ? panelId : false)
  }
  return (
    <Box height="100vh" bgcolor="#eee" p="4rem">
      <Accordion expanded = {expanded === "panel1"} onChange = {(_, isExpanded) => handleChange(isExpanded, "panel1")}>
        <AccordionSummary id = "panel1-header" expandIcon = {<ExpandMore />}>
          <Typography>
            Accordion 1
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum delectus facilis, labore necessitatibus eaque corporis. Consequatur at, praesentium aperiam neque maiores fuga error, ullam exercitationem voluptate quae laudantium! Exercitationem, eius!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded = {expanded === "panel2"} onChange = {(_, isExpanded) => handleChange(isExpanded, "panel2")}>
        <AccordionSummary id = "panel2-header" expandIcon = {<ExpandMore />}>
          <Typography>
            Accordion 2
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum delectus facilis, labore necessitatibus eaque corporis. Consequatur at, praesentium aperiam neque maiores fuga error, ullam exercitationem voluptate quae laudantium! Exercitationem, eius!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion  expanded = {expanded === "panel3"} onChange = {(_, isExpanded) => handleChange(isExpanded, "panel3")}>
        <AccordionSummary id = "panel3-header" expandIcon = {<ExpandMore />}>
          <Typography>
            Accordion 3
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum delectus facilis, labore necessitatibus eaque corporis. Consequatur at, praesentium aperiam neque maiores fuga error, ullam exercitationem voluptate quae laudantium! Exercitationem, eius!
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}

export default MuiAccordion