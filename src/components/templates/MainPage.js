import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import FrontSection from "../organisms/FrontSection/FrontSection"
import Section from "../organisms/Section/Section"
import Partners from "../organisms/Partners/Partners"
import Video from "../atoms/Video"
import GoogleMap from "../atoms/GoogleMap"

const MainPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "mill.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      contentfulAboutUs {
        title
        childContentfulAboutUsTextRichTextNode {
          childContentfulRichText {
            html
          }
        }
      }
      contentfulEvent {
        title
        videoTitle
        youtubeLink
        childContentfulEventTextRichTextNode {
          childContentfulRichText {
            html
          }
        }
      }
    }
  `)
  const aboutUs = data.contentfulAboutUs
  const events = data.contentfulEvent

  return (
    <>
      <FrontSection
        img={data.file.childImageSharp.fluid}
        front
        title="W Starym Młynie"
      />
      <Section
        title={aboutUs.title}
        text={
          aboutUs.childContentfulAboutUsTextRichTextNode.childContentfulRichText
            .html
        }
      />
      <Section
        title={events.title}
        text={
          events.childContentfulEventTextRichTextNode.childContentfulRichText
            .html
        }
      >
        {events.youtubeLink && (
          <Video
            videoSrcURL={events.youtubeLink}
            videoTitle={events.videoTitle}
          />
        )}
      </Section>
      <Section title="Polecamy">
        <Partners />
      </Section>
      <Section title="Gdzie się znajdujemy?">
        <GoogleMap />
      </Section>
    </>
  )
}

export default MainPage
