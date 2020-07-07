import React from "react"
import { PhotosField, Photo } from "./RestaurantPhotoField.styles"

const RestaurantPhotoField = ({ images }) => (
  <PhotosField>
    {images.map((photo, i) => (
      <Photo src={photo.fluid.src} alt={photo.fluid.src} key={i} />
    ))}
  </PhotosField>
)

export default RestaurantPhotoField
