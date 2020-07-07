import React from "react"
import {
  StyledRoom,
  StyledRoomDefinition,
  StyledImages,
  ButtonLink,
} from "./RoomField.styles"

const RoomField = ({ images, ...props }) => {
  return (
    <StyledRoom>
      <StyledRoomDefinition {...props} />
      <StyledImages>
        {images.slice(0, 6).map((img, i) => (
          <img src={img.fluid.src} alt={img.id} key={i} />
        ))}
      </StyledImages>
      <ButtonLink to="/contact">Zapytaj o dostępność</ButtonLink>
    </StyledRoom>
  )
}

export default RoomField
