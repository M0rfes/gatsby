import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const StyledHero = ({ img, className, children = null, home = null }) => {
  return (
    //@ts-ignore
    <BackgroundImage
      Tag="section"
      className={className}
      fluid={img}
      home={home}
    >
      {children}
    </BackgroundImage>
  )
}

export default styled(StyledHero)`
  background-position: center;
  background-size: cover;
  opacity: 1 !important;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props =>
    //@ts-ignore
    false
      ? "linear-gradient(rgba(63, 208, 212, 0.7), rgba(0, 0, 0, 0.7))"
      : "none"};
  min-height: ${props =>
    // @ts-ignore
    props.home ? " calc(100vh - 62px)" : "50vh"};
`
