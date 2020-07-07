import React from "react"
import FrontSection from "../organisms/FrontSection/FrontSection"
import { graphql, useStaticQuery } from "gatsby"
import Section from "../organisms/Section/Section"
import RoomField from "../molecules/RoomField/RoomField"

const GuestHouse = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "pensjonat2.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      allContentfulRoom(sort: { fields: roomNumber }) {
        edges {
          node {
            title
            childContentfulRoomDefinitionRichTextNode {
              childContentfulRichText {
                html
              }
            }
            photos {
              fluid(quality: 100, maxWidth: 300) {
                src
              }
            }
          }
        }
      }
    }
  `)

  const rooms = data.allContentfulRoom.edges

  return (
    <>
      <FrontSection img={data.file.childImageSharp.fluid} title="Pensjonat" />
      {rooms.map((room, i) => (
        <Section title={room.node.title} key={i} left>
          <RoomField
            images={room.node.photos}
            dangerouslySetInnerHTML={{
              __html:
                room.node.childContentfulRoomDefinitionRichTextNode
                  .childContentfulRichText.html,
            }}
          />
        </Section>
      ))}
    </>
  )
}

export default GuestHouse
