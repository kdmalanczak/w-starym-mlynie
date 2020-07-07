import React from "react"
import Layout from "../components/templates/Layout"
import SEO from "../components/seo"
import News from "../components/templates/News"

const PageIndex = ({ location }) => (
  <Layout location={location}>
    <SEO title="Aktualności" />
    <News />
  </Layout>
)

export default PageIndex
