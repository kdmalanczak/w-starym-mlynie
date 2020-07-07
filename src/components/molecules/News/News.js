import React from "react"
import { NewsStyledBox, StyledParagraph, NewsBodyBox } from "./News.styles"

const NewsBox = ({ date, image, ...props }) => {
  return (
    <NewsStyledBox>
      <StyledParagraph>Opublikowano: {date}</StyledParagraph>
      <NewsBodyBox>
        <img src={image} alt={`news from ${date}`} />
        <div {...props} />
      </NewsBodyBox>
    </NewsStyledBox>
  )
}

export default NewsBox
