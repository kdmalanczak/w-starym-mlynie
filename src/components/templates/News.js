import React from "react"
import FrontSection from "../organisms/FrontSection/FrontSection"
import { graphql, useStaticQuery } from "gatsby"
import Section from "../organisms/Section/Section"
import NewsBox from "../molecules/News/News"

const News = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "radio.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      allContentfulNews(sort: { fields: publishDate }) {
        edges {
          node {
            childContentfulNewsTextRichTextNode {
              childContentfulRichText {
                html
              }
            }
            publishDate(formatString: "DD.MM.YYYY")
            title
            image {
              fluid {
                src
              }
            }
          }
        }
      }
    }
  `)

  const news = data.allContentfulNews.edges

  return (
    <>
      <FrontSection
        img={data.file.childImageSharp.fluid}
        title="Aktualne Informacje"
      />
      {news
        .slice(0)
        .reverse()
        .map((item, i) => (
          <Section key={i} title={item.node.title}>
            <NewsBox
              date={item.node.publishDate}
              image={item.node.image.fluid.src}
              key={i}
              dangerouslySetInnerHTML={{
                __html:
                  item.node.childContentfulNewsTextRichTextNode
                    .childContentfulRichText.html,
              }}
            />
          </Section>
        ))}
    </>
  )
}

export default News
