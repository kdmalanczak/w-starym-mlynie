import React from "react"
import FrontSection from "../organisms/FrontSection/FrontSection"
import { graphql, useStaticQuery } from "gatsby"
import Section from "../organisms/Section/Section"
import RestaurantPhotoField from "../molecules/RestaurantPhotoField/RestaurantPhotoField"

const Restaurant = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "restaurant1.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      contentfulRestaurant {
        title
        childContentfulRestaurantTextRichTextNode {
          childContentfulRichText {
            html
          }
        }
      }
      contentfulRestaurantPhotos {
        title
        photos {
          fluid(quality: 100, maxWidth: 300) {
            src
          }
        }
      }
    }
  `)

  return (
    <>
      <FrontSection img={data.file.childImageSharp.fluid} title="Restauracja" />
      <Section
        title={data.contentfulRestaurant.title}
        text={
          data.contentfulRestaurant.childContentfulRestaurantTextRichTextNode
            .childContentfulRichText.html
        }
      />
      <Section title={data.contentfulRestaurantPhotos.title}>
        <RestaurantPhotoField images={data.contentfulRestaurantPhotos.photos} />
      </Section>
    </>
  )
}

export default Restaurant
