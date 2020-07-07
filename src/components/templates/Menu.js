import React from "react"
import FrontSection from "../organisms/FrontSection/FrontSection"
import { graphql, useStaticQuery } from "gatsby"
import Section from "../organisms/Section/Section"
import CategoriesField from "../molecules/CategoryField/CategoryField.js"

const Menu = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "danie1.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      allContentfulMenuCategory {
        edges {
          node {
            title
            childContentfulMenuCategoryProductsRichTextNode {
              childContentfulRichText {
                html
              }
            }
          }
        }
      }
    }
  `)

  const categories = data.allContentfulMenuCategory.edges

  return (
    <>
      <FrontSection img={data.file.childImageSharp.fluid} title="Nasze Menu" />
      {categories.map((category, i) => (
        <Section key={i} title={category.node.title}>
          <CategoriesField
            key={i}
            dangerouslySetInnerHTML={{
              __html:
                category.node.childContentfulMenuCategoryProductsRichTextNode
                  .childContentfulRichText.html,
            }}
          />
        </Section>
      ))}
    </>
  )
}

export default Menu
