import React from "react"
import styled from "styled-components"

const RichTextBox = styled.div`
  width: 100%;
  max-width: 900px;
  overflow-wrap: break-word;
  margin: 0 auto;
  padding: 0 10px;
`

const RichText = ({ text }) => {
  return (
    <RichTextBox
      dangerouslySetInnerHTML={{
        __html: text,
      }}
    />
  )
}

export default RichText
