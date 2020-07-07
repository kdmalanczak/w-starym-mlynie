import React from "react"
import FrontSection from "../organisms/FrontSection/FrontSection"
import { graphql, useStaticQuery } from "gatsby"
import Section from "../organisms/Section/Section"

const GuestHouse = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "kontakt1.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      contentfulContact {
        title
        childContentfulContactTextRichTextNode {
          childContentfulRichText {
            html
          }
        }
      }
    }
  `)

  return (
    <>
      <FrontSection img={data.file.childImageSharp.fluid} title="Kontakt" />
      <Section
        title={data.contentfulContact.title}
        text={
          data.contentfulContact.childContentfulContactTextRichTextNode
            .childContentfulRichText.html
        }
      />
    </>
  )
}

export default GuestHouse
