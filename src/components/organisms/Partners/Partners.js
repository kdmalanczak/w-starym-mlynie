import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Partner from "../../molecules/Partner/Partner"
import { PartnersBox } from "./Partners.styles"

const Partners = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPartner {
        edges {
          node {
            link
            photo {
              fixed(quality: 100, width: 250) {
                src
              }
            }
          }
        }
      }
    }
  `)
  const partners = data.allContentfulPartner.edges.filter(
    el => el.node.photo.fixed !== null
  )

  return (
    <PartnersBox>
      {partners.map((elem, i) => (
        <Partner
          key={i}
          image={elem.node.photo.fixed.src}
          link={elem.node.link}
        />
      ))}
    </PartnersBox>
  )
}

export default Partners
