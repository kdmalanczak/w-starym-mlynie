import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const StyledBackgroundSection = styled(BackgroundImage)`
  height: 100%;
  background-position: center 60%;
  background-repeat: no-repeat;
  background-size: cover;
`
const Background = ({ img }) => {
  return <StyledBackgroundSection fluid={img} />
}

export default Background
