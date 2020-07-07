import React from "react"
import { PartnerBox } from "./Partner.styles"

const Partner = ({ image, link }) => {
  return (
    <PartnerBox>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={image} alt={link} />
      </a>
    </PartnerBox>
  )
}

export default Partner
